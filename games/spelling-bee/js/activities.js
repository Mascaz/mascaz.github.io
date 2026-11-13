// Study Phase Activities Engine (Strictly Scoped to Selected Difficulty Group)
// Includes: Fill in the Blank, Word Soup (Word Search), Crossword Puzzle, Honeycomb Scramble, Save the Honey Jars, Look-Cover-Spell, plus Random Activity mode.

class StudyActivitiesEngine {
  constructor(containerEl, onCompleteGroupTestCallback) {
    this.container = containerEl;
    this.onRequestGroupTest = onCompleteGroupTestCallback;
    this.currentGroupNum = 1;
    this.currentActivityId = null; // null = showing activity picker
    this.isRandomMode = false;
    this.words = [];
    this.wordIndex = 0;
    this.streak = 0;
    this.flashTimer = null;
    this.keyHandler = null;
  }

  cleanupTimersAndListeners() {
    if (this.flashTimer) {
      clearInterval(this.flashTimer);
      this.flashTimer = null;
    }
    if (this.keyHandler) {
      window.removeEventListener('keydown', this.keyHandler);
      this.keyHandler = null;
    }
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

  getRandomCheer() {
    const lang = window.appStore.getLang();
    const cheers = (window.I18N[lang] || window.I18N.en).correctCheers;
    return cheers[Math.floor(Math.random() * cheers.length)];
  }

  shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  getGroupWords(groupNum) {
    const set = window.appStore.getActiveSet();
    return (set.words || []).filter((w) => w.group === groupNum);
  }

  startActivity(groupNum, activityId, isRandom = false) {
    this.cleanupTimersAndListeners();
    this.currentGroupNum = groupNum;
    this.isRandomMode = isRandom;

    const activityPool = ['fill_blank', 'word_soup', 'crossword', 'scramble', 'bee_keeper', 'flash_spell'];
    if (activityId === 'random') {
      this.isRandomMode = true;
      const choices = activityPool.filter((a) => a !== this.currentActivityId);
      this.currentActivityId = choices[Math.floor(Math.random() * choices.length)];
    } else {
      this.currentActivityId = activityId;
    }

    const rawWords = this.getGroupWords(groupNum);
    this.words = this.shuffle(rawWords);
    this.wordIndex = 0;

    this.renderCurrentActivity();
  }

  exitToPicker() {
    this.cleanupTimersAndListeners();
    this.currentActivityId = null;
    this.isRandomMode = false;
    if (window.appController) {
      window.appController.renderStudyTab();
    }
  }

  renderCurrentActivity() {
    this.cleanupTimersAndListeners();
    if (!this.currentActivityId || this.words.length === 0) {
      this.exitToPicker();
      return;
    }

    switch (this.currentActivityId) {
      case 'fill_blank':
        this.renderFillInTheBlank();
        break;
      case 'word_soup':
        this.renderWordSoup();
        break;
      case 'crossword':
        this.renderCrossword();
        break;
      case 'scramble':
        this.renderScramble();
        break;
      case 'bee_keeper':
        this.renderBeeKeeper();
        break;
      case 'flash_spell':
        this.renderFlashSpell();
        break;
      default:
        this.renderFillInTheBlank();
    }
  }

  renderHeaderBar(activityTitleKey, showWordProgress = true) {
    const lang = window.appStore.getLang();
    const groupNames = (window.I18N[lang] || window.I18N.en).groupNames;
    const gName = groupNames[this.currentGroupNum - 1] || `Group ${this.currentGroupNum}`;

    return `
      <div class="activity-topbar">
        <button class="btn btn-secondary btn-sm" id="actBackBtn">
          ${this.t('backToActivitiesBtn')}
        </button>
        <div class="activity-title-pill">
          <span class="badge-group badge-g${Math.min(5, this.currentGroupNum)}">
            ⭐ ${lang === 'es' ? 'Grupo' : 'Group'} ${this.currentGroupNum}: ${gName}
          </span>
          <strong>${this.t(activityTitleKey)}</strong>
        </div>
        <div class="activity-topbar-right">
          ${showWordProgress ? `<span class="progress-pill">${this.t('progressWordOf', { current: this.wordIndex + 1, total: this.words.length })}</span>` : ''}
          <span class="streak-pill">${this.t('streakLabel', { streak: this.streak })}</span>
          ${this.isRandomMode ? `<button class="btn btn-accent btn-sm" id="actNextRandomBtn">${this.t('switchRandomActivityBtn')}</button>` : ''}
        </div>
      </div>
    `;
  }

  bindHeaderBarEvents() {
    const backBtn = this.container.querySelector('#actBackBtn');
    if (backBtn) {
      backBtn.addEventListener('click', () => this.exitToPicker());
    }
    const randBtn = this.container.querySelector('#actNextRandomBtn');
    if (randBtn) {
      randBtn.addEventListener('click', () => this.startActivity(this.currentGroupNum, 'random', true));
    }
  }

  renderCompletionScreen() {
    this.cleanupTimersAndListeners();
    this.container.innerHTML = `
      <div class="activity-stage completion-card">
        <div class="completion-icon">🐝🏆🍯</div>
        <h2>${this.t('activityCompletedTitle')}</h2>
        <p class="pretty-text">${this.t('activityCompletedDesc', { group: this.currentGroupNum })}</p>
        <div class="completion-actions">
          <button class="btn btn-primary btn-lg" id="compPlayAgainBtn">${this.t('playAgainBtn')}</button>
          <button class="btn btn-secondary btn-lg" id="compOtherGameBtn">${this.t('tryAnotherGameBtn')}</button>
          <button class="btn btn-accent btn-lg" id="compTestGroupBtn">${this.t('goToGroupTestBtn')}</button>
        </div>
      </div>
    `;
    this.container.querySelector('#compPlayAgainBtn').addEventListener('click', () => {
      this.startActivity(this.currentGroupNum, this.isRandomMode ? 'random' : this.currentActivityId, this.isRandomMode);
    });
    this.container.querySelector('#compOtherGameBtn').addEventListener('click', () => {
      this.exitToPicker();
    });
    this.container.querySelector('#compTestGroupBtn').addEventListener('click', () => {
      if (this.onRequestGroupTest) {
        this.onRequestGroupTest(this.currentGroupNum);
      }
    });
  }

  // =========================================================================
  // ACTIVITY 1: FILL IN THE BLANK
  // =========================================================================
  renderFillInTheBlank() {
    if (this.wordIndex >= this.words.length) {
      this.renderCompletionScreen();
      return;
    }

    const wordObj = this.words[this.wordIndex];
    const target = wordObj.word.toLowerCase();
    const chars = target.split('');
    const lang = window.appStore.getLang();
    const clue = window.getWordClue(wordObj, lang);

    // Choose 40-55% of indices to blank out (at least 2, at most length - 1)
    const numBlanks = Math.max(2, Math.min(chars.length - 1, Math.ceil(chars.length * 0.45)));
    const indices = chars.map((_, idx) => idx);
    const blankIndicesSet = new Set(this.shuffle(indices).slice(0, numBlanks));
    const blankPositions = [...blankIndicesSet].sort((a, b) => a - b);

    // Build tile bank: correct missing letters + 3 distractor letters
    const missingLetters = blankPositions.map((pos) => chars[pos]);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const distractors = this.shuffle(alphabet.filter((c) => !target.includes(c))).slice(0, 3);
    const bankTiles = this.shuffle([...missingLetters, ...distractors]).map((letter, idx) => ({
      id: `tile_${idx}`,
      letter,
      used: false
    }));

    // Track user entries per blank position: { letter, tileId }
    const userBlanks = {};
    let solved = false;

    const renderView = (feedbackMsg = '', isSuccess = false, isError = false) => {
      this.container.innerHTML = `
        <div class="activity-stage">
          ${this.renderHeaderBar('actFillBlankTitle', true)}
          <p class="activity-instr pretty-text">${this.t('fillBlankInstr')}</p>

          <div class="clue-banner">
            <span class="clue-tag">${this.t('clueLabel')}</span>
            <span class="clue-text">${clue}</span>
          </div>

          <div class="word-slots-row" id="fbSlotsRow">
            ${chars.map((ch, idx) => {
              if (!blankIndicesSet.has(idx)) {
                return `<div class="letter-slot fixed-slot">${ch.toUpperCase()}</div>`;
              }
              const filled = userBlanks[idx];
              const statusClass = solved
                ? 'slot-correct'
                : (isError && filled && filled.letter !== ch ? 'slot-wrong' : '');
              return `
                <button type="button" class="letter-slot blank-slot ${filled ? 'filled-slot' : ''} ${statusClass}" data-pos="${idx}">
                  ${filled ? filled.letter.toUpperCase() : '_'}
                </button>
              `;
            }).join('')}
          </div>

          ${feedbackMsg ? `
            <div class="activity-feedback ${isSuccess ? 'feedback-success' : 'feedback-error'}">
              ${feedbackMsg}
            </div>
          ` : ''}

          <div class="tile-bank-row" id="fbBankRow">
            ${bankTiles.map((t) => `
              <button type="button" class="hex-tile ${t.used ? 'tile-used' : ''}" data-tile-id="${t.id}" ${t.used || solved ? 'disabled' : ''}>
                ${t.letter.toUpperCase()}
              </button>
            `).join('')}
          </div>

          <div class="activity-controls-row">
            ${!solved ? `
              <button type="button" class="btn btn-secondary" id="fbHintBtn">${this.t('revealHintBtn')}</button>
              <button type="button" class="btn btn-secondary" id="fbClearBtn">${this.t('clearLettersBtn')}</button>
              <button type="button" class="btn btn-primary" id="fbCheckBtn">${this.t('checkAnswerBtn')}</button>
            ` : `
              <button type="button" class="btn btn-primary btn-lg pulse-btn" id="fbNextBtn">${this.t('nextWordBtn')}</button>
            `}
          </div>
        </div>
      `;

      this.bindHeaderBarEvents();

      // Slot click removes letter
      this.container.querySelectorAll('.blank-slot').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (solved) return;
          const pos = parseInt(btn.dataset.pos, 10);
          if (userBlanks[pos]) {
            const tile = bankTiles.find((t) => t.id === userBlanks[pos].tileId);
            if (tile) tile.used = false;
            delete userBlanks[pos];
            renderView();
          }
        });
      });

      // Bank tile click fills first empty blank
      this.container.querySelectorAll('.hex-tile').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (solved) return;
          const tileId = btn.dataset.tileId;
          const tile = bankTiles.find((t) => t.id === tileId);
          if (!tile || tile.used) return;
          const nextEmptyPos = blankPositions.find((pos) => !userBlanks[pos]);
          if (nextEmptyPos === undefined) return;
          tile.used = true;
          userBlanks[nextEmptyPos] = { letter: tile.letter, tileId: tile.id };
          checkIfAllFilled();
        });
      });

      const hintBtn = this.container.querySelector('#fbHintBtn');
      if (hintBtn) {
        hintBtn.addEventListener('click', () => {
          const targetPos = blankPositions.find((pos) => !userBlanks[pos] || userBlanks[pos].letter !== chars[pos]);
          if (targetPos === undefined) return;
          if (userBlanks[targetPos]) {
            const oldTile = bankTiles.find((t) => t.id === userBlanks[targetPos].tileId);
            if (oldTile) oldTile.used = false;
          }
          const neededChar = chars[targetPos];
          const availTile = bankTiles.find((t) => !t.used && t.letter === neededChar);
          if (availTile) {
            availTile.used = true;
            userBlanks[targetPos] = { letter: neededChar, tileId: availTile.id };
          } else {
            userBlanks[targetPos] = { letter: neededChar, tileId: null };
          }
          checkIfAllFilled();
        });
      }

      const clearBtn = this.container.querySelector('#fbClearBtn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          bankTiles.forEach((t) => { t.used = false; });
          Object.keys(userBlanks).forEach((k) => delete userBlanks[k]);
          renderView();
        });
      }

      const checkBtn = this.container.querySelector('#fbCheckBtn');
      if (checkBtn) {
        checkBtn.addEventListener('click', () => evaluateAttempt());
      }

      const nextBtn = this.container.querySelector('#fbNextBtn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          this.wordIndex++;
          this.renderFillInTheBlank();
        });
      }
    };

    const checkIfAllFilled = () => {
      const allFilled = blankPositions.every((pos) => Boolean(userBlanks[pos]));
      if (allFilled) {
        evaluateAttempt();
      } else {
        renderView();
      }
    };

    const evaluateAttempt = () => {
      const isCorrect = blankPositions.every((pos) => userBlanks[pos] && userBlanks[pos].letter === chars[pos]);
      if (isCorrect) {
        solved = true;
        this.streak++;
        renderView(this.getRandomCheer(), true, false);
      } else {
        this.streak = 0;
        renderView(this.t('tryAgainMsg'), false, true);
      }
    };

    // Keyboard support for quick typing on iPad magic keyboard or laptop
    this.keyHandler = (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (solved && e.key === 'Enter') {
        this.wordIndex++;
        this.renderFillInTheBlank();
        return;
      }
      if (solved) return;
      if (e.key === 'Backspace') {
        const filledPositions = blankPositions.filter((pos) => Boolean(userBlanks[pos]));
        if (filledPositions.length > 0) {
          const lastPos = filledPositions[filledPositions.length - 1];
          const tile = bankTiles.find((t) => t.id === userBlanks[lastPos].tileId);
          if (tile) tile.used = false;
          delete userBlanks[lastPos];
          renderView();
        }
        return;
      }
      const ch = e.key.toLowerCase();
      if (/^[a-z]$/.test(ch)) {
        const nextEmptyPos = blankPositions.find((pos) => !userBlanks[pos]);
        if (nextEmptyPos === undefined) return;
        const matchingTile = bankTiles.find((t) => !t.used && t.letter === ch);
        if (matchingTile) {
          matchingTile.used = true;
          userBlanks[nextEmptyPos] = { letter: ch, tileId: matchingTile.id };
          checkIfAllFilled();
        }
      }
    };
    window.addEventListener('keydown', this.keyHandler);

    renderView();
  }

  // =========================================================================
  // ACTIVITY 2: WORD SOUP (WORD SEARCH / SOPA DE LETRAS)
  // =========================================================================
  renderWordSoup() {
    // Use up to 8 words from this difficulty group so the grid is spacious & legible on iPad/iPhone
    const subset = this.words.slice(0, 8);
    const maxWordLen = Math.max(...subset.map((w) => w.word.length), 6);
    const gridSize = Math.min(13, Math.max(10, maxWordLen + 2));

    // Create empty grid
    const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));
    const placedWords = [];
    const directions = [
      { dr: 0, dc: 1 },  // Horizontal right
      { dr: 1, dc: 0 },  // Vertical down
      { dr: 1, dc: 1 },  // Diagonal down-right
      { dr: -1, dc: 1 }  // Diagonal up-right
    ];

    // Sort longest first for reliable placement
    const sortedWords = [...subset].sort((a, b) => b.word.length - a.word.length);

    for (const wObj of sortedWords) {
      const word = wObj.word.toUpperCase();
      let placed = false;
      for (let attempt = 0; attempt < 160 && !placed; attempt++) {
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const startR = Math.floor(Math.random() * gridSize);
        const startC = Math.floor(Math.random() * gridSize);
        const endR = startR + dir.dr * (word.length - 1);
        const endC = startC + dir.dc * (word.length - 1);

        if (endR < 0 || endR >= gridSize || endC < 0 || endC >= gridSize) continue;

        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          const r = startR + dir.dr * i;
          const c = startC + dir.dc * i;
          if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
            canPlace = false;
            break;
          }
        }

        if (canPlace) {
          const cells = [];
          for (let i = 0; i < word.length; i++) {
            const r = startR + dir.dr * i;
            const c = startC + dir.dc * i;
            grid[r][c] = word[i];
            cells.push({ r, c });
          }
          placedWords.push({
            word: word,
            wordObj: wObj,
            cells,
            found: false,
            colorIndex: (placedWords.length % 6) + 1
          });
          placed = true;
        }
      }
    }

    // Fill remaining empty cells with random letters
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (!grid[r][c]) {
          grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
      }
    }

    let startCell = null;
    let hoverCell = null;
    let isDragging = false;
    let hintCellKey = null;

    const getLineCells = (c1, c2) => {
      if (!c1 || !c2) return [];
      const dr = c2.r - c1.r;
      const dc = c2.c - c1.c;
      const steps = Math.max(Math.abs(dr), Math.abs(dc));
      if (steps === 0) return [{ r: c1.r, c: c1.c }];
      // Must be horizontal, vertical, or 45-degree diagonal
      if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return [];
      const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
      const stepC = dc === 0 ? 0 : dc / Math.abs(dc);
      const line = [];
      for (let i = 0; i <= steps; i++) {
        line.push({ r: c1.r + stepR * i, c: c1.c + stepC * i });
      }
      return line;
    };

    const checkSelection = (c1, c2) => {
      const line = getLineCells(c1, c2);
      if (line.length < 2) return false;
      const selectedStr = line.map((pt) => grid[pt.r][pt.c]).join('');
      const reversedStr = selectedStr.split('').reverse().join('');

      const match = placedWords.find(
        (pw) => !pw.found && (pw.word === selectedStr || pw.word === reversedStr)
      );
      if (match) {
        match.found = true;
        hintCellKey = null;
        this.streak++;
        return true;
      }
      return false;
    };

    const renderSoup = () => {
      const foundCount = placedWords.filter((pw) => pw.found).length;
      const allFound = foundCount === placedWords.length;

      // Map cell coordinates to found color classes
      const cellFoundMap = {};
      placedWords.forEach((pw) => {
        if (pw.found) {
          pw.cells.forEach((pt) => {
            cellFoundMap[`${pt.r}_${pt.c}`] = `soup-found-${pw.colorIndex}`;
          });
        }
      });

      const activeLine = getLineCells(startCell, hoverCell || startCell);
      const activeSet = new Set(activeLine.map((pt) => `${pt.r}_${pt.c}`));

      this.container.innerHTML = `
        <div class="activity-stage">
          ${this.renderHeaderBar('actWordSoupTitle', false)}
          <p class="activity-instr pretty-text">${this.t('wordSoupInstr')}</p>

          <div class="soup-layout">
            <div class="soup-grid-wrapper">
              <div class="soup-grid" id="soupGrid" style="grid-template-columns: repeat(${gridSize}, 1fr);">
                ${grid.map((row, r) => row.map((ch, c) => {
                  const key = `${r}_${c}`;
                  const foundCls = cellFoundMap[key] || '';
                  const activeCls = activeSet.has(key) ? 'soup-cell-active' : '';
                  const hintCls = hintCellKey === key ? 'soup-cell-hint' : '';
                  return `
                    <button type="button" class="soup-cell ${foundCls} ${activeCls} ${hintCls}" data-r="${r}" data-c="${c}">
                      ${ch}
                    </button>
                  `;
                }).join('')).join('')}
              </div>
            </div>

            <div class="soup-sidebar">
              <div class="soup-status-head">
                <strong>${this.t('wordSoupFoundCount', { found: foundCount, total: placedWords.length })}</strong>
              </div>
              <div class="soup-wordlist">
                ${placedWords.map((pw) => `
                  <div class="soup-word-pill ${pw.found ? `word-pill-found soup-found-${pw.colorIndex}` : ''}">
                    <span>${pw.found ? '✅' : '⬜'} ${pw.word}</span>
                  </div>
                `).join('')}
              </div>

              <div class="soup-actions">
                <button type="button" class="btn btn-secondary btn-sm" id="soupHintBtn">${this.t('revealHintBtn')}</button>
                <button type="button" class="btn btn-secondary btn-sm" id="soupNewBtn">${this.t('wordSoupNewGridBtn')}</button>
              </div>

              ${allFound ? `
                <div class="activity-feedback feedback-success">
                  ${this.getRandomCheer()}
                  <div style="margin-top:10px;">
                    <button type="button" class="btn btn-primary" id="soupFinishBtn">${this.t('nextWordBtn')}</button>
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;

      this.bindHeaderBarEvents();

      const cells = this.container.querySelectorAll('.soup-cell');
      cells.forEach((cellEl) => {
        const r = parseInt(cellEl.dataset.r, 10);
        const c = parseInt(cellEl.dataset.c, 10);

        // Two-tap selection OR pointer drag support
        cellEl.addEventListener('click', () => {
          if (!startCell) {
            startCell = { r, c };
            hoverCell = { r, c };
            renderSoup();
          } else {
            checkSelection(startCell, { r, c });
            startCell = null;
            hoverCell = null;
            renderSoup();
          }
        });

        cellEl.addEventListener('pointerdown', (e) => {
          if (e.pointerType === 'touch') return; // On touch, two-tap or touchmove works cleanly
          isDragging = true;
          startCell = { r, c };
          hoverCell = { r, c };
        });

        cellEl.addEventListener('pointerenter', () => {
          if (isDragging && startCell) {
            hoverCell = { r, c };
            renderSoup();
          }
        });
      });

      const gridEl = this.container.querySelector('#soupGrid');
      if (gridEl) {
        gridEl.addEventListener('pointerup', () => {
          if (isDragging && startCell && hoverCell && (startCell.r !== hoverCell.r || startCell.c !== hoverCell.c)) {
            checkSelection(startCell, hoverCell);
            startCell = null;
            hoverCell = null;
            isDragging = false;
            renderSoup();
          } else {
            isDragging = false;
          }
        });
      }

      const hintBtn = this.container.querySelector('#soupHintBtn');
      if (hintBtn) {
        hintBtn.addEventListener('click', () => {
          const unfound = placedWords.find((pw) => !pw.found);
          if (unfound && unfound.cells.length > 0) {
            const firstPt = unfound.cells[0];
            hintCellKey = `${firstPt.r}_${firstPt.c}`;
            startCell = { r: firstPt.r, c: firstPt.c };
            renderSoup();
          }
        });
      }

      const newBtn = this.container.querySelector('#soupNewBtn');
      if (newBtn) {
        newBtn.addEventListener('click', () => {
          this.words = this.shuffle(this.words);
          this.renderWordSoup();
        });
      }

      const finishBtn = this.container.querySelector('#soupFinishBtn');
      if (finishBtn) {
        finishBtn.addEventListener('click', () => this.renderCompletionScreen());
      }
    };

    renderSoup();
  }

  // =========================================================================
  // ACTIVITY 3: CROSSWORD PUZZLE (CRUCIGRAMA)
  // =========================================================================
  buildCrosswordLayout(wordObjects) {
    const subset = [...wordObjects]
      .slice(0, 7)
      .sort((a, b) => b.word.length - a.word.length);

    const size = 24;
    const board = Array.from({ length: size }, () => Array(size).fill(null));
    const placed = [];

    const canPlaceWord = (word, r, c, dir) => {
      const dr = dir === 'down' ? 1 : 0;
      const dc = dir === 'across' ? 1 : 0;
      if (r < 1 || c < 1) return -1;
      if (r + dr * word.length >= size - 1 || c + dc * word.length >= size - 1) return -1;

      // Cell before start and cell after end must be empty
      if (board[r - dr][c - dc] !== null) return -1;
      if (board[r + dr * word.length][c + dc * word.length] !== null) return -1;

      let intersections = 0;
      for (let i = 0; i < word.length; i++) {
        const cr = r + dr * i;
        const cc = c + dc * i;
        const existing = board[cr][cc];
        if (existing !== null) {
          if (existing !== word[i]) return -1;
          intersections++;
        } else {
          // Perpendicular neighbor cells must be empty so we don't create unintended adjacent words
          if (dir === 'across') {
            if (board[cr - 1][cc] !== null || board[cr + 1][cc] !== null) return -1;
          } else {
            if (board[cr][cc - 1] !== null || board[cr][cc + 1] !== null) return -1;
          }
        }
      }
      return intersections;
    };

    const placeWordOnBoard = (wObj, r, c, dir) => {
      const word = wObj.word.toUpperCase();
      const dr = dir === 'down' ? 1 : 0;
      const dc = dir === 'across' ? 1 : 0;
      for (let i = 0; i < word.length; i++) {
        board[r + dr * i][c + dc * i] = word[i];
      }
      placed.push({ word, wordObj: wObj, r, c, dir });
    };

    if (subset.length > 0) {
      // Place first longest word horizontally in the middle
      const first = subset[0];
      const startC = Math.max(2, Math.floor((size - first.word.length) / 2));
      placeWordOnBoard(first, Math.floor(size / 2), startC, 'across');

      for (let idx = 1; idx < subset.length; idx++) {
        const wObj = subset[idx];
        const word = wObj.word.toUpperCase();
        let bestCandidate = null;

        for (let r = 1; r < size - 1; r++) {
          for (let c = 1; c < size - 1; c++) {
            for (const dir of ['down', 'across']) {
              const score = canPlaceWord(word, r, c, dir);
              if (score > 0 && (!bestCandidate || score > bestCandidate.score)) {
                bestCandidate = { r, c, dir, score };
              }
            }
          }
        }

        if (bestCandidate) {
          placeWordOnBoard(wObj, bestCandidate.r, bestCandidate.c, bestCandidate.dir);
        } else {
          // Fallback: find an open horizontal row if no intersection letter exists
          for (let r = 2; r < size - 2; r += 2) {
            if (canPlaceWord(word, r, 3, 'across') >= 0) {
              placeWordOnBoard(wObj, r, 3, 'across');
              break;
            }
          }
        }
      }
    }

    // Crop bounding box
    let minR = size, maxR = 0, minC = size, maxC = 0;
    placed.forEach((p) => {
      const dr = p.dir === 'down' ? 1 : 0;
      const dc = p.dir === 'across' ? 1 : 0;
      minR = Math.min(minR, p.r);
      maxR = Math.max(maxR, p.r + dr * (p.word.length - 1));
      minC = Math.min(minC, p.c);
      maxC = Math.max(maxC, p.c + dc * (p.word.length - 1));
    });

    const rows = Math.max(1, maxR - minR + 1);
    const cols = Math.max(1, maxC - minC + 1);

    // Adjust coordinates and assign clue numbers in top-to-bottom, left-to-right order
    placed.forEach((p) => {
      p.r -= minR;
      p.c -= minC;
    });
    placed.sort((a, b) => (a.r - b.r) || (a.c - b.c));

    let nextNumber = 1;
    const startCoordNumber = {};
    placed.forEach((p) => {
      const key = `${p.r}_${p.c}`;
      if (!startCoordNumber[key]) {
        startCoordNumber[key] = nextNumber++;
      }
      p.number = startCoordNumber[key];
    });

    // Build cell metadata matrix
    const cells = Array.from({ length: rows }, (_, r) =>
      Array.from({ length: cols }, (__, c) => ({
        r,
        c,
        solution: board[r + minR][c + minC],
        userChar: '',
        number: startCoordNumber[`${r}_${c}`] || null,
        wordIndices: []
      }))
    );

    placed.forEach((p, pIdx) => {
      const dr = p.dir === 'down' ? 1 : 0;
      const dc = p.dir === 'across' ? 1 : 0;
      for (let i = 0; i < p.word.length; i++) {
        cells[p.r + dr * i][p.c + dc * i].wordIndices.push(pIdx);
      }
    });

    return { rows, cols, cells, placed };
  }

  renderCrossword() {
    const layout = this.buildCrosswordLayout(this.words);
    const { rows, cols, cells, placed } = layout;

    let activeWordIdx = 0;
    let activeCell = placed.length > 0 ? { r: placed[0].r, c: placed[0].c } : { r: 0, c: 0 };
    let checkedState = false;
    let puzzleSolved = false;

    const getActiveWordCells = () => {
      const pw = placed[activeWordIdx];
      if (!pw) return [];
      const dr = pw.dir === 'down' ? 1 : 0;
      const dc = pw.dir === 'across' ? 1 : 0;
      const list = [];
      for (let i = 0; i < pw.word.length; i++) {
        list.push({ r: pw.r + dr * i, c: pw.c + dc * i });
      }
      return list;
    };

    const advanceCursor = (step = 1) => {
      const list = getActiveWordCells();
      const idx = list.findIndex((pt) => pt.r === activeCell.r && pt.c === activeCell.c);
      if (idx !== -1 && idx + step >= 0 && idx + step < list.length) {
        activeCell = list[idx + step];
      }
    };

    const checkIfCompleted = () => {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (cells[r][c].solution && cells[r][c].userChar !== cells[r][c].solution) {
            return false;
          }
        }
      }
      return true;
    };

    const renderView = (feedbackMsg = '') => {
      const lang = window.appStore.getLang();
      const activeWordCells = new Set(getActiveWordCells().map((pt) => `${pt.r}_${pt.c}`));
      const acrossWords = placed.map((p, idx) => ({ ...p, idx })).filter((p) => p.dir === 'across');
      const downWords = placed.map((p, idx) => ({ ...p, idx })).filter((p) => p.dir === 'down');

      this.container.innerHTML = `
        <div class="activity-stage">
          ${this.renderHeaderBar('actCrosswordTitle', false)}
          <p class="activity-instr pretty-text">${this.t('crosswordInstr')}</p>

          <div class="crossword-layout">
            <div class="crossword-board-col">
              <div class="crossword-grid" style="grid-template-columns: repeat(${cols}, minmax(30px, 44px));">
                ${cells.map((row) => row.map((cell) => {
                  if (!cell.solution) {
                    return `<div class="cw-cell cw-block"></div>`;
                  }
                  const isFocused = activeCell.r === cell.r && activeCell.c === cell.c;
                  const isInWord = activeWordCells.has(`${cell.r}_${cell.c}`);
                  let checkCls = '';
                  if (checkedState && cell.userChar) {
                    checkCls = cell.userChar === cell.solution ? 'cw-correct' : 'cw-wrong';
                  }
                  return `
                    <button type="button" class="cw-cell cw-letter ${isFocused ? 'cw-focused' : (isInWord ? 'cw-in-word' : '')} ${checkCls}" data-r="${cell.r}" data-c="${cell.c}">
                      ${cell.number ? `<span class="cw-num">${cell.number}</span>` : ''}
                      <span class="cw-char">${cell.userChar}</span>
                    </button>
                  `;
                }).join('')).join('')}
              </div>

              <!-- On-screen Kid Keyboard for iPad / iPhone -->
              <div class="kid-keyboard">
                ${'QWERTYUIOP,ASDFGHJKL,ZXCVBNM'.split(',').map((rowStr) => `
                  <div class="kb-row">
                    ${rowStr.split('').map((ch) => `
                      <button type="button" class="kb-key" data-key="${ch}">${ch}</button>
                    `).join('')}
                  </div>
                `).join('')}
                <div class="kb-row">
                  <button type="button" class="btn btn-secondary btn-sm" id="cwBackspaceBtn">${this.t('clearLettersBtn')}</button>
                  <button type="button" class="btn btn-secondary btn-sm" id="cwHintBtn">${this.t('crosswordRevealLetterBtn')}</button>
                  <button type="button" class="btn btn-primary btn-sm" id="cwCheckBtn">${this.t('crosswordCheckBtn')}</button>
                </div>
              </div>
            </div>

            <div class="crossword-clues-col">
              ${acrossWords.length > 0 ? `
                <div class="clue-group-box">
                  <h4>➡️ ${this.t('crosswordAcross')}</h4>
                  ${acrossWords.map((p) => `
                    <div class="cw-clue-item ${p.idx === activeWordIdx ? 'cw-clue-active' : ''}" data-word-idx="${p.idx}">
                      <strong>${p.number}.</strong> ${window.getWordClue(p.wordObj, lang)}
                      <span class="cw-len-tag">(${p.word.length})</span>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              ${downWords.length > 0 ? `
                <div class="clue-group-box">
                  <h4>⬇️ ${this.t('crosswordDown')}</h4>
                  ${downWords.map((p) => `
                    <div class="cw-clue-item ${p.idx === activeWordIdx ? 'cw-clue-active' : ''}" data-word-idx="${p.idx}">
                      <strong>${p.number}.</strong> ${window.getWordClue(p.wordObj, lang)}
                      <span class="cw-len-tag">(${p.word.length})</span>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              ${feedbackMsg ? `
                <div class="activity-feedback ${puzzleSolved ? 'feedback-success' : 'feedback-error'}">
                  ${feedbackMsg}
                  ${puzzleSolved ? `
                    <div style="margin-top:10px;">
                      <button type="button" class="btn btn-primary" id="cwDoneBtn">${this.t('nextWordBtn')}</button>
                    </div>
                  ` : ''}
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;

      this.bindHeaderBarEvents();

      this.container.querySelectorAll('.cw-letter').forEach((btn) => {
        btn.addEventListener('click', () => {
          const r = parseInt(btn.dataset.r, 10);
          const c = parseInt(btn.dataset.c, 10);
          const cell = cells[r][c];
          if (activeCell.r === r && activeCell.c === c && cell.wordIndices.length > 1) {
            // Toggle between intersecting Across and Down words
            const otherIdx = cell.wordIndices.find((id) => id !== activeWordIdx);
            if (otherIdx !== undefined) activeWordIdx = otherIdx;
          } else if (!cell.wordIndices.includes(activeWordIdx) && cell.wordIndices.length > 0) {
            activeWordIdx = cell.wordIndices[0];
          }
          activeCell = { r, c };
          renderView();
        });
      });

      this.container.querySelectorAll('.cw-clue-item').forEach((item) => {
        item.addEventListener('click', () => {
          const wIdx = parseInt(item.dataset.wordIdx, 10);
          activeWordIdx = wIdx;
          activeCell = { r: placed[wIdx].r, c: placed[wIdx].c };
          renderView();
        });
      });

      this.container.querySelectorAll('.kb-key').forEach((keyBtn) => {
        keyBtn.addEventListener('click', () => {
          typeChar(keyBtn.dataset.key);
        });
      });

      const bsBtn = this.container.querySelector('#cwBackspaceBtn');
      if (bsBtn) {
        bsBtn.addEventListener('click', () => handleBackspace());
      }

      const hintBtn = this.container.querySelector('#cwHintBtn');
      if (hintBtn) {
        hintBtn.addEventListener('click', () => {
          const cell = cells[activeCell.r][activeCell.c];
          if (cell && cell.solution) {
            cell.userChar = cell.solution;
            checkedState = false;
            if (checkIfCompleted()) {
              puzzleSolved = true;
              this.streak++;
              renderView(this.getRandomCheer());
            } else {
              advanceCursor(1);
              renderView();
            }
          }
        });
      }

      const checkBtn = this.container.querySelector('#cwCheckBtn');
      if (checkBtn) {
        checkBtn.addEventListener('click', () => {
          checkedState = true;
          if (checkIfCompleted()) {
            puzzleSolved = true;
            this.streak++;
            renderView(this.getRandomCheer());
          } else {
            renderView(this.t('tryAgainMsg'));
          }
        });
      }

      const doneBtn = this.container.querySelector('#cwDoneBtn');
      if (doneBtn) {
        doneBtn.addEventListener('click', () => this.renderCompletionScreen());
      }
    };

    const typeChar = (ch) => {
      if (puzzleSolved) return;
      const cell = cells[activeCell.r][activeCell.c];
      if (!cell || !cell.solution) return;
      cell.userChar = ch.toUpperCase();
      checkedState = false;
      if (checkIfCompleted()) {
        puzzleSolved = true;
        this.streak++;
        renderView(this.getRandomCheer());
      } else {
        advanceCursor(1);
        renderView();
      }
    };

    const handleBackspace = () => {
      if (puzzleSolved) return;
      const cell = cells[activeCell.r][activeCell.c];
      if (cell && cell.userChar) {
        cell.userChar = '';
      } else {
        advanceCursor(-1);
        const prev = cells[activeCell.r][activeCell.c];
        if (prev) prev.userChar = '';
      }
      checkedState = false;
      renderView();
    };

    this.keyHandler = (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        typeChar(e.key.toUpperCase());
      }
    };
    window.addEventListener('keydown', this.keyHandler);

    renderView();
  }

  // =========================================================================
  // ACTIVITY 4: HONEYCOMB SCRAMBLE (ANAGRAM UNSCRAMBLER)
  // =========================================================================
  renderScramble() {
    if (this.wordIndex >= this.words.length) {
      this.renderCompletionScreen();
      return;
    }

    const wordObj = this.words[this.wordIndex];
    const target = wordObj.word.toLowerCase();
    const chars = target.split('');
    const lang = window.appStore.getLang();
    const clue = window.getWordClue(wordObj, lang);

    // Ensure scrambled order is different from original word
    let scrambled = this.shuffle(chars.map((letter, idx) => ({ id: `sc_${idx}`, letter, used: false })));
    if (scrambled.map((s) => s.letter).join('') === target && chars.length > 1) {
      scrambled.reverse();
    }

    const chosen = [];
    let solved = false;

    const renderView = (feedbackMsg = '', isSuccess = false, isError = false) => {
      this.container.innerHTML = `
        <div class="activity-stage">
          ${this.renderHeaderBar('actScrambleTitle', true)}
          <p class="activity-instr pretty-text">${this.t('scrambleInstr')}</p>

          <div class="clue-banner">
            <span class="clue-tag">${this.t('clueLabel')}</span>
            <span class="clue-text">${clue}</span>
          </div>

          <div class="word-slots-row">
            ${chars.map((ch, idx) => {
              const item = chosen[idx];
              const cls = solved ? 'slot-correct' : (isError && item && item.letter !== ch ? 'slot-wrong' : '');
              return `
                <button type="button" class="letter-slot blank-slot ${item ? 'filled-slot' : ''} ${cls}" data-slot-idx="${idx}">
                  ${item ? item.letter.toUpperCase() : ''}
                </button>
              `;
            }).join('')}
          </div>

          ${feedbackMsg ? `
            <div class="activity-feedback ${isSuccess ? 'feedback-success' : 'feedback-error'}">
              ${feedbackMsg}
            </div>
          ` : ''}

          <div class="tile-bank-row">
            ${scrambled.map((tile) => `
              <button type="button" class="hex-tile ${tile.used ? 'tile-used' : ''}" data-tile-id="${tile.id}" ${tile.used || solved ? 'disabled' : ''}>
                ${tile.letter.toUpperCase()}
              </button>
            `).join('')}
          </div>

          <div class="activity-controls-row">
            ${!solved ? `
              <button type="button" class="btn btn-secondary" id="scShuffleBtn">${this.t('shuffleTilesBtn')}</button>
              <button type="button" class="btn btn-secondary" id="scHintBtn">${this.t('revealHintBtn')}</button>
              <button type="button" class="btn btn-secondary" id="scClearBtn">${this.t('clearLettersBtn')}</button>
            ` : `
              <button type="button" class="btn btn-primary btn-lg pulse-btn" id="scNextBtn">${this.t('nextWordBtn')}</button>
            `}
          </div>
        </div>
      `;

      this.bindHeaderBarEvents();

      this.container.querySelectorAll('.blank-slot').forEach((slotBtn) => {
        slotBtn.addEventListener('click', () => {
          if (solved) return;
          const idx = parseInt(slotBtn.dataset.slotIdx, 10);
          if (chosen[idx]) {
            const removed = chosen.splice(idx, 1)[0];
            const t = scrambled.find((x) => x.id === removed.id);
            if (t) t.used = false;
            renderView();
          }
        });
      });

      this.container.querySelectorAll('.hex-tile').forEach((tileBtn) => {
        tileBtn.addEventListener('click', () => {
          if (solved) return;
          const tile = scrambled.find((x) => x.id === tileBtn.dataset.tileId);
          if (!tile || tile.used) return;
          tile.used = true;
          chosen.push(tile);
          checkProgress();
        });
      });

      const shuffleBtn = this.container.querySelector('#scShuffleBtn');
      if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
          scrambled = this.shuffle(scrambled);
          renderView();
        });
      }

      const hintBtn = this.container.querySelector('#scHintBtn');
      if (hintBtn) {
        hintBtn.addEventListener('click', () => {
          // Find first index where chosen doesn't match target
          let mismatchIdx = chosen.findIndex((c, i) => c.letter !== chars[i]);
          if (mismatchIdx !== -1) {
            // Remove from mismatchIdx onwards
            const removedList = chosen.splice(mismatchIdx);
            removedList.forEach((r) => {
              const t = scrambled.find((x) => x.id === r.id);
              if (t) t.used = false;
            });
          }
          const nextIdx = chosen.length;
          if (nextIdx < chars.length) {
            const needed = chars[nextIdx];
            const tile = scrambled.find((x) => !x.used && x.letter === needed);
            if (tile) {
              tile.used = true;
              chosen.push(tile);
              checkProgress();
            }
          }
        });
      }

      const clearBtn = this.container.querySelector('#scClearBtn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          chosen.length = 0;
          scrambled.forEach((t) => { t.used = false; });
          renderView();
        });
      }

      const nextBtn = this.container.querySelector('#scNextBtn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          this.wordIndex++;
          this.renderScramble();
        });
      }
    };

    const checkProgress = () => {
      if (chosen.length === chars.length) {
        const attempt = chosen.map((c) => c.letter).join('');
        if (attempt === target) {
          solved = true;
          this.streak++;
          renderView(this.getRandomCheer(), true, false);
        } else {
          this.streak = 0;
          renderView(this.t('tryAgainMsg'), false, true);
        }
      } else {
        renderView();
      }
    };

    renderView();
  }

  // =========================================================================
  // ACTIVITY 5: SAVE THE HONEY JARS (FRIENDLY BEE LETTER GUESS)
  // =========================================================================
  renderBeeKeeper() {
    if (this.wordIndex >= this.words.length) {
      this.renderCompletionScreen();
      return;
    }

    const wordObj = this.words[this.wordIndex];
    const target = wordObj.word.toLowerCase();
    const chars = target.split('');
    const lang = window.appStore.getLang();
    const clue = window.getWordClue(wordObj, lang);

    const guessed = new Set();
    // Pre-reveal first letter if word is 7+ letters so 3rd graders get a friendly start
    if (chars.length >= 7) {
      guessed.add(chars[0]);
    }
    let jarsLeft = 6;
    let gameOver = false;
    let won = false;

    const renderView = () => {
      const jarsDisplay = '🍯'.repeat(jarsLeft) + '🫙'.repeat(6 - jarsLeft);
      this.container.innerHTML = `
        <div class="activity-stage">
          ${this.renderHeaderBar('actBeeKeeperTitle', true)}
          <p class="activity-instr pretty-text">${this.t('beeKeeperInstr')}</p>

          <div class="honey-jar-meter">
            <span class="jar-icons">${jarsDisplay}</span>
            <span class="jar-label">${this.t('beeKeeperJarsLeft', { jars: jarsLeft })}</span>
          </div>

          <div class="clue-banner">
            <span class="clue-tag">${this.t('clueLabel')}</span>
            <span class="clue-text">${clue}</span>
          </div>

          <div class="word-slots-row">
            ${chars.map((ch) => {
              const show = guessed.has(ch) || gameOver;
              const cls = won ? 'slot-correct' : (gameOver && !guessed.has(ch) ? 'slot-wrong' : '');
              return `
                <div class="letter-slot ${show ? 'filled-slot' : 'blank-slot'} ${cls}">
                  ${show ? ch.toUpperCase() : '_'}
                </div>
              `;
            }).join('')}
          </div>

          ${gameOver ? `
            <div class="activity-feedback ${won ? 'feedback-success' : 'feedback-error'}">
              ${won ? this.getRandomCheer() : `${this.t('tryAgainMsg')} (${target.toUpperCase()})`}
            </div>
          ` : ''}

          <div class="alphabet-grid">
            ${'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => {
              const used = guessed.has(letter);
              const isHit = used && target.includes(letter);
              const isMiss = used && !target.includes(letter);
              return `
                <button type="button" class="alpha-btn ${isHit ? 'alpha-hit' : ''} ${isMiss ? 'alpha-miss' : ''}" data-letter="${letter}" ${used || gameOver ? 'disabled' : ''}>
                  ${letter.toUpperCase()}
                </button>
              `;
            }).join('')}
          </div>

          <div class="activity-controls-row">
            ${!gameOver ? `
              <button type="button" class="btn btn-secondary" id="bkHintBtn">${this.t('revealHintBtn')}</button>
            ` : `
              <button type="button" class="btn btn-primary btn-lg pulse-btn" id="bkNextBtn">${this.t('nextWordBtn')}</button>
            `}
          </div>
        </div>
      `;

      this.bindHeaderBarEvents();

      this.container.querySelectorAll('.alpha-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          guessLetter(btn.dataset.letter);
        });
      });

      const hintBtn = this.container.querySelector('#bkHintBtn');
      if (hintBtn) {
        hintBtn.addEventListener('click', () => {
          const unguessedChar = chars.find((c) => !guessed.has(c));
          if (unguessedChar) {
            guessLetter(unguessedChar);
          }
        });
      }

      const nextBtn = this.container.querySelector('#bkNextBtn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          this.wordIndex++;
          this.renderBeeKeeper();
        });
      }
    };

    const guessLetter = (letter) => {
      if (gameOver || guessed.has(letter)) return;
      guessed.add(letter);
      if (!target.includes(letter)) {
        jarsLeft = Math.max(0, jarsLeft - 1);
      }
      if (chars.every((c) => guessed.has(c))) {
        won = true;
        gameOver = true;
        this.streak++;
      } else if (jarsLeft === 0) {
        won = false;
        gameOver = true;
        this.streak = 0;
      }
      renderView();
    };

    renderView();
  }

  // =========================================================================
  // ACTIVITY 6: LOOK, COVER & SPELL (FLASH MEMORY SPELLER)
  // =========================================================================
  renderFlashSpell() {
    if (this.wordIndex >= this.words.length) {
      this.renderCompletionScreen();
      return;
    }

    const wordObj = this.words[this.wordIndex];
    const target = wordObj.word.toLowerCase();
    const chars = target.split('');
    const lang = window.appStore.getLang();
    const clue = window.getWordClue(wordObj, lang);

    let isVisible = true;
    let secondsLeft = 3;
    let typedChars = [];
    let solved = false;

    const startCountdown = () => {
      if (this.flashTimer) clearInterval(this.flashTimer);
      isVisible = true;
      secondsLeft = 3;
      renderView();
      this.flashTimer = setInterval(() => {
        secondsLeft--;
        if (secondsLeft <= 0) {
          clearInterval(this.flashTimer);
          this.flashTimer = null;
          isVisible = false;
        }
        renderView();
      }, 1000);
    };

    const renderView = (feedbackMsg = '', isSuccess = false, isError = false) => {
      this.container.innerHTML = `
        <div class="activity-stage">
          ${this.renderHeaderBar('actFlashSpellTitle', true)}
          <p class="activity-instr pretty-text">${this.t('flashSpellInstr')}</p>

          <div class="clue-banner">
            <span class="clue-tag">${this.t('clueLabel')}</span>
            <span class="clue-text">${clue}</span>
          </div>

          <div class="flash-curtain-box ${isVisible ? 'curtain-open' : 'curtain-closed'}">
            ${isVisible ? `
              <div class="flash-word-preview">
                ${chars.map((ch) => `<span class="flash-char ${/[aeiou]/.test(ch) ? 'vowel-char' : ''}">${ch.toUpperCase()}</span>`).join('')}
              </div>
              <div class="flash-countdown">${this.t('flashLookNow', { sec: secondsLeft })}</div>
            ` : `
              <div class="flash-hidden-msg">🐝 ${this.t('flashNowSpell')}</div>
            `}
          </div>

          ${!isVisible ? `
            <div class="word-slots-row">
              ${chars.map((ch, idx) => {
                const userCh = typedChars[idx] || '';
                const cls = solved ? 'slot-correct' : (isError && userCh && userCh !== ch ? 'slot-wrong' : '');
                return `
                  <div class="letter-slot ${userCh ? 'filled-slot' : 'blank-slot'} ${cls}">
                    ${userCh ? userCh.toUpperCase() : '_'}
                  </div>
                `;
              }).join('')}
            </div>

            ${feedbackMsg ? `
              <div class="activity-feedback ${isSuccess ? 'feedback-success' : 'feedback-error'}">
                ${feedbackMsg}
              </div>
            ` : ''}

            <div class="kid-keyboard">
              ${'QWERTYUIOP,ASDFGHJKL,ZXCVBNM'.split(',').map((rowStr) => `
                <div class="kb-row">
                  ${rowStr.split('').map((ch) => `
                    <button type="button" class="kb-key" data-key="${ch}" ${solved ? 'disabled' : ''}>${ch}</button>
                  `).join('')}
                </div>
              `).join('')}
            </div>

            <div class="activity-controls-row">
              ${!solved ? `
                <button type="button" class="btn btn-secondary" id="flPeekBtn">${this.t('flashPeekBtn')}</button>
                <button type="button" class="btn btn-secondary" id="flBackBtn">${this.t('clearLettersBtn')}</button>
              ` : `
                <button type="button" class="btn btn-primary btn-lg pulse-btn" id="flNextBtn">${this.t('nextWordBtn')}</button>
              `}
            </div>
          ` : ''}
        </div>
      `;

      this.bindHeaderBarEvents();

      this.container.querySelectorAll('.kb-key').forEach((btn) => {
        btn.addEventListener('click', () => {
          handleCharInput(btn.dataset.key.toLowerCase());
        });
      });

      const peekBtn = this.container.querySelector('#flPeekBtn');
      if (peekBtn) {
        peekBtn.addEventListener('click', () => startCountdown());
      }

      const backBtn = this.container.querySelector('#flBackBtn');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          typedChars.pop();
          renderView();
        });
      }

      const nextBtn = this.container.querySelector('#flNextBtn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          this.wordIndex++;
          this.renderFlashSpell();
        });
      }
    };

    const handleCharInput = (ch) => {
      if (isVisible || solved) return;
      if (typedChars.length < chars.length) {
        typedChars.push(ch);
        if (typedChars.length === chars.length) {
          if (typedChars.join('') === target) {
            solved = true;
            this.streak++;
            renderView(this.getRandomCheer(), true, false);
          } else {
            this.streak = 0;
            renderView(this.t('tryAgainMsg'), false, true);
          }
        } else {
          renderView();
        }
      }
    };

    this.keyHandler = (e) => {
      if (isVisible || solved) return;
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.key === 'Backspace') {
        typedChars.pop();
        renderView();
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        handleCharInput(e.key.toLowerCase());
      }
    };
    window.addEventListener('keydown', this.keyHandler);

    startCountdown();
  }
}

window.StudyActivitiesEngine = StudyActivitiesEngine;
