import { SlideSection } from './SlideSection';
import { StatsGrid } from '../common/StatsGrid';
import { FeaturesGrid } from '../common/FeaturesGrid';
import { VideoSection } from '../common/VideoBackground';
import { getSlidesBySection } from '../../data/deckData';
import styles from './Sections.module.css';

export function WhyPropertySection() {
  const slides = getSlidesBySection('why-property');

  return (
    <>
      {slides.map((slide) => (
        <SlideSection key={slide.id} slide={slide}>
          {slide.content.stats && <StatsGrid stats={slide.content.stats} layout="grid" />}
        </SlideSection>
      ))}
    </>
  );
}

export function RetailSection() {
  const slides = getSlidesBySection('retail');

  return (
    <>
      {slides.map((slide) => (
        <SlideSection key={slide.id} slide={slide}>
          {slide.content.features && <FeaturesGrid features={slide.content.features} />}
        </SlideSection>
      ))}
    </>
  );
}

export function LuxurySection() {
  const slides = getSlidesBySection('luxury');

  return (
    <>
      {slides.map((slide) => (
        <SlideSection key={slide.id} slide={slide}>
          {slide.content.features && <FeaturesGrid features={slide.content.features} />}
          {slide.content.stats && <StatsGrid stats={slide.content.stats} />}
        </SlideSection>
      ))}
    </>
  );
}

export function DiningSection() {
  const slides = getSlidesBySection('dining');

  return (
    <>
      <VideoSection
        src="https://assets.mixkit.co/videos/preview/mixkit-making-a-coffee-drink-4463-large.mp4"
        poster="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
        title="Culinary Experiences"
        subtitle="From celebrity chefs to artisan food halls"
        align="center"
      />
      {slides.map((slide) => (
        <SlideSection key={slide.id} slide={slide}>
          {slide.content.features && <FeaturesGrid features={slide.content.features} />}
        </SlideSection>
      ))}
    </>
  );
}

export function EntertainmentSection() {
  const slides = getSlidesBySection('entertainment');

  return (
    <>
      <VideoSection
        src="https://assets.mixkit.co/videos/preview/mixkit-water-park-in-the-city-4357-large.mp4"
        poster="https://images.unsplash.com/photo-1545127398-14699f92334b?w=1920&q=80"
        title="World-Class Entertainment"
        subtitle="Water parks, theme parks, and more"
        align="center"
      />
      {slides.map((slide) => (
        <SlideSection key={slide.id} slide={slide}>
          {slide.content.stats && <StatsGrid stats={slide.content.stats} />}
        </SlideSection>
      ))}
    </>
  );
}

export function EventsSection() {
  const slides = getSlidesBySection('events');

  return (
    <>
      <VideoSection
        src="https://assets.mixkit.co/videos/preview/mixkit-crowd-cheering-at-a-concert-4044-large.mp4"
        poster="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
        title="The Event Platform"
        subtitle="Where brands become legends"
        align="center"
      />
      {slides.map((slide) => (
        <SlideSection key={slide.id} slide={slide}>
          {slide.content.features && <FeaturesGrid features={slide.content.features} />}
        </SlideSection>
      ))}
    </>
  );
}

export function VenuesSection() {
  const slides = getSlidesBySection('venues');

  return (
    <>
      {slides.map((slide) => (
        <SlideSection key={slide.id} slide={slide}>
          {slide.content.stats && <StatsGrid stats={slide.content.stats} layout="grid" />}
          {slide.content.highlights && (
            <ul className={styles.highlights}>
              {slide.content.highlights.map((highlight, index) => (
                <li key={index} className={styles.highlight}>{highlight}</li>
              ))}
            </ul>
          )}
        </SlideSection>
      ))}
    </>
  );
}

export function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBackground}>
        <div className={styles.ctaGradient} />
      </div>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>Be Part of the Future</h2>
        <p className={styles.ctaDescription}>
          Whether you&apos;re a luxury brand, a growing retailer, an event promoter, or a corporate sponsor, there&apos;s a place for you at American Dream.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.primaryBtn}>Inquire About Leasing</button>
          <button className={styles.secondaryBtn}>Contact Events Team</button>
        </div>
      </div>
    </section>
  );
}
