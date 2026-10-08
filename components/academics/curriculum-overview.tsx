"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Clock,
  CheckCircle2,
  Award,
  Sparkles,
  Heart,
  Brain,
  Compass,
} from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Academic Excellence",
    description: "Deep conceptual understanding and strong foundation in all State Board subjects.",
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    description: "Encouraging inquiry, logical reasoning, and independent problem-solving.",
  },
  {
    icon: Heart,
    title: "Strong Values",
    description: "Cultivating integrity, discipline, respect, empathy, and social responsibility.",
  },
  {
    icon: Compass,
    title: "Practical Skills",
    description: "Hands-on projects, experiments, and real-world application of classroom learning.",
  },
  {
    icon: Sparkles,
    title: "Lifelong Learning",
    description: "Fostering an enduring curiosity and passion for continuous knowledge acquisition.",
  },
];

const timings = [
  {
    level: "Kindergarten",
    time: "9:00 AM – 12:30 PM / 2:00 PM",
    note: "Joyful play-way learning & structured foundational routines.",
  },
  {
    level: "Classes I to X",
    time: "9:00 AM – 3:30 PM",
    note: "Excluding remedials. Comprehensive academic schedule.",
  },
];

export function CurriculumOverview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-secondary/50">
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
            Academic Framework
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Curriculum & Academic Framework
          </motion.h2>
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card/80 border border-border/70 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-sm"
          >
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-3">
              State Board Curriculum
            </span>
            <p className="text-foreground text-base sm:text-lg leading-relaxed mb-3 font-medium">
              The school follows a balanced academic approach designed to develop knowledgeable, confident, and responsible learners.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              The curriculum is designed to prepare students not only for academic success, but also for life beyond the classroom.
            </p>
          </motion.div>
        </div>

        {/* 5 Pillars of Curriculum */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Core Principles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-1">
              Developing Well-Rounded Learners
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-6 border border-border/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* School Timings & Remedial Support */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 sm:p-10 border border-border/70 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  School Timings
                </h3>
                <p className="text-xs text-muted-foreground">
                  Daily schedule for students
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {timings.map((t) => (
                <div
                  key={t.level}
                  className="bg-secondary/60 rounded-2xl p-6 border border-border/60"
                >
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                    {t.level}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {t.time}
                  </h4>
                  <p className="text-muted-foreground text-xs">{t.note}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <p className="text-sm font-medium text-foreground/90">
                <strong>Remedial Support:</strong> Individualized remedial support and academic mentoring will be provided where required to ensure no child falls behind.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
