import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { AcademicPrograms } from "@/components/academics/academic-programs";
import { CurriculumOverview } from "@/components/academics/curriculum-overview";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Academics | Sri Sai English High School",
  description:
    "Explore the State Board curriculum, comprehensive academic programs from Pre-Primary to High School, and holistic development at Sri Sai English High School in Adugodi.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        badge="Academics"
        title="Excellence in Education"
        description="Discover our comprehensive academic programs designed to challenge, inspire, and prepare students for success in an ever-evolving world."
        backgroundImage="/commons/aca-hero.JPG"
      />
      <AcademicPrograms />
      <CurriculumOverview />
      <CTASection />
    </>
  );
}
