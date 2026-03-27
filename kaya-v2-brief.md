# Kaya — Comprehensive V2 Brief
## For Claude Code

---

## What Kaya Is

Kaya is a wellness micro-learning platform organized as a library of courses. Each course teaches a topic through a three-level progressive curriculum. The name comes from the Sanskrit word *kāya* — meaning "body, dimension, field, and basis."

The design language is dark forest (deep charcoal greens), DM Mono for display/headings/UI labels, DM Sans light for body text, glassmorphism cards, and a grain texture overlay. The ❋ symbol is Kaya's brand mark.

---

## The Three-Level Learning Structure

Every course in Kaya follows this arc:

**Level 1 — Know it**
The vocabulary. Names, locations, what individual structures do. Building the mental map. Cards are ingredient-focused — one concept, clearly explained, with a memory hook.

**Level 2 — Understand it**
The concepts. How structures connect, why patterns develop, what goes wrong and why. The "aha" layer — relational insights that make Level 1 meaningful.

**Level 3 — Practice it** *(future — do not build yet, but architect for it)*
The application. Specific yoga poses, stretches, and movement practices that embody the Level 2 concepts. Structure the data model so Level 3 cards can be added later without a refactor.

---

## Course 1: Body in Motion — Full Curriculum

This replaces the existing 33-card course entirely. The new structure has 7 Level 1 clusters and 6 Level 2 concepts.

### Level 1 Clusters

| # | Cluster ID | Label | Cards |
|---|---|---|---|
| 1 | `breath-core` | Breath & Deep Core | 6 |
| 2 | `pelvic-engine` | The Pelvic Engine | 7 |
| 3 | `spine` | The Spine | 5 |
| 4 | `posterior-chain` | The Posterior Chain | 4 |
| 5 | `shoulder-complex` | The Shoulder Complex | 5 |
| 6 | `hip-knee` | The Hip & Knee Chain | 5 |
| 7 | `movement-vocab` | Movement Vocabulary | 7 |

### Level 2 Concepts

| # | Concept ID | Label | Cards |
|---|---|---|---|
| 1 | `pelvic-tilt` | The Pelvic Tilt Problem | 3 |
| 2 | `back-line` | The Superficial Back Line | 2 |
| 3 | `crossed-syndromes` | Crossed Syndromes | 2 |
| 4 | `core-stability` | Core Stability vs. Strength | 2 |
| 5 | `kinetic-chain` | The Kinetic Chain & Injury | 2 |
| 6 | `mobility-stability` | Mobility vs. Stability | 2 |

**Full card content for all levels is in:** `kaya-curriculum-content-v1.md`
Claude Code should use that document as the source of truth for all card content — do not invent or modify content, copy it exactly into the data file.

---

## Data Architecture

### Updated TypeScript Types

```typescript
// types.ts

export type Level = 1 | 2 | 3;

export type BodyView = 'anterior' | 'posterior' | 'both';

export type MotionType =
  | 'adduction'
  | 'abduction'
  | 'flexion'
  | 'extension'
  | 'internal-rotation'
  | 'external-rotation'
  | 'anterior-tilt'
  | 'posterior-tilt';

export interface MotionArrow {
  type: MotionType;
  label: string;
}

export interface BodyMap {
  view: BodyView;
  muscleIds: string[];          // SVG path IDs from the anatomy SVG files
  motion?: MotionArrow;         // Only for movement concept cards
}

export interface CardTab {
  label: string;
  content: string | string[];   // string for prose, string[] for bullet list
}

export interface Card {
  id: string;
  term: string;
  brief: string;
  mnemonic: string;
  tabs: CardTab[];
  bodyMap?: BodyMap;            // Optional — not every card has a visual
}

export interface Group {
  id: string;
  label: string;
  subtitle: string;
  icon: string;                 // Symbol character e.g. "◎"
  accent: string;               // Hex color
  level: Level;                 // 1, 2, or 3
  cards: Card[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'available' | 'coming-soon';
  accent: string;
  groups: Group[];
}
```

### Tab Labels for Body in Motion

Level 1 cards use:
```
Details | Activates | Injury Risk
```

Level 2 cards use:
```
The Concept | Why It Matters | What To Do
```

Level 3 cards (future) will use:
```
The Pose | How It Helps | Modifications
```

---

## Visual Layer — Body Map

Each card optionally renders an "On the body" tab showing a body diagram with the relevant muscle or movement highlighted.

### SVG Files

Download and clean up both Wikimedia CC-licensed anatomical SVGs:
- Anterior view: `https://commons.wikimedia.org/wiki/File:Anterior_view_of_human_body_muscles_enko.svg`
- Posterior view: `https://commons.wikimedia.org/wiki/File:Posterior_view_of_human_body_muscles_enko.svg`

Clean up for Kaya:
- Remove all existing color fills → replace with `#1E2E28` for all muscle paths
- Remove all text labels from SVG
- Set stroke to `rgba(255,255,255,0.12)` at `0.8px` throughout
- Export as `/public/anatomy/body-anterior.svg` and `/public/anatomy/body-posterior.svg`
- After cleaning, inventory all `id` attributes on `<path>` elements and create `/data/muscleIds.ts` mapping common names to actual SVG IDs

