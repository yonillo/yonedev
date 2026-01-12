import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { About } from './components/About';
import { TechPulse } from './components/TechPulse';
import { ProjectDetail } from './components/ProjectDetail';
import { AgaeteBackground } from './components/AgaeteBackground';
import { SectionConnector } from './components/SectionConnector';
import { TechMarquee } from './components/TechMarquee';
import { NotFound } from './components/NotFound';
import { Legal } from './components/Legal';

// Componente para asegurar que el scroll siempre vuelva arriba al cambiar de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="relative z-10"
  >
    {children}
  </motion.div>
);

const HomePage = () => (
  <>
    <Hero />
    <TechPulse />
    <TechMarquee />
    <Portfolio />
    <Pricing />
    <About />
    <FAQ />
    <Contact />
  </>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore - Key is required for AnimatePresence to work correctly with Routes */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={
          <PageWrapper>
            <ProjectDetail />
          </PageWrapper>
        } />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-stone-900 bg-[#fafaf9] selection:bg-mar-700 selection:text-white overflow-x-hidden min-h-screen relative">
        {/* Fondo y Conector GLOBALES - Presentes en todas las páginas */}
        <AgaeteBackground />
        <SectionConnector />
        
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;