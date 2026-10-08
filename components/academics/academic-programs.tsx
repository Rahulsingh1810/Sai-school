"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { Users, Clock, BookOpen } from "lucide-react"

const programs = [
  {
    id: "pre-primary",
    title: "Pre-Primary School",
    grades: "Nursery & KG",
    image: "/academics/nursery.webp",
    description: "A warm, nurturing environment that fosters curiosity, social growth, and early foundational learning through play-based discovery.",
    features: ["Play-based Learning", "Sensory Activities", "Early Literacy", "Creative Expression"]
  },
  {
    id: "primary",
    title: "Primary School",
    grades: "Classes 1-4",
    image: "/academics/primary.webp",
    description: "Building strong foundations through engaging, interactive learning that nurtures curiosity and fundamental skills.",
    features: ["Interactive Learning", "Arts & Creativity", "Physical Education", "Language Development"]
  },
  {
    id: "middle",
    title: "Middle School",
    grades: "Classes 5-7",
    image: "/new images/middleschoolnew.webp",
    description: "Developing critical thinking and independent learning skills while exploring diverse subjects and interests.",
    features: ["STEM Programs", "Language Arts", "Social Sciences", "Elective Courses"]
  },
  {
    id: "high",
    title: "High School",
    grades: "Classes 8-10",
    image: "/new images/highschool-new.webp",
    description: "Preparing students for higher education and beyond with rigorous academics and career guidance.",
    features: ["Life Skills", "College Prep", "Career Counseling", "Skills Development"]
  },
]

export function AcademicPrograms() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Academic Programs
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Comprehensive Education at Every Level
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Our academic programs are designed to meet the developmental needs of students at each stage, ensuring a smooth transition through their educational journey.
          </motion.p>
        </div>

        <div className="space-y-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              id={program.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                      {program.grades}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {program.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {program.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-foreground text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