### BodyMap Component

```
/components/card/BodyMap.tsx
```

Props:
```typescript
interface BodyMapProps {
  bodyMap: BodyMap;
  accent: string;
}
```

Behavior:
- Load anterior or posterior SVG inline using SVGR (`@svgr/webpack`)
- Apply `fill: accent` at 80% opacity + `filter: drop-shadow(0 0 5px accent)` to paths in `muscleIds`
- All other paths: `fill: #1E2E28`, `stroke: rgba(255,255,255,0.10)`
- If `motion` is present, render animated arrow overlay instead of (or in addition to) muscle highlight
- If `bodyMap` is undefined → do not render the "On the body" tab at all
- If `view === 'both'` → show anterior and posterior side by side at 50% width each

Motion arrow animation:
```css
@keyframes arrowPulse {
  0%   { opacity: 0; transform: translateX(0); }
  50%  { opacity: 1; }
  100% { opacity: 0; transform: translateX(Xpx); }
}
/* Direction and axis determined by motion.type */
/* Duration: 1.8s, ease-in-out, infinite */
```

### Three Visual Types

**Type 1 — Muscle location** (most Level 1 cards)
Highlighted muscle path(s) in accent color. Front/back toggle.

**Type 2 — Movement direction** (movement vocabulary cards)
Animated arrows showing the direction of motion. Body silhouette is neutral.

**Type 3 — System diagram** (Level 2 concept cards — v2 scope)
Custom schematic illustrations showing relationships between multiple structures. Do not build in v1. Structure the data model to support a `diagram` field on cards for future use.

---

## Course Page — Updated Structure

The course page (`/course/[slug]`) now needs to show two distinct sections:

```
Body in Motion
Muscle & Joint Anatomy

Muscles, joints, and movement patterns —
anatomy turned into understanding.

────────────────────────────────

Level 1 — The Ingredients
[group rows — all unlocked]

Level 2 — The Concepts
[concept rows — all unlocked]

────────────────────────────────
```

Each row: icon + label + card count + `→` (incomplete) or `❋` (complete).
Both levels are unlocked immediately. No sequential gating.

Level headers use DM Mono, small, tracked, muted — like a section divider, not a heading.

---

## Card Session — Updated Behavior

### Tab count varies by card

Level 1 cards: 3 tabs (Details, Activates, Injury Risk)
Level 2 cards: 3 tabs (The Concept, Why It Matters, What To Do)
Cards with `bodyMap`: +1 tab (On the body) — always the last tab

### Back button label

Change `← Modules` to `← {course.title}` — e.g. `← Body in Motion`

### Completion

On the final card, the Next button reads `Complete ❋`.
Tapping it marks the group complete in localStorage and navigates back to the course page.
No completion screen — the ❋ appearing on the group row is the reward.

---

## File Structure

```
/app
  /page.tsx                                    ← Course library (home)
  /course/[slug]/page.tsx                      ← Course page (groups + level sections)
  /course/[slug]/learn/[groupId]/page.tsx      ← Card session

/components
  /library
    CourseGrid.tsx
    CourseTile.tsx
  /course
    CourseHero.tsx
    LevelSection.tsx                           ← NEW: renders "Level 1 — The Ingredients" header + rows
    GroupRow.tsx                               ← tappable row with icon, label, count, status
  /card
    FlashCard.tsx
    CardFront.tsx
    CardBack.tsx
    CardTabs.tsx
    BodyMap.tsx                                ← NEW
    BodyMapArrow.tsx                           ← NEW: motion arrow overlay
  /ui
    ProgressBar.tsx
    BackButton.tsx

/data
  types.ts                                     ← Updated with Level, BodyMap, MotionArrow types
  muscleIds.ts                                 ← NEW: maps common muscle names to SVG path IDs
  /courses
    body-in-motion.ts                          ← Full curriculum from kaya-curriculum-content-v1.md
    breathwork.ts                              ← Placeholder shape only
    mindfulness.ts                             ← Placeholder shape only
    yoga-sanskrit.ts                           ← Placeholder shape only
  index.ts

/lib
  progress.ts                                  ← localStorage: completed groups per course
  utils.ts

/public
  /anatomy
    body-anterior.svg                          ← Cleaned up, no labels, dark base fill
    body-posterior.svg

/styles
  globals.css                                  ← Updated with DM Mono + DM Sans + dark palette
```

---

## Design Tokens (from globals.css)

