import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/solarsync73?igsh=MWx0NTl2ZWMxMTl4cA%3D%3D&utm_source=qr',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <circle cx="17.5" cy="6.5" r="1.5" />
        </svg>
      ),
    },
    {
      name: 'Tiktok',
      url: 'https://www.tiktok.com/@solarsync93?_r=1&_t=ZS-91Hm7QRZowc',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
        </svg>
      ),
    },
  ];

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
            <h3 className="footer-logo">SolarKoala</h3>
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
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="social-icon"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; SolarKoala 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
