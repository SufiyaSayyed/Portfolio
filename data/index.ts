import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Paperlytic AI",
    subtitle:
      "End-to-end research analysis system using FastAPI, Gemini, Pinecone, and MongoDB — enabling semantic search and live AI summaries for uploaded papers.",
    tags: ["AI Agent", "Full Stack", "FastAPI", "React"],
    image: "/project-ai-research.png",
    size: "large",
    accentColor: "accent",
    link: "https://github.com/SufiyaSayyed/AI-Research-Paper-Summarizer-and-Critque.git"
  },
  {
    title: "AI ResuMate",
    subtitle:
      "An LLM-powered job matcher analyzing resumes for ATS compatibility, skill gaps, and keyword optimization with interactive dashboards.",
    tags: ["LLM", "AI", "React", "Puter.js"],
    image: "/project-ai-resumate.png",
    size: "medium",
    accentColor: "accent",
    link: "https://ai-resumate.netlify.app/"
  },
  {
    title: "FableAI",
    subtitle:
      "Scalable production-ready React app using Bria.ai APIs for fast, high-quality AI image generation and editing to accelerate marketing workflows.",
    tags: ["AI", "Generative", "React", "Bria.ai"],
    image: "/project-ai-fable-1.png",
    size: "medium",
    accentColor: "accent",
    link: "https://fableai.netlify.app/"
  },
];
