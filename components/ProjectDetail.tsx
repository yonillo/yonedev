import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Cpu, CheckCircle2, BarChart2 } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
          <Link to="/" className="text-mar-600 hover:underline flex items-center gap-2">
            <ArrowLeft size={16} /> Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen pb-24">
      {/* Hero Section del Proyecto */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link to="/" className="text-stone-300 hover:text-white flex items-center gap-2 mb-6 transition-colors">
                <ArrowLeft size={16} /> Volver al portfolio
              </Link>
              <span className="text-mar-400 font-bold tracking-widest uppercase text-sm">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contenido Detallado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Columna Principal: El "Rollo" técnico */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 border-b pb-2">Sobre el Proyecto</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                {project.longDescription || project.description}
              </p>
            </section>

            {project.challenges && (
              <section>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
                  <Cpu className="text-mar-600" size={24} /> Desafíos Técnicos
                </h2>
                <div className="grid gap-4">
                  {project.challenges.map((challenge, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex gap-4">
                      <div className="text-mar-600 font-serif font-bold text-xl italic">0{i+1}</div>
                      <p className="text-stone-700 font-medium">{challenge}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar: Stack y Métricas */}
          <div className="space-y-8">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-mar-900 text-white rounded-xl font-bold hover:bg-mar-800 transition-all shadow-lg shadow-mar-900/20"
              >
                Visitar Proyecto Real <ExternalLink size={18} />
              </a>
            )}

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
              <h3 className="text-lg font-bold text-stone-900 mb-6 border-b pb-2">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-stone-100 text-stone-600 text-xs font-bold rounded-lg border border-stone-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.metrics && (
              <div className="bg-stone-900 p-8 rounded-2xl text-white">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-mar-400">
                  <BarChart2 size={20} /> Impacto & Resultados
                </h3>
                <div className="space-y-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-emerald-400 mt-1 shrink-0" size={16} />
                      <span className="text-stone-300 text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
