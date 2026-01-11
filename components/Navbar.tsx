import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Proyectos', href: '#portfolio' },
  { label: 'Servicios', href: '#pricing' },
  { label: 'Sobre mí', href: '#about' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[100] transition-all duration-500 pt-6 px-4 pointer-events-none">
      <div className={`max-w-5xl mx-auto transition-all duration-500 pointer-events-auto ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border border-stone-200/50 py-3 px-6 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.05)]' 
          : 'bg-transparent py-4 px-2'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`transition-all duration-500 ${isScrolled ? 'w-10 h-10' : 'w-14 h-14'}`}>
              <img 
                src="/logosinnombre.png" 
                alt="Yone.dev Logo" 
                className="w-full h-full object-contain drop-shadow-sm group-hover:rotate-[10deg] transition-all"
              />
            </div>
            <span className={`text-xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}>
              Yone<span className="text-mar-600">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              isHomePage ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-bold uppercase tracking-widest text-stone-500 hover:text-mar-600 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={`/${item.href}`}
                  className="text-[11px] font-bold uppercase tracking-widest text-stone-500 hover:text-mar-600 transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
            {isHomePage ? (
              <a
                href="#contact"
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                  isScrolled 
                    ? 'bg-stone-900 text-white hover:bg-mar-900' 
                    : 'bg-white border border-stone-200 text-stone-900 hover:shadow-lg'
                }`}
              >
                Contacto <ArrowRight size={14} />
              </a>
            ) : (
              <Link
                to="/#contact"
                className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-mar-900 transition-all"
              >
                Contacto <ArrowRight size={14} />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-mar-900 bg-white/50 backdrop-blur-sm rounded-full border border-stone-200"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 md:hidden bg-white/95 backdrop-blur-2xl border border-stone-200 rounded-[2.5rem] overflow-hidden shadow-2xl p-8 z-50 pointer-events-auto"
          >
            <div className="space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-2xl font-serif font-bold text-stone-900 hover:text-mar-600"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-6 border-t border-stone-100">
                <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-3 w-full bg-stone-900 text-white px-6 py-4 rounded-2xl font-bold"
                >
                    Hablemos de tu proyecto <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};