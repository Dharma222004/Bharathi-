import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Feather } from 'lucide-react';
import { siteConfig } from '../content';

/**
 * 33rd Photo + The Grand Final Birthday Letter
 * The 33rd image is positioned proudly above the big final quote!
 */
const LetterSection = () => {
  const { grandLetter } = siteConfig;
  const photo = grandLetter.photo;

  // Safely parse title and parenthetical nickname for flawless responsive alignment across all devices
  const rawTitle = grandLetter.title || 'Happiest Birthday, Bharathi (Rhesus korangu)';
  const titleMatch = rawTitle.match(/^(.*?)\s*(\(.*?\))\s*$/);
  const mainTitle = titleMatch ? titleMatch[1].trim() : rawTitle;
  const subtitle = titleMatch ? titleMatch[2].trim() : null;

  // Break cleanly after comma so words never fracture or wrap awkwardly on mobile phones
  const commaIdx = mainTitle.indexOf(',');
  const prefix = commaIdx !== -1 ? mainTitle.slice(0, commaIdx + 1) : mainTitle;
  const suffix = commaIdx !== -1 ? mainTitle.slice(commaIdx + 1).trim() : '';

  return (
    <section id="letter" className="relative py-20 sm:py-32 px-4 sm:px-6 max-w-2xl sm:max-w-3xl mx-auto">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-roseGold-400/10 blur-[130px] pointer-events-none" />

      {/* Section badge */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-roseGold-500/10 border border-roseGold-400/20 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-roseGold-300">
          <Feather className="w-3.5 h-3.5" />
          From My Heart to Yours
        </span>
      </div>

      {/* THE 33RD IMAGE (Placed directly above the big quote) */}
      {photo && (
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-glass-rose mb-8"
        >
          <div className="relative w-full bg-black/60 overflow-hidden">
            <img
              src={photo.image}
              alt="Bharathi - The Final Chapter"
              loading="lazy"
              decoding="async"
              className="w-full max-h-[75vh] sm:max-h-[80vh] object-contain sm:object-cover mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent opacity-30 pointer-events-none" />
          </div>
        </motion.div>
      )}

      {/* THE BIG FINAL QUOTE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-14 border border-roseGold-300/20 shadow-glass-rose overflow-hidden"
      >
        {/* Decorative corner heart seal */}
        <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-gradient-to-tr from-roseGold-600 to-roseGold-400 border border-white/30 flex items-center justify-center shadow-lg transform rotate-12 opacity-85">
          <Heart className="w-5 h-5 text-white fill-white" />
        </div>

        {/* Title Block with Flawless Alignment on ALL Devices */}
        <div className="mb-8 pr-12 sm:pr-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-roseGold-500/10 border border-roseGold-400/25 text-xs sm:text-sm font-bold tracking-widest uppercase text-roseGold-300 mb-3 sm:mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-roseGold-400" />
            <span>A Special Dedication to Bharathi</span>
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl text-white font-extrabold tracking-tight leading-tight">
            {suffix ? (
              <>
                <span className="block sm:inline">{prefix}</span>{' '}
                <span className="inline-block text-white">{suffix}</span>
              </>
            ) : (
              <span>{prefix}</span>
            )}
            {subtitle && (
              <span className="block text-roseGold-300 font-bold text-lg sm:text-2xl md:text-3xl mt-1.5 sm:mt-2 whitespace-nowrap text-glow-subtle">
                {subtitle}
              </span>
            )}
          </h2>
        </div>

        {/* Letter Paragraphs with bold professional typography */}
        <div className="space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
          {grandLetter.paragraphs.map((para, i) => {
            const isHighlighted =
              para.includes('Every difficult moment was worth it') ||
              para.includes('There is one thing I genuinely wish for you') ||
              para.includes('Never forget this: You are not running out of time') ||
              para.includes('The best is not behind you');

            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className={
                  isHighlighted
                    ? 'p-4 rounded-xl bg-white/5 border-l-4 border-roseGold-400 font-sans font-bold text-roseGold-100 text-base sm:text-lg my-4 shadow-sm'
                    : 'text-slate-200'
                }
              >
                {para}
              </motion.p>
            );
          })}
        </div>

        {/* Signature (Bold, Professional Typography) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="text-xs sm:text-sm text-slate-400 font-medium">
            With endless love, admiration, and pride in you.
          </div>
          <div className="font-sans text-2xl sm:text-3xl text-roseGold-300 font-extrabold tracking-tight text-glow">
            {grandLetter.signature}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LetterSection;
