import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { FacilitiesSection } from "@/components/academics/facilities-section";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Facilities | Heritage Public School",
  description:
    "Explore our world-class facilities including modern classrooms, smart classes, science laboratories, library, computer centre, sports arenas, and transport services at Heritage Public School.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        badge="Our Facilities"
        title="World-Class Infrastructure"
        description="Step into a campus designed to inspire. Every facility at Heritage Public School has been crafted to deliver an exceptional learning experience."
        backgroundImage="/new images/facilities-hero.webp"
        imagePosition="object-top"
      />
      <FacilitiesSection />
      <CTASection />
    </>
  );
}
