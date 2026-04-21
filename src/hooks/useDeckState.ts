import { useState, useCallback, useMemo } from 'react';
import type { DeckState, SectionId } from '../types';

const initialState: DeckState = {
  activeSection: 'hero',
  activeSlideId: null,
  isIntroComplete: false,
  isMenuOpen: false,
  scrollProgress: 0,
};

export function useDeckState() {
  const [state, setState] = useState<DeckState>(initialState);

  const setActiveSection = useCallback((section: SectionId) => {
    setState(prev => ({ ...prev, activeSection: section }));
  }, []);

  const setActiveSlide = useCallback((slideId: string | null) => {
    setState(prev => ({ ...prev, activeSlideId: slideId }));
  }, []);

  const setIntroComplete = useCallback(() => {
    setState(prev => ({ ...prev, isIntroComplete: true }));
  }, []);

  const setMenuOpen = useCallback((isOpen: boolean) => {
    setState(prev => ({ ...prev, isMenuOpen: isOpen }));
  }, []);

  const updateScrollProgress = useCallback((progress: number) => {
    setState(prev => ({ ...prev, scrollProgress: Math.min(1, Math.max(0, progress)) }));
  }, []);

  const resetDeck = useCallback(() => {
    setState(initialState);
  }, []);

  const actions = useMemo(() => ({
    setActiveSection,
    setActiveSlide,
    setIntroComplete,
    setMenuOpen,
    updateScrollProgress,
    resetDeck,
  }), [
    setActiveSection,
    setActiveSlide,
    setIntroComplete,
    setMenuOpen,
    updateScrollProgress,
    resetDeck,
  ],);

  return { state, actions };
}
