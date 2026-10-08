"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

const facilities = [
  {
    title: "Modern Classrooms",
    description: "Spacious, ergonomically designed classrooms optimized for interactive learning and collaboration.",
    image: "/Facilities/Class Room.webp",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/3]"
  },
  {
    title: "Smart Classes",
    description: "Next-generation classrooms integrated with interactive smart boards and digital learning systems.",
    image: "/Facilities/Smart Class.webp",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/3]"
  },
  {
    title: "Science Laboratories",
    description: "Advanced, fully-equipped physics, chemistry, and biology labs fostering hands-on scientific discovery.",
    image: "/Facilities/Laboratories.webp",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/3]"
  },
  {
    title: "Library & Resource Center",
    description: "A rich repository of knowledge housing thousands of books, periodicals, and digital learning platforms.",
    image: "/Facilities/lib-new.webp",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/3]"
  },
  {
    title: "Computer Centre",
    description: "Modern high-speed computing environment with the latest software tools and resources for digital literacy.",
    image: "/Facilities/Computer Lab.webp",
    gridClass: "md:col-span-1 lg:col-span-2",
    aspectClass: "aspect-[4/3] lg:aspect-[8/3]"
  },
  {
    title: "Indoor Sports Arena",
    description: "",
    image: "/new images/chess.webp",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/3]"
  },
  {
    title: "Outdoor Sports Facilities",
    description: "",
    image: "/Facilities/Outdoor sports.webp",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/3]"
  },
  {
    title: "Transport Facilities",
    description: "Safe, reliable, and GPS-enabled school bus fleet covering all major routes for convenient student commute.",
    image: "/Facilities/Transport.webp",
    gridClass: "col-span-1",
    aspectClass: "aspect-[4/3]"
  }
]

export function FacilitiesSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Facilities
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            World-Class Learning Environment
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group relative rounded-2xl overflow-hidden shadow-lg ${facility.gridClass} ${facility.aspectClass}`}
            >
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-serif text-xl font-bold mb-2">
                  {facility.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
