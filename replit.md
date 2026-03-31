# Project Overview

ishu.fun — A modern PDF tools website with 120+ free online PDF tools.
React + Vite single-page application (frontend only, no backend yet).

## Tech Stack

- **Framework:** React 19 with Vite 8
- **Routing:** React Router DOM v7 (lazy-loaded per-tool pages)
- **Animation:** GSAP + ScrollTrigger (parallax, timeline), Framer Motion (page transitions), Lenis (smooth scroll via GSAP ticker), Anime.js
- **3D:** Three.js + React Three Fiber (optimized Globe: 600 points, low-power GPU)
- **UI:** Lucide React, Sonner, clsx
- **Other:** Fuse.js (fuzzy search), CountUp.js, React Dropzone, React Intersection Observer, @formkit/auto-animate
- **Package Manager:** npm

## Project Structure

```
frontend/          # React + Vite app
  src/
    App.jsx        # Root component
    main.jsx       # Entry point
    components/    # Reusable UI components
    pages/         # Page-level components
    hooks/         # Custom React hooks
    data/          # Static data
    styles/        # Global styles
    assets/        # Static assets
  public/          # Public static files
  vite.config.js   # Vite config (host: 0.0.0.0, port: 5000)
PLAN/              # Planning documents and tools reference
```

## Running the App

- **Dev server:** `cd frontend && npm run dev` (runs on port 5000)
- **Workflow:** "Start application" workflow handles this automatically

## Deployment

- **Type:** Static site
- **Build:** `cd frontend && npm run build`
- **Output:** `frontend/dist`
