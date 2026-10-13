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
      <DialogContent
        onOpenAutoFocus={(e) => {
          // Prevent mobile keyboard from abruptly popping open when modal triggers automatically
          e.preventDefault()
        }}
        className="p-4 sm:p-6 lg:p-7 max-w-[calc(100%-1.5rem)] sm:max-w-lg max-h-[88dvh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border-border/80 shadow-2xl overscroll-contain"
      >
        <DialogHeader className="text-left space-y-1.5 sm:space-y-2 pr-6 sm:pr-8">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent shrink-0" />
              Admissions Open 2026–27
            </span>
          </div>

          <DialogTitle className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground tracking-tight leading-snug">
            Connect with Sri Sai English High School
          </DialogTitle>

          <DialogDescription className="text-xs sm:text-sm text-muted-foreground leading-normal sm:leading-relaxed">
            Have questions about admissions, curriculum, or facilities? Submit
            your inquiry and our team will get in touch.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-6 sm:py-8 text-center space-y-3 sm:space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                Inquiry Received!
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. Our admissions coordinator will
                review your inquiry and contact you shortly.
              </p>
            </div>
            <div className="pt-2">
              <Button
                onClick={() => handleOpenChange(false)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 sm:px-8 py-2.5 sm:py-3 rounded-xl shadow-md text-sm"
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-1 sm:mt-2">
            {error && (
              <div className="p-2.5 sm:p-3 bg-destructive/10 text-destructive text-xs sm:text-sm rounded-xl border border-destructive/20 font-medium">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div>
                <label
                  htmlFor="modal-firstName"
                  className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1"
                >
                  First Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="modal-firstName"
                  name="firstName"
                  required
                  placeholder="First name"
                  className="rounded-xl h-9 sm:h-10 text-base sm:text-sm px-2.5 sm:px-3"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-lastName"
                  className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1"
                >
                  Last Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="modal-lastName"
                  name="lastName"
                  required
                  placeholder="Surname"
                  className="rounded-xl h-9 sm:h-10 text-base sm:text-sm px-2.5 sm:px-3"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <label
                  htmlFor="modal-email"
                  className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1"
                >
                  Email Address <span className="text-destructive">*</span>
                </label>
                <Input
                  id="modal-email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="rounded-xl h-9 sm:h-10 text-base sm:text-sm px-2.5 sm:px-3"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-phone"
                  className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1"
                >
                  Phone Number
                </label>
                <Input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. 96635 26666"
                  className="rounded-xl h-9 sm:h-10 text-base sm:text-sm px-2.5 sm:px-3"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-subject"
                className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1"
              >
                Inquiry Topic <span className="text-destructive">*</span>
              </label>
              <select
                id="modal-subject"
                name="subject"
                required
                defaultValue="Admission Enquiries"
                className="w-full h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl border border-input bg-background text-foreground text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
                className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1"
              >
                Message / Grade Interested In <span className="text-destructive">*</span>
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={2}
                required
                placeholder="Grade interested in or your questions..."
                className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-input bg-background text-foreground text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            <div className="pt-1 sm:pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 sm:py-3 h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2"
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

            <div className="flex items-center justify-between pt-1.5 text-[10px] sm:text-xs text-muted-foreground border-t border-border/50">
              <span className="flex items-center gap-1 font-medium">
                <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary shrink-0" />
                Pre-Primary to Class X
              </span>
              <a
                href="tel:+919663526666"
                className="hover:text-primary transition-colors flex items-center gap-1 font-semibold text-foreground"
              >
                <Phone className="w-3 h-3 text-accent shrink-0" />
                +91 96635 26666
              </a>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
