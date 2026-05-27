'use client'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { requiredDocuments } from '@/data/admission'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function DocumentsSection() {
  const { ref, inView } = useReveal(0.1)

  const mandatory    = requiredDocuments.filter(d => d.required)
  const conditional  = requiredDocuments.filter(d => !d.required)

  return (
    <div>
      {/* Heading */}
      <div ref={ref} className="mb-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease }}
          className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3"
        >
          Be Prepared
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="font-display text-3xl sm:text-4xl font-bold text-text"
        >
          Documents{' '}
          <span className="font-accent italic text-primary">Required</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18, ease }}
          className="font-body text-sm text-text-muted mt-2"
        >
          Prepare these before your campus visit.
        </motion.p>
      </div>

      {/* Document groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">

        {/* Mandatory */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease }}
          className="bg-surface-alt rounded-2xl border border-border p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
            <h3 className="font-body text-xs font-bold tracking-[0.15em] uppercase text-text-muted">
              Mandatory
            </h3>
          </div>

          <ul className="space-y-2.5">
            {mandatory.map(doc => (
              <li key={doc.id} className="flex items-start gap-3">
                <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                <span className="font-body text-sm text-text-muted">{doc.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* If applicable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="bg-surface-alt rounded-2xl border border-border p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-border shrink-0" />
            <h3 className="font-body text-xs font-bold tracking-[0.15em] uppercase text-text-muted">
              If Applicable
            </h3>
          </div>

          <ul className="space-y-2.5 mb-5">
            {conditional.map(doc => (
              <li key={doc.id} className="flex items-start gap-3">
                <CheckCircle2 size={15} className="text-border shrink-0 mt-0.5" />
                <span className="font-body text-sm text-text-muted">{doc.label}</span>
              </li>
            ))}
          </ul>

          <p className="font-body text-xs text-text-muted leading-relaxed border-t border-border pt-4">
            These documents are required only for students transferring from another school or
            opting for school transport. Bring originals and one photocopy each.
          </p>
        </motion.div>

      </div>
    </div>
  )
}
