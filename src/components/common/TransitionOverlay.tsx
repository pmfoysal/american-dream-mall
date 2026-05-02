import { AnimatePresence, motion } from 'framer-motion';
import styles from './TransitionOverlay.module.css';

interface TransitionOverlayProps {
  isActive: boolean;
  sectionName: string;
}

const SECTION_THEMES: Record<string, { color: string; icon: string }> = {
  hero: { color: '#c9a962', icon: '⌂' },
  'why-property': { color: '#3b82f6', icon: '◉' },
  retail: { color: '#8b5cf6', icon: '◈' },
  luxury: { color: '#c9a962', icon: '◆' },
  dining: { color: '#f97316', icon: '◇' },
  entertainment: { color: '#ec4899', icon: '●' },
  events: { color: '#06b6d4', icon: '▲' },
  venues: { color: '#10b981', icon: '⬡' },
  leasing: { color: '#c9a962', icon: '◎' },
};

export function TransitionOverlay({ isActive, sectionName }: TransitionOverlayProps) {
  const theme = SECTION_THEMES[sectionName] || SECTION_THEMES.hero;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Background glow effects */}
          <div className={styles.glowOrb} style={{ background: theme.color }} />
          <div className={styles.glowOrb2} style={{ background: theme.color }} />

          {/* Main content */}
          <motion.div
            className={styles.content}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.1, opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Icon with glow */}
            <motion.span
              className={styles.iconWrapper}
              style={{ borderColor: theme.color }}
              animate={{
                boxShadow: `0 0 30px ${theme.color}40, 0 0 60px ${theme.color}20`,
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            >
              <span className={styles.icon} style={{ color: theme.color }}>
                {theme.icon}
              </span>
            </motion.span>

            {/* Section name with letter spacing animation */}
            <motion.span
              className={styles.sectionName}
              style={{ color: theme.color }}
              initial={{ letterSpacing: '0.1em', opacity: 0 }}
              animate={{ letterSpacing: '0.5em', opacity: 1 }}
              exit={{ letterSpacing: '0.8em', opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {sectionName.replace('-', ' ').toUpperCase()}
            </motion.span>

            {/* Decorative lines */}
            <div className={styles.lineWrapper}>
              <motion.div
                className={styles.line}
                style={{ backgroundColor: theme.color }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
              <motion.div
                className={styles.line}
                style={{ backgroundColor: theme.color }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
            </div>
          </motion.div>

          {/* Corner decorations */}
          <div className={styles.cornerTL} style={{ borderColor: theme.color }} />
          <div className={styles.cornerTR} style={{ borderColor: theme.color }} />
          <div className={styles.cornerBL} style={{ borderColor: theme.color }} />
          <div className={styles.cornerBR} style={{ borderColor: theme.color }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
