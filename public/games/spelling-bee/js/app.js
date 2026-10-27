// Main Application Controller for BeeReady! 3rd Grade Spelling Bee Coach

class AppController {
  constructor() {
    this.activeTab = 'words'; // 'words' | 'study' | 'test' | 'scores'
    this.activeInputMode = 'manual'; // 'manual' | 'paste' | 'camera'
    this.extractedCandidates = []; // [{ word, hint, selected, length, uniqueChars, rawScore }]
    this.selectedGroupFilter = 'all'; // 'all' | 1..N
    this.wordSearchQuery = '';
    this.selectedStudyGroup = 1;
    this.ocrBusy = false;
    this.ocrProgress = 0;
    this.lastUploadedImage = null;

    this.studyEngine = new window.StudyActivitiesEngine(
      document.getElementById('studyStageContainer'),
      (groupNum) => {
        this.switchTab('test');
        this.testEngine.selectedGroup = groupNum;
        this.testEngine.startGroupTest(groupNum);
      }
    );

    this.testEngine = new window.SpellingTestEngine(
      document.getElementById('testStageContainer')
    );

    this.initDialogsWithLightDismissFallback();
    this.bindGlobalEvents();

    window.appStore.subscribe(() => {
      this.renderAll();
    });

    this.renderAll();
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

  // Apply light-dismiss fallback for browsers without native <dialog closedby="any"> support (e.g. iOS/iPadOS Safari)
  initDialogsWithLightDismissFallback() {
    document.querySelectorAll('dialog').forEach((dialog) => {
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        dialog.addEventListener('click', (event) => {
          if (event.target !== dialog) return;
          const rect = dialog.getBoundingClientRect();
          const isDialogContent = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
          );
          if (isDialogContent) return;
          dialog.close();
        });
      }
    });
  }

  showToast(message) {
    const toast = document.getElementById('appToast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('toast-visible');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove('toast-visible');
    }, 3000);
  }

  bindGlobalEvents() {
    // Language Toggle
    document.getElementById('langEnBtn').addEventListener('click', () => {
      window.appStore.setLang('en');
    });
    document.getElementById('langEsBtn').addEventListener('click', () => {
      window.appStore.setLang('es');
    });

    // Main Navigation Tabs
    document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.switchTab(btn.dataset.tab);
      });
    });

    // Active Word Set Dropdown
    const setSelect = document.getElementById('activeSetSelect');
    setSelect.addEventListener('change', (e) => {
      window.appStore.setActiveSet(e.target.value);
      this.studyEngine.exitToPicker();
      this.testEngine.activeSession = null;
      this.renderAll();
    });

    // Header Modal Triggers
    document.getElementById('openSetsModalBtn').addEventListener('click', () => {
      this.renderSetsModalContent();
      document.getElementById('setsDialog').showModal();
    });

    document.getElementById('openConnectModalBtn').addEventListener('click', () => {
      this.openConnectDeviceModal();
    });

    document.getElementById('openBackupModalBtn').addEventListener('click', () => {
      document.getElementById('backupDialog').showModal();
    });

    // Backup Export / Import
    document.getElementById('exportBackupBtn').addEventListener('click', () => {
      const jsonStr = window.appStore.exportJSON();
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `beeready-spelling-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    const importInput = document.getElementById('importBackupInput');
    document.getElementById('importBackupBtn').addEventListener('click', () => {
      importInput.click();
    });
    importInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          window.appStore.importJSON(reader.result);
          document.getElementById('backupDialog').close();
          this.showToast('✅ Backup restored!');
        } catch (err) {
          alert('Invalid backup file: ' + err.message);
        }
      };
      reader.readAsText(file);
    });
  }

  switchTab(tabName, studyGroupOverride = null) {
    this.activeTab = tabName;
    if (studyGroupOverride) {
      this.selectedStudyGroup = studyGroupOverride;
    }
    if (tabName !== 'study') {
      this.studyEngine.cleanupTimersAndListeners();
    }
    this.renderAll();
  }

  renderAll() {
    this.renderHeaderAndNav();
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.hidden = panel.id !== `panel-${this.activeTab}`;
    });

    if (this.activeTab === 'words') {
      this.renderWordsTab();
    } else if (this.activeTab === 'study') {
      this.renderStudyTab();
    } else if (this.activeTab === 'test') {
      this.renderTestTab();
    } else if (this.activeTab === 'scores') {
      this.renderScoresTab();
    }
  }

  renderHeaderAndNav() {
    const lang = window.appStore.getLang();
    document.documentElement.lang = lang;

    document.getElementById('appTitleText').textContent = this.t('appTitle');
    document.getElementById('appSubtitleText').textContent = this.t('appSubtitle');
    document.getElementById('activeSetLabelText').textContent = this.t('activeSetLabel');
    document.getElementById('openSetsModalText').textContent = this.t('manageSetsBtn');
    document.getElementById('openConnectModalText').textContent = this.t('connectDeviceBtn');
    document.getElementById('openBackupModalText').textContent = this.t('backupBtn');

    document.getElementById('langEnBtn').classList.toggle('active', lang === 'en');
    document.getElementById('langEsBtn').classList.toggle('active', lang === 'es');

    // Populate Set Selector
    const select = document.getElementById('activeSetSelect');
    const sets = window.appStore.state.sets || [];
    const activeSet = window.appStore.getActiveSet();
    select.innerHTML = sets.map((s) => `
      <option value="${s.id}" ${s.id === activeSet.id ? 'selected' : ''}>
        ${this.escapeHtml(s.name)} (${(s.words || []).length})
      </option>
    `).join('');

    // Nav Tabs text & active state
    const tabMap = {
      words: this.t('tabWords'),
      study: this.t('tabStudy'),
      test: this.t('tabTest'),
      scores: this.t('tabScores')
    };
    document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
      const tKey = btn.dataset.tab;
      btn.textContent = tabMap[tKey];
      btn.classList.toggle('active', this.activeTab === tKey);
    });

    // Update static modal strings
    document.getElementById('setsModalTitle').textContent = this.t('createSetModalTitle');
    document.getElementById('connectModalTitle').textContent = this.t('connectModalTitle');
    document.getElementById('connectModalDesc').textContent = this.t('connectModalDesc');
    document.getElementById('backupModalTitle').textContent = this.t('backupModalTitle');
    document.getElementById('backupModalDesc').textContent = this.t('backupModalDesc');
    document.getElementById('exportBackupBtn').textContent = this.t('exportJsonBtn');
    document.getElementById('importBackupBtn').textContent = this.t('importJsonBtn');
    document.querySelectorAll('.close-dialog-btn').forEach((b) => {
      b.textContent = this.t('closeModalBtn');
    });
  }

  // =========================================================================
  // TAB 1: WORDS & DIFFICULTY GROUPS
  // =========================================================================
  renderWordsTab() {
    const container = document.getElementById('panel-words');
    const set = window.appStore.getActiveSet();
    const lang = window.appStore.getLang();
    const groupCount = set.groupCount || 5;
    const groupNames = (window.I18N[lang] || window.I18N.en).groupNames;

    if (this.selectedGroupFilter !== 'all' && this.selectedGroupFilter > groupCount) {
      this.selectedGroupFilter = 'all';
    }

    const selectedExtractCount = this.extractedCandidates.filter((c) => c.selected).length;

    // Filter words for display
    const allWords = set.words || [];
    const filteredWords = allWords.filter((w) => {
      if (this.selectedGroupFilter !== 'all' && w.group !== Number(this.selectedGroupFilter)) {
        return false;
      }
      if (this.wordSearchQuery && !w.word.includes(this.wordSearchQuery.toLowerCase().trim())) {
        return false;
      }
      return true;
    });

    // Group filter buttons HTML
    let filterPillsHtml = `
      <button type="button" class="filter-pill ${this.selectedGroupFilter === 'all' ? 'active' : ''}" data-filter="all">
        ${this.t('allGroupsFilter', { count: allWords.length })}
      </button>
    `;
    for (let g = 1; g <= groupCount; g++) {
      const c = allWords.filter((w) => w.group === g).length;
      const gName = groupNames[g - 1] || `Group ${g}`;
      filterPillsHtml += `
        <button type="button" class="filter-pill ${Number(this.selectedGroupFilter) === g ? 'active' : ''}" data-filter="${g}">
          ⭐ ${this.t('groupFilterItem', { num: g, name: gName, count: c })}
        </button>
      `;
    }

    container.innerHTML = `
      <!-- Section A: 3 Input Methods -->
      <section class="card input-hub-card">
        <div class="section-head">
          <div>
            <h2>${this.t('inputSectionTitle')}</h2>
            <p class="pretty-text">${this.t('inputSectionDesc')}</p>
          </div>
        </div>

        <div class="input-mode-tabs">
          <button type="button" class="input-tab-btn ${this.activeInputMode === 'manual' ? 'active' : ''}" data-imode="manual">
            ${this.t('inputTabManual')}
          </button>
          <button type="button" class="input-tab-btn ${this.activeInputMode === 'paste' ? 'active' : ''}" data-imode="paste">
            ${this.t('inputTabPaste')}
          </button>
          <button type="button" class="input-tab-btn ${this.activeInputMode === 'camera' ? 'active' : ''}" data-imode="camera">
            ${this.t('inputTabCamera')}
          </button>
        </div>

        <!-- Mode 1: Manual Input -->
        ${this.activeInputMode === 'manual' ? `
          <form id="manualAddForm" class="input-mode-body">
            <div class="form-grid-2">
              <div>
                <label class="field-label" for="manualWordInput">${this.t('manualWordLabel')}</label>
                <input type="text" id="manualWordInput" class="input-text" placeholder="${this.t('manualWordPlaceholder')}" required />
              </div>
              <div>
                <label class="field-label" for="manualHintInput">${this.t('manualHintLabel')}</label>
                <input type="text" id="manualHintInput" class="input-text" placeholder="${this.t('manualHintPlaceholder')}" />
              </div>
            </div>
            <div style="margin-top: 12px;">
              <button type="submit" class="btn btn-primary">${this.t('manualAddBtn')}</button>
            </div>
          </form>
        ` : ''}

        <!-- Mode 2: Paste Text & Extract -->
        ${this.activeInputMode === 'paste' ? `
          <div class="input-mode-body">
            <label class="field-label" for="pasteAreaInput">${this.t('pasteLabel')}</label>
            <textarea id="pasteAreaInput" class="input-textarea" rows="4" placeholder="${this.t('pastePlaceholder')}"></textarea>
            <div class="paste-options-row">
              <label class="checkbox-label">
                <input type="checkbox" id="filterShortChk" checked />
                <span>${this.t('filterShortWords')}</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" id="filterStopChk" checked />
                <span>${this.t('filterCommonStop')}</span>
              </label>
              <button type="button" class="btn btn-primary" id="runTextExtractBtn">${this.t('extractWordsBtn')}</button>
            </div>
          </div>
        ` : ''}

        <!-- Mode 3: Camera / Photo Sheet OCR -->
        ${this.activeInputMode === 'camera' ? `
          <div class="input-mode-body camera-mode-body">
            <h3>${this.t('cameraTitle')}</h3>
            <p class="pretty-text">${this.t('cameraDesc')}</p>
            <div class="camera-controls-row">
              <input type="file" id="cameraFileInput" accept="image/*" style="display:none;" />
              <button type="button" class="btn btn-primary btn-lg" id="triggerCameraBtn" ${this.ocrBusy ? 'disabled' : ''}>
                ${this.t('cameraBtn')}
              </button>
              <label class="checkbox-label">
                <input type="checkbox" id="cameraContrastChk" checked />
                <span>${this.t('cameraEnhanceLabel')}</span>
              </label>
            </div>
            ${this.ocrBusy ? `
              <div class="ocr-progress-box">
                <div class="ocr-progress-bar"><div class="ocr-progress-fill" style="width:${this.ocrProgress}%"></div></div>
                <span>${this.t('ocrRunning', { progress: this.ocrProgress })}</span>
              </div>
            ` : ''}
            <div class="camera-canvas-wrap" id="cameraCanvasWrap" style="display: ${this.lastUploadedImage ? 'block' : 'none'};">
              <canvas id="ocrPreviewCanvas"></canvas>
            </div>
          </div>
        ` : ''}

        <!-- Extracted Words Review Tray (Shared by Paste & Camera OCR) -->
        ${this.extractedCandidates.length > 0 ? `
          <div class="extracted-review-tray">
            <div class="tray-header">
              <div>
                <h4>${this.t('extractedReviewTitle', { count: this.extractedCandidates.length })}</h4>
                <p class="pretty-text">${this.t('extractedReviewDesc')}</p>
              </div>
              <div class="tray-actions">
                <button type="button" class="btn btn-secondary btn-xs" id="traySelectAllBtn">${this.t('selectAllBtn')}</button>
                <button type="button" class="btn btn-secondary btn-xs" id="trayDeselectAllBtn">${this.t('deselectAllBtn')}</button>
              </div>
            </div>
            <div class="extracted-chips-grid">
              ${this.extractedCandidates.map((cand, idx) => `
                <div class="extracted-chip ${cand.selected ? 'chip-selected' : 'chip-unselected'}" data-cidx="${idx}">
                  <input type="checkbox" class="chip-chk" data-cidx="${idx}" ${cand.selected ? 'checked' : ''} />
                  <input type="text" class="chip-word-edit" data-cidx="${idx}" value="${this.escapeHtml(cand.word)}" />
                  <span class="chip-meta">${cand.length}L • ${cand.uniqueChars}U</span>
                </div>
              `).join('')}
            </div>
            <div style="margin-top: 12px;">
              <button type="button" class="btn btn-accent" id="importExtractedBtn" ${selectedExtractCount === 0 ? 'disabled' : ''}>
                ${this.t('addSelectedWordsBtn', { count: selectedExtractCount })}
              </button>
            </div>
          </div>
        ` : ''}
      </section>

      <!-- Section B: Difficulty Groups & Word Tuning -->
      <section class="card difficulty-hub-card">
        <div class="diff-header-row">
          <div>
            <h2>${this.t('diffSectionTitle')}</h2>
            <p class="pretty-text">${this.t('diffSectionDesc')}</p>
          </div>
          <div class="group-count-controls">
            <span class="field-label">${this.t('groupCountLabel')} <strong>${groupCount}</strong></span>
            <button type="button" class="btn btn-secondary btn-sm" id="removeGroupBtn" ${groupCount <= 2 ? 'disabled' : ''}>
              ${this.t('removeGroupBtn')}
            </button>
            <button type="button" class="btn btn-secondary btn-sm" id="addGroupBtn" ${groupCount >= 10 ? 'disabled' : ''}>
              ${this.t('addGroupBtn')}
            </button>
            <button type="button" class="btn btn-secondary btn-sm" id="rebalanceSetBtn">
              ${this.t('rebalanceBtn')}
            </button>
            <button type="button" class="btn btn-secondary btn-sm" id="resetTuningBtn">
              ${this.t('resetAllTuningBtn')}
            </button>
          </div>
        </div>

        <div class="filter-bar">
          <div class="filter-pills-scroll">
            ${filterPillsHtml}
          </div>
          <div class="filter-search-wrap">
            <input type="search" id="wordSearchInput" class="input-text input-sm" placeholder="${this.t('searchWordsPlaceholder')}" value="${this.escapeHtml(this.wordSearchQuery)}" />
          </div>
        </div>

        <div class="words-groups-container">
          ${this.renderGroupedWordCards(filteredWords, groupCount, groupNames)}
        </div>
      </section>
    `;

    this.bindWordsTabEvents();
  }

  renderGroupedWordCards(filteredWords, groupCount, groupNames) {
    const lang = window.appStore.getLang();
    const groupsToShow = this.selectedGroupFilter === 'all'
      ? Array.from({ length: groupCount }, (_, i) => i + 1)
      : [Number(this.selectedGroupFilter)];

    return groupsToShow.map((gNum) => {
      const gWords = filteredWords
        .filter((w) => w.group === gNum)
        .sort((a, b) => a.rawScore - b.rawScore || a.word.localeCompare(b.word));
      const gName = groupNames[gNum - 1] || `Group ${gNum}`;

      return `
        <div class="difficulty-group-block">
          <div class="group-block-header">
            <div class="group-title-left">
              <span class="badge-group badge-g${Math.min(5, gNum)}">${'⭐'.repeat(Math.min(5, gNum))} ${lang === 'es' ? 'Grupo' : 'Group'} ${gNum}</span>
              <h3>${gName}</h3>
              <span class="word-count-tag">(${gWords.length})</span>
            </div>
            <div class="group-quick-actions">
              <button type="button" class="btn btn-secondary btn-xs study-this-group-btn" data-group="${gNum}">
                📚 ${this.t('tabStudy')}
              </button>
              <button type="button" class="btn btn-secondary btn-xs test-this-group-btn" data-group="${gNum}">
                🎤 ${this.t('tabTest')}
              </button>
            </div>
          </div>

          ${gWords.length === 0 ? `
            <div class="empty-group-box">${this.t('emptyGroupMsg')}</div>
          ` : `
            <div class="word-cards-grid">
              ${gWords.map((w) => {
                const clue = window.getWordClue(w, lang);
                return `
                  <div class="word-card ${w.isCustomTuned ? 'word-card-tuned' : ''}">
                    <div class="wc-top">
                      <span class="wc-word">${this.escapeHtml(w.word)}</span>
                      <span class="wc-status-badge ${w.isCustomTuned ? 'badge-tuned' : 'badge-auto'}">
                        ${w.isCustomTuned ? this.t('customTunedBadge') : this.t('autoAssignedBadge')}
                      </span>
                    </div>

                    <div class="wc-metrics">
                      <span class="metric-pill">${this.t('lengthBadge', { len: w.length })}</span>
                      <span class="metric-pill">${this.t('varietyBadge', { uniq: w.uniqueChars })}</span>
                      <span class="metric-pill metric-score">${this.t('scoreBadge', { score: w.rawScore })}</span>
                    </div>

                    <div class="wc-clue" title="${this.escapeHtml(clue)}">
                      <span>💡 ${this.escapeHtml(clue)}</span>
                      <button type="button" class="icon-btn edit-hint-btn" data-id="${w.id}" title="${this.t('editHintTip')}">✏️</button>
                    </div>

                    <div class="wc-controls">
                      <div class="wc-tune-stepper">
                        <button type="button" class="btn btn-secondary btn-xs step-diff-btn" data-id="${w.id}" data-delta="-1" title="${this.t('makeEasierTip')}" ${w.group <= 1 ? 'disabled' : ''}>−</button>
                        <select class="wc-group-select" data-id="${w.id}" aria-label="Difficulty Group">
                          ${Array.from({ length: groupCount }, (_, idx) => idx + 1).map((optG) => `
                            <option value="${optG}" ${w.group === optG ? 'selected' : ''}>G${optG}</option>
                          `).join('')}
                        </select>
                        <button type="button" class="btn btn-secondary btn-xs step-diff-btn" data-id="${w.id}" data-delta="1" title="${this.t('makeHarderTip')}" ${w.group >= groupCount ? 'disabled' : ''}>+</button>
                      </div>
                      <button type="button" class="icon-btn delete-word-btn" data-id="${w.id}" title="${this.t('deleteWordTip')}">🗑️</button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>
      `;
    }).join('');
  }

  bindWordsTabEvents() {
    const container = document.getElementById('panel-words');

    // Input mode sub-tabs
    container.querySelectorAll('.input-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.activeInputMode = btn.dataset.imode;
        this.renderWordsTab();
      });
    });

    // 1. Manual Add Form
    const manualForm = container.querySelector('#manualAddForm');
    if (manualForm) {
      manualForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const rawInput = container.querySelector('#manualWordInput').value;
        const hintInput = container.querySelector('#manualHintInput').value;
        const parts = rawInput.split(/[,;\n]+/).map((s) => s.trim()).filter(Boolean);
        const entries = parts.map((w) => ({ word: w, hint: parts.length === 1 ? hintInput : '' }));
        const added = window.appStore.addWordsToActiveSet(entries);
        this.showToast(this.t('manualAddedToast', { count: added || entries.length }));
        container.querySelector('#manualWordInput').value = '';
        container.querySelector('#manualHintInput').value = '';
      });
    }

    // 2. Paste Text Extractor
    const extractBtn = container.querySelector('#runTextExtractBtn');
    if (extractBtn) {
      extractBtn.addEventListener('click', () => {
        const text = container.querySelector('#pasteAreaInput').value;
        const filterShort = container.querySelector('#filterShortChk').checked;
        const filterStop = container.querySelector('#filterStopChk').checked;
        this.extractedCandidates = window.WordExtractor.extractWordsFromText(text, { filterShort, filterStop });
        if (this.extractedCandidates.length === 0) {
          this.showToast(this.t('noWordsExtracted'));
        }
        this.renderWordsTab();
      });
    }

    // 3. Camera / Photo Sheet OCR
    const triggerCamBtn = container.querySelector('#triggerCameraBtn');
    const fileInput = container.querySelector('#cameraFileInput');
    if (triggerCamBtn && fileInput) {
      triggerCamBtn.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const highContrast = container.querySelector('#cameraContrastChk').checked;
        const img = new Image();
        img.onload = async () => {
          this.lastUploadedImage = img;
          this.ocrBusy = true;
          this.ocrProgress = 5;
          this.renderWordsTab();

          const canvas = document.getElementById('ocrPreviewCanvas');
          window.WordExtractor.preprocessImageToCanvas(img, canvas, highContrast);

          try {
            const recognizedText = await window.WordExtractor.runPhotoOCR(canvas, (pct) => {
              this.ocrProgress = pct;
              const bar = document.querySelector('.ocr-progress-fill');
              if (bar) bar.style.width = `${pct}%`;
            });
            this.ocrBusy = false;
            this.extractedCandidates = window.WordExtractor.extractWordsFromText(recognizedText, {
              filterShort: true,
              filterStop: true
            });
            this.showToast(this.t('ocrComplete'));
            this.renderWordsTab();
          } catch (err) {
            this.ocrBusy = false;
            alert(this.t('ocrError'));
            this.renderWordsTab();
          }
        };
        img.src = URL.createObjectURL(file);
      });
    }

    // Extracted Review Tray Controls
    const selAllBtn = container.querySelector('#traySelectAllBtn');
    if (selAllBtn) {
      selAllBtn.addEventListener('click', () => {
        this.extractedCandidates.forEach((c) => { c.selected = true; });
        this.renderWordsTab();
      });
    }
    const deselAllBtn = container.querySelector('#trayDeselectAllBtn');
    if (deselAllBtn) {
      deselAllBtn.addEventListener('click', () => {
        this.extractedCandidates.forEach((c) => { c.selected = false; });
        this.renderWordsTab();
      });
    }
    container.querySelectorAll('.chip-chk').forEach((chk) => {
      chk.addEventListener('change', (e) => {
        const idx = parseInt(chk.dataset.cidx, 10);
        if (this.extractedCandidates[idx]) {
          this.extractedCandidates[idx].selected = e.target.checked;
          this.renderWordsTab();
        }
      });
    });
    container.querySelectorAll('.chip-word-edit').forEach((inp) => {
      inp.addEventListener('change', (e) => {
        const idx = parseInt(inp.dataset.cidx, 10);
        const clean = window.SpellingBeeHelpers.normalizeEnglishWord(e.target.value);
        if (this.extractedCandidates[idx] && clean) {
          const m = window.SpellingBeeHelpers.computeWordMetrics(clean);
          this.extractedCandidates[idx].word = clean;
          this.extractedCandidates[idx].length = m.length;
          this.extractedCandidates[idx].uniqueChars = m.uniqueChars;
          this.extractedCandidates[idx].rawScore = m.rawScore;
          this.renderWordsTab();
        }
      });
    });
    const importBtn = container.querySelector('#importExtractedBtn');
    if (importBtn) {
      importBtn.addEventListener('click', () => {
        const chosen = this.extractedCandidates.filter((c) => c.selected);
        const added = window.appStore.addWordsToActiveSet(chosen);
        this.extractedCandidates = [];
        this.showToast(this.t('manualAddedToast', { count: added }));
        this.renderWordsTab();
      });
    }

    // Group Count & Rebalance Controls
    container.querySelector('#addGroupBtn').addEventListener('click', () => {
      window.appStore.changeGroupCount(1);
    });
    container.querySelector('#removeGroupBtn').addEventListener('click', () => {
      window.appStore.changeGroupCount(-1);
    });
    container.querySelector('#rebalanceSetBtn').addEventListener('click', () => {
      window.appStore.rebalanceActiveSet(false);
    });
    container.querySelector('#resetTuningBtn').addEventListener('click', () => {
      window.appStore.rebalanceActiveSet(true);
    });

    // Filter Pills & Search
    container.querySelectorAll('.filter-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        this.selectedGroupFilter = pill.dataset.filter === 'all' ? 'all' : Number(pill.dataset.filter);
        this.renderWordsTab();
      });
    });

    const searchInput = container.querySelector('#wordSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.wordSearchQuery = e.target.value;
        const pos = searchInput.selectionStart;
        this.renderWordsTab();
        const newInput = document.getElementById('wordSearchInput');
        if (newInput) {
          newInput.focus();
          newInput.setSelectionRange(pos, pos);
        }
      });
    }

    // Individual Word Card Actions
    container.querySelectorAll('.step-diff-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.appStore.stepWordDifficulty(btn.dataset.id, parseInt(btn.dataset.delta, 10));
      });
    });

    container.querySelectorAll('.wc-group-select').forEach((sel) => {
      sel.addEventListener('change', (e) => {
        window.appStore.tuneWordDifficulty(sel.dataset.id, parseInt(e.target.value, 10));
      });
    });

    container.querySelectorAll('.edit-hint-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const set = window.appStore.getActiveSet();
        const w = (set.words || []).find((x) => x.id === btn.dataset.id);
        if (!w) return;
        const nextHint = prompt(`${this.t('manualHintLabel')} (${w.word.toUpperCase()}):`, w.hint || '');
        if (nextHint !== null) {
          window.appStore.updateWordHint(w.id, nextHint);
        }
      });
    });

    container.querySelectorAll('.delete-word-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.appStore.removeWord(btn.dataset.id);
      });
    });

    // Quick Study / Test jumps from Group Headers
    container.querySelectorAll('.study-this-group-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.switchTab('study', parseInt(btn.dataset.group, 10));
      });
    });

    container.querySelectorAll('.test-this-group-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const g = parseInt(btn.dataset.group, 10);
        this.switchTab('test');
        this.testEngine.selectedGroup = g;
        this.testEngine.startGroupTest(g);
      });
    });
  }

  // =========================================================================
  // TAB 2: STUDY PHASE (STRICTLY ORGANIZED BY DIFFICULTY GROUP)
  // =========================================================================
  renderStudyTab() {
    // If an activity is actively running, re-render it with current language
    if (this.studyEngine.currentActivityId) {
      document.getElementById('studyPickerView').hidden = true;
      document.getElementById('studyStageContainer').hidden = false;
      this.studyEngine.renderCurrentActivity();
      return;
    }

    document.getElementById('studyPickerView').hidden = false;
    document.getElementById('studyStageContainer').hidden = true;

    const picker = document.getElementById('studyPickerView');
    const set = window.appStore.getActiveSet();
    const lang = window.appStore.getLang();
    const groupCount = set.groupCount || 5;
    const groupNames = (window.I18N[lang] || window.I18N.en).groupNames;

    if (this.selectedStudyGroup > groupCount) {
      this.selectedStudyGroup = groupCount;
    }

    const groupWords = (set.words || []).filter((w) => w.group === this.selectedStudyGroup);

    let groupCardsHtml = '';
    for (let g = 1; g <= groupCount; g++) {
      const count = (set.words || []).filter((w) => w.group === g).length;
      const gName = groupNames[g - 1] || `Group ${g}`;
      const rec = set.highScores && set.highScores.groups && set.highScores.groups[String(g)];
      const isSelected = this.selectedStudyGroup === g;

      groupCardsHtml += `
        <button type="button" class="study-group-card ${isSelected ? 'selected' : ''}" data-group="${g}">
          <div class="sg-stars">${'⭐'.repeat(Math.min(5, g))}</div>
          <div class="sg-title">${lang === 'es' ? 'Grupo' : 'Group'} ${g}: ${gName}</div>
          <div class="sg-count">${this.t('wordsInGroupCount', { count })}</div>
          <div class="sg-record">${rec ? `🏆 ${rec.bestPct}%` : this.t('noBestScoreYet')}</div>
        </button>
      `;
    }

    const activities = [
      { id: 'random', icon: '🎲', title: this.t('actRandomTitle'), desc: this.t('actRandomDesc'), featured: true },
      { id: 'fill_blank', icon: '✏️', title: this.t('actFillBlankTitle'), desc: this.t('actFillBlankDesc') },
      { id: 'word_soup', icon: '🍲', title: this.t('actWordSoupTitle'), desc: this.t('actWordSoupDesc') },
      { id: 'crossword', icon: '🧩', title: this.t('actCrosswordTitle'), desc: this.t('actCrosswordDesc') },
      { id: 'scramble', icon: '🌪️', title: this.t('actScrambleTitle'), desc: this.t('actScrambleDesc') },
      { id: 'bee_keeper', icon: '🍯', title: this.t('actBeeKeeperTitle'), desc: this.t('actBeeKeeperDesc') },
      { id: 'flash_spell', icon: '👀', title: this.t('actFlashSpellTitle'), desc: this.t('actFlashSpellDesc') }
    ];

    picker.innerHTML = `
      <div class="card study-hub-card">
        <h2>${this.t('studyTitle')}</h2>
        <p class="pretty-text">${this.t('studySubtitle')}</p>

        <h3 class="step-heading">${this.t('step1ChooseGroup')}</h3>
        <div class="study-groups-grid">
          ${groupCardsHtml}
        </div>

        <h3 class="step-heading" style="margin-top: 24px;">${this.t('step2ChooseActivity')}</h3>
        ${groupWords.length === 0 ? `
          <div class="empty-group-box">${this.t('needWordsToStudy')}</div>
        ` : `
          <div class="study-words-preview">
            ${groupWords.map((w) => `<span class="preview-word-chip">${this.escapeHtml(w.word)}</span>`).join('')}
          </div>
          <div class="activities-grid">
            ${activities.map((act) => `
              <button type="button" class="activity-card ${act.featured ? 'activity-card-featured' : ''}" data-act="${act.id}">
                <span class="act-icon">${act.icon}</span>
                <div class="act-info">
                  <h4>${act.title}</h4>
                  <p class="pretty-text">${act.desc}</p>
                </div>
              </button>
            `).join('')}
          </div>
        `}
      </div>
    `;

    picker.querySelectorAll('.study-group-card').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.selectedStudyGroup = parseInt(btn.dataset.group, 10);
        this.renderStudyTab();
      });
    });

    picker.querySelectorAll('.activity-card').forEach((btn) => {
      btn.addEventListener('click', () => {
        const actId = btn.dataset.act;
        document.getElementById('studyPickerView').hidden = true;
        document.getElementById('studyStageContainer').hidden = false;
        this.studyEngine.startActivity(this.selectedStudyGroup, actId, actId === 'random');
      });
    });
  }

  // =========================================================================
  // TAB 3: TESTING PHASE
  // =========================================================================
  renderTestTab() {
    this.testEngine.render();
  }

  // =========================================================================
  // TAB 4: HIGH SCORES & PROGRESS
  // =========================================================================
  renderScoresTab() {
    const container = document.getElementById('panel-scores');
    const set = window.appStore.getActiveSet();
    const lang = window.appStore.getLang();
    const groupCount = set.groupCount || 5;
    const groupNames = (window.I18N[lang] || window.I18N.en).groupNames;
    const mixedRec = set.highScores && set.highScores.mixed;
    const history = set.testHistory || [];

    let groupScoreCards = '';
    for (let g = 1; g <= groupCount; g++) {
      const rec = set.highScores && set.highScores.groups && set.highScores.groups[String(g)];
      const gName = groupNames[g - 1] || `Group ${g}`;
      const wordCount = (set.words || []).filter((w) => w.group === g).length;

      groupScoreCards += `
        <div class="score-group-card">
          <div class="sgc-head">
            <span class="badge-group badge-g${Math.min(5, g)}">⭐ ${lang === 'es' ? 'Grupo' : 'Group'} ${g}</span>
            <strong>${gName}</strong>
            <span class="word-count-tag">(${wordCount})</span>
          </div>
          ${rec ? `
            <div class="sgc-big-pct">${rec.bestPct}%</div>
            <div class="sgc-detail">${this.t('bestScoreStat', { pct: rec.bestPct, right: rec.bestRight, total: rec.bestTotal })}</div>
            <div class="sgc-meta">${this.t('attemptsStat', { attempts: rec.attempts })} • ${rec.lastDate}</div>
          ` : `
            <div class="sgc-empty">${this.t('noBestScoreYet')}</div>
          `}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="card scores-hub-card">
        <div class="scores-top-row">
          <div>
            <h2>${this.t('scoresTitle')}</h2>
            <p class="pretty-text">${this.t('scoresSubtitle')}</p>
          </div>
          <button type="button" class="btn btn-secondary btn-sm" id="resetSetScoresBtn">${this.t('clearScoresBtn')}</button>
        </div>

        <div class="mixed-trophy-banner">
          <div class="trophy-icon">🏆</div>
          <div class="trophy-content">
            <h3>${this.t('mixedHighScoreCardTitle')}</h3>
            ${mixedRec ? `
              <div class="trophy-score-line">
                <span class="trophy-pct">${mixedRec.bestPct}%</span>
                <span>(${mixedRec.bestRight} / ${mixedRec.bestTotal})</span>
              </div>
              <div class="trophy-sub">${this.t('attemptsStat', { attempts: mixedRec.attempts })} • ${this.t('lastTestedStat', { date: mixedRec.lastDate })}</div>
            ` : `
              <p class="pretty-text">${this.t('noTestsRecorded')}</p>
            `}
          </div>
        </div>

        <h3 style="margin-top: 24px;">${this.t('groupHighScoresTitle')}</h3>
        <div class="scores-groups-grid">
          ${groupScoreCards}
        </div>

        <h3 style="margin-top: 28px;">${this.t('recentHistoryTitle')}</h3>
        ${history.length === 0 ? `
          <div class="empty-group-box">${this.t('noTestsRecorded')}</div>
        ` : `
          <div class="history-list">
            ${history.map((h) => `
              <div class="history-row">
                <div>
                  <strong>${h.mode === 'mixed' ? `🏆 ${this.t('testModeMixedCardTitle')}` : `🎯 ${lang === 'es' ? 'Grupo' : 'Group'} ${h.groupNum}`}</strong>
                  <span class="history-date">${h.date}</span>
                </div>
                <div class="history-score-right">
                  ${h.isNewRecord ? `<span class="record-mini-pill">🏆 RECORD</span>` : ''}
                  <strong class="history-pct">${h.pct}% (${h.right}/${h.total})</strong>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;

    const resetBtn = container.querySelector('#resetSetScoresBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        window.appStore.clearScoresInActiveSet();
      });
    }
  }

  // =========================================================================
  // MODALS: MANAGE WORD SETS & CONNECT IPAD/IPHONE
  // =========================================================================
  renderSetsModalContent() {
    const body = document.getElementById('setsModalBody');
    const sets = window.appStore.state.sets || [];
    const activeSet = window.appStore.getActiveSet();

    body.innerHTML = `
      <form id="createNewSetForm" class="new-set-form">
        <input type="text" id="newSetNameInput" class="input-text" placeholder="${this.t('setNamePlaceholder')}" required />
        <input type="text" id="newSetGradeInput" class="input-text" placeholder="${this.t('setGradePlaceholder')}" />
        <button type="submit" class="btn btn-primary">${this.t('createSetConfirm')}</button>
      </form>

      <div class="sets-manage-list">
        ${sets.map((s) => `
          <div class="set-manage-row ${s.id === activeSet.id ? 'active-set-row' : ''}">
            <div class="set-row-info">
              <strong>${this.escapeHtml(s.name)}</strong>
              <span class="set-row-meta">${this.escapeHtml(s.gradeLabel || '')} • ${(s.words || []).length} words • ${s.groupCount || 5} groups</span>
            </div>
            <div class="set-row-actions">
              <button type="button" class="btn btn-secondary btn-xs select-set-btn" data-id="${s.id}">
                ${s.id === activeSet.id ? '✓ Active' : 'Select'}
              </button>
              <button type="button" class="btn btn-secondary btn-xs rename-set-btn" data-id="${s.id}">${this.t('renameSetBtn')}</button>
              <button type="button" class="btn btn-secondary btn-xs dup-set-btn" data-id="${s.id}">${this.t('duplicateSetBtn')}</button>
              <button type="button" class="btn btn-secondary btn-xs del-set-btn" data-id="${s.id}" ${sets.length <= 1 ? 'disabled' : ''}>🗑️</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    body.querySelector('#createNewSetForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const name = body.querySelector('#newSetNameInput').value;
      const grade = body.querySelector('#newSetGradeInput').value || '3rd Grade';
      window.appStore.createWordSet(name, grade);
      this.renderSetsModalContent();
    });

    body.querySelectorAll('.select-set-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.appStore.setActiveSet(btn.dataset.id);
        this.renderSetsModalContent();
      });
    });

    body.querySelectorAll('.rename-set-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const s = sets.find((x) => x.id === btn.dataset.id);
        if (!s) return;
        const next = prompt(this.t('renameSetBtn'), s.name);
        if (next && next.trim()) {
          s.name = next.trim();
          window.appStore.commit();
          this.renderSetsModalContent();
        }
      });
    });

    body.querySelectorAll('.dup-set-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.appStore.setActiveSet(btn.dataset.id);
        window.appStore.duplicateActiveSet();
        this.renderSetsModalContent();
      });
    });

    body.querySelectorAll('.del-set-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (sets.length <= 1) {
          alert(this.t('cannotDeleteLastSet'));
          return;
        }
        if (confirm(this.t('confirmDeleteSet'))) {
          window.appStore.deleteSet(btn.dataset.id);
          this.renderSetsModalContent();
        }
      });
    });
  }

  async openConnectDeviceModal() {
    const dialog = document.getElementById('connectDialog');
    const urlListEl = document.getElementById('lanUrlsContainer');
    dialog.showModal();
    urlListEl.innerHTML = `<div class="lan-url-pill">${window.location.origin}</div>`;

    try {
      const res = await fetch('/api/network-info');
      if (res.ok) {
        const info = await res.json();
        if (info.lanUrls && info.lanUrls.length > 0) {
          urlListEl.innerHTML = info.lanUrls.map((ip) => `
            <div class="lan-url-pill">
              <strong>📱 Wi-Fi (${ip.name}):</strong>
              <a href="${ip.url}" target="_blank" rel="noopener">${ip.url}</a>
            </div>
          `).join('');
        }
      }
    } catch (e) {}
  }

  escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.appController = new AppController();
});
