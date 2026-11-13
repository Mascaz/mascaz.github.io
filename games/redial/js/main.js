// REDIAL — app shell: canvas sizing, main loop, run structure (calls → floors → masks), and all screens.
import { RNG, settings, saveSettings, loadBest, saveBest, clamp, FONT } from './util.js';
import { AudioEngine } from './audio.js';
import { Input } from './input.js';
import { Game } from './game.js';
import { renderWorld, worldToScreen, screenToWorld } from './render.js';
import { SONGS, GAMEPLAY_SONGS, TRACKLIST } from './music.js';
import { MASKS, BONUS_CARDS, MASK_BY_ID, MODIFIERS, LOOK_CYCLE, CALL_TITLES, phoneMessage } from './data.js';
import { hmText, plainText, wrapText, waveTitle, drawSynthBackdrop, drawDarkBackdrop, Menu, drawCard, drawHandset, drawCrosshair, drawTouchControls, weaponLabel } from './ui.js';
import { drawMaskFront } from './sprites.js';

const pad2 = (n) => String(n).padStart(2, '0');
const MONTHS = ['APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER'];
const isNative = () => !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());

class App {
  constructor() {
    this.gameCanvas = document.getElementById('game');
    this.gctx = this.gameCanvas.getContext('2d', { alpha: false });
    this.uiCanvas = document.getElementById('ui');
    this.uctx = this.uiCanvas.getContext('2d');
    this.scan = document.getElementById('scan');
    this.audio = new AudioEngine();
    this.input = new Input(this.uiCanvas);
    if (this.input.isTouchDevice && matchMedia('(pointer: coarse)').matches) this.input.source = 'touch';
    this.state = 'boot';
    this.t = 0;
    this.stateT = 0;
    this.game = null;
    this.run = null;
    this.best = loadBest();
    this.settingsReturn = 'title';
    // Audio must be created/resumed inside a real user gesture (iOS Safari is strict about this).
    const unlock = () => this.audio.init();
    for (const ev of ['pointerdown', 'touchend', 'keydown', 'mousedown']) addEventListener(ev, unlock, { passive: true });
    this.resize();
    addEventListener('resize', () => this.resize());
    addEventListener('orientationchange', () => setTimeout(() => this.resize(), 200));
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (this.state === 'play') this.pause();
        this.audio.suspend();
      } else this.audio.resume();
    });
    this.applyScanlines();
    this.buildMenus();
    this.last = performance.now();
    requestAnimationFrame(this.frame);
  }

  resize() {
    const w = innerWidth, h = innerHeight;
    const S = Math.min(w / 400, h / 225);
    this.scale = S;
    this.GW = Math.ceil(w / S);
    this.GH = Math.ceil(h / S);
    this.gameCanvas.width = this.GW;
    this.gameCanvas.height = this.GH;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    this.uiCanvas.width = Math.round(w * dpr);
    this.uiCanvas.height = Math.round(h * dpr);
    this.uctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.W = w;
    this.H = h;
    this.U = Math.min(w / 960, h / 540);
    this.Ut = clamp(Math.min(w, h) / 380, 0.8, 1.5);
    const cs = getComputedStyle(document.documentElement);
    const px = (v) => parseFloat(cs.getPropertyValue(v)) || 0;
    this.safe = { l: px('--sal'), r: px('--sar'), t: px('--sat'), b: px('--sab') };
  }

  applyScanlines() {
    this.scan.classList.toggle('off', !settings.scanlines);
  }

  screenToWorld(cx, cy) {
    return screenToWorld(this.game.cam, this.GW, this.GH, cx / this.scale, cy / this.scale);
  }
  worldToCss(x, y) {
    const p = worldToScreen(this.game.cam, this.GW, this.GH, x, y);
    return { x: p.x * this.scale, y: p.y * this.scale };
  }

  setState(s) {
    this.state = s;
    this.stateT = 0;
    this.input.setTouchMode(s === 'play' ? 'play' : 'menu');
    document.body.classList.toggle('playing', s === 'play');
  }

  toggleFullscreen() {
    const d = document;
    try {
      if (!d.fullscreenElement) {
        const p = d.documentElement.requestFullscreen ? d.documentElement.requestFullscreen() : null;
        if (p && p.then) p.then(() => screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {})).catch(() => {});
      } else if (d.exitFullscreen) d.exitFullscreen();
    } catch {}
  }

  buildMenus() {
    this.titleMenu = new Menu([
      { label: 'START RUN', action: () => this.newRun() },
      { label: 'HOW TO PLAY', action: () => this.setState('howto') },
      { label: 'SETTINGS', action: () => { this.settingsReturn = 'title'; this.setState('settings'); } },
      { label: 'JUKEBOX', action: () => this.setState('jukebox') },
    ]);
    const sItems = [
      { label: 'MUSIC', type: 'slider', get: () => settings.music, set: (v) => { this.audio.setMusicVolume(v); saveSettings(); } },
      { label: 'SFX', type: 'slider', get: () => settings.sfx, set: (v) => { this.audio.setSfxVolume(v); this.audio.sfx('pistol', 0.6); saveSettings(); } },
      { label: 'SCREEN SHAKE', type: 'toggle', get: () => settings.shake, set: (v) => { settings.shake = v; saveSettings(); } },
      { label: 'CAMERA SWAY', type: 'toggle', get: () => settings.sway, set: (v) => { settings.sway = v; saveSettings(); } },
      { label: 'SCANLINES', type: 'toggle', get: () => settings.scanlines, set: (v) => { settings.scanlines = v; this.applyScanlines(); saveSettings(); } },
      { label: 'AIM ASSIST', type: 'toggle', get: () => settings.aimAssist, set: (v) => { settings.aimAssist = v; saveSettings(); } },
    ];
    if (!isNative()) sItems.push({ label: 'FULLSCREEN', action: () => this.toggleFullscreen() });
    sItems.push({ label: 'BACK', back: true, action: () => this.setState(this.settingsReturn) });
    this.settingsMenu = new Menu(sItems);
    this.pauseMenu = new Menu([
      { label: 'RESUME', action: () => this.resume() },
      { label: 'SETTINGS', action: () => { this.settingsReturn = 'pause'; this.setState('settings'); } },
      { label: 'HANG UP (QUIT RUN)', back: true, action: () => this.gameOver() },
    ]);
    this.jukeMenu = new Menu([
      ...TRACKLIST.map((id) => ({ label: SONGS[id].title, action: () => this.audio.play(id, true) })),
      { label: 'BACK', back: true, action: () => this.leaveJukebox() },
    ]);
  }

  leaveJukebox() {
    this.setState('title');
    this.audio.play('payphone');
  }

  // ------------------------------------------------------------------ run flow
  newRun() {
    const seed = (Math.random() * 0x7fffffff) | 0;
    const rng = new RNG(seed);
    this.run = {
      seed, rng, call: 0, floorInCall: 0, floorIndex: 0, redials: 3, masks: [], score: 0, kills: 0,
      modifier: MODIFIERS[0], look: 'white', callTitle: '', message: '', floorsCleared: 0, bestCombo: 0,
      songs: rng.shuffle([...GAMEPLAY_SONGS]), titles: rng.shuffle([...CALL_TITLES]), song: 'neon', floorSeed: 1,
    };
    this.offerPerks('CHOOSE YOUR MASK', 'Every mask changes the rules. You keep them all until the line goes dead.', () => this.startCall());
  }

  offerPerks(title, sub, next) {
    const r = this.run;
    const avail = MASKS.filter((m) => m.stack || !r.masks.includes(m.id));
    const picks = r.rng.shuffle([...avail]).slice(0, 3).map((m) => m.id);
    let bi = 0;
    while (picks.length < 3) picks.push(BONUS_CARDS[bi++ % BONUS_CARDS.length].id);
    this.perk = { title, sub, cards: picks, sel: 1, next, rects: [] };
    this.setState('perk');
  }

  choosePerk(id) {
    const r = this.run, m = MASK_BY_ID[id];
    if (m.bonus) {
      if (id === 'spare') r.redials++;
      else r.score += 5000;
    } else {
      r.masks.push(id);
      if (id === 'elephant') r.redials++;
    }
    this.audio.sfx('confirm');
    this.audio.sfx('grade', 0.4);
    this.perk.next();
  }

  startCall() {
    const r = this.run;
    r.call++;
    r.floorInCall = 0;
    r.modifier = r.call === 1 ? MODIFIERS[0] : r.rng.pick(MODIFIERS.slice(1));
    r.look = LOOK_CYCLE[(r.call - 1) % LOOK_CYCLE.length];
    r.callTitle = r.titles[(r.call - 1) % r.titles.length];
    r.message = phoneMessage(r.rng);
    r.song = r.songs[(r.call - 1) % r.songs.length];
    r.date = `${MONTHS[(r.call - 1) % MONTHS.length]} ${3 + ((r.call * 7) % 25)}TH, 1989`;
    this.callBonus = r.call > 1;
    if (this.callBonus) r.redials = Math.min(r.redials + 1, 9);
    this.callS = { typed: 0, rings: 0, beeped: false, typeAcc: 0 };
    this.audio.stopSong(0.6);
    this.setState('call');
  }

  startFloor() {
    const r = this.run;
    r.floorSeed = r.rng.int(1, 0x7ffffffe);
    this.game = new Game(this, r, r.floorSeed);
    this.audio.setMuffle(false);
    this.audio.play(r.song, true);
    this.setState('play');
  }

  retryFloor() {
    const r = this.run;
    r.redials--;
    this.game = new Game(this, r, r.floorSeed);
    this.audio.setMuffle(false);
    if (this.audio.songId !== r.song) this.audio.play(r.song, true);
    this.setState('play');
  }

  finishFloor() {
    const g = this.game, r = this.run;
    const s = g.summary();
    r.score += s.total;
    r.kills += s.kills;
    r.floorsCleared++;
    r.bestCombo = Math.max(r.bestCombo, s.bestCombo);
    r.floorIndex++;
    r.floorInCall++;
    this.scoreSum = s;
    this.scoreShown = 0;
    this.audio.setMuffle(false);
    this.audio.play('afterglow');
    this.setState('score');
  }

  afterScore() {
    const r = this.run;
    const callDone = r.floorInCall >= 3;
    const next = callDone ? () => this.startCall() : () => this.startFloor();
    this.offerPerks(callDone ? 'CALL COMPLETE' : 'PICK A MASK', callDone ? 'Take a mask for the road. The phone is already ringing.' : 'Another mask for the collection.', next);
  }

  gameOver() {
    const r = this.run;
    this.over = { newBest: r.score > this.best.score };
    this.best = { score: Math.max(this.best.score, r.score), floors: Math.max(this.best.floors || 0, r.floorsCleared) };
    saveBest(this.best);
    this.audio.setMuffle(false);
    this.audio.play('afterglow');
    this.setState('gameover');
  }

  pause() {
    this.pauseMenu.sel = 0;
    this.audio.setMuffle(true);
    this.setState('pause');
  }
  resume() {
    this.audio.setMuffle(false);
    this.setState('play');
  }

  nearItem() {
    const g = this.game, p = g.player;
    return g.items.some((it) => Math.hypot(it.x - p.x, it.y - p.y) < 16);
  }

  layoutTouch() {
    const W = this.W, H = this.H, Ut = this.Ut, sr = this.safe.r;
    const g = this.game, p = g && g.player;
    const grabLabel = p && p.weapon && !this.nearItem() ? 'THROW' : 'GRAB';
    this.input.touchButtons = [
      { id: 'grab', x: W - sr - 70 * Ut, y: H * 0.42, r: 36 * Ut, label: grabLabel },
      { id: 'exec', x: W - sr - 158 * Ut, y: H * 0.3, r: 30 * Ut, label: 'EXEC' },
      { id: 'pause', x: W - sr - 34 * Ut, y: 34 * Ut + this.safe.t, r: 22 * Ut, label: 'II' },
    ];
  }

  // ------------------------------------------------------------------ loop
  frame = (now) => {
    requestAnimationFrame(this.frame);
    let dt = (now - this.last) / 1000;
    this.last = now;
    dt = Math.min(Math.max(dt, 0), 1 / 20);
    this.t += dt;
    this.stateT += dt;
    if (this.state === 'play') this.layoutTouch();
    this.input.update();
    const clicks = this.input.consumeClicks();
    const portrait = this.input.isTouchDevice && innerHeight > innerWidth * 1.05;
    if (!portrait) this.update(dt, clicks);
    this.draw(portrait);
    this.input.mouse.moved = false;
  };

  update(dt, clicks) {
    const inp = this.input, a = this.audio;
    switch (this.state) {
      case 'boot':
        if (inp.consumeAny() || clicks.length) {
          a.init();
          a.play('payphone');
          if (inp.source === 'touch' && !isNative()) this.toggleFullscreen();
          this.setState('title');
        }
        break;
      case 'title':
        inp.consumeAny();
        this.titleMenu.update(inp, a, clicks);
        break;
      case 'howto':
        if (this.stateT > 0.2 && (inp.pressed('confirm') || inp.pressed('back') || clicks.length)) { a.sfx('back'); this.setState('title'); }
        break;
      case 'settings':
        this.settingsMenu.update(inp, a, clicks);
        if (this.stateT > 0.1 && inp.pressed('back')) { a.sfx('back'); this.setState(this.settingsReturn); }
        break;
      case 'jukebox':
        this.jukeMenu.update(inp, a, clicks);
        if (this.stateT > 0.1 && inp.pressed('back')) { a.sfx('back'); this.leaveJukebox(); }
        break;
      case 'perk':
        this.updatePerk(clicks);
        break;
      case 'call':
        this.updateCall(dt, clicks);
        break;
      case 'play': {
        const g = this.game;
        g.update(dt);
        if (inp.pressed('pause')) { this.pause(); break; }
        if (g.exited) { this.finishFloor(); break; }
        if (g.player.dead && g.player.deadT > 0.9) this.setState('dead');
        break;
      }
      case 'dead':
        this.game.update(dt);
        if (this.stateT > 0.35 && (inp.pressed('restart') || inp.pressed('confirm') || clicks.length)) {
          if (this.run.redials > 0) { a.sfx('ring', 0.6); this.retryFloor(); }
          else this.gameOver();
        }
        break;
      case 'pause':
        this.pauseMenu.update(inp, a, clicks);
        if (this.state === 'pause' && this.stateT > 0.15 && (inp.pressed('pause') || inp.pressed('back'))) this.resume();
        break;
      case 'score': {
        const s = this.scoreSum;
        const prev = this.scoreShown;
        this.scoreShown = Math.min(8, this.stateT / 0.32);
        if (Math.floor(prev) !== Math.floor(this.scoreShown) && this.scoreShown < 8) a.sfx(Math.floor(this.scoreShown) === 7 ? 'grade' : 'tally');
        if (this.stateT > 0.3 && (inp.pressed('confirm') || clicks.length || inp.pressed('attack'))) {
          if (this.scoreShown < 8) this.stateT = 8 * 0.32;
          else this.afterScore();
        }
        void s;
        break;
      }
      case 'gameover':
        if (this.stateT > 1 && (inp.pressed('confirm') || clicks.length)) {
          a.play('payphone');
          this.titleMenu.sel = 0;
          this.setState('title');
        }
        break;
    }
  }

  updatePerk(clicks) {
    const inp = this.input, a = this.audio, P = this.perk;
    if (inp.pressed('left')) { P.sel = (P.sel + 2) % 3; a.sfx('menu'); }
    if (inp.pressed('right')) { P.sel = (P.sel + 1) % 3; a.sfx('menu'); }
    if (inp.mouse.moved) {
      P.rects.forEach((r, i) => {
        if (inp.mouse.x >= r.x && inp.mouse.x <= r.x + r.w && inp.mouse.y >= r.y && inp.mouse.y <= r.y + r.h && P.sel !== i) { P.sel = i; a.sfx('menu'); }
      });
    }
    if (this.stateT < 0.35) return;
    if (inp.pressed('confirm')) { this.choosePerk(P.cards[P.sel]); return; }
    for (const c of clicks) {
      P.rects.forEach((r, i) => {
        if (c.x >= r.x && c.x <= r.x + r.w && c.y >= r.y && c.y <= r.y + r.h) {
          if (P.sel === i || inp.source !== 'touch') { this.choosePerk(P.cards[i]); }
          else { P.sel = i; a.sfx('menu'); }
        }
      });
      if (this.state !== 'perk') return;
    }
  }

  updateCall(dt, clicks) {
    const C = this.callS, a = this.audio, inp = this.input, msg = this.run.message;
    const T = this.stateT;
    if (C.rings === 0 && T > 0.3) { a.sfx('ring'); C.rings = 1; }
    if (C.rings === 1 && T > 2.0) { a.sfx('ring'); C.rings = 2; }
    if (!C.beeped && T > 3.6) { a.sfx('beep'); C.beeped = true; a.play('deadair'); }
    if (C.beeped && T > 4.1 && C.typed < msg.length) {
      C.typeAcc += dt * 38;
      while (C.typeAcc >= 1 && C.typed < msg.length) {
        C.typeAcc--;
        C.typed++;
        if (C.typed % 2 === 0) a.sfx('type');
      }
    }
    const go = this.stateT > 0.4 && (inp.pressed('confirm') || clicks.length);
    if (go) {
      if (!C.beeped) { this.stateT = 3.6; }
      else if (C.typed < msg.length) C.typed = msg.length;
      else { a.sfx('confirm'); this.startFloor(); }
    }
  }

  // ------------------------------------------------------------------ drawing
  draw(portrait) {
    const u = this.uctx, W = this.W, H = this.H, t = this.t, U = this.U;
    u.clearRect(0, 0, W, H);
    const worldVisible = ['play', 'dead', 'pause'].includes(this.state) || (this.state === 'settings' && this.settingsReturn === 'pause');
    this.gameCanvas.style.visibility = worldVisible ? 'visible' : 'hidden';
    if (worldVisible && this.game) renderWorld(this.gctx, this.game, this.GW, this.GH, t);
    switch (this.state) {
      case 'boot': this.drawBoot(); break;
      case 'title': this.drawTitle(); break;
      case 'howto': this.drawHowto(); break;
      case 'settings':
        if (this.settingsReturn === 'pause') { u.fillStyle = 'rgba(10,0,25,0.78)'; u.fillRect(0, 0, W, H); }
        else drawDarkBackdrop(u, W, H, t);
        hmText(u, 'SETTINGS', W / 2, H * 0.13, 56 * U, { t });
        this.settingsMenu.draw(u, W / 2, H * 0.28, Math.min(54 * U, H * 0.085), 28 * U, t);
        break;
      case 'jukebox': this.drawJukebox(); break;
      case 'perk': this.drawPerk(); break;
      case 'call': this.drawCall(); break;
      case 'play': this.drawHUD(); break;
      case 'dead': this.drawHUD(true); this.drawDead(); break;
      case 'pause':
        u.fillStyle = 'rgba(10,0,25,0.6)';
        u.fillRect(0, 0, W, H);
        hmText(u, 'PAUSED', W / 2, H * 0.25, 80 * U, { t, wobble: 2 });
        plainText(u, `CALL ${pad2(this.run.call)} · FLOOR ${this.run.floorInCall + 1}/3 · ${this.run.modifier.name}`, W / 2, H * 0.37, 16 * U, '#ffb0e0');
        this.pauseMenu.draw(u, W / 2, H * 0.52, 60 * U, 32 * U, t);
        break;
      case 'score': this.drawScore(); break;
      case 'gameover': this.drawGameOver(); break;
    }
    if (portrait) {
      u.fillStyle = '#0c0020';
      u.fillRect(0, 0, W, H);
      hmText(u, 'ROTATE', W / 2, H * 0.42, W * 0.16, { t });
      hmText(u, 'YOUR PHONE', W / 2, H * 0.52, W * 0.09, { t, color: '#fff' });
    }
  }

  drawBoot() {
    const u = this.uctx, W = this.W, H = this.H, t = this.t, U = this.U;
    drawSynthBackdrop(u, W, H, t);
    waveTitle(u, 'REDIAL', W / 2, H * 0.3, Math.min(190 * U, W * 0.2), t);
    hmText(u, 'DO YOU LIKE STARTING OVER?', W / 2, H * 0.47, 26 * U, { t, color: '#ffffff' });
    if (Math.floor(t * 2) % 2 === 0) hmText(u, this.input.isTouchDevice ? 'TAP TO PICK UP' : 'PRESS ANY KEY', W / 2, H * 0.78, 34 * U, { t, hue: t * 120 });
  }

  drawTitle() {
    const u = this.uctx, W = this.W, H = this.H, t = this.t, U = this.U;
    const beat = this.audio.beatPulse();
    drawSynthBackdrop(u, W, H, t, beat);
    waveTitle(u, 'REDIAL', W / 2, H * 0.22, Math.min(170 * U, W * 0.18) * (1 + beat * 0.02), t);
    hmText(u, 'DO YOU LIKE STARTING OVER?', W / 2, H * 0.37, 22 * U, { t, color: '#ffffff' });
    this.titleMenu.draw(u, W / 2, H * 0.52, 56 * U, 32 * U, t);
    if (this.best.score > 0) plainText(u, `BEST: ${this.best.score.toLocaleString()} PTS · ${this.best.floors} FLOORS`, W / 2, H - 50 * U, 15 * U, '#ffd0f0');
    plainText(u, 'A ROGUELIKE LOVE LETTER TO 1989 · ORIGINAL SOUNDTRACK INCLUDED', W / 2, H - 24 * U, 11 * U, 'rgba(255,255,255,0.6)', 'center', 700);
  }

  drawHowto() {
    const u = this.uctx, W = this.W, H = this.H, t = this.t, U = this.U;
    drawDarkBackdrop(u, W, H, t, 200);
    hmText(u, 'HOW TO PLAY', W / 2, H * 0.1, 50 * U, { t });
    const cols = [
      ['THE RULES', ['One hit kills. Them AND you.', 'Clear every floor, then walk back to your car.', 'Punch to knock down, then EXECUTE.', 'Slam doors into people.', 'Throw empty guns — it stuns.', 'Masks stack. Combos multiply.', 'Dying costs a REDIAL. Run out = game over.']],
      ['KEYBOARD + MOUSE', ['WASD / Arrows — move', 'Mouse — aim', 'Left click — attack', 'Right click / E — grab / throw', 'Space — execute', 'Shift — look further', 'R — redial   ·   Esc — pause']],
      ['CONTROLLER', ['Left stick — move', 'Right stick — aim', 'RT / RB — attack', 'LT / X — grab / throw', 'A — execute', 'LB — look further', 'Y — redial   ·   Start — pause']],
      ['TOUCH', ['Left thumb — move', 'Right thumb — aim', 'Push aim stick far — attack', 'GRAB button — grab / throw', 'EXEC button — execute', 'II — pause', 'Tap — redial']],
    ];
    const cw = Math.min(W * 0.235, 300 * U * 1.1);
    const x0 = W / 2 - cw * 2 + cw / 2;
    cols.forEach(([title, lines], i) => {
      const x = x0 + i * cw;
      hmText(u, title, x, H * 0.24, 20 * U, { t: t + i, hue: t * 60 + i * 70 });
      u.font = `700 ${Math.max(10, 14 * U)}px ${FONT}`;
      u.textAlign = 'center';
      u.fillStyle = '#f2ecff';
      let y = H * 0.33;
      for (const ln of lines) {
        for (const w of wrapText(u, ln, cw * 0.92)) {
          u.fillText(w, x, y);
          y += 22 * U;
        }
        y += 6 * U;
      }
    });
    if (Math.floor(t * 2) % 2 === 0) plainText(u, 'PRESS ANY BUTTON TO GO BACK', W / 2, H * 0.92, 16 * U, '#ffb0e0');
  }

  drawJukebox() {
    const u = this.uctx, W = this.W, H = this.H, t = this.t, U = this.U;
    const beat = this.audio.beatPulse();
    drawSynthBackdrop(u, W, H, t, beat);
    u.fillStyle = 'rgba(8,0,20,0.55)';
    u.fillRect(0, 0, W, H);
    hmText(u, 'JUKEBOX', W / 2, H * 0.1, 54 * U, { t });
    plainText(u, 'REDIAL ORIGINAL SOUNDTRACK — ALL TRACKS SYNTHESIZED LIVE', W / 2, H * 0.18, 13 * U, '#ffb0e0');
    this.jukeMenu.draw(u, W * 0.33, H * 0.28, Math.min(46 * U, H * 0.08), 24 * U, t);
    const id = this.audio.songId;
    const x = W * 0.72;
    if (id) {
      const s = SONGS[id];
      plainText(u, 'NOW PLAYING', x, H * 0.3, 14 * U, '#ffffff');
      hmText(u, s.title, x, H * 0.38, 30 * U, { t, hue: t * 100 });
      plainText(u, `${s.mood.toUpperCase()} · ${s.bpm} BPM`, x, H * 0.45, 13 * U, '#ffd0f0');
    }
    const spec = this.audio.spectrum();
    if (spec) {
      const n = 32, bw = (W * 0.36) / n, base = H * 0.78;
      for (let i = 0; i < n; i++) {
        const v = spec[i + 1] / 255;
        const h = v * H * 0.26;
        u.fillStyle = `hsl(${(i * 9 + t * 80) % 360},100%,62%)`;
        u.fillRect(x - (n * bw) / 2 + i * bw + 1, base - h, bw - 2, h);
      }
    }
  }

  drawPerk() {
    const u = this.uctx, W = this.W, H = this.H, t = this.t, U = this.U, P = this.perk;
    drawDarkBackdrop(u, W, H, t, 300);
    hmText(u, P.title, W / 2, H * 0.1, 50 * U, { t });
    plainText(u, P.sub, W / 2, H * 0.18, 15 * U, '#ffd0f0', 'center', 700);
    const cw = Math.min(W * 0.26, H * 0.42, 320), ch = cw * 1.42, gap = cw * 0.12;
    const x0 = W / 2 - (cw * 3 + gap * 2) / 2, y = H * 0.24;
    P.rects = [];
    P.cards.forEach((id, i) => {
      const x = x0 + i * (cw + gap);
      drawCard(u, id, x, y, cw, ch, i === P.sel, t + i * 0.7);
      P.rects.push({ x, y, w: cw, h: ch });
    });
    const r = this.run;
    if (r.masks.length) {
      const s = 30 * U;
      const startX = W / 2 - ((r.masks.length - 1) * s * 1.1) / 2;
      r.masks.forEach((m, i) => drawMaskFront(u, m, startX + i * s * 1.1, Math.min(H - 20 * U, y + ch + 58 * U), s, t));
    }
    const hint = this.input.source === 'touch' ? 'TAP A MASK, TAP AGAIN TO WEAR IT' : this.input.source === 'pad' ? '◀ ▶ CHOOSE · A TO WEAR' : '← → CHOOSE · ENTER / CLICK TO WEAR';
    plainText(u, hint, W / 2, y + ch + 26 * U, 14 * U, '#ffffff');
  }

  drawCall() {
    const u = this.uctx, W = this.W, H = this.H, t = this.t, U = this.U, r = this.run, C = this.callS;
    drawDarkBackdrop(u, W, H, t, 250);
    hmText(u, `CALL ${pad2(r.call)}`, W / 2, H * 0.12, 30 * U, { t, color: '#ffffff' });
    hmText(u, r.callTitle, W / 2, H * 0.24, 64 * U, { t, wobble: 1.5 });
    plainText(u, r.date, W / 2, H * 0.33, 14 * U, '#ffd0f0');
    if (r.call > 1) {
      plainText(u, `TONIGHT: ${r.modifier.name}`, W / 2, H * 0.39, 18 * U, '#7fe6ff');
      plainText(u, r.modifier.desc, W / 2, H * 0.44, 13 * U, '#ffffff', 'center', 700);
    }
    // answering machine
    const bw = Math.min(W * 0.7, 760 * U), bh = H * 0.32, bx = W / 2 - bw / 2, by = H * 0.5;
    u.fillStyle = 'rgba(0,0,0,0.55)';
    u.fillRect(bx + 8, by + 8, bw, bh);
    u.fillStyle = '#16061f';
    u.fillRect(bx, by, bw, bh);
    u.strokeStyle = '#ff3a8c';
    u.lineWidth = 3;
    u.strokeRect(bx, by, bw, bh);
    const ringing = !C.beeped;
    const shake = ringing && Math.floor(t * 20) % 2 ? 3 * U : 0;
    drawHandset(u, bx + 50 * U + shake, by + 46 * U, 34 * U, ringing ? '#ff3a8c' : '#7fe6ff');
    if (ringing) {
      if (this.stateT > 0.3) hmText(u, 'RING...  RING...', bx + 110 * U, by + 46 * U, 26 * U, { t, align: 'left', color: '#ffffff', wobble: 3 });
    } else {
      plainText(u, '1 NEW MESSAGE', bx + 100 * U, by + 46 * U, 16 * U, '#7fe6ff', 'left');
      u.font = `700 ${Math.max(11, 17 * U)}px ${FONT}`;
      u.textAlign = 'left';
      u.textBaseline = 'middle';
      u.fillStyle = '#f6f0ff';
      const lines = wrapText(u, r.message.slice(0, C.typed) + (Math.floor(t * 3) % 2 ? '▌' : ''), bw - 60 * U);
      lines.forEach((ln, i) => u.fillText(ln, bx + 30 * U, by + 96 * U + i * 26 * U));
    }
    if (this.callBonus && r.call > 1) plainText(u, '+1 REDIAL FOR SURVIVING THE LAST CALL', W / 2, by + bh + 26 * U, 13 * U, '#ffe080');
    const done = C.beeped && C.typed >= r.message.length;
    if (Math.floor(t * 2) % 2 === 0) plainText(u, done ? `${this.input.label('confirm')} — HEAD OVER THERE` : `${this.input.label('confirm')} — SKIP`, W / 2, H * 0.95, 16 * U, '#ffffff');
  }

  drawHUD(dead = false) {
    const u = this.uctx, g = this.game, p = g.player, r = this.run, W = this.W, H = this.H, U = this.U, t = this.t;
    const touch = this.input.source === 'touch';
    const sl = this.safe.l + 22 * U, sr = this.safe.r + 22 * U + (touch ? 50 * this.Ut : 0), st = this.safe.t;
    for (const tx of g.texts) {
      const s = this.worldToCss(tx.x, tx.y - tx.t * 16);
      hmText(u, tx.text, s.x, s.y, (tx.big ? 22 : 16) * U * Math.max(1, this.scale / 3), { t, color: tx.color, alpha: clamp((tx.life - tx.t) * 2.5, 0, 1), depth: 3, wobble: 0.6 });
    }
    if (dead) return;
    const [wn, ammo] = weaponLabel(p);
    hmText(u, wn, sl, st + 40 * U, 34 * U, { align: 'left', t, hue: t * 80 });
    if (ammo) hmText(u, ammo, sl, st + 80 * U, 26 * U, { align: 'left', t, color: p.ammo ? '#ffffff' : '#ff5070' });
    hmText(u, `${(r.score + g.floorScore).toLocaleString()}pts`, W - sr, st + 40 * U, 30 * U, { align: 'right', t, color: '#ffffff' });
    if (g.combo >= 2 && g.comboT > 0) {
      const pulse = 1 + this.audio.beatPulse() * 0.08;
      hmText(u, `${g.combo}x COMBO`, W - sr, st + 84 * U, 34 * U * pulse, { align: 'right', t, hue: t * 220 + 180 });
      const bw = 170 * U * (g.comboT / g.stats.comboWindow);
      u.fillStyle = '#0b0610';
      u.fillRect(W - sr - 170 * U - 2, st + 108 * U - 2, 170 * U + 4, 8 * U + 4);
      u.fillStyle = `hsl(${(t * 220) % 360},100%,65%)`;
      u.fillRect(W - sr - bw, st + 108 * U, bw, 8 * U);
    }
    const by = touch ? st + 215 * U : H - this.safe.b;
    plainText(u, `CALL ${pad2(r.call)} · FLOOR ${r.floorInCall + 1}/3${r.modifier.id !== 'none' ? ' · ' + r.modifier.name : ''}`, sl, by - 26 * U, 14 * U, '#ffffff', 'left');
    for (let i = 0; i < r.redials; i++) drawHandset(u, sl + 14 * U + i * 34 * U, by - 60 * U, 22 * U, '#ff3a8c');
    if (p.armor > 0) plainText(u, `ARMOR ×${p.armor}`, sl + Math.max(1, r.redials) * 34 * U + 10 * U, by - 60 * U, 14 * U, '#7fdcff', 'left');
    const uniq = [...new Set(r.masks)];
    uniq.forEach((m, i) => drawMaskFront(u, m, sl + 14 * U + i * 30 * U, by - 100 * U, 26 * U, t));

    if (g.introT > 0) {
      const a = clamp(g.introT, 0, 1);
      hmText(u, r.callTitle, W / 2, H * 0.3, 56 * U, { t, alpha: a, wobble: 1.5 });
      hmText(u, `FLOOR ${r.floorInCall + 1}`, W / 2, H * 0.3 + 56 * U, 32 * U, { t, alpha: a, color: '#ffffff' });
    }
    if (g.cleared) {
      hmText(u, 'GO TO CAR', W / 2, st + 70 * U, 46 * U * (1 + 0.05 * Math.sin(t * 8)), { t, hue: t * 240, wobble: 2 });
      const car = g.level.car;
      const cs = this.worldToCss(car.x, car.y);
      const m = 50 * U;
      if (cs.x < m || cs.x > W - m || cs.y < m || cs.y > H - m) {
        const ax = clamp(cs.x, m, W - m), ay = clamp(cs.y, m, H - m);
        const ang = Math.atan2(cs.y - H / 2, cs.x - W / 2);
        u.save();
        u.translate(ax, ay);
        u.rotate(ang);
        u.fillStyle = '#0b0610';
        u.beginPath(); u.moveTo(22 * U, 0); u.lineTo(-12 * U, -16 * U); u.lineTo(-12 * U, 16 * U); u.closePath(); u.fill();
        u.fillStyle = `hsl(${(t * 300) % 360},100%,65%)`;
        u.beginPath(); u.moveTo(17 * U, 0); u.lineTo(-8 * U, -11 * U); u.lineTo(-8 * U, 11 * U); u.closePath(); u.fill();
        u.restore();
      }
    }
    if (!p.dead && !p.exec) {
      const d = g.downedNear(p, 22);
      if (d) {
        const s = this.worldToCss(d.x, d.y - 14);
        plainText(u, this.input.label('exec'), s.x, s.y, 14 * U * Math.max(1, this.scale / 3), Math.floor(t * 6) % 2 ? '#ffffff' : '#ff4fd8');
      }
    }
    if (this.input.source === 'kbm' && !p.dead) drawCrosshair(u, this.input.mouse.x, this.input.mouse.y, t, Math.max(1, U));
    if (touch) {
      const near = !p.dead && !p.exec && !!g.downedNear(p, 18);
      drawTouchControls(u, this.input, W, H, this.Ut, { exec: near, grab: this.nearItem() });
    }
  }

  drawDead() {
    const u = this.uctx, W = this.W, H = this.H, U = this.U, t = this.t, r = this.run;
    u.fillStyle = 'rgba(40,0,15,0.35)';
    u.fillRect(0, 0, W, H);
    hmText(u, "YOU'RE DEAD", W / 2, H * 0.36, 92 * U, { t, hue: 340 + Math.sin(t * 3) * 25, wobble: 2.5 });
    if (r.redials > 0) {
      hmText(u, `${this.input.label('restart')} TO REDIAL`, W / 2, H * 0.54, 34 * U, { t, color: '#ffffff' });
      plainText(u, `${r.redials} REDIAL${r.redials === 1 ? '' : 'S'} LEFT`, W / 2, H * 0.63, 18 * U, '#ffb0d0');
      for (let i = 0; i < r.redials; i++) drawHandset(u, W / 2 + (i - (r.redials - 1) / 2) * 40 * U, H * 0.71, 24 * U, '#ff3a8c');
    } else {
      hmText(u, 'OUT OF QUARTERS', W / 2, H * 0.54, 34 * U, { t, color: '#ffffff' });
      plainText(u, `${this.input.label('confirm')} — HANG UP`, W / 2, H * 0.63, 18 * U, '#ffb0d0');
    }
  }

  drawScore() {
    const u = this.uctx, W = this.W, H = this.H, U = this.U, t = this.t, s = this.scoreSum, r = this.run;
    drawDarkBackdrop(u, W, H, t, 320);
    hmText(u, 'FLOOR CLEARED', W / 2, H * 0.12, 60 * U, { t, wobble: 1.5 });
    const rows = [
      ['KILLS', `${s.kills}`],
      ['BEST COMBO', `${s.bestCombo}x`],
      ['KILL POINTS', `${s.base.toLocaleString()}`],
      ['TIME BONUS', `${s.timeBonus.toLocaleString()}  (${s.time.toFixed(1)}s)`],
      ['FLEXIBILITY', `${s.variety.toLocaleString()}`],
      ['COMBO BONUS', `${s.comboBonus.toLocaleString()}`],
      ['TOTAL', `${s.total.toLocaleString()}`],
    ];
    const shown = Math.floor(this.scoreShown);
    rows.forEach(([k, v], i) => {
      if (i >= shown) return;
      const y = H * 0.25 + i * 42 * U;
      const last = i === rows.length - 1;
      hmText(u, k, W * 0.5 - 20 * U, y, (last ? 28 : 22) * U, { t: t + i, align: 'right', color: last ? null : '#ffffff', hue: t * 120, wobble: 0.4 });
      hmText(u, v, W * 0.5 + 20 * U, y, (last ? 28 : 22) * U, { t: t + i, align: 'left', hue: t * 90 + i * 40, wobble: 0.4 });
    });
    if (this.scoreShown >= 7) {
      const k = Math.min(1, (this.scoreShown - 7) * 2);
      const size = (180 - 60 * k) * U;
      hmText(u, s.grade, W * 0.84, H * 0.45, size, { t, hue: t * 200, wobble: 3, alpha: k });
      plainText(u, 'GRADE', W * 0.84, H * 0.45 - 90 * U, 16 * U, '#ffffff');
    }
    plainText(u, `RUN TOTAL: ${r.score.toLocaleString()} PTS`, W / 2, H * 0.84, 18 * U, '#ffd0f0');
    if (this.scoreShown >= 8 && Math.floor(t * 2) % 2 === 0) plainText(u, `${this.input.label('confirm')} — CONTINUE`, W / 2, H * 0.92, 16 * U, '#ffffff');
  }

  drawGameOver() {
    const u = this.uctx, W = this.W, H = this.H, U = this.U, t = this.t, r = this.run;
    drawSynthBackdrop(u, W, H, t, this.audio.beatPulse());
    u.fillStyle = 'rgba(10,0,20,0.6)';
    u.fillRect(0, 0, W, H);
    hmText(u, 'LINE DISCONNECTED', W / 2, H * 0.16, 62 * U, { t, wobble: 2 });
    const lines = [
      `REACHED CALL ${pad2(r.call)} · FLOOR ${r.floorInCall + 1}`,
      `FLOORS CLEARED: ${r.floorsCleared}`,
      `KILLS: ${r.kills}   ·   BEST COMBO: ${r.bestCombo}x`,
    ];
    lines.forEach((l, i) => plainText(u, l, W / 2, H * 0.3 + i * 30 * U, 18 * U, '#ffffff'));
    hmText(u, `${r.score.toLocaleString()} PTS`, W / 2, H * 0.52, 54 * U, { t, hue: t * 100 });
    if (this.over.newBest) hmText(u, 'NEW BEST!', W / 2, H * 0.62, 30 * U, { t: t * 2, hue: t * 300, wobble: 3 });
    else plainText(u, `BEST: ${this.best.score.toLocaleString()} PTS`, W / 2, H * 0.62, 16 * U, '#ffd0f0');
    const uniq = r.masks;
    const s = 40 * U;
    uniq.forEach((m, i) => drawMaskFront(u, m, W / 2 + (i - (uniq.length - 1) / 2) * s * 1.1, H * 0.74, s, t));
    if (this.stateT > 1 && Math.floor(t * 2) % 2 === 0) plainText(u, `${this.input.label('confirm')} — BACK TO THE PAYPHONE`, W / 2, H * 0.9, 16 * U, '#ffffff');
  }
}

window.redial = new App();
