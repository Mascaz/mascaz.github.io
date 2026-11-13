// UI primitives drawn on the full-resolution overlay canvas: wobbly neon text, synthwave backdrop,
// menus, mask cards, HUD and touch controls.
import { FONT, TAU, clamp } from './util.js';
import { drawMaskFront } from './sprites.js';
import { WEAPONS, MASK_BY_ID } from './data.js';

export function hmText(ctx, text, x, y, size, o = {}) {
  const { align = 'center', t = 0, wobble = 1, color = null, hue = null, shadow = '#1a0024', italic = true, rot = null, alpha = 1, base = 'middle', weight = 900 } = o;
  const depth = o.depth ?? Math.max(2, size * 0.08);
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x, y);
  ctx.rotate(rot ?? Math.sin(t * 2.2 + x * 0.013 + y * 0.007) * 0.04 * wobble);
  ctx.font = `${italic ? 'italic ' : ''}${weight} ${size}px ${FONT}`;
  ctx.textAlign = align;
  ctx.textBaseline = base;
  ctx.fillStyle = shadow;
  const stepD = Math.max(1, depth / 4);
  for (let i = depth; i > 0; i -= stepD) ctx.fillText(text, i, i);
  ctx.lineJoin = 'round';
  ctx.lineWidth = Math.max(2, size * 0.11);
  ctx.strokeStyle = '#0b0610';
  ctx.strokeText(text, 0, 0);
  ctx.fillStyle = color || `hsl(${((hue ?? t * 90) % 360 + 360) % 360},100%,68%)`;
  ctx.fillText(text, 0, 0);
  ctx.restore();
}

export function plainText(ctx, text, x, y, size, color = '#fff', align = 'center', weight = 800) {
  ctx.font = `${weight} ${size}px ${FONT}`;
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  ctx.lineWidth = Math.max(2, size * 0.18);
  ctx.strokeStyle = '#0b0610';
  ctx.strokeText(text, x, y);
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

export function wrapText(ctx, text, maxW) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (ctx.measureText(test).width > maxW && line) {
      lines.push(line);
      line = w;
    } else line = test;
  }
  if (line) lines.push(line);
  return lines;
}

