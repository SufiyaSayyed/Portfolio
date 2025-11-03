'use client'

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Briefcase, Award, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      {/* Animated Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-neutral-900"
          >
            Portfolio
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Projects', 'Experience', 'Skills', 'Connect'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-neutral-600 hover:text-neutral-900 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
          <motion.a
            href="#resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-neutral-900 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-neutral-800 transition-colors"
          >
            <Download size={16} />
            Resume
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-neutral-900 mb-6">
              Hi, I am <TypeWriter text="Your Name" />
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-600 mb-4 max-w-2xl mx-auto"
          >
            A passionate <span className="text-neutral-900 font-semibold">Full-Stack Developer</span> crafting exceptional digital experiences
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-neutral-500 mb-12 max-w-2xl mx-auto"
          >
            Specializing in building scalable web applications with modern technologies and clean, intuitive interfaces
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <a href="#projects" className="bg-neutral-900 text-white px-8 py-4 rounded-full hover:bg-neutral-800 transition-all hover:scale-105 flex items-center gap-2">
              View Projects <ChevronRight size={20} />
            </a>
            <a href="#connect" className="border-2 border-neutral-900 text-neutral-900 px-8 py-4 rounded-full hover:bg-neutral-900 hover:text-white transition-all hover:scale-105">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Bento Layout */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-neutral-900 mb-4 text-center">Featured Projects</h2>
            <p className="text-neutral-600 text-center mb-16 text-lg">Showcasing my latest work and innovations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl p-8 hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/0 to-neutral-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-neutral-900">E-Commerce Platform</h3>
                  <ExternalLink className="text-neutral-600 group-hover:text-neutral-900 transition-colors" />
                </div>
                <p className="text-neutral-600 mb-6 text-lg">A full-stack e-commerce solution with real-time inventory management, payment integration, and advanced analytics dashboard.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Next.js', 'TypeScript', 'Prisma', 'Stripe'].map(tech => (
                    <span key={tech} className="bg-white px-4 py-2 rounded-full text-sm text-neutral-700">{tech}</span>
                  ))}
                </div>
                <div className="aspect-video bg-neutral-300 rounded-2xl"></div>
              </div>
            </motion.div>

            {/* Small Project Cards */}
            {[
              { title: 'AI Chat App', desc: 'Real-time messaging with AI integration', tags: ['React', 'Socket.io', 'OpenAI'] },
              { title: 'Task Manager', desc: 'Collaborative project management tool', tags: ['Vue.js', 'Firebase', 'Tailwind'] },
              { title: 'Weather Dashboard', desc: 'Beautiful weather visualization', tags: ['Next.js', 'D3.js', 'API'] },
              { title: 'Portfolio CMS', desc: 'Headless CMS for portfolios', tags: ['Node.js', 'MongoDB', 'GraphQL'] }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl p-6 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-neutral-900">{project.title}</h3>
                  <ExternalLink size={18} className="text-neutral-600 group-hover:text-neutral-900 transition-colors" />
                </div>
                <p className="text-neutral-600 mb-4 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tech => (
                    <span key={tech} className="bg-white px-3 py-1 rounded-full text-xs text-neutral-700">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-neutral-900 mb-4 text-center">Experience</h2>
            <p className="text-neutral-600 text-center mb-16 text-lg">My professional journey</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-neutral-300 transform md:-translate-x-1/2"></div>
            
            {[
              { role: 'Senior Full-Stack Developer', company: 'Tech Corp', period: '2023 - Present', desc: 'Leading development of cloud-native applications and mentoring junior developers.' },
              { role: 'Full-Stack Developer', company: 'StartUp Inc', period: '2021 - 2023', desc: 'Built scalable web applications serving 100K+ users with React and Node.js.' },
              { role: 'Frontend Developer', company: 'Digital Agency', period: '2020 - 2021', desc: 'Crafted responsive and accessible user interfaces for enterprise clients.' },
              { role: 'Junior Developer', company: 'Web Solutions', period: '2019 - 2020', desc: 'Developed features and fixed bugs for various client projects.' }
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative mb-12 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'} md:w-1/2`}
              >
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 bg-neutral-900 rounded-full transform md:-translate-x-1/2 md:translate-x-1/2"></div>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow ml-8 md:ml-0">
                  <div className="flex items-center gap-2 mb-2 md:justify-end">
                    <Briefcase size={20} className="text-neutral-600" />
                    <span className="text-sm text-neutral-500">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-1">{exp.role}</h3>
                  <p className="text-neutral-600 font-medium mb-3">{exp.company}</p>
                  <p className="text-neutral-600">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-neutral-900 mb-4 text-center">Skills & Expertise</h2>
            <p className="text-neutral-600 text-center mb-16 text-lg">Technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go'], icon: Code },
              { title: 'Frameworks', skills: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Express'], icon: Award },
              { title: 'Tools & Others', skills: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL'], icon: Briefcase }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl p-8"
              >
                <category.icon className="text-neutral-900 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={skill}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.2 + j * 0.1 }}
                      className="bg-white rounded-full px-4 py-3 text-neutral-800 font-medium"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-neutral-900 mb-4">Lets Work Together</h2>
            <p className="text-neutral-600 mb-12 text-lg max-w-2xl mx-auto">
              Im always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-12 mb-12"
            >
              <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="mailto:your.email@example.com" className="bg-white text-neutral-900 px-8 py-4 rounded-full hover:bg-neutral-100 transition-all hover:scale-105 flex items-center gap-2 justify-center">
                  <Mail size={20} />
                  Send Email
                </a>
                <a href="#resume" className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-neutral-900 transition-all hover:scale-105 flex items-center gap-2 justify-center">
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </motion.div>

            <div className="flex gap-6 justify-center">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: '#' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-neutral-900 text-white p-4 rounded-full hover:bg-neutral-800 transition-colors"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-neutral-400">© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// TypeWriter Component
const TypeWriter = ({ text }: {text: string}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <span className="inline-block">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-1 h-16 bg-neutral-900 ml-1"
      />
    </span>
  );
};

export default Portfolio;