import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronUp, Sparkles } from 'lucide-react';
import { siteConfig } from '../content';

const FooterSection = () => {
  const { footer } = siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-20 px-4 sm:px-6 border-t border-white/10 bg-midnight-950/80 backdrop-blur-md text-center overflow-hidden">
      {/* Decorative top subtle gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-roseGold-400/30 to-transparent" />

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Back to top button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-roseGold-300/30 text-xs sm:text-sm text-slate-300 hover:text-roseGold-200 font-bold transition-all cursor-pointer shadow-glass mb-4"
        >
          <ChevronUp className="w-4 h-4 text-roseGold-300" />
          <span>{footer.scrollUpLabel}</span>
        </motion.button>

        {/* Footer text lines */}
        <div className="space-y-2">
          <p className="text-sm sm:text-base text-slate-200 font-bold tracking-wide flex items-center justify-center gap-2 flex-wrap">
            <span>{footer.line1}</span>
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide flex items-center justify-center gap-2 flex-wrap">
            <span>{footer.line2}</span>
          </p>
        </div>

        {/* Decorative star icon */}
        <div className="pt-4 flex items-center justify-center gap-2 text-roseGold-400/50">
          <Sparkles className="w-4 h-4" />
          <Heart className="w-3.5 h-3.5 fill-roseGold-400/30" />
          <Sparkles className="w-4 h-4" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
