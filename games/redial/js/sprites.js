// Procedural pixel-art sprites (top-down, facing +x) and front-facing mask art for menus.
import { makeCanvas, TAU } from './util.js';
import { LOOKS, MASK_BY_ID } from './data.js';

const cache = new Map();

function px(g, color, x, y, w = 1, h = 1) {
  g.fillStyle = color;
  g.fillRect(Math.round(x), Math.round(y), Math.max(1, Math.round(w)), Math.max(1, Math.round(h)));
}

function disc(g, color, cx, cy, r) {
  g.fillStyle = color;
  const x0 = Math.floor(cx - r - 1), x1 = Math.ceil(cx + r + 1);
  const y0 = Math.floor(cy - r - 1), y1 = Math.ceil(cy + r + 1);
  for (let y = y0; y <= y1; y++)
    for (let x = x0; x <= x1; x++) {
      const dx = x + 0.5 - cx, dy = y + 0.5 - cy;
      if (dx * dx + dy * dy <= r * r) g.fillRect(x, y, 1, 1);
    }
}

function ellipse(g, color, cx, cy, rx, ry) {
  g.fillStyle = color;
  for (let y = Math.floor(cy - ry - 1); y <= Math.ceil(cy + ry + 1); y++)
    for (let x = Math.floor(cx - rx - 1); x <= Math.ceil(cx + rx + 1); x++) {
      const dx = (x + 0.5 - cx) / rx, dy = (y + 0.5 - cy) / ry;
      if (dx * dx + dy * dy <= 1) g.fillRect(x, y, 1, 1);
    }
}

export function outline(src, color = '#0b0610') {
  const sil = makeCanvas(src.width, src.height);
  const sx = sil.getContext('2d');
  sx.drawImage(src, 0, 0);
  sx.globalCompositeOperation = 'source-in';
  sx.fillStyle = color;
  sx.fillRect(0, 0, sil.width, sil.height);
  const c = makeCanvas(src.width, src.height);
  const g = c.getContext('2d');
  for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) g.drawImage(sil, dx, dy);
  g.drawImage(src, 0, 0);
  return c;
}

// ---------- heads ----------
function drawEnemyHead(g, look, cx, cy, r) {
  disc(g, look.hair, cx + 0.5, cy + 0.5, r);
  // face peeking out the front (viewed from above)
  px(g, look.skin, cx + r - 1, cy - 1, 2, 3);
}

function drawMaskTop(g, mask, cx, cy) {
  const m = MASK_BY_ID[mask] || MASK_BY_ID.wolf;
  const c = m.color, a = m.accent;
  // ears first (behind head)
  switch (m.ears) {
    case 'pointy': px(g, c, cx - 3, cy - 5, 2, 2); px(g, c, cx - 3, cy + 4, 2, 2); px(g, c, cx - 4, cy - 6); px(g, c, cx - 4, cy + 6); break;
    case 'round': disc(g, c, cx - 1.5, cy - 4, 1.8); disc(g, c, cx - 1.5, cy + 5, 1.8); break;
    case 'small': px(g, c, cx - 2, cy - 5, 2, 1); px(g, c, cx - 2, cy + 5, 2, 1); break;
    case 'big': ellipse(g, c, cx - 1, cy - 5, 2.5, 2); ellipse(g, c, cx - 1, cy + 6, 2.5, 2); break;
    case 'tufts': px(g, c, cx - 3, cy - 5, 1, 2); px(g, c, cx - 3, cy + 5, 1, 2); break;
  }
  if (m.extra === 'hood') ellipse(g, c, cx - 1, cy + 0.5, 3, 6);
  disc(g, c, cx + 0.5, cy + 0.5, 4);
  switch (m.snout) {
    case 'muzzle': px(g, a, cx + 3, cy - 1, 2, 3); px(g, '#111', cx + 5, cy, 1, 1); break;
    case 'beak': px(g, a, cx + 4, cy - 1, 2, 3); px(g, a, cx + 6, cy, 1, 1); break;
    case 'trunk': px(g, c, cx + 4, cy, 4, 2); px(g, a, cx + 3, cy - 2, 2, 1); px(g, a, cx + 3, cy + 3, 2, 1); break;
    case 'jaw': px(g, a, cx + 2, cy - 2, 3, 5); break;
  }
  switch (m.extra) {
    case 'horns': px(g, '#f0e8d8', cx, cy - 6, 1, 2); px(g, '#f0e8d8', cx, cy + 6, 1, 2); px(g, '#f0e8d8', cx + 1, cy - 7); px(g, '#f0e8d8', cx + 1, cy + 8); break;
    case 'fin': px(g, a, cx - 3, cy, 5, 1); px(g, '#4a6a88', cx - 2, cy, 3, 1); break;
    case 'antennae': px(g, a, cx + 3, cy - 4, 1, 1); px(g, a, cx + 4, cy - 5, 2, 1); px(g, a, cx + 3, cy + 4, 1, 1); px(g, a, cx + 4, cy + 5, 2, 1); break;
    case 'spots': px(g, a, cx - 1, cy - 2); px(g, a, cx + 1, cy + 2); px(g, a, cx - 2, cy + 1); break;
    case 'whiskers': px(g, '#eee', cx + 4, cy - 3); px(g, '#eee', cx + 4, cy + 3); break;
  }
  if (m.eyes === 'big') { px(g, a, cx + 2, cy - 2, 2, 2); px(g, a, cx + 2, cy + 1, 2, 2); }
  else if (m.eyes === 'bulge') { disc(g, a, cx + 2, cy - 2.5, 1.5); disc(g, a, cx + 2, cy + 3.5, 1.5); }
  else { px(g, '#0b0610', cx + 2, cy - 2); px(g, '#0b0610', cx + 2, cy + 2); }
}

