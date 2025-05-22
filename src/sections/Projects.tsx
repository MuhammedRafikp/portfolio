import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import projects from '../data/projects';

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const displayedProjects = projects.slice(0, visibleProjects);
  
  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };
  
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-[#0a1224] relative overflow-hidden">
      {/* Programming-themed background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1224]"></div>
        {/* Code-like elements - hidden on mobile */}
        <div className="hidden md:block absolute top-20 left-10 text-[#64ffda] opacity-10 font-mono text-sm">
          {`<section className="projects">`}
        </div>
        <div className="hidden md:block absolute top-40 right-20 text-[#64ffda] opacity-10 font-mono text-sm">
          {`const projects = [`}
        </div>
        <div className="hidden md:block absolute bottom-40 left-1/4 text-[#64ffda] opacity-10 font-mono text-sm">
          {`return <Projects />`}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle 
          title="Projects" 
          subtitle="Some of my recent work" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-center">
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
        
        {projects.length > 3 && visibleProjects < projects.length && (
          <motion.div 
            className="flex justify-center mt-8 sm:mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={loadMore}
              className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-[#0a192f] text-[#64ffda] border border-[#64ffda] hover:bg-[#112240] rounded-md font-medium transition-colors"
            >
              Load More Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;