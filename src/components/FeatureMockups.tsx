import { motion } from 'framer-motion';
import './FeatureMockups.css';

const FeatureMockups = () => {
  const mockups = [
    {
      title: 'Dashboard',
      description: 'Real-time power metrics at a glance',
    },
    {
      title: 'Analytics',
      description: 'Deep insights and trends',
    },
    {
      title: 'Notifications',
      description: 'Stay updated on your system',
    },
    {
      title: 'Device Status',
      description: 'Monitor all connected devices',
    },
  ];

  return (
    <section className="feature-mockups">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience Solar Sync</h2>
          <p className="section-subtitle">
            Every screen designed with precision and purpose.
          </p>
        </motion.div>

        <div className="mockups-grid">
          {mockups.map((mockup, index) => (
            <motion.div
              key={index}
              className="mockup-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                boxShadow: '0 40px 80px var(--accent-glow)'
              }}
            >
              <div className="mockup-phone">
                <div className="mockup-screen">
                  <div className="screen-header">
                    <div className="header-bar"></div>
                  </div>
                  <div className="screen-content">
                    <div className="content-placeholder">
                      <div className="placeholder-circle"></div>
                      <div className="placeholder-lines">
                        <div className="placeholder-line"></div>
                        <div className="placeholder-line short"></div>
                      </div>
                    </div>
                    <div className="content-grid">
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mockup-info">
                <h3>{mockup.title}</h3>
                <p>{mockup.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureMockups;
