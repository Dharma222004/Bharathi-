/**
 * ==============================================================================
 * BHARATHI'S BIRTHDAY CELEBRATION CONTENT CONFIGURATION
 * ==============================================================================
 */

import first32Memories from './first32Memories.json';
import photo33 from './photo33.json';

export const siteConfig = {
  recipientName: "Bharathi",
  senderName: "DD",
  emojiAccents: "🤍✨",

  // 1. HERO / INTRO SCREEN
  hero: {
    tagline: "A SPECIAL CELEBRATION OF YOU",
    titleLine1: "HAPPY BIRTHDAY",
    titleLine2: "BHARATHI 🤍",
    subtext: "Scroll down to embark on a beautiful journey of memories.",
    scrollButton: "Scroll to Start",
    overlayPrompt: "Tap to begin the celebration ✨",
  },

  // 2. BIRTHDAY WISH INTRO
  birthdayWish: {
    sectionTag: "A Heartfelt Wish",
    heading: "To the One Who Lights Up Every Room",
    paragraphs: [
      "They say a true friend is someone who knows the song in your heart and can sing it back to you whenever you've forgotten the words. Bharathi, you have been that radiant melody and unconditional warmth in my life through every single season.",
      "From laughing until our stomachs ache over the silliest things to being the calm voice that grounds me during chaotic days—having you as my best friend is one of life’s greatest blessings. You bring so much light, honesty, and kindness into this world."
    ],
    signOff: "Happy Birthday Bharathi 🤍"
  },

  // 3. JOURNEY OF MEMORIES (First 32 photos, one by one with quotes underneath)
  journey: {
    heading: "Journey of Memories",
    subtext: "Scroll down to unfold every beautiful chapter, one by one.",
    memories: first32Memories
  },

  // 4. THE 33RD PHOTO + THE GRAND FINAL BIRTHDAY LETTER
  grandLetter: {
    title: "Happiest Birthday, Bharathi (Rhesus korangu)",
    photo: photo33, // 33rd image placed directly above this big quote
    paragraphs: [
      "Today is not just another birthday; it's another beautiful chapter of your life, another opportunity to become everything you've ever dreamed of being. And on this special day, I don't just wish you a happy birthday. I wish you a life that makes your heart feel proud, your soul feel peaceful, and your dreams feel worth every struggle you've ever faced.",
      "I don't know what the future has written for you, but I genuinely hope it has something extraordinary waiting. I hope one day you achieve everything you've silently wished for, everything you've worked hard for, and even those dreams you've been afraid to tell anyone about. I want to see you standing at a place where you can look back at all your struggles, smile through your tears, and proudly say, 'Every difficult moment was worth it. I made it!'",
      "Please never underestimate yourself. There is so much more to you than you sometimes realise. Never allow a failure to make you question your abilities, a difficult day to make you lose hope, or someone's opinion to make you forget your worth. You don't have to be perfect, and you don't have to figure everything out today. You just have to keep believing in yourself and keep moving forward, even if your progress feels slow.",
      "Life won't always be kind. There will be days when nothing goes as planned, moments when you feel lost, and situations that test your patience and strength. During those times, I hope you remember that you are stronger than the challenges in front of you. Take your time, learn from your mistakes, wipe away your tears, and start again. Never feel ashamed of starting from zero. Sometimes, the strongest people are the ones who find the courage to begin again.",
      "I wish you become a woman who is independent in her decisions, confident in her abilities, fearless in pursuing her dreams, and strong enough to create her own identity. I hope you reach a stage in life where you never have to depend on anyone to recognise your value, because you already know exactly how much you are worth. May you achieve professional success, financial freedom, personal growth, and a happiness that no temporary situation can take away.",
      "And please, while chasing your dreams, never lose the beautiful person you are. Keep your kindness, protect your peace, respect yourself, and never change your heart just to fit into someone else's expectations. May you always be surrounded by people who genuinely appreciate you, support your growth, celebrate your victories, and stand beside you during your difficult days.",
      "There is one thing I genuinely wish for you: I hope life gives you a reason to smile that is so beautiful that you forget all the days you spent crying. I hope your hard work turns into success, your sacrifices turn into achievements, your fears turn into confidence, and your little dreams turn into beautiful realities. I hope you make your family proud, make yourself proud, explore the world, experience everything you've dreamed of, and live a life that you never feel the need to escape from.",
      "As a friend, I may not be able to make every difficult moment disappear from your life, solve every problem you face, or guarantee that everything will go according to your wishes. But one thing I can genuinely wish for is that you never stop believing in yourself. Your happiness, growth, and success are things I sincerely want to see.",
      "Years from now, when we look back at this phase of life, I hope we have countless memories to smile about. I hope I get to hear stories about your achievements, the places you've visited, the dreams you've fulfilled, and the wonderful person you've become. I hope your future self thanks the person you are today for never giving up.",
      "Never forget this: You are not running out of time. You are not behind anyone. You are not required to have everything figured out. Your journey is yours, and your beautiful future is still ahead of you.",
      "May this birthday be the beginning of a year that changes your life in the most beautiful ways. May you find happiness in unexpected places, strength in difficult moments, courage in uncertain situations, and success in everything you genuinely work towards.",
      "Keep dreaming. Keep growing. Keep smiling. Keep believing.",
      "And one day, I hope all the beautiful things I wished for you today become the beautiful reality you live tomorrow.",
      "Happiest Birthday once again! You deserve a lifetime of happiness, endless opportunities, genuine love, extraordinary success, and every beautiful thing this world has to offer. ❤️",
      "The best is not behind you. It's still waiting for you. Go make your story extraordinary! 🌸"
    ],
    signature: "– DD(Gorilla🐒) 💙"
  },

  // 5. FINAL SURPRISE & CAKE SECTION
  surprise: {
    badge: "The Grand Finale",
    heading: "Make a Wish Bharathi",
    subtext: "Every dream you dare to whisper to the universe tonight has wings to soar.",
    buttonLabel: "Make a Wish 🎂",
    cakePrompt: "Blow out the candles (tap on the flame!) 🕯️✨",
    cakeBlownSubtext: "Your wish has been carried to the stars! ✨🌟",
    glowingFinalText: "HAPPY BIRTHDAY BHARATHI 🤍",
    restartPrompt: "Light the candle again 🎂"
  },

  // 6. FOOTER
  footer: {
    line1: "Crafted with DD's Love and care 🤍✨",
    line2: "Cooked with DD's Endless Efforts and Many More 🤎✨",
    scrollUpLabel: "Back to top ↑"
  }
};