// ---------- characters ----------
// Returns { img, cx, cy, hand: {x,y} } — hand offset is relative to sprite centre, in local facing space.
export function characterSprite(lookId, pose, mask = null, heavy = false) {
  const key = `c:${lookId}:${pose}:${mask}:${heavy}`;
  if (cache.has(key)) return cache.get(key);
  const look = LOOKS[lookId] || LOOKS.white;
  const S = heavy ? 30 : 22;
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  const cx = S / 2, cy = S / 2;
  const k = heavy ? 1.45 : 1;
  const sleeve = look.sleeve, skin = look.skin;
  let hand = { x: 7 * k, y: 0 };
  // arms
  if (pose === 'fists') {
    px(g, sleeve, cx + 1, cy - 6 * k, 4 * k, 2 * k); px(g, skin, cx + 1 + 4 * k, cy - 6 * k, 2 * k, 2 * k);
    px(g, sleeve, cx + 1, cy + 4 * k, 4 * k, 2 * k); px(g, skin, cx + 1 + 4 * k, cy + 4 * k, 2 * k, 2 * k);
    hand = { x: 6 * k, y: 0 };
  } else if (pose === 'melee') {
    px(g, sleeve, cx + 1, cy + 3 * k, 5 * k, 2 * k); px(g, skin, cx + 1 + 5 * k, cy + 3 * k, 2 * k, 2 * k);
    px(g, sleeve, cx + 1, cy - 6 * k, 3 * k, 2 * k); px(g, skin, cx + 1 + 3 * k, cy - 6 * k, 2 * k, 2 * k);
    hand = { x: 7 * k, y: 4 * k };
  } else {
    // gun: both hands meet in front
    px(g, sleeve, cx + 1, cy + 1 * k, 5 * k, 2 * k);
    px(g, sleeve, cx + 1, cy - 5 * k, 2 * k, 2 * k); px(g, sleeve, cx + 2 * k, cy - 4 * k, 2 * k, 2 * k); px(g, sleeve, cx + 3 * k, cy - 2 * k, 2 * k, 2 * k);
    px(g, skin, cx + 1 + 5 * k, cy, 2 * k, 2 * k);
    hand = { x: 7 * k, y: 1 * k };
  }
  // torso
  const tw = 7 * k, th = 13 * k;
  const tx = cx - tw / 2 - 0.5, ty = cy - th / 2;
  px(g, look.body, tx + 1, ty, tw - 2, th);
  px(g, look.body, tx, ty + 1, tw, th - 2);
  px(g, look.bodyDark, tx, ty + 1, 2 * k, th - 2);
  // head
  if (mask) drawMaskTop(g, mask, Math.floor(cx), Math.floor(cy));
  else drawEnemyHead(g, look, Math.floor(cx), Math.floor(cy), heavy ? 4.5 : 3.5);
  const out = { img: outline(c), cx, cy, hand };
  cache.set(key, out);
  return out;
}

