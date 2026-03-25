# Kaya — Claude Code Project Brief
## Wellness Micro-Learning Platform

---

## What We're Building

**Kaya** is a wellness micro-learning platform — a curated library of short, deep, beautifully designed learning courses centered on the body and mind. The name comes from the Sanskrit word *kāya*, meaning "body" but also "dimension, field, and basis" — the body as the ground from which understanding grows.

The experience is calm, intentional, and contemplative. Not gamified. Not rushed. The design language is warm, earthy, and refined — closer to a beautiful book than a flashcard app.

Each **course** is a self-contained learning module on a specific topic. Within each course are **groups** (thematic clusters of cards), and within each group are **cards** (individual concepts). Each card has two sides: a front that introduces the concept with a brief description and memory hook, and a back with tabbed deep-dive content.

A working prototype of Course 1 exists in `anatomy-flash-v2.jsx`. Claude Code should treat this as the **design reference and content source**, not the final architecture. Extract, separate, and elevate it.

---

## The Course Library (Current + Planned)

### ✦ Course 1 — Body in Motion *(build this first, content exists)*
Muscle and joint anatomy for a general fitness and yoga audience.
- 5 groups: Movement Fundamentals, Upper Body, Core & Spine, Lower Body, Joints & Connective Tissue
- 33 cards total
- Groups unlock sequentially

### ✦ Course 2 — Breathwork *(design for, don't build yet)*
Breathing techniques and their physiological effects.
- Planned groups: Foundations, Nervous System, Techniques, Advanced Practice

### ✦ Course 3 — Mindfulness *(design for, don't build yet)*
Mindfulness terms, techniques, and principles.
- Planned groups: Core Concepts, Meditation Practices, The Mind, Applied Mindfulness

### ✦ Course 4 — Yoga Sanskrit *(design for, don't build yet)*
Learning the Sanskrit names of yoga poses and their meanings.
- Planned groups: Standing Poses, Seated Poses, Inversions, Backbends, Restorative

---

## Information Architecture

```
Home (Course Library)
  └── Course Detail Page
        └── Module Map (groups within the course)
              └── Card Session
                    └── Completion Screen
```

### Home — Course Library
- Grid or stack of course tiles
- Each tile shows: course name, subtitle, number of groups, number of cards, completion state
- Course 1 is unlocked. Courses 2–4 show as "Coming Soon" — visible but not tappable
- Warm, editorial feel — not a dashboard

### Course Detail Page
- Full-bleed header with course name, Sanskrit/conceptual subtitle, and a one-paragraph description of what you'll learn and why it matters
- List of groups with card counts — a preview of what's inside
- Single CTA: "Begin" or "Continue" depending on progress state
- This page makes the course feel like something worth committing to

### Module Map
- The 5 groups shown as tiles with locked/unlocked/complete states
- Sequential unlock: complete one group to unlock the next
- Progress dots at the top showing overall course completion
- This is the existing prototype screen — preserve the design

### Card Session
- Progress bar at top
- 3D flip card: front introduces concept, back has deep-dive tabs
- "Next" button always visible below the card — not gated behind the flip
- Tap card anywhere to flip

### Card Front
- Module label (small, accent color, uppercase)
- Term (large, italic serif)
- Brief one-sentence description
- Memory hook block (tinted, italic)
- Centered "Flip for deep dive" pill button (accent colored, always visible)

### Card Back
- Three tabs: Details / Activates / Injury Risk (course-specific tab labels — see below)
- Tab content in readable prose
- "Flip back" cue bottom right

### Completion Screen
- Per-group completion: celebratory but calm
- Shows cards reviewed, CTA to continue to next group or return to module map

---

## Tab Labels by Course

Tabs on the card back should be contextual to the course:

| Course | Tab 1 | Tab 2 | Tab 3 |
|---|---|---|---|
| Body in Motion | Details | Activates | Injury Risk |
| Breathwork | How It Works | How To Practice | Benefits |
| Mindfulness | Details | How To Practice | Research |
| Yoga Sanskrit | Meaning | How To Enter | Modifications |

---

## Data Architecture

```typescript
// types.ts

export interface Card {
  term: string;
  brief: string;
  mnemonic: string;
  tabs: {
    label: string;      // contextual per course
    content: string | string[];  // string for prose, string[] for bullet list
  }[];
}

export interface Group {
  id: string;
  label: string;
  subtitle: string;
  icon: string;         // symbol character
  accent: string;       // hex
  cards: Card[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;        // e.g. "Muscle & Joint Anatomy"
  description: string;     // one paragraph shown on Course Detail page
  status: 'available' | 'coming-soon';
  accent: string;          // primary course color
  groups: Group[];
}
```

---

## Project Structure

