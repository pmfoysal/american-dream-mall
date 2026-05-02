import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { VenueHotspot } from '../../types';
import styles from './InteractiveHotspot.module.css';

interface InteractiveHotspotProps {
  hotspot: VenueHotspot;
  isSelected: boolean;
  onSelect: (hotspot: VenueHotspot) => void;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

export function InteractiveHotspot({ hotspot, isSelected, onSelect, onClose, onNavigate }: InteractiveHotspotProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    if (isSelected && !isRevealing) {
      setIsRevealing(true);
    }
  }, [isSelected, isRevealing]);

  const handleClick = () => {
    onSelect(hotspot);
  };

  const handleNavigate = () => {
    onNavigate(hotspot.sectionLink);
    onClose();
  };

  return (
    <>
      {/* Hotspot Marker */}
      <motion.button
        className={styles.hotspot}
        style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
        onClick={handleClick}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: hotspot.x / 200 }}
      >
        <span className={styles.hotspotPulse} />
        <span className={styles.hotspotPulse2} />
        <span className={styles.hotspotCore}>
          <span className={styles.hotspotIcon}>+</span>
        </span>
        <span className={styles.hotspotLabel}>{hotspot.name}</span>
      </motion.button>

      {/* Info Panel - The dramatic reveal */}
      <AnimatePresence>
        {isSelected && isRevealing && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.9 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className={styles.panelImageContainer}
              initial={{ height: 0 }}
              animate={{ height: 200 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className={styles.panelImage} style={{ opacity: imageLoaded ? 1 : 0 }}>
                <img
                  src={hotspot.image}
                  alt={hotspot.name}
                  onLoad={() => setImageLoaded(true)}
                />
                <div className={styles.panelImageOverlay} />
              </div>
            </motion.div>

            <div className={styles.panelContent}>
              <motion.span
                className={styles.panelCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Featured Destination
              </motion.span>

              <motion.h3
                className={styles.panelTitle}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                {hotspot.name}
              </motion.h3>

              <motion.p
                className={styles.panelDescription}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {hotspot.description}
              </motion.p>

              <motion.div
                className={styles.panelSpecs}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                {hotspot.specs.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={styles.specItem}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.08 }}
                  >
                    <span className={styles.specValue}>
                      {stat.value}{stat.suffix && <span className={styles.specSuffix}>{stat.suffix}</span>}
                    </span>
                    <span className={styles.specLabel}>{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                className={styles.panelCta}
                onClick={handleNavigate}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(201, 169, 98, 0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                {hotspot.ctaLabel}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>

            <button className={styles.panelClose} onClick={onClose}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface VenueExplorerProps {
  hotspots: VenueHotspot[];
  onNavigate: (section: string) => void;
}

export function VenueExplorer({ hotspots, onNavigate }: VenueExplorerProps) {
  const [selectedHotspot, setSelectedHotspot] = useState<VenueHotspot | null>(null);
  const [exploredCount, setExploredCount] = useState(0);
  const [showPrompt, setShowPrompt] = useState(true);
  const exploredRef = useRef<Set<string>>(new Set());

  const handleSelect = (hotspot: VenueHotspot) => {
    setSelectedHotspot(hotspot);
    setShowPrompt(false);
    if (!exploredRef.current.has(hotspot.id)) {
      exploredRef.current.add(hotspot.id);
      setExploredCount(exploredRef.current.size);
    }
  };

  const handleClose = () => {
    setSelectedHotspot(null);
  };

  const handleNavigate = (section: string) => {
    onNavigate(section);
  };

  return (
    <div className={styles.explorer}>
      {/* Progress Indicator */}
      <motion.div
        className={styles.explorerProgress}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progressFill}
            initial={{ width: 0 }}
            animate={{ width: `${(exploredCount / hotspots.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className={styles.progressText}>
          <span className={styles.progressCount}>{exploredCount}</span>
          <span className={styles.progressDivider}>/</span>
          <span className={styles.progressTotal}>{hotspots.length}</span>
        </span>
        <span className={styles.progressLabel}>areas explored</span>
      </motion.div>

      {/* Explore Prompt - fades after first interaction */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            className={styles.explorerPrompt}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <span className={styles.promptIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </span>
            <span className={styles.promptText}>Click the + icon to explore</span>
            <span className={styles.promptArrow}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hotspots */}
      {hotspots.map((hotspot) => (
        <InteractiveHotspot
          key={hotspot.id}
          hotspot={hotspot}
          isSelected={selectedHotspot?.id === hotspot.id}
          onSelect={handleSelect}
          onClose={handleClose}
          onNavigate={handleNavigate}
        />
      ))}

      {/* Backdrop for panel */}
      <AnimatePresence>
        {selectedHotspot && (
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
