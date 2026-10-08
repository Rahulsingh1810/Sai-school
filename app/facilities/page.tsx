import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { FacilitiesSection } from "@/components/academics/facilities-section";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Facilities | Sai English High School",
  description:
    "Explore our well-equipped campus facilities including modern classrooms, smart classes, science laboratories, library & resource centre, computer centre, and sports facilities at Sai English High School in Adugodi.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        badge="Our Campus"
        title="World-Class Learning Environment"
        description="Sai English High School provides a supportive and well-equipped learning environment designed to encourage academic excellence, creativity, and holistic development."
        backgroundImage="/new images/facilities-hero.webp"
        imagePosition="object-top"
      />
      <FacilitiesSection />
      <CTASection />
    </>
  );
}
