# Kaya — Level 3 Brief
## Yoga Poses: English Primary, Sanskrit Secondary

---

## Overview

Level 3 adds yoga poses to the Kaya curriculum. Each pose is anchored to a Level 2 concept — the pose is the embodied practice of the concept.

**The key structural decision:** English name is primary (the anchor the learner already has). Sanskrit name is secondary (the discovery — what they're learning). This is the reverse of how many yoga apps approach it, and it's intentional: you come to the Sanskrit through the familiar, not confronted by it cold.

---

## Data Type Update

Add `sanskrit` as an optional field to the `Card` interface in `data/types.ts`:

```typescript
export interface Card {
  id: string;
  term: string;           // English name — e.g. "Bridge Pose"
  sanskrit?: string;      // Sanskrit name — e.g. "Setu Bandha Sarvangasana"
  brief: string;
  mnemonic: string;
  tabs: CardTab[];
  bodyMap?: BodyMap;
  diagram?: string;
}
```

Level 1 and Level 2 cards leave `sanskrit` undefined. Only Level 3 cards use it.

---

## Card Front — Visual Hierarchy

```
[Group label — small, accent color, uppercase mono]

Bridge Pose                    ← term: large, italic DM Mono, primary
Setu Bandha Sarvangasana       ← sanskrit: smaller, muted, DM Mono light

One sentence brief description.

┌─────────────────────────────────┐
│ Memory hook                     │  ← tinted block, italic DM Sans
│ How to remember the Sanskrit    │
└─────────────────────────────────┘

        ↻  Flip for deep dive      ← centered pill, accent color
```

**Typography spec for Sanskrit line:**
- Font: DM Mono, weight 300
- Size: 14px (vs ~28px for the English term)
- Color: `var(--text-muted)` — present but clearly secondary
- Letter-spacing: 0.02em
- No italic — the English term gets italic, Sanskrit is upright

---

## Card Back — Tab Structure

Level 3 cards use three tabs:

```
The Pose | How to Enter | Modifications
```

- **The Pose** — what it is anatomically, which Level 2 concept it embodies, why it works
- **How to Enter** — step-by-step with key alignment cues
- **Modifications** — how to make it more accessible or more challenging

Tab labels are distinct from Level 1 ("Details / Activates / Injury Risk") and Level 2 ("The Concept / Why It Matters / What To Do") — the component should derive tab labels from `group.level`, not hardcode them.

---

## Group Structure

Six Level 3 groups, one per Level 2 concept:

```typescript
const LEVEL3_GROUPS = [
  {
    id: 'pelvic-tilt-practice',
    label: 'Pelvic Tilt & Spinal Awareness',
    subtitle: 'Poses that develop conscious control of pelvic position',
    icon: '◎',
    accent: '#C4875A',
    level: 3,
  },
  {
    id: 'posterior-chain-practice',
    label: 'The Posterior Chain in Practice',
    subtitle: 'Poses that lengthen and integrate the back line',
    icon: '△',
    accent: '#4AADA8',
    level: 3,
  },
  {
    id: 'crossed-syndromes-practice',
    label: 'Undoing Desk Posture',
    subtitle: 'Poses that counter Upper and Lower Crossed Syndromes',
    icon: '□',
    accent: '#7B8FBF',
    level: 3,
  },
  {
    id: 'core-stability-practice',
    label: 'Core Stability in Practice',
    subtitle: 'Poses that demand deep core coordination',
    icon: '▽',
    accent: '#6B8FBF',
    level: 3,
  },
  {
    id: 'kinetic-chain-practice',
    label: 'Hip & Spinal Mobility',
    subtitle: 'Poses that restore mobility at key kinetic chain joints',
    icon: '◇',
    accent: '#5A8FAA',
    level: 3,
  },
  {
    id: 'mobility-stability-practice',
    label: 'Mobility & Stability in Practice',
    subtitle: 'Poses that train the distinction between mobile and stable joints',
    icon: '❋',
    accent: '#7BA688',
    level: 3,
  },
];
```

---

## Full Card Content

All content is in `kaya-level3-content.md`. Copy exactly — do not paraphrase.

**Mapping the content document fields to card fields:**

| Content doc field | Card field |
|---|---|
| The pose's English name | `term` |
| Sanskrit name | `sanskrit` |
| Brief sentence | `brief` |
| Memory Hook | `mnemonic` |
| The Pose section | `tabs[0].content` (label: "The Pose") |
| How to Enter section | `tabs[1].content` (label: "How to Enter") |
| Modifications section | `tabs[2].content` (label: "Modifications") |

Set `bodyMap: undefined` on all Level 3 cards for now — body map data will be added in Phase 5 along with Level 1 and 2 body maps.

---

## Course Page — Level 3 Section

The course page (`/course/body-in-motion`) already shows Level 1 and Level 2 sections. Add a Level 3 section below:

```
────────────────────────────────

Level 3 — The Practice
[group rows]
```

Same row structure as Levels 1 and 2. All rows unlocked immediately.

The level header style is already defined — use the same `LevelSection` component pattern with `level={3}` and the label "The Practice."

---

## Sanskrit Word Bank Card

Add one additional card to the last Level 3 group (`mobility-stability-practice`) as the final card:

```typescript
{
  id: 'sanskrit-word-bank',
  term: 'Sanskrit Word Bank',
  sanskrit: undefined,
  brief: 'The building blocks of Sanskrit pose names — learn these and you can decode any asana.',
  mnemonic: 'Sanskrit names are compounds. Break them apart and they tell you exactly what the pose is. ADHO = down. MUKHA = face. SVANA = dog. Put them together: face-down dog.',
  tabs: [
    {
      label: 'The Words',
      content: [
        'Asana — pose / seat (all poses)',
        'Adho — downward',
        'Ardha — half',
        'Bhujanga — cobra / serpent',
        'Eka — one',
        'Kapota — pigeon',
        'Kona — angle',
        'Marjary — cat',
        'Matsya — fish',
        'Mukha — face / mouth',
        'Nava — boat',
        'Pada — foot / leg',
        'Parivrtta — revolved / twisted',
        'Paschima — west / back of body',
        'Phalaka — plank / board',
        'Raja — king',
        'Salamba — supported / with support',
        'Setu — bridge',
        'Svana — dog',
        'Tri — three',
        'Uttana — intense stretch',
        'Viparita — inverted / reversed',
        'Virabhadra — warrior (Shiva\'s hero)',
      ]
    },
    {
      label: 'How to Use',
      content: 'Every Sanskrit pose name is a compound of these roots. Paschimottanasana = Paschima (west/back body) + Uttana (intense stretch) + Asana (pose) = Intense stretch of the back of the body. Once you know the roots, you can decode any pose name you encounter — in class, in texts, or in practice.'
    },
    {
      label: 'Why It Matters',
      content: 'Sanskrit is the language of the yoga tradition. Learning the names connects you to thousands of years of embodied knowledge. The names aren\'t arbitrary labels — they describe the pose\'s shape, its action, or its mythological origin. Understanding them transforms yoga from a physical exercise into a living lineage.'
    }
  ],
  bodyMap: undefined,
}
```

---

## Component Updates Needed

**`CardFront.tsx`** — add Sanskrit line below the term:

```tsx
<h2 className="card-term">{card.term}</h2>
{card.sanskrit && (
  <p className="card-sanskrit">{card.sanskrit}</p>
)}
```

CSS for `.card-sanskrit`:
```css
.card-sanskrit {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 300;
  color: var(--text-muted);
  letter-spacing: 0.02em;
  margin: -8px 0 16px;  /* tucks up under the term */
  font-style: normal;   /* English term is italic, Sanskrit is upright */
}
```

**`CardBack.tsx` / `CardTabs.tsx`** — tab labels already derive from `group.level`. Confirm the Level 3 case returns `["The Pose", "How to Enter", "Modifications"]`. If using a switch or lookup, add:

```typescript
case 3:
  return ['The Pose', 'How to Enter', 'Modifications'];
```

---

## Build Order for Level 3

1. Update `data/types.ts` — add `sanskrit?: string` to `Card` interface
2. Create `data/courses/body-in-motion-level3.ts` with all 19 pose cards + Sanskrit word bank card organized into 6 groups
3. Import and merge Level 3 groups into the main `body-in-motion` course in `data/index.ts`
4. Update `CardFront.tsx` to render the Sanskrit line when present
5. Confirm `CardTabs.tsx` handles `level: 3` tab labels
6. Confirm course page renders the "Level 3 — The Practice" section
7. Run `tsc --noEmit` — zero errors before reporting back

---

## What NOT to Change

- Level 1 and Level 2 card components, data, or content
- The flip mechanic, progress tracking, or completion flow
- Design tokens, fonts, or color palette
- Anything currently working in the deployed build
