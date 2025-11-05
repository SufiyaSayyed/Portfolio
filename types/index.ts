export interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  size: "large" | "medium" | "small";
  accentColor: string;
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[]
}

export interface SkillsCategory {
  title: string;
  skills: Skill[]
}

export interface Skill {
  name: string;
  description: string;
  icon: string
}