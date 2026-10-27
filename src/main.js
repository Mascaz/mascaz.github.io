import { PROFILE, CLASSIC_APPS, MODERN_APPS } from './data.js';

// ============================================================================
// DOM References
// ============================================================================
const hubView = document.getElementById('hubView');
const classicOsView = document.getElementById('classicOsView');
const modernOsView = document.getElementById('modernOsView');

const hubHeading = document.getElementById('hubHeading');
const classicHeading = document.getElementById('classicHeading');
const modernHeading = document.getElementById('modernHeading');

const selectClassicBtn = document.getElementById('selectClassicBtn');
const selectModernBtn = document.getElementById('selectModernBtn');

const classicDesktopScreen = document.getElementById('classicDesktopScreen');
const modernDesktopScreen = document.getElementById('modernDesktopScreen');

// Classic OS refs
const classicIconsGrid = document.getElementById('classicIconsGrid');
const classicDock = document.getElementById('classicDock');
const classicWindow = document.getElementById('classicWindow');
const classicWinTitle = document.getElementById('classicWinTitle');
const classicWinCategory = document.getElementById('classicWinCategory');
const classicWinBody = document.getElementById('classicWinBody');
const classicWinCloseBtn = document.getElementById('classicWinCloseBtn');
const classicWinMinBtn = document.getElementById('classicWinMinBtn');
const classicWinMaxBtn = document.getElementById('classicWinMaxBtn');
const ios6BackBtn = document.getElementById('ios6BackBtn');
const classicZoomOutBtn = document.getElementById('classicZoomOutBtn');
const classicToModernBtn = document.getElementById('classicToModernBtn');
const classicTldrMenuBtn = document.getElementById('classicTldrMenuBtn');

// Modern Liquid Glass OS refs
const liquidAppDrawer = document.getElementById('liquidAppDrawer');
const modernIconsGrid = document.getElementById('modernIconsGrid');
const modernDock = document.getElementById('modernDock');
const modernWindow = document.getElementById('modernWindow');
const modernWinIcon = document.getElementById('modernWinIcon');
const modernWinTitle = document.getElementById('modernWinTitle');
const modernWinCloseBtn = document.getElementById('modernWinCloseBtn');
const modernWinMinBtn = document.getElementById('modernWinMinBtn');
const modernWinMaxBtn = document.getElementById('modernWinMaxBtn');
const modernMobileBackBtn = document.getElementById('modernMobileBackBtn');
const tabPlayBtn = document.getElementById('tabPlayBtn');
const tabInfoBtn = document.getElementById('tabInfoBtn');
const openStandaloneLink = document.getElementById('openStandaloneLink');
const panelPlay = document.getElementById('panelPlay');
const panelInfo = document.getElementById('panelInfo');
const gameIframe = document.getElementById('gameIframe');
const modernInfoContent = document.getElementById('modernInfoContent');
const modernZoomOutBtn = document.getElementById('modernZoomOutBtn');
const modernToClassicBtn = document.getElementById('modernToClassicBtn');
const modernTldrBtn = document.getElementById('modernTldrBtn');

// TLDR Dialog refs
const openTldrBtn = document.getElementById('openTldrBtn');
const tldrDialog = document.getElementById('tldrDialog');
const tldrBodyContent = document.getElementById('tldrBodyContent');

let currentView = 'hub'; // 'hub' | 'classic' | 'modern'
let activeClassicAppId = null;
let activeModernAppId = null;

// ============================================================================
// 1. Same-Document View Transitions Navigation (Desk Hub <-> Classic <-> Modern)
// ============================================================================
function clearViewTransitionNames() {
  [classicDesktopScreen, modernDesktopScreen, classicOsView, modernOsView].forEach((el) => {
    el?.classList.remove('vt-active-screen');
  });
}

function applyViewDOM(targetView) {
  currentView = targetView;
  document.body.dataset.view = targetView;

  hubView.hidden = targetView !== 'hub';
  classicOsView.hidden = targetView !== 'classic';
  modernOsView.hidden = targetView !== 'modern';

  // Pause embedded game audio/CPU if leaving modern view
  if (targetView !== 'modern' && !modernWindow.hidden) {
    gameIframe.src = 'about:blank';
  } else if (targetView === 'modern' && activeModernAppId && !modernWindow.hidden && !panelPlay.hidden) {
    const app = MODERN_APPS.find((a) => a.id === activeModernAppId);
    if (app && gameIframe.getAttribute('src') !== app.playUrl) {
      gameIframe.src = app.playUrl;
    }
  }
}

