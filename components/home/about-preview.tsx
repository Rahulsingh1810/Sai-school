"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/home-car/SPF13284 a.webp"
                alt="Students learning in classroom"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10" />

            {/* Stats Card */}
            {/* <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -left-4 sm:left-8 bg-card rounded-xl shadow-xl p-6 border border-border"
            >
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-primary">40+</span>
                <span className="text-muted-foreground text-sm">Years of Excellence</span>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              About Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Education for Life, Not Mere Living
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong>Heritage Public School</strong> is a premier co-educational institution founded on June 10th 2004 with the motive of providing outstanding education with a global perspective.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We lay special emphasis on the overall development of personality of our students. We provide ample opportunities to all our students with a view to bring out their potential, helping them discover their unique talents.
            </p>
            <p className="text-muted-foreground italic leading-relaxed mb-8 border-l-4 border-accent pl-4">
              &ldquo;We believe that every child is a genius in disguise; Education is a process that should help him/her discover that uniqueness. Come and inherit Heritage at HPS.&rdquo;
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground font-medium">State-of-the-art Campus</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground font-medium">Co-Educational (Est. 2004)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground font-medium">Trained & Experienced Faculty</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground font-medium">NCERT Curriculum</span>
              </div>
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
