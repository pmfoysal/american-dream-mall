import type { NavigationItem, ExtendedSlide } from '../types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'hero', label: 'Welcome', icon: '⌂' },
  { id: 'why-property', label: 'Location', icon: '◉' },
  { id: 'retail', label: 'Retail', icon: '◈' },
  { id: 'luxury', label: 'Luxury', icon: '◆' },
  { id: 'dining', label: 'Dining', icon: '◇' },
  { id: 'entertainment', label: 'Entertainment', icon: '●' },
  { id: 'events', label: 'Events', icon: '▲' },
  { id: 'venues', label: 'Venues', icon: '⬡' },
  { id: 'leasing', label: 'Leasing', icon: '◎' },
];

export const DECK_SLIDES: ExtendedSlide[] = [
  {
    id: 'hero-intro',
    title: 'AMERICAN DREAM',
    subtitle: 'The Future of Destination Retail',
    section: 'hero',
    content: {
      description: '3.2 million square feet of retail, entertainment, and dining — the most ambitious destination mall ever built.',
    },
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
    },
    stats: [
      { value: '3.2M', label: 'Square Feet', suffix: '+' },
      { value: '40M', label: 'Annual Visitors', suffix: '' },
      { value: '350+', label: 'Retail & Dining', suffix: '' },
      { value: '16', label: 'Major Venues', suffix: '' },
    ],
    hotspots: [
      {
        id: 'water-park',
        name: 'DreamWorks Water Park',
        x: 15,
        y: 20,
        image: 'https://images.pexels.com/photos/19161771/pexels-photo-19161771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800',
        description: 'North America\'s largest indoor water park with 450,000 sq ft of thrills, relaxation, and family fun — open 365 days a year.',
        specs: [
          { value: '450K', label: 'Square Feet', suffix: '' },
          { value: '15+', label: 'Water Slides', suffix: '' },
          { value: '8', label: 'Pools', suffix: '' },
          { value: '365', label: 'Days Open', suffix: '/year' },
        ],
        ctaLabel: 'Request Water Park Tour',
        sectionLink: 'entertainment',
      },
      {
        id: 'theme-park',
        name: 'Nickelodeon Theme Park',
        x: 85,
        y: 25,
        image: 'https://images.pexels.com/photos/35603799/pexels-photo-35603799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800',
        description: 'An indoor theme park featuring world-class rides, beloved Nickelodeon characters, and attractions for all ages.',
        specs: [
          { value: '12', label: 'Thrill Rides', suffix: '' },
          { value: '8', label: 'Themed Zones', suffix: '' },
          { value: '1M+', label: 'Annual Guests', suffix: '' },
          { value: 'All', label: 'Ages Welcome', suffix: '' },
        ],
        ctaLabel: 'Request Theme Park Tour',
        sectionLink: 'entertainment',
      },
      {
        id: 'luxury-retail',
        name: 'Luxury Retail Mile',
        x: 12,
        y: 75,
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
        description: 'A curated collection of 75+ premium and luxury brands in a sophisticated environment rivaling the world\'s finest destinations.',
        specs: [
          { value: '75+', label: 'Luxury Brands', suffix: '' },
          { value: '45K', label: 'Square Footage', suffix: 'sq ft' },
          { value: '24/7', label: 'Concierge', suffix: '' },
          { value: 'VIP', label: 'Personal Shopping', suffix: '' },
        ],
        ctaLabel: 'Explore Luxury Leasing',
        sectionLink: 'luxury',
      },
      {
        id: 'performing-arts',
        name: 'Performing Arts Center',
        x: 88,
        y: 80,
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        description: 'A state-of-the-art venue designed for concerts, comedy, Broadway-caliber productions, and corporate events.',
        specs: [
          { value: '2,500', label: 'Seating Capacity', suffix: '' },
          { value: '65\'', label: 'Stage Width', suffix: '' },
          { value: '4K', label: 'LED Wall', suffix: '' },
          { value: 'Full', label: 'Production Support', suffix: '' },
        ],
        ctaLabel: 'Inquire About Venues',
        sectionLink: 'venues',
      },
      {
        id: 'dining-district',
        name: 'Dining District',
        x: 25,
        y: 85,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
        description: 'Over 50 dining options from celebrity chef restaurants to artisan food markets — dining as a destination.',
        specs: [
          { value: '50+', label: 'Restaurants', suffix: '' },
          { value: '15', label: 'Chef-Driven', suffix: '' },
          { value: 'Rooftop', label: 'Skyline Views', suffix: '' },
          { value: 'Late', label: 'Night Hours', suffix: '' },
        ],
        ctaLabel: 'Explore Dining Leasing',
        sectionLink: 'dining',
      },
      {
        id: 'expo-center',
        name: 'Exposition Center',
        x: 75,
        y: 85,
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
        description: '100,000 square feet of flexible expo space adaptable for trade shows, conventions, and corporate gatherings.',
        specs: [
          { value: '100K', label: 'Square Feet', suffix: '' },
          { value: '10K', label: 'Capacity', suffix: '' },
          { value: '50+', label: 'Booth Positions', suffix: '' },
          { value: 'Full', label: 'AV Infrastructure', suffix: '' },
        ],
        ctaLabel: 'Plan Your Event',
        sectionLink: 'venues',
      },
    ],
  },
  {
    id: 'hero-stats',
    title: 'By The Numbers',
    subtitle: 'Scale That Defines a New Category',
    section: 'hero',
    content: {
      description: 'American Dream isn\'t just a mall — it\'s a category-defining destination that reshapes how America shops, plays, and experiences.',
    },
    stats: [
      { value: '$4B', label: 'Total Investment', suffix: '' },
      { value: '15K', label: 'Parking Spaces', suffix: '' },
      { value: '365', label: 'Days Open', suffix: '/year' },
      { value: '30M+', label: 'Catchment Area', suffix: '' },
    ],
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3195393/3195393-hd_1920_1080_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    },
  },
  {
    id: 'location-intro',
    title: 'Unmatched Location',
    subtitle: 'Gateway to the Northeast',
    section: 'why-property',
    content: {
      description: 'Positioned at the crossroads of the Northeast corridor — just minutes from Manhattan, accessible to 30 million consumers.',
    },
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=80',
    },
  },
  {
    id: 'location-access',
    title: 'Perfect Access',
    subtitle: 'How Millions Reach Us',
    section: 'why-property',
    content: {
      description: 'A seamless multi-modal transport hub connecting visitors from New York, New Jersey, Pennsylvania, and beyond.',
    },
    stats: [
      { value: '15', label: 'Minutes from NYC', suffix: 'min' },
      { value: '97%', label: 'Highway Visibility', suffix: '' },
      { value: '50K', label: 'Daily Walk-in Traffic', suffix: '' },
      { value: 'NJ Transit', label: 'Direct Rail Access', suffix: '' },
    ],
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80',
    },
  },
  {
    id: 'demographics-intro',
    title: 'Premium Demographics',
    subtitle: 'The Audiences Brands Want',
    section: 'why-property',
    content: {
      description: 'Our visitors represent the most valuable consumer segment in retail — affluent, experience-driven, and highly engaged.',
    },
    stats: [
      { value: '$85K', label: 'Median Household Income', suffix: '' },
      { value: '68%', label: 'Ages 25-54', suffix: '' },
      { value: '6x', label: 'Visit Frequency vs Typical Mall', suffix: '' },
      { value: '2.4', label: 'Hours Average Visit', suffix: 'hrs' },
    ],
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80',
    },
  },
  {
    id: 'retail-overview',
    title: 'Retail Reimagined',
    subtitle: '200+ Brands, One Destination',
    section: 'retail',
    content: {
      description: 'From luxury flagships to innovative pop-ups, American Dream offers retailers an unprecedented opportunity to connect with engaged consumers.',
    },
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80',
    },
    features: [
      { icon: '◈', title: 'Fashion District', description: '200+ fashion retailers from luxury to fast-fashion' },
      { icon: '◈', title: 'Sports Alley', description: 'Premium athletic brands and experiential stores' },
      { icon: '◈', title: 'Tech Hub', description: 'Innovation-first retailers and interactive experiences' },
      { icon: '◈', title: 'Beauty Atelier', description: 'Beauty and wellness with integrated services' },
    ],
  },
  {
    id: 'retail-zones',
    title: 'Themed Retail Zones',
    subtitle: 'Curated Shopping Experiences',
    section: 'retail',
    content: {
      description: 'Each zone is designed as a distinct destination — offering retailers curated foot traffic and shoppers a curated experience.',
    },
    features: [
      { icon: '◈', title: 'The Avenue', description: 'Main street shopping with anchor tenants and grab-and-go concepts' },
      { icon: '◈', title: 'Luxury Mile', description: 'A curated collection of premium and luxury brands' },
      { icon: '◈', title: 'The Market', description: 'Artisan goods, local brands, and unique discovery experiences' },
      { icon: '◈', title: 'Innovation Row', description: 'Tech-forward retailers and concept stores' },
    ],
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80',
    },
  },
  {
    id: 'luxury-intro',
    title: 'The Luxury Collection',
    subtitle: 'Elevated Shopping, Extraordinary Experiences',
    section: 'luxury',
    content: {
      description: 'A curated collection of premium brands in a sophisticated environment that rivals the world\'s finest shopping destinations.',
    },
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3536139/3536139-hd_1920_1080_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&q=80',
    },
  },
  {
    id: 'luxury-services',
    title: 'White Glove Service',
    subtitle: 'Beyond Shopping',
    section: 'luxury',
    content: {
      description: 'Luxury at American Dream extends beyond the products — with VIP services that create unforgettable experiences.',
    },
    stats: [
      { value: '75+', label: 'Luxury Brands', suffix: '' },
      { value: '45K', label: 'Luxury Square Footage', suffix: 'sq ft' },
      { value: '24/7', label: 'Concierge Available', suffix: '' },
      { value: 'VIP', label: 'Personal Shopping', suffix: '' },
    ],
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&q=80',
    },
  },
  {
    id: 'dining-intro',
    title: 'Culinary Experiences',
    subtitle: 'Dining as a Destination',
    section: 'dining',
    content: {
      description: 'From celebrity chef restaurants to hidden-gem local eateries, American Dream\'s culinary offerings are a destination within a destination.',
    },
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3195392/3195392-hd_1920_1080_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80',
    },
  },
  {
    id: 'dining-concepts',
    title: 'Dining Concepts',
    subtitle: 'Something for Every Taste',
    section: 'dining',
    content: {
      description: 'Over 50 dining options across every category — from quick bites to celebrity chef experiences.',
    },
    features: [
      { icon: '◇', title: 'Chef-Driven', description: 'Celebrity chef restaurants and innovative concepts' },
      { icon: '◇', title: 'Food Hall', description: '50+ vendors in our artisan food market' },
      { icon: '◇', title: 'Rooftop Dining', description: 'Al fresco experiences with skyline views' },
      { icon: '◇', title: 'Late Night', description: 'Extended hours for evening activations' },
    ],
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80',
    },
  },
  {
    id: 'entertainment-intro',
    title: 'Legendary Entertainment',
    subtitle: 'Beyond Shopping',
    section: 'entertainment',
    content: {
      description: 'American Dream features world-class entertainment attractions that draw millions of visitors seeking thrills and memorable experiences.',
    },
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3195393/3195393-hd_1920_1080_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=1920&q=80',
    },
  },
  {
    id: 'entertainment-water',
    title: 'DreamWorks Water Park',
    subtitle: 'North America\'s Largest Indoor Water Park',
    section: 'entertainment',
    content: {
      description: 'The largest indoor water park in North America — 450,000 square feet of thrills, relaxation, and family fun, 365 days a year.',
    },
    stats: [
      { value: '450K', label: 'Square Feet', suffix: '' },
      { value: '15+', label: 'Water Slides', suffix: '' },
      { value: '8', label: 'Pools', suffix: '' },
      { value: '365', label: 'Days Open', suffix: '/year' },
    ],
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/34645004/14683872_2560_1440_30fps.mp4',
      poster: 'https://images.pexels.com/photos/31166929/pexels-photo-31166929.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1920',
    },
  },
  {
    id: 'entertainment-theme',
    title: 'Nickelodeon Theme Park',
    subtitle: 'Indoor Theme Park Magic',
    section: 'entertainment',
    content: {
      description: 'An indoor theme park featuring beloved Nickelodeon characters and world-class rides — the perfect family destination.',
    },
    stats: [
      { value: '12', label: 'Thrill Rides', suffix: '' },
      { value: '8', label: 'Themed Zones', suffix: '' },
      { value: '1M+', label: 'Annual Guests', suffix: '' },
      { value: 'All', label: 'Ages Welcome', suffix: '' },
    ],
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1920&q=80',
    },
  },
  {
    id: 'events-intro',
    title: 'The Event Platform',
    subtitle: 'Where Brands Become Legends',
    section: 'events',
    content: {
      description: 'American Dream transforms into a global stage for brand activations, product launches, and cultural moments.',
    },
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3195395/3195395-hd_1920_1080_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
    },
  },
  {
    id: 'events-activations',
    title: 'Brand Activations',
    subtitle: 'Unforgettable Brand Experiences',
    section: 'events',
    content: {
      description: 'Fully customizable brand experiences in prime locations with built-in foot traffic and maximum visibility.',
    },
    features: [
      { icon: '▲', title: 'Product Launches', description: 'High-impact reveal spaces with full production support' },
      { icon: '▲', title: 'Celebrity Appearances', description: 'Integrated talent booking and event management' },
      { icon: '▲', title: 'Seasonal Events', description: 'Year-round programming that drives repeat visits' },
      { icon: '▲', title: 'Influencer Moments', description: 'Social-media optimized activation spaces' },
    ],
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80',
    },
  },
  {
    id: 'venues-pac',
    title: 'Performing Arts Center',
    subtitle: 'World-Class Entertainment Venue',
    section: 'venues',
    content: {
      description: 'A state-of-the-art venue designed for concerts, comedy, Broadway-caliber productions, and corporate events.',
    },
    stats: [
      { value: '2,500', label: 'Seating Capacity', suffix: '' },
      { value: '65\'', label: 'Stage Width', suffix: '' },
      { value: '4K', label: 'LED Wall', suffix: '' },
      { value: 'Full', label: 'Production Support', suffix: '' },
    ],
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3195395/3195395-hd_1920_1080_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
    },
  },
  {
    id: 'venues-expo',
    title: 'Exposition Center',
    subtitle: '100,000 Square Feet of Possibilities',
    section: 'venues',
    content: {
      description: 'A flexible expo space adaptable for trade shows, conventions, corporate gatherings, and large-scale activations.',
    },
    stats: [
      { value: '100K', label: 'Square Feet', suffix: '' },
      { value: '10K', label: 'Capacity', suffix: '' },
      { value: '50+', label: 'Booth Positions', suffix: '' },
      { value: 'Full', label: 'AV Infrastructure', suffix: '' },
    ],
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80',
    },
  },
  {
    id: 'leasing-intro',
    title: 'Partner With Us',
    subtitle: 'The Future Starts Here',
    section: 'leasing',
    content: {
      description: 'Whether you\'re a luxury brand, a growing retailer, an event promoter, or a corporate sponsor, there\'s a place for you at American Dream.',
    },
    stats: [
      { value: 'Flexible', label: 'Lease Terms', suffix: '' },
      { value: 'Custom', label: 'Build-Out Support', suffix: '' },
      { value: 'Full', label: 'Marketing Support', suffix: '' },
      { value: '24/7', label: 'On-Site Management', suffix: '' },
    ],
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/35558019/35558019-hd_1920_1080_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    },
  },
  {
    id: 'leasing-contact',
    title: 'Let\'s Build Something Extraordinary',
    subtitle: 'Connect With Our Team',
    section: 'leasing',
    content: {
      description: 'Our leasing team is ready to help you find the perfect space and create a custom partnership plan.',
      highlights: [
        'Retail Leasing: retail@american-dream.com',
        'Sponsorship & Partnerships: sponsors@american-dream.com',
        'Events & Venues: events@american-dream.com',
        'Press & Media: press@american-dream.com',
      ],
    },
  },
];

export const getSlidesBySection = (section: string): ExtendedSlide[] =>
  DECK_SLIDES.filter(slide => slide.section === section);

export const getSlideById = (id: string): ExtendedSlide | undefined =>
  DECK_SLIDES.find(slide => slide.id === id);
