"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/data";
import AnimatedLine from "./AnimatedLine";

const ExperienceSection = () => {
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
      id="experience"
      className="min-h-screen bg-background py-12 md:py-20 px-4 md:px-8 lg:px-12"
    >
      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        className="max-w-4xl mx-auto"
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
            Work Experience
          </h1>
          <AnimatedLine />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful products and gaining hands-on experience across
            full-stack development, AI, and design
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                </motion.div>

                <div className="p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 bg-card shadow-lg hover:shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-0">
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-accent mb-3">
                    {exp.company}
                  </p>
                  <ul className="text-foreground/70 leading-relaxed list-disc">
                    {exp.description.map((point, idx) => (
                      <li key={idx} className="ml-5">{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
