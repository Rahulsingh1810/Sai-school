"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Heart, Award, Users, BookOpen, Clock } from "lucide-react";

export function LegacySection() {
  const shouldReduceMotion = useReducedMotion();

  const milestones = [
    {
      icon: BookOpen,
      title: "25 Years of Learning",
      description:
        "Nurturing academic curiosity and conceptual clarity through dedicated teaching.",
    },
    {
      icon: Heart,
      title: "25 Years of Values",
      description:
        "Instilling discipline, empathy, character, and ethical responsibility in every child.",
    },
    {
      icon: Users,
      title: "25 Years of Growing Together",
      description:
        "Partnering with parents, teachers, and the Adugodi community across generations.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-secondary/50 via-background to-secondary/30 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section 1: A Legacy of Education and Service */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              <Clock className="w-4 h-4" />A Legacy of Education & Service
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Rooted in Tradition, Committed to Society
            </h2>
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/70 rounded-2xl p-6 sm:p-8 shadow-sm">
              <p className="text-foreground/90 text-lg sm:text-xl leading-relaxed font-serif italic mb-4">
                The philosophy of Sri Sai English High School is deeply
                connected to a tradition of service to education.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Inspired by{" "}
                <strong className="text-foreground font-semibold">
                  Late Patel Munichinappa
                </strong>{" "}
                and{" "}
                <strong className="text-foreground font-semibold">
                  Late Patel Balappa
                </strong>
                , whose generous contribution of land supported education in
                Adugodi, the school continues that noble legacy by working
                tirelessly to make meaningful, high-quality education accessible
                to every child.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Celebrating 25 Years (Silver Jubilee) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-primary/95 via-primary to-primary/90 text-primary-foreground p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden">
          {/* Subtle geometric pattern / glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent text-accent-foreground text-xs sm:text-sm font-bold rounded-full mb-4 uppercase tracking-wider shadow-sm">
                <Sparkles className="w-4 h-4" />
                Silver Jubilee Milestone • 1999 – 2024
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Celebrating 25 Years of Excellence
              </h3>
              <p className="text-primary-foreground/90 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
                Sri Sai English High School proudly marks 25 years of education,
                growth, values, and service to the community.
              </p>
              <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                This milestone reflects the trust of our parents, the dedication
                of our teachers, the support of our well-wishers, and the
                remarkable achievements of generations of students.
              </p>
            </motion.div>
          </div>

          {/* 3 Pillars of 25 Years */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {milestones.map((item, index) => (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-4 text-accent">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-accent mb-2">
                  {item.title}
                </h4>
                <p className="text-primary-foreground/85 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Our Promise Banner */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-primary-foreground/20 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Our Guiding Creed
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-primary-foreground mt-2 tracking-wide">
              To Educate. To Empower. To Serve.
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
