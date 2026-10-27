// World renderer: draws a floor into the low-res pixel canvas (backdrop, floor, blood, actors, doors, walls, fx).
import { TAU, settings } from './util.js';
import { WEAPONS } from './data.js';
import { characterSprite, dogSprite, weaponSprite, carSprite, corpseSprite } from './sprites.js';
import { makeCanvas } from './util.js';

export function worldToScreen(cam, GW, GH, x, y) {
  const dx = (x - Math.round(cam.x)) * cam.zoom, dy = (y - Math.round(cam.y)) * cam.zoom;
  const c = Math.cos(cam.rot), s = Math.sin(cam.rot);
  return { x: GW / 2 + dx * c - dy * s, y: GH / 2 + dx * s + dy * c };
}

export function screenToWorld(cam, GW, GH, sx, sy) {
  const dx = sx - GW / 2, dy = sy - GH / 2;
  const c = Math.cos(-cam.rot), s = Math.sin(-cam.rot);
  return { x: (dx * c - dy * s) / cam.zoom + Math.round(cam.x), y: (dx * s + dy * c) / cam.zoom + Math.round(cam.y) };
}

export function drawBackdrop(ctx, w, h, t, dim = false) {
  const hue = (t * 14) % 360;
  ctx.fillStyle = `hsl(${hue},72%,${dim ? 16 : 28}%)`;
  ctx.fillRect(0, 0, w, h);
  ctx.save();
  ctx.globalAlpha = 0.13;
  ctx.fillStyle = `hsl(${(hue + 160) % 360},85%,62%)`;
  ctx.translate(w / 2, h / 2);
  ctx.rotate(0.6 + Math.sin(t * 0.2) * 0.12);
  const off = (t * 22) % 44;
  const R = Math.max(w, h) * 1.3;
  for (let x = -R; x < R; x += 44) ctx.fillRect(x + off, -R, 20, R * 2);
  ctx.restore();
}

const ease = (t) => 1 - Math.pow(1 - t, 3);
const PANTS = { player: '#2a2a3a' };

function weaponRot(w, swingT, swingDir) {
  if (!w || w.type !== 'melee') return 0;
  const a = -1.3, b = 1.25;
  if (swingT > 0) {
    const e = ease(Math.min(1, swingT));
    return swingDir > 0 ? a + (b - a) * e : b + (a - b) * e;
  }
  return swingDir > 0 ? b * 0.85 : a * 0.85;
}

function drawShadow(ctx, x, y, r) {
  ctx.fillStyle = 'rgba(0,0,0,0.32)';
  ctx.fillRect(Math.round(x - r + 2), Math.round(y - r + 3), r * 2, r * 2 - 1);
}

function drawHumanoid(ctx, ent, spr, weaponId, pants, moving, t) {
  const w = weaponId && weaponId !== 'fists' ? WEAPONS[weaponId] : null;
  drawShadow(ctx, ent.x, ent.y, ent.r + 1);
  ctx.save();
  ctx.translate(Math.round(ent.x), Math.round(ent.y));
  ctx.rotate(ent.a);
  if (moving) {
    const s = Math.round(Math.sin(ent.walk) * 3);
    ctx.fillStyle = '#0b0610';
    ctx.fillRect(-3 + s, -5, 5, 4);
    ctx.fillRect(-3 - s, 1, 5, 4);
    ctx.fillStyle = pants;
    ctx.fillRect(-2 + s, -4, 3, 2);
    ctx.fillRect(-2 - s, 2, 3, 2);
  }
  let kx = -ent.kick;
  if (!w && ent.swingT > 0) kx += Math.round(Math.sin(Math.PI * ent.swingT) * 3);
  ctx.drawImage(spr.img, Math.round(-spr.cx + kx), Math.round(-spr.cy));
  if (w) {
    const ws = weaponSprite(weaponId);
    ctx.translate(spr.hand.x + kx, spr.hand.y);
    ctx.rotate(weaponRot(w, ent.swingT, ent.swingDir));
    ctx.drawImage(ws.img, -ws.px, -ws.py);
  }
  ctx.restore();
}

function drawEnemy(ctx, game, e, t) {
  if (e.type === 'dog') {
    drawShadow(ctx, e.x, e.y, 5);
    const spr = dogSprite(Math.floor(e.walk * 0.6) % 2);
    ctx.save();
    ctx.translate(Math.round(e.x), Math.round(e.y));
    ctx.rotate(e.a);
    ctx.drawImage(spr.img, -spr.cx, -spr.cy);
    ctx.restore();
    return;
  }
  const heavy = e.type === 'heavy';
  const wid = e.weapon || 'fists';
  const pose = WEAPONS[wid]?.pose || 'fists';
  const spr = characterSprite(e.look, pose, null, heavy);
  const moving = Math.abs(e.vx) + Math.abs(e.vy) > 1;
  drawHumanoid(ctx, e, spr, wid, '#1a1a22', moving, t);
  if (e.flash > 0) {
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillRect(Math.round(e.x - e.r), Math.round(e.y - e.r), e.r * 2, e.r * 2);
  }
}

