'use client'
import { StatCounter } from './StatCounter'
import { educatorStats } from '@/data/educators'

export function StatsStrip() {
  return (
    <section className="relative bg-black py-16 lg:py-20 overflow-hidden">
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-accent italic font-black uppercase leading-none select-none pointer-events-none whitespace-nowrap text-white/[0.04] text-[6rem] sm:text-[9rem] lg:text-[13rem]"
      >
        EXCELLENCE
      </span>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15">
          {educatorStats.map((stat, i) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
