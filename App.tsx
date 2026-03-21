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
import { ChatBot } from './components/ChatBot';
import { About } from './components/About';
import { TechPulse } from './components/TechPulse';
import { ProjectDetail } from './components/ProjectDetail';
import { AgaeteBackground } from './components/AgaeteBackground';
import { SectionConnector } from './components/SectionConnector';
import { TechMarquee } from './components/TechMarquee';
import { NotFound } from './components/NotFound';
import { Legal } from './components/Legal';
import { Services } from './components/Services';
import DoramasLanding from './components/DoramasLanding';

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
  <PageWrapper>
    <Hero />
    <TechPulse />
    <TechMarquee />
    <Portfolio />
    <Pricing />
    <About />
    <FAQ />
    <Contact />
  </PageWrapper>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore - Key is required for AnimatePresence to work correctly with Routes */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/doramas" element={<DoramasLanding />} />
        <Route path="/project/:id" element={
          <PageWrapper>
            <ProjectDetail />
          </PageWrapper>
        } />
        <Route path="/legal" element={<PageWrapper><Legal /></PageWrapper>} />
        <Route path="/servicios" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isDoramas = location.pathname === '/doramas';

  return (
    <>
      <ScrollToTop />
      <div className={`font-sans antialiased ${isDoramas ? '' : 'text-stone-900 bg-[#fafaf9] selection:bg-mar-700 selection:text-white'} overflow-x-hidden min-h-screen relative`}>
        {!isDoramas && (
          <>
            <AgaeteBackground />
            <SectionConnector />
            <Navbar />
          </>
        )}
        
        <AnimatedRoutes />
        
        {!isDoramas && (
          <>
            <Footer />
            <WhatsAppButton />
            <ChatBot />
          </>
        )}
      </div>
    </>
  );
}

export default App;