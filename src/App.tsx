import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';
import DualModeShowcase from './components/DualModeShowcase';
import Features from './components/Features';
import SriLankaFocus from './components/SriLankaFocus';
import FeatureMockups from './components/FeatureMockups';
import NotifyMe from './components/NotifyMe';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Hero isDark={isDark} toggleTheme={toggleTheme} />
          <DualModeShowcase />
          <Features />
          <SriLankaFocus />
          <FeatureMockups />
          <NotifyMe />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
