import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { ExtendedSlide } from "../../types";
import { StatsGrid } from "../common/StatsGrid";
import { FeaturesGrid } from "../common/FeaturesGrid";
import { Particles } from "../common/Particles";
import styles from "./ImmersiveSlide.module.css";

interface ImmersiveSlideProps {
  slide: ExtendedSlide;
  isActive?: boolean;
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

export function ImmersiveSlide({ slide, isActive = true }: ImmersiveSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const sectionVariant = SECTION_VARIANTS[slide.section] || SECTION_VARIANTS.hero;

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    }
    setIsVisible(false);
  }, [isActive]);

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

  return (
    <div ref={containerRef} className={`${styles.slide} ${hasMedia ? styles.hasMedia : ""}`}>
      {/* Particles Effect */}
      {sectionVariant.showParticles && <Particles count={25} />}

      {/* Background Media */}
      {hasMedia && renderMedia()}

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