```css
:root {
  --font-mono: 'DM Mono', 'Courier New', monospace;
  --font-sans: 'DM Sans', system-ui, sans-serif;

  --bg-base: #1A2420;
  --bg-mid:  #151D1A;
  --bg-deep: #101612;

  --text-primary:   #E8EDE8;
  --text-secondary: #B8C8B8;
  --text-muted:     #6E8870;
  --text-faint:     #3E5240;

  --card-bg:     rgba(255, 255, 255, 0.06);
  --card-border: rgba(255, 255, 255, 0.10);
  --card-radius: 24px;
  --card-shadow: 0 8px 40px rgba(0,0,0,0.40), 0 2px 8px rgba(0,0,0,0.25);

  /* Course accents */
  --accent-body:        #4AADA8;
  --accent-breathwork:  #6B8FBF;
  --accent-mindfulness: #7BA688;
  --accent-yoga:        #7B8FBF;

  /* Level 1 cluster accents — Body in Motion */
  --accent-breath-core:     #4AADA8;
  --accent-pelvic-engine:   #7BA688;
  --accent-spine:           #6B8FBF;
  --accent-posterior-chain: #5A8FAA;
  --accent-shoulder:        #7B8FBF;
  --accent-hip-knee:        #8FA888;
  --accent-movement-vocab:  #A67C8A;

  /* Level 2 concept accents — slightly warmer/deeper */
  --accent-concept-1: #C4875A;
  --accent-concept-2: #4AADA8;
  --accent-concept-3: #8A6AAA;
  --accent-concept-4: #6B8FBF;
  --accent-concept-5: #5A8FAA;
  --accent-concept-6: #7BA688;
}
```

---

## Build Order

Do these in sequence. Do not skip ahead.

**Phase 1 — Foundation**
1. Update `data/types.ts` with new interfaces (Level, BodyMap, MotionArrow, updated Card/Group)
2. Update `globals.css` with DM Mono + DM Sans fonts and new color tokens
3. Verify font imports load correctly before proceeding

**Phase 2 — Content**
4. Migrate full curriculum from `kaya-curriculum-content-v1.md` into `data/courses/body-in-motion.ts`
5. Every card in the source document becomes a card object — copy content exactly, do not paraphrase
6. Add `bodyMap: undefined` as a placeholder on every card for now
7. Create placeholder files for breathwork, mindfulness, yoga-sanskrit with correct shape but no cards

**Phase 3 — Course Page**
8. Update `/course/[slug]/page.tsx` to show Level 1 and Level 2 sections with group rows
9. All rows unlocked immediately — no gating logic
10. Completed groups show `❋` in accent color; incomplete show `→`

**Phase 4 — Card Session**
11. Update card tabs to be dynamic (3 tabs for standard cards, 4 when bodyMap exists)
12. Update tab labels based on group level (Level 1 vs Level 2 labels)
13. Update back button to show course title
14. Update completion flow: last card shows `Complete ❋`, navigates back to course page on tap

**Phase 5 — Body Map**
15. Download and clean up both anatomy SVGs per spec above
16. Inventory all path IDs → create `data/muscleIds.ts`
17. Build `BodyMap.tsx` component with muscle highlighting
18. Build `BodyMapArrow.tsx` for motion animations
19. Wire up "On the body" tab conditionally where `bodyMap` exists
20. Add `bodyMap` data to the first cluster's cards (Breath & Deep Core) to test
21. Progressively add `bodyMap` data to remaining clusters

**Phase 6 — Polish & Deploy**
22. Verify grain texture, botanical watermark, glassmorphism cards all render correctly
23. Test on mobile (320px min-width) and desktop
24. Verify localStorage progress persistence across page refresh
25. Deploy to Vercel

---

## Critical Implementation Notes

**Do not regress these:**
- `backface-visibility: hidden` on both card faces — required for 3D flip
- Tab `onClick` calls `e.stopPropagation()` — prevents re-flip when switching tabs
- Flip cue pill is centered and accent-colored — not right-aligned, not gray
- Next button is always visible — not gated behind the flip
- Cards shuffle on session entry

**New things that are easy to get wrong:**
- Tab count varies per card — don't hardcode 3 tabs
- Tab labels vary by group level — don't hardcode label strings in the component, derive from group.level
- `bodyMap` is optional — always null-check before rendering the body map tab
- SVG must be inline (via SVGR), not an `<img>` tag — CSS cannot target paths inside an img
- Motion arrows are CSS animations, not JS — keep them in a CSS module or keyframe block

---

## What NOT to Build in V1

- Level 3 cards (yoga poses, stretches) — structure for it, don't build it
- System diagrams for Level 2 concept cards — add `diagram?: string` field to Card type as a placeholder
- User accounts or cross-device sync
- Spaced repetition algorithm
- Quiz mode
- CMS integration

---

## Prompt to Start Claude Code

> I'm rebuilding the Kaya wellness learning platform. I'm attaching three files:
> 1. `kaya-v2-brief.md` — the full technical and product brief
> 2. `kaya-curriculum-content-v1.md` — the complete card content for Course 1
> 3. `anatomy-flash-v2.jsx` — the original prototype for reference
>
> Before writing any code:
> 1. Read all three files completely
> 2. Confirm your understanding of the three-level structure, the updated data types, and the five-phase build order
> 3. List the five most important things to get right in this build
>
> Then begin Phase 1 only: update `data/types.ts` and `globals.css`. Show me the output before proceeding to Phase 2.
