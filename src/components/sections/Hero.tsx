import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

interface HeroProps {
  onIntroComplete?: () => void;
}

export function Hero({ onIntroComplete }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onIntroComplete?.();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onIntroComplete]);

  return (
    <section className={styles.hero}>
      {/* Video Background */}
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.videoOverlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.badgeDot} />
          <span>Now Leasing</span>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          AMERICAN DREAM
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          The Future of Destination Retail
        </motion.p>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className={styles.stat}>
            <span className={styles.statValue}>3.2M</span>
            <span className={styles.statLabel}>Square Feet</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>40M+</span>
            <span className={styles.statLabel}>Annual Visitors</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>350+</span>
            <span className={styles.statLabel}>Retail & Dining</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <span className={styles.hintText}>Use arrows or dots to navigate</span>
        </motion.div>
      </div>
    </section>
  );
}
