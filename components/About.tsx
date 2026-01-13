import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe2, UserCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-transparent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-tierra-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-mar-200 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl relative z-10 bg-white p-4">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-stone-100 relative group/photo">
                <img 
                  src="/yone-photo.jpeg" 
                  alt="Yone - Ingeniero de Datos & Web Dev" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Floating Isotipo Watermark */}
                <div className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <img src="/isotipo.png" alt="" className="w-full h-full object-contain drop-shadow-md" />
                </div>
              </div>
            </div>
            
            {/* Decorative Isotipo Element behind image */}
            <div className="absolute -top-10 -left-10 w-32 h-32 opacity-[0.03] rotate-[-15deg] pointer-events-none">
               <img src="/isotipo.png" alt="" className="w-full h-full object-contain" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-mar-900 rounded-[3rem] -z-0 opacity-10 blur-xl" />
            
            <div className="absolute bottom-12 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] border border-stone-200 shadow-xl z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-900 flex items-center justify-center text-white shadow-lg">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900">Yone</h4>
                  <p className="text-[9px] text-mar-600 font-bold uppercase tracking-[0.2em]">Ingeniería & Datos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mar-700 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">
              La mente detrás
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-8 tracking-tight">
              Ingeniería con <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mar-900 to-mar-600 italic">acento canario.</span>
            </h2>
            
            <div className="space-y-8 text-stone-500 text-lg leading-relaxed font-medium">
              <p>
                Soy estudiante de <span className="text-stone-900 font-bold">Ingeniería de Datos</span>, apasionado por cómo la tecnología y el análisis de información pueden transformar negocios tradicionales en potencias digitales.
              </p>
              <p className="border-l-4 border-mar-200 pl-6 italic text-stone-600">
                Esta plataforma es el resultado de un reto personal por transformar mi entorno: en apenas unas semanas, he logrado digitalizar pilares clave del comercio y la vida en el Norte, demostrando que la ingeniería de alto nivel puede ejecutarse con máxima agilidad y cercanía.
              </p>
              <p>
                Aunque mi base principal está en Gran Canaria, he expandido operaciones a Tenerife. Desarrollo arquitecturas escalables preparadas para competir en cualquier mercado, con el objetivo de conectar el talento y los negocios de Canarias con el mundo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-stone-100 flex items-center justify-center text-mar-600">
                  <Database size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-stone-900 text-sm">Foco en Datos</h4>
                <p className="text-xs text-stone-400 font-medium">Análisis para decisiones inteligentes.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-stone-100 flex items-center justify-center text-mar-600">
                  <Code2 size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-stone-900 text-sm">Código Limpio</h4>
                <p className="text-xs text-stone-400 font-medium">Desarrollo escalable y mantenible.</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
               <div className="flex items-center gap-3 text-stone-400">
                  <Globe2 size={20} className="text-mar-600" />
                  <span className="text-xs font-bold uppercase tracking-widest">Gran Canaria & Tenerife</span>
               </div>
               
               {/* FIRMA DE AUTOR (SVG Animado sutil) */}
               <div className="relative">
                  <span className="font-serif italic text-2xl text-stone-900 opacity-80">Yone Suárez.</span>
                  <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-mar-500/30" />
                  <p className="text-[8px] font-mono uppercase tracking-[0.3em] text-stone-400 mt-2 text-right">Ingeniería con alma</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
