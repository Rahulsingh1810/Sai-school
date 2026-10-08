"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  CheckCircle2,
  Sparkles,
  Compass,
} from "lucide-react";

const strivePoints = [
  "Deliver quality education that goes beyond textbooks and examinations.",
  "Encourage curiosity, independent thinking, creativity, and lifelong learning.",
  "Instil discipline, integrity, kindness, respect, and social responsibility.",
  "Provide equal opportunities to children irrespective of background or privilege.",
  "Promote holistic development through academics, sports, technology, culture, and co-curricular activities.",
  "Build a strong partnership between students, parents, teachers, and the community.",
];

export function MissionVision() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Our Core Purpose
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Vision, Mission & Guiding Principle
          </motion.h2>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 sm:p-10 border border-border/60 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 text-accent">
              <Eye className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">
              Where We Aspire To Be
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              To nurture confident, compassionate, and responsible individuals
              through quality education, strong values, and equal opportunity,
              empowering every child to realise their potential and contribute
              meaningfully to society.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 sm:p-10 border border-border/60 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Target className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
              What We Do Every Day
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              To provide an inclusive and inspiring learning environment where
              every child is valued, encouraged, and supported to grow
              academically, socially, emotionally, and creatively.
            </p>
          </motion.div>
        </div>

        {/* We Strive To */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-secondary/60 rounded-3xl p-8 sm:p-12 border border-border/60 mb-16 shadow-sm"
        >
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
              Commitment to Action
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              We Strive To:
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {strivePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="flex items-start gap-3.5 bg-card/80 p-4 sm:p-5 rounded-xl border border-border/50"
              >
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground/90 text-sm sm:text-base font-medium leading-relaxed">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guiding Principle */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent text-accent-foreground text-xs sm:text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              Our Guiding Principle
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Education is for life, not just for living.
            </h3>
            <p className="text-primary-foreground/90 text-base sm:text-lg leading-relaxed mb-6">
              At Sai English High School, we believe that education is not merely a
              means to earn a livelihood; it is a means to build character,
              confidence, values, and purpose.
            </p>
            <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed mb-6">
              Every child deserves access to meaningful education and an equal
              opportunity to learn and succeed, irrespective of social or
              economic background. Our responsibility is therefore not only to
              educate, but also to empower, guide, and prepare students to
              become responsible and compassionate members of society.
            </p>
            <p className="text-accent font-semibold text-sm sm:text-base italic">
              This principle reflects the spirit of service and commitment to education on which the institution was founded.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
