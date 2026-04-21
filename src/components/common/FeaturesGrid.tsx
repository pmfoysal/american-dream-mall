import { motion } from 'framer-motion';
import type { Feature } from '../../types';
import styles from './FeaturesGrid.module.css';

interface FeaturesGridProps {
  features?: Feature[];
}

export function FeaturesGrid({ features = [] }: FeaturesGridProps) {
  return (
    <div className={styles.featuresGrid}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className={styles.featureCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className={styles.featureIcon}>{feature.icon}</div>
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