export function dogSprite(frame = 0) {
  const key = `dog:${frame}`;
  if (cache.has(key)) return cache.get(key);
  const S = 24, c = makeCanvas(S, S), g = c.getContext('2d');
  const cx = 12, cy = 12;
  const body = '#2a1c14', tan = '#a0602c';
  // legs
  const o = frame ? 1 : -1;
  px(g, body, cx - 5 + o, cy - 4, 2, 2); px(g, body, cx - 5 - o, cy + 3, 2, 2);
  px(g, body, cx + 2 - o, cy - 4, 2, 2); px(g, body, cx + 2 + o, cy + 3, 2, 2);
  // tail
  px(g, body, cx - 10, cy, 4, 1);
  ellipse(g, body, cx - 1, cy + 0.5, 6, 3);
  px(g, tan, cx - 3, cy - 1, 4, 1);
  disc(g, body, cx + 5.5, cy + 0.5, 2.6);
  px(g, tan, cx + 7, cy - 1, 3, 3);
  px(g, '#000', cx + 9, cy, 1, 1);
  px(g, body, cx + 4, cy - 3, 2, 1); px(g, body, cx + 4, cy + 3, 2, 1);
  const out = { img: outline(c), cx, cy, hand: { x: 8, y: 0 } };
  cache.set(key, out);
  return out;
}

// Lying body, axis-aligned (head toward +x). Variant changes limb splay.
export function corpseSprite(lookId, variant = 0, mask = null, kind = 'human') {
  const key = `corpse:${lookId}:${variant}:${mask}:${kind}`;
  if (cache.has(key)) return cache.get(key);
  const S = 30, c = makeCanvas(S, S), g = c.getContext('2d');
  const cx = 15, cy = 15;
  if (kind === 'dog') {
    const body = '#2a1c14', tan = '#a0602c';
    px(g, body, cx - 6, cy + 2, 2, 4); px(g, body, cx + 3, cy + 2, 2, 4); px(g, body, cx - 4, cy - 5, 2, 3);
    ellipse(g, body, cx - 1, cy, 6, 3);
    disc(g, body, cx + 6, cy + 1, 2.6); px(g, tan, cx + 7, cy + 1, 3, 2);
    px(g, body, cx - 10, cy - 1, 4, 1);
  } else {
    const look = LOOKS[lookId] || LOOKS.white;
    const pants = look.pants || '#2a2a33';
    const heavy = kind === 'heavy';
    const k = heavy ? 1.4 : 1;
    const v = variant % 4;
    // legs
    px(g, pants, cx - 11 * k, cy - 3 - (v & 1), 7 * k, 2 * k);
    px(g, pants, cx - 11 * k, cy + 1 + (v === 2 ? 2 : 0), 7 * k, 2 * k);
    px(g, '#111', cx - 12 * k, cy - 3 - (v & 1), 1, 2 * k); px(g, '#111', cx - 12 * k, cy + 1 + (v === 2 ? 2 : 0), 1, 2 * k);
    // arms
    if (v === 0 || v === 2) { px(g, look.sleeve, cx - 1, cy - 9 * k, 2 * k, 5 * k); px(g, look.skin, cx - 1, cy - 10 * k, 2, 2); px(g, look.sleeve, cx + 1, cy + 4 * k, 2 * k, 5 * k); px(g, look.skin, cx + 1, cy + 9 * k, 2, 2); }
    else { px(g, look.sleeve, cx + 2, cy - 8 * k, 5 * k, 2 * k); px(g, look.skin, cx + 2 + 5 * k, cy - 8 * k, 2, 2); px(g, look.sleeve, cx - 3, cy + 5 * k, 2 * k, 4 * k); px(g, look.skin, cx - 3, cy + 9 * k, 2, 2); }
    // torso
    px(g, look.body, cx - 4 * k, cy - 4 * k, 8 * k, 8 * k);
    px(g, look.bodyDark, cx - 4 * k, cy + 2 * k, 8 * k, 2 * k);
    if (mask) {
      const hx = Math.floor(cx + 7 * k), hy = Math.floor(cy);
      drawMaskTop(g, mask, hx, hy);
    } else {
      disc(g, look.hair, cx + 7 * k, cy + 0.5, 3.4 * k);
      px(g, look.skin, cx + 8 * k, cy - 1, 2, 3);
    }
  }
  const out = { img: outline(c), cx, cy };
  cache.set(key, out);
  return out;
}

