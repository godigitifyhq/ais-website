'use client'
import { useState } from 'react'
import { importantDates, dateCategoryConfig } from '@/data/cbseCorner'
import type { ImportantDate } from '@/data/cbseCorner'

type Category = ImportantDate['category'] | 'all'

const filterOptions: { id: Category; label: string }[] = [
  { id: 'all',       label: 'All'       },
  { id: 'exam',      label: 'Exam'      },
  { id: 'result',    label: 'Result'    },
  { id: 'holiday',   label: 'Holiday'   },
  { id: 'activity',  label: 'Activity'  },
  { id: 'admission', label: 'Admission' },
]

export function ImportantDates() {
  const [selected, setSelected] = useState<Category>('all')

  const filtered = selected === 'all'
    ? importantDates
    : importantDates.filter(d => d.category === selected)

  return (
    <section style={{ background: 'var(--color-bg)', padding: '5rem 0' }} className="py-14 lg:py-20">
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
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--color-text)',
              lineHeight: 1.15,
            }}
          >
            Important{' '}
            <span
              style={{
                fontFamily: 'var(--font-accent)',
                fontStyle: 'italic',
                fontWeight: 600,
                color: 'var(--color-primary)',
              }}
            >
              Dates
            </span>
          </h2>
        </div>

        {/* Filter pills */}
        <div
          className="scrollbar-none mb-6"
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.25rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
          role="group"
          aria-label="Filter by category"
        >
          {filterOptions.map((opt) => {
            const isActive = opt.id === selected
            const config = opt.id !== 'all' ? dateCategoryConfig[opt.id as ImportantDate['category']] : null
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelected(opt.id)}
                style={{
                  flexShrink: 0,
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  border: `1.5px solid ${isActive ? (config?.text ?? 'var(--color-primary)') : 'var(--color-border)'}`,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 180ms, color 180ms, border-color 180ms',
                  background: isActive ? (config?.bg ?? 'rgba(192,39,45,0.10)') : 'transparent',
                  color: isActive ? (config?.text ?? 'var(--color-primary)') : 'var(--color-text-muted)',
                }}
              >
                {opt.label}
              </button>
            )
          })}
        </div>

        {/* Date list */}
        <div
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '0.75rem',
            overflow: 'hidden',
          }}
        >
          {filtered.length === 0 ? (
            <p
              style={{
                padding: '2rem',
                textAlign: 'center',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--color-text-muted)',
              }}
            >
              No dates in this category.
            </p>
          ) : (
            filtered.map((date, idx) => {
              const cfg = dateCategoryConfig[date.category]
              return (
                <div
                  key={date.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto 1fr',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderBottom: idx < filtered.length - 1 ? '1px solid var(--color-border)' : 'none',
                  }}
                  className="max-sm:grid-cols-[auto_1fr] max-sm:grid-rows-[auto_auto]"
                >
                  {/* Badge */}
                  <span
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      background: cfg.bg,
                      color: cfg.text,
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      whiteSpace: 'nowrap',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {cfg.label}
                  </span>

                  {/* Date */}
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {date.date}
                  </span>

                  {/* Event */}
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-text)',
                    }}
                  >
                    {date.event}
                  </span>
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}
