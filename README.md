# Harish Yadav & Mamta Yadav — Portfolio

Official portfolio website for **Harish Yadav & Mamta Yadav**, Ward Councillors (Nigam Parshad) of Khanpur Village, Ward 167, South Delhi.

**Live:** [relaxedrohan.github.io/harish-yadav-portfolio](https://relaxedrohan.github.io/harish-yadav-portfolio)

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages via GitHub Actions

## Getting Started

```bash
npm install
npm run dev
```

Opens at [localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is generated in the `out/` directory.

## Deployment

Pushes to `main` automatically trigger a GitHub Actions workflow that builds and deploys to GitHub Pages.

To set up:

1. Go to **Settings → Pages** in your GitHub repo
2. Set **Source** to **GitHub Actions**

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Home page (composes all sections)
│   └── globals.css       # Theme, custom animations, utilities
└── components/
    ├── Navbar.tsx         # Sticky nav with scroll-aware active states
    ├── Hero.tsx           # Landing section with particle canvas
    ├── Marquee.tsx        # Scrolling text ticker
    ├── About.tsx          # Profiles with animated counters
    ├── ParallaxQuote.tsx  # Parallax scrolling quote
    ├── Vision.tsx         # Vision cards grid
    ├── Initiatives.tsx    # Horizontal scrolling timeline
    ├── Stats.tsx          # Animated statistics
    ├── Achievements.tsx   # Vertical milestone timeline
    ├── Gallery.tsx        # Photo grid (placeholder)
    ├── Contact.tsx        # Contact form & info
    ├── Footer.tsx         # Footer with links & resources
    ├── Preloader.tsx      # Animated loading screen
    └── BackToTop.tsx      # Scroll-to-top button
```
