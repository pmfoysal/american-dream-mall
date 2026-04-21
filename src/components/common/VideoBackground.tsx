import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './VideoBackground.module.css';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  children?: React.ReactNode;
}

export function VideoBackground({ src, poster, children }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked, show poster
      });
    }
  }, []);

  return (
    <div className={styles.videoBackground}>
      <video
        ref={videoRef}
        className={`${styles.video} ${isLoaded ? styles.loaded : ''}`}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
      />
      <div className={styles.overlay}>
        {children}
      </div>
    </div>
  );
}

interface VideoSectionProps {
  src: string;
  poster?: string;
  title?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function VideoSection({ src, poster, title, subtitle, align = 'center' }: VideoSectionProps) {
  return (
    <div className={`${styles.videoSection} ${styles[align]}`}>
      <VideoBackground src={src} poster={poster}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {title && <h2 className={styles.title}>{title}</h2>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </motion.div>
      </VideoBackground>
    </div>
  );
}
