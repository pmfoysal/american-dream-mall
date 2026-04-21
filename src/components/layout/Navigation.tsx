import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDeckState } from '../../hooks/useDeckState';
import { NAVIGATION_ITEMS } from '../../data/deckData';
import type { SectionId } from '../../types';
import styles from './Navigation.module.css';

interface NavigationProps {
  children: ReactNode;
}

export function Navigation({ children }: NavigationProps) {
  const { state, actions } = useDeckState();

  const handleNavClick = (sectionId: SectionId) => {
    actions.setActiveSection(sectionId);
    actions.setMenuOpen(false);
    const element = document.getElementById(`section-${sectionId}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.navigationWrapper}>
      {/* Top Bar */}
      <motion.header
        className={styles.topBar}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.logo}>
          <span className={styles.logoText}>AMERICAN DREAM</span>
          <span className={styles.logoSub}>Sales Deck</span>
        </div>

        <nav className={styles.mainNav}>
          {NAVIGATION_ITEMS.slice(1, 5).map((item) => (
            <button
              key={item.id}
              className={`${styles.navItem} ${state.activeSection === item.id ? styles.active : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => actions.setMenuOpen(!state.isMenuOpen)}
        >
          <span className={`${styles.menuIcon} ${state.isMenuOpen ? styles.open : ''}`} />
        </button>
      </motion.header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {state.isMenuOpen && (
          <motion.div
            className={styles.fullMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className={styles.menuNav}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {NAVIGATION_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  className={`${styles.menuItem} ${state.activeSection === item.id ? styles.active : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <span className={styles.menuIconText}>{item.icon}</span>
                  <span className={styles.menuLabel}>{item.label}</span>
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={styles.mainContent}>{children}</main>

      {/* Bottom Progress */}
      <motion.div
        className={styles.progressBar}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: state.scrollProgress }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