function drawDowned(ctx, game, e, t) {
  const kind = e.type === 'dog' ? 'dog' : e.type === 'heavy' ? 'heavy' : 'human';
  const spr = corpseSprite(e.look, 1, null, kind);
  const wig = Math.sin(t * 12 + e.x) * 0.05;
  ctx.save();
  ctx.translate(Math.round(e.x), Math.round(e.y));
  ctx.rotate(e.downA + wig);
  ctx.drawImage(spr.img, -spr.cx, -spr.cy);
  ctx.restore();
}

function glyph(ctx, ch, x, y, color) {
  ctx.font = '900 11px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#0b0610';
  ctx.strokeText(ch, x, y);
  ctx.fillStyle = color;
  ctx.fillText(ch, x, y);
}

let darkCanvas = null;

export function renderWorld(ctx, game, GW, GH, t) {
  const lvl = game.level, cam = game.cam, p = game.player;
  ctx.imageSmoothingEnabled = false;
  drawBackdrop(ctx, GW, GH, t, game.cleared);
  const sh = settings.shake ? game.shake : 0;
  ctx.save();
  ctx.translate(GW / 2 + (Math.random() - 0.5) * sh, GH / 2 + (Math.random() - 0.5) * sh);
  ctx.rotate(cam.rot);
  ctx.scale(cam.zoom, cam.zoom);
  ctx.translate(-Math.round(cam.x), -Math.round(cam.y));

  ctx.drawImage(lvl.floor, 0, 0);
  ctx.drawImage(lvl.decal, 0, 0);

  // getaway car
  const car = carSprite();
  ctx.save();
  ctx.translate(Math.round(lvl.car.x), Math.round(lvl.car.y));
  ctx.rotate(lvl.car.rot);
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.fillRect(-car.cx + 3, -car.cy + 3, car.img.width, car.img.height);
  ctx.drawImage(car.img, -car.cx, -car.cy);
  ctx.restore();

  // floor weapons (flashing like they want to be picked up)
  const blink = Math.floor(t * 4) % 2 === 0;
  for (const it of game.items) {
    const ws = weaponSprite(it.id);
    if (!ws) continue;
    ctx.save();
    ctx.translate(Math.round(it.x), Math.round(it.y));
    ctx.rotate(it.rot);
    if (blink) {
      ctx.fillStyle = 'rgba(255,255,255,0.55)';
      ctx.fillRect(-ws.px - 1, -ws.py - 1, ws.img.width + 2, ws.img.height + 2);
    }
    ctx.drawImage(ws.img, -ws.px, -ws.py);
    ctx.restore();
  }

  // enemy vision cones (ECHO mask)
  if (game.stats.cones) {
    for (const e of game.enemies) {
      if (e.dead || e.state === 'down') continue;
      ctx.fillStyle = e.state === 'alert' ? 'rgba(255,40,60,0.16)' : 'rgba(255,230,80,0.1)';
      ctx.beginPath();
      ctx.moveTo(e.x, e.y);
      ctx.arc(e.x, e.y, 90, e.a - 1.05, e.a + 1.05);
      ctx.closePath();
      ctx.fill();
    }
  }

  for (const e of game.enemies) if (!e.dead && e.state === 'down') drawDowned(ctx, game, e, t);

  // player
  if (!p.dead && !(p.inv > 0 && Math.floor(t * 20) % 2)) {
    const pose = WEAPONS[p.weapon || 'fists'].pose;
    const mask = game.run.masks[game.run.masks.length - 1] || 'wolf';
    const spr = characterSprite('player', pose, mask);
    drawHumanoid(ctx, p, spr, p.weapon, PANTS.player, Math.abs(p.vx) + Math.abs(p.vy) > 8, t);
  }

  for (const e of game.enemies) if (!e.dead && e.state !== 'down') drawEnemy(ctx, game, e, t);

  for (const th of game.thrown) {
    const ws = weaponSprite(th.id);
    ctx.save();
    ctx.translate(Math.round(th.x), Math.round(th.y));
    ctx.rotate(th.rot);
    ctx.drawImage(ws.img, -ws.px, -ws.py);
    ctx.restore();
  }

  // doors
  for (const d of game.doors) {
    ctx.save();
    ctx.translate(d.hx, d.hy);
    ctx.rotate(d.ang);
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(1, 0, d.len, 4);
    ctx.fillStyle = '#0b0610';
    ctx.fillRect(-1, -2.5, d.len + 2, 5);
    ctx.fillStyle = '#c8935c';
    ctx.fillRect(0, -1.5, d.len, 3);
    ctx.fillStyle = '#e8b880';
    ctx.fillRect(0, -1.5, d.len, 1);
    ctx.restore();
  }

  ctx.drawImage(lvl.walls, 0, 0);

  // see-through-walls (HOOTS mask)
  if (game.stats.wallhack && !p.dead) {
    ctx.globalAlpha = 0.45;
    for (const e of game.enemies) {
      if (e.dead || e.state === 'down') continue;
      if (game.los(p.x, p.y, e.x, e.y)) continue;
      drawEnemy(ctx, game, e, t);
    }
    ctx.globalAlpha = 1;
  }

  // bullets
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = '#fff6a0';
  ctx.beginPath();
  for (const b of game.bullets) {
    ctx.moveTo(b.x - b.vx * 0.014, b.y - b.vy * 0.014);
    ctx.lineTo(b.x, b.y);
  }
  ctx.stroke();

  // muzzle flashes
  for (const f of game.flashes) {
    ctx.save();
    ctx.translate(f.x, f.y);
    ctx.rotate(f.a);
    ctx.fillStyle = '#ffe26a';
    ctx.beginPath();
    ctx.moveTo(0, -4);
    ctx.lineTo(11, 0);
    ctx.lineTo(0, 4);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, -1.5, 5, 3);
    ctx.restore();
  }

  // airborne particles
  for (const pt of game.particles) {
    if (pt.type === 'blood') { ctx.fillStyle = '#c0101e'; ctx.fillRect(Math.round(pt.x), Math.round(pt.y - pt.z), 2, 2); }
    else if (pt.type === 'spark') { ctx.fillStyle = '#fff8c0'; ctx.fillRect(Math.round(pt.x), Math.round(pt.y), 1, 1); }
    else if (pt.type === 'shell') { ctx.fillStyle = '#e8c050'; ctx.fillRect(Math.round(pt.x), Math.round(pt.y - pt.z), 2, 1); }
  }

  // ! and ? markers
  for (const e of game.enemies) {
    if (e.dead) continue;
    if (e.alertMark > 0) glyph(ctx, '!', e.x, e.y - 12, '#ff3050');
    else if (e.qMark > 0 && e.state === 'search') glyph(ctx, '?', e.x, e.y - 12, '#ffe040');
  }

  // exit arrow over the car
  if (game.cleared) {
    const bob = Math.sin(t * 6) * 3;
    ctx.save();
    ctx.translate(lvl.car.x, lvl.car.y - 26 + bob);
    ctx.rotate(-cam.rot);
    ctx.fillStyle = '#0b0610';
    ctx.beginPath();
    ctx.moveTo(-7, -6); ctx.lineTo(7, -6); ctx.lineTo(0, 4); ctx.closePath();
    ctx.fill();
    ctx.fillStyle = `hsl(${(t * 300) % 360},100%,65%)`;
    ctx.beginPath();
    ctx.moveTo(-5, -5); ctx.lineTo(5, -5); ctx.lineTo(0, 2); ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  ctx.restore();

  // blackout
  if (game.dark) {
    if (!darkCanvas || darkCanvas.width !== GW || darkCanvas.height !== GH) darkCanvas = makeCanvas(GW, GH);
    const g = darkCanvas.getContext('2d');
    g.globalCompositeOperation = 'source-over';
    g.clearRect(0, 0, GW, GH);
    g.fillStyle = 'rgba(2,0,10,0.9)';
    g.fillRect(0, 0, GW, GH);
    g.globalCompositeOperation = 'destination-out';
    const sp = worldToScreen(cam, GW, GH, p.x, p.y);
    const R = 120 + Math.sin(t * 9) * 2;
    const grad = g.createRadialGradient(sp.x, sp.y, R * 0.25, sp.x, sp.y, R);
    grad.addColorStop(0, 'rgba(0,0,0,1)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, GW, GH);
    for (const f of game.flashes) {
      const fp = worldToScreen(cam, GW, GH, f.x, f.y);
      const fg = g.createRadialGradient(fp.x, fp.y, 0, fp.x, fp.y, 70);
      fg.addColorStop(0, 'rgba(0,0,0,1)');
      fg.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = fg;
      g.fillRect(fp.x - 70, fp.y - 70, 140, 140);
    }
    ctx.drawImage(darkCanvas, 0, 0);
  }
}

export { TAU };
