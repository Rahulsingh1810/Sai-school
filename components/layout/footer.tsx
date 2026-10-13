"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/gallery", label: "Gallery and Events" },
  { href: "/contact", label: "Contact" },
];

const academicLinks = [
  { href: "/academics#primary", label: "Primary School" },
  { href: "/academics#middle", label: "Middle School" },
  { href: "/academics#high", label: "High School" },
  { href: "/academics#curriculum", label: "Curriculum" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Sri Sai English High School Logo"
                  width={1167}
                  height={1145}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-none">
                  Sri Sai English
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-none mt-0.5">
                  High School
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Nurturing minds, building futures. Sri Sai English High School is
              dedicated to providing quality education that empowers students to
              become compassionate and capable leaders of tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 relative inline-block">
              Academics
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <button
                  type="button"
                  onClick={() => setIsMapOpen(true)}
                  className="flex items-start gap-3 text-left group text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
                  aria-label="Open school location map"
                >
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">
                    No. 7, II Main Road, Adugodi, Bangalore – 560030
                    <span className="block text-xs text-accent font-medium mt-1 group-hover:underline">
                      View on Google Maps ↗
                    </span>
                  </span>
                </button>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div className="flex flex-col text-sm text-primary-foreground/80">
                  <a
                    href="tel:+919663526666"
                    className="hover:text-accent transition-colors"
                  >
                    +91 96635 26666
                  </a>
                  <a
                    href="tel:+919035031256"
                    className="hover:text-accent transition-colors"
                  >
                    +91 90350 31256
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:Srisaisehs2000@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Srisaisehs2000@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Google Maps Location Modal */}
      <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
        <DialogContent className="max-w-4xl w-[calc(100%-2rem)] p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-border/70 shadow-2xl overflow-hidden bg-background">
          <DialogHeader className="text-left space-y-1.5 pr-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                School Location &amp; Directions
              </span>
            </div>
            <DialogTitle className="font-serif text-xl sm:text-2xl font-bold text-foreground">
              Sri Sai English High School
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
              No. 7, II Main Road, Adugodi, Bangalore – 560030
            </DialogDescription>
          </DialogHeader>

          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden border border-border/70 shadow-inner mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4441298020024!2d77.6068511!3d12.943407899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b571457ee7%3A0xcfc7286dad4d554!2sSri%20Sai%20English%20High%20School!5e0!3m2!1sen!2sin!4v1791787055117!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Sri Sai English High School Location Adugodi"
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
            <span className="text-xs text-muted-foreground">
              Landmark: Near Adugodi, Bengaluru, Karnataka
            </span>
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm ml-auto"
            >
              <a
                href="https://maps.app.goo.gl/mU9wwrvWndQuBn3B6?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold"
              >
                <MapPin className="w-4 h-4 text-accent" />
                Open in Google Maps App
                <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-70" />
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <div className="text-center md:text-left">
              <p>
                &copy; {currentYear} Sri Sai English High School. All rights
                reserved.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-6 text-xs md:text-sm mt-4 md:mt-0">
              <p className="text-primary-foreground/60">
                Built, Developed & Maintained by{" "}
                <a
                  href="https://quantech.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  QuanTech
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
