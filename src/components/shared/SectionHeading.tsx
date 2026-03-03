import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  holo?: boolean
}

export function SectionHeading({ title, subtitle, holo }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className={`section-heading ${holo ? 'holo-text' : ''}`}>{title}</h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-700" />
      {subtitle && <p className="mt-4 text-text-muted max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  )
}
