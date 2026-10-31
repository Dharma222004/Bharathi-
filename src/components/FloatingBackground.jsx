import React, { useMemo } from 'react';

/**
 * Ambient floating stars, soft bokeh glow orbs, and deep midnight gradient backdrop
 */
const FloatingBackground = () => {
  // Generate random twinkling stars
  const stars = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: `${(Math.random() * 100).toFixed(2)}%`,
      top: `${(Math.random() * 100).toFixed(2)}%`,
      size: Math.random() * 2.5 + 1,
      duration: (Math.random() * 4 + 3).toFixed(1),
      delay: (Math.random() * 5).toFixed(1),
      opacity: (Math.random() * 0.5 + 0.2).toFixed(2),
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Deep midnight mesh gradient glows */}
      <div className="absolute -top-[15%] left-[20%] w-[600px] h-[600px] rounded-full bg-roseGold-500/10 blur-[130px]" />
      <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-purple-900/15 blur-[140px]" />
      <div className="absolute top-[70%] -right-[10%] w-[650px] h-[650px] rounded-full bg-roseGold-400/10 blur-[150px]" />
      <div className="absolute bottom-[0%] left-[30%] w-[550px] h-[550px] rounded-full bg-champagne-400/10 blur-[120px]" />

      {/* Twinkling ambient stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            boxShadow: `0 0 ${s.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}

      {/* Subtle cosmic dust grid / noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />
    </div>
  );
};

export default FloatingBackground;
