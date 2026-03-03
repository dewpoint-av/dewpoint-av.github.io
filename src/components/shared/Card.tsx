import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  holo?: boolean
}

export function Card({ children, className = '', holo = false }: CardProps) {
  return (
    <div
      className={`glass-card ${holo ? 'holo-border holo-glow' : ''} p-6 ${className}`}
    >
      {children}
    </div>
  )
}
