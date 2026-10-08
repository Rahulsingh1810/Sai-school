"use client"

import { motion, useReducedMotion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are the admission requirements?",
    answer: "Admission requirements include completed application form, previous academic records, entrance assessment, and an interview with the admissions committee. We accept applications year-round, with priority given to early applicants."
  },
  {
    question: "Do you offer financial aid or scholarships?",
    answer: "Yes, we offer merit-based scholarships and need-based financial aid to eligible students. Applications for financial assistance are reviewed confidentially by our financial aid committee."
  },
  {
    question: "What extracurricular activities are available?",
    answer: "We offer a wide range of extracurricular activities including sports teams, music and arts programs, robotics club, debate society, drama club, community service organizations, and various academic clubs."
  },
  {
    question: "What is the school's approach to technology in education?",
    answer: "We integrate technology thoughtfully into our curriculum with smart classrooms, computer labs, and digital learning tools. Students learn to use technology as a tool for learning while maintaining a balance with traditional teaching methods."
  },
  {
    question: "How can I schedule a campus visit?",
    answer: "You can schedule a campus visit by contacting our admissions office through the contact form above, by phone, or by email. We offer individual tours as well as group open house events throughout the year."
  },
]

export function FAQSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
            >
              FAQs
            </motion.span>
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-accent shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
