"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Calendar,
  Award,
  Users,
  GraduationCap,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Compass,
  Laptop,
  Landmark,
} from "lucide-react";

const pillars = [
  {
    icon: Calendar,
    title: "Established in 1999",
    desc: "Founded with the mission to provide accessible, value-rooted education.",
  },
  {
    icon: Award,
    title: "25 Years of Service",
    desc: "A quarter century of dedicated educational contribution in Adugodi.",
  },
  {
    icon: Users,
    title: "Co-Educational Institution",
    desc: "Inclusive and supportive environment for all young minds.",
  },
  {
    icon: GraduationCap,
    title: "State Board Curriculum",
    desc: "Structured syllabus with strong conceptual foundations.",
  },
  {
    icon: Laptop,
    title: "Smart & Interactive Learning",
    desc: "Digital classrooms that bring concepts alive.",
  },
  {
    icon: HeartHandshake,
    title: "Experienced Faculty",
    desc: "Caring, dedicated teachers guiding each child's potential.",
  },
  {
    icon: Sparkles,
    title: "Holistic Development",
    desc: "Sports, arts, technology, and life skills for life readiness.",
  },
  {
    icon: ShieldCheck,
    title: "Strong Values & Discipline",
    desc: "Building character, integrity, and ethical conduct.",
  },
  {
    icon: Compass,
    title: "Beyond the Classroom",
    desc: "Hands-on projects, field visits, and community activities.",
  },
];

export function HistoryTimeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-secondary/50 relative overflow-hidden">
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
            Our Heritage & Milestones
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            A Legacy of Education and Service
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            The philosophy of Sri Sai English High School is deeply connected to
            a tradition of service to education. Inspired by Late Patel
            Munichinappa and Late Patel Balappa, whose contribution of land
            supported education in Adugodi, the school continues that legacy by
            working to make meaningful education accessible to every child.
          </motion.p>
        </div>

        {/* Celebrating 25 Years Banner */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground rounded-3xl p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Celebrating 25 Years
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Silver Jubilee of Growth & Values
            </h3>
            <p className="text-primary-foreground/90 text-base sm:text-lg leading-relaxed mb-6">
              Sri Sai English High School proudly marks 25 years of education,
              growth, values, and service to the community. This milestone
              reflects the trust of our parents, the dedication of our teachers,
              the support of our well-wishers, and the achievements of
              generations of students.
            </p>
            <div className="inline-block bg-primary-foreground/15 backdrop-blur-md rounded-2xl px-6 py-3 border border-primary-foreground/20">
              <p className="font-serif text-base sm:text-lg font-semibold text-accent tracking-wide">
                25 Years of Learning • 25 Years of Values • 25 Years of Growing
                Together
              </p>
            </div>
          </div>
        </motion.div>

        {/* Institutional Strengths Grid */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Institutional Pillars
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-1">
            Built on Strong Foundations
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl p-6 border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <pillar.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-foreground mb-1">
                  {pillar.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
