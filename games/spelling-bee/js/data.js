// Data Store, Word Difficulty Engine, Multiple Word Sets & Dual Persistence (LocalStorage + Server Disk)

const STORAGE_KEY = 'beeready_spelling_bee_state_v1';

// Clean and validate an English spelling word (letters only, optional hyphen/apostrophe removed for clean bee spelling)
function normalizeEnglishWord(raw) {
  if (!raw || typeof raw !== 'string') return '';
  return raw
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, '');
}

// Compute Word Length + Character Variety difficulty metrics
function computeWordMetrics(wordStr) {
  const clean = normalizeEnglishWord(wordStr);
  const length = clean.length;
  const uniqueChars = new Set(clean.split('')).size;
  const varietyRatio = length > 0 ? Number((uniqueChars / length).toFixed(2)) : 0;
  // Higher word length and higher character variety produce the highest difficulty score
  const rawScore = Number(((length * 1.25) + (uniqueChars * 1.55)).toFixed(1));
  return {
    length,
    uniqueChars,
    varietyRatio,
    rawScore
  };
}

// Map a rawScore into 1..groupCount using baseline 3rd grade thresholds
function defaultAutoGroupForScore(rawScore, groupCount = 5) {
  // Typical 3rd grade words range from rawScore ~9.0 (3-4 letters) to ~25.0 (10+ letters high variety)
  const minScore = 10.5;
  const maxScore = 23.5;
  const clamped = Math.max(minScore, Math.min(maxScore, rawScore));
  const normalized = (clamped - minScore) / (maxScore - minScore + 0.0001); // 0..1
  const group = Math.floor(normalized * groupCount) + 1;
  return Math.max(1, Math.min(groupCount, group));
}

// Re-assign auto groups across all non-custom-tuned words in a set so they spread evenly by score
function rebalanceSetWords(wordSet) {
  const groupCount = wordSet.groupCount || 5;
  const words = wordSet.words || [];
  if (words.length === 0) return;

  // Update metrics for every word first
  words.forEach((w) => {
    const m = computeWordMetrics(w.word);
    w.length = m.length;
    w.uniqueChars = m.uniqueChars;
    w.rawScore = m.rawScore;
  });

  // Sort all words by rawScore ascending to determine natural quantiles if enough words exist
  const sortedScores = [...words].map((w) => w.rawScore).sort((a, b) => a - b);
  const useQuantiles = words.length >= groupCount * 2;

  words.forEach((w) => {
    let autoGrp = defaultAutoGroupForScore(w.rawScore, groupCount);
    if (useQuantiles) {
      // Find first and last index of this score for stable quantile positioning
      const firstIdx = sortedScores.indexOf(w.rawScore);
      const lastIdx = sortedScores.lastIndexOf(w.rawScore);
      const midRank = (firstIdx + lastIdx) / 2;
      const pct = midRank / Math.max(1, sortedScores.length);
      autoGrp = Math.min(groupCount, Math.max(1, Math.floor(pct * groupCount) + 1));
    }
    w.autoGroup = autoGrp;
    if (!w.isCustomTuned) {
      w.group = autoGrp;
    } else {
      // Clamp custom group if groupCount was reduced
      w.group = Math.min(groupCount, Math.max(1, w.group || autoGrp));
    }
  });
}

function createWordItem(rawWord, customHint = '') {
  const clean = normalizeEnglishWord(rawWord);
  if (!clean || clean.length < 2) return null;
  const m = computeWordMetrics(clean);
  const autoGroup = defaultAutoGroupForScore(m.rawScore, 5);
  return {
    id: 'w_' + clean + '_' + Math.random().toString(36).slice(2, 7),
    word: clean,
    hint: (customHint || '').trim(),
    length: m.length,
    uniqueChars: m.uniqueChars,
    rawScore: m.rawScore,
    autoGroup: autoGroup,
    group: autoGroup,
    isCustomTuned: false
  };
}

