/**
 * chalk-particles.js — Chalk Dust particle system for EAE.kr
 * "칠판 위의 분필 가루" — 편집술 강의실 느낌
 */
(function() {
  'use strict';

  const CFG = {
    count:     55,
    rMin:      0.8,    // 분필 가루니까 아주 작게
    rMax:      2.8,
    vyRange:   [-0.06, 0.04],   // 위아래 랜덤 (가라앉거나 위로 살짝)
    vxRange:   [-0.08, 0.08],   // 좌우 흔들림
    fps:       24,

    // 분필 먼지 색상 — 흰색/크림/회색 스펙트럼
    palettes: [
      { color: '245,240,220', opacity: 0.55 },  // 따뜻한 크림
      { color: '255,255,255', opacity: 0.40 },  // 순백
      { color: '210,200,185', opacity: 0.45 },  // 회베이지
      { color: '230,225,210', opacity: 0.50 },  // 연한 크림
      { color: '180,170,155', opacity: 0.35 },  // 어두운 분필
      { color: '255,248,200', opacity: 0.30 },  // 옅은 노랑 (amber 분필)
    ]
  };

  let canvas, ctx, dusts = [], raf = null, running = false;
  let lastT = 0;
  const interval = 1000 / CFG.fps;

  function init() {
    canvas = document.createElement('canvas');
    canvas.id = 'chalk-particles';
    canvas.style.cssText =
      'position:fixed;top:0;left:0;width:100%;height:100%;' +
      'pointer-events:none;z-index:0;opacity:0;transition:opacity 3s ease';
    document.body.insertBefore(canvas, document.body.firstChild);
    ctx = canvas.getContext('2d');
    fit();
    spawn();
    go();
    requestAnimationFrame(() => { canvas.style.opacity = '1'; });
    window.addEventListener('resize', () => { fit(); spawn(); });
    document.addEventListener('visibilitychange', () => {
      document.hidden ? stop() : go();
    });
  }

  function fit() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width  = window.innerWidth  * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function r(a, b) { return Math.random() * (b - a) + a; }

  function mkDust(x, y) {
    const pal = CFG.palettes[Math.floor(Math.random() * CFG.palettes.length)];
    return {
      x, y,
      rad:   r(CFG.rMin, CFG.rMax),
      vx:    r(CFG.vxRange[0], CFG.vxRange[1]),
      vy:    r(CFG.vyRange[0], CFG.vyRange[1]),
      pal,
      // 분필 가루는 drift — 천천히 퍼지며 사라졌다 나타남
      drift:      r(0, Math.PI * 2),
      driftSpeed: r(0.003, 0.012),
      driftAmp:   r(0.02, 0.07),   // 작은 진폭
      // fade: 나타났다 사라지는 사이클
      fade:       r(0, Math.PI * 2),
      fadeSpeed:  r(0.004, 0.015),
      // 모양 지터: 분필 가루는 완전한 원이 아님
      jitter:     r(0.7, 1.0),     // y축 찌그러짐
    };
  }

  function spawn() {
    const W = window.innerWidth, H = window.innerHeight;
    dusts = Array.from({ length: CFG.count }, () =>
      mkDust(r(0, W), r(0, H))
    );
  }

  function drawDust(d) {
    // fade: 서서히 나타났다가 사라짐 (분필 먼지 특성)
    const fadeVal = (Math.sin(d.fade) + 1) * 0.5;   // 0~1
    const alpha   = d.pal.opacity * (0.2 + fadeVal * 0.8);
    if (alpha < 0.04) return;

    const rx = d.rad;
    const ry = d.rad * d.jitter;   // 살짝 찌그러진 타원

    ctx.save();
    ctx.translate(d.x, d.y);
    ctx.globalAlpha = alpha;

    // 분필 가루: 부드러운 원 + 가장자리로 갈수록 투명
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(rx, ry));
    g.addColorStop(0,   `rgba(${d.pal.color},1)`);
    g.addColorStop(0.5, `rgba(${d.pal.color},0.6)`);
    g.addColorStop(1,   `rgba(${d.pal.color},0)`);

    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, r(0, Math.PI), 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();

    ctx.globalAlpha = 1;
    ctx.restore();
  }

  function frame(ts) {
    if (!running) return;
    raf = requestAnimationFrame(frame);
    if (ts - lastT < interval) return;
    lastT = ts;

    const W = window.innerWidth, H = window.innerHeight;
    ctx.clearRect(0, 0, W, H);

    for (const d of dusts) {
      // drift: 부드러운 사인파 좌우 흔들림
      d.drift += d.driftSpeed;
      d.x += d.vx + Math.sin(d.drift) * d.driftAmp;
      d.y += d.vy;
      d.fade += d.fadeSpeed;

      // 화면 밖 → 반대편 재등장
      if (d.y > H + 10) { d.y = -10; d.x = r(0, W); }
      if (d.y < -10)    { d.y = H + 5; }
      if (d.x < -10)    { d.x = W + 5; }
      if (d.x > W + 10) { d.x = -5; }

      drawDust(d);
    }
  }

  function go()   { if (!running) { running = true;  raf = requestAnimationFrame(frame); } }
  function stop() { running = false; if (raf) cancelAnimationFrame(raf); }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