```
/app
  /page.tsx                          ← Course Library (home)
  /course/[slug]/page.tsx            ← Course Detail page
  /course/[slug]/learn/page.tsx      ← Module Map
  /course/[slug]/learn/[groupId]/page.tsx  ← Card Session
  /layout.tsx                        ← Global layout, fonts, metadata, grain texture

/components
  /library
    CourseGrid.tsx                   ← Home course tile grid
    CourseTile.tsx                   ← Individual course tile (available/coming-soon)
  /course
    CourseHero.tsx                   ← Course detail header
    CourseDescription.tsx            ← About this course
    GroupPreviewList.tsx             ← Preview of groups before starting
  /learn
    ModuleMap.tsx                    ← Group unlock grid
    ModuleTile.tsx                   ← Individual group tile (locked/unlocked/complete)
    ProgressDots.tsx                 ← Course-level progress indicator
  /card
    FlashCard.tsx                    ← 3D flip card wrapper
    CardFront.tsx                    ← Term + brief + mnemonic + flip cue
    CardBack.tsx                     ← Tabbed detail panel
    CardTabs.tsx                     ← Tab switcher component
    FlipCue.tsx                      ← The centered pill button ("Flip for deep dive")
  /ui
    ProgressBar.tsx                  ← Thin top-of-session progress bar
    CompletionScreen.tsx             ← End-of-group screen
    BackButton.tsx                   ← Consistent back navigation

/data
  /courses
    body-in-motion.ts                ← All 33 cards, 5 groups
    breathwork.ts                    ← Placeholder structure only
    mindfulness.ts                   ← Placeholder structure only
    yoga-sanskrit.ts                 ← Placeholder structure only
  index.ts                           ← Exports all courses as COURSES array
  types.ts                           ← All TypeScript interfaces

/lib
  /progress.ts                       ← localStorage: completed groups, courses
  /utils.ts                          ← shuffle(), cn(), etc.

/styles
  globals.css                        ← CSS custom properties (design tokens)
  typography.css                     ← Font imports and type scale

/public
  /fonts                             ← Self-hosted Lora (if not using Google Fonts CDN)
```

---

## Design System

### Color Tokens
```css
:root {
  /* Backgrounds */
  --bg-base:    #F7F0E6;
  --bg-mid:     #EDE3D4;
  --bg-deep:    #E0D4C0;

  /* Text */
  --text-primary:   #2A1F18;
  --text-secondary: #4A3828;
  --text-muted:     #9A8A7A;
  --text-faint:     #C8B8A8;

  /* Card */
  --card-bg:       rgba(255, 255, 255, 0.72);
  --card-border:   rgba(255, 255, 255, 0.92);
  --card-radius:   24px;
  --card-shadow:   0 8px 40px rgba(80, 60, 40, 0.10),
                   0 2px 8px rgba(80, 60, 40, 0.06);

  /* Course accent colors */
  --accent-body:        #C17B4E;   /* Body in Motion — warm terracotta */
  --accent-breathwork:  #5A7A8A;   /* Breathwork — slate blue */
  --accent-mindfulness: #6B8F5E;   /* Mindfulness — sage */
  --accent-yoga:        #8A6AAA;   /* Yoga Sanskrit — soft violet */

  /* Group accent colors within Body in Motion */
  --accent-movement:  #C17B4E;
  --accent-upper:     #4E7FA6;
  --accent-core:      #6B8F5E;
  --accent-lower:     #8A5E8A;
  --accent-joints:    #A67C52;
}
```

### Typography
```css
/* Display / body text */
font-family: 'Lora', 'Palatino Linotype', Georgia, serif;

/* UI labels, tabs, metadata */
font-family: system-ui, -apple-system, sans-serif;
```

Use **Lora** from Google Fonts (`next/font/google`) as the primary serif — it's a close match to Palatino, web-safe, and self-hostable. Swap Palatino references from the prototype to Lora.

### Grain Texture
Apply globally via a fixed `::before` pseudo-element on `<body>` or a fixed `<div>` overlay:
```css
background-image: url("data:image/svg+xml,..."); /* inline SVG noise */
opacity: 0.5;
pointer-events: none;
position: fixed;
inset: 0;
z-index: 0;
```

### Botanical Watermark
The `❋` character, bottom-right, `font-size: 280px`, `opacity: 0.025`. Keep it. It's a subtle but memorable design detail.

---

## Page-by-Page Design Notes

### Home — Course Library
- The Kaya wordmark at top: italic Lora, ~38px, color `--text-primary`
- Tagline beneath: `"The body as teacher."` or similar — small, spaced caps, muted
- Course tiles in a single column (mobile-first), 2-col on wider screens
- Coming Soon tiles: same visual weight as available ones but desaturated and marked clearly — not hidden
- The Coming Soon tiles make the platform feel like a growing library from day one

