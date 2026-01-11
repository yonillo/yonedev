import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  Layout,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Smartphone
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('es-ES', { timeZone: 'Atlantic/Canary' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('es-ES', { timeZone: 'Atlantic/Canary' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-16 bg-transparent overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise" />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[15%] -left-[10%] w-[50%] h-[50%] bg-mar-200/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] -right-[5%] w-[40%] h-[60%] bg-tierra-200/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1. PANEL PRINCIPAL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 bg-white border border-stone-200 rounded-[3rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden flex flex-col justify-center group"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                <ShieldCheck size={12} className="text-emerald-400" />
                Artesanía Digital
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-6 leading-[1.05] tracking-tight">
              Hago que tu negocio <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mar-900 via-mar-700 to-mar-500 italic">venda más.</span>
            </h1>
            
            <p className="text-xl text-stone-500 mb-8 max-w-xl leading-relaxed font-medium">
              Soy Yone. Diseño webs rápidas que gestionan tus ventas automáticamente desde <span className="text-stone-900">Agaete</span>.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                Me interesa <ArrowRight size={20} />
              </a>
              <div className="flex items-center gap-3 px-5 py-4 bg-white border border-stone-200 rounded-2xl text-xs font-bold text-stone-700 shadow-sm">
                <CheckCircle2 size={16} className="text-emerald-500" />
                Soporte en el día
              </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA (CORTADA EN DOS) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* 2a. RELOJERÍA AGAETE */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#0c0a09] rounded-[2.5rem] p-6 text-white relative overflow-hidden shadow-xl h-1/2 flex flex-col justify-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mar-900/40 to-transparent" />
              <div className="relative z-10">
                <div className="text-[9px] font-mono text-mar-400 uppercase tracking-[0.3em] mb-1">Puerto de las Nieves</div>
                <div className="text-5xl font-serif font-bold tracking-tighter">{time.split(':')[0]}:{time.split(':')[1]}</div>
                <div className="text-[10px] font-mono text-mar-300/40 uppercase mt-1">Agaete Time</div>
              </div>
            </motion.div>

            {/* 2b. MAQUETA MÓVIL */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-mar-900 rounded-[2.5rem] p-6 text-white relative overflow-hidden shadow-xl h-1/2 flex items-center gap-4 group"
            >
              <div className="relative z-10 flex-1">
                <h4 className="font-bold text-sm mb-1 leading-tight">Tu web en <br />el bolsillo</h4>
                <p className="text-[10px] text-mar-200 uppercase tracking-widest font-mono">Mobile First</p>
              </div>
              <div className="relative z-10 w-20 h-32 bg-stone-950 rounded-2xl border-4 border-stone-800 shadow-2xl overflow-hidden group-hover:rotate-6 transition-transform duration-500">
                <img src="/tamadabasport-web.png" className="w-full h-full object-cover opacity-60" alt="Preview" />
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <Smartphone size={120} />
              </div>
            </motion.div>
          </div>

          {/* 3. CASO DE ÉXITO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 bg-stone-900 rounded-[3rem] p-8 text-white relative overflow-hidden group shadow-2xl min-h-[300px]"
          >
            <div className="absolute inset-0 opacity-50 bg-[url('/coordenadas-web.png')] bg-cover bg-center transition-transform duration-[3s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
            
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="flex justify-between items-end">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    Caso Real: Coordenadas
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-2">Ventas 24/7</h3>
                  <p className="text-stone-400 text-sm">Tu negocio nunca cierra.</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. BLOQUE DE CRECIMIENTO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 bg-white border border-stone-200 rounded-[3rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-mar-600 shadow-sm border border-stone-100">
                  <Layout size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Alta Calidad</h4>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest">Estética Apple</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-mar-600 shadow-sm border border-stone-100">
                  <BarChart3 size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Más Ventas</h4>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest">Datos Reales</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-mar-50 rounded-[2rem] border border-mar-100 flex items-center justify-between group">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-[1.25rem] bg-white flex flex-col items-center justify-center text-mar-600 shadow-sm border border-mar-100 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-xl font-serif font-bold leading-none">+25%</span>
                  <span className="text-[8px] font-bold uppercase tracking-tighter mt-1 text-mar-400">Ventas</span>
                </div>
                <div>
                  <h4 className="font-bold text-mar-900 text-lg">Impulsa tu facturación</h4>
                  <p className="text-sm text-mar-700 font-medium">Digitalización real en Canarias.</p>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex gap-1 items-end h-8">
                   {[30, 50, 40, 80, 100].map((h, i) => (
                     <div key={i} className="w-1 bg-mar-200 rounded-full" style={{ height: `${h}%` }} />
                   ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
