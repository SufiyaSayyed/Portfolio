"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const HeroSection = () => {
  const firstLine = [
    { text: "Hi ", className: "text-foreground" },
    { text: "I'm ", className: "text-foreground" },
    { text: "Sufiya", className: "text-primary" },
    { text: "Sayyed", className: "text-primary" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-10 leading-tight"
      >
        <TypewriterEffect words={firstLine} cursorClassName="text-black" />
      </motion.h1>

      {/* Subheading lines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed tracking-wide max-w-3xl"
      >
        <p className="mb-2">
          A{" "}
          <span className="font-semibold text-foreground">
            Full-Stack Developer
          </span>{" "}
          building intelligent and scalable digital solutions.
        </p>
        <p>
          I craft{" "}
          <span className="font-medium text-foreground">
            web and AI-powered applications
          </span>{" "}
          that are efficient, reliable, and user-focused – turning complex
          problems into simple, impactful experiences.
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
        className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md"
      >
        View My Work
      </motion.button>
    </section>
  );
};

export default HeroSection;
