"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  size: 'large' | 'medium' | 'small';
  accentColor: string;
}

const projects: Project[] = [
  {
    title: "AI Research Paper Summarizer & Analyzer",
    subtitle: "End-to-end research analysis system using FastAPI, Gemini, Pinecone, and MongoDB — enabling semantic search and live AI summaries for uploaded papers.",
    tags: ["AI Agent", "Full Stack", "FastAPI", "React"],
    size: "large",
    accentColor: "accent",
  },
  {
    title: "AI Resume & Job Match App",
    subtitle: "An LLM-powered job matcher analyzing resumes for ATS compatibility, skill gaps, and keyword optimization with interactive dashboards.",
    tags: ["LLM", "AI", "React", "Puter.js"],
    size: "medium",
    accentColor: "accent",
  },
  {
    title: "AI Image Generation & Editing App",
    subtitle: "Scalable production-ready React app using Bria.ai APIs for fast, high-quality AI image generation and editing to accelerate marketing workflows.",
    tags: ["AI", "Generative", "React", "Bria.ai"],
    size: "medium",
    accentColor: "accent",
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const sizeClasses = {
    large: "col-span-1 md:col-span-2 row-span-1",
    medium: "col-span-1 md:col-span-1 row-span-1",
    small: "col-span-1 row-span-1"
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`${sizeClasses[project.size]} group relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full w-full"
      >
        <div className="
          relative h-full w-full rounded-xl p-6 md:p-8
          bg-card border border-border
          overflow-hidden
          transition-all duration-300
          group-hover:border-primary/50
          group-hover:shadow-lg
        ">
          {/* Animated accent line on hover */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              transformOrigin: 'left'
            }}
            className={project.accentColor === 'chart-1' ? 'bg-chart-1' : project.accentColor === 'chart-3' ? 'bg-chart-3' : 'bg-accent'}
          />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="space-y-3 md:space-y-4">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300"
              >
                {project.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-4"
              >
                {project.subtitle}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex flex-wrap gap-2 mt-4"
            >
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + index * 0.1 + tagIndex * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`
                    px-4 py-2 rounded-full text-xs md:text-sm font-semibold
                    ${project.accentColor === 'chart-1' 
                      ? 'bg-chart-1/20 text-chart-1 border-chart-1/40' 
                      : project.accentColor === 'chart-3'
                      ? 'bg-chart-3/20 text-chart-3 border-chart-3/40'
                      : 'bg-accent/20 text-accent border-accent/40'
                    }
                    border shadow-sm
                    group-hover:shadow-md
                    transition-all duration-300
                  `}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Hover indicator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
              className="absolute bottom-6 right-6 flex items-center gap-2 text-primary text-sm font-medium"
            >
              <span>View Details</span>
              <motion.svg 
                className="w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none"
                animate={{ x: isHovered ? [0, 4, 0] : 0 }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </motion.div>
          </div>

          {/* Subtle hover glow */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/2 via-transparent to-accent/1" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <div className="min-h-screen bg-background py-12 md:py-20 px-4 md:px-8 lg:px-12">
      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto"
      >
        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary via-accent to-primary mb-6 rounded-full mx-auto"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Featured Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of AI, design, and engineering through innovative solutions
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[320px] md:auto-rows-[400px] gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSection;