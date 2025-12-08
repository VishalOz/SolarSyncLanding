import { motion } from 'framer-motion';
import './FeatureMockups.css';

const FeatureMockups = () => {
  const mockups = [
    {
    title: 'Whole Home Dashboard',
    description: 'Unified view of your energy generation, storage, and consumption',
    image: '/home.png',
  },
    {
      title: 'Usage Analytics',
      description: 'Breakdown of energy consumption by appliance and time of day',
      image: '/ai.png',
    },
    {
      title: 'Smart Energy Assistant',
      description: 'AI-driven tips to maximize savings and efficiency automatically',
      image: '/battery.png',
    },
    {
      title: 'Climate Aware Planning',
      description: 'Adjust your energy strategy based on upcoming weather patterns',
      image: '/weather.png',
    }
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
          <h2 className="section-title">Experience SolarKoala</h2>
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
                
              }}
            >
              <div className="mockup-phone">
                <div className="mockup-screen">
                  
                  <div className="screen-content">
                    <img src={mockup.image} alt={mockup.title} className="mockup-image" />
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
