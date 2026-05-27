'use client'
import { motion } from 'framer-motion'
import {
  CalendarDays, FileCheck, Award, ShieldCheck, Users, ClipboardList, Download,
} from 'lucide-react'
import { cbseDocuments, documentColors } from '@/data/cbseCorner'
import { useReveal } from '@/hooks/useReveal'

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  CalendarDays, FileCheck, Award, ShieldCheck, Users, ClipboardList,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
}

export function DocumentsGrid() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.1)

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
            CBSE Compliance
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
            Official{' '}
            <span
              style={{
                fontFamily: 'var(--font-accent)',
                fontStyle: 'italic',
                fontWeight: 600,
                color: 'var(--color-primary)',
              }}
            >
              Documents
            </span>
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cbseDocuments.map((doc) => {
            const colors = documentColors[doc.colorKey]
            const IconComponent = iconMap[doc.icon]

            return (
              <motion.div
                key={doc.id}
                variants={item}
                style={{
                  background: 'var(--color-surface)',
                  border: `1.5px solid ${colors.border}`,
                  borderRadius: '0.875rem',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'box-shadow 220ms ease, transform 220ms ease',
                }}
                className="hover:-translate-y-[3px] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]"
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: '50%',
                    background: colors.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.25rem',
                    flexShrink: 0,
                  }}
                >
                  {IconComponent && <IconComponent size={22} color={colors.icon} />}
                </div>

                {/* Label */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    lineHeight: 1.3,
                  }}
                >
                  {doc.label}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.55,
                    flex: 1,
                  }}
                >
                  {doc.description}
                </p>

                {/* Download CTA */}
                <a
                  href={doc.href}
                  download={doc.href.endsWith('.pdf') ? true : undefined}
                  target={doc.isExternal ? '_blank' : undefined}
                  rel={doc.isExternal ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    marginTop: 'auto',
                    transition: 'gap 180ms ease',
                  }}
                  className="hover:gap-2.5"
                  aria-label={`Download ${doc.label} PDF`}
                >
                  <Download size={14} />
                  Download PDF
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