// Big title with per-letter wave, hue cycling and a chromatic split.
export function waveTitle(ctx, text, x, y, size, t) {
  ctx.save();
  ctx.font = `italic 900 ${size}px ${FONT}`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  const chars = [...text];
  const gap = size * 0.03;
  const widths = chars.map((c) => ctx.measureText(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + gap * (chars.length - 1);
  let cx = x - total / 2;
  ctx.translate(0, 0);
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const wy = Math.sin(t * 3 + i * 0.7) * size * 0.06;
    const r = Math.sin(t * 2 + i) * 0.06;
    ctx.save();
    ctx.translate(cx + widths[i] / 2, y + wy);
    ctx.rotate(r);
    ctx.textAlign = 'center';
    const d = size * 0.09;
    ctx.fillStyle = '#1a0024';
    for (let k = d; k > 0; k -= Math.max(1, d / 5)) ctx.fillText(ch, k, k);
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = 'rgba(0,240,255,0.55)';
    ctx.fillText(ch, -size * 0.035, 0);
    ctx.fillStyle = 'rgba(255,0,150,0.55)';
    ctx.fillText(ch, size * 0.035, 0);
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineWidth = size * 0.07;
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#0b0610';
    ctx.strokeText(ch, 0, 0);
    const g = ctx.createLinearGradient(0, -size / 2, 0, size / 2);
    const h = (t * 50 + i * 22) % 360;
    g.addColorStop(0, `hsl(${h},100%,80%)`);
    g.addColorStop(0.5, `hsl(${(h + 30) % 360},100%,62%)`);
    g.addColorStop(1, `hsl(${(h + 60) % 360},100%,50%)`);
    ctx.fillStyle = g;
    ctx.fillText(ch, 0, 0);
    ctx.restore();
    cx += widths[i] + gap;
  }
  ctx.restore();
}

// Sunset, striped sun, palms and a scrolling perspective grid.
export function drawSynthBackdrop(ctx, w, h, t, beat = 0) {
  const horizon = h * 0.6;
  const sky = ctx.createLinearGradient(0, 0, 0, horizon);
  sky.addColorStop(0, '#0c0020');
  sky.addColorStop(0.45, '#3d0a5a');
  sky.addColorStop(0.8, '#b0186a');
  sky.addColorStop(1, '#ff5a6e');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, horizon + 1);
  // stars
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  for (let i = 0; i < 60; i++) {
    const sx = (i * 137.5 * 7.3) % w, sy = ((i * 91.7) % (horizon * 0.6));
    if (Math.sin(t * 2 + i) > -0.3) ctx.fillRect(sx, sy, 2, 2);
  }
  // sun
  const sr = Math.min(w, h) * 0.26 * (1 + beat * 0.015);
  const sx = w / 2, sy = horizon - sr * 0.35;
  ctx.save();
  ctx.beginPath();
  ctx.arc(sx, sy, sr, 0, TAU);
  ctx.clip();
  const sg = ctx.createLinearGradient(0, sy - sr, 0, sy + sr);
  sg.addColorStop(0, '#fff27a');
  sg.addColorStop(0.5, '#ff9a3c');
  sg.addColorStop(1, '#ff2e88');
  ctx.fillStyle = sg;
  ctx.fillRect(sx - sr, sy - sr, sr * 2, sr * 2);
  ctx.fillStyle = sky;
  for (let i = 0; i < 9; i++) {
    const yy = sy + sr * (0.05 + i * 0.12) + ((t * 12) % (sr * 0.12));
    ctx.fillRect(sx - sr, yy, sr * 2, 2 + i * 1.6);
  }
  ctx.restore();
  // ground
  ctx.fillStyle = '#0a0016';
  ctx.fillRect(0, horizon, w, h - horizon);
  ctx.save();
  ctx.strokeStyle = `rgba(255,46,170,${0.55 + beat * 0.3})`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  const scroll = (t * 0.35) % 1;
  for (let i = 0; i < 16; i++) {
    const z = (i + scroll) / 16;
    const yy = horizon + (h - horizon) * z * z;
    ctx.moveTo(0, yy);
    ctx.lineTo(w, yy);
  }
  for (let i = -14; i <= 14; i++) {
    ctx.moveTo(w / 2 + i * w * 0.02, horizon);
    ctx.lineTo(w / 2 + i * w * 0.16, h);
  }
  ctx.stroke();
  ctx.restore();
  const hg = ctx.createLinearGradient(0, horizon - 20, 0, horizon + 40);
  hg.addColorStop(0, 'rgba(255,90,160,0)');
  hg.addColorStop(0.5, 'rgba(255,90,160,0.5)');
  hg.addColorStop(1, 'rgba(255,90,160,0)');
  ctx.fillStyle = hg;
  ctx.fillRect(0, horizon - 20, w, 60);
  // palms
  drawPalm(ctx, w * 0.1, horizon + h * 0.08, h * 0.55, t, 1);
  drawPalm(ctx, w * 0.9, horizon + h * 0.1, h * 0.62, t + 1, -1);
  drawPalm(ctx, w * 0.2, horizon + h * 0.02, h * 0.34, t + 2, 1);
}

function drawPalm(ctx, x, y, hgt, t, dir) {
  ctx.save();
  ctx.fillStyle = '#05000c';
  ctx.strokeStyle = '#05000c';
  const sway = Math.sin(t * 0.8) * hgt * 0.02;
  const topX = x + dir * hgt * 0.15 + sway, topY = y - hgt;
  ctx.lineWidth = hgt * 0.045;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.quadraticCurveTo(x + dir * hgt * 0.02, y - hgt * 0.6, topX, topY);
  ctx.stroke();
  for (let i = 0; i < 7; i++) {
    const a = -Math.PI / 2 + (i - 3) * 0.5 + Math.sin(t + i) * 0.05;
    const len = hgt * (0.32 + (i % 2) * 0.06);
    ctx.lineWidth = hgt * 0.022;
    ctx.beginPath();
    ctx.moveTo(topX, topY);
    const ex = topX + Math.cos(a) * len, ey = topY + Math.sin(a) * len * 0.6 + len * 0.35;
    ctx.quadraticCurveTo(topX + Math.cos(a) * len * 0.5, topY + Math.sin(a) * len * 0.5 - len * 0.15, ex, ey);
    ctx.stroke();
  }
  ctx.restore();
}

export function drawDarkBackdrop(ctx, w, h, t, hueBase = 280) {
  const g = ctx.createLinearGradient(0, 0, w, h);
  const hh = hueBase + Math.sin(t * 0.3) * 30;
  g.addColorStop(0, `hsl(${hh},60%,10%)`);
  g.addColorStop(1, `hsl(${hh + 50},70%,18%)`);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  ctx.save();
  ctx.globalAlpha = 0.08;
  ctx.translate(w / 2, h / 2);
  ctx.rotate(t * 0.05);
  ctx.fillStyle = `hsl(${hh + 180},90%,60%)`;
  const R = Math.max(w, h);
  for (let i = 0; i < 12; i++) {
    ctx.rotate(TAU / 12);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(R, -R * 0.12);
    ctx.lineTo(R, R * 0.12);
    ctx.fill();
  }
  ctx.restore();
}

