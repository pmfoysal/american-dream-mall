import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { Slide } from '../../types';
import styles from './SlideSection.module.css';

interface SlideSectionProps {
  slide: Slide;
  children?: ReactNode;
}

export function SlideSection({ slide, children }: SlideSectionProps) {
  return (
    <section id={`section-${slide.section}`} className={styles.section}>
      <div className={styles.background}>
        <div className={styles.gradientOverlay} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className={styles.header}>
            {slide.subtitle && (
              <span className={styles.subtitle}>{slide.subtitle}</span>
            )}
            <h2 className={styles.title}>{slide.title}</h2>
            {slide.content.description && (
              <p className={styles.description}>{slide.content.description}</p>
            )}
          </div>

          {children}
        </motion.div>
      </div>
    </section>
  );
}
