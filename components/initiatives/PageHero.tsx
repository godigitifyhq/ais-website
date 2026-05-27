import Image from 'next/image'
import { initiativeNavItems } from '@/data/ourInitiatives'

export function PageHero() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(300px, 68vh, 560px)' }}
    >
      {/* Background image */}
      <Image
        src="/images/initiatives/hero-initiatives.png"
        alt="AIS students working on a robotics project"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: 'center 35%' }}
      />

      {/* Blue-dominant gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(40,89,184,0.75) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)',
        }}
      />

      {/* Ghost heading — top-right, z-index 1 */}
      <span
        aria-hidden="true"
        className="absolute top-0 right-0 font-accent italic font-black leading-none
          select-none pointer-events-none"
        style={{
          fontSize: 'clamp(5rem, 15vw, 13rem)',
          color:    'rgba(255,255,255,0.055)',
          zIndex:   1,
        }}
      >
        INITIATIVES
      </span>

      {/* Content — bottom-left, z-index 2 */}
      <div
        className="absolute inset-0 flex flex-col justify-end"
        style={{ zIndex: 2 }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14">
          <p
            className="font-body font-bold uppercase mb-3"
            style={{ color: 'white', fontSize: '0.7rem', letterSpacing: '0.2em', opacity: 0.75 }}
          >
            Alliance International School
          </p>

          <h1 className="leading-tight mb-3">
            <span
              className="font-display font-bold text-white block"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Our
            </span>
            <span
              className="font-accent italic font-bold block"
              style={{
                fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)',
                color:    'var(--color-primary-light)',
              }}
            >
              Initiatives
            </span>
          </h1>

          <p
            className="font-accent italic"
            style={{ fontSize: '1.25rem', color: 'white', opacity: 0.85 }}
          >
            Going beyond the classroom.
          </p>

          {/* Anchor pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {initiativeNavItems.map(({ id, label, anchorId }) => (
              <a
                key={id}
                href={`#${anchorId}`}
                className="font-body text-xs font-bold uppercase tracking-widest text-white
                  rounded-full border transition-colors duration-200
                  bg-[rgba(255,255,255,0.15)] border-[rgba(255,255,255,0.35)]
                  hover:bg-[var(--color-primary-dark)] hover:border-transparent"
                style={{ padding: '0.5rem 1.25rem' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
