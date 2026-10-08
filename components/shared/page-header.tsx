"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

interface PageHeaderProps {
  badge: string
  title: string
  description?: string
  backgroundImage?: string
  imagePosition?: string
}

export function PageHeader({ badge, title, description, backgroundImage, imagePosition = "object-center" }: PageHeaderProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt={title}
              fill
              className={`object-cover ${imagePosition}`}
              quality={60}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </>
      ) : (
        <div className="absolute inset-0 bg-primary" />
      )}
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-6"
          >
            {badge}
          </motion.span>
          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary-foreground/80 text-lg lg:text-xl leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
