'use client'
import { useEffect, useState } from 'react'

const navItems = [
  { id: 'kindergarten-block',   label: 'Kindergarten Block' },
  { id: 'academic-block',       label: 'Academic Block'     },
  { id: 'infirmary',      label: 'Infirmary'    },
  { id: 'administrative-block', label: 'Admin Block'        },
  { id: 'sports-grounds',       label: 'Sports'             },
  { id: 'arts-fine-arts',       label: 'Arts Studio'        },
  { id: 'health-wellbeing',     label: 'Health'             },
  { id: 'transport',            label: 'Transport'          },
]

export function CampusBlocksNav() {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { threshold: 0.3 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      aria-label="Campus sections"
      className="sticky top-16 lg:top-[72px] z-40 bg-surface border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`
                font-body text-[0.8125rem] font-semibold tracking-[0.05em] uppercase
                px-5 py-2 rounded-full whitespace-nowrap shrink-0
                transition-colors duration-200
                ${activeId === id
                  ? 'bg-primary text-white'
                  : 'text-text-muted hover:text-primary'}
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
