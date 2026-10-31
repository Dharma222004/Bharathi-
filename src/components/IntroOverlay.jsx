import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Music } from 'lucide-react';
import { siteConfig } from '../content';

const IntroOverlay = ({ isOpen, onStart }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight-950/95 backdrop-blur-2xl px-4 py-6"
        >
          {/* Subtle deep ambient illumination */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-roseGold-500/15 blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative z-10 max-w-sm w-full text-center flex flex-col items-center glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-glass-rose"
          >
            {/* Emblem */}
            <div className="relative mb-6 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-roseGold-400/20 to-champagne-400/20 border border-roseGold-300/30 flex items-center justify-center shadow-glow-rose">
                <Heart className="w-7 h-7 text-roseGold-200 fill-roseGold-300/60" />
              </div>
            </div>

            <span className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-roseGold-300/90 mb-2 font-bold">
              A Special Dedication
            </span>

            <h1 className="font-sans text-2xl sm:text-3xl text-white font-extrabold tracking-tight mb-2">
              HAPPY BIRTHDAY <span className="text-roseGold-300 block">BHARATHI</span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-7 max-w-xs font-normal">
              A journey of golden memories and heartfelt wishes...
            </p>

            {/* Tap to Enter Button */}
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 35px rgba(226, 148, 162, 0.5)' }}
              whileTap={{ scale: 0.96 }}
              onClick={onStart}
              className="group relative w-full py-4 rounded-full bg-gradient-to-r from-roseGold-500 via-roseGold-400 to-champagne-400 text-midnight-950 font-bold text-sm sm:text-base shadow-glow-rose transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center gap-2"
            >

              <span>Enter✨</span>
            </motion.button>


          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;
