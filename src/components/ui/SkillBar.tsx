import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
  icon?: React.ReactNode;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, index, icon }) => {
  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          {icon && <span className="text-primary-500">{icon}</span>}
          <span className="font-medium text-gray-200">{name}</span>
        </div>
        <span className="text-xs text-gray-400">{level}%</span>
      </div>
      
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary-400 to-secondary-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;