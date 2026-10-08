"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Trophy,
  Compass,
  Palette,
  Sparkles,
  Music,
  BookOpen,
  Leaf,
  Users,
  CheckCircle2,
  Calendar,
  Flame,
} from "lucide-react";

const sportsDevelopment = [
  "Physical Fitness",
  "Teamwork",
  "Discipline",
  "Confidence",
  "Sportsmanship",
  "Healthy Competitive Spirit",
];

const fieldVisitBenefits = [
  "Experiential Learning",
  "Practical Understanding",
  "Observation & Exploration",
  "Real-World Exposure",
];

const extraCurricularActivities = [
  {
    title: "Debates (English & Kannada)",
    skills: ["Communication Skills", "Public Speaking", "Confidence", "Critical Thinking"],
  },
  {
    title: "Quiz Sessions",
    skills: ["General Awareness", "Quick Thinking", "Knowledge Building", "Healthy Competition"],
  },
  {
    title: "Show and Tell",
    skills: ["Communication", "Presentation Skills", "Confidence", "Self-Expression"],
  },
  {
    title: "Clay Modelling",
    skills: ["Creativity", "Imagination", "Fine Motor Skills", "Artistic Expression"],
  },
  {
    title: "Craft Activities",
    skills: ["Creativity", "Hands-on Learning", "Innovation", "Artistic Skills"],
  },
  {
    title: "Art & Painting",
    skills: ["Creative Expression", "Imagination", "Observation", "Artistic Development"],
  },
  {
    title: "Paper Reading",
    skills: ["Reading Skills", "Pronunciation", "Presentation", "Communication"],
  },
];

const extraCurricularHighlights = [
  {
    name: "Yoga",
    icon: Flame,
    points: ["Physical Well-Being", "Mental Focus", "Balance", "Discipline"],
  },
  {
    name: "Dance & Drama",
    icon: Sparkles,
    points: ["Creativity", "Expression", "Rhythm", "Confidence & Stage Presence"],
  },
  {
    name: "G.K. Activities",
    icon: BookOpen,
    points: ["General Awareness", "Current Knowledge", "Quiz Preparation", "Intellectual Curiosity"],
  },
  {
    name: "Readers Circle",
    icon: BookOpen,
    points: ["Reading Habits", "Comprehension", "Vocabulary", "Love for Books"],
  },
  {
    name: "Drama Forum",
    icon: Palette,
    points: ["Theatrical Expression", "Communication", "Confidence", "Teamwork"],
  },
  {
    name: "Eco Club",
    icon: Leaf,
    points: ["Environmental Awareness", "Green Practices", "Nature Responsibility", "Sustainable Habits"],
  },
];

const culturalEvents = [
  "Annual Day Celebrations",
  "Cultural Programmes",
  "Dance Performances",
  "Drama and Skits",
  "Music and Singing",
  "Festival Celebrations",
  "Traditional and Theme-Based Events",
  "Special Assemblies",
  "Talent Shows",
];

const sportsEvents = [
  "Annual Sports Day",
  "Athletics",
  "Team Games",
  "Indoor Games",
  "Outdoor Games",
  "Inter-House Sports Competitions",
  "Fitness Activities",
  "Recreational Games",
  "Sports Demonstrations",
  "Student Competitions",
];

export function ActivitiesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Co-Curricular & Student Life
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Beyond the Classroom
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed"
          >
            At Sai English High School, learning extends beyond academics. Students are given opportunities to develop their physical, creative, social, and practical abilities through a variety of activities and experiences.
          </motion.p>
        </div>

        {/* Sports & Field Visits 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Sports & Games */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 border border-border/60 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6 text-accent">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              Sports & Games
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              Sports and physical activity form an important part of a child&apos;s overall development. Students are encouraged to develop fitness, character, and sportsman spirit.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {sportsDevelopment.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/90 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Periodic Field Visits */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-3xl p-8 border border-border/60 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              Periodic Field Visits
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              Educational field visits provide students with opportunities to connect classroom learning with real-world experiences and practical environments.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {fieldVisitBenefits.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/90 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Extra-Curricular Activities Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Skill Development
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-1">
              Extra-Curricular Activities
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              Building confidence, creativity, communication skills, and well-rounded personality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {extraCurricularActivities.map((act, index) => (
              <motion.div
                key={act.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="bg-secondary/50 rounded-2xl p-6 border border-border/50 hover:border-accent/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-3">
                    {act.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {act.skills.map((skill) => (
                      <li key={skill} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extra-Curricular Highlights (Clubs & Forums) */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Clubs & Circles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-1">
              Extra-Curricular Highlights
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraCurricularHighlights.map((club, index) => (
              <motion.div
                key={club.name}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="bg-card rounded-2xl p-6 border border-border/60 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <club.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-foreground">
                    {club.name}
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {club.points.map((pt) => (
                    <span key={pt} className="text-xs font-medium bg-secondary px-2.5 py-1.5 rounded-md text-foreground/80">
                      {pt}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cultural & Sports Events Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Cultural Activities */}
          <div className="bg-secondary/40 rounded-3xl p-8 border border-border/60">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                <Music className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Cultural Activities & Events
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Cultural activities celebrate creativity, tradition, expression, and teamwork, helping students develop confidence and stage presence.
            </p>
            <div className="flex flex-wrap gap-2">
              {culturalEvents.map((evt) => (
                <span key={evt} className="text-xs sm:text-sm font-medium bg-card border border-border px-3 py-1.5 rounded-full text-foreground">
                  {evt}
                </span>
              ))}
            </div>
          </div>

          {/* Sports Events */}
          <div className="bg-secondary/40 rounded-3xl p-8 border border-border/60">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Sports Activities & Events
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Designed to encourage active participation, healthy competition, teamwork, leadership, and physical well-being.
            </p>
            <div className="flex flex-wrap gap-2">
              {sportsEvents.map((evt) => (
                <span key={evt} className="text-xs sm:text-sm font-medium bg-card border border-border px-3 py-1.5 rounded-full text-foreground">
                  {evt}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* “Rajathakalothsava” Silver Jubilee Annual Day Celebration */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent text-accent-foreground text-xs sm:text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              25th Anniversary Landmark
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              &ldquo;Rajathakalothsava&rdquo; — Silver Jubilee Annual Day Celebration
            </h3>
            <p className="text-primary-foreground/90 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              Sai English High School recently marked a significant milestone with the celebration of its 25th Anniversary – Silver Jubilee Annual Day. The occasion celebrated 25 years of education, growth, achievement, and service to the community, bringing together students, teachers, parents, alumni, management, and well-wishers.
            </p>
            <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl mx-auto">
              The Silver Jubilee was not only a celebration of the school&apos;s journey so far, but also a tribute to the generations of students and educators who have contributed to its legacy.
            </p>
            <div className="inline-block bg-accent/20 border border-accent/40 rounded-2xl px-6 py-3">
              <p className="font-serif text-base sm:text-lg font-bold text-accent tracking-wide">
                25 Years of Learning • 25 Years of Values • 25 Years of Growing Together
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
