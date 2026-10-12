import { HeroCarousel } from "@/components/home/hero-carousel"
import { FeaturesSection } from "@/components/home/features-section"
import { AboutPreview } from "@/components/home/about-preview"
import { LegacySection } from "@/components/home/legacy-section"
import { EventsPreview } from "@/components/home/events-preview"
import { CTASection } from "@/components/home/cta-section"
import { ContactModal } from "@/components/shared/contact-modal"
import { SCHOOL_EVENTS } from "@/lib/events-data"

export default function HomePage() {
  const recentEvents = SCHOOL_EVENTS.slice(0, 3)

  return (
    <>
      <HeroCarousel />
      <AboutPreview />
      <FeaturesSection />
      <LegacySection />
      <EventsPreview events={recentEvents} />
      <CTASection />
      <ContactModal autoOpenDelay={6000} />
    </>
  )
}
