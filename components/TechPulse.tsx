import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Radar, Activity, Zap, ShieldCheck } from 'lucide-react';

import { Link } from 'react-router-dom';

export const TechPulse: React.FC = () => {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => (p + 1) % 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const projectNodes = [
    { name: 'Agaete.live', id: 'agaete-live', x: '40%', y: '42%', status: 'LAB_MODE', color: 'bg-amber-400' },
    { name: 'Coordenadas', id: 'coordenadas-store', x: '55%', y: '50%', status: 'ONLINE', color: 'bg-emerald-400' },
    { name: 'Tamadaba Sport', id: 'tamadaba-sport', x: '45%', y: '40%', status: 'PRE-LAUNCH', color: 'bg-mar-500' },
    { name: 'La Rama Tienda', id: 'la-rama-tienda', x: '38%', y: '45%', status: 'PROPOSAL', color: 'bg-sky-400' },
  ];

  return (
    <section id="radar" className="relative py-48 bg-[#0c0a09] overflow-hidden">
      {/* Transición superior XXL: Efecto niebla volcánica */}
      <div className="absolute top-[-2px] left-0 w-full h-[500px] bg-gradient-to-b from-[#fafaf9] via-[#fafaf9] via-stone-200/20 to-transparent z-10 pointer-events-none" />
      
      {/* Transición inferior XXL */}
      <div className="absolute bottom-[-2px] left-0 w-full h-[500px] bg-gradient-to-t from-[#fafaf9] via-[#fafaf9] via-stone-200/20 to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-[0.2em] font-bold">CLIENTES ACTIVOS EN EL NORTE</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Tu negocio, bajo control
          </h2>
          <p className="text-stone-300 max-w-xl mx-auto italic">
            "Vigilo que tu web funcione y venda mientras tú te encargas de lo importante."
          </p>
        </div>

        <div className="relative h-[450px] max-w-4xl mx-auto bg-stone-900/60 rounded-3xl border border-stone-700 p-8 backdrop-blur-md overflow-hidden shadow-2xl flex items-center justify-center">
          
          {/* Stylized Gran Canaria Map Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
             <svg viewBox="0 0 200 200" className="w-[80%] h-[80%] fill-transparent stroke-mar-500 stroke-[0.7]">
                <path d="M100,20 C120,20 140,25 155,40 C170,55 180,75 180,100 C180,125 170,145 155,160 C140,175 120,180 100,180 C80,180 60,175 45,160 C30,145 20,125 20,100 C20,75 30,55 45,40 C60,25 80,20 100,20 Z" />
                <circle cx="100" cy="100" r="40" />
                <circle cx="100" cy="100" r="20" />
                <line x1="20" y1="100" x2="180" y2="100" />
                <line x1="100" y1="20" x2="100" y2="180" />
             </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{ scale: [0.2, 1.5], opacity: [0, 0.3, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }}
                className="absolute w-[400px] h-[400px] border border-mar-500/30 rounded-full"
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="w-[150%] h-[150%] pointer-events-none will-change-transform"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0deg, rgba(14, 165, 233, 0.15) 30deg, transparent 90deg)',
                borderRadius: '50%',
              }}
            />
          </div>

          {/* Project Nodes */}
          {projectNodes.map((node, i) => (
            <motion.div
              key={node.name}
              className="absolute group z-50"
              style={{ left: node.x, top: node.y }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.5 }}
            >
              <Link to={`/project/${node.id}`} className="block relative cursor-pointer">
                <div className={`w-3 h-3 ${node.color} rounded-full animate-pulse shadow-[0_0_15px_rgba(14,165,233,0.8)]`} />
                
                {/* Hit area larger for easier clicking */}
                <div className="absolute inset-0 -m-4 bg-transparent" />

                <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-mono font-bold text-white bg-mar-900/80 px-2 py-1 rounded border border-mar-500/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {node.name} {" >> "} <span className={node.status === 'ONLINE' ? 'text-emerald-400' : 'text-amber-400'}>{node.status}</span>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Bottom Data Bar */}
          <div className="absolute bottom-6 left-6 right-6 p-6 bg-stone-950/80 backdrop-blur-md border border-stone-800 rounded-2xl flex justify-around items-center shadow-2xl">
             <div className="text-center">
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1 font-bold">Tu Web</p>
                <p className="text-xl font-mono text-emerald-400 font-bold">SIEMPRE ONLINE</p>
             </div>
             <div className="h-8 w-px bg-stone-700" />
             <div className="text-center">
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1 font-bold">Velocidad</p>
                <p className="text-xl font-mono text-mar-500 font-bold">INSTANTÁNEA</p>
             </div>
             <div className="h-8 w-px bg-stone-700" />
             <div className="text-center">
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1 font-bold">Soporte</p>
                <p className="text-xl font-mono text-white font-bold tracking-tighter">AGAETE / CANARIAS</p>
             </div>
          </div>
        </div>

        {/* Feature grid below radar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-mar-900/30 rounded-lg text-mar-500"><Zap size={20} /></div>
              <div>
                <h4 className="text-white font-bold text-sm">Carga Instantánea</h4>
                <p className="text-xs text-stone-500 mt-1">Tus clientes no esperarán. Una web rápida es una web que vende más.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-emerald-900/30 rounded-lg text-emerald-400"><ShieldCheck size={20} /></div>
              <div>
                <h4 className="text-white font-bold text-sm">Seguridad Total</h4>
                <p className="text-xs text-stone-500 mt-1">Protección contra fallos y copias de seguridad automáticas de tus datos.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-stone-800 rounded-lg text-white"><Radar size={20} /></div>
              <div>
                <h4 className="text-white font-bold text-sm">Control de Ventas</h4>
                <p className="text-xs text-stone-500 mt-1">Mira cuánta gente entra y qué compran desde tu propio panel móvil.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
