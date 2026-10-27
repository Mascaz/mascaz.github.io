// Gameplay simulation for a single floor: player, enemy AI, doors, bullets, thrown weapons, blood, scoring.
import { T, clamp, dist, angDiff, approachAngle, pointSegDist, segIntersect, damp, settings } from './util.js';
import { WEAPONS, computeStats } from './data.js';
import { generateLevel } from './level.js';
import { corpseSprite } from './sprites.js';

const solidMove = (t) => t === 1 || t === 2 || t === 4;
const solidShot = (t) => t === 1 || t === 4;
const DIRS8 = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
const FREE = 65535;

export class Game {
  constructor(app, run, seed) {
    this.app = app;
    this.audio = app.audio;
    this.input = app.input;
    this.run = run;
    this.stats = computeStats(run.masks);
    this.load(seed);
  }

  // ------------------------------------------------------------------ setup
  load(seed) {
    const run = this.run, st = this.stats;
    this.seed = seed;
    const lvl = (this.level = generateLevel(seed, run.floorIndex, run.modifier.id, run.look));
    this.W = lvl.W;
    this.H = lvl.H;
    this.grid = lvl.grid;
    this.doors = lvl.doors.map((d) => ({ ...d, pusher: null }));
    this.player = {
      x: lvl.spawn.x, y: lvl.spawn.y, r: 5, a: lvl.spawn.a, vx: 0, vy: 0,
      weapon: st.startWeapon, ammo: 0, cd: 0, swingT: 0, swingDir: 1,
      dead: false, deadT: 0, exec: null, armor: st.armor, walk: 0, kick: 0, inv: 0,
    };
    this.enemies = lvl.enemies.map((s) => this.makeEnemy(s));
    this.items = lvl.items.map((i) => ({ ...i, vx: 0, vy: 0, spin: 0, ammo: this.fullAmmo(i.id) }));
    this.bullets = [];
    this.thrown = [];
    this.particles = [];
    this.texts = [];
    this.flashes = [];
    this.combo = 0;
    this.comboT = 0;
    this.bestCombo = 0;
    this.floorScore = 0;
    this.kills = 0;
    this.methods = new Set();
    this.time = 0;
    this.cleared = false;
    this.exited = false;
    this.clearT = 0;
    this.hitstop = 0;
    this.shake = 0;
    this.introT = 2.4;
    this.emptyT = 0;
    this.flow = new Uint16Array(this.W * this.H);
    this.scratch = new Uint16Array(this.W * this.H);
    this.queue = new Int32Array(this.W * this.H);
    this.flowT = 0;
    this.cam = { x: this.player.x, y: this.player.y, rot: 0, zoom: 1 };
    this.dark = run.modifier.id === 'dark' && !st.cones;
    this.computeFlow();
  }

  fullAmmo(id) {
    const w = WEAPONS[id];
    return w && w.type === 'gun' ? Math.round(w.ammo * this.stats.ammoMult) : 0;
  }

  makeEnemy(s) {
    const heavy = s.type === 'heavy', dog = s.type === 'dog';
    const fi = this.run.floorIndex;
    const reactBase = (dog ? 0.22 : 0.4) * (this.run.modifier.id === 'edge' ? 0.5 : 1) * this.stats.reactMult * Math.max(0.6, 1 - fi * 0.03);
    return {
      ...s, look: this.run.look, r: heavy ? 7 : 5, vx: 0, vy: 0, kvx: 0, kvy: 0,
      state: s.behavior === 'patrol' ? 'patrol' : 'idle', pi: 1, waitT: 0, path: null, goal: null, searchT: 0,
      react: 0, reactBase, atkCd: 0, windup: 0, burstLeft: 0, downT: 0, downA: 0, hp: heavy ? 3 : 1, dead: false,
      walk: 0, ta: s.a, turnT: 1 + Math.random() * 3, alertMark: 0, qMark: 0, pursuit: 0, steer: null, steerT: 0,
      lastX: s.x, lastY: s.y, swingT: 0, swingDir: 1, kick: 0, stuckT: 0, flash: 0, mvA: s.a,
      speedWalk: dog ? 45 : heavy ? 25 : 32,
      speedRun: (dog ? 150 : heavy ? 55 : WEAPONS[s.weapon]?.type === 'gun' ? 72 : 90) * Math.min(1.2, 1 + fi * 0.015),
    };
  }

  // ------------------------------------------------------------------ helpers
  tileAt(tx, ty) {
    if (tx < 0 || ty < 0 || tx >= this.W || ty >= this.H) return 4;
    return this.grid[ty * this.W + tx];
  }
  tileAtPx(x, y) {
    return this.tileAt(Math.floor(x / T), Math.floor(y / T));
  }
  doorEnd(d) {
    return [d.hx + Math.cos(d.ang) * d.len, d.hy + Math.sin(d.ang) * d.len];
  }

  los(x0, y0, x1, y1) {
    const dx = x1 - x0, dy = y1 - y0, d = Math.hypot(dx, dy);
    const n = Math.ceil(d / 3);
    for (let i = 1; i < n; i++) {
      if (solidShot(this.tileAtPx(x0 + (dx * i) / n, y0 + (dy * i) / n))) return false;
    }
    for (const door of this.doors) {
      const [ex, ey] = this.doorEnd(door);
      if (segIntersect(x0, y0, x1, y1, door.hx, door.hy, ex, ey)) return false;
    }
    return true;
  }

  clearPath(x0, y0, x1, y1, r) {
    const dx = x1 - x0, dy = y1 - y0, d = Math.hypot(dx, dy);
    if (d < 0.01) return true;
    const nx = (-dy / d) * r, ny = (dx / d) * r;
    const n = Math.ceil(d / 3);
    for (let i = 1; i <= n; i++) {
      const x = x0 + (dx * i) / n, y = y0 + (dy * i) / n;
      if (solidMove(this.tileAtPx(x, y)) || solidMove(this.tileAtPx(x + nx, y + ny)) || solidMove(this.tileAtPx(x - nx, y - ny))) return false;
    }
    return true;
  }

  moveCircle(c, dx, dy) {
    const n = Math.max(1, Math.ceil(Math.max(Math.abs(dx), Math.abs(dy)) / 3));
    for (let i = 0; i < n; i++) {
      c.x += dx / n;
      c.y += dy / n;
      this.resolve(c);
    }
  }

