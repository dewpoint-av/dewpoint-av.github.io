import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Globe } from 'lucide-react'
import { Card } from '@/components/shared/Card'
import { SectionHeading } from '@/components/shared/SectionHeading'

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    value: 'anthony@dewpoint.live',
    href: 'mailto:anthony@dewpoint.live',
  },
  {
    icon: Globe,
    title: 'Website',
    value: 'dewpoint.live',
    href: 'https://dewpoint.live',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Columbus, OH',
  },
  {
    icon: Clock,
    title: 'Availability',
    value: 'Event-based scheduling',
  },
]

export function ContactSection() {
  return (
    <section className="px-4 py-20 md:px-8" id="contact">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Get In Touch" holo />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-muted max-w-2xl mx-auto mb-12"
        >
          I'm always interested in hearing about new event opportunities and exciting audio-visual
          projects. Whether you have a question about event production or just want to say hi,
          feel free to reach out!
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Card holo>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10">
                    <item.icon size={22} className="text-accent-500" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-text-primary hover:text-accent-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-text-primary">{item.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-text-muted"
        >
          I'm currently available for event production work and freelance audio-visual opportunities.
        </motion.p>
      </div>
    </section>
  )
}
