'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { facilityInUseItems } from '@/data/infrastructure'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function FacilityInUseSection() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-primary py-4 overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, ease }}
        className="grid grid-cols-2 md:grid-cols-4"
      >
        {facilityInUseItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className="relative aspect-square group overflow-hidden"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            {/* Single-word label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
