'use client'
import { useState } from 'react'
import { FileText, Download } from 'lucide-react'
import { syllabusClasses } from '@/data/cbseCorner'

export function SyllabusSection() {
  const [activeId, setActiveId] = useState('class-12')
  const activeClass = syllabusClasses.find(c => c.id === activeId)

  return (
    <section style={{ background: 'var(--color-surface-alt)', padding: '5rem 0' }} className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-8">
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
            Academic Year 2025–26
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--color-text)',
              lineHeight: 1.15,
              marginBottom: '0.875rem',
            }}
          >
            CBSE Syllabus{' '}
            <span
              style={{
                fontFamily: 'var(--font-accent)',
                fontStyle: 'italic',
                fontWeight: 600,
                color: 'var(--color-primary)',
              }}
            >
              for Classes 1–12
            </span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-text-muted)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Download the official CBSE-prescribed syllabus for your child&apos;s class.
            All PDFs are updated for the current session.
          </p>
        </div>

        {/* Class filter tabs */}
        <div
          className="scrollbar-none mb-8"
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.25rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
          role="tablist"
          aria-label="Select class"
        >
          {syllabusClasses.map((cls) => {
            const isActive = cls.id === activeId
            return (
              <button
                key={cls.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`syllabus-panel-${cls.id}`}
                onClick={() => setActiveId(cls.id)}
                type="button"
                style={{
                  flexShrink: 0,
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  border: `1.5px solid ${isActive ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 180ms, color 180ms, border-color 180ms',
                  whiteSpace: 'nowrap',
                  background: isActive ? 'var(--color-primary)' : 'transparent',
                  color: isActive ? 'var(--color-text-inverse)' : 'var(--color-text-muted)',
                }}
                className={!isActive ? 'hover:border-primary hover:text-primary' : ''}
              >
                {cls.shortLabel}
              </button>
            )
          })}
        </div>

        {/* Subject grid */}
        {activeClass && (
          <div
            id={`syllabus-panel-${activeClass.id}`}
            role="tabpanel"
            aria-label={`Subjects for ${activeClass.label}`}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {activeClass.subjects.map((subject) => (
              <div
                key={subject.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.875rem 1rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0.5rem',
                  background: 'var(--color-surface)',
                  transition: 'background 150ms, border-color 150ms',
                }}
                className="hover:border-[rgba(40,89,184,0.25)] hover:bg-[rgba(40,89,184,0.04)]"
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                  }}
                >
                  <FileText size={16} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  {subject.name}
                </span>

                <a
                  href={subject.pdfHref}
                  download
                  aria-label={`Download ${subject.name} syllabus PDF`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.4rem 0.875rem',
                    border: '1.5px solid var(--color-primary)',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'background 180ms, color 180ms',
                    flexShrink: 0,
                  }}
                  className="hover:bg-primary hover:text-white"
                >
                  <Download size={12} />
                  PDF
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
