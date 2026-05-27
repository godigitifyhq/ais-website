'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { type LeaderProfile } from '@/data/about'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

interface Props {
  leader: LeaderProfile
  index:  number
}

export function LeaderPanel({ leader, index }: Props) {
  const { ref, inView } = useReveal(0.1)
  const isImageLeft = leader.imagePosition === 'left'
  const bgClass     = index % 2 === 0 ? 'bg-bg' : 'bg-surface-alt'

  const gridCols = isImageLeft
    ? 'lg:grid-cols-[45fr_55fr]'
    : 'lg:grid-cols-[55fr_45fr]'

  // Image is always first in DOM (image-first on mobile).
  // When image is on the right on desktop, swap visually via CSS order.
  const imgOrderClass  = isImageLeft ? '' : 'lg:order-2'
  const textOrderClass = isImageLeft ? '' : 'lg:order-1'

  return (
    <div
      ref={ref}
      className={`${bgClass} grid grid-cols-1 ${gridCols} min-h-145`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`relative min-h-85 lg:min-h-0 overflow-hidden ${imgOrderClass}`}
      >
        <Image
          src={leader.image}
          alt={leader.imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-black/15 to-transparent pointer-events-none"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isImageLeft ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, ease }}
        className={`flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-14 xl:px-18 ${textOrderClass}`}
      >
        <p className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-4">
          {leader.role}
        </p>
        <blockquote className="border-l-[3px] border-primary pl-5 mb-6">
          <p className="font-accent italic text-xl md:text-[1.45rem] text-text leading-snug">
            {leader.pullQuote}
          </p>
        </blockquote>
        <p className="font-display text-2xl font-bold text-primary">{leader.name}</p>
        <p className="font-body text-sm text-text-muted mt-0.5 mb-5">{leader.designation}</p>
        <div className="w-10 h-px bg-border mb-5" />
        {leader.message.map((para, i) => (
          <p key={i} className="font-body text-sm leading-relaxed mb-4 last:mb-0 text-text-muted">
            {i === 0 ? (
              <>
                <strong className="font-semibold text-text">{para.split('.')[0]}.</strong>
                {para.slice(para.indexOf('.') + 1)}
              </>
            ) : para}
          </p>
        ))}
      </motion.div>
    </div>
  )
}
