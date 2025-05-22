import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#0a192f] rounded-lg border border-[#64ffda]/10 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="text-white font-mono">
            <span className="text-primary-400">{'>'}</span> Project {index + 1}
          </div>
          
          <div className="flex gap-2">
            {project.sourceUrl && (
              <a 
                href={project.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-primary-400 p-2 bg-black/30 rounded-full transition-colors"
                aria-label="View source code"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-primary-400 p-2 bg-black/30 rounded-full transition-colors"
                aria-label="Visit live site"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-mono text-lg font-bold text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-mono px-2 py-1 rounded-md bg-[#0a192f] border border-gray-700 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;