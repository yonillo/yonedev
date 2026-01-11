import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, ShoppingBag, ArrowUpRight } from 'lucide-react';

export const DataShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#444_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Tus datos, <br />
              <span className="text-mar-400 italic">convertidos en estrategia.</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8 leading-relaxed">
              No solo construyo la plataforma, también diseño el cerebro detrás de ella. Implemento paneles de control personalizados para que entiendas el comportamiento de tus clientes y optimices tu stock en tiempo real.
            </p>
            
            <ul className="space-y-4">
              {[
                "Seguimiento de ventas en tiempo real",
                "Predicción de demanda y rotación de stock",
                "Análisis de embudo de conversión (CRO)",
                "Integración con APIs de logística y pagos"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-mar-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Simulated Dashboard UI */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-800 rounded-2xl border border-stone-700 p-6 shadow-2xl shadow-black/50"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-stone-100 font-medium">
                <BarChart3 className="w-5 h-5 text-mar-400" />
                Panel de Analítica Estratégica
              </div>
              <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold border border-emerald-500/20">
                Live Analysis
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-700">
                <div className="flex items-center gap-2 text-stone-400 text-xs mb-1">
                  <ShoppingBag className="w-3 h-3" /> Ventas Hoy
                </div>
                <div className="text-2xl font-bold text-white">€1,240</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-2 h-2" /> +12.5% vs ayer
                </div>
              </div>
              <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-700">
                <div className="flex items-center gap-2 text-stone-400 text-xs mb-1">
                  <Users className="w-3 h-3" /> Visitas
                </div>
                <div className="text-2xl font-bold text-white">842</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-2 h-2" /> +5.2% vs ayer
                </div>
              </div>
            </div>

            {/* Visual Bar Graph Placeholder */}
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] text-stone-500 mb-1">
                <span>Rendimiento Semanal</span>
                <span>Optimización: 98.4%</span>
              </div>
              {[60, 85, 45, 95, 70, 55, 90].map((h, i) => (
                <div key={i} className="relative h-2 bg-stone-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${i === 3 ? 'from-mar-500 to-emerald-400' : 'from-stone-600 to-stone-500'}`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-stone-700">
              <a 
                href="#contact" 
                className="flex items-center justify-between p-4 bg-mar-900/30 border border-mar-500/30 rounded-xl text-mar-300 hover:bg-mar-900/50 transition-all group"
              >
                <span className="font-semibold tracking-wide">¿Quieres ver este panel en tu negocio?</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-mar-400" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
