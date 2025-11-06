"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ResumeLink, typeWriterLine } from "@/data";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-medium leading-tight"
      >
        <TypewriterEffect
          words={typeWriterLine}
          cursorClassName="bg-primary h-0 w-0"
          className="md:mb-6 mb-4"
        />
      </motion.h1>

      {/* Subheading lines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-muted-foreground max-w-4xl leading-relaxed tracking-wide mb-10"
      >
        <p className="mb-3 text-lg md:text-2xl font-normal">
          <span className="font-semibold text-foreground">
            Full-Stack Developer
          </span>{" "}
          with a passion for blending design with functionality.
        </p>
        <p className="text-base md:text-xl font-light">
          {`I'm a curious developer turning complex problems into simple, impactful user experiences.`}
        </p>
      </motion.div>
      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => {
          const section = document.getElementById("projects");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden md:flex px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md"
      >
        View My Work
      </motion.button>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => window.open(ResumeLink, "_blank")}

        className="md:hidden flex gap-2 items-center px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md"
      >
         <Download size={16} />
         Resume
      </motion.button>
      
    </section>
  );
};

export default HeroSection;
