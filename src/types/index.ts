export interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  content: SlideContent;
  media?: MediaAsset;
  cta?: CTA;
  section: SectionId;
}

export interface SlideContent {
  description?: string;
  stats?: Stat[];
  features?: Feature[];
  highlights?: string[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface MediaAsset {
  type: 'video' | 'image';
  src: string;
  alt?: string;
  poster?: string;
}

export interface CTA {
  label: string;
  action: string;
  variant: 'primary' | 'secondary';
}

export type SectionId =
  | 'hero'
  | 'why-property'
  | 'retail'
  | 'luxury'
  | 'dining'
  | 'entertainment'
  | 'events'
  | 'venues'
  | 'leasing';

export interface NavigationItem {
  id: SectionId;
  label: string;
  icon: string;
}

export interface DeckState {
  activeSection: SectionId;
  activeSlideId: string | null;
  isIntroComplete: boolean;
  isMenuOpen: boolean;
  scrollProgress: number;
}

export interface ExtendedSlide extends Slide {
  stats?: Stat[];
  features?: Feature[];
  hotspots?: VenueHotspot[];
}

export interface VenueHotspot {
  id: string;
  name: string;
  x: number; // percentage position on image (0-100)
  y: number; // percentage position on image (0-100)
  image: string;
  description: string;
  specs: Stat[];
  ctaLabel: string;
  sectionLink: SectionId;
}
