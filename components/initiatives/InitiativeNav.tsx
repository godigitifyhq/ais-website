'use client'
import { useEffect, useRef, useState } from 'react'
import { initiativeNavItems } from '@/data/ourInitiatives'

export function InitiativeNav() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { threshold: 0.3 },
    )

    const sections = initiativeNavItems.map(({ anchorId }) =>
      document.getElementById(anchorId),
    )
    sections.forEach((el) => el && observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  function scrollTo(anchorId: string) {
    document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      aria-label="Initiatives navigation"
      className="sticky z-40 border-b"
      style={{
        top:        '64px',
        background: 'var(--color-surface)',
        borderColor:'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 sm:gap-3 py-3 overflow-x-auto scrollbar-hide">
          {initiativeNavItems.map(({ id, label, anchorId }) => {
            const isActive = activeId === anchorId
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(anchorId)}
                aria-pressed={isActive}
                className="flex-shrink-0 font-body text-xs font-bold tracking-[0.12em] uppercase
                  px-4 py-2 rounded-full transition-all duration-200"
                style={
                  isActive
                    ? { background: 'var(--color-primary)', color: 'var(--color-text-inverse)' }
                    : { background: 'transparent', color: 'var(--color-text-muted)' }
                }
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
