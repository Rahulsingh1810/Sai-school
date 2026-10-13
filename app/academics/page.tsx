import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { AcademicPrograms } from "@/components/academics/academic-programs";
import { CurriculumOverview } from "@/components/academics/curriculum-overview";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Academics & Curriculum - Pre-Primary to High School (SSLC)",
  description:
    "Explore Karnataka State Board curriculum and academic programs at Sri Sai English High School in Adugodi, Bangalore. Pre-Primary, Primary, Middle School, and High School with focus on STEM, languages, and holistic development.",
  keywords: [
    "State Board curriculum Bangalore",
    "Karnataka State Board schools Adugodi",
    "Pre-primary school Adugodi",
    "Primary school Bangalore",
    "Middle school curriculum Bangalore",
    "SSLC high school coaching Adugodi",
    "Sri Sai School academic syllabus",
  ],
  alternates: {
    canonical: "https://srisaienglishhighschool.in/academics",
  },
  openGraph: {
    title: "Academics & Programs | Sri Sai English High School",
    description:
      "Comprehensive Karnataka State Board curriculum from Pre-Primary through High School with holistic learning in Adugodi, Bangalore.",
    url: "https://srisaienglishhighschool.in/academics",
    images: ["/og-image.jpeg"],
  },
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
