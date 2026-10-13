import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { EventsGallery } from "@/components/gallery/events-gallery";
import { SCHOOL_EVENTS } from "@/lib/events-data";

export const metadata: Metadata = {
  title: "Gallery & Events - Annual Day, Sports Day & Celebrations",
  description:
    "View photo galleries and moments of excellence from Sri Sai English High School in Adugodi, Bangalore. Celebrations include Sports Day, Annual Day, Republic Day, Independence Day, Saraswati Puja, and Yoga Day.",
  keywords: [
    "Sri Sai English High School gallery",
    "school events Adugodi Bangalore",
    "Sports Day Sri Sai High School",
    "Independence Day celebration Adugodi school",
    "Saraswati Puja school photos Bangalore",
    "cultural activities Sri Sai School",
  ],
  alternates: {
    canonical: "https://srisaienglishhighschool.in/gallery",
  },
  openGraph: {
    title: "Gallery & Events | Sri Sai English High School",
    description:
      "Explore school events, sports days, cultural activities, and student achievements at Sri Sai English High School Adugodi, Bangalore.",
    url: "https://srisaienglishhighschool.in/gallery",
    images: ["/og-image.jpeg"],
  },
};

export default function GalleryAndEventsPage() {
  return (
    <>
      <PageHeader
        badge="Gallery & Events"
        title="Moments of Excellence"
        description="Explore our events and relive memorable moments. Click on any event to view the complete photo gallery."
        backgroundImage="/commons/events-hero.jpg"
        imagePosition="object-top"
      />
      <EventsGallery initialEvents={SCHOOL_EVENTS} />
    </>
  );
}
