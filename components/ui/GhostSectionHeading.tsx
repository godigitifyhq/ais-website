interface Props {
  eyebrow:    string
  ghostLabel: string
  heading:    string
  align?:     'left' | 'center'
  className?: string
}

export function GhostSectionHeading({ eyebrow, ghostLabel, heading, align = 'left', className }: Props) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`relative mb-12 md:mb-16 ${className ?? ''}`}>
      <span
        aria-hidden="true"
        className={`
          absolute -top-6
          ${align === 'center' ? 'left-1/2 -translate-x-1/2' : '-left-2'}
          font-body font-black uppercase whitespace-nowrap
          text-[3.5rem] sm:text-[5rem] lg:text-[7rem]
          text-text/[0.04] leading-none select-none pointer-events-none
        `}
      >
        {ghostLabel}
      </span>
      <div className={`relative z-10 flex flex-col ${alignClass}`}>
        <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight whitespace-pre-line">
          {heading}
        </h2>
      </div>
    </div>
  )
}