  resolve(c) {
    const r = c.r;
    for (let pass = 0; pass < 2; pass++) {
      const x0 = Math.floor((c.x - r) / T), x1 = Math.floor((c.x + r) / T);
      const y0 = Math.floor((c.y - r) / T), y1 = Math.floor((c.y + r) / T);
      for (let ty = y0; ty <= y1; ty++)
        for (let tx = x0; tx <= x1; tx++) {
          if (!solidMove(this.tileAt(tx, ty))) continue;
          const nx = clamp(c.x, tx * T, tx * T + T), ny = clamp(c.y, ty * T, ty * T + T);
          const dx = c.x - nx, dy = c.y - ny, d2 = dx * dx + dy * dy;
          if (d2 >= r * r) continue;
          if (d2 > 1e-6) {
            const d = Math.sqrt(d2), push = r - d;
            c.x += (dx / d) * push;
            c.y += (dy / d) * push;
          } else {
            const l = c.x - tx * T, rr = tx * T + T - c.x, u = c.y - ty * T, b = ty * T + T - c.y;
            const m = Math.min(l, rr, u, b);
            if (m === l) c.x = tx * T - r;
            else if (m === rr) c.x = tx * T + T + r;
            else if (m === u) c.y = ty * T - r;
            else c.y = ty * T + T + r;
          }
        }
    }
  }

  volAt(x, y) {
    const p = this.player;
    return clamp(1 - dist(x, y, p.x, p.y) / 520, 0.12, 1);
  }

  popText(x, y, text, color = '#fff', big = false) {
    this.texts.push({ x, y, text, color, t: 0, life: big ? 1.4 : 1.0, big });
  }

  // ------------------------------------------------------------------ pathing
  computeFlow() {
    const { W, H, grid } = this, f = this.flow, q = this.queue, p = this.player;
    f.fill(FREE);
    const sx = clamp(Math.floor(p.x / T), 0, W - 1), sy = clamp(Math.floor(p.y / T), 0, H - 1);
    let head = 0, tail = 0;
    const s = sy * W + sx;
    f[s] = 0;
    q[tail++] = s;
    while (head < tail) {
      const c = q[head++];
      const v = f[c] + 1;
      const x = c % W;
      if (x > 0 && f[c - 1] === FREE && !solidMove(grid[c - 1])) { f[c - 1] = v; q[tail++] = c - 1; }
      if (x < W - 1 && f[c + 1] === FREE && !solidMove(grid[c + 1])) { f[c + 1] = v; q[tail++] = c + 1; }
      if (c >= W && f[c - W] === FREE && !solidMove(grid[c - W])) { f[c - W] = v; q[tail++] = c - W; }
      if (c < W * (H - 1) && f[c + W] === FREE && !solidMove(grid[c + W])) { f[c + W] = v; q[tail++] = c + W; }
    }
  }

  descend(field, tx, ty) {
    const W = this.W;
    let bv = field[ty * W + tx], bx = -1, by = -1;
    for (const [dx, dy] of DIRS8) {
      const nx = tx + dx, ny = ty + dy;
      if (nx < 0 || ny < 0 || nx >= W || ny >= this.H) continue;
      const v = field[ny * W + nx];
      if (v >= bv) continue;
      if (dx && dy && (solidMove(this.tileAt(tx + dx, ty)) || solidMove(this.tileAt(tx, ty + dy)))) continue;
      bv = v; bx = nx; by = ny;
    }
    return bx < 0 ? null : [bx, by, bv];
  }

  flowTarget(e) {
    let tx = Math.floor(e.x / T), ty = Math.floor(e.y / T);
    if (this.flow[ty * this.W + tx] === FREE) {
      // pushed onto an odd tile: hop to any reachable neighbour
      for (const [dx, dy] of DIRS8) if (this.flow[(ty + dy) * this.W + tx + dx] !== FREE) return { x: (tx + dx + 0.5) * T, y: (ty + dy + 0.5) * T };
      return null;
    }
    let good = null;
    for (let step = 0; step < 8; step++) {
      const n = this.descend(this.flow, tx, ty);
      if (!n) break;
      [tx, ty] = n;
      const px = (tx + 0.5) * T, py = (ty + 0.5) * T;
      if (step === 0 || this.clearPath(e.x, e.y, px, py, e.r - 1)) good = { x: px, y: py };
      else break;
      if (n[2] === 0) break;
    }
    return good;
  }

  findPath(sx, sy, gx, gy) {
    const { W, H, grid } = this, f = this.scratch, q = this.queue;
    let gtx = clamp(Math.floor(gx / T), 0, W - 1), gty = clamp(Math.floor(gy / T), 0, H - 1);
    if (solidMove(grid[gty * W + gtx])) {
      let found = false;
      for (let r = 1; r <= 2 && !found; r++)
        for (const [dx, dy] of DIRS8) {
          if (!solidMove(this.tileAt(gtx + dx * r, gty + dy * r))) { gtx += dx * r; gty += dy * r; found = true; break; }
        }
      if (!found) return null;
    }
    const stx = Math.floor(sx / T), sty = Math.floor(sy / T);
    const start = sty * W + stx, goal = gty * W + gtx;
    f.fill(FREE);
    f[goal] = 0;
    let head = 0, tail = 0;
    q[tail++] = goal;
    while (head < tail && f[start] === FREE) {
      const c = q[head++];
      const v = f[c] + 1;
      const x = c % W;
      if (x > 0 && f[c - 1] === FREE && !solidMove(grid[c - 1])) { f[c - 1] = v; q[tail++] = c - 1; }
      if (x < W - 1 && f[c + 1] === FREE && !solidMove(grid[c + 1])) { f[c + 1] = v; q[tail++] = c + 1; }
      if (c >= W && f[c - W] === FREE && !solidMove(grid[c - W])) { f[c - W] = v; q[tail++] = c - W; }
      if (c < W * (H - 1) && f[c + W] === FREE && !solidMove(grid[c + W])) { f[c + W] = v; q[tail++] = c + W; }
    }
    if (f[start] === FREE) return null;
    const pts = [];
    let x = stx, y = sty, guard = 0;
    while (guard++ < 3000) {
      const n = this.descend(f, x, y);
      if (!n) break;
      [x, y] = n;
      pts.push({ x: (x + 0.5) * T, y: (y + 0.5) * T });
      if (n[2] === 0) break;
    }
    const out = [];
    let ax = sx, ay = sy, i = 0;
    while (i < pts.length) {
      let j = i;
      while (j + 1 < pts.length && this.clearPath(ax, ay, pts[j + 1].x, pts[j + 1].y, 4)) j++;
      out.push(pts[j]);
      ax = pts[j].x;
      ay = pts[j].y;
      i = j + 1;
    }
    return out;
  }

