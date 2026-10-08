"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export function ChairmanMessage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] max-w-lg mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/home-car/Prof Siddaraju S edited.webp"
                alt="Chairman of Heritage Public School"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Message from Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Chairman&apos;s Message
            </h2>

            <div className="relative">
              <Quote className="w-12 h-12 text-accent/30 absolute -top-4 -left-4" />
              <blockquote className="relative z-10 space-y-4 text-muted-foreground leading-relaxed pl-4 border-l-4 border-accent">
                <p>
                  Education is for life, not for mere living. We at Heritage
                  Public School lay special emphasis on the overall development
                  of the personality of our students.
                </p>

                <p>
                  We provide ample opportunities to all our students with a view
                  to bring out their potential. This in turn helps them discover
                  their unique talents and abilities.
                </p>

                <p>
                  We believe that every child is a genius in disguise. Education
                  is a process that should help each child discover and nurture
                  that uniqueness, empowering them to become confident,
                  responsible, and successful individuals.
                </p>

                <p>
                  At Heritage Public School, we are committed to creating a
                  learning environment that inspires excellence, values
                  character, and prepares students for the opportunities and
                  challenges of the future.
                </p>

                <p>
                  We welcome your child to Heritage. Come and inherit Heritage
                  at HPS.
                </p>
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-serif text-xl font-bold text-foreground">
                Prof. Siddaraju S
              </p>
              <p className="text-muted-foreground">Chairman</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}