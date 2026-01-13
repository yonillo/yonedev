import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ExternalLink, ArrowRight, Cpu, Database, Layout, ShieldCheck } from 'lucide-react';
import { projects } from '../data/projects';

const Badge = ({ type }: { type: Project['projectType'] }) => {
  const styles = {
    real: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    concept: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
    demo: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    wip: 'bg-stone-500/10 text-stone-400 border-stone-500/20'
  };
  
  const labels = {
    real: 'Cliente Real',
    concept: 'Concepto',
    demo: 'Laboratorio',
    wip: 'En proceso'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border backdrop-blur-md ${styles[type]}`}>
      {labels[type]}
    </span>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Técnica */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-mar-500" />
              <span className="text-mar-600 text-[10px] font-bold uppercase tracking-[0.3em]">Excellence in Engineering</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">
              Casos de Éxito & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 to-stone-500 italic">Laboratorio Creativo.</span>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              Soluciones reales desarrolladas con precisión técnica y una visión única para el comercio de Canarias.
            </p>
          </motion.div>
          
          <div className="hidden lg:block font-mono text-[10px] text-stone-400 space-y-1 text-right">
            <p>// TOTAL_DEPLOYMENTS: 09</p>
            <p>// ACTIVE_NODES: 04</p>
            <p>// LOCATION: 28.101N 15.703W</p>
          </div>
        </div>

        {/* Grid Inmersivo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex flex-col ${index % 2 !== 0 ? 'lg:mt-20' : ''}`}
            >
              {/* Escenario de Proyecto */}
              <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden bg-white shadow-[0_30px_80px_rgba(0,0,0,0.04)] border border-stone-200 p-4 transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] group-hover:-translate-y-2">
                
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-stone-100 shadow-inner">
                  {/* Imagen Principal */}
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  
                  {/* Capa Blueprint (Originalidad) */}
                  <div className="absolute inset-0 bg-mar-950/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-12 backdrop-blur-sm">
                    {/* Líneas de escaneo animadas */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
                    
                    <div className="relative z-10 text-center space-y-6">
                      <div className="flex justify-center gap-4">
                        <Cpu className="text-mar-400 w-6 h-6 animate-pulse" />
                        <Database className="text-mar-400 w-6 h-6 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <Layout className="text-mar-400 w-6 h-6 animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>
                      <p className="text-mar-200 text-xs font-mono uppercase tracking-[0.2em]">Architecture Preview</p>
                      <Link 
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-3 bg-white text-mar-950 px-8 py-4 rounded-2xl font-bold hover:bg-mar-100 transition-all shadow-2xl"
                      >
                        Ver Ingeniería <ArrowRight size={18} />
                      </Link>
                    </div>

                    {/* Datos técnicos flotantes en el Blueprint */}
                    <div className="absolute top-8 left-8 font-mono text-[8px] text-mar-500/60 leading-relaxed text-left">
                      {`{ status: 'optimal', cache: 'miss', render: 'ssr', build: 'success' }`}
                    </div>
                    <div className="absolute bottom-8 right-8 font-mono text-[8px] text-mar-500/60 text-right">
                      {`hash: 7f8a${index}9c2d...`}
                    </div>
                  </div>
                </div>

                {/* Badge flotante */}
                <div className="absolute top-8 left-8 z-20">
                  <Badge type={project.projectType} />
                </div>
              </div>

              {/* Información del Proyecto */}
              <div className="mt-8 px-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sky-600 text-[10px] font-extrabold tracking-[0.2em] uppercase mb-2 block">
                      {project.category}
                    </span>
                    <Link to={`/project/${project.id}`}>
                      <h3 className="text-3xl font-serif font-bold text-stone-900 mt-1 hover:text-mar-600 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                    </Link>
                  </div>
                  <Link 
                    to={`/project/${project.id}`}
                    className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-mar-900 group-hover:text-white transition-all duration-500"
                  >
                    <ExternalLink size={20} strokeWidth={1.5} />
                  </Link>
                </div>
                
                <p className="text-stone-500 text-lg leading-relaxed mb-8 max-w-md">
                  {project.description}
                </p>

                {/* Tecnologías destacadas en el pie de la tarjeta */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-stone-100">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold text-stone-400 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-lg uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Cierre Inmersivo */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 rounded-[3.5rem] bg-[#0c0a09] text-white overflow-hidden relative"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#0ea5e9_0%,transparent_70%)]" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">¿Tu web no está vendiendo?</h3>
              <p className="text-stone-400">Analizo tu arquitectura actual y detecto fugas de conversión.</p>
            </div>
            <a href="#contact" className="bg-white text-stone-900 px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-stone-100 transition-all shadow-xl whitespace-nowrap">
              Solicitar auditoría gratuita <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};