  // ------------------------------------------------------------------ main update
  update(dt) {
    this.updateTexts(dt);
    if (this.hitstop > 0) {
      this.hitstop -= dt;
      this.updateCamera(dt * 0.3);
      return;
    }
    this.time += dt;
    this.introT -= dt;
    this.emptyT -= dt;
    if (this.comboT > 0) {
      this.comboT -= dt;
      if (this.comboT <= 0) this.combo = 0;
    }
    this.updatePlayer(dt);
    this.flowT -= dt;
    if (this.flowT <= 0) {
      this.computeFlow();
      this.flowT = 0.2;
    }
    for (const e of this.enemies) this.updateEnemy(e, dt);
    this.separate();
    this.updateDoors(dt);
    this.updateBullets(dt);
    this.updateThrown(dt);
    this.updateItems(dt);
    this.updateParticles(dt);
    for (const f of this.flashes) f.t -= dt;
    this.flashes = this.flashes.filter((f) => f.t > 0);
    if (this.cleared) {
      this.clearT += dt;
      const p = this.player, car = this.level.car;
      if (!p.dead && dist(p.x, p.y, car.x, car.y) < 30) this.exited = true;
    }
    this.updateCamera(dt);
  }

  updateTexts(dt) {
    for (const t of this.texts) t.t += dt;
    this.texts = this.texts.filter((t) => t.t < t.life);
  }

  updateCamera(dt) {
    const p = this.player, c = this.cam, inp = this.input, st = this.stats;
    let lx = 0, ly = 0;
    const look = inp.held('look');
    if (!p.dead) {
      if (inp.source === 'kbm') {
        const m = this.app.screenToWorld(inp.mouse.x, inp.mouse.y);
        const f = look ? 0.8 : 0.3;
        lx = (m.x - p.x) * f;
        ly = (m.y - p.y) * f;
        const max = (look ? 200 : 70) * st.lookMult, l = Math.hypot(lx, ly);
        if (l > max) { lx *= max / l; ly *= max / l; }
      } else {
        const d = (look ? 150 : 48) * st.lookMult;
        lx = Math.cos(p.a) * d;
        ly = Math.sin(p.a) * d;
      }
    }
    c.x = damp(c.x, p.x + lx, 6, dt);
    c.y = damp(c.y, p.y + ly, 6, dt);
    c.rot = settings.sway ? Math.sin(this.time * 0.31) * 0.045 + Math.sin(this.time * 0.13 + 1) * 0.025 : 0;
    c.zoom = 1 + (settings.sway ? this.audio.beatPulse() * 0.012 : 0);
    this.shake = Math.max(0, Math.min(14, this.shake) - dt * 30);
  }

  // ------------------------------------------------------------------ player
  updatePlayer(dt) {
    const p = this.player, inp = this.input, st = this.stats;
    if (p.dead) {
      p.deadT += dt;
      return;
    }
    p.inv -= dt;
    p.cd -= dt;
    p.kick = Math.max(0, p.kick - dt * 20);
    if (p.swingT > 0) {
      p.swingT += dt / 0.14;
      if (p.swingT >= 1) p.swingT = 0;
    }
    if (p.exec) {
      this.updateExec(dt);
      return;
    }
    const sp = 98 * st.speedMult;
    p.vx = damp(p.vx, inp.move.x * sp, 18, dt);
    p.vy = damp(p.vy, inp.move.y * sp, 18, dt);
    this.moveCircle(p, p.vx * dt, p.vy * dt);
    p.walk += Math.hypot(p.vx, p.vy) * dt * 0.25;

    if (inp.source === 'kbm') {
      const m = this.app.screenToWorld(inp.mouse.x, inp.mouse.y);
      p.a = Math.atan2(m.y - p.y, m.x - p.x);
    } else if (inp.aim.mag > 0.2) {
      let a = Math.atan2(inp.aim.y, inp.aim.x);
      if (settings.aimAssist) a = this.aimAssist(a);
      p.a = approachAngle(p.a, a, 30 * dt);
    } else if (Math.hypot(inp.move.x, inp.move.y) > 0.3) {
      p.a = approachAngle(p.a, Math.atan2(inp.move.y, inp.move.x), 12 * dt);
    }

    const w = WEAPONS[p.weapon || 'fists'];
    const attack = w.type === 'gun' && !w.auto && inp.source === 'kbm' ? inp.pressed('attack') : inp.held('attack');
    if (attack && p.cd <= 0) {
      const downed = !p.weapon ? this.downedNear(p, 12) : null;
      if (downed) this.startExec(downed);
      else this.playerAttack();
    }
    if (inp.pressed('grab')) this.grabOrThrow();
    if (inp.pressed('exec') && !p.exec) {
      const d = this.downedNear(p, 18);
      if (d) this.startExec(d);
    }
  }

  aimAssist(a) {
    const p = this.player;
    let best = null, bd = 0.32;
    for (const e of this.enemies) {
      if (e.dead) continue;
      const d = dist(p.x, p.y, e.x, e.y);
      if (d > 260) continue;
      const ea = Math.atan2(e.y - p.y, e.x - p.x);
      const ad = Math.abs(angDiff(a, ea));
      if (ad < bd && this.los(p.x, p.y, e.x, e.y)) { bd = ad; best = ea; }
    }
    return best === null ? a : a + angDiff(a, best) * 0.75;
  }

  downedNear(p, r) {
    let best = null, bd = r;
    for (const e of this.enemies) {
      if (e.dead || e.state !== 'down') continue;
      const d = dist(p.x, p.y, e.x, e.y);
      if (d < bd) { bd = d; best = e; }
    }
    return best;
  }

  startExec(e) {
    const p = this.player, w = WEAPONS[p.weapon || 'fists'];
    const dur = this.stats.instantExec ? 0.12 : p.weapon && w.type === 'gun' ? 0.35 : w.exec;
    p.exec = { e, t: dur, hitT: 0.05 };
    e.downT = Math.max(e.downT, dur + 0.6);
    p.vx = p.vy = 0;
  }

  updateExec(dt) {
    const p = this.player, ex = p.exec, e = ex.e;
    if (e.dead) { p.exec = null; return; }
    p.x = damp(p.x, e.x, 14, dt);
    p.y = damp(p.y, e.y, 14, dt);
    this.resolve(p);
    if (dist(p.x, p.y, e.x, e.y) > 2) p.a = Math.atan2(e.y - p.y, e.x - p.x);
    ex.t -= dt;
    ex.hitT -= dt;
    if (!p.weapon && ex.hitT <= 0 && ex.t > 0.08) {
      this.audio.sfx('hit', 0.8);
      ex.hitT = 0.2;
      p.swingT = 0.001;
      p.swingDir *= -1;
      this.shake += 2;
      this.bloodBurst(e.x, e.y, Math.random() * 6.28, 4);
      this.input.rumble(0.5, 0.2, 50);
    }
    if (ex.t <= 0) {
      p.exec = null;
      const w = WEAPONS[p.weapon || 'fists'];
      if (w.type === 'gun') {
        this.audio.sfx(w.snd);
        this.flashes.push({ x: p.x + Math.cos(p.a) * 6, y: p.y + Math.sin(p.a) * 6, a: p.a, t: 0.05 });
        this.noise(p.x, p.y, w.noise * 0.6);
      } else {
        p.swingT = 0.001;
      }
      this.audio.sfx('exec');
      this.killEnemy(e, 'exec', p.a);
      this.hitstop = 0.08;
      this.shake += 5;
    }
  }

