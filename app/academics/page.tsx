import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { AcademicPrograms } from "@/components/academics/academic-programs";
import { CurriculumOverview } from "@/components/academics/curriculum-overview";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Academics | Heritage Public School",
  description:
    "Explore our comprehensive academic programs, curriculum, and world-class facilities designed to nurture excellence at every level.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        badge="Academics"
        title="Excellence in Education"
        description="Discover our comprehensive academic programs designed to challenge, inspire, and prepare students for success in an ever-evolving world."
        backgroundImage="/academics/002.webp"
      />
      <AcademicPrograms />
      <CurriculumOverview />
      <CTASection />
    </>
  );
}
