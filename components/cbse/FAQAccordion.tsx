'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '@/data/cbseCorner'

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section style={{ background: 'var(--color-bg)', padding: '5rem 0' }} className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-primary-dark)',
              marginBottom: '0.5rem',
            }}
          >
            Parent Queries
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--color-text)',
              lineHeight: 1.15,
            }}
          >
            Frequently Asked{' '}
            <span
              style={{
                fontFamily: 'var(--font-accent)',
                fontStyle: 'italic',
                fontWeight: 600,
                color: 'var(--color-primary)',
              }}
            >
              Questions
            </span>
          </h2>
        </div>

        {/* Accordion list */}
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {faqItems.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                style={{
                  border: `1px solid ${isOpen ? 'rgba(40,89,184,0.30)' : 'var(--color-border)'}`,
                  borderRadius: '0.625rem',
                  overflow: 'hidden',
                  marginBottom: '0.5rem',
                  background: 'var(--color-surface)',
                  transition: 'border-color 200ms ease',
                }}
              >
                {/* Question button */}
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                    width: '100%',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    color="var(--color-primary)"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 250ms ease',
                      marginTop: '2px',
                    }}
                  />
                </button>

                {/* Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-label={faq.question}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          padding: '0 1.5rem 1.25rem',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.9rem',
                          color: 'var(--color-text-muted)',
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
