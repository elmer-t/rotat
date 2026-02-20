// Subtle floating particle background
(function () {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');

  let W, H, particles;

  const COLORS = [
    'rgba(176,96,255,',
    'rgba(200,160,64,',
    'rgba(144,96,208,',
    'rgba(96,64,160,',
  ];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.4 + 0.05,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      twinkleSpeed: Math.random() * 0.008 + 0.002,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
    };
  }

  function init() {
    resize();
    const count = Math.floor((W * H) / 9000);
    particles = Array.from({ length: count }, randomParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      // Twinkle
      p.alpha += p.twinkleSpeed * p.twinkleDir;
      if (p.alpha > 0.5 || p.alpha < 0.03) p.twinkleDir *= -1;

      // Move
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -5) p.x = W + 5;
      if (p.x > W + 5) p.x = -5;
      if (p.y < -5) p.y = H + 5;
      if (p.y > H + 5) p.y = -5;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    resize();
    // Replenish if window grows
    const target = Math.floor((W * H) / 9000);
    while (particles.length < target) particles.push(randomParticle());
  });

  init();
  draw();
})();