// ---------- weapons (pointing +x, pivot at grip) ----------
const WEAPON_DRAW = {
  bat: [20, 6, 2, 3, (g) => { px(g, '#5a3a1e', 1, 2, 5, 2); px(g, '#c8924e', 6, 1, 11, 3); px(g, '#c8924e', 17, 2, 1, 1); px(g, '#e0b070', 7, 1, 9, 1); }],
  pipe: [19, 5, 2, 2, (g) => { px(g, '#8d939c', 1, 1, 16, 2); px(g, '#c8ccd2', 1, 1, 16, 1); px(g, '#6a6f78', 15, 0, 2, 4); }],
  knife: [13, 5, 2, 2, (g) => { px(g, '#222', 1, 1, 4, 2); px(g, '#999', 5, 0, 1, 4); px(g, '#dde2e8', 6, 1, 5, 2); px(g, '#dde2e8', 11, 1, 1, 1); }],
  katana: [26, 6, 3, 3, (g) => { px(g, '#1a1a1a', 1, 2, 5, 2); px(g, '#d4a838', 6, 1, 1, 4); px(g, '#e6eaee', 7, 2, 16, 2); px(g, '#ffffff', 7, 2, 15, 1); px(g, '#e6eaee', 23, 2, 1, 1); }],
  pistol: [12, 7, 2, 3, (g) => { px(g, '#1c1c1c', 1, 1, 9, 3); px(g, '#2c2c2c', 1, 3, 3, 3); px(g, '#555', 2, 1, 7, 1); }],
  shotgun: [21, 6, 5, 3, (g) => { px(g, '#6a3e1e', 1, 2, 6, 3); px(g, '#222', 7, 1, 13, 2); px(g, '#5a3418', 10, 3, 5, 2); px(g, '#444', 7, 1, 13, 1); }],
  uzi: [13, 9, 3, 3, (g) => { px(g, '#1e1e1e', 1, 1, 9, 4); px(g, '#111', 5, 5, 2, 3); px(g, '#333', 10, 2, 2, 1); px(g, '#3a3a3a', 1, 1, 9, 1); }],
  rifle: [23, 8, 6, 3, (g) => { px(g, '#1a1a1a', 1, 2, 6, 3); px(g, '#262626', 7, 1, 13, 3); px(g, '#111', 11, 4, 2, 3); px(g, '#3a3a3a', 20, 2, 2, 1); px(g, '#444', 7, 1, 13, 1); }],
};

export function weaponSprite(id) {
  const key = `w:${id}`;
  if (cache.has(key)) return cache.get(key);
  const d = WEAPON_DRAW[id];
  if (!d) return null;
  const [w, h, pxv, pyv, fn] = d;
  const c = makeCanvas(w + 2, h + 2), g = c.getContext('2d');
  g.translate(1, 1);
  fn(g);
  const out = { img: outline(c), px: pxv + 1, py: pyv + 1, len: w };
  cache.set(key, out);
  return out;
}

