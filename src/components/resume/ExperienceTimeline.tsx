import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { Card } from '@/components/shared/Card'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { experiences } from '@/data/experiences'

export function ExperienceTimeline() {
  return (
    <section className="px-4 py-20 md:px-8" id="experience">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Experience" holo />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-accent-500/20 to-transparent" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative mb-10 flex ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                } pl-12 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2.5 md:left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-accent-500 ring-4 ring-surface-900`}
                />

                <div className={`w-full md:w-[45%] ${isLeft ? '' : ''}`}>
                  <Card holo>
                    <div className="flex items-center gap-2 text-xs text-accent-400 mb-2">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-lg font-bold">{exp.title}</h3>
                    <p className="text-sm text-accent-400 font-medium">{exp.company}</p>
                    <div className="flex items-center gap-1 text-xs text-text-muted mt-1 mb-3">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed mb-4">{exp.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-1">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-xs text-text-muted">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
