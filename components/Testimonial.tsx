import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-xl border border-stone-200 rounded-[4rem] p-12 md:p-20 shadow-xl relative overflow-hidden text-center"
        >
          {/* Decorative Quote Icon */}
          <div className="absolute top-10 left-10 text-mar-500/10">
            <Quote size={120} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="flex justify-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="fill-tierra-500 text-tierra-500" />
              ))}
            </div>

            <blockquote className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-10 leading-tight tracking-tight">
              "Trabajar con Yone ha sido un antes y un después. No solo nos hizo la web, nos ayudó a entender nuestro stock y a vender de forma automática."
            </blockquote>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-stone-200 mb-4 overflow-hidden border-2 border-white shadow-lg">
                <img src="/logosinnombre.png" alt="Cliente" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-stone-900 text-lg">Dirección de Coordenadas Store</h4>
              <p className="text-mar-600 text-xs font-bold uppercase tracking-[0.2em] mt-1">Caso de Éxito Real</p>
            </div>
          </div>

          {/* Sutil firma digital de fondo */}
          <div className="absolute bottom-[-10%] right-[-5%] opacity-[0.03] font-mono text-[10vw] select-none pointer-events-none rotate-[-5deg]">
            SUCCESS_LOG
          </div>
        </motion.div>
      </div>
    </section>
  );
};