function focusViewHeading(targetView) {
  if (targetView === 'hub') hubHeading?.focus();
  else if (targetView === 'classic') classicHeading?.focus();
  else if (targetView === 'modern') modernHeading?.focus();
}

function navigateToView(targetView) {
  if (targetView === currentView) return;

  const prevView = currentView;
  clearViewTransitionNames();

  // Pair device screen on hub with full-screen OS view for smooth morph
  if (prevView === 'hub' && targetView === 'classic') {
    classicDesktopScreen?.classList.add('vt-active-screen');
  } else if (prevView === 'hub' && targetView === 'modern') {
    modernDesktopScreen?.classList.add('vt-active-screen');
  } else if (prevView === 'classic' && targetView === 'hub') {
    classicOsView?.classList.add('vt-active-screen');
  } else if (prevView === 'modern' && targetView === 'hub') {
    modernOsView?.classList.add('vt-active-screen');
  }

  if (!document.startViewTransition) {
    applyViewDOM(targetView);
    clearViewTransitionNames();
    focusViewHeading(targetView);
    return;
  }

  const transition = document.startViewTransition(() => {
    clearViewTransitionNames();
    if (targetView === 'classic') {
      classicOsView?.classList.add('vt-active-screen');
    } else if (targetView === 'modern') {
      modernOsView?.classList.add('vt-active-screen');
    } else if (targetView === 'hub') {
      if (prevView === 'classic') classicDesktopScreen?.classList.add('vt-active-screen');
      if (prevView === 'modern') modernDesktopScreen?.classList.add('vt-active-screen');
    }
    applyViewDOM(targetView);
  });

  transition.finished.finally(() => {
    clearViewTransitionNames();
    focusViewHeading(targetView);
  });
}

selectClassicBtn.addEventListener('click', () => navigateToView('classic'));
selectModernBtn.addEventListener('click', () => navigateToView('modern'));
classicZoomOutBtn.addEventListener('click', () => navigateToView('hub'));
modernZoomOutBtn.addEventListener('click', () => navigateToView('hub'));
classicToModernBtn.addEventListener('click', () => navigateToView('modern'));
modernToClassicBtn.addEventListener('click', () => navigateToView('classic'));

// ============================================================================
// 2. Classic Skeuomorphic OS (Mac OS X 10.0–10.9 & iOS 1–6)
// ============================================================================
function renderClassicOS() {
  classicIconsGrid.innerHTML = '';
  classicDock.innerHTML = '';

  CLASSIC_APPS.forEach((app) => {
    // Desktop / SpringBoard Icon
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'classic-app-icon-btn';
    btn.setAttribute('role', 'listitem');
    btn.innerHTML = `
      <div class="skeuo-icon-box" aria-hidden="true">${app.iconSvg}</div>
      <span class="classic-icon-label">${app.shortName}</span>
    `;
    btn.addEventListener('click', () => openClassicApp(app.id));
    classicIconsGrid.appendChild(btn);

    // 3D Glass Dock Icon
    const dockBtn = document.createElement('button');
    dockBtn.type = 'button';
    dockBtn.className = 'classic-dock-item';
    dockBtn.dataset.appId = app.id;
    dockBtn.title = app.name;
    dockBtn.setAttribute('aria-label', app.name);
    dockBtn.innerHTML = `<div class="skeuo-icon-box" aria-hidden="true">${app.iconSvg}</div>`;
    dockBtn.addEventListener('click', () => openClassicApp(app.id));
    classicDock.appendChild(dockBtn);
  });
}

function openClassicApp(appId) {
  const app = CLASSIC_APPS.find((a) => a.id === appId);
  if (!app) return;
  activeClassicAppId = appId;

  classicWinTitle.textContent = app.name;
  classicWinCategory.textContent = app.category;

  let html = `<div class="classic-desc-box">${app.description}</div>`;

  if (app.links && app.links.length > 0) {
    html += `<div class="classic-links-row">
      ${app.links
        .map(
          (l) =>
            `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="aqua-gel-link">${l.label} &#8599;</a>`
        )
        .join('')}
    </div>`;
  }

  if (app.youtubeEmbed) {
    html += `
      <iframe
        class="classic-video-frame"
        src="${app.youtubeEmbed}"
        title="${app.name} Video Demo"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  }

  if (app.screenshots && app.screenshots.length > 0) {
    html += `<div class="classic-screenshots-grid">
      ${app.screenshots
        .map(
          (src, idx) =>
            `<img src="${src}" alt="${app.name} screenshot ${idx + 1}" loading="lazy" width="480" height="320" />`
        )
        .join('')}
    </div>`;
  }

  classicWinBody.innerHTML = html;
  classicWindow.hidden = false;

  document.querySelectorAll('.classic-dock-item').forEach((el) => {
    el.classList.toggle('active', el.dataset.appId === appId);
  });
}

