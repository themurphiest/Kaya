export type Level = 1 | 2 | 3;

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
  image?: string;
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
