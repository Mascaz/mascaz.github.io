// Shared helpers: math, seeded RNG, geometry, canvas creation, persisted settings.

export const TAU = Math.PI * 2;
export const T = 8; // tile size in internal pixels
export const FONT = "'Arial Black', 'Arial Bold', 'Helvetica Neue', Impact, system-ui, sans-serif";

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const dist = (ax, ay, bx, by) => Math.hypot(bx - ax, by - ay);
export const damp = (a, b, k, dt) => lerp(a, b, 1 - Math.exp(-k * dt));

export function angDiff(a, b) {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
}

export function approachAngle(a, target, maxStep) {
  const d = angDiff(a, target);
  return Math.abs(d) <= maxStep ? target : a + Math.sign(d) * maxStep;
}

export class RNG {
  constructor(seed = Date.now()) {
    this.s = seed >>> 0 || 0x9e3779b9;
  }
  next() {
    let t = (this.s = (this.s + 0x6d2b79f5) >>> 0);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  range(a, b) {
    return a + (b - a) * this.next();
  }
  int(a, b) {
    return Math.floor(a + (b - a + 1) * this.next());
  }
  pick(arr) {
    return arr[Math.floor(this.next() * arr.length)];
  }
  chance(p) {
    return this.next() < p;
  }
  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  weighted(entries) {
    let total = 0;
    for (const [, w] of entries) total += Math.max(0, w);
    let r = this.next() * total;
    for (const [item, w] of entries) {
      r -= Math.max(0, w);
      if (r <= 0) return item;
    }
    return entries[entries.length - 1][0];
  }
}

export function pointSegDist(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const l2 = dx * dx + dy * dy;
  let t = l2 ? ((px - ax) * dx + (py - ay) * dy) / l2 : 0;
  t = clamp(t, 0, 1);
  return Math.hypot(px - (ax + dx * t), py - (ay + dy * t));
}

export function segIntersect(ax, ay, bx, by, cx, cy, dx, dy) {
  const d1x = bx - ax, d1y = by - ay, d2x = dx - cx, d2y = dy - cy;
  const den = d1x * d2y - d1y * d2x;
  if (Math.abs(den) < 1e-9) return false;
  const t = ((cx - ax) * d2y - (cy - ay) * d2x) / den;
  const u = ((cx - ax) * d1y - (cy - ay) * d1x) / den;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.ceil(w));
  c.height = Math.max(1, Math.ceil(h));
  return c;
}

// ---------- settings ----------
const SETTINGS_KEY = 'redial.settings.v1';
const DEFAULTS = { music: 0.7, sfx: 0.8, shake: true, sway: true, scanlines: true, aimAssist: true };
export const settings = (() => {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') };
  } catch {
    return { ...DEFAULTS };
  }
})();
export function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {}
}

const BEST_KEY = 'redial.best.v1';
export function loadBest() {
  try {
    return JSON.parse(localStorage.getItem(BEST_KEY) || '{"score":0,"floors":0}');
  } catch {
    return { score: 0, floors: 0 };
  }
}
export function saveBest(b) {
  try {
    localStorage.setItem(BEST_KEY, JSON.stringify(b));
  } catch {}
}
