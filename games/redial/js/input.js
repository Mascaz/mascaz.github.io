// Unified input: keyboard + mouse, standard-mapping gamepads, and twin-stick touch controls.
// The game reads abstract actions (attack, grab, exec, look, pause...) and analog move/aim vectors.

const STICK_R = 56; // CSS px radius of virtual sticks

export class Input {
  constructor(el) {
    this.el = el;
    this.keys = new Set();
    this.tapped = new Set();
    this.mouse = { x: innerWidth / 2, y: innerHeight / 2, buttons: 0, tapped: 0, moved: false };
    this.cur = {};
    this.prev = {};
    this.source = 'kbm';
    this.move = { x: 0, y: 0 };
    this.aim = { x: 0, y: 0, mag: 0 };
    this.clicks = [];
    this.touchMode = 'menu';
    this.touchButtons = [];
    this.sticks = { left: null, right: null };
    this.tbtn = {};
    this.tpulse = {};
    this.pad = null;
    this.padWasDown = false;
    this.anyEvent = false;
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.stickR = STICK_R;
    this._bind();
  }

  _bind() {
    const prevent = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'Tab']);
    addEventListener('keydown', (e) => {
      if (prevent.has(e.code)) e.preventDefault();
      if (!e.repeat) this.anyEvent = true;
      this.keys.add(e.code);
      this.tapped.add(e.code);
      this.source = 'kbm';
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => {
      this.keys.clear();
      this.mouse.buttons = 0;
    });

    const el = this.el;
    el.addEventListener('mousemove', (e) => {
      const dx = e.clientX - this.mouse.x, dy = e.clientY - this.mouse.y;
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      if (dx * dx + dy * dy > 4) {
        this.mouse.moved = true;
        this.source = 'kbm';
      }
    });
    el.addEventListener('mousedown', (e) => {
      this.mouse.buttons |= 1 << e.button;
      this.mouse.tapped |= 1 << e.button;
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.anyEvent = true;
      this.source = 'kbm';
      if (e.button === 0) this.clicks.push({ x: e.clientX, y: e.clientY });
    });
    addEventListener('mouseup', (e) => {
      this.mouse.buttons &= ~(1 << e.button);
    });
    el.addEventListener('contextmenu', (e) => e.preventDefault());

    const opts = { passive: false };
    el.addEventListener('touchstart', (e) => this._touchStart(e), opts);
    el.addEventListener('touchmove', (e) => this._touchMove(e), opts);
    el.addEventListener('touchend', (e) => this._touchEnd(e), opts);
    el.addEventListener('touchcancel', (e) => this._touchEnd(e), opts);
  }

  _touchStart(e) {
    e.preventDefault();
    this.source = 'touch';
    this.anyEvent = true;
    for (const t of e.changedTouches) {
      const x = t.clientX, y = t.clientY;
      if (this.touchMode === 'menu') {
        this.clicks.push({ x, y });
        continue;
      }
      let hitBtn = null;
      for (const b of this.touchButtons) {
        if (Math.hypot(x - b.x, y - b.y) < b.r * 1.2) {
          hitBtn = b;
          break;
        }
      }
      if (hitBtn) {
        this.tbtn[hitBtn.id] = t.identifier;
        this.tpulse[hitBtn.id] = true;
        continue;
      }
      if (x < innerWidth * 0.45) {
        if (!this.sticks.left) this.sticks.left = { id: t.identifier, ox: x, oy: y, x, y };
      } else if (!this.sticks.right) {
        this.sticks.right = { id: t.identifier, ox: x, oy: y, x, y };
      }
    }
  }

  _touchMove(e) {
    e.preventDefault();
    for (const t of e.changedTouches) {
      for (const k of ['left', 'right']) {
        const s = this.sticks[k];
        if (s && s.id === t.identifier) {
          s.x = t.clientX;
          s.y = t.clientY;
          // floating stick: drag the origin along if the finger goes past the rim
          const dx = s.x - s.ox, dy = s.y - s.oy, m = Math.hypot(dx, dy);
          if (m > STICK_R * 1.3) {
            s.ox = s.x - (dx / m) * STICK_R * 1.3;
            s.oy = s.y - (dy / m) * STICK_R * 1.3;
          }
        }
      }
    }
  }

  _touchEnd(e) {
    e.preventDefault();
    for (const t of e.changedTouches) {
      for (const k of ['left', 'right']) if (this.sticks[k] && this.sticks[k].id === t.identifier) this.sticks[k] = null;
      for (const id in this.tbtn) if (this.tbtn[id] === t.identifier) delete this.tbtn[id];
    }
  }

  setTouchMode(mode) {
    if (this.touchMode === mode) return;
    this.touchMode = mode;
    this.sticks.left = this.sticks.right = null;
    this.tbtn = {};
  }

  update() {
    this.prev = this.cur;
    const c = {};
    const tapped = this.tapped;
    this.tapped = new Set();
    const k = (code) => this.keys.has(code) || tapped.has(code);
    const mb = this.mouse.buttons | this.mouse.tapped;
    this.mouse.tapped = 0;
    let mx = (k('KeyD') || k('ArrowRight') ? 1 : 0) - (k('KeyA') || k('ArrowLeft') ? 1 : 0);
    let my = (k('KeyS') || k('ArrowDown') ? 1 : 0) - (k('KeyW') || k('ArrowUp') ? 1 : 0);
    c.attack = !!(mb & 1) || k('KeyJ');
    c.grab = !!(mb & 4) || k('KeyE') || k('KeyK');
    c.exec = k('Space');
    c.look = k('ShiftLeft') || k('ShiftRight');
    c.pause = k('Escape') || k('KeyP');
    c.restart = k('KeyR');
    c.confirm = k('Enter') || k('Space') || k('NumpadEnter');
    c.back = k('Escape') || k('Backspace');
    c.up = k('KeyW') || k('ArrowUp');
    c.down = k('KeyS') || k('ArrowDown');
    c.left = k('KeyA') || k('ArrowLeft');
    c.right = k('KeyD') || k('ArrowRight');
    let ax = 0, ay = 0, amag = 0;

    // ---- gamepad ----
    let pad = null;
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) if (p && p.connected) { pad = p; break; }
    this.pad = pad;
    if (pad) {
      const dz = (x, y, d) => {
        const m = Math.hypot(x, y);
        if (m < d) return [0, 0, 0];
        const n = Math.min(1, (m - d) / (1 - d));
        return [(x / m) * n, (y / m) * n, n];
      };
      const [lx, ly, lm] = dz(pad.axes[0] || 0, pad.axes[1] || 0, 0.22);
      const [rx, ry, rm] = dz(pad.axes[2] || 0, pad.axes[3] || 0, 0.25);
      const b = (i) => !!(pad.buttons[i] && (pad.buttons[i].pressed || pad.buttons[i].value > 0.4));
      let anyBtn = false;
      for (let i = 0; i < pad.buttons.length; i++) if (b(i)) anyBtn = true;
      if (anyBtn && !this.padWasDown) this.anyEvent = true;
      this.padWasDown = anyBtn;
      if (anyBtn || lm > 0 || rm > 0) this.source = 'pad';
      if (lm > 0) { mx = lx; my = ly; }
      if (rm > 0) { ax = rx; ay = ry; amag = rm; }
      c.attack ||= b(7) || b(5);
      c.grab ||= b(6) || b(2);
      c.exec ||= b(0);
      c.look ||= b(4);
      c.pause ||= b(9);
      c.restart ||= b(3) || b(8);
      c.confirm ||= b(0);
      c.back ||= b(1);
      c.up ||= b(12) || ly < -0.55;
      c.down ||= b(13) || ly > 0.55;
      c.left ||= b(14) || lx < -0.55;
      c.right ||= b(15) || lx > 0.55;
    }

    // ---- touch ----
    if (this.sticks.left) {
      const s = this.sticks.left;
      let dx = (s.x - s.ox) / STICK_R, dy = (s.y - s.oy) / STICK_R;
      const m = Math.hypot(dx, dy);
      if (m > 1) { dx /= m; dy /= m; }
      if (m > 0.12) { mx = dx; my = dy; }
    }
    if (this.sticks.right) {
      const s = this.sticks.right;
      let dx = (s.x - s.ox) / STICK_R, dy = (s.y - s.oy) / STICK_R;
      const m = Math.min(1, Math.hypot(dx, dy));
      if (m > 0.15) {
        const l = Math.hypot(dx, dy);
        ax = dx / l; ay = dy / l; amag = m;
        if (m > 0.62) c.attack = true;
      }
    }
    for (const id in this.tbtn) c[id] = true;
    for (const id in this.tpulse) c[id] = true;
    this.tpulse = {};

    const mm = Math.hypot(mx, my);
    if (mm > 1) { mx /= mm; my /= mm; }
    this.move.x = mx;
    this.move.y = my;
    this.aim.x = ax;
    this.aim.y = ay;
    this.aim.mag = amag;
    this.cur = c;
  }

  pressed(a) {
    return !!this.cur[a] && !this.prev[a];
  }
  held(a) {
    return !!this.cur[a];
  }
  consumeClicks() {
    const c = this.clicks;
    this.clicks = [];
    return c;
  }
  consumeAny() {
    const a = this.anyEvent;
    this.anyEvent = false;
    return a;
  }
  rumble(strong = 0.5, weak = 0.5, ms = 80) {
    const act = this.pad && this.pad.vibrationActuator;
    if (act && act.playEffect) act.playEffect('dual-rumble', { duration: ms, strongMagnitude: strong, weakMagnitude: weak }).catch(() => {});
  }
  // Labels for prompts, per active device.
  label(action) {
    const s = this.source;
    const L = {
      kbm: { attack: 'LMB', grab: 'RMB', exec: 'SPACE', restart: 'R', confirm: 'ENTER', back: 'ESC', pause: 'ESC' },
      pad: { attack: 'RT', grab: 'LT', exec: 'A', restart: 'Y', confirm: 'A', back: 'B', pause: 'START' },
      touch: { attack: 'AIM STICK', grab: 'GRAB', exec: 'EXEC', restart: 'TAP', confirm: 'TAP', back: 'BACK', pause: 'II' },
    };
    return (L[s] || L.kbm)[action] || action;
  }
}
