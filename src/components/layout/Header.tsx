import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import type { NavLink } from '../../types';
import useScrollSpy from '../../hooks/useScrollSpy';

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navLinks.map(link => link.href.substring(1)));
//   const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 bg-[#1e293b]/90 backdrop-blur border border-[#64ffda]/10 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 shadow-md">
          <ul className="flex gap-2 sm:gap-4 md:gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`font-medium text-xs sm:text-sm transition-colors hover:text-[#64ffda] 
                    ${activeSection === link.href.substring(1) 
                      ? 'text-[#64ffda]' 
                      : 'text-gray-300'
                    }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-full hover:bg-[#1e293b] transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-[#64ffda]" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-[#64ffda]" />
            )}
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;