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