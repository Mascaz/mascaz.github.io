// Testing Phase Engine: Group Test Mode & Mixed All-Difficulties Mode
// Designed for a live Proctor/Parent who says the word aloud, listens to the child spell it, and marks Right or Wrong.

class SpellingTestEngine {
  constructor(containerEl) {
    this.container = containerEl;
    this.activeSession = null; // null = showing test setup menu
    this.selectedGroup = 1;
    this.wordOrder = 'shuffled';
    this.mixedLimit = 'all';
    this.privacyShield = false;
    this.peekingNow = false;
  }

  t(key, vars = {}) {
    const lang = window.appStore.getLang();
    const dict = window.I18N[lang] || window.I18N.en;
    let str = dict[key] !== undefined ? dict[key] : (window.I18N.en[key] || key);
    Object.keys(vars).forEach((k) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]);
    });
    return str;
  }

  shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  startGroupTest(groupNum) {
    const set = window.appStore.getActiveSet();
    const groupWords = (set.words || []).filter((w) => w.group === groupNum);
    if (groupWords.length === 0) {
      alert(this.t('needWordsToStudy'));
      return;
    }

    const queue = this.wordOrder === 'shuffled' ? this.shuffle(groupWords) : [...groupWords];
    this.activeSession = {
      mode: 'group',
      groupNum,
      queue,
      currentIndex: 0,
      history: [], // { wordObj, correct: boolean }
      completedResult: null
    };
    this.peekingNow = false;
    this.render();
  }

  startMixedTest() {
    const set = window.appStore.getActiveSet();
    const allWords = set.words || [];
    if (allWords.length === 0) {
      alert(this.t('needWordsToStudy'));
      return;
    }

    let queue = this.shuffle(allWords);
    if (this.mixedLimit !== 'all') {
      const lim = parseInt(this.mixedLimit, 10);
      if (!isNaN(lim) && lim > 0) {
        queue = queue.slice(0, lim);
      }
    }

    this.activeSession = {
      mode: 'mixed',
      groupNum: null,
      queue,
      currentIndex: 0,
      history: [],
      completedResult: null
    };
    this.peekingNow = false;
    this.render();
  }

  markCurrentWord(isCorrect) {
    if (!this.activeSession) return;
    const { queue, currentIndex, history } = this.activeSession;
    if (currentIndex >= queue.length) return;

    const wordObj = queue[currentIndex];
    history.push({ wordObj, correct: isCorrect });
    this.activeSession.currentIndex++;
    this.peekingNow = false;

    if (this.activeSession.currentIndex >= queue.length) {
      this.finalizeTest();
    } else {
      this.render();
    }
  }

  undoLastMark() {
    if (!this.activeSession || this.activeSession.history.length === 0) return;
    this.activeSession.history.pop();
    this.activeSession.currentIndex = Math.max(0, this.activeSession.currentIndex - 1);
    this.peekingNow = false;
    this.render();
  }

  finalizeTest() {
    if (!this.activeSession) return;
    const rightWords = this.activeSession.history.filter((h) => h.correct).map((h) => h.wordObj);
    const wrongWords = this.activeSession.history.filter((h) => !h.correct).map((h) => h.wordObj);

    const savedSummary = window.appStore.recordTestResult({
      mode: this.activeSession.mode,
      groupNum: this.activeSession.groupNum,
      rightWords,
      wrongWords
    });

    this.activeSession.completedResult = {
      rightWords,
      wrongWords,
      summary: savedSummary
    };
    this.render();
  }

  render() {
    if (!this.activeSession) {
      this.renderSetupMenu();
    } else if (this.activeSession.completedResult) {
      this.renderResultsScreen();
    } else {
      this.renderLiveOralTest();
    }
  }

  renderSetupMenu() {
    const set = window.appStore.getActiveSet();
    const lang = window.appStore.getLang();
    const groupCount = set.groupCount || 5;
    const groupNames = (window.I18N[lang] || window.I18N.en).groupNames;

    if (this.selectedGroup > groupCount) {
      this.selectedGroup = groupCount;
    }

    const mixedRecord = set.highScores && set.highScores.mixed ? set.highScores.mixed : null;

    let groupButtonsHtml = '';
    for (let g = 1; g <= groupCount; g++) {
      const count = (set.words || []).filter((w) => w.group === g).length;
      const gRec = set.highScores && set.highScores.groups && set.highScores.groups[String(g)];
      const gName = groupNames[g - 1] || `Group ${g}`;
      const isSel = this.selectedGroup === g;

      groupButtonsHtml += `
        <button type="button" class="test-group-option ${isSel ? 'selected' : ''}" data-group="${g}">
          <div class="tg-top">
            <span class="badge-group badge-g${Math.min(5, g)}">⭐ ${g}</span>
            <strong>${gName}</strong>
          </div>
          <div class="tg-meta">
            <span>${this.t('wordsInGroupCount', { count })}</span>
            <span class="tg-score">${gRec ? `🏆 ${gRec.bestPct}% (${gRec.bestRight}/${gRec.bestTotal})` : this.t('noBestScoreYet')}</span>
          </div>
        </button>
      `;
    }

    this.container.innerHTML = `
      <div class="test-menu-grid">
        <!-- Card 1: Group Test Mode -->
        <div class="card test-mode-card">
          <div class="card-header-badge">🎯</div>
          <h3>${this.t('testModeGroupCardTitle')}</h3>
          <p class="pretty-text">${this.t('testModeGroupCardDesc')}</p>

          <label class="field-label">${this.t('selectGroupForTest')}</label>
          <div class="test-group-selector-list">
            ${groupButtonsHtml}
          </div>

          <div class="form-row" style="margin-top: 14px;">
            <label class="field-label">${this.t('wordOrderLabel')}</label>
            <select id="testOrderSelect" class="input-select">
              <option value="shuffled" ${this.wordOrder === 'shuffled' ? 'selected' : ''}>${this.t('orderShuffled')}</option>
              <option value="sequential" ${this.wordOrder === 'sequential' ? 'selected' : ''}>${this.t('orderSequential')}</option>
            </select>
          </div>

          <button type="button" class="btn btn-primary btn-lg btn-block" id="startGroupTestBtn" style="margin-top: 16px;">
            ${this.t('startGroupTestBtn', { group: this.selectedGroup })}
          </button>
        </div>

        <!-- Card 2: Mixed All-Difficulties Mode -->
        <div class="card test-mode-card mixed-mode-card">
          <div class="card-header-badge">🏆</div>
          <h3>${this.t('testModeMixedCardTitle')}</h3>
          <p class="pretty-text">${this.t('testModeMixedCardDesc')}</p>

          <div class="mixed-highscore-callout">
            ${mixedRecord
              ? `<strong>🏆 ${this.t('bestScoreStat', { pct: mixedRecord.bestPct, right: mixedRecord.bestRight, total: mixedRecord.bestTotal })}</strong>
                 <div class="sub-stat">${this.t('attemptsStat', { attempts: mixedRecord.attempts })} • ${mixedRecord.lastDate}</div>`
              : `<span>${this.t('noTestsRecorded')}</span>`
            }
          </div>

          <div class="form-row" style="margin-top: 16px;">
            <label class="field-label">${this.t('mixedWordCountLabel')}</label>
            <select id="mixedCountSelect" class="input-select">
              <option value="all" ${this.mixedLimit === 'all' ? 'selected' : ''}>${this.t('mixedAllWords', { count: (set.words || []).length })}</option>
              <option value="10" ${this.mixedLimit === '10' ? 'selected' : ''}>${this.t('mixed10Words')}</option>
              <option value="15" ${this.mixedLimit === '15' ? 'selected' : ''}>${this.t('mixed15Words')}</option>
              <option value="25" ${this.mixedLimit === '25' ? 'selected' : ''}>${this.t('mixed25Words')}</option>
            </select>
          </div>

          <button type="button" class="btn btn-accent btn-lg btn-block" id="startMixedTestBtn" style="margin-top: auto;">
            ${this.t('startMixedTestBtn')}
          </button>
        </div>
      </div>
    `;

    this.container.querySelectorAll('.test-group-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.selectedGroup = parseInt(btn.dataset.group, 10);
        this.renderSetupMenu();
      });
    });

    const orderSel = this.container.querySelector('#testOrderSelect');
    if (orderSel) {
      orderSel.addEventListener('change', (e) => {
        this.wordOrder = e.target.value;
      });
    }

    const mixedSel = this.container.querySelector('#mixedCountSelect');
    if (mixedSel) {
      mixedSel.addEventListener('change', (e) => {
        this.mixedLimit = e.target.value;
      });
    }

    const startGroupBtn = this.container.querySelector('#startGroupTestBtn');
    if (startGroupBtn) {
      startGroupBtn.addEventListener('click', () => this.startGroupTest(this.selectedGroup));
    }

    const startMixedBtn = this.container.querySelector('#startMixedTestBtn');
    if (startMixedBtn) {
      startMixedBtn.addEventListener('click', () => this.startMixedTest());
    }
  }

  renderLiveOralTest() {
    const { mode, groupNum, queue, currentIndex, history } = this.activeSession;
    const wordObj = queue[currentIndex];
    const lang = window.appStore.getLang();
    const clue = window.getWordClue(wordObj, lang);
    const rightCount = history.filter((h) => h.correct).length;
    const wrongCount = history.filter((h) => !h.correct).length;
    const remainingCount = queue.length - currentIndex;
    const progressPct = Math.round((currentIndex / queue.length) * 100);

    const hiddenNow = this.privacyShield && !this.peekingNow;

    this.container.innerHTML = `
      <div class="live-test-stage card">
        <div class="proctor-notice-bar">
          <span>${this.t('proctorBanner')}</span>
          <label class="privacy-toggle-label">
            <input type="checkbox" id="privacyShieldChk" ${this.privacyShield ? 'checked' : ''} />
            <span>${this.t('privacyShieldToggle')}</span>
          </label>
        </div>

        <div class="test-Header-stats">
          <div class="test-mode-tag">
            ${mode === 'mixed'
              ? `🏆 ${this.t('testModeMixedCardTitle')}`
              : `🎯 ${lang === 'es' ? 'Grupo' : 'Group'} ${groupNum}`}
          </div>
          <div class="test-word-counter">
            ${this.t('progressWordOf', { current: currentIndex + 1, total: queue.length })}
          </div>
          <div class="test-running-pills">
            <span class="pill-right">✅ ${this.t('testLiveRight', { count: rightCount })}</span>
            <span class="pill-wrong">❌ ${this.t('testLiveWrong', { count: wrongCount })}</span>
            <span class="pill-rem">⏳ ${this.t('testLiveRemaining', { count: remainingCount })}</span>
          </div>
        </div>

        <div class="test-progress-track">
          <div class="test-progress-fill" style="width: ${progressPct}%;"></div>
        </div>

        <div class="proctor-word-box ${hiddenNow ? 'word-box-masked' : ''}" id="proctorWordBox">
          <div class="proctor-say-label">${this.t('sayOutLoudLabel')}</div>

          ${hiddenNow ? `
            <div class="masked-placeholder">
              ${this.t('tapToPeekMsg')}
            </div>
          ` : `
            <div class="proctor-giant-word">${wordObj.word.toUpperCase()}</div>
            <div class="proctor-letter-breakdown">
              <span class="breakdown-label">${this.t('spellBreakdownLabel')}</span>
              <div class="breakdown-tiles">
                ${wordObj.word.toUpperCase().split('').map((ch, idx) => `
                  <span class="breakdown-char" title="Letter ${idx + 1}">${ch}</span>
                `).join('')}
              </div>
            </div>
            <div class="proctor-word-meta">
              <span class="badge-group badge-g${Math.min(5, wordObj.group)}">
                ⭐ ${lang === 'es' ? 'Nivel' : 'Level'} ${wordObj.group}
              </span>
              <span class="meta-chip">${this.t('lengthBadge', { len: wordObj.length })}</span>
              <span class="meta-chip">${this.t('varietyBadge', { uniq: wordObj.uniqueChars })}</span>
            </div>
            <div class="proctor-clue-helper">
              <strong>${this.t('clueLabel')}</strong> ${clue}
            </div>
          `}
        </div>

        <div class="proctor-mark-buttons">
          <button type="button" class="btn btn-wrong-giant" id="markWrongBtn">
            ${this.t('markWrongBtn')}
          </button>
          <button type="button" class="btn btn-right-giant" id="markRightBtn">
            ${this.t('markRightBtn')}
          </button>
        </div>

        <div class="proctor-footer-actions">
          <button type="button" class="btn btn-secondary btn-sm" id="undoMarkBtn" ${history.length === 0 ? 'disabled' : ''}>
            ${this.t('undoLastMarkBtn')}
          </button>
          <button type="button" class="btn btn-secondary btn-sm" id="endTestEarlyBtn">
            ${this.t('endTestEarlyBtn')}
          </button>
        </div>
      </div>
    `;

    const shieldChk = this.container.querySelector('#privacyShieldChk');
    if (shieldChk) {
      shieldChk.addEventListener('change', (e) => {
        this.privacyShield = e.target.checked;
        this.peekingNow = false;
        this.renderLiveOralTest();
      });
    }

    const wordBox = this.container.querySelector('#proctorWordBox');
    if (wordBox && this.privacyShield) {
      wordBox.addEventListener('click', () => {
        this.peekingNow = !this.peekingNow;
        this.renderLiveOralTest();
      });
    }

    this.container.querySelector('#markRightBtn').addEventListener('click', () => {
      this.markCurrentWord(true);
    });
    this.container.querySelector('#markWrongBtn').addEventListener('click', () => {
      this.markCurrentWord(false);
    });

    const undoBtn = this.container.querySelector('#undoMarkBtn');
    if (undoBtn) {
      undoBtn.addEventListener('click', () => this.undoLastMark());
    }

    const endEarlyBtn = this.container.querySelector('#endTestEarlyBtn');
    if (endEarlyBtn) {
      endEarlyBtn.addEventListener('click', () => {
        if (this.activeSession.history.length > 0) {
          this.finalizeTest();
        } else {
          this.activeSession = null;
          this.render();
        }
      });
    }
  }

  renderResultsScreen() {
    const { mode, groupNum, completedResult } = this.activeSession;
    const { rightWords, wrongWords, summary } = completedResult;
    const set = window.appStore.getActiveSet();
    const lang = window.appStore.getLang();
    const maxGroup = set.groupCount || 5;

    const pct = summary ? summary.pct : 0;
    const isNewRecord = summary && summary.isNewRecord;
    const bestPct = summary && summary.record ? summary.record.bestPct : pct;
    const bestRaw = summary && summary.record ? `${summary.record.bestRight}/${summary.record.bestTotal}` : '0/0';

    this.container.innerHTML = `
      <div class="test-results-stage card">
        <div class="results-hero">
          ${isNewRecord ? `<div class="new-record-ribbon">${this.t('newHighScoreBanner')}</div>` : ''}
          <h2>${this.t('testCompleteTitle')}</h2>
          <div class="score-circle ${pct >= 80 ? 'score-high' : (pct >= 50 ? 'score-mid' : 'score-low')}">
            <span class="score-pct">${pct}%</span>
            <span class="score-fraction">${rightWords.length} / ${rightWords.length + wrongWords.length}</span>
          </div>
          <p class="high-score-sub">${this.t('highScoreMaintained', { best: bestPct, bestRaw })}</p>
        </div>

        ${wrongWords.length > 0 ? `
          <div class="struggle-tuning-box">
            <p class="pretty-text"><strong>${this.t('tuneStrugglePrompt')}</strong></p>
            <button type="button" class="btn btn-accent btn-sm" id="bumpAllMissedBtn">
              ${this.t('bumpAllMissedBtn')}
            </button>
          </div>
        ` : ''}

        <div class="results-columns">
          <div class="results-col results-col-wrong">
            <h4>${this.t('wrongWordsHeading', { count: wrongWords.length })}</h4>
            <div class="results-word-list">
              ${wrongWords.map((w) => {
                const liveWord = (set.words || []).find((x) => x.id === w.id) || w;
                return `
                  <div class="result-word-row wrong-row">
                    <div>
                      <strong class="res-word">${liveWord.word}</strong>
                      <span class="badge-group badge-g${Math.min(5, liveWord.group)}">
                        ⭐ ${lang === 'es' ? 'Grupo' : 'Group'} ${liveWord.group}
                      </span>
                    </div>
                    <div class="res-tune-controls">
                      <button type="button" class="btn btn-secondary btn-xs tune-res-btn" data-id="${liveWord.id}" data-delta="-1" ${liveWord.group <= 1 ? 'disabled' : ''}>−1</button>
                      <button type="button" class="btn btn-secondary btn-xs tune-res-btn" data-id="${liveWord.id}" data-delta="1" ${liveWord.group >= maxGroup ? 'disabled' : ''}>+1 ⭐</button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="results-col results-col-right">
            <h4>${this.t('rightWordsHeading', { count: rightWords.length })}</h4>
            <div class="results-word-list">
              ${rightWords.map((w) => {
                const liveWord = (set.words || []).find((x) => x.id === w.id) || w;
                return `
                  <div class="result-word-row right-row">
                    <div>
                      <strong class="res-word">${liveWord.word}</strong>
                      <span class="badge-group badge-g${Math.min(5, liveWord.group)}">
                        ⭐ ${lang === 'es' ? 'Grupo' : 'Group'} ${liveWord.group}
                      </span>
                    </div>
                    <div class="res-tune-controls">
                      <button type="button" class="btn btn-secondary btn-xs tune-res-btn" data-id="${liveWord.id}" data-delta="-1" ${liveWord.group <= 1 ? 'disabled' : ''}>−1</button>
                      <button type="button" class="btn btn-secondary btn-xs tune-res-btn" data-id="${liveWord.id}" data-delta="1" ${liveWord.group >= maxGroup ? 'disabled' : ''}>+1</button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <div class="results-footer-actions">
          <button type="button" class="btn btn-primary btn-lg" id="retakeTestBtn">${this.t('retakeTestBtn')}</button>
          <button type="button" class="btn btn-secondary btn-lg" id="goToStudyFromResBtn">${this.t('studyMissedGroupBtn')}</button>
          <button type="button" class="btn btn-secondary btn-lg" id="backToTestMenuBtn">${this.t('backToTestMenuBtn')}</button>
        </div>
      </div>
    `;

    this.container.querySelectorAll('.tune-res-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const delta = parseInt(btn.dataset.delta, 10);
        window.appStore.stepWordDifficulty(id, delta);
        this.renderResultsScreen();
      });
    });

    const bumpAllBtn = this.container.querySelector('#bumpAllMissedBtn');
    if (bumpAllBtn) {
      bumpAllBtn.addEventListener('click', () => {
        wrongWords.forEach((w) => {
          window.appStore.stepWordDifficulty(w.id, 1);
        });
        this.renderResultsScreen();
      });
    }

    this.container.querySelector('#retakeTestBtn').addEventListener('click', () => {
      if (mode === 'mixed') {
        this.startMixedTest();
      } else {
        this.startGroupTest(groupNum);
      }
    });

    this.container.querySelector('#goToStudyFromResBtn').addEventListener('click', () => {
      this.activeSession = null;
      if (window.appController) {
        window.appController.switchTab('study', groupNum || 1);
      }
    });

    this.container.querySelector('#backToTestMenuBtn').addEventListener('click', () => {
      this.activeSession = null;
      this.renderSetupMenu();
    });
  }
}

window.SpellingTestEngine = SpellingTestEngine;
