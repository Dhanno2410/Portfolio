
import type { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface AcademicProject {
    title: string;
    objective: string;
    roleAndContribution: string[];
    technologies: string[];
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
    name: string;
    skills: Skill[];
}

export interface Achievement {
    title: string;
    description: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
}

export interface NavLink {
    name: string;
    href: string;
}

export interface Message {
    sender: 'user' | 'bot';
    text: ReactNode;
}