function createInitialState() {
  const starterWordsRaw = [
    // Group 1-2 (Shorter / Lower character variety, e.g. double letters or 5 letters)
    "apple", "happy", "water", "paper", "yellow", "balloon",
    "smile", "music", "tiger", "cloud", "train", "plant",
    // Group 2-3 (6-7 letters, moderate variety)
    "rabbit", "pencil", "window", "summer", "winter", "garden",
    "monkey", "planet", "bridge", "castle", "island", "forest",
    // Group 4-5 (7-10 letters, high character variety)
    "dolphin", "whisper", "blanket", "thunder", "captain", "laughter",
    "mountain", "calendar", "treasure", "hospital", "surprise",
    "butterfly", "adventure", "astronaut", "scientist", "strawberry"
  ];

  const challengeWordsRaw = [
    "school", "friend", "holiday", "kitchen", "morning",
    "library", "umbrella", "elephant", "sandwich", "neighbor",
    "chocolate", "celebrate", "important", "beautiful", "knowledge",
    "vegetable", "crocodile", "dangerous", "wonderful", "telescope"
  ];

  const set1 = {
    id: 'set_starter_3rd',
    name: '3rd Grade Spelling Bee — Core List',
    gradeLabel: '3rd Grade • Primary',
    groupCount: 5,
    words: starterWordsRaw.map((w) => createWordItem(w)).filter(Boolean),
    highScores: {
      groups: {},
      mixed: null
    },
    testHistory: []
  };
  rebalanceSetWords(set1);

  const set2 = {
    id: 'set_challenge_3rd',
    name: 'Regional Bee Championship Set',
    gradeLabel: '3rd Grade • Honors',
    groupCount: 5,
    words: challengeWordsRaw.map((w) => createWordItem(w)).filter(Boolean),
    highScores: {
      groups: {},
      mixed: null
    },
    testHistory: []
  };
  rebalanceSetWords(set2);

  return {
    version: 1,
    lang: 'en',
    activeSetId: set1.id,
    sets: [set1, set2],
    updatedAt: new Date().toISOString()
  };
}

class SpellingBeeStore {
  constructor() {
    this.state = this.loadLocal();
    this.listeners = [];
    this.syncFromServer();
  }

