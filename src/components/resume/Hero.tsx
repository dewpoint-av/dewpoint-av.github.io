import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const subtitles = ['Creative Technologist', 'AV Production', 'Immersive Experience Design', 'Projection Mapper']

export function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-500"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
        >
          Hi, I'm{' '}
          <span className="holo-text">Anthony Douglas</span>
        </motion.h1>

        <div className="mt-4 h-10 flex items-center justify-center">
          <span className="text-xl text-text-muted md:text-2xl">I'm a </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={subtitleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="ml-2 text-xl font-semibold text-accent-400 md:text-2xl"
            >
              {subtitles[subtitleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-text-muted leading-relaxed"
        >
          Audiovisual technician and creative developer with 3+ years producing live events,
          projection-mapped installations, and interactive media experiences. Combines hands-on AV
          engineering with software development skills in Unreal Engine, TouchDesigner, React, and
          Python to design and deliver immersive experiences from concept through execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#experience" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} className="text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
