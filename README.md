# Happy Birthday Bharathi 🤍✨
A premium, interactive, single-page scroll celebration website crafted with love for **Bharathi**.

Built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, **HTML Canvas 60fps particle engine**, and **Web Audio API** synthesized chimes.

---

## 🌟 Live Local Preview
The development server is running locally:
- **Local URL:** [http://localhost:5173](http://localhost:5173)
- **Network URL (Mobile on same Wi-Fi):** `http://<your-ip>:5173`

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in `/dist`.

---

## 🎨 How to Customize All Content

All text, quotes, names, and photo references are centralized in one single file:
👉 **[`src/content.js`](file:///c:/Users/chics/OneDrive/Desktop/Bharathi/src/content.js)**

You **do not need to touch any React components** to customize the site!

### 1. Replacing Photos
1. Add your pictures to the **`public/photos/`** folder:
   - `public/photos/1.jpg`
   - `public/photos/2.jpg`
   - `public/photos/3.jpg`
   - `public/photos/4.jpg`
   - `public/photos/5.jpg`
   - `public/photos/6.jpg`
2. In `src/content.js`, you can adjust the titles, dates/captions, and quotes for each memory.
3. You can easily add more memories or remove cards by simply editing the `journey.memories` array.

### 2. Personalizing the Wishes & Letter
In `src/content.js`:
- **Birthday Wish Section:** Edit `birthdayWish.paragraphs` to add your heartfelt birthday wish.
- **Letter Section:** Edit `letter.paragraphs` to add your personal message to Bharathi.
- **Your Signature:** Update `letter.signature` (e.g. replace `[YOUR NAME]` with your actual name).
- **Footer Credits:** Update `footer.line1` and `footer.line2` with the names of everyone involved.

---

## 🚢 Deploying to Vercel (Free & Instant)

This project has **zero backend** and is 100% static, making it deployable on Vercel in seconds:

### Option A: Using Vercel CLI (Fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts (accept defaults: framework Vite, root directory `./`).

### Option B: Deploying via GitHub & Vercel Dashboard
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Bharathi's birthday website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import your GitHub repository.
4. Framework preset will automatically be detected as **Vite**.
5. Click **"Deploy"**! In ~30 seconds, your live shareable link will be ready to send to Bharathi.

---

## ✨ Features Included
- **Opening Curtain & Audio Unlock:** Solves browser autoplay restrictions smoothly.
- **Synthesized Web Audio API:** Gentle pentatonic bells and celebration melodies without needing heavy MP3 files.
- **Mute/Unmute Control:** Floating top-right toggle with instant visual feedback.
- **60fps Canvas Particle Engine:** Fireworks rocket bursts on click/tap and cascading confetti.
- **Timeline Polaroid Cards:** Alternating layout with 3D tilt, hover glow, and full-screen lightbox photo preview.
- **Interactive Birthday Cake:** Tap on the candle flames to blow them out, triggering puff of smoke, chime melody, and grand fireworks finale!
- **Desktop Sparkle Cursor & Mobile Tap Ripples.**
- **Top Scroll Progress Indicator.**
- **Full Mobile-First Responsive Design (375px to 4K).**
