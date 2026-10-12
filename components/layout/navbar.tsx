"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/academics", label: "Academics" },
  // { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery & Events" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false

  const isTransparent = !isScrolled && !isOpen

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        isOpen
          ? "h-screen bg-card"
          : cn(
              "transition-all duration-300",
              isScrolled
                ? "bg-card/95 backdrop-blur-md shadow-lg"
                : "bg-transparent"
            )
      )}
    >
      <nav className="relative z-50 container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Sai English High School Logo"
                width={1167}
                height={1145}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span
                className={cn(
                  "font-serif text-lg sm:text-xl font-bold tracking-tight leading-none transition-colors",
                  isTransparent ? "text-white" : "text-primary"
                )}
              >
                Sai English
              </span>

              <span
                className={cn(
                  "font-serif text-lg sm:text-xl font-bold tracking-tight leading-none transition-colors mt-0.5",
                  isTransparent ? "text-white" : "text-primary"
                )}
              >
                High School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-md",
                  pathname === link.href
                    ? isTransparent
                      ? "text-white"
                      : "text-primary"
                    : isTransparent
                      ? "text-white/90 hover:text-white"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.label}

                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-0.5 rounded-full",
                      isTransparent ? "bg-white" : "bg-accent"
                    )}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/contact">Enroll Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-primary/10"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 lg:hidden bg-card/98 backdrop-blur-lg z-40 flex flex-col justify-center px-8"
          >
            <motion.div
              variants={prefersReducedMotion ? {} : {
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                closed: {}
              }}
              initial="closed"
              animate="open"
              className="flex flex-col gap-6 items-center justify-center"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={prefersReducedMotion ? {} : {
                    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                    closed: { opacity: 0, y: 20 }
                  }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-serif text-3xl font-bold transition-colors tracking-tight block py-1",
                      pathname === link.href
                        ? "text-primary border-b-2 border-accent"
                        : "text-foreground/80 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={prefersReducedMotion ? {} : {
                  open: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.25 } },
                  closed: { opacity: 0, y: 20 }
                }}
                className="w-full max-w-xs mt-6"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base shadow-md"
                >
                  <Link href="/contact">Enroll Now</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}