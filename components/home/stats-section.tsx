"use client"

import { motion, useReducedMotion } from "framer-motion"

const stats = [
  { value: "5000+", label: "Students Enrolled" },
  { value: "200+", label: "Expert Faculty" },
  { value: "98%", label: "Graduation Rate" },
  { value: "150+", label: "Awards Won" },
]

export function StatsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <span className="block font-serif text-4xl sm:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </span>
              <span className="text-primary-foreground/80 text-sm sm:text-base">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
