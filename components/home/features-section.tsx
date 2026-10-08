"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Laptop, Trophy, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "State Board Excellence",
    description:
      "Structured curriculum tailored to build robust fundamentals, critical thinking, and strong academic performance.",
  },
  {
    icon: Laptop,
    title: "Smart & Digital Learning",
    description:
      "Interactive audio-visual classrooms and technology-enabled learning methods that bring concepts to life.",
  },
  {
    icon: Trophy,
    title: "Holistic Development",
    description:
      "Balancing academics with sports, visual arts, cultural activities, and life skills for well-rounded growth.",
  },
  {
    icon: HeartHandshake,
    title: "Values & Character",
    description:
      "Instilling strong discipline, mutual respect, ethical leadership, and a spirit of service to society.",
  },
];

export function FeaturesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-secondary/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Our Educational Approach
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Preparing Students for Examinations & for Life
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed"
          >
            At Sai English High School, we focus on the overall development of every student.
            Along with academics, we encourage creativity, discipline, confidence, sports,
            technology, cultural activities, and life skills so that students are prepared
            to succeed with character and purpose.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/60 hover:border-primary/40"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
