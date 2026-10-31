import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, RotateCcw, Flame } from 'lucide-react';
import { siteConfig } from '../content';
import { soundManager } from '../utils/audio';

/**
 * Ultra-Luxury Realistic Candle & Ceremony Experience
 * Realistic organic candle flame, micro-flicker, embers, smoke dispersion physics,
 * polished brass/gold pedestal, and haptic feedback.
 */
const SurpriseSection = ({ onTriggerFinale }) => {
  const { surprise } = siteConfig;
  const [isCeremonyOpen, setIsCeremonyOpen] = useState(false);
  const [isBlown, setIsBlown] = useState(false);

  const handleOpenCeremony = () => {
    setIsCeremonyOpen(true);
    soundManager.playChime(3);
    setTimeout(() => {
      document.getElementById('candle-ceremony')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  };

  const handleBlowOut = () => {
    if (isBlown) return;
    setIsBlown(true);

    // Haptic vibration feedback on mobile phones
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([40, 50, 120]);
    }

    // Audio puff sound
    soundManager.playPuff();

    // Trigger grand fireworks finale
    if (onTriggerFinale) {
      onTriggerFinale();
    }

    // Play celebration melody
    setTimeout(() => {
      soundManager.playCelebrationMelody();
    }, 400);
  };

  const handleRelight = () => {
    setIsBlown(false);
    soundManager.playChime(1);
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(30);
    }
  };

  return (
    <section id="surprise" className="relative py-20 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Ambient background light bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[520px] h-72 sm:h-[520px] rounded-full bg-roseGold-400/10 blur-[140px] pointer-events-none" />

      {/* Section Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-roseGold-500/10 border border-roseGold-400/25 text-xs font-medium tracking-[0.2em] uppercase text-roseGold-300 mb-5"
      >
        <Sparkles className="w-3.5 h-3.5 text-roseGold-400" />
        {surprise.badge}
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight mb-4"
      >
        {surprise.heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-300/80 text-sm sm:text-lg font-light max-w-lg mx-auto mb-10 leading-relaxed px-2"
      >
        {surprise.subtext}
      </motion.p>

      {/* Initial Make a Wish Button */}
      {!isCeremonyOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 45px rgba(226, 148, 162, 0.6)' }}
            whileTap={{ scale: 0.96 }}
            onClick={handleOpenCeremony}
            className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-roseGold-500 via-roseGold-400 to-champagne-400 text-midnight-950 font-semibold text-base sm:text-lg shadow-glow-rose cursor-pointer transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-midnight-950 fill-midnight-950" />
              {surprise.buttonLabel}
            </span>
            <div className="absolute inset-0 bg-white/25 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      )}

      {/* Realistic Candle Ceremony Container */}
      <AnimatePresence>
        {isCeremonyOpen && (
          <motion.div
            id="candle-ceremony"
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative glass-card rounded-3xl p-6 sm:p-12 border border-white/10 shadow-glass-rose max-w-xl mx-auto overflow-hidden"
          >
            {/* Candle Prompt Header */}
            <div className="mb-6">
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-roseGold-300/90">
                {isBlown ? surprise.cakeBlownSubtext : surprise.cakePrompt}
              </span>
            </div>

            {/* Realistic Candle & Light Stage */}
            <div
              onClick={handleBlowOut}
              className="relative mx-auto w-full max-w-[280px] h-[300px] flex flex-col items-center justify-end select-none cursor-pointer group"
              title={isBlown ? 'Wish granted!' : 'Tap the flame to blow out the candle!'}
            >
              {/* Radial warm candlelight wash on table surface */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                  isBlown ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-amber-400/25 blur-3xl animate-pulse" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-rose-400/20 blur-2xl" />
              </div>

              {/* Flame & Smoke Container */}
              <div className="relative z-20 flex flex-col items-center mb-0">
                {!isBlown ? (
                  /* Ultra-realistic Organic SVG Candle Flame */
                  <div className="relative flex flex-col items-center group-hover:scale-105 transition-transform">
                    {/* Pulsing micro-halo */}
                    <div className="absolute -inset-3 bg-amber-400/30 rounded-full blur-lg animate-pulse" />

                    {/* Realistic SVG flame teardrop with multi-layer color gradient */}
                    <motion.svg
                      animate={{
                        scaleY: [1, 1.08, 0.96, 1.04, 1],
                        scaleX: [1, 0.94, 1.05, 0.97, 1],
                        rotate: [-1.2, 1.5, -1, 0.8, -1.2],
                        skewX: [-1, 1.5, -1.5, 1, -1],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      width="38"
                      height="64"
                      viewBox="0 0 38 64"
                      className="filter drop-shadow-[0_0_16px_rgba(251,191,36,0.9)]"
                    >
                      <defs>
                        {/* Outer flame gradient */}
                        <linearGradient id="flameOuter" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
                          <stop offset="30%" stopColor="#f97316" stopOpacity="0.95" />
                          <stop offset="70%" stopColor="#fbbf24" stopOpacity="1" />
                          <stop offset="100%" stopColor="#fef08a" stopOpacity="0.95" />
                        </linearGradient>
                        {/* Inner hot core gradient */}
                        <linearGradient id="flameInner" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                          <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.9" />
                          <stop offset="65%" stopColor="#ffffff" stopOpacity="1" />
                          <stop offset="100%" stopColor="#fef9c3" stopOpacity="1" />
                        </linearGradient>
                      </defs>

                      {/* Outer organic flame body */}
                      <path
                        d="M 19 2 C 26 18, 36 34, 34 48 C 32 58, 26 62, 19 62 C 12 62, 6 58, 4 48 C 2 34, 12 18, 19 2 Z"
                        fill="url(#flameOuter)"
                      />

                      {/* Inner incandescent heart flame */}
                      <path
                        d="M 19 20 C 23 30, 27 40, 26 50 C 25 56, 22 58, 19 58 C 16 58, 13 56, 12 50 C 11 40, 15 30, 19 20 Z"
                        fill="url(#flameInner)"
                      />

                      {/* White-hot center pinpoint */}
                      <ellipse cx="19" cy="46" rx="3.5" ry="7" fill="#ffffff" opacity="0.95" />
                    </motion.svg>
                  </div>
                ) : (
                  /* Realistic Smoke Wisps curling upwards */
                  <div className="relative w-8 h-16 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0.8, y: 0, scaleX: 0.8, scaleY: 0.5, filter: 'blur(1px)' }}
                      animate={{
                        opacity: 0,
                        y: -60,
                        scaleX: 2.2,
                        scaleY: 1.8,
                        filter: 'blur(4px)',
                        rotate: [0, 8, -6, 4],
                      }}
                      transition={{ duration: 1.6, ease: 'easeOut' }}
                      className="w-3.5 h-10 rounded-full bg-gradient-to-t from-slate-400/80 via-slate-300/40 to-transparent"
                    />
                  </div>
                )}

                {/* Candle Wick */}
                <div className="w-[2.5px] h-3.5 bg-neutral-900 rounded-t-full shadow" />
              </div>

              {/* Realistic Candle Wax Column */}
              <div className="relative z-10 w-16 h-36 rounded-t-lg bg-gradient-to-r from-amber-50 via-rose-50 to-amber-100 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_10px_25px_rgba(0,0,0,0.5)] border-t border-white/60 flex flex-col items-center">
                {/* Subtle natural wax drips */}
                <div className="absolute top-0 inset-x-1 flex justify-between opacity-80">
                  <span className="w-2.5 h-4 bg-gradient-to-b from-rose-50 to-amber-100 rounded-b-full shadow-sm" />
                  <span className="w-2 h-7 bg-gradient-to-b from-rose-50 to-amber-100 rounded-b-full shadow-sm" />
                  <span className="w-3 h-5 bg-gradient-to-b from-rose-50 to-amber-100 rounded-b-full shadow-sm" />
                </div>

                {/* Vertical soft gloss sheen */}
                <div className="absolute top-2 left-2 bottom-2 w-1.5 bg-white/40 rounded-full blur-[0.5px]" />

                {/* Gold Foil Band on Candle */}
                <div className="mt-auto mb-4 w-full h-4 bg-gradient-to-r from-champagne-500 via-champagne-300 to-champagne-500 flex items-center justify-center shadow-sm">
                  <Heart className="w-2.5 h-2.5 text-midnight-950 fill-midnight-950 opacity-70" />
                </div>
              </div>

              {/* Polished Brass / Champagne Gold Pedestal Base */}
              <div className="relative z-10 flex flex-col items-center -mt-1 w-full">
                {/* Upper pedestal plate */}
                <div className="w-28 h-3 rounded-full bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 shadow-md border-t border-white/60" />
                {/* Middle stem */}
                <div className="w-20 h-4 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 shadow-inner" />
                {/* Lower base stand */}
                <div className="w-48 h-4 rounded-full bg-gradient-to-r from-amber-300 via-amber-100 to-amber-400 shadow-xl border-t border-white/80 flex items-center justify-center">
                  <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-neutral-800 font-bold opacity-80">
                    Bharathi 🤍
                  </span>
                </div>
              </div>
            </div>

            {/* Instruction Callout */}
            {!isBlown ? (
              <p className="mt-6 text-xs text-roseGold-300/80 animate-pulse font-light">
                ✨ Tap on the flame to make your wish and blow it out! ✨
              </p>
            ) : (
              /* Shimmering Text Revealed when Candle is Blown */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 pt-6 border-t border-white/10"
              >
                <h3 className="font-sans text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-roseGold-200 via-champagne-200 to-roseGold-200 font-extrabold tracking-tight mb-3 filter drop-shadow-[0_0_25px_rgba(244,180,190,0.8)]">
                  {surprise.glowingFinalText}
                </h3>

                <p className="text-slate-200 text-sm sm:text-base max-w-md mx-auto font-light leading-relaxed mb-6">
                  May every wish you whispered into the starlight blossom into reality. You deserve all the joy in the universe!
                </p>

                <div className="flex justify-center">
                  <button
                    onClick={handleRelight}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-xs sm:text-sm text-slate-200 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-roseGold-300" />
                    {surprise.restartPrompt}
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SurpriseSection;
