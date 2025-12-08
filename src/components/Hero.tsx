import { motion } from 'framer-motion';
import './Hero.css';
import Home from '/home.png';
import light from '/light.png';
import dark from '/dark.png';

interface HeroProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Hero = ({ isDark, toggleTheme }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero-background">
        <motion.div
          className="solar-wave wave-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="solar-wave wave-2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="solar-wave wave-3"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="section-container hero-content">
        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle theme"
        >
          <img 
            src={isDark ? light : dark} 
            alt="theme toggle" 
            style={{ width: '50px', height: '50px', borderRadius: '100px' }}
          />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">SolarKoala</h1>
          <p className="hero-tagline">Your Solar Power, Perfectly Understood.</p>
          <p className="hero-subtitle">Launching Soon in Sri Lanka.</p>

          <div className="hero-actions">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px var(--accent-glow)' }}
              whileTap={{ scale: 0.95 }}
            >
              Notify Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="hero-mockup"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="phone-frame">
            <div className="phone-screen">
              <img src={Home} alt="home.png" className="heroImage"/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
