import React, { useEffect } from 'react';

const CursorSparkles = () => {
  useEffect(() => {
    // Only spawn cursor sparkle trail on devices that support hover (desktop pointer)
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;

    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle-particle';
      const size = Math.random() * 6 + 3;
      const colors = ['#fbcfe8', '#fda4af', '#f8ecc9', '#ffffff', '#ddd6fe'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.backgroundColor = color;
      sparkle.style.boxShadow = `0 0 ${size * 2}px ${color}`;

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 750);
    };

    const handleMouseMove = (e) => {
      const now = performance.now();
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);

      // Throttle sparkle creation: every 15px of movement or 50ms
      if (dist > 18 && now - lastTime > 45) {
        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = now;
        createSparkle(e.clientX, e.clientY);
      }
    };

    if (canHover) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (canHover) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return null;
};

export default CursorSparkles;
