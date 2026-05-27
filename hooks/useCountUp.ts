'use client'
import { useState, useEffect, useRef } from 'react'

function parseStatValue(value: string): { numeric: number; prefix: string; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/)
  return {
    prefix:  match?.[1] ?? '',
    numeric: match ? parseFloat(match[2]) : 0,
    suffix:  match?.[3] ?? '',
  }
}

export function useCountUp(target: string, inView: boolean, duration = 1800): string {
  const { numeric, prefix, suffix } = parseStatValue(target)
  const [count, setCount] = useState(0)
  const started = useRef(false)

  // Ratios and non-numeric values: return as-is
  if (target.includes(':')) return target

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start   = performance.now()
    const isFloat = numeric % 1 !== 0

    function tick(now: number) {
      const elapsed  = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      const current  = eased * numeric
      setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.round(current))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, numeric, duration])

  return `${prefix}${count}${suffix}`
}
