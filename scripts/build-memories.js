import fs from 'fs';

const quotes = [
  "Some people enter our lives with grand introductions, while others quietly become part of our everyday story. You were never just another person I met—you became one of those rare souls whose presence makes ordinary moments feel special. Thank you for being a reminder that the greatest friendships are often the simplest ones.",
  "Life is a book filled with countless pages, but only a few chapters remain unforgettable. Our friendship is one of those chapters that I hope time never closes. No matter where life leads us, the memories we've created will always have a permanent place in my heart.",
  "A true friend doesn't always solve your problems or have all the answers. Sometimes, they simply stay beside you until you find your own strength again. That's the beauty of genuine friendship—it speaks the loudest in moments of silence.",
  "There are friends you talk to every day, and then there are friends where time and distance simply evaporate the moment you meet. With you, Bharathi, it never feels like catching up; it feels like picking up right where our souls left off.",
  "In a world that is always in such a hurry, having someone who listens without judgement is the rarest luxury. Thank you for being the person I can tell my unvarnished truths to without ever fearing what you might think.",
  "They say laughter is the shortest distance between two people, and with you, that distance has always been zero. Thank you for the uncontrollable giggles, the ridiculous inside jokes, and the memories that still make me smile on my hardest days.",
  "Friendship is not about who you've known the longest. It's about who walked into your life, held out a hand, and made you feel understood in a way words could never fully capture. You have been that person for me, over and over again.",
  "Through the chaos of everyday life, some people become your sanctuary. When the world feels a little too loud and overwhelming, your calm warmth is a gentle reminder that everything is going to be alright.",
  "The most beautiful thing about our bond is how effortless it is. No pretending, no masks, no forced conversations—just two genuine hearts navigating life side by side with honesty, respect, and love.",
  "Every photograph holds a frozen heartbeat of time, but what makes this memory special is the joy we felt in that exact moment. You have this rare gift of turning the most ordinary afternoon into a treasured memory.",
  "A strong friendship doesn't need daily conversations or constant togetherness. As long as the relationship lives in the heart, true friends will never part. Proud to call you my best friend, Bharathi.",
  "You don't just celebrate my victories; you've stood quietly beside me through my doubts and hesitations. Having a friend who believes in your potential when you feel small is an anchor unlike any other.",
  "We've shared cups of tea, endless conversations, silly arguments, and heartfelt confessions. Looking back, every single minute spent in your company has been an investment in a bond that will last a lifetime.",
  "There is a soft comfort in knowing that no matter how fast things change around us, our bond remains steadfast. You are one of the few constants in my life that I will always protect and cherish.",
  "Sometimes, all it takes to heal a heavy heart is a familiar smile across the table. Thank you for being that warmth, that light, and that unspoken reassurance whenever life felt a little complicated.",
  "We may not know where the road ahead will take us, or what challenges the coming years will bring. But knowing that I have a friend like you walking this journey makes the future feel a lot less intimidating.",
  "True friends are like stars; you don't always see them, but you know they are always there. Through every high tide and every quiet evening, you have been a constant starlight in my world.",
  "I hope you always see yourself through the eyes of the people who love you. You are kinder than you believe, stronger than you seem, and so much more capable than you give yourself credit for.",
  "It's easy to find someone to share the sunny days with, but rare to find the friend who will share your umbrella during the torrential rain. Thank you for never running from the storms.",
  "We have created a world of our own filled with memories that nobody else can ever replicate. Those secret smiles and shared glances are treasures that I hold close to my heart every single day.",
  "Your kindness isn't just an action; it's a way of being. In a world where people often forget how to be gentle, your empathy and grace make you stand out like a radiant beacon.",
  "No matter how many years pass or how old we grow, I hope we never lose this spark of pure joy. May our laughs remain loud, our conversations deep, and our friendship as young as the day we met.",
  "Friendship is the comfort of knowing that even when you feel completely alone, someone out there is holding a piece of your story with tenderness and care. Thank you for carrying mine.",
  "We don't always need grandiose adventures to make life memorable. Sometimes, just sitting beside you, talking about dreams, struggles, and silly things, is the richest experience of all.",
  "There are people who make you feel proud of who you are, simply by accepting you completely. Bharathi, you gave me the permission to be wholly myself, and I can never thank you enough for that.",
  "May life always surround you with the same warmth and genuine care that you pour into the people around you. You give so much to the world; I pray the world gives twice as much back to you.",
  "Every chapter we write together is filled with authenticity. You've taught me what it means to be patient, what it means to listen, and what it truly looks like to stand by a friend through thick and thin.",
  "The best kind of friendship is one that helps both people grow into their highest and most confident selves. Watching you evolve, conquer your battles, and bloom has been one of my greatest privileges.",
  "A single grateful thought toward heaven is the most complete prayer, and every time I think of our friendship, my heart is filled with pure gratitude for having you in my life.",
  "Through every change of season, through every high and low, you have shown up with loyalty, compassion, and that unforgettable radiant smile. You are truly one of a kind.",
  "I hope you always remember how much your presence matters. You don't have to accomplish great things every single day; simply being here, lighting up our lives, is more than enough.",
  "Looking through all these captured moments, one truth shines brighter than anything else: life is so much richer, warmer, and sweeter because I get to share it with a friend like you."
];

const photos = JSON.parse(fs.readFileSync('src/photosData.json', 'utf8'));

// First 32 photos go into the scroll-driven journey with quotes
const first32 = photos.slice(0, 32).map((p, idx) => ({
  id: p.id,
  image: p.image,
  thumb: p.thumb,
  width: p.width,
  height: p.height,
  aspectRatio: p.aspectRatio,
  orientation: p.orientation,
  quote: quotes[idx]
}));

// 33rd photo is the special photo that goes above the grand final quote
const photo33 = photos[32] || photos[photos.length - 1];

fs.writeFileSync('src/first32Memories.json', JSON.stringify(first32, null, 2));
fs.writeFileSync('src/photo33.json', JSON.stringify(photo33, null, 2));
console.log('Successfully wrote first 32 memories and photo 33!');
