"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const facilities = [
  {
    title: "Modern Classrooms",
    description:
      "Spacious, ergonomically designed classrooms that support interactive learning and collaboration.",
    image: "/Facilities/Class Room.webp",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/3]",
  },
  {
    title: "Smart Classes",
    description:
      "Next-generation classrooms integrated with interactive smart boards and digital learning systems.",
    image: "/Facilities/Smart Class.webp",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/3]",
  },
  {
    title: "Science Laboratories",
    description:
      "Fully equipped Physics, Chemistry, and Biology laboratories that encourage hands-on learning, experimentation, and scientific discovery.",
    image: "/Facilities/Laboratories.webp",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/3]",
  },
  {
    title: "Library & Resource Centre",
    description:
      "A rich learning resource centre with access to books, periodicals, and digital learning resources, encouraging students to develop strong reading and research habits.",
    image: "/Facilities/lib-new.webp",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/3]",
  },
  {
    title: "Computer Centre",
    description:
      "A modern computer laboratory equipped with computing facilities, software tools, and learning resources to develop digital literacy and technology skills.",
    image: "/Facilities/Computer Lab.webp",
    gridClass: "col-span-1 md:col-span-2 lg:col-span-2",
    aspectClass: "aspect-[4/3] lg:aspect-[8/3]",
  },
  {
    title: "Sports Facilities",
    description:
      "Outdoor spaces that provide students with opportunities to participate in sports, physical activities, team games, and recreational programmes.",
    image: "/Facilities/Outdoor sports.webp",
    gridClass: "col-span-1 md:col-span-2 lg:col-span-3",
    aspectClass: "aspect-[4/3] lg:aspect-[12/4]",
  },
];

export function FacilitiesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Campus Infrastructure
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            World-Class Learning Environment
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed"
          >
            Sai English High School provides a supportive and well-equipped learning environment designed to encourage academic excellence, creativity, practical learning, and the overall development of students.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group relative rounded-3xl overflow-hidden shadow-lg border border-border/60 ${facility.gridClass} ${facility.aspectClass}`}
            >
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-primary-foreground">
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                  {facility.title}
                </h3>
                <p className="text-primary-foreground/85 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
