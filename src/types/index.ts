export interface NavLink {
    name: string;
    href: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    sourceUrl?: string;
  }
  
  export interface Skill {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    level: number;
    category: 'frontend' | 'backend' | 'design' | 'other';
  }
  
  export interface Experience {
    id: number;
    role: string;
    company: string;
    duration: string;
    description: string[];
  }
  
  export interface Education {
    id: number;
    degree: string;
    school: string;
    duration: string;
    description: string;
  }
  
  export type SectionName = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';