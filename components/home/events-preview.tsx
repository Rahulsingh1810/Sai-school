"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight, Images } from "lucide-react"
import type { Event } from "@/components/gallery/events-gallery"

interface EventsPreviewProps {
  events?: Event[]
}

export function EventsPreview({ events = [] }: EventsPreviewProps) {
  const shouldReduceMotion = useReducedMotion()

  const displayEvents = events.slice(0, 3)

  if (displayEvents.length === 0) return null

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance"
            >
              Stay Connected With School Life
            </motion.h2>
          </div>
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild variant="outline" className="group">
              <Link href="/gallery" className="flex items-center gap-2">
                View All Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayEvents.map((event, index) => (
            <motion.article
              key={event.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              <Link
                href={`/gallery#${event.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="block h-full"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    quality={60}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {event.category}
                  </span>
                  {event.photos.length > 0 && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full flex items-center gap-1">
                      <Images className="w-3 h-3" />
                      {event.photos.length} Photos
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
