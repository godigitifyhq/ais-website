'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import { admissionFAQs } from '@/data/admission'
import { AccordionItem } from '@/components/ui/AccordionItem'

const ease = [0.33, 1, 0.68, 1] as const

export function FAQSection() {
  const { ref, inView } = useReveal(0.1)

  return (
    <div>
      {/* Heading */}
      <div ref={ref} className="relative mb-8">
        <span
          aria-hidden="true"
          className="absolute -top-3 -left-1 font-display font-black uppercase leading-none
            select-none pointer-events-none text-text/[0.04] text-[4rem] sm:text-[5rem]"
        >
          FAQ
        </span>

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease }}
            className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3"
          >
            Parent Questions
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="font-display text-3xl sm:text-4xl font-bold text-text"
          >
            Common{' '}
            <span className="font-accent italic text-primary">Questions</span>
          </motion.h2>
        </div>
      </div>

      {/* FAQ accordions */}
      <div className="space-y-3">
        {admissionFAQs.map((faq, i) => (
          <AccordionItem
            key={faq.id}
            defaultOpen={i === 0}
            trigger={
              <span className="font-body text-sm font-semibold text-text">
                {faq.question}
              </span>
            }
          >
            <div className="px-5 pt-2 pb-5">
              <p className="font-body text-sm text-text-muted leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </AccordionItem>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
        className="mt-8 font-body text-sm text-text-muted text-center"
      >
        Still have questions?{' '}
        <Link
          href="/contact"
          className="text-primary font-semibold hover:underline underline-offset-4"
        >
          Contact our Admissions team →
        </Link>
      </motion.p>
    </div>
  )
}
