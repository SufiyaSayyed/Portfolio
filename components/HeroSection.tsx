'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TypewriterEffect } from './ui/typewriter-effect'

const HeroSection = () => {
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
        className="text-4xl md:text-6xl font-bold text-foreground mb-6"
      >
        Hi, I’m{' '}
        <span className="text-primary">Sufiya Sayyed</span>
      </motion.h1>

      {/* Typewriter introduction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg md:text-2xl text-muted-foreground mb-8"
      >
        <TypewriterEffect
          words={[
            { text: 'Crafting ', className: 'text-foreground' },
            { text: 'beautiful ', className: 'text-primary' },
            { text: 'and performant user experiences.' },
          ]}
          cursorClassName="text-primary"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        <TypewriterEffect
          words={[
            { text: 'Turning ', className: 'text-foreground' },
            { text: 'complex ideas ', className: 'text-primary' },
            { text: 'into seamless digital solutions.' },
          ]}
          cursor={false}
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2500}
        />
      </motion.div>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => {
          const section = document.getElementById('projects')
          section?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md"
      >
        View My Work
      </motion.button>
    </section>
  )
}

export default HeroSection