// ---------------------------------------------------------------- menus
export class Menu {
  constructor(items) {
    this.items = items;
    this.sel = 0;
    this.rects = [];
  }
  update(input, audio, clicks) {
    const n = this.items.length;
    if (input.pressed('up')) { this.sel = (this.sel - 1 + n) % n; audio.sfx('menu'); }
    if (input.pressed('down')) { this.sel = (this.sel + 1) % n; audio.sfx('menu'); }
    const it = this.items[this.sel];
    if (it.type === 'slider') {
      if (input.pressed('left')) { it.set(clamp(Math.round((it.get() - 0.1) * 10) / 10, 0, 1)); audio.sfx('menu'); }
      if (input.pressed('right')) { it.set(clamp(Math.round((it.get() + 0.1) * 10) / 10, 0, 1)); audio.sfx('menu'); }
    } else if (it.type === 'toggle' && (input.pressed('left') || input.pressed('right'))) {
      it.set(!it.get());
      audio.sfx('menu');
    }
    if (input.mouse.moved) {
      for (let i = 0; i < this.rects.length; i++) {
        const r = this.rects[i];
        if (input.mouse.x >= r.x && input.mouse.x <= r.x + r.w && input.mouse.y >= r.y && input.mouse.y <= r.y + r.h && this.sel !== i) {
          this.sel = i;
          audio.sfx('menu');
        }
      }
    }
    if (input.pressed('confirm')) this.activate(this.items[this.sel], audio);
    for (const c of clicks) {
      for (let i = 0; i < this.rects.length; i++) {
        const r = this.rects[i];
        if (c.x >= r.x && c.x <= r.x + r.w && c.y >= r.y && c.y <= r.y + r.h) {
          this.sel = i;
          const item = this.items[i];
          if (item.type === 'slider') {
            item.set(clamp(Math.round(((c.x - r.x) / r.w) * 10) / 10, 0, 1));
            audio.sfx('menu');
          } else this.activate(item, audio);
          return;
        }
      }
    }
  }
  activate(it, audio) {
    if (it.type === 'toggle') { it.set(!it.get()); audio.sfx('menu'); }
    else if (it.type === 'slider') { /* adjust with left/right */ }
    else { audio.sfx(it.back ? 'back' : 'confirm'); it.action(); }
  }
  draw(ctx, cx, y0, spacing, size, t) {
    this.rects = [];
    this.items.forEach((it, i) => {
      const sel = i === this.sel;
      const y = y0 + i * spacing;
      let label = typeof it.label === 'function' ? it.label() : it.label;
      if (it.type === 'slider') label = `${label}  ‹ ${Math.round(it.get() * 100)}% ›`;
      if (it.type === 'toggle') label = `${label}  ${it.get() ? 'ON' : 'OFF'}`;
      const s = sel ? size * 1.18 : size;
      hmText(ctx, label, cx, y, s, { t, color: sel ? null : 'rgba(240,235,255,0.88)', wobble: sel ? 1.6 : 0.3, hue: sel ? t * 140 : null, depth: sel ? s * 0.1 : s * 0.05 });
      ctx.font = `italic 900 ${s}px ${FONT}`;
      const w = ctx.measureText(label).width;
      this.rects.push({ x: cx - w / 2 - 14, y: y - s * 0.6, w: w + 28, h: s * 1.2 });
    });
  }
}

