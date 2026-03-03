import { motion } from 'framer-motion'
import { Mail, ExternalLink, Music, Monitor, Users } from 'lucide-react'
import { Card } from '@/components/shared/Card'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { StatItem } from '@/components/shared/StatItem'
import { FloatingSocial } from '@/components/layout/FloatingSocial'
import { PageTransition } from '@/components/shared/PageTransition'
import {
  epkBio,
  epkHighlights,
  performances,
  technicalFocus,
  releases,
  epkStats,
} from '@/data/epkData'

const focusIcons = [Music, Monitor, Users]

export function EpkPage() {
  return (
    <PageTransition>
      <FloatingSocial />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/DewPoint-BlackBox-4.11.25-10.jpg"
            alt="Dewpoint Live"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-900/60 via-surface-900/80 to-surface-900" />
        </div>
        <div className="relative z-10 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold md:text-5xl lg:text-6xl mb-4"
          >
            <span className="holo-text">Dewpoint AV</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted"
          >
            Electronic Press Kit
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-sm text-text-muted"
          >
            Audiovisual artist, video technician, and audio engineer crafting immersive experiences.
          </motion.p>
        </div>
      </section>

      {/* Artist Overview */}
      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="Artist Overview" holo />

          <div className="grid gap-8 md:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <Card holo>
                {epkBio.split('\n\n').map((para, i) => (
                  <p key={i} className="text-text-muted leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <Card holo>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400 mb-4">
                  Highlights at a Glance
                </h3>
                <ul className="space-y-3">
                  {epkHighlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {epkStats.map((stat, i) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Noteworthy Performances */}
      <section className="px-4 py-20 md:px-8 bg-surface-800/30">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="Noteworthy Performances" holo />

          <div className="grid gap-6 sm:grid-cols-2">
            {performances.map((perf, i) => (
              <motion.div
                key={perf.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card holo className="h-full">
                  <h3 className="text-lg font-bold mb-1">{perf.title}</h3>
                  <p className="text-sm text-accent-400 mb-3">{perf.venue}</p>
                  <p className="text-sm text-text-muted italic">"{perf.description}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Focus */}
      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="Technical Focus" holo />

          <div className="grid gap-6 md:grid-cols-3">
            {technicalFocus.map((item, i) => {
              const Icon = focusIcons[i]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card holo className="h-full">
                    <Icon size={28} className="text-accent-500 mb-3" />
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Releases */}
      <section className="px-4 py-20 md:px-8 bg-surface-800/30">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="Featured Releases & Assets" holo />

          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
            {releases.map((release, i) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card holo>
                  <div className="flex items-center gap-3">
                    <Music size={20} className="text-accent-500" />
                    <div>
                      <p className="font-semibold text-sm">{release.title}</p>
                      <p className="text-xs text-text-muted">{release.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card holo>
                <div className="flex items-center gap-3">
                  <ExternalLink size={20} className="text-accent-500" />
                  <div>
                    <a href="#/resume" className="font-semibold text-sm hover:text-accent-400 transition-colors">
                      Technical Resume
                    </a>
                    <p className="text-xs text-text-muted">Detailed work history & skill stack</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading title="Book Dewpoint" holo />
            <p className="text-text-muted mb-8">
              For bookings, touring opportunities, and AV support, please reach out directly via
              email. Full tech specs and stage plots are available on request.
            </p>
            <a href="mailto:anthony@dewpoint.live" className="btn-primary text-lg px-8 py-4">
              <Mail size={20} />
              anthony@dewpoint.live
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
