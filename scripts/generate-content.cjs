const fs = require('fs');
const photos = JSON.parse(fs.readFileSync('src/photosData.json', 'utf8'));

const styles = [
  { tag: 'Soul Connection 💫', title: 'The Serendipitous Spark', quote: 'A true friend is the person who made your soul say: "Ah, there you are, I was looking for you." Blessed to have you in my world, Bharathi.' },
  { tag: 'Partners in Crime 🤪', title: 'Zero Braincells, Pure Joy', quote: 'We do not need a script or filter when we are together. With all our crazy laughter, you and I are definitely going to live forever!' },
  { tag: 'The Anchor ⚓', title: 'The Quiet Safe Haven', quote: 'In a noisy world full of expectations, your friendship is the quiet porch where I can lay down my armor and just breathe. You are my constant calm.' },
  { tag: 'Philosopher Besties 🌙', title: 'Midnight Stargazing & Musings', quote: 'From debating the universe under streetlights to sitting in comfortable silence for hours. We speak a secret language of pure understanding.' },
  { tag: 'Unstoppable Cheerleader 📣', title: 'My Loudest Supporter', quote: 'You always believe in me even when I forget how to believe in myself. You make everyone around you believe in their own magic.' },
  { tag: 'Eternal Bond ♾️', title: 'An Unbreakable Bond', quote: 'Years may fly and distances may stretch, but you are the friend who never needs catching up with. Built for a lifetime.' },
  { tag: 'Unfiltered Smiles 🤍', title: 'Pure Genuine Radiance', quote: 'Your smile has this contagious gravity that pulls joy into every space you walk into. Never let the world dim your light.' },
  { tag: 'Adventures with You ⛰️', title: 'Chasing Horizons', quote: 'The best journeys are defined by who is walking beside you. Every step with you turns an ordinary day into an unforgettable chapter.' },
  { tag: 'Ride or Die 🤝', title: 'Through Thick & Thin', quote: 'Real friendship is when you walk into their life and know they will always be there tomorrow. Thank you for always having my back, Bharathi.' },
  { tag: 'Pure Golden Moments ✨', title: 'Sunsets & Shared Secrets', quote: 'Golden hours fade into night, but memories carved in warmth stay forever young. Grateful for every single moment.' },
  { tag: 'Heart to Heart 💖', title: 'The Comfort of Silence', quote: 'True friends do not always need words. Sitting beside you in quiet company feels warmer than the brightest summer morning.' }
];

const allMemories = photos.map((p, idx) => {
  const style = styles[idx % styles.length];
  return {
    id: p.id,
    image: p.image,
    thumb: p.thumb,
    width: p.width,
    height: p.height,
    aspectRatio: p.aspectRatio,
    orientation: p.orientation,
    title: `${style.title} • Part ${p.id}`,
    date: `Moment #${p.id} • ${p.orientation === 'portrait' ? 'Timeless Portrait' : 'Golden Vista'}`,
    tag: style.tag,
    quote: style.quote
  };
});

fs.writeFileSync('src/generatedMemories.json', JSON.stringify(allMemories, null, 2));
console.log(`Generated ${allMemories.length} rich memories data`);
