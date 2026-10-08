"use client"

import { motion, useReducedMotion } from "framer-motion"
import { 
  BookOpen, Calendar, Clock, Compass, 
  Dumbbell, Palette, Sparkles, Award 
} from "lucide-react"

const infoCards = [
  {
    icon: BookOpen,
    title: "NCERT Curriculum",
    description: "Tailored to meet the different needs and aspirations of our students. We achieve a balance between academics and development of the body and soul."
  },
  {
    icon: Clock,
    title: "School Timings",
    description: "Kindergarten: 9:00 AM - 12:30 PM\nClasses I to X : 9:00 AM - 3:20 PM"
  },
  {
    icon: Calendar,
    title: "Academic Calendar",
    description: "Programmed from June to March, with two terms. Term 1 commences in June and Term 2 in November, with sporadic holidays in between."
  }
]

const holisticPillars = [
  {
    icon: Dumbbell,
    title: "Sports & Games",
    description: "We believe only a strong body can house a strong mind. Students are encouraged to participate in a wide range of indoor and outdoor games for healthy, balanced growth."
  },
  {
    icon: Compass,
    title: "Periodic Field Visits",
    description: "Education should include hands-on learning. We organize periodic field visits to provide deeper insights and make classroom learning an experiential journey."
  },
  {
    icon: Palette,
    title: "Visual & Performing Arts",
    description: "Nurturing a lifelong passion for and appreciation of the arts as participants and audience, including performing arts and visual arts integrated into co-curriculum."
  }
]

const clubs = [
  { name: "Science Club", desc: "For young scientists to experiment and discover." },
  { name: "English Club", desc: "Honing vocabulary, debates, and public speaking." },
  { name: "G.K. Club", desc: "Expanding general awareness and quiz prep." },
  { name: "Readers Club", desc: "Inculcating a lifelong passion for reading." },
  { name: "Drama Club", desc: "Fostering theatrical expression and confidence." },
  { name: "Math Club", desc: "Exploring mathematical puzzles and logic." },
  { name: "Computer Club", desc: "Coding, computer education, and digital literacy." },
  { name: "Eco Club", desc: "Environmental consciousness and green practices." },
  { name: "Robotics Club", desc: "Designing, building, and programming autonomous robots and smart systems." },
  { name: "Student Magazine Editorial Board", desc: "Fostering creative writing and journalism." }
]

const skillActivities = [
  "Debates (English and Kannada)", "Public Speaking", "Youth Parliament",
  "Creative Writing", "Quiz Sessions", "Show and Tell",
  "Clay Modeling", "Craft Activities", "Art and Painting", "Paper Reading"
]

const extraCurriculars = [
  { name: "Yoga", desc: "Physical harmony and mental focus." },
  { name: "Karate", desc: "Self-defense, discipline, and stamina." },
  { name: "Dance & Drama", desc: "Expression, creativity, and rhythm." },
  { name: "Music", desc: "Vocal and instrumental learning." }
]

export function CurriculumOverview() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Curriculum & School Life
          </motion.span>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            A Journey of Holistic Growth
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            At Heritage Public School, education is a journey that prepares students for life. Our academic programs are designed to inspire intellectual curiosity and build character.
          </motion.p>
        </div>

        {/* Academic & Timings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Holistic pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">Beyond the Classroom</h3>
            <p className="text-muted-foreground text-sm">We provide opportunities tailored to nurture physical, artistic, and empirical skills.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {holisticPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card rounded-xl p-8 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground mb-3">{pillar.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Development Activities & Extra-curriculars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Skill Honing activities */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Skill Honing Activities
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Under the guidance of qualified teachers, HPS provides regular skill development sessions to help pupils hone their innate talents:
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {skillActivities.map((activity, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Extra Curricular training */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                Extra-Curricular Highlights
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Designed for continuous learning, student exposure, and overall growth of body, mind, and soul:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {extraCurriculars.map((activity, idx) => (
                  <div key={idx} className="border-l-2 border-primary/30 pl-4 py-1">
                    <h4 className="font-semibold text-foreground text-sm mb-1">{activity.name}</h4>
                    <p className="text-muted-foreground text-xs">{activity.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border/80 text-center">
              <p className="text-accent font-serif font-semibold italic text-sm">
                &ldquo;Come and inherit heritage at HPS.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Clubs Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">Student Clubs</h3>
            <p className="text-muted-foreground text-sm">Empowering students through collaboration, exploration, and creative autonomy.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <motion.div
                key={club.name}
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.04 * index }}
                className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-md hover:border-accent/30 transition-all text-left"
              >
                <h4 className="font-serif font-bold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  {club.name}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{club.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
