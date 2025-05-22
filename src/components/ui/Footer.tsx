import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1224] relative overflow-hidden">
      {/* Programming-themed background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1224]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-8 sm:py-12">
          {/* Top Section */}
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Let's Connect
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto mb-6 sm:mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Button
                href="mailto:rafikpmt@gmail.com"
                variant="secondary"
                className="text-sm sm:text-base"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#64ffda] transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#64ffda] transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:rafikpmt@gmail.com"
              className="text-gray-400 hover:text-[#64ffda] transition-colors p-2"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <a href="#home" className="text-sm sm:text-base text-gray-400 hover:text-[#64ffda] transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm sm:text-base text-gray-400 hover:text-[#64ffda] transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm sm:text-base text-gray-400 hover:text-[#64ffda] transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm sm:text-base text-gray-400 hover:text-[#64ffda] transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-sm sm:text-base text-gray-400 hover:text-[#64ffda] transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-sm sm:text-base text-gray-400 hover:text-[#64ffda] transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright and Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-gray-800">
            <p className="text-xs sm:text-sm text-gray-400">
              © {new Date().getFullYear()} Muhammed Rafi. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-xs sm:text-sm text-gray-400 hover:text-[#64ffda] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 