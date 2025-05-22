import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
// import {Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-[#0a1224] relative overflow-hidden">
      {/* Programming-themed background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050c1a]"></div>
        {/* Code-like elements */}
        <div className="absolute top-20 left-10 text-[#64ffda] opacity-10 font-mono text-sm">
          {`<footer className="footer">`}
        </div>
        <div className="absolute top-40 right-20 text-[#64ffda] opacity-10 font-mono text-sm">
          {`const footer = {`}
        </div>
        <div className="absolute bottom-40 left-1/4 text-[#64ffda] opacity-10 font-mono text-sm">
          {`return <Footer />`}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-gray-300 text-center md:text-left">
              © {currentYear} <span className="font-mono">Muhammed Rafi</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
               href="https://github.com/MuhammedRafikp"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#64ffda] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
             href="https://www.linkedin.com/in/mhdrafi10/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-[#64ffda] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
               href="https://x.com/Muhamme02989914"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-[#64ffda] transition-colors"
              aria-label="X"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/rfyy_10"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-[#64ffda] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            {/* <a 
              href="mailto:your.email@example.com" 
              className="text-gray-300 hover:text-[#64ffda] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;