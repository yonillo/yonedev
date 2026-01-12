import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "¿Es muy caro tener una web profesional?",
    a: "Depende de lo que necesites, pero tengo soluciones para todos los bolsillos. Lo importante es que la web se pague sola con las ventas que te genere."
  },
  {
    q: "¿Podré gestionar yo mismo los productos o textos?",
    a: "Totalmente. Te entrego un panel de control muy fácil de usar y te enseño personalmente a gestionarlo. No dependerás de mí para el día a día."
  },
  {
    q: "¿Qué pasa si tengo un problema técnico?",
    a: "Estoy en Agaete. Si algo falla, me escribes por WhatsApp y lo solucionamos en el momento. Soporte real y directo."
  },
  {
    q: "¿Por qué un plan mensual si ya tengo el panel?",
    a: "El panel es para tu contenido. El plan es para tu seguridad: incluye hosting, dominio, copias diarias y protección contra ataques. Es tu seguro de vida digital."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            <HelpCircle size={12} /> Resolviendo dudas
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-stone-500 italic">"Transparencia total desde el primer minuto."</p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, i) => (
            <motion.details 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/70 backdrop-blur-md border border-stone-200 rounded-[2rem] overflow-hidden transition-all hover:border-mar-200"
            >
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                <span className="font-serif font-bold text-xl text-stone-900 pr-8">{faq.q}</span>
                <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-open:rotate-180 transition-transform">
                  <ChevronDown size={18} />
                </div>
              </summary>
              <div className="px-8 pb-8 text-stone-600 leading-relaxed border-t border-stone-100 pt-6 bg-white/30">
                <p className="max-w-2xl">{faq.a}</p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};