export type Level = 1 | 2 | 3;

export type BodyView = "anterior" | "posterior" | "both";

export type MotionType =
  | "adduction"
  | "abduction"
  | "flexion"
  | "extension"
  | "internal-rotation"
  | "external-rotation"
  | "anterior-tilt"
  | "posterior-tilt";

export interface MotionArrow {
  type: MotionType;
  label: string;
}

export interface MuscleHighlight {
  muscle: string;
  color?: string;    // defaults to group accent
  opacity?: number;  // defaults to 0.8
}

export interface ChainLine {
  points: { x: number; y: number }[];
  animated?: boolean;
}

export interface BodyMap {
  view: BodyView;
  muscles: MuscleHighlight[];
  chain?: ChainLine;
  motion?: MotionArrow;
}

export interface CardTab {
  label: string;
  content: string | string[];
}

export interface Card {
  id: string;
  term: string;
  sanskrit?: string;
  brief: string;
  mnemonic: string;
  tabs: CardTab[];
  bodyMap?: BodyMap;
  diagram?: string;
}

export interface Group {
  id: string;
  label: string;
  subtitle: string;
  icon: string;
  accent: string;
  level: Level;
  cards: Card[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: "available" | "coming-soon";
  accent: string;
  groups: Group[];
}

export interface ProgressStore {
  completedGroups: Record<string, string[]>;
}
