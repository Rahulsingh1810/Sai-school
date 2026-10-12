"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Send,
  Loader2,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Phone,
} from "lucide-react"

interface ContactModalProps {
  /**
   * Delay in milliseconds before automatically popping up.
   * Defaults to 6000ms (6 seconds). Set to 0 to disable auto-open.
   */
  autoOpenDelay?: number
  /**
   * Optional controlled open state if triggered from buttons.
   */
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const INQUIRY_OPTIONS = [
  "Admission Enquiries",
  "Academic Information",
  "Curriculum Details",
  "School Facilities",
  "Fee and Application Information",
  "Schedule a Campus Visit",
  "General School Enquiries",
]

export function ContactModal({
  autoOpenDelay = 6000,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: ContactModalProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen

  const handleOpenChange = (nextOpen: boolean) => {
    if (isControlled && setControlledOpen) {
      setControlledOpen(nextOpen)
    } else {
      setInternalOpen(nextOpen)
    }

    if (!nextOpen) {
      try {
        sessionStorage.setItem("sehs_contact_modal_dismissed", "true")
      } catch {
        // Ignore storage exceptions if restricted
      }
    }
  }

  useEffect(() => {
    if (autoOpenDelay <= 0) return

    try {
      const dismissed = sessionStorage.getItem("sehs_contact_modal_dismissed")
      if (dismissed) return
    } catch {
      // Ignore storage errors
    }

    const timer = setTimeout(() => {
      if (!isControlled) {
        setInternalOpen(true)
      } else if (setControlledOpen) {
        setControlledOpen(true)
      }
    }, autoOpenDelay)

    return () => clearTimeout(timer)
  }, [autoOpenDelay, isControlled, setControlledOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const payload = {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = await response.json()
      if (response.ok && result.success) {
        setIsSubmitted(true)
        try {
          sessionStorage.setItem("sehs_contact_modal_dismissed", "true")
        } catch {
          // Ignore
        }
      } else {
        setError(result.message || "Failed to submit. Please try again.")
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl border-border/80 p-6 sm:p-8 shadow-2xl">
        <DialogHeader className="text-left space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Admissions Open 2026–27
            </span>
          </div>

          <DialogTitle className="font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Connect with Sai English High School
          </DialogTitle>

          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            Have questions about admissions, curriculum, or facilities? Leave
            your details and our admissions team will contact you promptly.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-2xl font-bold text-foreground">
                Inquiry Received!
              </h4>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Thank you for your interest in Sai English High School. Our team
                will review your request and get back to you shortly.
              </p>
            </div>
            <div className="pt-2">
              <Button
                onClick={() => handleOpenChange(false)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-xl shadow-md"
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            {error && (
              <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-xl border border-destructive/20 font-medium">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="modal-firstName"
                  className="block text-xs font-semibold text-foreground mb-1.5"
                >
                  First Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="modal-firstName"
                  name="firstName"
                  required
                  placeholder="Student / Parent name"
                  className="rounded-xl h-10 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-lastName"
                  className="block text-xs font-semibold text-foreground mb-1.5"
                >
                  Last Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="modal-lastName"
                  name="lastName"
                  required
                  placeholder="Surname"
                  className="rounded-xl h-10 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="modal-email"
                  className="block text-xs font-semibold text-foreground mb-1.5"
                >
                  Email Address <span className="text-destructive">*</span>
                </label>
                <Input
                  id="modal-email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="rounded-xl h-10 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-phone"
                  className="block text-xs font-semibold text-foreground mb-1.5"
                >
                  Phone Number
                </label>
                <Input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. 96635 26666"
                  className="rounded-xl h-10 text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-subject"
                className="block text-xs font-semibold text-foreground mb-1.5"
              >
                Inquiry Topic <span className="text-destructive">*</span>
              </label>
              <select
                id="modal-subject"
                name="subject"
                required
                defaultValue="Admission Enquiries"
                className="w-full h-10 px-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {INQUIRY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="modal-message"
                className="block text-xs font-semibold text-foreground mb-1.5"
              >
                Message / Grade Interested In <span className="text-destructive">*</span>
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={3}
                required
                placeholder="Mention the grade/class and any specific queries..."
                className="w-full px-3 py-2 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </>
                )}
              </Button>
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px] text-muted-foreground border-t border-border/50">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                Pre-Primary to Class X
              </span>
              <a
                href="tel:+919663526666"
                className="hover:text-primary transition-colors flex items-center gap-1 font-medium"
              >
                <Phone className="w-3 h-3 text-accent" />
                +91 96635 26666
              </a>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
