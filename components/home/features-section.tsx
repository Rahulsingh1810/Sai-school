"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Users, Trophy, Globe } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "NCERT curriculum carefully tailored to achieve a balance between academics and the development of body and soul.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Qualified and experienced educators providing loving individual attention to help every child attain their highest potential.",
  },
  {
    icon: Trophy,
    title: "Holistic Development",
    description:
      "Nurturing physical, artistic, and empirical skills through sports, field visits, clubs, visual arts, yoga, and karate.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Consistent with founder Prof. Siddaraju's vision, we transmit the heritage of world cultures to offer hope for the future.",
  },
];

export function FeaturesSection() {
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
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Shaping Tomorrow&apos;s Leaders Today
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            At Heritage Public School, we believe in nurturing not just minds,
            but complete individuals ready to make a positive impact on the
            world.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
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
