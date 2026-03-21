import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Terminal } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafaf9] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor de la web */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-mar-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-tierra-200 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white border border-stone-200 rounded-[3rem] p-12 text-center shadow-xl relative z-10"
      >
        <div className="w-20 h-20 bg-stone-100 rounded-3xl flex items-center justify-center mx-auto mb-8 text-mar-600 border border-stone-200">
          <Terminal size={40} />
        </div>
        
        <h1 className="text-6xl font-serif font-bold text-stone-900 mb-4">404</h1>
        <p className="text-stone-500 font-medium mb-10 leading-relaxed">
          Parece que te has salido del mapa. Esta ruta no contiene datos válidos.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-mar-900 transition-all shadow-lg"
        >
          <ArrowLeft size={18} /> Volver al Inicio
        </Link>

        <div className="mt-12 pt-8 border-t border-stone-100 font-mono text-[10px] text-stone-400 uppercase tracking-widest">
          Error Log: PAGE_NOT_FOUND_IN_AGAETE
        </div>
      </motion.div>
    </div>
  );
};
