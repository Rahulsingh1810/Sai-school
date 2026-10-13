import { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { MapSection } from "@/components/contact/map-section";
import { FAQSection } from "@/components/contact/faq-section";

export const metadata: Metadata = {
  title: "Contact & Admissions - Location, Phone & Enquiries",
  description:
    "Get in touch with Sri Sai English High School in Adugodi, Bangalore (560030). Contact our admissions office at +91 96635 26666 / +91 90350 31256 or email Srisaisehs2000@gmail.com for school admissions, visits, and details.",
  keywords: [
    "Sri Sai English High School contact number",
    "school admissions in Adugodi Bangalore",
    "Sri Sai High School Adugodi address",
    "contact school Adugodi",
    "school admission enquiry Bangalore",
    "Sri Sai School phone number",
  ],
  alternates: {
    canonical: "https://srisaienglishhighschool.in/contact",
  },
  openGraph: {
    title: "Contact & Admissions | Sri Sai English High School",
    description:
      "Contact Sri Sai English High School in Adugodi, Bangalore for admissions inquiries, campus tours, and details.",
    url: "https://srisaienglishhighschool.in/contact",
    images: ["/og-image.jpeg"],
  },
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
