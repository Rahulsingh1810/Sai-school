import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { FacilitiesSection } from "@/components/academics/facilities-section";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Campus & Facilities - Modern Classrooms, Science & Computer Labs",
  description:
    "Explore campus facilities at Sri Sai English High School in Adugodi, Bangalore: smart digital classrooms, advanced science lab, computer centre, library & resource centre, and sports activities.",
  keywords: [
    "school facilities Adugodi",
    "smart classrooms school Bangalore",
    "computer lab school Bangalore",
    "science lab school Adugodi",
    "school library Adugodi Bangalore",
    "Sri Sai School campus amenities",
  ],
  alternates: {
    canonical: "https://srisaienglishhighschool.in/facilities",
  },
  openGraph: {
    title: "Campus & Facilities | Sri Sai English High School",
    description:
      "World-class supportive learning environment with digital classrooms, science labs, and computer center in Adugodi, Bangalore.",
    url: "https://srisaienglishhighschool.in/facilities",
    images: ["/og-image.jpeg"],
  },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        badge="Our Campus"
        title="World-Class Learning Environment"
        description="Sri Sai English High School provides a supportive and well-equipped learning environment designed to encourage academic excellence, creativity, and holistic development."
        backgroundImage="/new images/facilities-hero.webp"
        imagePosition="object-top"
      />
      <FacilitiesSection />
      <CTASection />
    </>
  );
}
