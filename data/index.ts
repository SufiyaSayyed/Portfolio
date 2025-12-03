import { Experience, Project, SkillsCategory, SocialLinks } from "@/types";

export const navItems = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Contact" },
];

export const typeWriterLine = [
  {
    text: "Hi, ",
    className: "text-foreground text-3xl md:text-6xl font-medium",
  },
  {
    text: "I'm ",
    className: "text-foreground text-3xl md:text-6xl font-medium",
  },
  {
    text: "Sufiya ",
    className: "text-primary text-3xl md:text-6xl font-semibold",
  },
  {
    text: "Sayyed",
    className: "text-primary text-3xl md:text-6xl font-semibold",
  },
];

export const projects: Project[] = [
  {
    title: "Paperlytic AI",
    subtitle:
      "End-to-end app designed to help users summarize, analyze, and critique academic research papers.",
    tags: ["AI Summarization", "Knowledge Extraction", "AI Analysis"],
    image: "/project-ai-research.png",
    size: "large",
    accentColor: "accent",
    link: "https://github.com/SufiyaSayyed/AI-Research-Paper-Summarizer-and-Critque.git",
  },
  {
    title: "ImagineAI",
    subtitle:
      "An AI tool to generate images with prompts and other features to produce high-quality visuals tailored for marketing needs.",
    tags: ["Image Generation", "Visual Creation", "AI Editing"],
    image: "/project-ai-fable-1.png",
    size: "medium",
    accentColor: "accent",
    link: "https://fableai.netlify.app/",
  }, 
  {
    title: "AI ResuMate",
    subtitle:
      "An AI-powered Resume Analyzer that evaluates the resume against key metrics and provides an AI-generated feedback score.",
    tags: ["Resume Analysis", "AI Feedback", "Scoring", "Evaluation"],
    image: "/project-ai-resumate.png",
    size: "medium",
    accentColor: "accent",
    link: "https://ai-resumate.netlify.app/",
  },
];

export const experiences: Experience[] = [
  {
    company: "Bajaj Finserv",
    role: "Software Engineer",
    duration: "July 2023 - April 2025",
    description: [
      "Integrated GenAI backend with role-based chat UI, enabling intelligent HR queries and enhancing operational efficiency.",
      "Optimized UI using MVC/MVVM, stratergy, template patterns to enhance speed and performance.",
      "Migrated Android modules to PWAs with offline caching, improving load time by 45% and reliability.",
    ],
  },
  {
    company: "Bajaj Finserv",
    role: "Byte Intern",
    duration: "Jan 2023 - June 2023",
    description: [
      "Contributed to PWA applications using Angular and Java/Kotlin for onboarding and lead management.",
      "Integrated frontend with backend APIs ensuring secure data flow while optimizing UI performance.",
    ],
  },
  {
    company: "Avon Building Solutions pvt. ltd.",
    role: "Intern",
    duration: "Feb 2022 - May 2022",
    description: [
      "Developed ERP software and deployed it to cloud infrastructure (Digital Ocean), managing server provisioning and monitoring pipelines.",
    ],
  },
];

export const skillsCategory: SkillsCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        description: "For building fast, interactive UIs",
        icon: "/react.svg",
      },
      {
        name: "Angular",
        description: "For scalable, enterprise-grade web apps",
        icon: "/angular.svg",
      },
      {
        name: "Tailwind CSS",
        description: "For rapid, utility-first UI styling",
        icon: "/tailwind.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "FastAPI",
        description: "For high-performance Python APIs",
        icon: "/fastapi.svg",
      },
      {
        name: "Langchain",
        description: "For building LLM-powered applications",
        icon: "/langchain.svg",
      },
      {
        name: "MongoDB",
        description: "For flexible, document-based databases",
        icon: "/mongodb.svg",
      },
    ],
  },
  {
    title: "Languages",
    skills: [
      {
        name: "Typescript",
        description: "For scalable, type-safe JavaScript code",
        icon: "/typescript.svg",
      },
      {
        name: "Python",
        description: "For versatile scripting and data tasks",
        icon: "/python.svg",
      },
      {
        name: "HTML & CSS",
        description: "For creating and styling web pages",
        icon: "/htmlcss.svg",
      },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      {
        name: "Git & Github",
        description: "For version control and collaboration",
        icon: "/github.svg",
      },
      {
        name: "Docker",
        description: "For containerized app deployment",
        icon: "/docker.svg",
      },
    ],
  },
];

export const socialLinks: SocialLinks[] = [
  {
    icon: "/linkedin-icon.svg",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sufiya-sayyed-737534205/",
  },
  {
    icon: "/github-icon.svg",
    label: "GitHub",
    href: "https://github.com/SufiyaSayyed",
  },
  {
    icon: "/mail-icon.svg",
    label: "Email",
    href: "mailto:ssayyed01@gmail.com",
  },
];

export const ResumeLink: string =
  "https://drive.google.com/file/d/1RoHvpluZWKIkAw8pnUipYJhGunWeXVzU/view?usp=sharing";
