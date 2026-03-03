import { motion } from 'framer-motion'
import { User, Compass, Lightbulb, GraduationCap, Music, Video, Headphones, Sun, Code, Palette } from 'lucide-react'
import { Card } from '@/components/shared/Card'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { StatItem } from '@/components/shared/StatItem'

const aboutCards = [
  {
    icon: User,
    title: 'Who I Am',
    text: "I'm a creative technologist and audiovisual artist based in Columbus, OH. I combine hands-on AV engineering with software development — working across projection mapping, LED systems, live sound, and creative coding in TouchDesigner, Unreal Engine, React, and Python to design and deliver immersive experiences from concept through execution.",
  },
  {
    icon: Compass,
    title: 'My Journey',
    text: "My journey started with a passion for music and live events, which led me to study Music Education at the University of Tennessee. Since then I've produced 20+ events across 10+ festivals and 15+ venues — from intimate club shows to large-scale festival stages — always pushing what's possible with real-time visuals and sound.",
  },
  {
    icon: Lightbulb,
    title: 'What I Believe',
    text: "I believe in bridging the gap between art and technology. Whether it's projection-mapped installations, interactive audiovisual prototypes, or web-based creative tools, I'm driven by continuous learning and the pursuit of experiences that transport audiences to another world.",
  },
]

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Events Produced' },
  { value: '10+', label: 'Festivals Worked' },
  { value: '15+', label: 'Venues' },
]

const interests = [
  { icon: Music, label: 'Live Music' },
  { icon: Video, label: 'Video Production' },
  { icon: Headphones, label: 'Audio Engineering' },
  { icon: Sun, label: 'Lighting Design' },
  { icon: Code, label: 'Creative Coding' },
  { icon: Palette, label: '3D & Real-Time Graphics' },
]

export function About() {
  return (
    <section className="px-4 py-20 md:px-8" id="about">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" holo />

        {/* Three about cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {aboutCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card holo className="h-full">
                <card.icon size={28} className="text-accent-500 mb-3" />
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{card.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card holo className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap size={24} className="text-accent-500" />
              <h3 className="text-lg font-bold">Education</h3>
            </div>
            <p className="text-text-muted">
              <span className="text-text-primary font-medium">3 Years</span> &middot; Music Education &middot; University of Tennessee
            </p>
          </Card>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold mb-4 text-center">Interests & Hobbies</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {interests.map((interest, i) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="flex flex-col items-center gap-2 p-3"
              >
                <interest.icon size={24} className="text-accent-500" />
                <span className="text-xs text-text-muted">{interest.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
