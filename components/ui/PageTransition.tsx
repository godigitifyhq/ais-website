'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const variants = {
  initial:  { opacity: 0, y: 18 },
  enter:    { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] } },
  exit:     { opacity: 0, y: -10, transition: { duration: 0.25 } },
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={variants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  )
}
