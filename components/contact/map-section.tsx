"use client";

import { motion, useReducedMotion } from "framer-motion";

export function MapSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Location
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Find Us on the Map
          </motion.h2>
        </div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4089549847804!2d77.57082647436474!3d12.881404416850778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155200080fa9%3A0x310569e5bf518d65!2sHeritage%20Public%20School!5e0!3m2!1sen!2sin!4v1780206069914!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Heritage Public School Location"
            className="absolute inset-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
