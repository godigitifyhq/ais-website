'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  value:     number
  suffix:    string
  label:     string
  duration?: number
  delay?:    number
}

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

export function StatCounter({ value, suffix, label, duration = 1800, delay = 0 }: Props) {
  const ref     = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.unobserve(el)

        const isRatio = suffix === ':1'

        setTimeout(() => {
          const start = performance.now()
          function tick(now: number) {
            const elapsed  = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased    = easeOutQuart(progress)
            setCount(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }, delay)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration, delay, suffix])

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="font-display text-5xl sm:text-6xl lg:text-[4rem] font-bold text-white leading-none">
        {count}{suffix}
      </span>
      <span className="font-body text-xs sm:text-sm font-medium tracking-[0.06em] uppercase text-white/70 mt-3 leading-tight max-w-[120px]">
        {label}
      </span>
    </div>
  )
}
