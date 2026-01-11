import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "¿Es muy caro tener una web profesional?",
    a: "Depende de lo que necesites, pero tengo soluciones para todos los bolsillos. Desde webs sencillas para empezar hasta sistemas complejos de stock. Lo importante es que la web se pague sola con las ventas que te genere."
  },
  {
    q: "¿Podré gestionar yo mismo los productos o textos?",
    a: "Totalmente. Te entrego un panel de control muy fácil de usar y te enseño personalmente a subir fotos, cambiar precios o publicar ofertas. No dependerás de mí para el día a día."
  },
  {
    q: "¿Qué pasa si tengo un problema técnico?",
    a: "Estoy en Agaete. Si algo falla, me llamas o me escribes por WhatsApp y lo solucionamos en el momento. No hablas con una máquina, hablas conmigo directamente."
  },
  {
    q: "¿Soy el dueño de mi página web?",
    a: "Sí, el 100%. El dominio y la web son de tu propiedad. Si algún día decides irte, te llevas todo contigo. Sin contratos de permanencia raros."
  },
  {
    q: "¿Por qué pagar un plan mensual si yo mismo cambio los productos?",
    a: "El panel es para tu comodidad en el día a día. El plan de mantenimiento es para tu tranquilidad técnica: incluye el hosting, el dominio, copias de seguridad diarias y, lo más importante, que si la web falla o te intentan hackear, yo estoy ahí para arreglarlo en minutos sin coste extra."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pueblo-900 mb-4">
            Dudas frecuentes
          </h2>
          <p className="text-stone-500 italic">
            "Transparencia total, para que duermas tranquilo."
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <HelpCircle className="text-mar-600 shrink-0" size={20} />
                  <span className="font-bold text-stone-900 leading-tight">{faq.q}</span>
                </div>
                <ChevronDown className="text-stone-400 group-open:rotate-180 transition-transform" size={20} />
              </summary>
              <div className="px-10 pb-6 text-stone-600 leading-relaxed border-t border-stone-200 pt-4 bg-white/50">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};
