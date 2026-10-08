"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Target, Eye, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Heritage Public School fosters the development of each student's potential through a blend of academic, physical, social and ethical aspects of life. We provide a challenging core curriculum with a global perspective that inspires passion for learning and intellectual importance."
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "We aspire to be one of the leading educational institution in the society by providing holistic education with global perspective that results in love of learning, academic excellence and a balanced life of an individual on the whole. We constantly strive to make a positive difference in the society and set standards in the education sector."
  },
  {
    icon: Heart,
    title: "Our Philosophy",
    description: "Consistent with the vision of founder Prof. Siddaraju S, HPS is an educational community believing in passion for excellence and holistic education. We transmit the heritage of world cultures by bringing in the ideals from the past that offer purpose in the present and hope for the future."
  },
]

export function MissionVision() {
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
            Our Foundation
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            What Drives Us Forward
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card rounded-xl p-8 shadow-sm border border-border/50 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
