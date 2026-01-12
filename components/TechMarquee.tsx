import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", 
  "Stripe", "Supabase", "Tailwind CSS", "Framer Motion", 
  "WhatsApp API", "Python", "SQL", "Cloud"
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="py-10 bg-white/30 backdrop-blur-sm border-y border-stone-200 overflow-hidden relative">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex gap-20 whitespace-nowrap"
      >
        {[...techs, ...techs].map((tech, i) => (
          <span 
            key={i} 
            className="text-2xl md:text-4xl font-serif font-bold text-stone-300 hover:text-mar-500 transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
      
      {/* Gradients para suavizar los bordes laterales */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fafaf9] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fafaf9] to-transparent z-10" />
    </div>
  );
};
