import { useState, useEffect, useCallback, useMemo } from 'react';
import type { SectionId } from '../types';
import { DECK_SLIDES } from '../data/deckData';

const SLIDE_ORDER: SectionId[] = [
  'hero',
  'why-property',
  'retail',
  'luxury',
  'dining',
  'entertainment',
  'events',
  'venues',
];

export function useSlideNavigation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [direction, setDirection] = useState(0);

  const currentSection = SLIDE_ORDER[currentIndex];
  const currentSlides = useMemo(() =>
    DECK_SLIDES.filter(slide => slide.section === currentSection),
    [currentSection]
  );
  const slideCount = SLIDE_ORDER.length;

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slideCount) {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    }
  }, [currentIndex, slideCount]);

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

  const goToSection = useCallback((sectionId: SectionId) => {
    const index = SLIDE_ORDER.indexOf(sectionId);
    if (index !== -1) {
      goToSlide(index);
      setIsMenuOpen(false);
    }
  }, [goToSlide]);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          if (isMenuOpen) setIsMenuOpen(false);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isMenuOpen, toggleFullscreen]);

  return {
    currentIndex,
    currentSection,
    currentSlides,
    slideCount,
    direction,
    isFullscreen,
    isMenuOpen,
    goToSlide,
    nextSlide,
    prevSlide,
    goToSection,
    toggleFullscreen,
    setMenuOpen: setIsMenuOpen,
  };
}
