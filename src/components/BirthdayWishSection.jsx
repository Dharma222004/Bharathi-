import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { siteConfig } from '../content';

const BirthdayWishSection = () => {
  const { birthdayWish } = siteConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.15,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="birthday-wish" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-3xl mx-auto">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-roseGold-500/10 blur-[100px] pointer-events-none" />

      {/* Section badge - Centered */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-roseGold-500/10 border border-roseGold-400/25 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-roseGold-300 backdrop-blur-sm shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-roseGold-400" />
          {birthdayWish.sectionTag}
        </span>
      </div>

      {/* Glass card container with unified center alignment */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative glass-card rounded-2xl sm:rounded-3xl p-7 sm:p-12 md:p-14 border border-white/10 shadow-glass-rose overflow-hidden text-center"
      >
        {/* Centered decorative quotation mark */}
        <div
          className="flex justify-center mb-3 select-none pointer-events-none"
          aria-hidden="true"
        >
          <span className="font-serif text-5xl sm:text-6xl text-roseGold-400/30 leading-none">
            “
          </span>
        </div>

        {/* Heading - Centered */}
        <h2 className="relative z-10 font-sans text-2xl sm:text-3xl md:text-4xl text-white font-extrabold mb-6 text-center leading-snug tracking-tight max-w-xl mx-auto">
          {birthdayWish.heading}
        </h2>

        {/* Paragraphs revealed on scroll - Centered & balanced */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative z-10 space-y-5 text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal text-center max-w-2xl mx-auto"
        >
          {birthdayWish.paragraphs.map((p, idx) => (
            <motion.p
              key={idx}
              variants={paragraphVariants}
              className="leading-relaxed"
            >
              {p}
            </motion.p>
          ))}

          {/* Signoff - Centered & beautifully balanced */}
          <motion.div
            variants={paragraphVariants}
            className="pt-8 mt-8 border-t border-white/10 flex flex-col items-center justify-center text-center gap-2.5"
          >
            <div className="flex items-center justify-center gap-2 text-roseGold-300 text-xs sm:text-sm font-semibold tracking-wide">
              <Heart className="w-4 h-4 fill-roseGold-400/40 text-roseGold-300" />
              <span>With all the love in the universe</span>
            </div>
            <div className="font-sans text-2xl sm:text-3xl md:text-4xl text-roseGold-200 font-black tracking-tight text-glow mt-0.5">
              {birthdayWish.signOff}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BirthdayWishSection;
