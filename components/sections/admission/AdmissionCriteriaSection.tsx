'use client'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { admissionCriteria } from '@/data/admission'
import { AccordionItem } from '@/components/ui/AccordionItem'

const ease = [0.33, 1, 0.68, 1] as const

export function AdmissionCriteriaSection() {
  const { ref, inView } = useReveal(0.1)

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
          Grade by Grade
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="font-display text-3xl sm:text-4xl font-bold text-text"
        >
          Admission{' '}
          <span className="font-accent italic text-primary">Criteria</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18, ease }}
          className="font-body text-sm text-text-muted mt-2"
        >
          Grade-by-grade eligibility and procedure.
        </motion.p>
      </div>

      {/* Accordion list */}
      <div className="space-y-3">
        {admissionCriteria.map((group, i) => (
          <AccordionItem
            key={group.id}
            defaultOpen={i === 0}
            trigger={
              <span className="font-display text-base font-bold text-text">
                {group.gradeLabel}
              </span>
            }
          >
            <div className="px-5 pt-3 pb-5 space-y-4">

              {group.ageEligibility && (
                <div>
                  <p className="font-body text-xs font-bold text-text-muted uppercase tracking-wide mb-1">
                    Age Eligibility
                  </p>
                  <p className="font-body text-sm text-text">{group.ageEligibility}</p>
                </div>
              )}

              <div>
                <p className="font-body text-xs font-bold text-text-muted uppercase tracking-wide mb-2">
                  Admission Criteria
                </p>
                <ul className="space-y-1.5">
                  {group.criteria.map((c, ci) => (
                    <li key={ci} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span className="font-body text-sm text-text-muted">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-body text-xs font-bold text-text-muted uppercase tracking-wide mb-2">
                  Procedure
                </p>
                <ol className="space-y-1.5 list-none">
                  {group.procedure.map((p, pi) => (
                    <li key={pi} className="flex items-start gap-2.5">
                      <span className="font-display text-xs font-bold text-primary shrink-0 w-4">
                        {pi + 1}.
                      </span>
                      <span className="font-body text-sm text-text-muted">{p}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>
          </AccordionItem>
        ))}
      </div>
    </div>
  )
}
