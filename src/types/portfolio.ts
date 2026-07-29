export type ProjectCategory = 'ai' | 'fullstack' | 'cloud' | 'iot';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  fullDetails?: string;
  stack: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; icon?: string; hot?: boolean }[];
}

export interface ExpertiseCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  subtext: string;
}

export interface ExperienceItem {
  year: string;
  title: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
  type: 'academic' | 'project' | 'internship' | 'learning' | 'future';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  icon: string;
}
