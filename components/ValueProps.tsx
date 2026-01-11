import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Zap, MapPin } from 'lucide-react';
import { ServiceProp } from '../types';

const features: ServiceProp[] = [
  {
    title: "Datos, no intuiciones",
    description: "No solo diseño tu web; implemento sistemas que te dicen quién es tu cliente y qué producto prefiere. Deja de adivinar y empieza a crecer con información real.",
    icon: BarChart3,
  },
  {
    title: "Automatización Real",
    description: "¿Cansado de actualizar el stock a mano? Sincronizo tu tienda física y online automáticamente para que tú solo te preocupes de preparar los pedidos.",
    icon: Zap,
  },
  {
    title: "Tu Partner Tecnológico",
    description: "Cercanía absoluta aquí en el norte de la isla. Si Amazon falla, nadie responde. Si tu sistema tiene un problema, me tienes a un WhatsApp de distancia.",
    icon: MapPin,
  },
];

export const ValueProps: React.FC = () => {
  return (
    <section className="py-24 bg-[#1c1917] relative overflow-hidden">
      {/* Volcanic Stone Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.07] pointer-events-none mix-blend-overlay"></div>
      
      {/* Subtle Sunset Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tierra-500/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-100 mb-4">
            Lo de siempre, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tierra-400 to-tierra-200 italic">
              pero mejorado.
            </span>
          </h2>
          <p className="text-stone-400 text-lg font-light">
            La solidez de la piedra volcánica aplicada a tu infraestructura digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 rounded-2xl bg-stone-50 border border-stone-800 relative overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Card Top Accent (Sunset Gradient) */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tierra-500 via-orange-400 to-mar-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="w-14 h-14 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center justify-center mb-6 group-hover:shadow-tierra-500/20 transition-all duration-300 relative z-10">
                <feature.icon className="w-7 h-7 text-tierra-600 group-hover:text-mar-700 transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-pueblo-900 mb-3 relative z-10">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed relative z-10">
                {feature.description}
              </p>
              
              {/* Subtle texture inside card */}
              <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-multiply" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
