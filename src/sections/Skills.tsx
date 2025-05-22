import React, { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useMotionValue } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import skillsData from '../data/skills';

const Skills: React.FC = () => {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      // const containerWidth = containerRef.current.offsetWidth;
      const skillWidth = 100; // Approximate width of each skill item
      const totalSkillsWidth = skillsData.length * skillWidth;
      
      controls.start({
        x: [0, -totalSkillsWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    }
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      // const containerWidth = containerRef.current.offsetWidth;
      const skillWidth = 100; // Approximate width of each skill item
      const totalSkillsWidth = skillsData.length * skillWidth;
      
      controls.start({
        x: [x.get(), x.get() - totalSkillsWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        },
      });
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-[#0a1224] relative overflow-hidden">
      {/* Programming-themed background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1224]"></div>
        {/* Code-like elements - hidden on mobile */}
        <div className="hidden md:block absolute top-20 left-10 text-[#64ffda] opacity-10 font-mono text-sm">
          {`<section className="skills">`}
        </div>
        <div className="hidden md:block absolute top-40 right-20 text-[#64ffda] opacity-10 font-mono text-sm">
          {`const skills = [`}
        </div>
        <div className="hidden md:block absolute bottom-40 left-1/4 text-[#64ffda] opacity-10 font-mono text-sm">
          {`return <Skills />`}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle 
          title="Skills" 
          subtitle="Technologies I work with" 
        />
        
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden py-6 sm:py-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex gap-4 sm:gap-8"
            animate={controls}
            style={{ x }}
          >
            {/* First set of skills */}
            {skillsData.map((skill, index) => (
              <motion.div
                key={`skill-1-${index}`}
                className="flex flex-col items-center gap-1.5 sm:gap-2 min-w-[80px] sm:min-w-[100px]"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0a192f] flex items-center justify-center 
                  shadow-lg hover:shadow-xl transition-all duration-300
                  hover:bg-[#112240]">
                  <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#64ffda] transition-transform duration-300
                    group-hover:scale-110" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-300 
                  transition-colors duration-300">{skill.name}</span>
              </motion.div>
            ))}
            {/* Duplicate set of skills for seamless loop */}
            {skillsData.map((skill, index) => (
              <motion.div
                key={`skill-2-${index}`}
                className="flex flex-col items-center gap-1.5 sm:gap-2 min-w-[80px] sm:min-w-[100px]"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0a192f] flex items-center justify-center 
                  shadow-lg hover:shadow-xl transition-all duration-300
                  hover:bg-[#112240]">
                  <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#64ffda] transition-transform duration-300
                    group-hover:scale-110" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-300 
                  transition-colors duration-300">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;