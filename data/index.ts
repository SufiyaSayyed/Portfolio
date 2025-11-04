import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "AI Research Paper Summarizer & Analyzer",
    subtitle:
      "End-to-end research analysis system using FastAPI, Gemini, Pinecone, and MongoDB — enabling semantic search and live AI summaries for uploaded papers.",
    tags: ["AI Agent", "Full Stack", "FastAPI", "React"],
    image: "/project-ai-research.jpg",
    size: "large",
    accentColor: "accent",
  },
  {
    title: "AI Resume & Job Match App",
    subtitle:
      "An LLM-powered job matcher analyzing resumes for ATS compatibility, skill gaps, and keyword optimization with interactive dashboards.",
    tags: ["LLM", "AI", "React", "Puter.js"],
    image: "/project-ai-research.png",
    size: "medium",
    accentColor: "accent",
  },
  {
    title: "AI Image Generation & Editing App",
    subtitle:
      "Scalable production-ready React app using Bria.ai APIs for fast, high-quality AI image generation and editing to accelerate marketing workflows.",
    tags: ["AI", "Generative", "React", "Bria.ai"],
    image: "/project-ai-research.png",
    size: "medium",
    accentColor: "accent",
  },
];