// ---------- the getaway car (homage to a certain stainless steel coupe, but hot pink) ----------
export function carSprite() {
  if (cache.has('car')) return cache.get('car');
  const W = 40, H = 22, c = makeCanvas(W, H), g = c.getContext('2d');
  const body = '#ff3a8c', dark = '#b0205e', glass = '#1a1030';
  px(g, dark, 2, 3, 36, 16);
  px(g, body, 3, 2, 34, 18);
  px(g, dark, 3, 2, 34, 2); px(g, dark, 3, 18, 34, 2);
  px(g, glass, 20, 4, 8, 14); // windshield
  px(g, glass, 10, 5, 5, 12); // rear window
  px(g, body, 15, 5, 5, 12); // roof
  px(g, '#ff8ac0', 16, 6, 3, 10);
  px(g, '#fff6a0', 36, 4, 2, 3); px(g, '#fff6a0', 36, 15, 2, 3); // headlights
  px(g, '#ff2020', 2, 4, 1, 3); px(g, '#ff2020', 2, 15, 1, 3); // taillights
  px(g, '#111', 7, 1, 5, 1); px(g, '#111', 28, 1, 5, 1); px(g, '#111', 7, 20, 5, 1); px(g, '#111', 28, 20, 5, 1);
  const out = { img: outline(c), cx: W / 2, cy: H / 2 };
  cache.set('car', out);
  return out;
}