  playerAttack() {
    const p = this.player, st = this.stats, id = p.weapon || 'fists', w = WEAPONS[id];
    if (w.type === 'gun') {
      if (p.ammo <= 0) {
        this.audio.sfx('empty');
        p.cd = 0.3;
        if (this.emptyT <= 0) { this.popText(p.x, p.y - 12, 'EMPTY — THROW IT', '#ffffff'); this.emptyT = 1.2; }
        return;
      }
      p.ammo--;
      p.cd = w.cd * st.gunRate;
      let mx = p.x + Math.cos(p.a) * w.muzzle, my = p.y + Math.sin(p.a) * w.muzzle;
      if (!this.los(p.x, p.y, mx, my)) { mx = p.x; my = p.y; }
      for (let i = 0; i < w.pellets; i++) {
        const a = p.a + (Math.random() - 0.5) * 2 * w.spread * st.gunSpread;
        const sp = 720 * (w.pellets > 1 ? 0.85 + Math.random() * 0.3 : 1);
        this.bullets.push({ x: mx, y: my, px: mx, py: my, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, owner: 'p', life: 0.7 });
      }
      this.flashes.push({ x: mx, y: my, a: p.a, t: 0.05 });
      this.shell(p.x, p.y, p.a);
      this.audio.sfx(w.snd);
      this.shake += w.shake;
      p.kick = 2;
      this.noise(p.x, p.y, w.noise);
      this.input.rumble(0.35, 0.6, 60);
      return;
    }
    p.cd = w.cd * st.atkSpeed;
    p.swingT = 0.001;
    p.swingDir *= -1;
    this.audio.sfx('swing', 0.7);
    const lethal = w.lethal || st.punchLethal;
    const reach = w.range * st.reachMult;
    let hits = 0;
    const targets = this.enemies
      .filter((e) => !e.dead)
      .map((e) => ({ e, d: dist(p.x, p.y, e.x, e.y) }))
      .sort((a, b) => a.d - b.d);
    for (const { e, d } of targets) {
      if (d > reach + e.r) break;
      const ad = Math.abs(angDiff(p.a, Math.atan2(e.y - p.y, e.x - p.x)));
      if (ad > w.arc / 2 && d > e.r + 4) continue;
      if (!this.los(p.x, p.y, e.x, e.y)) continue;
      if (e.state === 'down' && !lethal) continue;
      this.meleeHit(e, lethal, p.a, id);
      hits++;
      if (hits >= (lethal ? 2 : 1)) break;
    }
    if (hits) {
      this.audio.sfx('hit');
      this.shake += 3;
      this.hitstop = Math.max(this.hitstop, 0.04);
      this.input.rumble(0.6, 0.3, 70);
    }
    this.noise(p.x, p.y, 45);
  }

  meleeHit(e, lethal, ang, wid) {
    if (e.type === 'heavy') {
      e.hp--;
      e.flash = 0.15;
      e.kvx += Math.cos(ang) * 110;
      e.kvy += Math.sin(ang) * 110;
      this.bloodBurst(e.x, e.y, ang, 5);
      if (e.hp <= 0) this.killEnemy(e, 'melee', ang);
      else if (e.state !== 'alert') this.alertEnemy(e);
      return;
    }
    if (lethal) this.killEnemy(e, wid === 'fists' ? 'fists' : 'melee', ang);
    else this.knockdown(e, ang, 'punch');
  }

  grabOrThrow() {
    const p = this.player;
    let best = null, bd = 16;
    for (const it of this.items) {
      const d = dist(p.x, p.y, it.x, it.y);
      if (d < bd && Math.hypot(it.vx, it.vy) < 80) { bd = d; best = it; }
    }
    if (best) {
      const old = p.weapon;
      this.items.splice(this.items.indexOf(best), 1);
      if (old) this.items.push({ id: old, x: p.x, y: p.y, vx: Math.cos(p.a + 2.5) * 40, vy: Math.sin(p.a + 2.5) * 40, rot: p.a, spin: 6, ammo: p.ammo });
      p.weapon = best.id;
      p.ammo = best.ammo || 0;
      this.audio.sfx('pickup');
      return;
    }
    if (p.weapon) {
      const sp = 420;
      this.thrown.push({ id: p.weapon, ammo: p.ammo, x: p.x + Math.cos(p.a) * 5, y: p.y + Math.sin(p.a) * 5, vx: Math.cos(p.a) * sp, vy: Math.sin(p.a) * sp, rot: p.a, spin: 24, life: 0.65 });
      p.weapon = null;
      p.ammo = 0;
      p.cd = 0.15;
      this.audio.sfx('throw');
    }
  }

  hurtPlayer(ang) {
    const p = this.player;
    if (p.dead || p.inv > 0) return;
    if (p.armor > 0) {
      p.armor--;
      p.inv = 0.7;
      this.audio.sfx('armor');
      this.shake += 5;
      this.popText(p.x, p.y - 12, 'MASK CRACKED', '#7fdcff', true);
      this.input.rumble(0.8, 0.8, 150);
      return;
    }
    p.dead = true;
    p.deadT = 0;
    p.exec = null;
    this.stampCorpse(p, ang, 'player');
    this.bloodBurst(p.x, p.y, ang, 18);
    this.audio.sfx('death');
    this.audio.sfx('splat');
    this.audio.setMuffle(true);
    this.shake += 9;
    this.combo = 0;
    this.comboT = 0;
    this.input.rumble(1, 1, 350);
  }

  // ------------------------------------------------------------------ enemies
  alertEnemy(e) {
    e.state = 'alert';
    e.react = e.reactBase;
    e.alertMark = 0.9;
    e.path = null;
    e.pursuit = 4;
    this.audio.sfx(e.type === 'dog' ? 'bark' : 'alert', this.volAt(e.x, e.y));
    // shout to friends nearby
    for (const o of this.enemies) {
      if (o === e || o.dead || o.state === 'down' || o.state === 'alert') continue;
      if (dist(o.x, o.y, e.x, e.y) < 90 && this.los(o.x, o.y, e.x, e.y)) {
        o.state = 'search';
        o.path = this.findPath(o.x, o.y, this.player.x, this.player.y);
        o.searchT = 3;
        o.qMark = 0.7;
      }
    }
  }

