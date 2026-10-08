import { HeroCarousel } from "@/components/home/hero-carousel"
import { FeaturesSection } from "@/components/home/features-section"
import { AboutPreview } from "@/components/home/about-preview"
import { LegacySection } from "@/components/home/legacy-section"
import { EventsPreview } from "@/components/home/events-preview"
import { CTASection } from "@/components/home/cta-section"
import { contentfulRequest } from "@/lib/contentful-client"
import type { Event } from "@/components/gallery/events-gallery"

const GET_GALLERY_AND_EVENTS = `
  query GetGalleryAndEvents {
    galleryAndEventsCollection(
      order: eventDate_DESC
      limit: 3
    ) {
      items {
        sys {
          id
        }
        eventId
        title
        description
        eventDate
        eventThumbnail {
          title
          url
          width
          height
          contentType
          fileName
        }
        imagesCollection {
          items {
            sys {
              id
            }
            title
            url
            width
            height
            contentType
            fileName
          }
        }
      }
    }
  }
`

const getCategory = (title: string): string => {
  const t = title.toLowerCase()
  if (t.includes("vismaya") || t.includes("science") || t.includes("academic") || t.includes("class")) {
    return "Academic"
  }
  if (t.includes("tarang") || t.includes("art") || t.includes("music") || t.includes("drama") || t.includes("cultural")) {
    return "Arts"
  }
  return "Cultural"
}

const formatDate = (dateStr: string) => {
  if (!dateStr) return ""
  try {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch {
    return dateStr
  }
}

async function getRecentEvents(): Promise<Event[]> {
  try {
    const data = await contentfulRequest<{
      galleryAndEventsCollection?: {
        items: Array<{
          sys: { id: string }
          eventId?: string | number
          title: string
          description?: string
          eventDate: string
          eventThumbnail?: { url: string; title?: string }
          imagesCollection?: {
            items: Array<{
              sys: { id: string }
              title?: string
              url: string
            }>
          }
        }>
      }
    }>(GET_GALLERY_AND_EVENTS, undefined, false, {
      next: { tags: ["events", "galleryandevents"] },
    })

    if (!data?.galleryAndEventsCollection?.items) return []

    return data.galleryAndEventsCollection.items.map((item, index) => {
      const photos =
        item.imagesCollection?.items.map((img) => ({
          src: img.url || "",
          title: img.title || item.title || "",
        })) || []

      const idVal = item.eventId ? Number(item.eventId) : index + 1
      const id = isNaN(idVal) ? index + 1 : idVal

      return {
        id,
        title: item.title || "",
        date: formatDate(item.eventDate),
        time: "",
        location: "Sai English High School, Adugodi",
        category: getCategory(item.title || ""),
        image: item.eventThumbnail?.url || photos[0]?.src || "/placeholder.jpg",
        description: item.description || "",
        photos,
      }
    })
  } catch (error) {
    console.error("Failed to fetch events for home page:", error)
    return []
  }
}

export default async function HomePage() {
  const recentEvents = await getRecentEvents()

  return (
    <>
      <HeroCarousel />
      <AboutPreview />
      <FeaturesSection />
      <LegacySection />
      <EventsPreview events={recentEvents} />
      <CTASection />
    </>
  )
}

