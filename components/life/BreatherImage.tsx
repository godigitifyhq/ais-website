'use client'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

interface BreatherImageProps {
  src:    string
  alt:    string
  height?: string  // CSS value for desktop, default 'min(55vh, 480px)'
}

export function BreatherImage({ src, alt, height = 'min(55vh, 480px)' }: BreatherImageProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: `clamp(220px, 40vw, ${height})`,
      }}
    >
      <motion.div
        className="absolute inset-0"
        initial={reducedMotion ? false : { scale: 1.04 }}
        animate={{ scale: 1.0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 6, ease: 'linear' }}
        style={{ willChange: 'transform' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </motion.div>
    </div>
  )
}