  enemySees(e) {
    const p = this.player;
    const dx = p.x - e.x, dy = p.y - e.y, d = Math.hypot(dx, dy);
    const range = this.run.modifier.id === 'dark' ? 125 : 290;
    if (d > range) return false;
    if (d > 30) {
      const fov = e.type === 'dog' ? 1.5 : 1.05;
      if (Math.abs(angDiff(e.a, Math.atan2(dy, dx))) > fov) return false;
    }
    return this.los(e.x, e.y, p.x, p.y);
  }

  stepToward(e, tx, ty, speed, dt) {
    const dx = tx - e.x, dy = ty - e.y, d = Math.hypot(dx, dy);
    if (d < 0.5) return true;
    const s = Math.min(d, speed * dt);
    const ox = e.x, oy = e.y;
    this.moveCircle(e, (dx / d) * s, (dy / d) * s);
    e.vx = (dx / d) * speed;
    e.vy = (dy / d) * speed;
    e.walk += s * 0.25;
    e.mvA = Math.atan2(dy, dx);
    const moved = Math.hypot(e.x - ox, e.y - oy);
    if (moved < s * 0.3) e.stuckT += dt;
    else e.stuckT = Math.max(0, e.stuckT - dt);
    return d <= speed * dt + 0.5;
  }

  chaseFlow(e, speed, dt, faceMove) {
    e.steerT -= dt;
    if (!e.steer || e.steerT <= 0 || dist(e.x, e.y, e.steer.x, e.steer.y) < 3) {
      e.steer = this.flowTarget(e);
      e.steerT = 0.25;
    }
    if (!e.steer) return;
    this.stepToward(e, e.steer.x, e.steer.y, speed, dt);
    if (faceMove) e.a = approachAngle(e.a, e.mvA, 10 * dt);
  }

  moveToward(e, tx, ty, speed, dt, faceMove) {
    if (this.clearPath(e.x, e.y, tx, ty, e.r - 1)) {
      this.stepToward(e, tx, ty, speed, dt);
      if (faceMove) e.a = approachAngle(e.a, e.mvA, 10 * dt);
    } else this.chaseFlow(e, speed, dt, faceMove);
  }

  followPath(e, speed, dt) {
    if (!e.path || !e.path.length) return true;
    const t = e.path[0];
    const arrived = this.stepToward(e, t.x, t.y, speed, dt);
    e.a = approachAngle(e.a, e.mvA, 8 * dt);
    if (arrived || dist(e.x, e.y, t.x, t.y) < 3) e.path.shift();
    if (e.stuckT > 1.2) {
      e.stuckT = 0;
      e.path = null;
      return true;
    }
    return !e.path || e.path.length === 0;
  }

  wanderTarget(e) {
    for (let i = 0; i < 6; i++) {
      const tx = e.x + (Math.random() - 0.5) * 90, ty = e.y + (Math.random() - 0.5) * 90;
      if (!solidMove(this.tileAtPx(tx, ty)) && this.clearPath(e.x, e.y, tx, ty, e.r)) {
        e.path = [{ x: tx, y: ty }];
        return;
      }
    }
  }

  updateEnemy(e, dt) {
    if (e.dead) return;
    e.vx = e.vy = 0;
    e.flash = Math.max(0, e.flash - dt);
    e.alertMark = Math.max(0, e.alertMark - dt);
    e.qMark = Math.max(0, e.qMark - dt);
    e.kick = Math.max(0, e.kick - dt * 20);
    if (e.swingT > 0) {
      e.swingT += dt / 0.16;
      if (e.swingT >= 1) e.swingT = 0;
    }
    if (e.kvx || e.kvy) {
      this.moveCircle(e, e.kvx * dt, e.kvy * dt);
      const f = Math.exp(-7 * dt);
      e.kvx *= f;
      e.kvy *= f;
      if (Math.abs(e.kvx) + Math.abs(e.kvy) < 3) e.kvx = e.kvy = 0;
    }
    if (e.state === 'down') {
      e.downT -= dt;
      const execd = this.player.exec && this.player.exec.e === e;
      if (e.downT <= 0 && !execd) {
        e.state = 'alert';
        e.react = e.reactBase + 0.2;
        e.pursuit = 3;
        e.lastX = this.player.x;
        e.lastY = this.player.y;
      }
      return;
    }
    e.atkCd -= dt;
    const p = this.player;
    const sees = !p.dead && this.enemySees(e);
    if (sees) {
      e.lastX = p.x;
      e.lastY = p.y;
      e.pursuit = 4;
      if (e.state !== 'alert') this.alertEnemy(e);
    }
    if (e.windup > 0) {
      e.windup -= dt;
      if (e.windup <= 0) this.enemyMeleeResolve(e);
      return;
    }
    const w = WEAPONS[e.weapon || 'fists'];
    const isGun = w.type === 'gun' && e.type !== 'dog';
    const dP = dist(e.x, e.y, p.x, p.y);
    switch (e.state) {
      case 'idle': {
        e.turnT -= dt;
        if (e.turnT <= 0) {
          e.ta = e.a + (Math.random() - 0.5) * 2.4;
          e.turnT = 2 + Math.random() * 3;
          if (e.behavior === 'wander' && !e.path) this.wanderTarget(e);
        }
        if (e.path) {
          if (this.followPath(e, e.speedWalk, dt)) e.path = null;
        } else e.a = approachAngle(e.a, e.ta, 2 * dt);
        break;
      }
      case 'patrol': {
        if (e.waitT > 0) {
          e.waitT -= dt;
          e.a = approachAngle(e.a, e.ta, 2 * dt);
          break;
        }
        if (!e.path) {
          const wp = e.patrol[e.pi];
          e.path = this.findPath(e.x, e.y, wp.x, wp.y);
          if (!e.path) { e.state = 'idle'; break; }
        }
        if (this.followPath(e, e.speedWalk, dt)) {
          e.path = null;
          e.pi = (e.pi + 1) % e.patrol.length;
          e.waitT = 1 + Math.random() * 1.5;
          e.ta = e.a + (Math.random() < 0.5 ? 1.5 : -1.5);
        }
        break;
      }
      case 'search': {
        if (!e.path) {
          e.searchT -= dt;
          e.a += Math.sin(this.time * 2.5 + e.x) * dt * 2.5;
          if (e.searchT <= 0) {
            e.state = e.patrol ? 'patrol' : 'idle';
            e.path = null;
            e.ta = e.a;
          }
          break;
        }
        if (this.followPath(e, e.speedRun * 0.65, dt)) {
          e.path = null;
          e.searchT = 2.5;
        }
        break;
      }
      case 'alert': {
        if (sees) {
          const ang = Math.atan2(p.y - e.y, p.x - e.x);
          e.a = approachAngle(e.a, ang, (e.type === 'dog' ? 14 : 8) * dt);
          e.react -= dt;
          if (isGun) {
            if (dP > 140) this.moveToward(e, p.x, p.y, e.speedRun * 0.75, dt, false);
            if (e.react <= 0 && e.atkCd <= 0 && dP < 340 && Math.abs(angDiff(e.a, ang)) < 0.3) this.enemyShoot(e, w);
          } else {
            this.moveToward(e, p.x, p.y, e.speedRun, dt, false);
            const reach = e.type === 'heavy' ? 16 : e.type === 'dog' ? 9 : w.type === 'melee' ? Math.min(19, w.range) : 13;
            if (dP < reach + p.r + 1 && e.react <= 0 && e.atkCd <= 0) {
              e.windup = e.type === 'heavy' ? 0.3 : e.type === 'dog' ? 0.07 : 0.15;
              e.atkCd = e.type === 'dog' ? 0.5 : 0.75;
              e.swingT = 0.001;
              e.swingDir *= -1;
            }
          }
        } else {
          e.pursuit -= dt;
          if (e.pursuit > 0 && !p.dead) this.chaseFlow(e, isGun ? e.speedRun * 0.8 : e.speedRun * 0.9, dt, true);
          else {
            e.state = 'search';
            e.path = this.findPath(e.x, e.y, e.lastX, e.lastY);
            e.searchT = 3;
            e.qMark = 0.8;
          }
        }
        break;
      }
    }
  }

