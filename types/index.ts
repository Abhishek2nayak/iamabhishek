export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
