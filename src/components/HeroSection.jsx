import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronDown, Heart } from 'lucide-react';
import { siteConfig } from '../content';

const HeroSection = ({ onScrollToStart }) => {
  const { hero } = siteConfig;

  const line1 = hero.titleLine1;
  const line2 = hero.titleLine2;

  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: 0.3 + i * 0.04,
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 overflow-hidden">
      {/* Decorative center orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-gradient-to-tr from-roseGold-500/15 to-purple-600/10 blur-[90px] pointer-events-none" />

      {/* Floating Accent Icons */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-[10%] sm:left-[18%] opacity-60 text-roseGold-300 pointer-events-none hidden xs:block"
      >
        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8], rotate: [5, -5, 5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 right-[10%] sm:right-[18%] opacity-60 text-roseGold-300 pointer-events-none hidden xs:block"
      >
        <Heart className="w-5 h-5 sm:w-7 sm:h-7 fill-roseGold-400/30" />
      </motion.div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-roseGold-300/20 backdrop-blur-md mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-roseGold-400 animate-ping" />
        <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-roseGold-200">
          {hero.tagline}
        </span>
      </motion.div>

      {/* Main Title (Clean Bold Professional Typography) */}
      <div className="max-w-4xl mx-auto space-y-2 mb-6">
        <h1 className="font-sans text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-tight">
          {Array.from(line1).map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        <div className="font-sans text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-roseGold-200 via-roseGold-400 to-champagne-300 font-black tracking-tight filter drop-shadow-[0_0_35px_rgba(244,180,190,0.5)] py-1 sm:py-2">
          {Array.from(line2).map((char, index) => (
            <motion.span
              key={index}
              custom={line1.length + index}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-slate-300 text-sm sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10 font-medium px-2"
      >
        {hero.subtext}
      </motion.p>

      {/* Scroll Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={onScrollToStart}
        className="group relative inline-flex flex-col items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-roseGold-300/30 backdrop-blur-lg text-roseGold-200 hover:text-white transition-all duration-300 cursor-pointer shadow-glass-rose"
      >
        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">
          {hero.scrollButton}
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-roseGold-300 group-hover:text-champagne-300 transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
