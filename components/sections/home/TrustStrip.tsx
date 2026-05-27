import { trustItems } from '@/data/home'

export function TrustStrip() {
  const doubled = [...trustItems, ...trustItems]

  return (
    <div className="bg-primary py-3 overflow-hidden" aria-hidden="true">
      <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 font-body text-xs font-semibold tracking-[0.15em] uppercase text-white/90"
          >
            <span className="text-primary-light" aria-hidden="true">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
