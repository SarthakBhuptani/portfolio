import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationFrameId;
    let isDark = document.documentElement.classList.contains('dark');

    // ─── DARK MODE: floating code symbols ───────────────────────────
    const symbols = ['{ }', '</ >', '&&', '||', '=>', ';;', '[]', '$', '!=', '01', 'fn()', 'npm'];

    class CodeSymbol {
      constructor() { this.reset(true); }
      reset(random = false) {
        this.x = Math.random() * width;
        this.y = random ? Math.random() * height : height + 50;
        this.text = symbols[Math.floor(Math.random() * symbols.length)];
        this.size = Math.random() * 18 + 12;
        this.speed = Math.random() * 0.45 + 0.1;
        this.opacity = Math.random() * 0.45 + 0.08;
      }
      update() {
        this.y -= this.speed;
        if (this.y < -50) this.reset();
      }
      draw() {
        ctx.font = `${this.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = '#334155';
        ctx.globalAlpha = this.opacity;
        ctx.fillText(this.text, this.x, this.y);
        ctx.globalAlpha = 1;
      }
    }

    // ─── LIGHT MODE: soft floating geometric shapes ──────────────────
    // Pastel palette: blues, purples, pinks, cyans
    const lightPalette = [
      { r: 99,  g: 102, b: 241 },  // indigo
      { r: 139, g: 92,  b: 246 },  // violet
      { r: 236, g: 72,  b: 153 },  // pink
      { r: 6,   g: 182, b: 212 },  // cyan
      { r: 59,  g: 130, b: 246 },  // blue
      { r: 16,  g: 185, b: 129 },  // emerald
    ];

    class LightParticle {
      constructor(startRandom = false) { this.reset(startRandom); }
      reset(random = false) {
        this.x = Math.random() * width;
        this.y = random ? Math.random() * height : height + 120;
        const col = lightPalette[Math.floor(Math.random() * lightPalette.length)];
        this.r = col.r; this.g = col.g; this.b = col.b;
        this.radius = Math.random() * 60 + 20;
        this.speedY = -(Math.random() * 0.35 + 0.08);
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.13 + 0.04;
        this.type = Math.random() > 0.5 ? 'circle' : 'ring';
        this.pulse = Math.random() * Math.PI * 2; // phase offset
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.pulse += 0.012;
        // gentle horizontal drift
        this.x += Math.sin(this.pulse * 0.7) * 0.25;
        if (this.y < -this.radius * 2) this.reset();
      }
      draw() {
        const pulsedOpacity = this.opacity + Math.sin(this.pulse) * 0.03;
        ctx.globalAlpha = Math.max(0, pulsedOpacity);
        if (this.type === 'circle') {
          // soft filled glowing blob
          const grad = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.radius
          );
          grad.addColorStop(0, `rgba(${this.r},${this.g},${this.b},0.55)`);
          grad.addColorStop(0.6, `rgba(${this.r},${this.g},${this.b},0.18)`);
          grad.addColorStop(1, `rgba(${this.r},${this.g},${this.b},0)`);
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        } else {
          // soft outlined ring
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${this.r},${this.g},${this.b},0.25)`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }
    }

    // ─── Tiny dot grid (light mode accent) ──────────────────────────
    const drawDotGrid = () => {
      const spacing = 38;
      const dotR = 1;
      ctx.fillStyle = 'rgba(148,163,184,0.18)'; // slate-400 very subtle
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotR, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    // ─── Init ────────────────────────────────────────────────────────
    const initParticles = () => {
      isDark = document.documentElement.classList.contains('dark');
      particles = [];
      const count = isDark ? 25 : 18;
      for (let i = 0; i < count; i++) {
        particles.push(isDark ? new CodeSymbol() : new LightParticle(true));
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    // ─── Animate ─────────────────────────────────────────────────────
    const animate = () => {
      isDark = document.documentElement.classList.contains('dark');

      // Background fill
      ctx.fillStyle = isDark ? '#020617' : '#f8fafc';
      ctx.fillRect(0, 0, width, height);

      // Light mode: draw dot grid first (under particles)
      if (!isDark) drawDotGrid();

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // ─── Watch theme changes and reinit particles ─────────────────────
    const observer = new MutationObserver(() => {
      const newIsDark = document.documentElement.classList.contains('dark');
      if (newIsDark !== isDark) {
        isDark = newIsDark;
        initParticles();
      }
    });
    observer.observe(document.documentElement, { attributes: true });

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block pointer-events-none w-full h-full"
      />
    </div>
  );
};

export default AnimatedBackground;