function closeClassicWindow() {
  classicWindow.hidden = true;
  classicWinBody.innerHTML = '';
  activeClassicAppId = null;
  document.querySelectorAll('.classic-dock-item').forEach((el) => el.classList.remove('active'));
}

classicWinCloseBtn.addEventListener('click', closeClassicWindow);
classicWinMinBtn.addEventListener('click', closeClassicWindow);
ios6BackBtn.addEventListener('click', closeClassicWindow);
classicWinMaxBtn.addEventListener('click', () => {
  classicWindow.classList.toggle('maximized');
});

document.querySelectorAll('[data-classic-open]').forEach((btn) => {
  btn.addEventListener('click', () => openClassicApp(btn.dataset.classicOpen));
});

// ============================================================================
// 3. Modern Liquid Glass OS (visionOS / macOS Tahoe / iOS 26)
// ============================================================================
function renderModernOS() {
  modernIconsGrid.innerHTML = '';
  modernDock.innerHTML = '';

  MODERN_APPS.forEach((app, idx) => {
    // App Drawer Card
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'liquid-app-card';
    card.setAttribute('role', 'listitem');
    // Elevate LCP image priority on the first app icon
    const priorityAttr = idx === 0 ? 'fetchpriority="high"' : '';
    card.innerHTML = `
      <div class="liquid-icon-squircle">
        <img src="${app.iconUrl}" alt="${app.name} icon" width="72" height="72" ${priorityAttr} />
      </div>
      <span class="liquid-app-name">${app.name}</span>
      <span class="liquid-app-badge">${app.id === 'argon-bot' ? 'Synthetic Sim' : 'Playable'}</span>
    `;
    card.addEventListener('click', () => openModernApp(app.id, 'play'));
    modernIconsGrid.appendChild(card);

    // Floating Glass Dock Button
    const dockBtn = document.createElement('button');
    dockBtn.type = 'button';
    dockBtn.className = 'liquid-dock-btn';
    dockBtn.dataset.appId = app.id;
    dockBtn.title = app.name;
    dockBtn.setAttribute('aria-label', app.name);
    dockBtn.innerHTML = `<img src="${app.iconUrl}" alt="${app.name}" width="42" height="42" />`;
    dockBtn.addEventListener('click', () => openModernApp(app.id, 'play'));
    modernDock.appendChild(dockBtn);
  });
}

function setModernTab(mode) {
  const isPlay = mode === 'play';
  tabPlayBtn.classList.toggle('active', isPlay);
  tabPlayBtn.setAttribute('aria-selected', String(isPlay));
  tabInfoBtn.classList.toggle('active', !isPlay);
  tabInfoBtn.setAttribute('aria-selected', String(!isPlay));

  panelPlay.hidden = !isPlay;
  panelInfo.hidden = isPlay;

  const app = MODERN_APPS.find((a) => a.id === activeModernAppId);
  if (!app) return;

  if (isPlay) {
    if (gameIframe.getAttribute('src') !== app.playUrl) {
      gameIframe.src = app.playUrl;
    }
  } else {
    // Unload iframe when viewing screenshots if desired, or keep state
  }
}

function openModernApp(appId, initialTab = 'play') {
  const app = MODERN_APPS.find((a) => a.id === appId);
  if (!app) return;
  activeModernAppId = appId;

  modernWinIcon.src = app.iconUrl;
  modernWinIcon.alt = `${app.name} icon`;
  modernWinTitle.textContent = app.name;
  tabPlayBtn.innerHTML = `&#9654; ${app.playLabel || 'Play Live'}`;
  openStandaloneLink.href = app.playUrl;

  // Populate Info & Screenshots tab
  let screenshotsHtml = '';
  if (app.screenshots && app.screenshots.length > 0) {
    screenshotsHtml = `
      <div>
        <h3 style="font-size:14px;margin-bottom:10px;color:#cbd5e1">Screenshots &amp; Visuals</h3>
        <div class="info-screenshots-grid">
          ${app.screenshots
            .map(
              (src, i) =>
                `<img src="${src}" alt="${app.name} screenshot ${i + 1}" loading="lazy" fetchpriority="low" width="520" height="320" />`
            )
            .join('')}
        </div>
      </div>
    `;
  }

  modernInfoContent.innerHTML = `
    <div class="info-hero-card">
      <div style="font-size:12px;color:#93c5fd;font-weight:600">${app.category}</div>
      <h3 style="font-size:20px">${app.name} <span style="font-size:12px;font-weight:400;color:#94a3b8">(${app.folder})</span></h3>
      <p style="font-size:14px;line-height:1.65;color:#e2e8f0;white-space:pre-line">${app.description}</p>
      <div class="tech-pills">
        ${app.tech.map((t) => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
    </div>
    ${screenshotsHtml}
  `;

  modernWindow.hidden = false;
  setModernTab(initialTab);

  document.querySelectorAll('.liquid-dock-btn').forEach((el) => {
    el.classList.toggle('active', el.dataset.appId === appId);
  });
}

