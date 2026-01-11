import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { DataShowcase } from './components/DataShowcase';
import { About } from './components/About';
import { TechPulse } from './components/TechPulse';
import { ProjectDetail } from './components/ProjectDetail';
import { AgaeteBackground } from './components/AgaeteBackground';

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
    <AgaeteBackground />
    <PageWrapper>
      <Hero />
      <TechPulse />
      <Portfolio />
      <Pricing />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </PageWrapper>
  </>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={
          <PageWrapper>
            <ProjectDetail />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-stone-900 bg-stone-50 selection:bg-mar-200 selection:text-mar-900">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;