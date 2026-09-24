# Project: Blessed the Movie

**Repo:** C:\Users\shena\Repos\blessed-the-movie
**Hub:** ~/cursor-agent-hub/memory/projects/blessed-the-movie.md

## Goal

Official film website + EPK for *Blessed* — New Orleans comedy about J-Bird's bike rental and community.

## Stack

- Language: TypeScript
- Framework: Next.js 15 (App Router) + React 18 + Tailwind + shadcn/ui
- Package manager: bun / npm

## Key commands

| Action | Command |
|--------|---------|
| test | _(none yet)_ |
| lint | `npm run lint` |
| build | `npm run build` |
| dev | `npm run dev` |

## Conventions

- Minimal diffs; match existing style
- Warm orange/cream theme (Playfair Display + Outfit) — keep site chrome warm even when hero photography is purple/night
- Character spelling: **J-Bird** (not JayBird / Jaybird) for the person; shop may remain "Jaybird's Bike Rental" per copy
- No commit/push unless user explicitly asks

## Agent notes

- Read `.cursor/memory/VERIFY.md` before declaring done
- Hero image: `public/images/hero-bridge.png` (placeholder until lighted-bikes still arrives)
- Trailer URL: set `TRAILER_URL` in `src/app/page.tsx` when provided
- Press assets (release PDF, one-pager) arrive separately — keep "coming soon" until files land

## Known gotchas

- Cast + stills images live in `public/images/` (cast-*, still-*, hero-bridge)
- Experience It / Watch section intentionally removed

## Active branch / PR

- main (local)

## Last session

- 2026-09-24: cast photos (J-Bird, Linda, Neighborhood) + stills gallery (bridge kept)
