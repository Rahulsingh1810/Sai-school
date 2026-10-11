"use client"

import { useState, useEffect } from "react"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin, Clock, Images, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface EventPhoto {
  src: string
  title: string
}

export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  category: string
  image: string
  description: string
  photos: EventPhoto[]
}

import { SCHOOL_EVENTS } from "@/lib/events-data"

export interface EventsGalleryProps {
  initialEvents?: Event[]
}

export function EventsGallery({ initialEvents = SCHOOL_EVENTS }: EventsGalleryProps) {
  const shouldReduceMotion = useReducedMotion()
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)

  const displayEvents = initialEvents.length > 0 ? initialEvents : SCHOOL_EVENTS
  const categories = [
    "All",
    ...Array.from(new Set(displayEvents.map((e: Event) => e.category).filter(Boolean))),
  ]

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const eventSlug = hash.replace("#", "");
        const foundEvent = displayEvents.find((e: Event) => 
          e.title.toLowerCase().replace(/\s+/g, "-") === eventSlug
        );
        if (foundEvent) {
          setActiveCategory("All");
          setSelectedEvent(foundEvent);
          
          setTimeout(() => {
            const element = document.getElementById(eventSlug);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [displayEvents]);

  const filteredEvents = activeCategory === "All"
    ? displayEvents
    : displayEvents.filter((event: Event) => event.category === activeCategory)

  const openGallery = (event: Event) => {
    setSelectedEvent(event)
    setSelectedPhotoIndex(null)
  }

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhotoIndex(null)
  }

  const closeGallery = () => {
    setSelectedEvent(null)
    setSelectedPhotoIndex(null)
  }

  const nextPhoto = () => {
    if (selectedEvent && selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % selectedEvent.photos.length)
    }
  }

  const prevPhoto = () => {
    if (selectedEvent && selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + selectedEvent.photos.length) % selectedEvent.photos.length)
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            School Events
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance"
          >
            Explore Our Events & Photos
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed"
          >
            Click on any event to view the photo gallery and relive the memorable moments
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event: Event, index: number) => (
            <motion.article
              id={event.title.toLowerCase().replace(/\s+/g, "-")}
              key={event.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border/50"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  {event.category}
                </span>
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full flex items-center gap-1">
                  <Images className="w-3 h-3" />
                  {event.photos.length} Photos
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => openGallery(event)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Images className="w-4 h-4 mr-2" />
                  View Event Photos
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {selectedEvent && selectedPhotoIndex === null && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 overflow-y-auto"
          >
            <div className="min-h-screen py-8 px-4">
              <div className="max-w-6xl mx-auto">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">{selectedEvent.title}</h3>
                    <p className="text-white/70 text-sm">{selectedEvent.date} | {selectedEvent.photos.length} Photos</p>
                  </div>
                  <button
                    onClick={closeGallery}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    aria-label="Close gallery"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedEvent.photos.map((photo, index) => (
                    <motion.div
                      key={index}
                      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity text-sm text-center px-2">
                          {photo.title}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedEvent && selectedPhotoIndex !== null && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={(e) => { e.stopPropagation(); closeGallery(); }}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedPhotoIndex}
              initial={shouldReduceMotion ? {} : { scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={shouldReduceMotion ? {} : { scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[80vh] aspect-[4/3] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedEvent.photos[selectedPhotoIndex].src}
                alt={selectedEvent.photos[selectedPhotoIndex].title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-center">
                <p className="font-semibold">{selectedEvent.photos[selectedPhotoIndex].title}</p>
                <p className="text-white/70 text-sm">{selectedPhotoIndex + 1} of {selectedEvent.photos.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
