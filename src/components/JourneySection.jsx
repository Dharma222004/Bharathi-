import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, Maximize2 } from 'lucide-react';
import { siteConfig } from '../content';

/**
 * Full-page Scroll-Driven Journey of Memories
 * Clean, bold, professional styling with NO chapter badges on images.
 * First 32 images appear one by one as you scroll with quotes directly underneath.
 */
const JourneySection = () => {
  const { journey } = siteConfig;
  const memories = journey.memories || [];
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <section id="journey" className="relative py-12 sm:py-20 px-3 sm:px-6 max-w-2xl sm:max-w-3xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-16 w-80 h-80 rounded-full bg-purple-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-16 w-80 h-80 rounded-full bg-roseGold-500/10 blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-14 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-roseGold-300/20 backdrop-blur-md mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-roseGold-300" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-roseGold-200">
            A Journey of Memories
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-3xl sm:text-5xl text-white font-extrabold tracking-tight mb-3"
        >
          {journey.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300/80 text-sm sm:text-base font-normal leading-relaxed px-2"
        >
          {journey.subtext}
        </motion.p>
      </div>

      {/* Stream of Full-Page Memory Cards (One by one, NO Chapter badges) */}
      <div className="space-y-16 sm:space-y-24">
        {memories.map((memory) => {
          return (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass-card rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-glass-rose transition-all duration-300 hover:border-roseGold-300/35"
            >
              {/* Photo Container (NO Chapter badge!) */}
              <div
                className="relative w-full bg-black/50 overflow-hidden cursor-pointer"
                onClick={() => setFullscreenImage(memory)}
              >
                <img
                  src={memory.image}
                  alt={`Memory #${memory.id} with Bharathi`}
                  loading="lazy"
                  decoding="async"
                  className="w-full max-h-[72vh] sm:max-h-[78vh] object-contain sm:object-cover mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity pointer-events-none" />

                {/* Enlarge Hint button */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-midnight-950/75 backdrop-blur-md border border-white/15 flex items-center justify-center text-slate-200">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Quote Container Under The Photo (Bold, Professional Typography) */}
              <div className="p-5 sm:p-8 md:p-10 text-center bg-midnight-950/80 border-t border-white/10">
                <p className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-medium max-w-xl mx-auto selection:bg-roseGold-400 selection:text-midnight-950">
                  "{memory.quote}"
                </p>

                {/* Subtle divider */}
                <div className="mt-4 flex items-center justify-center gap-2 text-roseGold-400/60 text-xs">
                  <span className="h-px w-8 bg-roseGold-400/20" />
                  <Heart className="w-3 h-3 fill-roseGold-400/40 text-roseGold-300" />
                  <span className="h-px w-8 bg-roseGold-400/20" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox for tapped photos */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-midnight-950/95 backdrop-blur-2xl"
          >
            <button
              onClick={() => setFullscreenImage(null)}
              aria-label="Close image"
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white cursor-pointer shadow-lg active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full glass-card rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-roseGold-400/30 shadow-glow-rose max-h-[92vh] flex flex-col justify-between overflow-hidden"
            >
              <div className="relative w-full flex-1 max-h-[70vh] rounded-xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src={fullscreenImage.image}
                  alt={`Memory #${fullscreenImage.id}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="text-center px-2 py-2">
                <p className="text-slate-100 text-xs sm:text-base font-sans font-medium max-w-xl mx-auto">
                  "{fullscreenImage.quote}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default JourneySection;
