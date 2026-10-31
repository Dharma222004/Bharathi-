/**
 * Dedicated Background Song Controller
 * Plays ONLY /song/bharathi.m4a on loop with zero overlapping synth or default chime noises.
 */

class MusicController {
  constructor() {
    this.audio = null;
    this.isMuted = false;
    this.isPlaying = false;
    this.listeners = new Set();
  }

  setAudioElement(el) {
    this.audio = el;
    if (this.audio) {
      this.audio.loop = true;
      this.audio.volume = 0.85;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('ended', () => {
        if (this.audio) {
          this.audio.currentTime = 0;
          this.audio.play().catch(() => {});
        }
      });
    }
  }

  play() {
    if (!this.audio) return Promise.resolve();
    this.audio.muted = false;
    return this.audio.play().then(() => {
      this.isPlaying = true;
      this.notify();
    }).catch((err) => {
      console.warn('Audio play waiting for user gesture:', err.message);
    });
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.notify();
  }

  toggle() {
    if (!this.audio) return false;
    if (this.audio.paused) {
      this.play();
      return true;
    } else {
      this.pause();
      return false;
    }
  }

  // Dummy stub methods so any residual component calls safely do nothing
  playChime() {}
  playPuff() {}
  playCelebrationMelody() {}
  init() {
    this.play();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((fn) => fn({ isPlaying: this.isPlaying }));
  }
}

export const musicController = new MusicController();
export const soundManager = musicController; // alias for backwards compatibility

if (typeof window !== 'undefined') {
  window.musicController = musicController;
  window.soundManager = musicController;
}
