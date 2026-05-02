import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { ExtendedSlide } from "../../types";
import { StatsGrid } from "../common/StatsGrid";
import { FeaturesGrid } from "../common/FeaturesGrid";
import { Particles } from "../common/Particles";
import { VenueExplorer } from "../common/InteractiveHotspot";
import styles from "./ImmersiveSlide.module.css";

interface ImmersiveSlideProps {
  slide: ExtendedSlide;
  isActive?: boolean;
  onNavigate?: (section: string) => void;
}

const SECTION_VARIANTS = {
  hero: { showParticles: true, contentAlign: "center", gradientStyle: "rich" },
  "why-property": { showParticles: true, contentAlign: "center", gradientStyle: "subtle" },
  retail: { showParticles: false, contentAlign: "center", gradientStyle: "accent" },
  luxury: { showParticles: true, contentAlign: "center", gradientStyle: "luxury" },
  dining: { showParticles: true, contentAlign: "center", gradientStyle: "warm" },
  entertainment: { showParticles: true, contentAlign: "center", gradientStyle: "vibrant" },
  events: { showParticles: false, contentAlign: "center", gradientStyle: "energetic" },
  venues: { showParticles: false, contentAlign: "center", gradientStyle: "professional" },
  leasing: { showParticles: false, contentAlign: "center", gradientStyle: "inviting" },
} as const;

export function ImmersiveSlide({ slide, isActive = true, onNavigate }: ImmersiveSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHeroEntered, setIsHeroEntered] = useState(false);

  const sectionVariant = SECTION_VARIANTS[slide.section] || SECTION_VARIANTS.hero;
  const hasHotspots = !!slide.hotspots && slide.hotspots.length > 0;
  const isHeroSection = slide.section === 'hero' && slide.id === 'hero-intro';

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    }
    setIsVisible(false);
  }, [isActive]);

  const handleHeroClick = () => {
    if (isHeroSection && !isHeroEntered) {
      setIsHeroEntered(true);
    }
  };

  const renderMedia = () => {
    if (!slide.media) return null;

    if (slide.media.type === "video") {
      return (
        <div className={styles.mediaContainer}>
          <video
            className={styles.media}
            src={slide.media.src}
            poster={slide.media.poster}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
          />
          <div className={styles.mediaOverlay} />
        </div>
      );
    }

    return (
      <div className={styles.mediaContainer}>
        <img className={styles.media} src={slide.media.src} alt={slide.title} loading="eager" />
        <div className={styles.mediaOverlay} />
      </div>
    );
  };

  const hasMedia = !!slide.media;
  const hasStats = !!slide.stats && slide.stats.length > 0;
  const hasFeatures = !!slide.features && slide.features.length > 0;
  const hasHighlights = !!slide.content.highlights && slide.content.highlights.length > 0;

  // Hero intro overlay - the "I need to be here" moment
  if (isHeroSection && !isHeroEntered) {
    return (
      <div ref={containerRef} className={`${styles.slide} ${hasMedia ? styles.hasMedia : ""}`} onClick={handleHeroClick}>
        {/* Particles Effect */}
        {sectionVariant.showParticles && <Particles count={40} />}

        {/* Background Media */}
        {hasMedia && renderMedia()}

        {/* Cinematic Intro Overlay */}
        <motion.div
          className={styles.introOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Mark */}
          <motion.div
            className={styles.logoMark}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M40 8L72 24V56L40 72L8 56V24L40 8Z" stroke="#c9a962" strokeWidth="2" fill="none"/>
              <path d="M40 20L60 30V50L40 60L20 50V30L40 20Z" fill="rgba(201,169,98,0.15)"/>
              <circle cx="40" cy="40" r="8" fill="#c9a962"/>
            </svg>
          </motion.div>

          {/* Title */}
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            AMERICAN DREAM
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className={styles.heroTagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            The Future of Destination Retail
          </motion.p>

          {/* Click to Explore CTA */}
          <motion.div
            className={styles.exploreCta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className={styles.explorePulse}>
              <span className={styles.explorePulseInner} />
            </div>
            <span className={styles.exploreText}>Click anywhere to explore</span>
          </motion.div>
        </motion.div>

        {/* Gradient for text legibility */}
        <div className={styles.gradientBg} />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`${styles.slide} ${hasMedia ? styles.hasMedia : ""}`}>
      {/* Particles Effect */}
      {sectionVariant.showParticles && <Particles count={25} />}

      {/* Background Media */}
      {hasMedia && renderMedia()}

      {/* Venue Explorer Hotspots */}
      {hasHotspots && onNavigate && (
        <VenueExplorer hotspots={slide.hotspots!} onNavigate={onNavigate} />
      )}

      {/* Gradient Background for text-only slides */}
      {!hasMedia && <div className={styles.gradientBg} />}

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          key={slide.id}
          className={styles.contentInner}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {slide.subtitle && (
            <motion.span
              className={styles.subtitle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {slide.subtitle}
            </motion.span>
          )}

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {slide.title}
          </motion.h2>

          {slide.content.description && (
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {slide.content.description}
            </motion.p>
          )}

          {hasStats && (
            <motion.div
              className={styles.statsContainer}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <StatsGrid stats={slide.stats} layout={hasMedia ? "horizontal" : "grid"} />
            </motion.div>
          )}

          {hasFeatures && (
            <motion.div
              className={styles.featuresContainer}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <FeaturesGrid features={slide.features} />
            </motion.div>
          )}

          {hasHighlights && (
            <motion.ul
              className={styles.highlights}
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              {slide.content.highlights?.map((h, i) => (
                <motion.li
                  key={i}
                  className={styles.highlight}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -10 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                >
                  <span className={styles.highlightDot} />
                  {h}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.decorCorner} />
      <div className={styles.decorLine} />
    </div>
  );
}