  enemyShoot(e, w) {
    const fi = this.run.floorIndex;
    const err = Math.max(0.025, 0.11 - fi * 0.006);
    let mx = e.x + Math.cos(e.a) * w.muzzle, my = e.y + Math.sin(e.a) * w.muzzle;
    if (!this.los(e.x, e.y, mx, my)) { mx = e.x; my = e.y; }
    for (let i = 0; i < w.pellets; i++) {
      const a = e.a + (Math.random() - 0.5) * 2 * (w.spread * 0.9 + err);
      const sp = 430 * (w.pellets > 1 ? 0.85 + Math.random() * 0.3 : 1);
      this.bullets.push({ x: mx, y: my, px: mx, py: my, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, owner: 'e', life: 0.9 });
    }
    this.flashes.push({ x: mx, y: my, a: e.a, t: 0.05 });
    this.shell(e.x, e.y, e.a);
    this.audio.sfx(w.snd, this.volAt(e.x, e.y));
    e.kick = 2;
    this.noise(e.x, e.y, w.noise * 0.6, e);
    if (w.burst) {
      if (e.burstLeft <= 0) e.burstLeft = w.burst;
      e.burstLeft--;
      e.atkCd = e.burstLeft > 0 ? w.ecd : 0.75 + Math.random() * 0.4;
    } else e.atkCd = w.ecd + Math.random() * 0.25;
  }

  enemyMeleeResolve(e) {
    const p = this.player;
    this.audio.sfx(e.type === 'dog' ? 'bark' : 'swing', this.volAt(e.x, e.y) * 0.8);
    if (p.dead) return;
    const reach = (e.type === 'heavy' ? 21 : e.type === 'dog' ? 15 : 19) + p.r;
    const d = dist(e.x, e.y, p.x, p.y);
    if (d < reach && Math.abs(angDiff(e.a, Math.atan2(p.y - e.y, p.x - e.x))) < 1.3 && this.los(e.x, e.y, p.x, p.y)) {
      this.hurtPlayer(e.a);
    }
  }

  knockdown(e, ang, cause) {
    if (e.dead) return;
    if (e.type === 'heavy') {
      e.flash = 0.15;
      e.kvx += Math.cos(ang) * 70;
      e.kvy += Math.sin(ang) * 70;
      if (e.state !== 'alert') this.alertEnemy(e);
      return;
    }
    e.state = 'down';
    e.downT = cause === 'door' ? 3.4 : 2.8;
    e.kvx = Math.cos(ang) * 150;
    e.kvy = Math.sin(ang) * 150;
    e.windup = 0;
    e.path = null;
    e.downA = ang + (Math.random() - 0.5) * 0.8;
    if (e.weapon && e.weapon !== 'fists') {
      const full = this.fullAmmo(e.weapon);
      this.dropWeapon(e.weapon, e.x, e.y, ang + Math.PI + (Math.random() - 0.5) * 2, Math.round(full * (0.4 + Math.random() * 0.6)));
      e.weapon = 'fists';
    }
    this.audio.sfx('hit', this.volAt(e.x, e.y));
  }

  dropWeapon(id, x, y, ang, ammo) {
    this.items.push({ id, x, y, vx: Math.cos(ang) * 90, vy: Math.sin(ang) * 90, rot: Math.random() * 6.28, spin: 12, ammo });
  }

  killEnemy(e, method, ang) {
    if (e.dead) return;
    e.dead = true;
    e.state = 'dead';
    if (e.weapon && e.weapon !== 'fists') {
      const full = this.fullAmmo(e.weapon);
      this.dropWeapon(e.weapon, e.x, e.y, ang + (Math.random() - 0.5) * 2, Math.round(full * (0.4 + Math.random() * 0.6)));
    }
    this.stampCorpse(e, ang, method);
    this.bloodBurst(e.x, e.y, ang, method === 'gun' ? 10 : 15);
    this.audio.sfx('splat', this.volAt(e.x, e.y));
    this.hitstop = Math.max(this.hitstop, 0.045);
    this.shake += 2;
    const base = { fists: 500, melee: 400, gun: 300, exec: 600, door: 800, throw: 800 }[method] || 300;
    const typeMul = e.type === 'heavy' ? 2.5 : e.type === 'dog' ? 0.8 : 1;
    this.combo = this.comboT > 0 ? this.combo + 1 : 1;
    this.comboT = this.stats.comboWindow;
    this.bestCombo = Math.max(this.bestCombo, this.combo);
    const pts = Math.round((base * typeMul * Math.min(this.combo, 10) * this.stats.scoreMult) / 10) * 10;
    this.floorScore += pts;
    this.kills++;
    this.methods.add(method);
    this.popText(e.x, e.y - 8, `${pts}pts`, this.combo > 1 ? '#ff4fd8' : '#ffffff');
    if (this.combo >= 2) this.audio.sfx('combo', 0.6);
    if (this.enemies.every((x) => x.dead)) this.onCleared();
  }

  onCleared() {
    if (this.cleared) return;
    this.cleared = true;
    this.clearT = 0;
    this.audio.play('deadair');
    this.audio.sfx('clear');
  }

