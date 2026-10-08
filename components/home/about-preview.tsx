"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Calendar,
  Award,
  Users2,
  GraduationCap,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Compass,
  Laptop,
  Quote,
} from "lucide-react";

const keyHighlights = [
  {
    icon: Calendar,
    title: "Established in 1999",
    description: "Over two decades of educational commitment",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: Award,
    title: "25 Years of Service",
    description: "Silver Jubilee of transforming young lives",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Users2,
    title: "Co-Educational Institution",
    description: "Equal opportunity and inclusive learning environment",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: GraduationCap,
    title: "State Board Curriculum",
    description: "Rigorous academics focused on conceptual mastery",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Laptop,
    title: "Smart & Interactive Learning",
    description: "Modern technology integrated into daily teaching",
    color: "from-cyan-500/20 to-sky-500/20",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: HeartHandshake,
    title: "Experienced & Dedicated Faculty",
    description: "Passionate mentors nurturing every child's potential",
    color: "from-rose-500/20 to-red-500/20",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    icon: Sparkles,
    title: "Holistic Development",
    description: "Academics, arts, sports, technology & life skills",
    color: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-600 dark:text-yellow-400",
  },
  {
    icon: ShieldCheck,
    title: "Strong Values & Discipline",
    description: "Building character, integrity, and ethical conduct",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: Compass,
    title: "Learning Beyond Classroom",
    description: "Field visits, activities, and real-world exposure",
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
];

export function AboutPreview() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section: Image & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Image Side */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <Image
                src="/home-car/SPF13284 a.webp"
                alt="Students at Sai English High School"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-1">
                  Est. 1999 • Adugodi
                </span>
                <p className="text-sm font-medium text-white/90">
                  25 Years of Dedicated Service to Education
                </p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10 blur-xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              About Sai English High School
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Built on a Promise, Not a Privilege
            </h2>
            <p className="text-foreground/90 text-lg leading-relaxed mb-4 font-medium">
              <strong>Sai English High School</strong>, established in 1999, is a
              co-educational institution committed to providing quality
              education rooted in strong values, equal opportunity, and service
              to society.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Inspired by a family legacy that has long supported education in
              Adugodi, the school was founded with the belief that every child
              deserves the opportunity to learn, grow, and succeed, irrespective
              of background or privilege.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Sai English High School, we focus on the overall development of
              every student. Along with academics, we encourage creativity,
              discipline, confidence, sports, technology, cultural activities,
              and life skills so that students are prepared not only for
              examinations, but for life.
            </p>

            {/* Quote Callout */}
            <div className="relative bg-secondary/70 border-l-4 border-accent rounded-r-xl p-5 mb-8 shadow-sm">
              <Quote className="w-8 h-8 text-accent/25 absolute top-3 right-3" />
              <p className="text-foreground italic leading-relaxed font-serif text-base sm:text-lg">
                &ldquo;We believe that every child has unique potential. Education
                should help them discover it, develop it, and use it with
                confidence, character, and purpose.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
              >
                <Link href="/about">Learn More About Our Story</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated Highlights Section (Replacing Plain Bullets) */}
        <div className="mt-8 pt-12 border-t border-border/60">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Core Strengths
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-1">
              What Defines Our Education
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Discover the pillars that empower every student at Sai English High School
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            {keyHighlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-card/90 hover:bg-card border border-border/60 hover:border-primary/40 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
