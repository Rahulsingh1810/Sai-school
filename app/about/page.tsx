import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ChairmanMessage } from "@/components/about/chairman-message";
import { MissionVision } from "@/components/about/mission-vision";
import { HistoryTimeline } from "@/components/about/history-timeline";
import { ActivitiesSection } from "@/components/about/activities";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "About Us - 25+ Years of Educational Excellence",
  description:
    "Learn about Sri Sai English High School's 25-year legacy of educational excellence in Adugodi, Bangalore. Discover our mission, vision, dedicated faculty, and leadership committed to value-based holistic education.",
  keywords: [
    "About Sri Sai English High School",
    "history of Sri Sai School Adugodi",
    "best school vision Adugodi",
    "school chairman message Bangalore",
    "25 years excellence school Bangalore",
    "Sri Sai school management Bangalore",
  ],
  alternates: {
    canonical: "https://srisaienglishhighschool.in/about",
  },
  openGraph: {
    title: "About Us | Sri Sai English High School Bangalore",
    description:
      "25+ years of shaping minds and nurturing character through quality education and service in Adugodi, Bangalore.",
    url: "https://srisaienglishhighschool.in/about",
    images: ["/og-image.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Our Story & Philosophy"
        title="25 Years of Educational Excellence & Values"
        description="For 25 years, Sri Sai English High School has been shaping minds and nurturing character through quality education, holistic development, and service to society."
        backgroundImage="/commons/about-hero.JPG"
      />
      <ChairmanMessage />
      <MissionVision />
      <HistoryTimeline />
      <ActivitiesSection />
      <CTASection />
    </>
  );
}
