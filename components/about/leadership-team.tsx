"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "Prof. Siddaraju S",
    role: "Founder & Chairman",
    image: "/home-car/Prof Siddaraju S edited.webp",
    bio: "Consistent with his visionary leadership, Prof. Siddaraju S founded Heritage Public School to transmit the heritage of world cultures and offer outstanding education with a global perspective.",
  },
  {
    name: "Head Mistress",
    role: "Head Mistress",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Committed to identifying the talents of all children, focusing on their strength, nurturing, encouraging, and helping them to attain excellence beyond classroom boundaries.",
  },
  {
    name: "Our Faculty Team",
    role: "Trained & Dedicated Educators",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Qualified and experienced professionals who provide loving individual attention in a safe, caring, and orderly environment for the overall development of every child.",
  },
];

export function LeadershipTeam() {
  const shouldReduceMotion = useReducedMotion();

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
            Leadership
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Meet Our Visionary Leaders & Staff
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 shadow-md">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label={`LinkedIn profile of ${leader.name}`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                {leader.name}
              </h3>
              <p className="text-accent font-semibold text-sm mb-2">
                {leader.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
