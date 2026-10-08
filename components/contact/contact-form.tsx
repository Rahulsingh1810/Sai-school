"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contactCards = [
  {
    icon: MapPin,
    title: "School Address",
    details: [
      "Sai English High School",
      "No. 7, II Main Road",
      "Adugodi, Bangalore – 560030",
    ],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 96635 26666", "+91 90350 31256", "+91 91485 95959"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["srisaiselhs2000@gmail.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Monday to Friday: 9:00 AM – 3:30 PM",
      "Saturday: 9:00 AM – 1:00 PM",
    ],
  },
];

const assistanceTopics = [
  "Admission Enquiries",
  "Academic Information",
  "Curriculum Details",
  "School Facilities",
  "Fee and Application Information",
  "General School Enquiries",
];

export function ContactForm() {
  const shouldReduceMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        setError(
          result.message || "Something went wrong. Please try again later."
        );
      }
    } catch {
      setError(
        "Failed to send the message. Please check your network connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Info Side */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Connect with Sai English High School
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We welcome enquiries from parents, students, and well-wishers. For
              information regarding admissions, academics, facilities, or
              general school-related queries, please feel free to get in touch
              with us.
            </p>

            <div className="space-y-6 mb-10">
              {contactCards.map((info) => (
                <div
                  key={info.title}
                  className="flex gap-4 p-4 rounded-2xl bg-secondary/40 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-1">
                      {info.title}
                    </h3>
                    {info.details.map((detail, index) => (
                      <p
                        key={index}
                        className="text-muted-foreground text-sm font-medium"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Assistance & Visit Box */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <h4 className="font-serif text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                Admissions & General Enquiries
              </h4>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                Our team will be happy to assist you with:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {assistanceTopics.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-foreground font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-primary font-semibold italic border-t border-primary/10 pt-3">
                Visit Us: Parents and prospective students are welcome to visit
                the school during office hours for further information and
                assistance.
              </p>
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-card rounded-3xl p-8 sm:p-10 shadow-lg border border-border/70">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                Fill in your details and message below, and our admissions team
                will respond promptly.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center mx-auto mb-6 text-green-600">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Thank You!
                  </h4>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto">
                    Your inquiry has been sent successfully. We look forward to
                    connecting with you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-destructive/10 text-destructive text-sm rounded-xl border border-destructive/20">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Parent / Student Name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Surname"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="example@mail.com"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="e.g. 96635 26666"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full h-11 px-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select an Inquiry Type</option>
                      <option value="Admission Enquiries">Admission Enquiries</option>
                      <option value="Academic Information">Academic Information</option>
                      <option value="Curriculum Details">Curriculum Details</option>
                      <option value="School Facilities">School Facilities</option>
                      <option value="Fee and Application Information">Fee & Application Information</option>
                      <option value="Campus Visit">Schedule a Campus Visit</option>
                      <option value="General School Enquiries">General School Enquiries</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message / Question
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Please let us know which grade you are inquiring about or your questions..."
                      className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl text-base shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Inquiry
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
