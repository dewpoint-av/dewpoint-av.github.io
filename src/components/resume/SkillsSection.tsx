import { motion } from 'framer-motion'
import { Projector, Palette, Code, Settings } from 'lucide-react'
import { Card } from '@/components/shared/Card'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { skillCategories } from '@/data/skills'

const iconMap: Record<string, typeof Projector> = {
  projector: Projector,
  palette: Palette,
  code: Code,
  settings: Settings,
}

export function SkillsSection() {
  return (
    <section className="px-4 py-20 md:px-8 bg-surface-800/30" id="skills">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills"
          subtitle="Combining hands-on AV production with creative software and web development to design and deliver immersive experiences."
          holo
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, ci) => {
            const Icon = iconMap[category.icon] || Settings
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
              >
                <Card holo className="h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <Icon size={24} className="text-accent-500" />
                    <h3 className="text-lg font-bold">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, si) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-text-muted">{skill.name}</span>
                          <span className="text-accent-400 font-medium">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-surface-700 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: si * 0.05, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, var(--color-accent-700), var(--color-accent-500))`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
