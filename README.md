# American Dream Sales Deck

An interactive, immersive sales deck for American Dream — the world's premier destination retail complex. This is a fully interactive, browser-based sales tool designed to tell the property's story through video, data, and narrative.

## Live URL

https://pmfoysal-american-dream-mall.netlify.app

---

## Key Features

### The "Click to Explore" Experience

Instead of a traditional slide deck, visitors enter through a dramatic intro screen. They must click to begin, making them an active participant rather than a passive viewer. This creates immediate engagement and a sense of discovery.

Once inside, visitors see a beautiful overview of American Dream Mall with 6 interactive hotspots scattered around the edges (avoiding the central text). Each hotspot represents a major venue:

- DreamWorks Water Park (top-left)
- Nickelodeon Theme Park (top-right)
- Luxury Retail Mile (bottom-left)
- Performing Arts Center (bottom-right)
- Dining District (bottom-left corner)
- Exposition Center (bottom-right corner)

### Interactive Venue Explorer

Clicking any hotspot reveals a detailed panel with:
- A photo of the venue
- A description of what makes it special
- Key stats (square footage, capacity, etc.)
- A call-to-action linking to the relevant section

A progress tracker shows visitors how many areas they've explored ("2 of 6 areas explored"). This gamifies the experience and encourages complete exploration.

### Video-First Backgrounds

Rather than static images, many sections feature autoplay video backgrounds:
- Hero stats section shows urban/cityscape footage
- Luxury section shows high-end retail environments
- Entertainment section shows real water park footage
- Venues section shows event/concert spaces

### Elegant Section Transitions

When moving between sections, a brief animated overlay announces the new section with a pulsing icon and expanding text effect. The transition is smooth and cinematic (1.5 seconds), giving visitors time to orient themselves.

### Navigation Options

Visitors can explore however they prefer:
- Click hotspots to discover venues
- Use section dots on the right side to jump anywhere
- Open the full menu to see all sections at once
- Use arrow keys or space bar to move through slides
- Press "F" for fullscreen mode

---

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

---

## Design Philosophy

### Visual Direction

The deck uses a **dark luxury aesthetic** inspired by high-end brands like Apple, Tesla, and Hermès. Dark backgrounds make the gold accents pop, creating focus and drama. The gold accent color (#c9a962) conveys luxury without being gaudy.

### Why Interactive?

The client specifically asked for a sales tool that felt like "an interactive sales tool" rather than a traditional presentation. The venue explorer is the centerpiece — it lets prospects discover the scale and opportunity themselves rather than being told about it. This creates ownership of the opportunity.

### The "I Need to Be Here" Moment

When someone clicks on DreamWorks Water Park and sees "450,000 square feet, 15+ water slides, open 365 days a year," they understand the foot traffic potential. When they see "2,500-seat Performing Arts Center with 4K LED wall," they envision the brand activation possibilities. Discovery creates desire more effectively than assertion.

---

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── CursorFollower.tsx    # Custom cursor effect
│   │   ├── FeaturesGrid.tsx       # Feature cards grid
│   │   ├── Particles.tsx          # Animated particle canvas
│   │   ├── StatsGrid.tsx         # Stats display
│   │   ├── InteractiveHotspot.tsx # Venue explorer hotspots
│   │   └── TransitionOverlay.tsx  # Section transition effects
│   ├── deck/
│   │   ├── SlideDeck.tsx         # Main deck container
│   │   └── SlideDeck.module.css
│   └── slides/
│       ├── ImmersiveSlide.tsx    # Individual slide component
│       └── ImmersiveSlide.module.css
├── data/
│   └── deckData.ts               # All slide content & hotspot data
├── styles/
│   └── global.css                # CSS variables & global styles
├── types/
│   └── index.ts                  # TypeScript interfaces
├── App.tsx                       # Main application
└── main.tsx                      # Entry point
```

---

## Content Sections

1. **Hero/Welcome** — Brand introduction with click-to-explore interaction
2. **By The Numbers** — Scale stats with video background
3. **Location** — Position, access, demographics
4. **Retail** — Retail environment and themed zones
5. **Luxury** — Elevated shopping experience
6. **Dining** — Culinary offerings
7. **Entertainment** — Attractions (water park, theme park)
8. **Events** — Brand activations and event platform
9. **Venues** — Performing arts and expo centers
10. **Leasing** — Partnership opportunities and contact

---

## Deployment

Deploy to GitHub Pages, Vercel, or Netlify:

```bash
# Build first
npm run build

# Then deploy the dist/ folder
```

---

## Notes

- Video sources use Pexels CDN for stock footage
- Premium Unsplash images used for photography
- Particle effects and custom cursor automatically hidden on touch devices
- Smooth keyboard navigation (arrow keys, space bar, F for fullscreen)