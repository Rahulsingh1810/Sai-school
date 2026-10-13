"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What curriculum does Sri Sai English High School follow?",
    answer:
      "Sri Sai English High School follows the State Board Curriculum with an enriched focus on interactive smart learning, foundational concepts, and preparation for higher education.",
  },
  {
    question: "What are the age eligibility criteria for admission?",
    answer:
      "Age eligibility as of 1st June of the admission year: Pre-Nursery (3+ years), LKG (4+ years), UKG (5+ years), and Grade 1 (6+ years). Term 1 begins during the last week of May or first week of June.",
  },
  {
    question: "What are the school and office hours?",
    answer:
      "School Hours: Kindergarten operates from 9:00 AM – 12:30 PM / 2:00 PM, and Classes I to X operate from 9:00 AM – 3:30 PM. Office Hours: Monday to Friday from 9:00 AM – 3:30 PM and Saturday from 9:00 AM – 1:00 PM.",
  },
  {
    question: "What extracurricular activities and sports are offered?",
    answer:
      "We offer a rich array of activities including yoga, dance & drama, English & Kannada debates, quiz sessions, clay modelling, art & painting, readers circle, eco club, annual sports day, athletics, and inter-house competitions.",
  },
  {
    question: "How can parents visit the school or inquire about admissions?",
    answer:
      "Parents and prospective students are warmly welcome to visit the school campus during office hours. You can also reach us via phone at +91 96635 26666 / +91 90350 31256 or email Srisaisehs2000@gmail.com.",
  },
];

export function FAQSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
            >
              FAQs
            </motion.span>
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl border border-border/70 px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-accent shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pl-8 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
