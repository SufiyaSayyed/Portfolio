"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { socialLinks } from "@/data";
import Image from "next/image";

const ConnectSection = () => {
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
      id="connect"
      className="min-h-[50vh] bg-linear-to-b from-background to-primary/15 py-12 md:py-20 px-10 md:px-8 lg:px-12"
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
            Come say hi!
          </h1>
          <AnimatedLine />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you have a project in mind or just want to
            connect!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => {
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button className="rounded-2xl px-4 py-1 border-2 border-border hover:border-primary bg-card hover:bg-card shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex gap-1 items-center justify-center"
                  >
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={2}
                      height={2}
                      className="h-5 w-5 mr-2 transition-transform group-hover:scale-110"
                    />
                    <p>{link.label}</p>
                  </motion.a>
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16 relative z-10"
      >
        <p className="text-foreground/60">
        Designed and built by <span className="text-foreground">Sufiya Sayyed</span>
        </p>
      </motion.div>
    </section>
  );
};

export default ConnectSection;
