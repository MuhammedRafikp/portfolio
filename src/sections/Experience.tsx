import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { workExperience, education } from '../data/experience';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-[#0a1224] relative overflow-hidden">
      {/* Programming-themed background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1224]"></div>
        {/* Code-like elements - hidden on mobile */}
        <div className="hidden md:block absolute top-20 left-10 text-[#64ffda] opacity-10 font-mono text-sm">
          {`<section className="experience">`}
        </div>
        <div className="hidden md:block absolute top-40 right-20 text-[#64ffda] opacity-10 font-mono text-sm">
          {`const experience = [`}
        </div>
        <div className="hidden md:block absolute bottom-40 left-1/4 text-[#64ffda] opacity-10 font-mono text-sm">
          {`return <Experience />`}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle 
          title="Experience" 
          subtitle="My professional journey" 
        />
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
          {/* Work Experience */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#64ffda]" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Work Experience
              </h3>
            </div>
            
            <div className="relative border-l-2 border-[#64ffda]/20 pl-6 sm:pl-8 space-y-6 sm:space-y-10">
              {workExperience.map((job, index) => (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative"
                >
                  <span className="absolute -left-8 sm:-left-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#64ffda] border-4 border-[#0a192f]" />
                  
                  <div className="bg-[#0a192f] rounded-lg p-4 sm:p-5 shadow-md border border-[#64ffda]/10">
                    <span className="text-xs sm:text-sm font-medium text-[#64ffda] mb-1 block">
                      {job.duration}
                    </span>
                    
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                      {job.role}
                    </h4>
                    
                    <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-3">
                      <a href={job.companyLink} target="_blank" rel="noopener noreferrer">
                        {job.company}
                      </a>
                    </p>
                    
                    <ul className="text-sm sm:text-base text-gray-300 space-y-1.5 sm:space-y-2">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#64ffda]" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Education
              </h3>
            </div>
            
            <div className="relative border-l-2 border-[#64ffda]/20 pl-6 sm:pl-8 space-y-6 sm:space-y-10">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative"
                >
                  <span className="absolute -left-8 sm:-left-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#64ffda] border-4 border-[#0a192f]" />
                  
                  <div className="bg-[#0a192f] rounded-lg p-4 sm:p-5 shadow-md border border-[#64ffda]/10">
                    <span className="text-xs sm:text-sm font-medium text-[#64ffda] mb-1 block">
                      {edu.duration}
                    </span>
                    
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                      {edu.degree}
                    </h4>
                    
                    <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-3">
                      {edu.school}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;