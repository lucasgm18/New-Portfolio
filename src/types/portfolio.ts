export interface LocalizedText {
  pt: string;
  en: string;
}

export interface LocalizedStringArray {
  pt: string[];
  en: string[];
}

export interface TechnicalPrinciple {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface DeveloperProfile {
  name: string;
  role: LocalizedText;
  positioning: LocalizedText;
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

export interface ExperienceItem {
  id: string;
  role: LocalizedText;
  companyType: LocalizedText;
  description: LocalizedText;
  scope: LocalizedStringArray;
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degreeType: LocalizedText;
  field: LocalizedText;
  status: LocalizedText;
  isCurrent?: boolean;
}

export interface SkillCategory {
  id: string;
  title: LocalizedText;
  skills: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: LocalizedText;
  category: LocalizedText;
  shortDescription: LocalizedText;
  keyFeatures: LocalizedStringArray;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string; // Strictly omitted for Tower of Lucas!
  isLiveAvailable: boolean;
}
