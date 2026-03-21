import React from 'react';
import { motion } from 'framer-motion';

export const Process: React.FC = () => {
  const steps = [
    { num: '01', title: 'Auditoría & Datos', desc: 'Analizo tu flujo de trabajo actual para identificar cuellos de botella y oportunidades de mejora.' },
    { num: '02', title: 'Arquitectura', desc: 'Diseño sistemas escalables y eficientes, utilizando las tecnologías que mejor se adapten a tu caso.' },
    { num: '03', title: 'Despliegue CI/CD', desc: 'Implemento soluciones robustas con procesos de integración y entrega continua.' },
    { num: '04', title: 'Soporte & Analytics', desc: 'Mantenimiento preventivo y monitorización de KPIs para asegurar el retorno de inversión.' },
  ];

  return (
    <section id="process" className="py-24 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-pueblo-900 mb-6">
              Nuestra Filosofía
              <span className="block text-mar-700 text-2xl mt-2 font-sans font-light italic">Construir para durar.</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              No soy una fábrica de churros. Trabajo cada proyecto como un artesano, cuidando los detalles invisibles que hacen que una web funcione rápido y venda bien durante años.
            </p>
            <div className="p-6 bg-pueblo-50 rounded-xl border border-stone-200">
                <h4 className="text-pueblo-900 font-bold mb-2 font-serif">Calidad Técnica</h4>
                <p className="text-stone-500 text-sm mb-4">Utilizo las mismas herramientas que las grandes empresas, pero adaptadas a nuestra escala local.</p>
                <div className="flex gap-3 text-stone-400 font-mono text-xs uppercase tracking-wide">
                    <span>Seguridad</span>
                    <span>•</span>
                    <span>Velocidad</span>
                    <span>•</span>
                    <span>Diseño</span>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-pueblo-50 rounded-full opacity-50 group-hover:bg-mar-50 transition-colors" />
                <div className="relative z-10">
                    <span className="text-4xl font-serif font-bold text-stone-200 group-hover:text-mar-200 transition-colors block mb-2">{step.num}</span>
                    <h3 className="text-lg font-bold text-pueblo-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-stone-500">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