// ---------- front-facing mask illustration for menus / HUD (vector, any size) ----------
export function drawMaskFront(ctx, id, x, y, size, t = 0) {
  const m = MASK_BY_ID[id];
  if (!m) return;
  const s = size / 100;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.lineJoin = 'round';
  ctx.lineWidth = 6;
  ctx.strokeStyle = '#0b0610';
  const C = m.color, A = m.accent;
  const shape = (fn, fill) => { ctx.beginPath(); fn(); ctx.fillStyle = fill; ctx.fill(); ctx.stroke(); };
  if (m.bonus) {
    if (id === 'spare') {
      shape(() => ctx.arc(0, 0, 40, 0, TAU), C);
      ctx.fillStyle = '#888'; ctx.font = `900 34px sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('25¢', 0, 2);
    } else {
      shape(() => ctx.roundRect(-44, -26, 88, 52, 6), C);
      ctx.fillStyle = A; ctx.font = `900 40px sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('$', 0, 3);
    }
    ctx.restore();
    return;
  }
  // ears
  switch (m.ears) {
    case 'pointy': shape(() => { ctx.moveTo(-40, -10); ctx.lineTo(-34, -62); ctx.lineTo(-8, -32); ctx.closePath(); }, C); shape(() => { ctx.moveTo(40, -10); ctx.lineTo(34, -62); ctx.lineTo(8, -32); ctx.closePath(); }, C); break;
    case 'round': shape(() => ctx.arc(-32, -36, 16, 0, TAU), C); shape(() => ctx.arc(32, -36, 16, 0, TAU), C); break;
    case 'small': shape(() => ctx.ellipse(-30, -38, 10, 8, -0.5, 0, TAU), C); shape(() => ctx.ellipse(30, -38, 10, 8, 0.5, 0, TAU), C); break;
    case 'big': shape(() => ctx.ellipse(-48, -2, 26, 34, -0.2, 0, TAU), C); shape(() => ctx.ellipse(48, -2, 26, 34, 0.2, 0, TAU), C); break;
    case 'tufts': shape(() => { ctx.moveTo(-36, -24); ctx.lineTo(-44, -60); ctx.lineTo(-14, -36); ctx.closePath(); }, C); shape(() => { ctx.moveTo(36, -24); ctx.lineTo(44, -60); ctx.lineTo(14, -36); ctx.closePath(); }, C); break;
  }
  if (m.extra === 'hood') shape(() => ctx.ellipse(0, 4, 54, 46, 0, 0, TAU), C);
  if (m.extra === 'horns') {
    shape(() => { ctx.moveTo(-28, -28); ctx.quadraticCurveTo(-70, -40, -60, -72); ctx.quadraticCurveTo(-50, -48, -18, -40); ctx.closePath(); }, '#f0e8d8');
    shape(() => { ctx.moveTo(28, -28); ctx.quadraticCurveTo(70, -40, 60, -72); ctx.quadraticCurveTo(50, -48, 18, -40); ctx.closePath(); }, '#f0e8d8');
  }
  if (m.extra === 'fin') shape(() => { ctx.moveTo(-12, -38); ctx.lineTo(6, -78); ctx.lineTo(14, -38); ctx.closePath(); }, C);
  if (m.extra === 'antennae') {
    ctx.beginPath(); ctx.moveTo(-10, -36); ctx.quadraticCurveTo(-24, -70, -40, -74); ctx.moveTo(10, -36); ctx.quadraticCurveTo(24, -70, 40, -74); ctx.stroke();
    ctx.strokeStyle = A; ctx.lineWidth = 3; ctx.stroke(); ctx.strokeStyle = '#0b0610'; ctx.lineWidth = 6;
  }
  // face
  shape(() => ctx.ellipse(0, 0, 40, 44, 0, 0, TAU), C);
  if (m.extra === 'spots') { ctx.fillStyle = A; for (const [sx, sy] of [[-20, -20], [18, -26], [24, 14], [-26, 10]]) { ctx.beginPath(); ctx.arc(sx, sy, 5, 0, TAU); ctx.fill(); } }
  // eyes
  const blink = Math.sin(t * 1.3) > 0.985;
  if (m.eyes === 'big') { shape(() => ctx.arc(-16, -8, 13, 0, TAU), A); shape(() => ctx.arc(16, -8, 13, 0, TAU), A); ctx.fillStyle = '#0b0610'; ctx.beginPath(); ctx.arc(-16, -8, 5, 0, TAU); ctx.arc(16, -8, 5, 0, TAU); ctx.fill(); }
  else if (m.eyes === 'bulge') { shape(() => ctx.arc(-24, -30, 12, 0, TAU), A); shape(() => ctx.arc(24, -30, 12, 0, TAU), A); ctx.fillStyle = '#0b0610'; ctx.beginPath(); ctx.ellipse(-24, -30, 4, blink ? 1 : 7, 0, 0, TAU); ctx.ellipse(24, -30, 4, blink ? 1 : 7, 0, 0, TAU); ctx.fill(); }
  else { ctx.fillStyle = '#0b0610'; ctx.beginPath(); ctx.ellipse(-15, -8, 8, blink ? 1 : 6, 0.2, 0, TAU); ctx.ellipse(15, -8, 8, blink ? 1 : 6, -0.2, 0, TAU); ctx.fill(); }
  // snout
  switch (m.snout) {
    case 'muzzle': shape(() => ctx.ellipse(0, 20, 18, 14, 0, 0, TAU), A); ctx.fillStyle = '#0b0610'; ctx.beginPath(); ctx.ellipse(0, 12, 7, 5, 0, 0, TAU); ctx.fill(); break;
    case 'beak': shape(() => { ctx.moveTo(-10, 4); ctx.lineTo(10, 4); ctx.lineTo(0, 30); ctx.closePath(); }, A); break;
    case 'trunk': shape(() => { ctx.moveTo(-9, 6); ctx.quadraticCurveTo(-12, 50, 10, 66); ctx.lineTo(18, 58); ctx.quadraticCurveTo(6, 44, 9, 6); ctx.closePath(); }, C); shape(() => { ctx.moveTo(-18, 22); ctx.quadraticCurveTo(-30, 40, -34, 34); ctx.lineTo(-22, 18); ctx.closePath(); }, A); shape(() => { ctx.moveTo(18, 22); ctx.quadraticCurveTo(30, 40, 34, 34); ctx.lineTo(22, 18); ctx.closePath(); }, A); break;
    case 'jaw': shape(() => { ctx.moveTo(-26, 14); ctx.quadraticCurveTo(0, 46, 26, 14); ctx.closePath(); }, A); ctx.fillStyle = '#0b0610'; for (let i = -18; i <= 18; i += 9) { ctx.beginPath(); ctx.moveTo(i - 4, 18); ctx.lineTo(i, 25); ctx.lineTo(i + 4, 18); ctx.fill(); } break;
    default: ctx.beginPath(); ctx.moveTo(-10, 22); ctx.quadraticCurveTo(0, 28, 10, 22); ctx.stroke();
  }
  if (m.extra === 'whiskers') { ctx.lineWidth = 2; ctx.beginPath(); for (const sy of [16, 22]) { ctx.moveTo(-14, sy); ctx.lineTo(-44, sy - 4); ctx.moveTo(14, sy); ctx.lineTo(44, sy - 4); } ctx.stroke(); }
  ctx.restore();
}
