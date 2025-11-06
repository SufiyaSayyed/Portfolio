"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { skillsCategory } from "@/data";

const SkillSection = () => {
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
      id="skills"
      className="max-h-screen bg-background py-12 md:py-20 px-10 md:px-8 lg:px-12"
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
            Skills
          </h1>
          <AnimatedLine />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Frameworks, languages, and tools I use to build products
          </p>
        </motion.div>

        {/*skills grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="hidden md:grid md:grid-cols-2 md:gap-20"
        >
          {skillsCategory.map((category, index) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
            >
              <h2 className="text-md font-semibold text-muted-foreground">
                {category.title}
              </h2>
              <div className="border my-2 border-b-foreground/10 mx-[-5]"></div>
              {category.skills.map((skill, idx) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  key={idx}
                  className="flex flex-row gap-5 border-b-2 border-foreground/10 py-3 items-center"
                >
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10"
                  />
                  <div>
                    <h3 className="text-md font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <h4 className="text-sm text-muted-foreground font-medium">
                      {skill.description}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/*mobile skills grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="md:hidden grid grid-cols-2 gap-4"
        >
          {skillsCategory.map((category, index) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
            >
              <h2 className="text-md font-semibold text-muted-foreground border-b-[1.8] border-b-foreground/20 px-1.5 w-fit">
                {category.title}
              </h2>
              {/* <div className="border mt-2 border-b-foreground/10 mx-[-5]"></div> */}
              <div className="flex gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    key={idx}
                    className="flex flex-row gap-5 py-3 items-center"
                  >
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillSection;
