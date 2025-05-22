import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
  commands: string[];
  typingSpeed?: number;
  prompt?: string;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({
  commands,
  typingSpeed = 50,
  prompt = '$ ',
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      setIsTyping(false);
      return;
    }

    const currentCommand = commands[currentCommandIndex];

    if (currentCharIndex < currentCommand.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => {
          const updatedTexts = [...prev];
          
          if (updatedTexts.length <= currentCommandIndex) {
            updatedTexts.push(prompt + currentCommand.substring(0, currentCharIndex + 1));
          } else {
            updatedTexts[currentCommandIndex] = prompt + currentCommand.substring(0, currentCharIndex + 1);
          }
          
          return updatedTexts;
        });
        
        setCurrentCharIndex(currentCharIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentCommandIndex(currentCommandIndex + 1);
        setCurrentCharIndex(0);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [commands, currentCommandIndex, currentCharIndex, prompt, typingSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-codeblock text-gray-200 p-4 rounded-lg font-mono text-sm ${className}`}
    >
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      
      <div className="space-y-1">
        {displayedText.map((text, index) => (
          <div key={index} className="break-words">
            {text}
            {index === currentCommandIndex && isTyping && (
              <span className="inline-block w-2 h-4 ml-0.5 bg-primary-400 animate-cursor" />
            )}
          </div>
        ))}
        
        {currentCommandIndex >= commands.length && (
          <span className="inline-block w-2 h-4 ml-0.5 bg-primary-400 animate-cursor" />
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;