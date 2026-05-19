# 🌟 Angie's Website — Your Guide to Everything

Welcome! This file explains how to do everything with your website.
No experience needed. Read this whenever you get confused.

---

## 📁 Your Files Explained

```
angie-website/
│
├── index.html        ← Your HOMEPAGE (the main page)
├── portfolio.html    ← Your DANCE PORTFOLIO page
├── style.css         ← How everything LOOKS (colors, fonts, spacing)
├── portfolio.css     ← Extra styles just for the portfolio page
├── script.js         ← The animations and filter buttons (don't touch!)
│
├── images/           ← PUT YOUR PHOTOS HERE
│   └── your-photo.jpg
│
└── videos/           ← PUT YOUR VIDEOS HERE (optional)
    └── your-video.mp4
```

---

## ✏️ How to Edit Your Content

### Change your name / tagline
Open `index.html`, find this line:
```
ANGIE
```
Replace ANGIE with your name. Find the tagline below it and change that too.

### Change your bio
Open `index.html`, find the section that says:
```
Write your story here...
```
Replace that whole paragraph with your own words.

### Add your photo
1. Put your photo in the `images/` folder (create the folder if it doesn't exist)
2. In `index.html`, find:
   ```html
   <div class="photo-placeholder">
   ```
3. Replace the ENTIRE placeholder block with just:
   ```html
   <img src="images/your-photo.jpg" alt="Angie" />
   ```

### Change the stats (5+, 2, ∞)
Open `index.html`, find `.stat-n` — change the numbers and descriptions below them.

### Update achievements
Open `index.html`, find the `<div class="ach-item">` blocks.
Change the year, title, and description. Copy-paste a whole block to add more!

### Update your email and social links
Open `index.html`, scroll to the bottom. Find:
```
href="mailto:your@email.com"
href="https://instagram.com/yourhandle"
```
Replace with your real email and handles.

---

## 🎬 How to Add Videos to Your Portfolio

### Option A — Upload a video file
1. Put your video in the `videos/` folder
2. Open `portfolio.html`
3. Find a `<div class="port-item">` block
4. Replace the `<div class="port-item-thumb">` section with:
```html
<video poster="images/thumbnail.jpg" controls>
  <source src="videos/your-video.mp4" type="video/mp4">
</video>
```

### Option B — Embed a YouTube video
1. Go to your YouTube video
2. Click Share → Embed → copy just the VIDEO ID from the URL
   (The ID is the part after `v=` — like `dQw4w9WgXcQ`)
3. In `portfolio.html`, replace a thumb block with:
```html
<div class="yt-embed">
  <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" allowfullscreen></iframe>
</div>
```

### Adding a new portfolio card
Copy this whole block and paste it inside `<div class="port-grid">`:
```html
<div class="port-item" data-cat="hiphop" style="background:#1a1208;">
  <div class="port-item-thumb">
    <!-- your video or image goes here -->
  </div>
  <div class="port-item-info">
    <span class="card-tag">Hip-hop</span>
    <p class="card-name">Your title</p>
    <p class="port-date">Month 2024</p>
  </div>
</div>
```
Change `data-cat` to: `hiphop` / `waacking` / `freestyle` / `performance`

---

## 🎨 How to Change Colors

Open `style.css`. At the very top you'll see:
```css
:root {
  --gold: #b8965a;   ← your accent color
  --dark: #080808;   ← dark backgrounds
  --cream: #f2ede4;  ← light text
}
```
Change `--gold` to any color you want! Use Google "color picker" to get a hex code.

---

## 🚀 How to Put Your Website Online (Free!)

### Step 1 — Create a GitHub account
Go to github.com and sign up (it's free).

### Step 2 — Create a new repository
- Click the green "New" button
- Name it: `yourusername.github.io` (use your actual GitHub username!)
- Set it to Public
- Click "Create repository"

### Step 3 — Upload your files
- Click "uploading an existing file"
- Drag ALL your website files into the upload area
- Click "Commit changes"

### Step 4 — Enable GitHub Pages
- Go to your repository Settings
- Scroll to "Pages" in the left sidebar
- Under "Source" select "Deploy from a branch"
- Choose "main" branch → Save

### Step 5 — Your site is live! 🎉
After 2-3 minutes, visit: `https://yourusername.github.io`

---

## ❓ Cheat Sheet

| What I want to do | Where to look |
|---|---|
| Change my bio | `index.html` → "Write your story here" |
| Change my photo | `index.html` → `photo-placeholder` |
| Add an achievement | `index.html` → copy an `ach-item` block |
| Add a portfolio video | `portfolio.html` → copy a `port-item` block |
| Change accent color | `style.css` → `--gold: #b8965a` |
| Update social links | `index.html` → bottom of the file |

---

Made with 🤍 — your website, your rules!
