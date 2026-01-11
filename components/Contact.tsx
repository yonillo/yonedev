import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const problems = [
    { title: "Gestión de Stock", desc: "Sincronizo tu tienda física y online para que nunca vendas lo que no tienes." },
    { title: "Visibilidad en Google", desc: "Hago que cuando busquen tu servicio en el Norte, tú salgas el primero." },
    { title: "Web Obsoleta", desc: "Transformo tu página lenta en una herramienta rápida que da confianza." }
  ];

  return (
    <section id="contact" className="py-32 bg-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-mar-700 font-bold tracking-widest uppercase text-sm mb-4 block">Contacto Directo</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-pueblo-900 mb-8">
              ¿Hablamos de <br />
              <span className="text-mar-800 italic">tu negocio?</span>
            </h2>
            
            <p className="text-stone-600 text-lg mb-12">
              No te voy a vender humo ni tecnicismos. Dime qué necesita tu empresa y te diré cómo la tecnología puede ayudarte a facturar más.
            </p>

            <div className="space-y-6">
              {problems.map((prob, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-4 bg-white rounded-2xl border border-stone-200 shadow-sm"
                >
                  <div className="mt-1"><CheckCircle2 className="text-emerald-500" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-stone-900">{prob.title}</h4>
                    <p className="text-sm text-stone-500">{prob.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-mar-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             
             <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-8 text-mar-100">Dime qué tienes en mente:</h3>
                
                <div className="space-y-8 mb-12">
                   <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-mar-500 transition-colors">
                         <MessageSquare size={24} />
                      </div>
                      <div>
                         <p className="text-xs text-mar-300 uppercase font-bold tracking-widest">WhatsApp</p>
                         <p className="text-lg font-bold">650 676 334</p>
                      </div>
                   </div>

                   <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-mar-500 transition-colors">
                         <Phone size={24} />
                      </div>
                      <div>
                         <p className="text-xs text-mar-300 uppercase font-bold tracking-widest">Teléfono Directo</p>
                         <p className="text-lg font-bold">650 676 334</p>
                      </div>
                   </div>

                   <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-mar-500 transition-colors">
                         <MapPin size={24} />
                      </div>
                      <div>
                         <p className="text-xs text-mar-300 uppercase font-bold tracking-widest">Ubicación</p>
                         <p className="text-lg font-bold">Agaete, Gran Canaria</p>
                      </div>
                   </div>
                </div>

                <a 
                  href="https://wa.me/34650676334" 
                  className="flex items-center justify-center gap-3 w-full py-5 bg-white text-mar-900 rounded-2xl font-bold hover:bg-mar-50 transition-all shadow-xl"
                >
                   Escríbeme ahora <ArrowRight size={20} />
                </a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
