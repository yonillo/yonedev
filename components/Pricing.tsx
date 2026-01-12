import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, HeartPulse, Settings2, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Mantenimiento Básico",
      price: "29",
      isStarting: true,
      desc: "Ideal para webs que solo necesitan estar online y seguras.",
      features: ["Alojamiento y Dominio", "Seguridad SSL", "Copias de seguridad", "Soporte técnico básico"],
      icon: ShieldCheck,
      featured: false
    },
    {
      name: "Cuidado & Crecimiento",
      price: "59",
      isStarting: true,
      desc: "Para negocios que quieren vender más y optimizar sus datos.",
      features: ["Todo lo del Básico", "Soporte WhatsApp Prioritario", "Informes de Ventas", "Optimización de Velocidad"],
      icon: HeartPulse,
      featured: true
    },
    {
      name: "Sistemas a Medida",
      price: "Consúltame",
      isStarting: false,
      desc: "Proyectos complejos, sincronización de stock avanzada o software propio.",
      features: ["Arquitectura personalizada", "Integración de APIs", "Dashboards a medida", "Consultoría técnica"],
      icon: Settings2,
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pueblo-900 mb-4">
            Inversión y Cuidado
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Precios orientativos adaptables a tu escala. <br />
            <span className="font-bold text-mar-800 italic">Cada negocio es único, tu presupuesto también.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-10 rounded-[3rem] border flex flex-col transition-all duration-500 hover:-translate-y-2 ${plan.featured ? 'bg-stone-900 text-white border-stone-800 shadow-[0_30px_60px_rgba(0,0,0,0.2)] scale-105 z-10' : 'bg-white/70 backdrop-blur-md border-stone-200 text-stone-900 shadow-sm'}`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-mar-500 text-white text-[10px] font-bold px-6 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-5 mb-8">
                <div className={`p-4 rounded-[1.5rem] ${plan.featured ? 'bg-white/10 text-mar-400' : 'bg-stone-100 text-mar-600'}`}>
                  <plan.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl tracking-tight">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    {plan.isStarting && <span className={`text-[10px] font-bold uppercase tracking-widest ${plan.featured ? 'text-mar-400' : 'text-stone-400'}`}>Desde</span>}
                    <span className="text-3xl font-serif font-bold">{plan.price}{plan.isStarting ? '€' : ''}</span>
                    {plan.isStarting && <span className={`text-xs ${plan.featured ? 'text-mar-400' : 'text-stone-400'}`}>/mes</span>}
                  </div>
                </div>
              </div>

              <p className={`text-sm mb-10 leading-relaxed flex-grow font-medium ${plan.featured ? 'text-stone-400' : 'text-stone-500'}`}>
                {plan.desc}
              </p>

              <ul className="space-y-5 mb-12">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-4 text-[13px] font-semibold">
                    <div className={`w-1.5 h-1.5 rounded-full ${plan.featured ? 'bg-mar-500' : 'bg-mar-600'}`} />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 w-full py-5 rounded-2xl font-bold transition-all ${plan.featured ? 'bg-mar-600 text-white hover:bg-mar-500' : 'bg-stone-900 text-white hover:bg-stone-800'}`}
              >
                Hablemos del proyecto <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white rounded-[2rem] border border-dashed border-stone-300 text-center max-w-3xl mx-auto">
          <p className="text-stone-500 font-medium">
            ¿Necesitas algo diferente? No te preocupes. Nos sentamos, analizamos tus necesidades y te doy un presupuesto cerrado sin compromiso.
          </p>
        </div>
      </div>
    </section>
  );
};