  separate() {
    const list = this.enemies.filter((e) => !e.dead && e.state !== 'down');
    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      for (let j = i + 1; j < list.length; j++) {
        const b = list[j];
        const dx = b.x - a.x, dy = b.y - a.y, d2 = dx * dx + dy * dy, rr = a.r + b.r;
        if (d2 < rr * rr && d2 > 0.0001) {
          const d = Math.sqrt(d2), push = (rr - d) / 2;
          this.moveCircle(a, (-dx / d) * push, (-dy / d) * push);
          this.moveCircle(b, (dx / d) * push, (dy / d) * push);
        }
      }
    }
    const p = this.player;
    if (p.dead || p.exec) return;
    for (const e of list) {
      const dx = e.x - p.x, dy = e.y - p.y, d2 = dx * dx + dy * dy, rr = e.r + p.r;
      if (d2 < rr * rr && d2 > 0.0001) {
        const d = Math.sqrt(d2), push = rr - d;
        this.moveCircle(e, (dx / d) * push * 0.6, (dy / d) * push * 0.6);
        this.moveCircle(p, (-dx / d) * push * 0.4, (-dy / d) * push * 0.4);
      }
    }
  }

  // ------------------------------------------------------------------ doors
  updateDoors(dt) {
    const p = this.player;
    const chars = [p, ...this.enemies].filter((c) => !c.dead && c.state !== 'down' && !(c === p && c.exec));
    const MAX = 1.62;
    for (const d of this.doors) {
      d.ang += d.av * dt;
      const off = angDiff(d.closed, d.ang);
      if (off > MAX) { d.ang = d.closed + MAX; d.av = -Math.abs(d.av) * 0.25; }
      else if (off < -MAX) { d.ang = d.closed - MAX; d.av = Math.abs(d.av) * 0.25; }
      d.av *= Math.exp(-2.4 * dt);
      const ux = Math.cos(d.ang), uy = Math.sin(d.ang);
      const ex = d.hx + ux * d.len, ey = d.hy + uy * d.len;
      for (const c of chars) {
        const dd = pointSegDist(c.x, c.y, d.hx, d.hy, ex, ey);
        if (dd >= c.r + 1.5) continue;
        const rx = c.x - d.hx, ry = c.y - d.hy;
        const side = Math.sign(ux * ry - uy * rx) || 1;
        const along = clamp(ux * rx + uy * ry, 3, d.len);
        if (c !== p && Math.abs(d.av) > 3.2 && d.av * side > 0 && d.pusher === p) {
          const kang = Math.atan2(side * ux, -side * uy);
          if (this.stats.doorLethal) this.killEnemy(c, 'door', kang);
          else this.knockdown(c, kang, 'door');
          this.audio.sfx('doorbash', this.volAt(c.x, c.y));
          d.av *= -0.3;
          this.shake += 3;
          this.input.rumble(0.7, 0.4, 90);
          continue;
        }
        const pen = c.r + 1.5 - dd;
        d.ang -= (side * pen) / along;
        const cs = Math.hypot(c.vx || 0, c.vy || 0);
        const target = -side * Math.max(2.2, (cs / along) * 1.15);
        if (Math.sign(d.av) !== Math.sign(target) || Math.abs(d.av) < Math.abs(target)) {
          if (Math.abs(target) > 4 && d.pusher !== c) this.audio.sfx('door', this.volAt(c.x, c.y));
          d.av = target;
        }
        d.pusher = c;
      }
    }
  }

  // ------------------------------------------------------------------ projectiles
  updateBullets(dt) {
    const p = this.player;
    for (const b of this.bullets) {
      b.life -= dt;
      if (b.life <= 0) { b.dead = true; continue; }
      b.px = b.x;
      b.py = b.y;
      const steps = Math.max(1, Math.ceil((Math.hypot(b.vx, b.vy) * dt) / 4));
      const sx = (b.vx * dt) / steps, sy = (b.vy * dt) / steps;
      for (let i = 0; i < steps && !b.dead; i++) {
        const ox = b.x, oy = b.y;
        b.x += sx;
        b.y += sy;
        if (solidShot(this.tileAtPx(b.x, b.y))) {
          b.dead = true;
          this.spark(ox, oy, Math.atan2(-b.vy, -b.vx));
          if (b.owner === 'p' || Math.random() < 0.3) this.audio.sfx('ricochet', this.volAt(ox, oy));
          break;
        }
        for (const d of this.doors) {
          const [ex, ey] = this.doorEnd(d);
          if (segIntersect(ox, oy, b.x, b.y, d.hx, d.hy, ex, ey)) {
            b.dead = true;
            this.spark(ox, oy, Math.atan2(-b.vy, -b.vx));
            break;
          }
        }
        if (b.dead) break;
        const ang = Math.atan2(b.vy, b.vx);
        if (b.owner === 'p') {
          for (const e of this.enemies) {
            if (e.dead) continue;
            const rr = e.r + 1.5;
            if ((e.x - b.x) ** 2 + (e.y - b.y) ** 2 < rr * rr) {
              b.dead = true;
              if (e.type === 'heavy') {
                e.hp--;
                e.flash = 0.12;
                this.bloodBurst(e.x, e.y, ang, 5);
                if (e.hp <= 0) this.killEnemy(e, 'gun', ang);
                else if (e.state !== 'alert') this.alertEnemy(e);
              } else this.killEnemy(e, 'gun', ang);
              break;
            }
          }
        } else if (!p.dead && (p.x - b.x) ** 2 + (p.y - b.y) ** 2 < (p.r + 1) ** 2) {
          b.dead = true;
          this.hurtPlayer(ang);
        }
      }
    }
    this.bullets = this.bullets.filter((b) => !b.dead);
  }

  updateThrown(dt) {
    for (const t of this.thrown) {
      t.life -= dt;
      t.rot += t.spin * dt;
      const steps = Math.max(1, Math.ceil((Math.hypot(t.vx, t.vy) * dt) / 3));
      for (let i = 0; i < steps && !t.done; i++) {
        const nx = t.x + (t.vx * dt) / steps, ny = t.y + (t.vy * dt) / steps;
        if (solidMove(this.tileAtPx(nx, ny))) {
          this.toItem(t, -0.25);
          this.audio.sfx('door', this.volAt(t.x, t.y) * 0.5);
          break;
        }
        let hitDoor = false;
        for (const d of this.doors) {
          const [ex, ey] = this.doorEnd(d);
          if (segIntersect(t.x, t.y, nx, ny, d.hx, d.hy, ex, ey)) { hitDoor = true; break; }
        }
        if (hitDoor) {
          this.toItem(t, -0.25);
          this.audio.sfx('door', 0.5);
          break;
        }
        t.x = nx;
        t.y = ny;
        for (const e of this.enemies) {
          if (e.dead || e.state === 'down') continue;
          if (dist(t.x, t.y, e.x, e.y) < e.r + 3) {
            const ang = Math.atan2(t.vy, t.vx);
            if (WEAPONS[t.id].throwLethal || this.stats.throwLethal) {
              if (e.type === 'heavy') this.meleeHit(e, true, ang, t.id);
              else this.killEnemy(e, 'throw', ang);
            } else this.knockdown(e, ang, 'throw');
            this.audio.sfx('hit', this.volAt(e.x, e.y));
            this.toItem(t, -0.2);
            break;
          }
        }
      }
      if (!t.done && t.life <= 0) this.toItem(t, 0.3);
    }
    this.thrown = this.thrown.filter((t) => !t.done);
  }

  toItem(t, k) {
    t.done = true;
    this.items.push({ id: t.id, x: t.x, y: t.y, vx: t.vx * k, vy: t.vy * k, rot: t.rot, spin: t.spin * 0.3, ammo: t.ammo });
  }

  updateItems(dt) {
    for (const it of this.items) {
      if (it.vx || it.vy) {
        const nx = it.x + it.vx * dt, ny = it.y + it.vy * dt;
        if (solidMove(this.tileAtPx(nx, it.y))) it.vx *= -0.4;
        else it.x = nx;
        if (solidMove(this.tileAtPx(it.x, ny))) it.vy *= -0.4;
        else it.y = ny;
        const f = Math.exp(-5 * dt);
        it.vx *= f;
        it.vy *= f;
        if (Math.abs(it.vx) + Math.abs(it.vy) < 2) it.vx = it.vy = 0;
      }
      it.rot += (it.spin || 0) * dt;
      it.spin = (it.spin || 0) * Math.exp(-4 * dt);
    }
  }

  // ------------------------------------------------------------------ fx
  noise(x, y, radius, source = null) {
    for (const e of this.enemies) {
      if (e === source || e.dead || e.state === 'down' || e.state === 'alert') continue;
      if (dist(x, y, e.x, e.y) > radius) continue;
      if (e.state === 'search' && e.goal && dist(e.goal.x, e.goal.y, x, y) < 48) continue;
      e.state = 'search';
      e.goal = { x, y };
      e.path = this.findPath(e.x, e.y, x, y);
      e.searchT = 3;
      e.qMark = 0.8;
    }
  }

  bloodBurst(x, y, ang, n) {
    for (let i = 0; i < n; i++) {
      const a = ang + (Math.random() - 0.5) * 1.6;
      const sp = 30 + Math.random() * 150;
      this.particles.push({ type: 'blood', x, y, z: 4 + Math.random() * 3, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, vz: 20 + Math.random() * 50, life: 2 });
    }
  }

  spark(x, y, ang) {
    for (let i = 0; i < 4; i++) {
      const a = ang + (Math.random() - 0.5) * 1.8, sp = 60 + Math.random() * 120;
      this.particles.push({ type: 'spark', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 0.12 + Math.random() * 0.1 });
    }
  }

  shell(x, y, ang) {
    const a = ang + Math.PI / 2 + (Math.random() - 0.5) * 0.6, sp = 50 + Math.random() * 40;
    this.particles.push({ type: 'shell', x, y, z: 6, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, vz: 40, life: 2 });
  }

  updateParticles(dt) {
    const g = this.level.decal.getContext('2d');
    for (const pt of this.particles) {
      pt.life -= dt;
      pt.x += pt.vx * dt;
      pt.y += pt.vy * dt;
      if (pt.type === 'blood' || pt.type === 'shell') {
        pt.z += pt.vz * dt;
        pt.vz -= 220 * dt;
        const wall = solidShot(this.tileAtPx(pt.x, pt.y));
        if (pt.z <= 0 || wall || pt.life <= 0) {
          pt.life = 0;
          if (!wall) {
            if (pt.type === 'blood') {
              g.fillStyle = Math.random() < 0.5 ? '#a00d18' : '#76060f';
              const s = Math.random() < 0.3 ? 2 : 1;
              g.fillRect(Math.round(pt.x), Math.round(pt.y), s, s);
            } else {
              g.fillStyle = '#d8b040';
              g.fillRect(Math.round(pt.x), Math.round(pt.y), 2, 1);
            }
          }
        }
      }
    }
    this.particles = this.particles.filter((p) => p.life > 0);
  }

  stampCorpse(e, ang, method) {
    const g = this.level.decal.getContext('2d');
    const cx = e.x + Math.cos(ang) * 4, cy = e.y + Math.sin(ang) * 4;
    // pool
    for (let i = 0; i < 7; i++) {
      const r = 2 + Math.random() * 4, d = Math.random() * 7;
      const a = ang + (Math.random() - 0.5) * 2;
      g.fillStyle = i < 4 ? '#6e0710' : '#9c0c17';
      g.beginPath();
      g.arc(Math.round(cx + Math.cos(a) * d), Math.round(cy + Math.sin(a) * d), r, 0, Math.PI * 2);
      g.fill();
    }
    // spray
    for (let i = 0; i < 10; i++) {
      const d = 6 + Math.random() * 22, a = ang + (Math.random() - 0.5) * 0.7;
      g.fillStyle = '#a80e1a';
      const s = Math.max(1, Math.round(3 - d / 10));
      g.fillRect(Math.round(cx + Math.cos(a) * d), Math.round(cy + Math.sin(a) * d), s, s);
    }
    const isPlayer = method === 'player';
    const kind = e.type === 'dog' ? 'dog' : e.type === 'heavy' ? 'heavy' : 'human';
    const spr = corpseSprite(isPlayer ? 'player' : e.look, (Math.random() * 4) | 0, isPlayer ? this.run.masks[this.run.masks.length - 1] || 'wolf' : null, kind);
    g.save();
    g.translate(Math.round(cx), Math.round(cy));
    g.rotate(ang);
    g.drawImage(spr.img, -spr.cx, -spr.cy);
    g.restore();
  }

  // Summary for the score screen.
  summary() {
    const time = this.time;
    const timeBonus = Math.max(0, Math.round((3000 - time * 15) / 10) * 10);
    const variety = this.methods.size * 300;
    const comboBonus = this.bestCombo >= 3 ? this.bestCombo * 250 : 0;
    const total = Math.round((this.floorScore + timeBonus + variety + comboBonus) * 1);
    const par = Math.max(1, this.enemies.length) * 900;
    const ratio = total / par;
    const grade = ratio > 2.6 ? 'S' : ratio > 2.0 ? 'A+' : ratio > 1.6 ? 'A' : ratio > 1.2 ? 'B' : ratio > 0.85 ? 'C' : 'D';
    return { kills: this.kills, time, base: this.floorScore, timeBonus, variety, comboBonus, bestCombo: this.bestCombo, total, grade };
  }
}
