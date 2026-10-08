import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { MapSection } from "@/components/contact/map-section";
import { FAQSection } from "@/components/contact/faq-section";

export const metadata: Metadata = {
  title: "Contact Us | Heritage Public School",
  description:
    "Get in touch with Heritage Public School. Contact us for admissions inquiries, campus visits, or any questions about our programs.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Contact Us"
        title="Let's Connect"
        description="Have questions about admissions, programs, or want to schedule a visit? We're here to help you every step of the way."
        backgroundImage="/Facilities/building.webp"
        imagePosition=""
      />
      <ContactForm />
      <MapSection />
      <FAQSection />
    </>
  );
}
