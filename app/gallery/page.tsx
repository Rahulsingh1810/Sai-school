import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { EventsGallery, Event } from "@/components/gallery/events-gallery";
import { contentfulRequest } from "@/lib/contentful-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gallery & Events | Heritage Public School",
  description:
    "Explore our events and photo galleries at Heritage Public School. Click on any event to view memorable moments from campus life, celebrations, and achievements.",
};

const GET_GALLERY_AND_EVENTS = `
  query GetGalleryAndEvents {
    galleryAndEventsCollection(
      order: eventDate_DESC
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
`;

const getCategory = (title: string): string => {
  const t = title.toLowerCase();
  if (t.includes("vismaya") || t.includes("science") || t.includes("academic") || t.includes("class")) {
    return "Academic";
  }
  if (t.includes("tarang") || t.includes("art") || t.includes("music") || t.includes("drama") || t.includes("cultural")) {
    return "Arts";
  }
  return "Cultural"; // fallback default
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (e) {
    return dateStr;
  }
};

async function getEvents(): Promise<Event[]> {
  try {
    const data = await contentfulRequest<{
      galleryAndEventsCollection?: {
        items: Array<{
          sys: { id: string }
          eventId?: string | number
          title: string
          description?: string
          eventDate: string
          eventThumbnail?: {
            url: string
            title?: string
          }
          imagesCollection?: {
            items: Array<{
              sys: { id: string }
              title?: string
              url: string
              width?: number
              height?: number
              contentType?: string
              fileName?: string
            }>
          }
        }>
      }
    }>(GET_GALLERY_AND_EVENTS, undefined, false, {
      next: { tags: ["events", "galleryandevents"] },
    });

    if (!data?.galleryAndEventsCollection?.items) {
      return [];
    }

    return data.galleryAndEventsCollection.items.map((item, index) => {
      const photos = item.imagesCollection?.items.map((img) => ({
        src: img.url || "",
        title: img.title || item.title || ""
      })) || [];

      const idVal = item.eventId ? Number(item.eventId) : index + 1;
      const id = isNaN(idVal) ? index + 1 : idVal;

      return {
        id,
        title: item.title || "",
        date: formatDate(item.eventDate),
        time: "",
        location: "Heritage Public School",
        category: getCategory(item.title || ""),
        image: item.eventThumbnail?.url || photos[0]?.src || "/placeholder.jpg",
        description: item.description || "",
        photos
      };
    });
  } catch (error) {
    console.error("Contentful integration failed. Falling back to local static events:", error);
    return [];
  }
}

export default async function GalleryAndEventsPage() {
  const cmsEvents = await getEvents();

  return (
    <>
      <PageHeader
        badge="Gallery & Events"
        title="Moments of Excellence"
        description="Explore our events and relive the memorable moments. Click on any event to view the complete photo gallery."
        backgroundImage="/new images/events-hero.webp"
        imagePosition="object-top"
      />
      <EventsGallery initialEvents={cmsEvents} />
    </>
  );
}
