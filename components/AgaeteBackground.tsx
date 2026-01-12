import React, { useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AgaeteBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, -300]);
  
  const points = useMemo(() => {
    const newPoints = [];
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 8; j++) {
        newPoints.push({
          x: i * 3.5,
          y: j * 12 + Math.sin(i * 0.3) * 10
        });
      }
    }
    return newPoints;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafaf9]">
      
      {/* 2. TIPOGRAFÍA GIGANTE GHOST */}
      <div className="absolute right-0 top-[10%] select-none overflow-hidden max-w-full">
        <h2 className="text-[25vw] font-serif font-bold text-stone-900/[0.01] leading-none uppercase tracking-tighter rotate-90 origin-right">
          Agaete
        </h2>
      </div>

      <motion.svg 
        style={{ y: y1, willChange: 'transform' }}
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        className="w-full h-[150%] opacity-20"
      >
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y + 50}
            r="0.2"
            fill="#0ea5e9"
            className="animate-pulse"
            style={{ animationDelay: `${Math.random() * 2}s`, animationDuration: '3s' }}
          />
        ))}
      </motion.svg>

      {/* Marcadores técnicos sutiles */}
      <div className="absolute inset-0 p-10 opacity-5">
        <div className="absolute top-10 left-10 w-8 h-8 border-l border-t border-stone-900" />
        <div className="absolute top-10 right-10 w-8 h-8 border-r border-t border-stone-900" />
        <div className="absolute bottom-10 left-10 w-8 h-8 border-l border-b border-stone-900" />
        <div className="absolute bottom-10 right-10 w-8 h-8 border-r border-b border-stone-900" />
      </div>
    </div>
  );
};
