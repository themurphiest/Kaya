# Kaya

**The body as teacher.**

Kaya is a wellness micro-learning platform that teaches anatomy, movement, breathwork, mindfulness, and yoga through calm, intentional flashcard-based lessons. The name comes from Sanskrit *kaya* meaning "body, dimension, field, and basis."

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript 6**
- **Tailwind CSS 4**
- **Deployed on Vercel**

## Project Structure

```
app/
  page.tsx                          # Course Library (home)
  layout.tsx                        # Root layout, metadata, fonts
  globals.css                       # Design tokens, animations, all styles
  course/[slug]/
    page.tsx                        # Course Detail page
    learn/[groupId]/
      page.tsx                      # Card Session (flashcard UI)

components/
  card/
    FlashCard.tsx                   # 3D flip card wrapper
    CardFront.tsx                   # Term, brief, mnemonic, image
    CardBack.tsx                    # Tabbed deep-dive content
    CardTabs.tsx                    # Tab switcher
    CardSession.tsx                 # Full learning session w/ navigation
    FlipCue.tsx                     # Flip button pill
  library/
    CourseGrid.tsx                  # Home page course grid
    CourseTile.tsx                  # Individual course tile
    SourcesSheet.tsx                # References modal
  ui/
    BackButton.tsx                  # Navigation back button

data/
  types.ts                          # All TypeScript interfaces
  index.ts                          # Course exports & helpers
  courses/
    how-your-body-works.ts          # Level 1 — Vocabulary
    what-modern-life-does.ts        # Level 2 — Concepts
    what-your-body-needs.ts         # Level 3 — Yoga Poses
    the-practice.ts                 # Level 4 — Practice

lib/
  progress.ts                       # localStorage progress tracking
  utils.ts                          # shuffle(), cn() utilities

public/                             # Static assets
styles/                             # (unused — styles live in globals.css)
```

## Data Model

Courses contain **Groups** (thematic clusters), which contain **Cards** (flashcards with flip-to-expand content). Content progresses through three levels:

1. **Level 1 — Vocabulary**: Anatomy terms, muscle groups, movement basics
2. **Level 2 — Concepts**: Why things connect, postural patterns, dysfunction chains
3. **Level 3 — Yoga Poses**: Embodied practice with Sanskrit names, cues, modifications

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
