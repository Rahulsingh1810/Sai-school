import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ChairmanMessage } from "@/components/about/chairman-message";
import { MissionVision } from "@/components/about/mission-vision";
import { HistoryTimeline } from "@/components/about/history-timeline";
import { LeadershipTeam } from "@/components/about/leadership-team";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "About Us | Heritage Public School",
  description:
    "Learn about Heritage Public School's rich history, mission, vision, and the dedicated leadership team committed to educational excellence.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Our Story"
        title="Our Story of Excellence"
        description="For over two decades, Heritage Public School has been shaping minds and building futures through quality education and holistic development."
        backgroundImage="/home-car/003.webp"
      />
      <ChairmanMessage />
      <MissionVision />
      {/* <HistoryTimeline /> */}
      {/* <LeadershipTeam /> */}
      <CTASection />
    </>
  );
}
