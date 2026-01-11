import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export const AgaeteBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, -500]);
  
  // Mouse tracking para el foco de luz
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const [points, setPoints] = useState<{x: number, y: number}[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const newPoints = [];
    for (let i = 0; i < 60; i++) {
      for (let j = 0; j < 15; j++) {
        newPoints.push({
          x: i * 1.8,
          y: j * 6 + Math.sin(i * 0.3) * 8
        });
      }
    }
    setPoints(newPoints);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafaf9]">
      
      {/* 1. FOCO DE LUZ INTERACTIVO (Apple Style) - MÁS VISIBLE */}
      <motion.div 
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        className="absolute top-0 left-0 w-[800px] h-[800px] pointer-events-none z-10"
      >
        <div className="w-full h-full rounded-full blur-[120px]" 
             style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 70%)' }} />
      </motion.div>

      {/* 2. TIPOGRAFÍA GIGANTE GHOST */}
      <div className="absolute right-[-5%] top-[10%] select-none">
        <h2 className="text-[25vw] font-serif font-bold text-stone-900/[0.02] leading-none uppercase tracking-tighter rotate-90 origin-right">
          Agaete
        </h2>
      </div>

      <motion.svg 
        style={{ y: y1 }}
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        className="w-full h-[200%] opacity-30"
      >
        {/* Puntos de datos parpadeantes */}
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y + 50}
            r="0.25"
            fill="#0ea5e9"
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </motion.svg>

      {/* 3. MARCADORES TÉCNICOS (Crosshairs) */}
      <div className="absolute inset-0 p-10 opacity-10">
        <div className="absolute top-10 left-10 w-10 h-10 border-l border-t border-stone-900" />
        <div className="absolute top-10 right-10 w-10 h-10 border-r border-t border-stone-900" />
        <div className="absolute bottom-10 left-10 w-10 h-10 border-l border-b border-stone-900" />
        <div className="absolute bottom-10 right-10 w-10 h-10 border-r border-b border-stone-900" />
        
        {/* Coordenadas flotantes sutiles */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2 font-mono text-[8px] text-stone-400 rotate-90 tracking-[0.5em]">
          28.101° N / 15.703° W
        </div>
      </div>
    </div>
  );
};
