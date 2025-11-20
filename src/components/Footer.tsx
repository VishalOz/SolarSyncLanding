import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <h3 className="footer-logo">SOLAR SYNC</h3>
            <p className="footer-tagline">Your Solar Power, Perfectly Understood.</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="#team">Team</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <a href="#blog">Blog</a>
              <a href="#support">Support</a>
              <a href="#docs">Documentation</a>
            </div>
          </div>

          <div className="footer-social">
            <motion.a
              href="#"
              className="social-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Twitter"
            >
              
            </motion.a>
            <motion.a
              href="#"
              className="social-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              
            </motion.a>
            <motion.a
              href="#"
              className="social-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
            >
              
            </motion.a>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; Solar Sync 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
