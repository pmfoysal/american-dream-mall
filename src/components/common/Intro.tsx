import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Intro.module.css';

interface IntroProps {
  onComplete: () => void;
}

export function Intro({ onComplete }: IntroProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className={styles.intro}
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Animated background */}
      <div className={styles.bgPattern} />
      <div className={styles.bgGlow} />

      {/* Decorative corner frames */}
      <div className={`${styles.corner} ${styles.topLeft}`} />
      <div className={`${styles.corner} ${styles.topRight}`} />
      <div className={`${styles.corner} ${styles.bottomLeft}`} />
      <div className={`${styles.corner} ${styles.bottomRight}`} />

      <motion.div
        className={styles.content}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          className={styles.logo}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          {/* Elegant Diamond Icon */}
          <div className={styles.iconContainer}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className={styles.icon}>
              <path d="M40 8L72 32L40 72L8 32L40 8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M40 8L40 72" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
              <path d="M8 32L72 32" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
              <path d="M40 8L20 32L40 40L60 32L40 8Z" fill="currentColor" opacity="0.2" />
              <circle cx="40" cy="32" r="4" fill="currentColor" />
            </svg>
            <div className={styles.iconGlow} />
          </div>

          <div className={styles.textContainer}>
            <h1 className={styles.logoText}>AMERICAN DREAM</h1>
            <div className={styles.textUnderline} />
          </div>
        </motion.div>

        <motion.p
          className={styles.tagline}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          The Future of Destination Retail
        </motion.p>

        {/* Elegant loader */}
        <motion.div
          className={styles.loaderContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className={styles.loaderTrack}>
            <motion.div
              className={styles.loader}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3.5, ease: 'easeInOut' }}
            />
          </div>
          <span className={styles.loaderText}>Loading Experience</span>
        </motion.div>

        <motion.button
          className={styles.skipBtn}
          onClick={() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Skip Intro
        </motion.button>
      </motion.div>
    </motion.div>
  );
}