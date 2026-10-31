import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { musicController } from '../utils/audio';

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return musicController.subscribe(({ isPlaying }) => {
      setIsPlaying(isPlaying);
    });
  }, []);

  const handleToggle = () => {
    musicController.toggle();
  };

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40 flex items-center">
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        className={`group flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 rounded-full border backdrop-blur-xl transition-all duration-300 shadow-glass cursor-pointer ${
          !isPlaying
            ? 'bg-slate-900/70 border-slate-700/60 text-slate-300 hover:border-slate-500'
            : 'bg-roseGold-500/20 border-roseGold-400/50 text-roseGold-200 hover:bg-roseGold-500/30 shadow-glow-rose'
        }`}
      >
        {!isPlaying ? (
          <>
            <Play className="w-3.5 h-3.5 text-slate-300 fill-slate-300" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wide">
              Play Song
            </span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-roseGold-300 animate-pulse" />
            {/* Animated Equalizer Bars */}
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 h-2 bg-roseGold-300 rounded-full animate-pulse" />
              <span className="w-0.5 h-3 bg-roseGold-300 rounded-full animate-pulse delay-100" />
              <span className="w-0.5 h-1.5 bg-roseGold-300 rounded-full animate-pulse delay-200" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold tracking-wide">
              Music Playing
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default AudioToggle;
