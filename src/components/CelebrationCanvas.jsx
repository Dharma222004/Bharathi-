import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { soundManager } from '../utils/audio';

/**
 * High Performance Realistic Fireworks & 3D Confetti Particle Engine
 * Realistic drag, gravity, spark trails, incandescent hot cores, and 3D fluttering ribbons
 */
const CelebrationCanvas = forwardRef(({ soundEnabled = true }, ref) => {
  const canvasRef = useRef(null);
  const fireworksRef = useRef([]);
  const confettiRef = useRef([]);
  const sparksRef = useRef([]);
  const animFrameIdRef = useRef(null);
  const isReducedMotion = useRef(false);

  // Luxury Realistic Palette: Incandescent White-Hot, Warm Champagne, Rose Gold, Royal Lavender, Pearl
  const LUXE_PALETTE = [
    { main: '#ffd79e', glow: '#ffb366', core: '#ffffff' }, // warm champagne gold
    { main: '#fca5a5', glow: '#f87171', core: '#fff1f2' }, // delicate rose
    { main: '#f4b8c5', glow: '#e87994', core: '#ffffff' }, // rose gold
    { main: '#d8b4fe', glow: '#a855f7', core: '#faf5ff' }, // royal lavender
    { main: '#fef08a', glow: '#eab308', core: '#ffffff' }, // starlight gold
    { main: '#ffffff', glow: '#fed7aa', core: '#ffffff' }, // diamond sparkle
  ];

  // Realistic Willow / Peony Firework Spark Particle with spark trail
  class RealisticSpark {
    constructor(x, y, palette, angle, speed) {
      this.x = x;
      this.y = y;
      this.palette = palette;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.friction = 0.955;
      this.gravity = 0.085;
      this.alpha = 1;
      this.decay = Math.random() * 0.015 + 0.012;
      this.size = Math.random() * 2 + 1.2;
      this.history = [];
      this.maxHistory = 4;
      this.twinkle = Math.random() > 0.3;
    }

    update() {
      this.history.push({ x: this.x, y: this.y, alpha: this.alpha });
      if (this.history.length > this.maxHistory) {
        this.history.shift();
      }

      this.vx *= this.friction;
      this.vy *= this.friction;
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.decay;

      return this.alpha > 0;
    }

    draw(ctx) {
      ctx.save();

      // Render spark trail
      for (let i = 0; i < this.history.length; i++) {
        const h = this.history[i];
        const trailAlpha = (h.alpha * (i + 1)) / (this.history.length * 2);
        ctx.globalAlpha = Math.max(0, trailAlpha);
        ctx.fillStyle = this.palette.glow;
        ctx.beginPath();
        ctx.arc(h.x, h.y, this.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render glowing particle with incandescent core
      ctx.globalAlpha = Math.max(0, this.alpha);
      // Outer glow
      ctx.fillStyle = this.palette.glow;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Core hot center
      ctx.fillStyle = this.twinkle && Math.random() > 0.4 ? '#ffffff' : this.palette.main;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 0.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }

  // Realistic 3D Tumbling Confetti Ribbon
  class TumblingConfetti {
    constructor(x, y) {
      this.x = x ?? Math.random() * window.innerWidth;
      this.y = y ?? -20;
      const paletteChoice = LUXE_PALETTE[Math.floor(Math.random() * LUXE_PALETTE.length)];
      this.frontColor = paletteChoice.main;
      this.backColor = paletteChoice.glow;
      this.width = Math.random() * 8 + 6;
      this.height = Math.random() * 12 + 8;
      this.vy = Math.random() * 2.2 + 1.6;
      this.vx = Math.random() * 1.6 - 0.8;
      this.rotationX = Math.random() * 360;
      this.rotationY = Math.random() * 360;
      this.rotSpeedX = (Math.random() * 6 - 3) * 0.035;
      this.rotSpeedY = (Math.random() * 8 + 4) * 0.03;
      this.oscillation = Math.random() * Math.PI * 2;
      this.oscillationSpeed = Math.random() * 0.05 + 0.02;
      this.alpha = 1;
    }

    update() {
      this.y += this.vy;
      this.x += Math.sin(this.oscillation) * 1.2 + this.vx;
      this.oscillation += this.oscillationSpeed;
      this.rotationX += this.rotSpeedX;
      this.rotationY += this.rotSpeedY;

      if (this.y > window.innerHeight - 60) {
        this.alpha -= 0.025;
      }
      return this.y < window.innerHeight + 30 && this.alpha > 0;
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotationX);

      // Realistic 3D perspective flip (cos of Y rotation)
      const cosY = Math.cos(this.rotationY);
      ctx.scale(1, cosY);

      ctx.globalAlpha = Math.max(0, this.alpha);
      // Front or back face lighting
      ctx.fillStyle = cosY > 0 ? this.frontColor : this.backColor;

      ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
      ctx.restore();
    }
  }

  // Trigger realistic explosion burst
  const triggerBurst = (x, y, sparkCount = 50) => {
    if (isReducedMotion.current) {
      sparkCount = Math.min(15, sparkCount);
    }
    const palette = LUXE_PALETTE[Math.floor(Math.random() * LUXE_PALETTE.length)];
    const newSparks = [];

    // Realistic spherical dispersion with varied velocity
    for (let i = 0; i < sparkCount; i++) {
      const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() * 0.2 - 0.1);
      const speed = Math.random() * 4.2 + 1.4;
      newSparks.push(new RealisticSpark(x, y, palette, angle, speed));
    }
    sparksRef.current.push(...newSparks);

    if (soundEnabled) {
      soundManager.playChime();
    }
  };

  // Trigger realistic confetti flutter
  const triggerConfetti = (count = 35) => {
    if (isReducedMotion.current) return;
    const pieces = [];
    for (let i = 0; i < count; i++) {
      pieces.push(new TumblingConfetti());
    }
    confettiRef.current.push(...pieces);
    if (soundEnabled) {
      soundManager.playChime();
    }
  };

  // Grand Finale with layered barrages
  const triggerGrandFinale = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Series of realistic bursts
    const delays = [0, 180, 360, 550, 750, 950, 1150, 1400, 1650];
    delays.forEach((delay, idx) => {
      setTimeout(() => {
        const x = width * (0.15 + Math.random() * 0.7);
        const y = height * (0.15 + Math.random() * 0.45);
        triggerBurst(x, y, 65);
      }, delay);
    });

    // Cascading confetti showers
    setTimeout(() => triggerConfetti(90), 300);
    setTimeout(() => triggerConfetti(100), 1000);
    setTimeout(() => triggerConfetti(80), 1800);
  };

  useImperativeHandle(ref, () => ({
    burst: triggerBurst,
    confetti: triggerConfetti,
    grandFinale: triggerGrandFinale,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    isReducedMotion.current = mql.matches;
    const handleMql = (e) => {
      isReducedMotion.current = e.matches;
    };
    mql.addEventListener('change', handleMql);

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Render sparks
      const activeSparks = [];
      for (let i = 0; i < sparksRef.current.length; i++) {
        const s = sparksRef.current[i];
        if (s.update()) {
          s.draw(ctx);
          activeSparks.push(s);
        }
      }
      sparksRef.current = activeSparks;

      // Render confetti
      const activeConfetti = [];
      for (let i = 0; i < confettiRef.current.length; i++) {
        const c = confettiRef.current[i];
        if (c.update()) {
          c.draw(ctx);
          activeConfetti.push(c);
        }
      }
      confettiRef.current = activeConfetti;

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    const handlePointerDown = (e) => {
      if (
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('input')
      ) {
        return;
      }
      triggerBurst(e.clientX, e.clientY, 35);
    };

    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerdown', handlePointerDown);
      mql.removeEventListener('change', handleMql);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [soundEnabled]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 w-full h-full"
      style={{ width: '100vw', height: '100vh' }}
      aria-hidden="true"
    />
  );
});

CelebrationCanvas.displayName = 'CelebrationCanvas';

export default CelebrationCanvas;
