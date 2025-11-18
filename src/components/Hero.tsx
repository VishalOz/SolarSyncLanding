import { motion } from 'framer-motion';
import './Hero.css';

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
          {isDark ? '☀️' : '🌙'}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">SOLAR SYNC</h1>
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
              <div className="mockup-content">
                <div className="status-bar">
                  <span>9:41</span>
                  <div className="status-icons">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>
                <div className="app-header">
                  <h2>Solar Sync</h2>
                </div>
                <div className="dashboard-widget">
                  <div className="power-circle">
                    <svg viewBox="0 0 100 100" className="circular-progress">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--border-color)" strokeWidth="8" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="var(--accent-primary)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={{ strokeDashoffset: 62.8 }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </svg>
                    <div className="power-text">
                      <div className="power-value">4.2</div>
                      <div className="power-unit">kW</div>
                    </div>
                  </div>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <span className="stat-label">Today</span>
                      <span className="stat-value">28.5 kWh</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">This Month</span>
                      <span className="stat-value">642 kWh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
