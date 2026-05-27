interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = {
    left:   'text-left items-start',
    center: 'text-center items-center',
    right:  'text-right items-end',
  }[align]

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="font-body text-xs font-bold tracking-[0.2em] text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-text leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-12 bg-primary-light rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="font-body text-base text-text-muted leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
