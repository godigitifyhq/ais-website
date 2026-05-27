'use client'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { sidebarLinks } from '@/data/admission'

export function AdmissionSidebar() {
  return (
    <div className="space-y-0">

      {/* Quick Actions */}
      <p className="font-body text-[10px] font-bold tracking-[0.18em] uppercase text-text-muted mb-3">
        Quick Actions
      </p>

      <div className="space-y-2">
        {sidebarLinks.map(link => {
          const isExternal = link.href.startsWith('http') || link.href.endsWith('.pdf')
          const Comp = isExternal ? 'a' : Link

          if (link.primary) {
            return (
              <Comp
                key={link.label}
                href={link.href}
                {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="flex items-center justify-center w-full bg-primary text-white rounded-xl py-2.5 text-sm font-semibold font-body hover:bg-primary-dark transition-colors duration-150"
              >
                {link.label}
              </Comp>
            )
          }

          return (
            <Comp
              key={link.label}
              href={link.href}
              {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors group font-body"
            >
              <ArrowRight
                size={12}
                className="flex-shrink-0 transition-transform duration-150 group-hover:translate-x-1"
              />
              {link.label}
            </Comp>
          )
        })}
      </div>

      <div className="border-t border-border my-4" />

      {/* Contact */}
      <p className="font-body text-[10px] font-bold tracking-[0.18em] uppercase text-text-muted mb-3">
        Contact Us Directly
      </p>

      <div className="space-y-2.5">
        <a
          href="tel:+919464311111"
          className="flex items-center gap-2 text-xs text-text-muted hover:text-primary transition-colors font-body"
        >
          <Phone size={12} className="flex-shrink-0 text-primary" />
          +91-94643-11111
        </a>
        <a
          href="mailto:info@ais.ac.in"
          className="flex items-center gap-2 text-xs text-text-muted hover:text-primary transition-colors font-body"
        >
          <Mail size={12} className="flex-shrink-0 text-primary" />
          info@ais.ac.in
        </a>
        <div className="flex items-start gap-2 text-xs text-text-muted font-body">
          <MapPin size={12} className="flex-shrink-0 text-primary mt-0.5" />
          Banur, Punjab — 140 103
        </div>
      </div>

      <div className="border-t border-border my-4" />

      {/* Session badge */}
      <p className="font-body text-[10px] font-bold tracking-[0.18em] uppercase text-text-muted mb-3">
        Session 2026–27
      </p>

      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-success animate-pulse flex-shrink-0" />
        <span className="font-body text-xs font-semibold text-text">Admissions Open</span>
      </div>
      <p className="font-body text-xs text-text-muted mt-1">
        Enquire for seat availability
      </p>
    </div>
  )
}

/* ── Mobile horizontal strip ──────────────────────────────────────── */
export function MobileSidebarStrip() {
  return (
    <div className="overflow-x-auto scrollbar-none -mx-4 px-4 pb-1">
      <div className="flex gap-2 w-max">
        {sidebarLinks.map(link => {
          const isExternal = link.href.startsWith('http') || link.href.endsWith('.pdf')
          const Comp = isExternal ? 'a' : Link

          return (
            <Comp
              key={link.label}
              href={link.href}
              {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap font-body transition-all
                ${link.primary
                  ? 'bg-primary text-white'
                  : 'bg-surface border border-border text-text-muted hover:border-primary hover:text-primary'
                }`}
            >
              {link.label}
            </Comp>
          )
        })}
      </div>
    </div>
  )
}
