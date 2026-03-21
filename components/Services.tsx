import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Bot, 
  BarChart3, 
  Zap, 
  Search, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: "Ecosistemas Web & Apps",
    description: "Desarrollo de plataformas robustas con React y Next.js. No solo hago webs; construyo herramientas de venta rápidas, seguras y escalables.",
    features: ["Performance Extrema", "SEO Técnico Avanzado", "Diseño UI/UX Premium", "Arquitectura en la Nube"],
    icon: Code2,
    color: "bg-blue-500",
    lightColor: "bg-blue-50 text-blue-600"
  },
  {
    title: "Chatbots con IA",
    description: "Implementación de asistentes inteligentes que venden por ti 24/7. Uso modelos de última generación (Gemini/GPT) entrenados con tus datos.",
    features: ["Venta Automatizada", "Atención al Cliente", "Integración con WhatsApp", "Flujos Personalizados"],
    icon: Bot,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Ingeniería de Datos & BI",
    description: "Transformo el caos de datos en decisiones estratégicas. Dashboards en tiempo real para que sepas exactamente qué pasa en tu negocio.",
    features: ["Cuadros de Mando (BI)", "Análisis de Microdatos", "Predicción de Ventas", "Visualización Avanzada"],
    icon: BarChart3,
    color: "bg-amber-500",
    lightColor: "bg-amber-50 text-amber-600"
  },
  {
    title: "Automatización de Procesos",
    description: "Ahorra cientos de horas mensuales. Sincronizo tu stock, facturación y pedidos de forma automática entre tus diferentes herramientas.",
    features: ["Sincronización de Stock", "Scripts a Medida", "Conexión de APIs", "Ahorro de Tiempo Real"],
    icon: Zap,
    color: "bg-purple-500",
    lightColor: "bg-purple-50 text-purple-600"
  },
  {
    title: "Auditoría & Consultoría",
    description: "¿Tu tecnología te está frenando? Analizo tu infraestructura actual y trazo la hoja de ruta técnica para escalar tu facturación.",
    features: ["Auditoría de Conversión", "Estrategia Tecnológica", "Optimización de Costes", "Seguridad de Datos"],
    icon: ShieldCheck,
    color: "bg-stone-500",
    lightColor: "bg-stone-50 text-stone-600"
  },
  {
    title: "Scraping & Monitorización",
    description: "Vigila a tu competencia automáticamente. Sistemas que extraen y analizan precios del mercado para que siempre seas el más competitivo.",
    features: ["Tracking de Precios", "Extracción de Datos", "Alertas de Mercado", "Análisis Comparativo"],
    icon: Search,
    color: "bg-rose-500",
    lightColor: "bg-rose-50 text-rose-600"
  }
];

export const Services: React.FC = () => {
  return (
    <div className="bg-transparent min-h-screen">
      <main className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-mar-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block"
            >
              Soluciones de Ingeniería
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8 tracking-tight"
            >
              Todo lo que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mar-900 to-mar-600 italic">podemos construir.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-stone-500 leading-relaxed font-medium"
            >
              Digitalizo negocios canarios aplicando el rigor de la Ingeniería de Datos. 
              No solo hago webs; diseño sistemas que operan por ti.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/90 backdrop-blur-md rounded-[2.5rem] p-10 border border-stone-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.lightColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-stone-500 text-sm leading-relaxed mb-8 font-medium">
                  {service.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-xs font-bold text-stone-700">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-stone-900 font-bold text-xs uppercase tracking-widest group/link"
                >
                  Consultar proyecto 
                  <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-24 bg-stone-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl"
          >
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-mar-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic">¿Tienes un reto técnico?</h2>
                <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto font-medium">
                  Como ingeniero de datos, mi especialidad es resolver problemas complejos. 
                  Si no está en la lista, cuéntamelo y diseñamos una solución a medida.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#contact" className="bg-white text-stone-900 px-10 py-5 rounded-2xl font-bold hover:bg-mar-500 hover:text-white transition-all duration-300">
                    Hablemos ahora
                  </a>
                  <a href="https://wa.me/34650676334" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-500 transition-all duration-300">
                    WhatsApp Directo
                  </a>
                </div>
             </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};