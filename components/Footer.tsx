import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <div className="flex items-center gap-4 mb-6">
              <img src="/isotipo.png" alt="" className="w-8 h-8 object-contain" />
              <h3 className="text-2xl font-serif font-bold text-stone-900">yonesuarez.es</h3>
            </div>
            <p className="text-stone-500 max-w-sm leading-relaxed mb-8">
              Fusionando ingeniería de datos y desarrollo de ecosistemas digitales para escalar el comercio de Canarias desde Agaete.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/yone.srz/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 hover:bg-mar-900 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/yone-suarez/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 hover:bg-mar-900 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/yonillo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 hover:bg-mar-900 hover:text-white transition-all">
                <Github size={18} />
              </a>
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
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              © {currentYear} YONE SUÁREZ
            </p>
            <span className="hidden md:block text-stone-200">|</span>
            <Link to="/legal" className="text-[10px] font-bold text-stone-400 uppercase tracking-widest hover:text-mar-600 transition-colors">
              Aviso Legal & Privacidad
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-[9px] font-mono text-stone-400 uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              <span>v3.1.0_stable</span>
            </div>
            <span>Built_with: React_19</span>
            <span>Last_Update: 11_JAN_2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
