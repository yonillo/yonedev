import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Instagram, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-stone-200 pt-20 pb-10 relative overflow-hidden">
      {/* Sutil textura de fondo */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-noise" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Yone.dev</h3>
            <p className="text-stone-500 max-w-sm leading-relaxed mb-8">
              Fusionando ingeniería de datos y diseño artesanal para digitalizar el comercio de Canarias desde Agaete.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 hover:bg-mar-900 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-stone-900 uppercase text-[10px] tracking-[0.2em] mb-6">Navegación</h4>
            <ul className="space-y-4 text-sm font-medium text-stone-500">
              <li><a href="#portfolio" className="hover:text-mar-600 transition-colors">Proyectos</a></li>
              <li><a href="#pricing" className="hover:text-mar-600 transition-colors">Servicios</a></li>
              <li><a href="#about" className="hover:text-mar-600 transition-colors">Sobre mí</a></li>
              <li><a href="#contact" className="hover:text-mar-600 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Location Focus */}
          <div>
            <h4 className="font-bold text-stone-900 uppercase text-[10px] tracking-[0.2em] mb-6">Ubicación</h4>
            <div className="flex items-start gap-3 text-stone-500">
              <Globe2 size={18} className="text-mar-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-stone-900">Agaete, Gran Canaria</p>
                <p className="text-xs mt-1 leading-relaxed">Operando para todo el <br />archipiélago canario.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
            © {currentYear} YONE.DEV — INGENIERÍA DE SOFTWARE & DATOS
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-stone-400 uppercase tracking-widest">
            <span>Built with React & Engineering</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>System Status: Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
