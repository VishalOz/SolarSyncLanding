import { useState } from 'react';
import { motion } from 'framer-motion';
import './NotifyMe.css';

const NotifyMe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="notify-me">
      <div className="section-container">
        <motion.div
          className="notify-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get Notified</h2>
          <p className="section-subtitle">
            Be the first to experience Solar Sync when we launch.
          </p>

          {!submitted ? (
            <form className="notify-form" onSubmit={handleSubmit}>
              <motion.div
                className="form-group"
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="email-input"
                />
                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Notify Me
                </motion.button>
              </motion.div>
            </form>
          ) : (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.div
                className="success-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <div className="solar-pulse">
                  <div className="pulse-ring"></div>
                  <div className="pulse-ring delay-1"></div>
                  <div className="pulse-ring delay-2"></div>
                  <span className="check-icon">✓</span>
                </div>
              </motion.div>
              <p className="success-text">You're on the list! We'll notify you soon.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NotifyMe;
