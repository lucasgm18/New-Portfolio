export interface LocalizedText {
  pt: string;
  en: string;
}

export interface LocalizedStringArray {
  pt: string[];
  en: string[];
}

export interface ProjectCaseStudy {
  context: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  architectureDecisions: LocalizedStringArray;
  keyFeatures: LocalizedStringArray;
  resultsAndMetrics: LocalizedText;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface Project {
  id: string;
  number: string;
  title: string; // Keeps untranslated project name e.g. "Lucas Caixa Tech Trainer", "Tower of Lucas"
  subtitle: LocalizedText;
  category: LocalizedText;
  shortDescription: LocalizedText;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string; // Optional live link. MUST NOT exist for Tower of Lucas!
  isLiveAvailable: boolean;
  featuredImage: string;
  mockupType: 'browser' | 'dashboard' | 'mobile' | 'code';
  metricsHighlight?: LocalizedText;
  caseStudy: ProjectCaseStudy;
}

export interface SkillCategory {
  title: LocalizedText;
  description: LocalizedText;
  skills: {
    name: string;
    levelTag?: 'Core' | 'Advanced' | 'Ecosystem' | 'Tools';
  }[];
}

export interface TechnicalPrinciple {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface DeveloperBio {
  name: string;
  role: LocalizedText;
  tagline: LocalizedText;
  heroHeadline: LocalizedText;
  heroSubtext: LocalizedText;
  status: {
    available: boolean;
    label: LocalizedText;
  };
  location: LocalizedText;
  email: string;
  github: string;
  linkedin: string;
  aboutText: LocalizedStringArray;
  principles: TechnicalPrinciple[];
}
