import { motion } from 'framer-motion';
import './DualModeShowcase.css';

const DualModeShowcase = () => {
  return (
    <section className="dual-mode-showcase">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Two Modes. One Vision.</h2>
          <p className="section-subtitle">
            Designed to adapt to your preference, any time of day.
          </p>
        </motion.div>

        <div className="modes-grid">
          <motion.div
            className="mode-card light-mode-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="mode-header">
              <span className="mode-icon">☀️</span>
              <h3>Light Solar Mode</h3>
            </div>
            <p className="mode-description">
              Clean, uplifting energy. Sunrise gradients meet platinum precision.
            </p>
            <div className="mode-preview light-preview">
              <div className="preview-phone">
                <div className="preview-screen">
                  <div className="preview-header light-header">
                    <span className="preview-time">9:41</span>
                  </div>
                  <div className="preview-content">
                    <div className="preview-chart light-chart">
                      <div className="chart-bar" style={{ height: '60%' }}></div>
                      <div className="chart-bar" style={{ height: '80%' }}></div>
                      <div className="chart-bar" style={{ height: '75%' }}></div>
                      <div className="chart-bar" style={{ height: '90%' }}></div>
                    </div>
                    <div className="preview-stats light-stats">
                      <div className="preview-stat">
                        <span className="stat-small-label">Power</span>
                        <span className="stat-small-value">4.2 kW</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mode-card dark-mode-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <div className="mode-header">
              <span className="mode-icon">🌙</span>
              <h3>Dark Solar Mode</h3>
            </div>
            <p className="mode-description">
              Deep space elegance. Neon accents meet OLED perfection.
            </p>
            <div className="mode-preview dark-preview">
              <div className="preview-phone">
                <div className="preview-screen dark-screen">
                  <div className="preview-header dark-header">
                    <span className="preview-time">9:41</span>
                  </div>
                  <div className="preview-content">
                    <div className="preview-chart dark-chart">
                      <div className="chart-bar" style={{ height: '60%' }}></div>
                      <div className="chart-bar" style={{ height: '80%' }}></div>
                      <div className="chart-bar" style={{ height: '75%' }}></div>
                      <div className="chart-bar" style={{ height: '90%' }}></div>
                    </div>
                    <div className="preview-stats dark-stats">
                      <div className="preview-stat">
                        <span className="stat-small-label">Power</span>
                        <span className="stat-small-value">4.2 kW</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DualModeShowcase;
