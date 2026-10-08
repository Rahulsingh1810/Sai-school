"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  BookOpen,
  Info,
} from "lucide-react";

const programs = [
  {
    id: "pre-primary",
    title: "Pre-Primary",
    grades: "Pre-Nursery | LKG | UKG",
    image: "/academics/nursery.webp",
    overview:
      "The Pre-Primary programme focuses on joyful and nurturing learning through play, exploration, discovery, and early skill development.",
    focus: [
      "Play-Way Learning",
      "Sensory Activities",
      "Early Literacy & Phonics",
      "Creative Expression",
    ],
  },
  {
    id: "primary",
    title: "Primary School",
    grades: "Classes 1 to 5",
    image: "/academics/primary.webp",
    overview:
      "The Primary School programme is designed to build curiosity, confidence, communication skills, creativity, and a strong academic foundation.",
    focus: [
      "Interactive Learning",
      "Arts & Creativity",
      "Physical Education",
      "Language Development",
    ],
  },
  {
    id: "middle",
    title: "Middle School",
    grades: "Classes 6 to 8",
    image: "/new images/middleschoolnew.webp",
    overview:
      "The Middle School programme encourages critical thinking, independent learning, exploration, and a deeper understanding of academic subjects.",
    focus: [
      "Science Experiments & Investigations",
      "Language Arts",
      "History, Heritage, Geography & Environment",
      "Building Mathematical Minds",
    ],
  },
  {
    id: "high",
    title: "High School",
    grades: "Classes 9 & 10",
    image: "/new images/highschool-new.webp",
    overview:
      "The High School programme prepares students for higher education and future opportunities through rigorous academics, life skills, guidance, and career-oriented development.",
    focus: [
      "Life Skills",
      "College Preparation",
      "Career Counselling",
      "Skills Development",
    ],
  },
];

const ageEligibility = [
  { grade: "Pre-Nursery", age: "3+ years" },
  { grade: "LKG", age: "4+ years" },
  { grade: "UKG", age: "5+ years" },
  { grade: "Grade 1", age: "6+ years" },
];

export function AcademicPrograms() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Academic Structure
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Classes Offered & Learning Focus
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed"
          >
            Our carefully structured learning progression ensures each child transitions smoothly through key developmental and academic milestones.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-16 mb-24">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              id={program.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border/50">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3.5 py-1.5 bg-accent text-accent-foreground text-xs sm:text-sm font-bold rounded-full shadow-md">
                      {program.grades}
                    </span>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  Stage 0{index + 1}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                  {program.overview}
                </p>

                <div className="bg-secondary/60 rounded-2xl p-6 border border-border/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    Learning Focus
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {program.focus.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-foreground/90">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Admissions & Age Eligibility Section */}
        <motion.div
          id="admissions"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border/70 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-3">
              Join Sai English High School
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Admissions & Age Eligibility
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Please review the age criteria and academic schedule for incoming admissions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {ageEligibility.map((item) => (
              <div
                key={item.grade}
                className="bg-secondary/60 rounded-2xl p-6 text-center border border-border/60 hover:border-primary/40 transition-colors"
              >
                <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-serif text-lg font-bold text-foreground mb-1">
                  {item.grade}
                </h4>
                <p className="text-accent font-semibold text-base">{item.age}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground text-sm sm:text-base">
                  Age Cut-Off & Commencement
                </h5>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                  • Age to be completed by <strong>1 June</strong> of the admission year.<br />
                  • <strong>Term 1</strong> commences during the last week of May or the first week of June.
                </p>
              </div>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <a
                href="/contact"
                className="inline-block w-full md:w-auto text-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl text-sm transition-colors shadow-md"
              >
                Enquire for Admissions
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
