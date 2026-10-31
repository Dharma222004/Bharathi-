import React, { useState, useRef, useEffect } from 'react';
import FloatingBackground from './components/FloatingBackground';
import CelebrationCanvas from './components/CelebrationCanvas';
import IntroOverlay from './components/IntroOverlay';
import AudioToggle from './components/AudioToggle';
import ScrollProgressBar from './components/ScrollProgressBar';
import CursorSparkles from './components/CursorSparkles';
import HeroSection from './components/HeroSection';
import BirthdayWishSection from './components/BirthdayWishSection';
import JourneySection from './components/JourneySection';
import LetterSection from './components/LetterSection';
import SurpriseSection from './components/SurpriseSection';
import FooterSection from './components/FooterSection';
import { musicController } from './utils/audio';

function App() {
  const [isIntroOpen, setIsIntroOpen] = useState(true);
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const visitedSections = useRef(new Set());

  // Bind audio element to controller and setup bulletproof playback
  useEffect(() => {
    if (audioRef.current) {
      musicController.setAudioElement(audioRef.current);
      // Try immediate playback (browsers with autoplay permission will play right away)
      musicController.play().catch(() => {});
    }

    const handleFirstGesture = () => {
      musicController.play();
    };

    ['click', 'touchstart', 'pointerdown', 'keydown'].forEach((evt) => {
      window.addEventListener(evt, handleFirstGesture, { once: true });
    });

    return () => {
      ['click', 'touchstart', 'pointerdown', 'keydown'].forEach((evt) => {
        window.removeEventListener(evt, handleFirstGesture);
      });
    };
  }, []);

  // Handle "Tap to begin" click
  const handleStart = () => {
    // 1. Play background song directly
    musicController.play();

    // 2. Hide intro curtain
    setIsIntroOpen(false);

    // 3. Launch opening fireworks & confetti explosion
    setTimeout(() => {
      if (canvasRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvasRef.current.burst(width * 0.3, height * 0.35, 45);
        canvasRef.current.burst(width * 0.7, height * 0.4, 45);
        canvasRef.current.confetti(40);
      }
    }, 200);
  };

  // Scroll to Wish Section from Hero
  const handleScrollToStart = () => {
    const el = document.getElementById('birthday-wish');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (canvasRef.current) {
      canvasRef.current.confetti(25);
    }
  };

  // Trigger grand finale from Surprise Section
  const handleGrandFinale = () => {
    if (canvasRef.current) {
      canvasRef.current.grandFinale();
    }
  };

  // Listen to scroll milestones to trigger confetti when arriving at new sections
  useEffect(() => {
    if (isIntroOpen) return;

    const sections = ['birthday-wish', 'journey', 'letter', 'surprise'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !visitedSections.current.has(entry.target.id)) {
            visitedSections.current.add(entry.target.id);
            if (canvasRef.current) {
              canvasRef.current.confetti(25);
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isIntroOpen]);

  return (
    <div className="relative min-h-screen bg-midnight-950 text-slate-100 font-sans selection:bg-roseGold-400 selection:text-midnight-950">
      {/* Native Persistent Audio Element for the Song on Loop */}
      <audio
        ref={audioRef}
        src="/song/bharathi.m4a"
        loop
        preload="auto"
        playsInline
      />

      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Floating Audio Play / Pause Toggle Button */}
      <AudioToggle />

      {/* Cursor Sparkle Trail (Desktop) */}
      <CursorSparkles />

      {/* Ambient Deep Space Floating Background Stars & Glow Orbs */}
      <FloatingBackground />

      {/* Full-Screen 60fps HTML Canvas Fireworks & Confetti Layer (Silent fireworks, no beep/chime overlap) */}
      <CelebrationCanvas ref={canvasRef} soundEnabled={false} />

      {/* "Tap to Begin" Audio Consent & Welcome Overlay */}
      <IntroOverlay isOpen={isIntroOpen} onStart={handleStart} />

      {/* Main Page Scroll Experience */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* 1. HERO / INTRO SCREEN */}
        <HeroSection onScrollToStart={handleScrollToStart} />

        {/* 2. BIRTHDAY WISH INTRO */}
        <BirthdayWishSection />

        {/* 3. JOURNEY OF MEMORIES (First 32 images with quotes underneath) */}
        <JourneySection />

        {/* 4. THE 33RD IMAGE + GRAND FINAL BIRTHDAY LETTER */}
        <LetterSection />

        {/* 5. FINAL SURPRISE & CAKE INTERACTION */}
        <SurpriseSection onTriggerFinale={handleGrandFinale} />

        {/* 6. FOOTER */}
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
