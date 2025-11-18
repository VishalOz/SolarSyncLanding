import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Real-Time Monitoring',
      description: 'Track your solar power generation and consumption instantly.',
    },
    {
      icon: '📊',
      title: 'Historical Analytics',
      description: 'Deep insights into your solar performance over time.',
    },
    {
      icon: '🔋',
      title: 'Battery Intelligence',
      description: 'Smart grid balancing and battery optimization.',
    },
    {
      icon: '📈',
      title: 'Exportable Reports',
      description: 'Professional reports ready to share and analyze.',
    },
  ];

  return (
    <section className="features">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Solar Sync Does</h2>
          <p className="section-subtitle">
            Intelligent solar energy management, simplified.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 30px 60px var(--accent-glow)'
              }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
