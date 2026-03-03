import { motion } from 'framer-motion'

interface StatItemProps {
  value: string
  label: string
  index?: number
}

export function StatItem({ value, label, index = 0 }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-accent-500">{value}</div>
      <div className="mt-1 text-sm text-text-muted">{label}</div>
    </motion.div>
  )
}
