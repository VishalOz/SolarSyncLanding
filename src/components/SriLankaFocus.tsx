import { motion } from 'framer-motion';
import './SriLankaFocus.css';

const SriLankaFocus = () => {
  return (
    <section className="srilanka-focus">
      <div className="section-container">
        <motion.div
          className="srilanka-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="srilanka-text">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="section-title">Built for Sri Lanka</h2>
              <p className="srilanka-description">
                Optimized for Sri Lankan solar systems, climates, and energy tariffs.
              </p>
              <p className="srilanka-details">
                Our algorithms understand the unique patterns of tropical solar generation,
                monsoon seasons, and local grid dynamics to give you the most accurate insights.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="srilanka-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="island-shape">
              <motion.div
                className="sun-graphic"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ☀️
              </motion.div>
              <div className="tropical-elements">
                <span className="element">🌴</span>
                <span className="element">🏝️</span>
                <span className="element">⚡</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SriLankaFocus;
