'use client'
import { motion } from 'framer-motion'
import { campusPhilosophy } from '@/data/infrastructure'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function CampusPhilosophy() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-bg py-20 lg:py-28 overflow-hidden relative">
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute top-0 right-0 font-accent italic font-black uppercase leading-none select-none pointer-events-none text-[10vw] text-text/[0.04] translate-y-4"
      >
        {campusPhilosophy.ghostLabel}
      </span>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease }}
          className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-6"
        >
          {campusPhilosophy.eyebrow}
        </motion.p>

        {/* Heading split */}
        <div className="mb-10">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease }}
            className="block font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight"
          >
            {campusPhilosophy.headingPlain}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="block font-accent italic text-4xl lg:text-5xl text-primary leading-tight"
          >
            {campusPhilosophy.headingAccent}
          </motion.span>
        </div>

        {/* Body columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2, ease }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-12"
        >
          {campusPhilosophy.body.map((para, i) => (
            <p key={i} className="font-body text-base text-text-muted leading-[1.75]">
              {para}
            </p>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border w-full mb-12" />

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="font-accent italic text-xl md:text-2xl text-text-muted leading-relaxed mb-3">
            &ldquo;{campusPhilosophy.quote}&rdquo;
          </p>
          <footer className="font-body text-xs font-bold tracking-[0.15em] uppercase text-primary">
            {campusPhilosophy.quoteAttribution}
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
