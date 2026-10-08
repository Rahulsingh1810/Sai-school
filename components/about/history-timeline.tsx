"use client";

import { motion, useReducedMotion } from "framer-motion";

const milestones = [
  {
    year: "2004",
    title: "Foundation of HPS",
    description:
      "Heritage Public School was established on June 10th, 2004 by founder Prof. Siddaraju S with the vision of providing outstanding education with a global perspective.",
  },
  {
    year: "2010",
    title: "Academic & Facility Expansion",
    description:
      "Significant student growth and expanding program offerings led to the expansion of facilities, science labs, and core curriculum programs.",
  },
  {
    year: "2016",
    title: "Cultural Milestones",
    description:
      "Hosted the grand Tarang 2016 annual cultural fest and patriotic celebrations, boosting student identity and artistic expression.",
  },
  {
    year: "2017",
    title: "Vismaya Exhibition",
    description:
      "Launched the annual Vismaya multi-disciplinary project exhibition, showcasing robotics, scientific models, and arts to judges and parents.",
  },
  {
    year: "2024",
    title: "20 Years of Excellence",
    description:
      "Celebrating two decades of shaping tomorrow's leaders through a blend of academic, physical, social, and ethical development.",
  },
]

export function HistoryTimeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Our Journey
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            A Legacy of Excellence
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full md:-translate-x-1/2 z-10 ring-4 ring-background" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
              >
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-2">
                  {milestone.year}
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
