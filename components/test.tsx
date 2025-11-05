"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// AnimatedLine Component
const AnimatedLine = () => {
  return (
    <div className="flex justify-center my-6">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
      />
    </div>
  );
};

// Skill Category Component
interface Skill {
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

// Individual Skill Card Component
interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
    >
      <div className="bg-card border border-border rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0`}
          >
            {skill.icon}
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {skill.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {skill.description}
            </p>
          </div>
        </div>

        {/* Animated bottom border on hover */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          className={`h-1 bg-gradient-to-r ${skill.color} rounded-full mt-4 origin-left`}
        />
      </div>
    </motion.div>
  );
};

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
      className="min-h-screen bg-background py-12 md:py-20 px-4 md:px-8 lg:px-12"
    >
      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto"
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
            Tools I use and skills I have learnt over time.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12 md:space-y-16">
          {/* Frontend Section */}
          <SkillCategory
            title="Frontend"
            skills={[
              {
                name: "React",
                description: "For building fast, interactive UIs",
                icon: "⚛️",
                color: "from-cyan-400 to-blue-500",
              },
              {
                name: "Next.js",
                description: "React framework with routing & SSR",
                icon: "N",
                color: "from-gray-800 to-black",
              },
              {
                name: "TypeScript",
                description: "Typed JavaScript for safer code",
                icon: "TS",
                color: "from-blue-500 to-blue-600",
              },
            ]}
          />

          {/* Backend Section */}
          <SkillCategory
            title="Backend"
            skills={[
              {
                name: "Node.js",
                description: "JavaScript runtime for servers",
                icon: "🟢",
                color: "from-green-600 to-green-700",
              },
              {
                name: "Express",
                description: "Minimal framework for APIs",
                icon: "ex",
                color: "from-gray-700 to-gray-900",
              },
              {
                name: "MongoDB",
                description: "Flexible NoSQL database system",
                icon: "🍃",
                color: "from-green-500 to-green-600",
              },
            ]}
          />

          {/* Tools & DevOps Section */}
          <SkillCategory
            title="Tools & DevOps"
            skills={[
              {
                name: "Git & GitHub",
                description: "Version control and collaboration",
                icon: "🐙",
                color: "from-gray-800 to-black",
              },
              {
                name: "Docker",
                description: "Containers for isolated environments",
                icon: "🐳",
                color: "from-blue-400 to-blue-600",
              },
            ]}
          />

          {/* Design & Workflow Section */}
          <SkillCategory
            title="Design & Workflow"
            skills={[
              {
                name: "Figma",
                description: "Design and prototyping tool",
                icon: "🎨",
                color: "from-purple-500 to-pink-500",
              },
              {
                name: "Notion",
                description: "Planning and docs in one place",
                icon: "📝",
                color: "from-gray-800 to-black",
              },
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SkillSection;