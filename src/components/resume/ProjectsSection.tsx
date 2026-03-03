import { motion } from 'framer-motion'
import { Projector, Sparkles, Globe, Box } from 'lucide-react'
import { Card } from '@/components/shared/Card'
import { SectionHeading } from '@/components/shared/SectionHeading'

const projects = [
  {
    icon: Projector,
    title: 'Projection-Mapped Installations',
    description:
      'Designed and deployed custom projection mapping for festival stages using multi-projector blending and real-time generative visuals.',
  },
  {
    icon: Sparkles,
    title: 'Interactive AV Experiences',
    description:
      'Building interactive audiovisual prototypes combining TouchDesigner, sensor input, and real-time audio-reactive visuals.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Built dewpoint.live as a React-based portfolio and booking platform; developing tools for event production workflows.',
  },
  {
    icon: Box,
    title: '3D & Real-Time Graphics',
    description:
      'Creating immersive environments and visual content in Unreal Engine, Cinema 4D, and Blender for live and pre-rendered applications.',
  },
]

export function ProjectsSection() {
  return (
    <section className="px-4 py-20 md:px-8" id="projects">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Select Projects & Capabilities" holo />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card holo className="h-full">
                <project.icon size={28} className="text-accent-500 mb-3" />
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{project.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