function closeModernWindow() {
  modernWindow.hidden = true;
  gameIframe.src = 'about:blank';
  activeModernAppId = null;
  document.querySelectorAll('.liquid-dock-btn').forEach((el) => el.classList.remove('active'));
}

modernWinCloseBtn.addEventListener('click', closeModernWindow);
modernWinMinBtn.addEventListener('click', closeModernWindow);
modernMobileBackBtn.addEventListener('click', closeModernWindow);
modernWinMaxBtn.addEventListener('click', () => {
  modernWindow.classList.toggle('maximized');
});

tabPlayBtn.addEventListener('click', () => setModernTab('play'));
tabInfoBtn.addEventListener('click', () => setModernTab('info'));

// Pointer-tracked specular glass highlight on the Liquid Glass App Drawer
liquidAppDrawer.addEventListener('pointermove', (e) => {
  const rect = liquidAppDrawer.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  liquidAppDrawer.style.setProperty('--mouse-x', `${x}%`);
  liquidAppDrawer.style.setProperty('--mouse-y', `${y}%`);
});

// ============================================================================
// 4. Plain-Text "TLDR" Stack of Paper Modal (<dialog closedby="any">)
// ============================================================================
function renderTldrSheet() {
  const modernList = MODERN_APPS.map(
    (app) => `
      <li class="paper-item">
        <strong>${app.name}</strong> <span class="paper-item-meta">[${app.category}]</span><br/>
        ${app.tldr}
      </li>
    `
  ).join('');

  const classicList = CLASSIC_APPS.filter((a) => a.id !== 'about-me' && a.id !== 'contact-cv')
    .map(
      (app) => `
      <li class="paper-item">
        <strong>${app.name}</strong> <span class="paper-item-meta">[${app.category}]</span><br/>
        ${app.tldr}
      </li>
    `
    )
    .join('');

  tldrBodyContent.innerHTML = `
    <section class="paper-section">
      <h3>1. New Projects (Liquid Glass Era)</h3>
      <ul class="paper-list">${modernList}</ul>
    </section>

    <section class="paper-section">
      <h3>2. Earlier Commercial &amp; Studio Work (Classic Era)</h3>
      <ul class="paper-list">${classicList}</ul>
    </section>

    <section class="paper-section">
      <h3>3. A More Personal Look</h3>
      <p>${PROFILE.bioParagraphs.join(' ')}</p>
    </section>

    <section class="paper-section">
      <h3>4. Direct Links &amp; Contact</h3>
      <div class="paper-links">
        <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        <a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub (@Mascaz)</a>
        <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>
        <a href="tel:6196347772">${PROFILE.phone}</a>
        <a href="${PROFILE.cvUrl}" target="_blank" rel="noopener">Resume / CV (PDF)</a>
        <a href="${PROFILE.carrd}" target="_blank" rel="noopener">Legacy Carrd Site</a>
      </div>
    </section>
  `;
}

function openTldrModal() {
  if (typeof tldrDialog.showModal === 'function') {
    tldrDialog.showModal();
  }
}

openTldrBtn.addEventListener('click', openTldrModal);
classicTldrMenuBtn.addEventListener('click', openTldrModal);
modernTldrBtn.addEventListener('click', openTldrModal);

// Mandatory Fallback for browsers without native <dialog closedby="any"> support (e.g. Safari)
if (!('closedBy' in HTMLDialogElement.prototype)) {
  tldrDialog.addEventListener('click', (event) => {
    if (event.target !== tldrDialog) return;
    const rect = tldrDialog.getBoundingClientRect();
    const isDialogContent =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (isDialogContent) return;
    tldrDialog.close();
  });
}

// ============================================================================
// 5. Live Menu Bar Clocks & Initialization
// ============================================================================
function updateClocks() {
  const now = new Date();
  const str = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  const c1 = document.getElementById('classicClock');
  const c2 = document.getElementById('modernClock');
  if (c1) c1.textContent = str;
  if (c2) c2.textContent = str;
}

renderClassicOS();
renderModernOS();
renderTldrSheet();
updateClocks();
setInterval(updateClocks, 15000);
