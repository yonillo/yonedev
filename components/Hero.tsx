import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  Layout,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Smartphone,
  Activity,
  Calendar
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('es-ES', { timeZone: 'Atlantic/Canary' }));
  const [greeting, setGreeting] = useState('');

  // Mouse tracking solo para el Hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('es-ES', { timeZone: 'Atlantic/Canary' }));
      
      const hour = now.getHours();
      if (hour >= 6 && hour < 13) setGreeting('Buenos días');
      else if (hour >= 13 && hour < 20) setGreeting('Buenas tardes');
      else setGreeting('Buenas noches');
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="relative pt-24 pb-16 bg-transparent overflow-hidden">
      
      {/* FOCO DE LUZ INTERACTIVO */}
      <motion.div 
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform'
        }}
        className="absolute top-0 left-0 w-[800px] h-[800px] pointer-events-none z-0 hidden md:block"
      >
        <div className="w-full h-full rounded-full" 
             style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)' }} />
      </motion.div>

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
                Ingeniería local para toda Canarias
              </div>
              
              {/* Badge de Disponibilidad */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider">
                <Calendar size={12} />
                Disponible para nuevos proyectos
              </div>
            </div>
            
            <h1 className="text-5xl md:text-[5rem] font-serif font-bold text-stone-900 mb-6 leading-[0.95] tracking-tight">
              {greeting}, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mar-900 via-mar-700 to-mar-500 italic">escalabilidad y datos.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-500 mb-8 max-w-2xl leading-relaxed font-medium">
              Soy Yone. <span className="relative inline-block text-stone-900 font-bold">
                Convierto tecnología en <span className="text-emerald-600">rentabilidad.</span>
                <span className="absolute bottom-1 left-0 w-full h-1.5 bg-emerald-500/20 rounded-full -z-10"></span>
              </span> Desarrollo ecosistemas digitales diseñados para <span className="text-transparent bg-clip-text bg-gradient-to-r from-mar-700 to-mar-500 font-bold italic">vender más</span> y operar mejor. Ingeniería de élite para <span className="text-stone-900 font-bold underline decoration-amber-500 decoration-4 underline-offset-4">escalar tu negocio</span> desde Canarias.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:shadow-[0_20px_40px_rgba(12,74,110,0.2)] hover:-translate-y-1 transition-all duration-300">
                Iniciar consulta técnica <ArrowRight size={20} />
              </a>
              <div className="flex items-center gap-3 px-5 py-4 bg-white border border-stone-200 rounded-2xl text-xs font-bold text-stone-700 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Soporte prioritario
              </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* 2a. RELOJERÍA TÉCNICA (AGAETE NODE) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#0c0a09] rounded-[2.5rem] p-6 text-white relative overflow-hidden shadow-2xl h-1/2 flex flex-col justify-center text-center group border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mar-900/40 via-transparent to-transparent" />
              
              {/* Pulsar effect sutil */}
              <div className="absolute top-4 right-6 flex items-center gap-1.5">
                <span className="text-[8px] font-mono text-emerald-500/80 uppercase tracking-[0.2em]">Node_Active</span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
              </div>

              <div className="relative z-10">
                <div className="text-[9px] font-mono text-mar-400 uppercase tracking-[0.3em] mb-1">Agaete_Time_Sync</div>
                <div className="text-6xl font-serif font-bold tracking-tighter group-hover:scale-110 transition-transform duration-700">{time.split(':')[0]}:{time.split(':')[1]}</div>
                <div className="text-[10px] font-mono text-stone-500 uppercase mt-2 tracking-widest">Uptime: 99.9%</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-mar-950 rounded-[2.5rem] p-6 text-white relative overflow-hidden shadow-2xl h-1/2 flex items-center gap-4 group border border-mar-800/50"
            >
              <Link to="/project/agaete-live" className="absolute inset-0 z-20" />
              <div className="relative z-10 flex-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-mar-500/20 text-mar-400 text-[8px] font-bold uppercase tracking-widest mb-2 border border-mar-500/30">
                  <Zap size={10} /> Lab_Project
                </div>
                <h4 className="font-serif font-bold text-lg mb-1 leading-tight text-mar-500">Agaete.live</h4>
                <p className="text-[10px] text-stone-400 leading-relaxed font-medium italic">Prototipo visionario de <br />ciudad inteligente.</p>
              </div>
              <div className="relative z-10 w-24 h-40 bg-stone-900 rounded-2xl border-2 border-white/10 shadow-2xl overflow-hidden group-hover:scale-105 group-hover:rotate-2 transition-all duration-700">
                <img src="/isotipo.png" className="w-full h-full object-contain p-3 drop-shadow-[0_0_20px_rgba(14,165,233,0.4)] invert brightness-200" alt="Preview" />
              </div>
            </motion.div>
          </div>

          {/* 3. CASE STUDY */}
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

          {/* 4. PERFORMANCE GRID */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 bg-white/80 backdrop-blur-md border border-stone-200 rounded-[3rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-stone-50 rounded-[2rem] border border-stone-100 group">
                <Layout className="w-8 h-8 text-mar-600 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h4 className="font-bold text-stone-900 mb-1 text-base">Alta Velocidad</h4>
                <div className="h-1 w-8 bg-mar-200 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
              <div className="p-6 bg-stone-50 rounded-[2rem] border border-stone-100 group">
                <BarChart3 className="w-8 h-8 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h4 className="font-bold text-stone-900 mb-1 text-base">Más Ventas</h4>
                <div className="h-1 w-8 bg-emerald-200 rounded-full group-hover:w-full transition-all duration-500" />
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

        {/* TRUST BAR - TOQUE DE ÉLITE */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 pt-8 border-t border-stone-200/60 flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-stone-400">
            <div className="w-1 h-1 rounded-full bg-stone-300" /> STACK_AUTH:
          </div>
          {['React', 'Next.js', 'PostgreSQL', 'Stripe', 'Vercel', 'Supabase'].map((tech) => (
            <span key={tech} className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">{tech}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
