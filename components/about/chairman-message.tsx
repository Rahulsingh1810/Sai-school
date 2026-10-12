"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export function ChairmanMessage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image / Leadership Badge Side */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative lg:sticky lg:top-28"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
              <div className="relative aspect-[1179/708] w-full overflow-hidden">
                <Image
                  src="/commons/chairman.JPG"
                  alt="Secretary C. Sathyanarayana - Sri Sai English High School"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-5 sm:p-6 bg-card border-t border-border">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                      C. Sathyanarayana
                    </h3>
                    <p className="text-primary font-semibold text-sm mt-0.5">
                      Secretary
                    </p>
                    <p className="text-muted-foreground text-xs font-medium mt-0.5">
                      Sri Sai English High School
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shrink-0">
                    Est. 1999
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-2xl -z-10 blur-xl opacity-60" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10 blur-lg" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Message from Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Secretary&apos;s Message
            </h2>
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-6">
              Education is for life… not just for living
            </p>

            <div className="relative">
              <Quote className="w-12 h-12 text-accent/25 absolute -top-3 -left-4" />
              <div className="relative z-10 space-y-4 text-muted-foreground leading-relaxed pl-4 border-l-4 border-accent text-base sm:text-lg">
                <p>
                  <strong>Sri Sai English High School</strong>, established in
                  1999, was founded on a simple but enduring belief: that
                  quality education should be within the reach of every child,
                  irrespective of background, circumstance, or privilege.
                </p>

                <p>
                  The roots of this belief go back generations in our family. My
                  great-grandfather,{" "}
                  <strong className="text-foreground font-semibold">
                    Late Patel Munichinappa
                  </strong>
                  , and my grandfather,{" "}
                  <strong className="text-foreground font-semibold">
                    Late Patel Balappa
                  </strong>
                  , believed that education is the foundation of social progress
                  and community development. Their belief led them to donate
                  land for education in Adugodi. Today, Munichinappa Government
                  School stands on that land and continues to serve the
                  community.
                </p>

                <p>
                  Sri Sai English High School was founded as a service to
                  society, so that children from all walks of life could receive
                  meaningful education, guidance, and the chance to build a
                  better future.
                </p>

                <p>
                  We have always believed that education must never be defined
                  by privilege. Whether a child comes from a wealthy family or a
                  modest background, every student deserves the same dignity,
                  encouragement, and opportunity to realise his or her
                  potential.
                </p>

                <p>
                  For us, education is not confined to textbooks, examinations,
                  or marks. We want to develop individuals who are knowledgeable
                  and confident, but also disciplined, compassionate, and
                  grounded in strong values. Alongside academics, we encourage
                  sports, technology, creativity, cultural activities, and life
                  skills, so that students gain the confidence to think
                  independently, the courage to face challenges, and the
                  character to contribute to the world around them.
                </p>

                <p>
                  Over the years, this school has grown through the dedication
                  of our teachers, the trust of our parents, the support of our
                  well-wishers, and the aspirations of generations of students.
                  We look back with gratitude. While education and society
                  continue to evolve, the principle on which the school was
                  founded remains unchanged: education is one of the greatest
                  forms of service we can offer society.
                </p>

                <p>
                  As Secretary, it is both a privilege and a responsibility to
                  carry forward the legacy and values of those who came before
                  us. My aspiration is that Sri Sai English High School will
                  always be a place where every child is valued, every talent is
                  encouraged, and every student can learn, grow, and succeed.
                </p>

                <p className="text-foreground font-medium italic">
                  We move forward with renewed commitment to the generations yet
                  to come, true to our founding purpose: to educate, to empower,
                  and to serve.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-col">
              <p className="font-serif text-2xl font-bold text-foreground">
                C. Sathyanarayana
              </p>
              <p className="text-accent font-semibold text-sm">Secretary</p>
              <p className="text-muted-foreground text-xs mt-0.5">
                Sri Sai English High School
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
