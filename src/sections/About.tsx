import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
// import { Code, User, Coffee, Heart } from 'lucide-react';
// import Button from '../components/ui/Button';

const About: React.FC = () => {
    return (
        <section id="about" className="py-8 sm:py-16 md:py-20 bg-[#0a1224] relative overflow-hidden">
            {/* Programming-themed background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1224]"></div>
                {/* Code-like elements - hidden on mobile */}
                <div className="hidden md:block absolute top-20 left-10 text-[#64ffda] opacity-10 font-mono text-sm">
                    {`<section className="about">`}
                </div>
                <div className="hidden md:block absolute top-40 right-20 text-[#64ffda] opacity-10 font-mono text-sm">
                    {`function about() {`}
                </div>
                <div className="hidden md:block absolute bottom-40 left-1/4 text-[#64ffda] opacity-10 font-mono text-sm">
                    {`return <About />`}
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <SectionTitle
                    title="About Me"
                    subtitle="Get to know me better"
                />

                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                        Full-Stack Developer
                    </h3> */}

                    <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 px-2 sm:px-0">
                        I'm a passionate Full Stack Developer specializing in scalable and efficient web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I have hands-on experience building two full-featured web apps that showcase my skills in creating robust and user-friendly solutions.                          </p>

                    <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 px-2 sm:px-0">
                        I've also gained practical knowledge in microservice architecture, allowing me to design modular and maintainable backend systems that scale with business needs.
                    </p>

                    <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 px-2 sm:px-0">
                        Problem solving drives me — I enjoy tackling challenges, debugging, and optimizing code to deliver great digital experiences. I'm always eager to learn new technologies and stay updated in web development.
                    </p>

                    {/* <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-md mx-auto">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300 text-sm sm:text-base">
                            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-[#64ffda]" />
                            <span>5+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300 text-sm sm:text-base">
                            <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#64ffda]" />
                            <span>50+ Projects</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300 text-sm sm:text-base">
                            <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-[#64ffda]" />
                            <span>500+ Coffee Cups</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300 text-sm sm:text-base">
                            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#64ffda]" />
                            <span>Loves Clean Code</span>
                        </div>
                    </div> */}

                    {/* <Button
                        href="#contact"
                        variant="secondary"
                        className="text-sm sm:text-base"
                    >
                        Let's Work Together
                    </Button> */}
                </motion.div>
            </div>
        </section>
    );
};

export default About;