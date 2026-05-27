'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { campusBreather } from '@/data/home'

export function CampusBreather() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.1)

  return (
    <section
      aria-hidden="true"
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(45vh, 55vw, 60vh)' }}
    >
      <motion.div
        ref={ref}
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={inView ? { scale: 1 } : { scale: 1.05 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Image
          src={campusBreather.image}
          alt={campusBreather.imageAlt}
          fill
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
      </motion.div>

      {/* Bottom vignette — purely decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-alt/60 to-transparent pointer-events-none" />
    </section>
  )
}
