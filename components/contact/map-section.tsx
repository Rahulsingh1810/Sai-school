"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MapSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 max-w-5xl mx-auto">
          <div>
            <motion.span
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3"
            >
              Find Us
            </motion.span>
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance"
            >
              School Location & Directions
            </motion.h2>
            <p className="text-muted-foreground text-sm mt-1">
              No. 7, II Main Road, Adugodi, Bangalore – 560030
            </p>
          </div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
            >
              <a
                href="https://maps.app.goo.gl/mU9wwrvWndQuBn3B6?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-accent" />
                Open in Google Maps
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border/70"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4441298020024!2d77.6068511!3d12.943407899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b571457ee7%3A0xcfc7286dad4d554!2sSri%20Sai%20English%20High%20School!5e0!3m2!1sen!2sin!4v1791787055117!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Sri Sri Sai English High School Location Adugodi"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