### Course Detail Page
- This page should feel like the inside cover of a book — considered and inviting
- Course title large and italic
- Subtitle in small caps
- Description paragraph in Lora, comfortable reading width (~60ch max)
- Group preview as a simple list — icon, name, card count
- "Begin Course" CTA as a full-width pill button in course accent color

### Card Session
- Max-width: 520px, centered
- Card min-height: 340px front, 420px back
- The card flip is CSS 3D — `rotateY(180deg)`, `perspective: 1400px`, `transform-style: preserve-3d`, `backface-visibility: hidden` on both faces
- Flip easing: `0.65s cubic-bezier(0.35, 0, 0.2, 1)`
- **The FlipCue pill must be centered and accent-colored** — this was a specific fix in the prototype, do not regress it
- Tab `onClick` must call `e.stopPropagation()` — without this, clicking a tab re-flips the card

---

## Routing & Navigation

```
/                                    ← Course Library
/course/body-in-motion               ← Course Detail: Body in Motion
/course/body-in-motion/learn         ← Module Map
/course/body-in-motion/learn/upper   ← Card Session: Upper Body group
```

Use Next.js App Router. Dynamic segments: `[slug]` for course, `[groupId]` for group.

---

## Progress Persistence (v1)

Store in `localStorage` as JSON:

```typescript
interface ProgressStore {
  completedGroups: Record<string, string[]>;
  // e.g. { "body-in-motion": ["movement", "upper"] }
}
```

- Read on mount, write on group completion
- Used to determine locked/unlocked/complete state on Module Map
- Used to show "Continue" vs "Begin" on Course Detail page
- No auth required in v1 — single device only

---

## SEO & Metadata

```typescript
// app/layout.tsx
export const metadata = {
  title: 'Kaya — Wellness Micro-Learning',
  description: 'Deep, calm, beautifully designed courses on anatomy, breathwork, mindfulness, and yoga.',
}

// Per course page
export const metadata = {
  title: `${course.title} — Kaya`,
  description: course.description,
}
```

---

## v1 Scope — Build This

- [ ] Next.js App Router project setup with Lora font, CSS tokens, grain texture
- [ ] Course Library home page with all 4 courses (1 available, 3 coming soon)
- [ ] Course Detail page for Body in Motion
- [ ] Module Map with sequential unlock logic
- [ ] Card Session with 3D flip, tabbed back, Next button
- [ ] Completion screen per group
- [ ] localStorage progress persistence
- [ ] All 33 cards from `anatomy-flash-v2.jsx` migrated to typed data file
- [ ] Placeholder data files for courses 2–4 (correct TypeScript shape, no card content yet)
- [ ] Responsive: mobile-first, comfortable on desktop, max-width 520px for card container
- [ ] Deployed to Vercel

## v2 Backlog — Don't Build Yet

- [ ] Course 2: Breathwork (content to be provided)
- [ ] Course 3: Mindfulness (content to be provided)
- [ ] Course 4: Yoga Sanskrit (content to be provided)
- [ ] Spaced repetition: cards marked "still learning" resurface in a review session
- [ ] User accounts + cross-device progress sync (Supabase)
- [ ] Anatomical illustrations / diagrams alongside card text
- [ ] Quiz mode layered on top of flashcard content
- [ ] Daily streak and learning habit tracker
- [ ] CMS-backed card content (Sanity or Contentful) for non-developer content editing

---

## Handoff Notes

**Start here:**
1. Read `anatomy-flash-v2.jsx` fully before writing any code
2. Set up the Next.js project and design system tokens first
3. Migrate card content to `body-in-motion.ts` with correct TypeScript types
4. Build components bottom-up: Card → CardSession → ModuleMap → CourseDetail → Home

**Critical implementation details — do not lose these:**
- `backface-visibility: hidden` on both card faces is required for the 3D flip to work correctly
- Tab `stopPropagation` on the card back prevents re-flip when switching tabs
- The FlipCue pill on the card front must be **centered** and **accent-colored** — not right-aligned, not gray
- The "Next" button is always visible — it is not gated behind the flip action
- Cards shuffle on each session entry (`[...arr].sort(() => Math.random() - 0.5)`)
- Group unlock is sequential — a group is locked unless the previous group's ID appears in `completedGroups`

**Aesthetic details to preserve:**
- Grain texture overlay (fixed, full-screen, `opacity: 0.5`, `pointer-events: none`)
- Botanical watermark (`❋`, bottom-right, very faint)
- Glassmorphism cards: `backdrop-filter: blur(14px)`, semi-transparent white background
- Lora italic for all display headings and card terms
- System sans-serif for all UI labels, tabs, metadata
- Warm parchment gradient background — never pure white, never gray
