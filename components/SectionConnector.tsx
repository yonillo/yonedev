import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const SectionConnector: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-px h-full pointer-events-none z-0 hidden lg:block opacity-30">
      {/* Línea base sutil */}
      <div className="w-full h-full bg-stone-300/30" />
      
      {/* Línea de progreso activa */}
      <motion.div 
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-mar-500 to-tierra-500 origin-top"
        style={{ scaleY, height: '100%' }}
      />

      {/* Nodos de conexión en puntos clave (simulados) */}
      {[0.15, 0.35, 0.55, 0.75, 0.95].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white border border-mar-500"
          style={{ top: `${pos * 100}%` }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
        />
      ))}
    </div>
  );
};
