import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Hand, Instagram } from 'lucide-react';
// import Terminal from '../components/ui/Terminal';
import Button from '../components/ui/Button';
import AnimatedText from '../components/ui/AnimatedText';
import dp from '../assets/dp.jpg';

const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 md:pt-20 pb-12 md:pb-16 relative overflow-hidden">
            {/* Programming-themed background */}
            <div className="absolute inset-0 bg-[#1e293b]">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1224]"></div>
                {/* Code-like elements - hidden on mobile */}
                <div className="hidden md:block absolute top-20 left-10 text-[#64ffda] opacity-10 font-mono text-sm">
                    {`<div className="code">`}
                </div>
                <div className="hidden md:block absolute top-40 right-20 text-[#64ffda] opacity-10 font-mono text-sm">
                    {`function() {`}
                </div>
                <div className="hidden md:block absolute bottom-40 left-1/4 text-[#64ffda] opacity-10 font-mono text-sm">
                    {`return <Component />`}
                </div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img 
                                src={dp} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <motion.div
                            className="absolute top-10 md:top-12 -right-2 text-3xl md:text-4xl"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                        >
                            👋
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex-1 text-center max-w-2xl px-4 md:px-0"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="mb-4 md:mb-6">
                            <AnimatedText
                                text="Hey, I'm Muhammed Rafi"
                                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2"
                            />
                            {/* <motion.h2
                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 animate-text-gradient"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.7 }}
                            >
                                Full-Stack Developer
                            </motion.h2> */}
                        </div>

                        <motion.p
                            className="text-gray-300 text-base sm:text-lg mb-6 md:mb-8 mx-auto max-w-lg px-2 sm:px-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.7 }}
                        >
                            A MERN Stack Developer passionate about building scalable web applications and solving real-world problems through clean, efficient code.
                            </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-2 sm:gap-3 mb-6 md:mb-8 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.7 }}
                        >
                            <Button
                                onClick={() => {
                                    scrollToSection('#contact');
                                }}
                                variant="secondary"
                                className="text-sm sm:text-base"
                            >
                                Get in Touch
                            </Button>
                            <Button
                                href="/resume.pdf"
                                variant="outline"
                                icon={<Download className="w-3 h-3 sm:w-4 sm:h-4" />}
                                className="text-sm sm:text-base"
                            >
                                Download CV
                            </Button>
                        </motion.div>

                        <motion.div
                            className="flex gap-3 sm:gap-4 justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3, duration: 0.7 }}
                        >
                            <a
                                href="https://github.com/MuhammedRafikp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary-400 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mhdrafi10/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary-400 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                            {/* <a
                                href="mailto:rafikpmty@gmail.com"
                                className="text-gray-400 hover:text-primary-400 transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a> */}
                            <a
                                href="https://x.com/Muhamme02989914"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary-400 transition-colors"
                                aria-label="X (Twitter)"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
                                    aria-hidden="true"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/rfyy_10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary-400 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;