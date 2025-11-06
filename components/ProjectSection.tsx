"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data";
import ProjectCard from "./ProjectCard";
import AnimatedLine from "./AnimatedLine";

const ProjectSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0.6, 1, 1, 0.9]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0.98, 1, 1, 0.98]
  );

  return (
    <section
      id="projects"
      className="min-h-screen bg-background py-12 md:py-20 px-4 md:px-8 lg:px-12"
    >
      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        className="max-w-260 mx-auto"
        layout
      >
        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Featured Projects
          </h1>
          <AnimatedLine /> 
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work, showcasing blend of design and development
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
