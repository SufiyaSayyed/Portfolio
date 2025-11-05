"use client";

import { Project } from "@/types";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open(project.link, "_blank")}
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full w-full"
      >
        <div
          className="
            relative h-full w-full rounded-xl p-6 md:p-8
            bg-card border border-border
            overflow-hidden
            transition-all duration-300
            group-hover:border-primary/50
            group-hover:shadow-lg
          "
        >
          {/* Animated accent line on hover */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              transformOrigin: "left",
            }}
            className="bg-accent"
          />

          {/* Content */}
          <div
            className="
              relative z-10 flex flex-col lg:flex-row 
              items-start lg:items-stretch 
              gap-6 lg:gap-10

            "
          >
            {/* Left: Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                delay: 0.35 + index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="
                w-full md:w-[45%] lg:w-[40%]
                rounded-xl overflow-hidden shadow-md
                order-1 md:order-1
                group-hover:shadow-lg 
                transition-shadow duration-300
              "
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-48 sm:h-56 md:h-64 lg:h-100
                  object-cover rounded-xl
                "
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>

            {/* right: Text Section */}
            <div className="flex-1 md:flex flex-col justify-between space-y-4 order-2 md:order-1">
              <motion.div className="space-y-3 md:space-y-4">
                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300"
                >
                  {project.title}
                </motion.h3>

                {/* mobile Tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="md:hidden flex flex-wrap gap-2 mt-2"
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        delay: 0.5 + index * 0.1 + tagIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="
                      px-3 py-1 rounded-xl text-xs md:text-sm font-semibold 
                      text-accent border border-accent/50
                      group-hover:shadow-md
                      transition-all duration-300
                    "
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-sm md:text-base text-muted-foreground leading-relaxed"
                >
                  {project.subtitle}
                </motion.p>
              </motion.div>

              {/*Destop Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="hidden md:flex flex-wrap gap-2 mt-2 md:mt-4"
              >
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      delay: 0.5 + index * 0.1 + tagIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="
                      px-3 py-1 rounded-xl text-xs md:text-sm font-semibold 
                      text-accent border border-accent/50
                      group-hover:shadow-md
                      transition-all duration-300
                    "
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* mobile demo button */}
              <motion.div className="md:hidden flex justify-end">
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => window.open(project.link, "_blank")}
                  className="flex items-center gap-1 px-3 py-1 min w-fit bg-primary border-2 border-primary text-primary-foreground rounded-xl font-medium"
                >
                  Demo
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            </div>

            
          </div>
          {/* Hover indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            className="hidden absolute bottom-10 right-6 md:flex items-center gap-2 text-primary text-sm font-bold"
          >
            <span>View Demo</span>
            <motion.svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              animate={{ x: isHovered ? [0, 4, 0] : 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>

          {/* Subtle hover glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
