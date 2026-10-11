import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { EventsGallery } from "@/components/gallery/events-gallery";
import { SCHOOL_EVENTS } from "@/lib/events-data";

export const metadata: Metadata = {
  title: "Gallery & Events | Heritage Public School",
  description:
    "Explore our events and photo galleries at Heritage Public School. Click on any event to view memorable moments from campus life, celebrations, and achievements.",
};

export default function GalleryAndEventsPage() {
  return (
    <>
      <PageHeader
        badge="Gallery & Events"
        title="Moments of Excellence"
        description="Explore our events and relive the memorable moments. Click on any event to view the complete photo gallery."
        backgroundImage="/commons/events-hero.jpg"
        imagePosition="object-top"
      />
      <EventsGallery initialEvents={SCHOOL_EVENTS} />
    </>
  );
}
