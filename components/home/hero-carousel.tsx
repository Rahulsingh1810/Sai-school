"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/home-car/slide1.JPG",
    title: "Welcome to Sai English High School",
    subtitle: "Built on a Promise, Not a Privilege — Empowering Young Minds Since 1999",
    cta: "Discover Our Story",
    href: "/about",
  },
  {
    image: "/home-car/slide2.JPG",
    title: "Celebrating 25 Years of Service",
    subtitle: "25 Years of Learning. 25 Years of Values. 25 Years of Growing Together.",
    cta: "Our Legacy",
    href: "/about",
  },
  {
    image: "/home-car/slide3.JPG",
    title: "Our Promise: To Educate, Empower & Serve",
    subtitle: "Comprehensive State Board curriculum, smart learning, and holistic development prepared for life.",
    cta: "Explore Academics",
    href: "/academics",
  },
];

export function HeroCarousel() {
  const shouldReduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                quality={35}
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 lg:px-8">
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                    animate={
                      selectedIndex === index ? { opacity: 1, y: 0 } : {}
                    }
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl text-primary-foreground"
                  >
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                      {slide.title}
                    </h1>
                    <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                      >
                        <Link href={slide.href}>{slide.cta}</Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                      >
                        <Link href="/contact">Get in Touch</Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              selectedIndex === index
                ? "bg-accent w-8"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
