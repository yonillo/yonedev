import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ExternalLink, Smartphone, Monitor, FlaskConical, Palette, LayoutTemplate, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const Badge = ({ type }: { type: Project['projectType'] }) => {
  switch (type) {
    case 'real':
      return (
        <span className="absolute top-4 right-4 z-20 bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"/> Cliente Real
        </span>
      );
    case 'concept':
      return (
        <span className="absolute top-4 right-4 z-20 bg-indigo-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-indigo-400 flex items-center gap-1">
          <Palette size={10} /> Concept Design
        </span>
      );
    case 'demo':
      return (
        <span className="absolute top-4 right-4 z-20 bg-amber-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-amber-400 flex items-center gap-1">
          <LayoutTemplate size={10} /> Demo Técnica
        </span>
      );
    case 'wip':
      return (
        <span className="absolute top-4 right-4 z-20 bg-stone-800/90 backdrop-blur-md text-stone-200 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-stone-600 flex items-center gap-1">
          <FlaskConical size={10} /> En Laboratorio
        </span>
      );
    default:
      return null;
  }
};

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-pueblo-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              Casos de Éxito & Laboratorio
            </h2>
            <p className="text-stone-500 max-w-lg">
              Soluciones reales para negocios locales y exploraciones creativas para el futuro de las islas.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-stone-500 bg-white px-4 py-2 rounded-full border border-stone-200 shadow-sm">
            <span className="flex items-center gap-1"><Monitor size={14} /> Web</span>
            <span className="text-stone-300">|</span>
            <span className="flex items-center gap-1"><Smartphone size={14} /> Móvil</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white/50 backdrop-blur-sm border border-stone-200 rounded-[2.5rem] p-4 transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)]"
            >
              {/* Card Image Wrapper */}
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-stone-100 shadow-inner">
                
                <Badge type={project.projectType} />
                
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.projectType === 'concept' ? 'grayscale-[20%] group-hover:grayscale-0' : ''}`}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[4px]">
                   <Link 
                      to={`/project/${project.id}`}
                      className="bg-white text-stone-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
                   >
                      Ver Ingeniería <ArrowRight size={18} />
                   </Link>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6 px-4 pb-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-sky-600 text-[11px] font-extrabold tracking-[0.15em] uppercase mb-1 block">
                      {project.category}
                    </span>
                    <Link to={`/project/${project.id}`}>
                      <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1 group-hover:text-sky-700 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                    </Link>
                  </div>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-stone-400 bg-stone-100/50 border border-stone-200/50 px-3 py-1 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
