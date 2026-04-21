import { motion } from 'framer-motion';
import type { Stat } from '../../types';
import styles from './StatsGrid.module.css';

interface StatsGridProps {
  stats?: Stat[];
  layout?: 'horizontal' | 'grid';
}

export function StatsGrid({ stats = [], layout = 'horizontal' }: StatsGridProps) {
  return (
    <div className={`${styles.statsGrid} ${styles[layout]}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className={styles.statCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={styles.statValue}>
            {stat.value}
            {stat.suffix && <span className={styles.statSuffix}>{stat.suffix}</span>}
          </div>
          <div className={styles.statLabel}>{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
