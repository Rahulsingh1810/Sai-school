"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["8th Cross, 5th Main", "Srinidhi Layout,Konanakunte, Bangalore 560062"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["Tel: +91 80 2632 2111", "Mob: +91 99017 33776"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["heritagepublicschoolkk@gmail.com"]
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:30 AM - 3:30 PM", "Saturday: 9:00 AM - 1:00 PM"]
  },
]

export function ContactForm() {
  const shouldReduceMotion = useReducedMotion()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      if (response.ok && result.success) {
        setIsSubmitted(true)
      } else {
        setError(result.message || "Something went wrong. Please try again later.")
      }
    } catch (err) {
      setError("Failed to send the message. Please check your network connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Whether you have questions about admissions, curriculum, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-destructive/10 text-destructive text-sm rounded-lg border border-destructive/20">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academics">Academic Programs</option>
                      <option value="visit">Schedule a Visit</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
