export interface Card {
  term: string;
  brief: string;
  mnemonic: string;
  tabs: {
    label: string;
    content: string | string[];
  }[];
}

export interface Group {
  id: string;
  label: string;
  subtitle: string;
  icon: string;
  accent: string;
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
