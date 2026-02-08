export interface PinnedRepo {
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  repositoryTopics: string[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  type: "work" | "education" | "project" | "learning";
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