// ---------------------------------------------------------------- cards
export function drawCard(ctx, card, x, y, w, h, sel, t) {
  ctx.save();
  ctx.translate(x + w / 2, y + h / 2);
  if (sel) ctx.rotate(Math.sin(t * 3) * 0.025);
  const lift = sel ? -h * 0.04 : 0;
  ctx.translate(0, lift);
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.fillRect(-w / 2 + 8, -h / 2 + 10, w, h);
  ctx.fillStyle = sel ? '#1d0830' : '#120620';
  ctx.fillRect(-w / 2, -h / 2, w, h);
  ctx.lineWidth = sel ? 5 : 2;
  ctx.strokeStyle = sel ? `hsl(${(t * 160) % 360},100%,65%)` : 'rgba(255,255,255,0.25)';
  ctx.strokeRect(-w / 2, -h / 2, w, h);
  const m = MASK_BY_ID[card];
  drawMaskFront(ctx, card, 0, -h * 0.17, w * 0.5, t);
  hmText(ctx, m.name, 0, h * 0.12, w * 0.15, { t, color: sel ? null : '#ffffff', hue: t * 100, wobble: sel ? 1 : 0.2 });
  ctx.font = `800 ${w * 0.065}px ${FONT}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#ff9ad8';
  ctx.fillText(m.animal, 0, h * 0.21);
  ctx.font = `700 ${w * 0.072}px ${FONT}`;
  ctx.fillStyle = '#f2ecff';
  const lines = wrapText(ctx, m.desc, w * 0.84);
  lines.forEach((ln, i) => ctx.fillText(ln, 0, h * 0.3 + i * w * 0.09));
  ctx.restore();
}

// ---------------------------------------------------------------- HUD bits
export function drawHandset(ctx, x, y, s, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.5);
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#0b0610';
  ctx.lineWidth = s * 0.55;
  ctx.beginPath();
  ctx.moveTo(-s * 0.7, 0);
  ctx.quadraticCurveTo(0, -s * 0.5, s * 0.7, 0);
  ctx.stroke();
  ctx.strokeStyle = color;
  ctx.lineWidth = s * 0.32;
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.strokeStyle = '#0b0610';
  ctx.lineWidth = 2;
  for (const sx of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(sx * s * 0.7, s * 0.05, s * 0.32, s * 0.22, 0, 0, TAU);
    ctx.fill();
    ctx.stroke();
  }
  ctx.restore();
}

export function drawCrosshair(ctx, x, y, t, U) {
  const r = 9 * U + Math.sin(t * 8) * 1.5 * U;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(t * 1.5);
  ctx.lineWidth = 4 * U;
  ctx.strokeStyle = '#0b0610';
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, TAU);
  ctx.stroke();
  ctx.lineWidth = 2 * U;
  ctx.strokeStyle = `hsl(${(t * 200) % 360},100%,65%)`;
  ctx.stroke();
  for (let i = 0; i < 4; i++) {
    ctx.rotate(TAU / 4);
    ctx.fillStyle = '#0b0610';
    ctx.fillRect(r - 1 * U, -2 * U, 9 * U, 4 * U);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(r, -1 * U, 7 * U, 2 * U);
  }
  ctx.restore();
}

export function drawTouchControls(ctx, input, W, H, Ut, hints) {
  const R = input.stickR;
  const stick = (s, hx, hy, label) => {
    ctx.save();
    if (s) {
      ctx.globalAlpha = 0.85;
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(255,255,255,0.6)';
      ctx.beginPath();
      ctx.arc(s.ox, s.oy, R, 0, TAU);
      ctx.stroke();
      let dx = s.x - s.ox, dy = s.y - s.oy;
      const m = Math.hypot(dx, dy);
      if (m > R) { dx *= R / m; dy *= R / m; }
      ctx.fillStyle = 'rgba(255,60,170,0.75)';
      ctx.beginPath();
      ctx.arc(s.ox + dx, s.oy + dy, R * 0.45, 0, TAU);
      ctx.fill();
    } else {
      ctx.globalAlpha = 0.28;
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#fff';
      ctx.beginPath();
      ctx.arc(hx, hy, R, 0, TAU);
      ctx.stroke();
      plainText(ctx, label, hx, hy, 12 * Ut, '#fff');
    }
    ctx.restore();
  };
  stick(input.sticks.left, 110 * Ut, H - 100 * Ut, 'MOVE');
  stick(input.sticks.right, W - 130 * Ut, H - 100 * Ut, 'AIM + FIRE');
  for (const b of input.touchButtons) {
    const held = !!input.tbtn[b.id];
    const hot = hints[b.id];
    ctx.save();
    ctx.globalAlpha = held ? 0.95 : hot ? 0.85 : 0.5;
    ctx.fillStyle = held ? 'rgba(255,60,170,0.8)' : hot ? 'rgba(80,220,255,0.55)' : 'rgba(20,0,40,0.55)';
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, TAU);
    ctx.fill();
    ctx.stroke();
    plainText(ctx, b.label, b.x, b.y, b.r * 0.42, '#fff');
    ctx.restore();
  }
}

export function weaponLabel(p) {
  const w = WEAPONS[p.weapon || 'fists'];
  if (w.type === 'gun') return [w.name, `${p.ammo}/${Math.max(p.ammo, w.ammo)}`];
  return [w.name, ''];
}
