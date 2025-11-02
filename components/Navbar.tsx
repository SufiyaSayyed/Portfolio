'use client';

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-purple-500/10 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with animation */}
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ATHOS
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name.toLowerCase())}
                className="relative px-4 py-2 group"
                style={{
                  animation: `fadeInDown 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <span
                  className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-white'
                      : 'text-gray-400 group-hover:text-white'
                  }`}
                >
                  {item.name}
                </span>
                
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left transition-transform duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>

                {/* Glow effect */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="hidden md:block relative px-6 py-2.5 text-sm font-medium text-white overflow-hidden rounded-lg group"
            style={{ animation: 'fadeInDown 0.8s ease-out 0.5s both' }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-105"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              Get Started
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center group"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pt-4 pb-6 space-y-2 bg-black/95 backdrop-blur-lg">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.name.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-600/10 rounded-lg transition-all duration-300"
                style={{
                  animation: mobileMenuOpen
                    ? `fadeInUp 0.4s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Demo Content */}
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="text-center max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Animated Navbar
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Scroll down to see the navbar transform with beautiful animations
            </p>
          </div>
        </section>

        {/* Other Sections */}
        {['about', 'projects', 'process', 'contact'].map((section) => (
          <section
            key={section}
            id={section}
            className="min-h-screen flex items-center justify-center px-6"
          >
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white capitalize mb-4">
                {section}
              </h2>
              <p className="text-gray-400 text-lg">
                Scroll to see the navbar animations in action
              </p>
            </div>
          </section>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Navbar;