  loadLocal() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.sets) && parsed.sets.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not load localStorage state:', e);
    }
    const initial = createInitialState();
    this.saveLocal(initial);
    return initial;
  }

  saveLocal(stateObj = this.state) {
    try {
      stateObj.updatedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateObj));
    } catch (e) {
      console.warn('Could not write to localStorage:', e);
    }
  }

  async syncFromServer() {
    try {
      const res = await fetch('/api/state');
      if (!res.ok) return;
      const data = await res.json();
      if (data && data.ok && data.state && Array.isArray(data.state.sets) && data.state.sets.length > 0) {
        // Choose whichever state is newer or has more sets/history if local was just initialized
        const serverTime = new Date(data.state.updatedAt || 0).getTime();
        const localTime = new Date(this.state.updatedAt || 0).getTime();
        if (serverTime >= localTime || !localStorage.getItem(STORAGE_KEY + '_user_modified')) {
          this.state = data.state;
          this.saveLocal(this.state);
          this.notify();
        } else {
          this.pushToServer();
        }
      } else {
        // Server has no state yet; push our initial state to server disk
        this.pushToServer();
      }
    } catch (e) {
      // Running offline or as static file
    }
  }

  async pushToServer() {
    try {
      await fetch('/api/state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state: this.state })
      });
    } catch (e) {
      // Ignore if offline
    }
  }

  commit() {
    try {
      localStorage.setItem(STORAGE_KEY + '_user_modified', '1');
    } catch (e) {}
    this.saveLocal(this.state);
    this.pushToServer();
    this.notify();
  }

  subscribe(fn) {
    this.listeners.push(fn);
  }

  notify() {
    this.listeners.forEach((fn) => fn(this.state));
  }

  getLang() {
    return this.state.lang || 'en';
  }

  setLang(lang) {
    this.state.lang = lang === 'es' ? 'es' : 'en';
    this.commit();
  }

  getActiveSet() {
    let found = this.state.sets.find((s) => s.id === this.state.activeSetId);
    if (!found) {
      found = this.state.sets[0];
      this.state.activeSetId = found.id;
    }
    return found;
  }

  setActiveSet(setId) {
    if (this.state.sets.some((s) => s.id === setId)) {
      this.state.activeSetId = setId;
      this.commit();
    }
  }

  createWordSet(name, gradeLabel = '3rd Grade') {
    const newSet = {
      id: 'set_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      name: (name || 'New Spelling Set').trim(),
      gradeLabel: (gradeLabel || '3rd Grade').trim(),
      groupCount: 5,
      words: [],
      highScores: { groups: {}, mixed: null },
      testHistory: []
    };
    this.state.sets.push(newSet);
    this.state.activeSetId = newSet.id;
    this.commit();
    return newSet;
  }

  renameActiveSet(newName) {
    const s = this.getActiveSet();
    if (s && newName && newName.trim()) {
      s.name = newName.trim();
      this.commit();
    }
  }

  duplicateActiveSet() {
    const s = this.getActiveSet();
    if (!s) return;
    const copy = JSON.parse(JSON.stringify(s));
    copy.id = 'set_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
    copy.name = s.name + ' (Copy)';
    this.state.sets.push(copy);
    this.state.activeSetId = copy.id;
    this.commit();
    return copy;
  }

  deleteSet(setId) {
    if (this.state.sets.length <= 1) return false;
    this.state.sets = this.state.sets.filter((s) => s.id !== setId);
    if (this.state.activeSetId === setId) {
      this.state.activeSetId = this.state.sets[0].id;
    }
    this.commit();
    return true;
  }

  // Add multiple words to active set (deduplicating against existing words in set)
  addWordsToActiveSet(wordEntries) {
    const set = this.getActiveSet();
    const existingMap = new Map(set.words.map((w) => [w.word, w]));
    let addedCount = 0;

    wordEntries.forEach((entry) => {
      const rawWord = typeof entry === 'string' ? entry : entry.word;
      const hint = typeof entry === 'object' && entry.hint ? entry.hint : '';
      const clean = normalizeEnglishWord(rawWord);
      if (!clean || clean.length < 2) return;

      if (existingMap.has(clean)) {
        if (hint && !existingMap.get(clean).hint) {
          existingMap.get(clean).hint = hint.trim();
        }
      } else {
        const item = createWordItem(clean, hint);
        if (item) {
          set.words.push(item);
          existingMap.set(clean, item);
          addedCount++;
        }
      }
    });

    if (addedCount > 0) {
      rebalanceSetWords(set);
      this.commit();
    } else {
      this.commit();
    }
    return addedCount;
  }

  removeWord(wordId) {
    const set = this.getActiveSet();
    set.words = set.words.filter((w) => w.id !== wordId);
    this.commit();
  }

  clearAllWordsInActiveSet() {
    const set = this.getActiveSet();
    set.words = [];
    this.commit();
  }

  updateWordHint(wordId, newHint) {
    const set = this.getActiveSet();
    const w = set.words.find((item) => item.id === wordId);
    if (w) {
      w.hint = (newHint || '').trim();
      this.commit();
    }
  }

  // Tune individual word difficulty group (1 .. groupCount)
  tuneWordDifficulty(wordId, targetGroup) {
    const set = this.getActiveSet();
    const w = set.words.find((item) => item.id === wordId);
    if (!w) return null;
    const clamped = Math.max(1, Math.min(set.groupCount, parseInt(targetGroup, 10)));
    w.group = clamped;
    w.isCustomTuned = clamped !== w.autoGroup;
    this.commit();
    return w;
  }

  stepWordDifficulty(wordId, delta) {
    const set = this.getActiveSet();
    const w = set.words.find((item) => item.id === wordId);
    if (!w) return null;
    return this.tuneWordDifficulty(wordId, w.group + delta);
  }

  // Change number of difficulty groups (min 2, max 10)
  changeGroupCount(delta) {
    const set = this.getActiveSet();
    const nextCount = Math.max(2, Math.min(10, (set.groupCount || 5) + delta));
    if (nextCount === set.groupCount) return set.groupCount;
    set.groupCount = nextCount;
    rebalanceSetWords(set);
    this.commit();
    return nextCount;
  }

  rebalanceActiveSet(resetCustom = false) {
    const set = this.getActiveSet();
    if (resetCustom) {
      set.words.forEach((w) => {
        w.isCustomTuned = false;
      });
    }
    rebalanceSetWords(set);
    this.commit();
  }

  // Record a Test Score (for a specific Difficulty Group OR Mixed Mode)
  recordTestResult({ mode, groupNum, rightWords, wrongWords }) {
    const set = this.getActiveSet();
    const right = rightWords.length;
    const total = rightWords.length + wrongWords.length;
    if (total === 0) return null;
    const pct = Math.round((right / total) * 100);
    const nowStr = new Date().toLocaleDateString();

    if (!set.highScores) {
      set.highScores = { groups: {}, mixed: null };
    }
    if (!set.highScores.groups) {
      set.highScores.groups = {};
    }

    let isNewRecord = false;
    let recordObj = null;

    if (mode === 'mixed') {
      const prev = set.highScores.mixed;
      if (!prev || pct > prev.bestPct || (pct === prev.bestPct && right >= prev.bestRight)) {
        isNewRecord = true;
        set.highScores.mixed = {
          bestPct: pct,
          bestRight: right,
          bestTotal: total,
          attempts: (prev ? prev.attempts : 0) + 1,
          lastDate: nowStr
        };
      } else {
        set.highScores.mixed.attempts = (prev.attempts || 0) + 1;
        set.highScores.mixed.lastDate = nowStr;
      }
      recordObj = set.highScores.mixed;
    } else {
      const gKey = String(groupNum);
      const prev = set.highScores.groups[gKey];
      if (!prev || pct > prev.bestPct || (pct === prev.bestPct && right >= prev.bestRight)) {
        isNewRecord = true;
        set.highScores.groups[gKey] = {
          bestPct: pct,
          bestRight: right,
          bestTotal: total,
          attempts: (prev ? prev.attempts : 0) + 1,
          lastDate: nowStr
        };
      } else {
        set.highScores.groups[gKey].attempts = (prev.attempts || 0) + 1;
        set.highScores.groups[gKey].lastDate = nowStr;
      }
      recordObj = set.highScores.groups[gKey];
    }

    if (!Array.isArray(set.testHistory)) {
      set.testHistory = [];
    }
    set.testHistory.unshift({
      id: 't_' + Date.now(),
      mode,
      groupNum: mode === 'mixed' ? null : groupNum,
      right,
      total,
      pct,
      isNewRecord,
      date: new Date().toLocaleString()
    });
    if (set.testHistory.length > 30) {
      set.testHistory = set.testHistory.slice(0, 30);
    }

    this.commit();
    return { pct, right, total, isNewRecord, record: recordObj };
  }

  clearScoresInActiveSet() {
    const set = this.getActiveSet();
    set.highScores = { groups: {}, mixed: null };
    set.testHistory = [];
    this.commit();
  }

  exportJSON() {
    return JSON.stringify(this.state, null, 2);
  }

  importJSON(jsonStr) {
    const parsed = JSON.parse(jsonStr);
    if (!parsed || !Array.isArray(parsed.sets) || parsed.sets.length === 0) {
      throw new Error('Invalid backup file format');
    }
    this.state = parsed;
    this.commit();
  }
}

window.SpellingBeeHelpers = {
  normalizeEnglishWord,
  computeWordMetrics,
  defaultAutoGroupForScore,
  rebalanceSetWords
};
window.appStore = new SpellingBeeStore();
