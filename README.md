# American Dream Sales Deck

An interactive, immersive sales deck for American Dream — the world's premier destination retail complex. This is a fully interactive, browser-based sales tool designed to tell the property's story through video, data, and narrative.

## Live URL

https://pmfoysal-american-dream-mall.netlify.app

## Features

- **Cinematic Intro** — Animated intro sequence with loading bar, floating diamond icon, decorative corner frames, and skip option
- **Non-linear Navigation** — Section dots for quick navigation, full-screen menu for free exploration, arrow navigation
- **Video & Image Media** — Background visuals throughout (where available)
- **Interactive Stats & Features** — Animated cards with hover effects and gold accent styling
- **Custom Cursor** — Smooth-following cursor with glowing gold dot and trailing ring
- **Constellation Particles** — Elegant particle effects with glowing dots and connecting lines
- **Section-wise Progress** — Section index counter and progress bar showing current position
- **Responsive Design** — Optimized for desktop, small laptops (1280px, 1366px), and tablets

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Framer Motion** for animations
- **CSS Modules** for scoped styling

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## AI Tools Used

- **Claude (Anthropic)** — Primary AI assistant for code generation, debugging, design pattern suggestions, and writing assistance
- **Perplexity** — For searching and identifying accessible media assets (video URLs, images)
- **Pexels/Coverr** — Stock video and image library for media assets

## Design Decisions

### Visual Direction
Inspired by luxury brands (Apple, Tesla, Hermès) — minimal chrome, maximum impact, confident typography, and gold accent color palette.

### Color System
- Primary background: `#0a0a0f` (deep dark)
- Gold accent: `#c9a962` (warm gold)
- Text hierarchy: primary white, secondary muted, subtle labels

### Typography
- **Playfair Display** — Elegant serif for headings and stat values
- **DM Sans** — Clean sans-serif for body text and labels

### Animation Philosophy
- Smooth, confident transitions (300-500ms base)
- Reduced motion where possible to prevent lag
- Subtle parallax and floating effects for premium feel
- Fast initial load with deferred animations

### Architecture
- Modular component structure (common, layout, sections)
- Data-driven slides via `deckData.ts`
- CSS custom properties for theming
- Section variants for per-section customization

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── CursorFollower.tsx    # Custom cursor effect
│   │   ├── FeaturesGrid.tsx       # Feature cards grid
│   │   ├── Intro.tsx              # Cinematic intro screen
│   │   ├── Particles.tsx          # Animated particle canvas
│   │   ├── StatsGrid.tsx         # Stats display
│   │   └── VideoBackground.tsx    # Video background
│   ├── deck/
│   │   ├── SlideDeck.tsx          # Main deck container
│   │   └── SlideDeck.module.css
│   ├── layout/
│   │   └── Navigation.tsx          # Navigation component
│   └── slides/
│       ├── ImmersiveSlide.tsx      # Individual slide component
│       └── ImmersiveSlide.module.css
├── data/
│   └── deckData.ts                 # All slide content data
├── hooks/
│   ├── useDeckState.ts             # Deck state management
│   └── useSlideNavigation.ts       # Navigation logic
├── styles/
│   └── global.css                  # CSS variables & global styles
├── types/
│   └── index.ts                    # TypeScript interfaces
├── App.tsx                         # Main application
└── main.tsx                       # Entry point
```

## Content Sections

1. **Hero/Welcome** — Brand introduction with scale stats
2. **Location** — Position, access, demographics
3. **Retail** — Retail environment and themed zones
4. **Luxury** — Elevated shopping experience
5. **Dining** — Culinary offerings
6. **Entertainment** — Attractions (water park, theme park)
7. **Events** — Brand activations and event platform
8. **Venues** — Performing arts and expo centers
9. **Leasing** — Partnership opportunities and contact

## Deployment

Deploy to GitHub Pages, Vercel, or Netlify:

```bash
# Build first
npm run build

# Then deploy the dist/ folder
```

## Notes

- Video sources use Pexels CDN where accessible (some IDs may return 403)
- Premium Unsplash images used as fallback for unavailable video content
- Particles and cursor effects automatically hidden on touch devices
