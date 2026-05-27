'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, boxShadow: '0 20px 40px rgba(192,39,45,0.12)' } : {}}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`bg-surface rounded-2xl shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  )
}
