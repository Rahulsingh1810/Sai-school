import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

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
                  alt="Sai English High School Logo"
                  width={1167}
                  height={1145}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-none">
                  Sai English
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-none mt-0.5">
                  High School
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Nurturing minds, building futures. Sai English High School is
              dedicated to providing quality education that empowers
              students to become compassionate and capable leaders of tomorrow.
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
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  No. 7, II Main Road, Adugodi, Bangalore – 560030
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div className="flex flex-col text-sm text-primary-foreground/80">
                  <a href="tel:+919663526666" className="hover:text-accent transition-colors">
                    +91 96635 26666
                  </a>
                  <a href="tel:+919035031256" className="hover:text-accent transition-colors">
                    +91 90350 31256
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:srisaiselhs2000@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  srisaiselhs2000@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
  <div className="text-center md:text-left">
    <p>
      &copy; {currentYear} Sai English High School. All rights reserved.
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
