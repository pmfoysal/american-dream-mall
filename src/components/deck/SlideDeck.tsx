import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DECK_SLIDES, NAVIGATION_ITEMS } from "../../data/deckData";
import { ImmersiveSlide } from "../slides/ImmersiveSlide";
import { CursorFollower } from "../common/CursorFollower";
import styles from "./SlideDeck.module.css";

const SLIDE_ORDER = [
  "hero",
  "hero",
  "why-property",
  "why-property",
  "why-property",
  "retail",
  "retail",
  "luxury",
  "luxury",
  "dining",
  "dining",
  "entertainment",
  "entertainment",
  "entertainment",
  "events",
  "events",
  "venues",
  "venues",
  "leasing",
  "leasing",
];

export function SlideDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideCount = SLIDE_ORDER.length;
  const currentSlideId = DECK_SLIDES[currentIndex]?.id;
  const currentSection = DECK_SLIDES[currentIndex]?.section;

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < slideCount) {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
      }
    },
    [currentIndex, slideCount],
  );

  const nextSlide = useCallback(() => {
    if (currentIndex < slideCount - 1) {
      goToSlide(currentIndex + 1);
    }
  }, [currentIndex, slideCount, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  }, [currentIndex, goToSlide]);

  const goToSection = useCallback(
    (sectionId: string) => {
      const firstSlideIndex = DECK_SLIDES.findIndex((s) => s.section === sectionId);
      if (firstSlideIndex !== -1) {
        goToSlide(firstSlideIndex);
        setIsMenuOpen(false);
      }
    },
    [goToSlide],
  );

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isFullscreen && containerRef.current) {
      containerRef.current.requestFullscreen?.();
    } else if (!isFullscreen && document.fullscreenElement) {
      document.exitFullscreen?.();
    }
  }, [isFullscreen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          prevSlide();
          break;
        case "Escape":
          if (isMenuOpen) setIsMenuOpen(false);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isMenuOpen, toggleFullscreen]);

  const getUniqueSections = () => {
    const seen = new Set();
    return DECK_SLIDES.filter((slide) => {
      if (seen.has(slide.section)) return false;
      seen.add(slide.section);
      return true;
    });
  };

  const uniqueSections = getUniqueSections();

  // Calculate slide index within its section
  const firstIndexOfSection = SLIDE_ORDER.findIndex((s) => s === currentSection);
  const slideIndexInSection = currentIndex - firstIndexOfSection + 1;
  const totalSlidesInSection = SLIDE_ORDER.filter((s) => s === currentSection).length;

  return (
    <div ref={containerRef} className={styles.deckContainer}>
      {/* Custom Cursor */}
      <CursorFollower color="#c9a962" size={10} delay={0.12} />

      {/* Main Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlideId}
          className={styles.slideWrapper}
          initial={{ opacity: 0, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -50 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ImmersiveSlide slide={DECK_SLIDES[currentIndex]} />
        </motion.div>
      </AnimatePresence>

      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <span className={styles.logoText}>AMERICAN DREAM</span>
          <span className={styles.logoSub}>Sales Deck</span>
        </div>
        <div className={styles.topCenter}>
          <span className={styles.slideIndicator}>
            {currentIndex + 1} / {slideCount}
          </span>
        </div>
        <div className={styles.topActions}>
          <button className={styles.iconBtn} onClick={toggleFullscreen} title="Fullscreen (F)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          </button>
          <button className={styles.iconBtn} onClick={() => setIsMenuOpen(true)} title="Menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <motion.div
          className={styles.progressBar}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: (currentIndex + 1) / slideCount }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Section Navigation */}
      <div className={styles.sectionNav}>
        {uniqueSections.map((slide) => (
          <button
            key={slide.section}
            className={`${styles.sectionDot} ${DECK_SLIDES[currentIndex].section === slide.section ? styles.active : ""}`}
            onClick={() => goToSection(slide.section)}
            title={NAVIGATION_ITEMS.find((n) => n.id === slide.section)?.label}
          >
            <span className={styles.sectionDotInner} />
          </button>
        ))}
      </div>

      {/* Arrow Navigation */}
      <button className={`${styles.navArrow} ${styles.prevArrow}`} onClick={prevSlide} disabled={currentIndex === 0}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className={`${styles.navArrow} ${styles.nextArrow}`}
        onClick={nextSlide}
        disabled={currentIndex === slideCount - 1}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Section Label */}
      <div className={styles.sectionLabel}>
        <span className={styles.sectionName}>{NAVIGATION_ITEMS.find((n) => n.id === currentSection)?.label}</span>
        <span className={styles.sectionCount}>
          {slideIndexInSection} / {totalSlidesInSection}
        </span>
      </div>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.fullMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className={styles.closeMenu} onClick={() => setIsMenuOpen(false)}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <nav className={styles.menuNav}>
              {uniqueSections.map((slide, index) => (
                <motion.button
                  key={slide.section}
                  className={`${styles.menuItem} ${currentSection === slide.section ? styles.active : ""}`}
                  onClick={() => goToSection(slide.section)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <span className={styles.menuIcon}>{NAVIGATION_ITEMS.find((n) => n.id === slide.section)?.icon}</span>
                  <span className={styles.menuLabel}>
                    {NAVIGATION_ITEMS.find((n) => n.id === slide.section)?.label}
                  </span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
