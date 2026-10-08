import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ChairmanMessage } from "@/components/about/chairman-message";
import { MissionVision } from "@/components/about/mission-vision";
import { HistoryTimeline } from "@/components/about/history-timeline";
import { ActivitiesSection } from "@/components/about/activities";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "About Us | Sai English High School",
  description:
    "Learn about Sai English High School's 25-year history, mission, vision, and leadership committed to quality education rooted in strong values and equal opportunity in Adugodi.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Our Story & Philosophy"
        title="Built on a Promise, Not a Privilege"
        description="For 25 years, Sai English High School has been shaping minds and nurturing character through quality education, holistic development, and service to society."
        backgroundImage="/home-car/003.webp"
      />
      <ChairmanMessage />
      <MissionVision />
      <HistoryTimeline />
      <ActivitiesSection />
      <CTASection />
    </>
  );
}
