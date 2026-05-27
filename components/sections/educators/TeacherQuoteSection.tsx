'use client'
import { motion } from 'framer-motion'
import { managementQuote } from '@/data/educators'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function TeacherQuoteSection() {
  const { ref, inView } = useReveal(0.2)

  return (
    <section className="bg-surface-alt py-24 lg:py-32 overflow-hidden">
      <div
        ref={ref}
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Decorative rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease }}
          className="w-20 h-[3px] bg-primary-dark rounded-full mx-auto mb-8 origin-center"
        />

        {/* Opening quotation mark */}
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="block font-accent leading-none select-none text-primary/25 -mb-4"
          style={{ fontSize: '8rem' }}
        >
          &ldquo;
        </motion.span>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.18, ease }}
        >
          <p
            className="font-display italic font-semibold text-text leading-snug"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.75rem)' }}
          >
            {managementQuote.text}
          </p>

          {/* Attribution */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.42, ease }}
            className="mt-8"
          >
            <div className="w-10 h-px bg-border mx-auto mb-4" />
            <cite className="not-italic font-body text-xs font-bold tracking-[0.22em] uppercase text-text-muted">
              — {managementQuote.attribution}
            </cite>
          </motion.footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
