import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { MapSection } from "@/components/contact/map-section";
import { FAQSection } from "@/components/contact/faq-section";

export const metadata: Metadata = {
  title: "Contact Us | Sri Sai English High School",
  description:
    "Get in touch with Sri Sai English High School in Adugodi, Bangalore. Contact us for admissions inquiries, curriculum details, or campus visits.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Contact Us"
        title="Connect with Sri Sai English High School"
        description="We welcome enquiries from parents, students, and well-wishers regarding admissions, academics, and school facilities."
        backgroundImage="/commons/about.JPG"
        imagePosition=""
      />
      <ContactForm />
      <MapSection />
      <FAQSection />
    </>
  );
}
