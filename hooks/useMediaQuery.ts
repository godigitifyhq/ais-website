'use client'
import { useCallback, useSyncExternalStore } from 'react'

/**
 * Subscribes to a CSS media query.
 *
 * Uses useSyncExternalStore rather than useState + useEffect so there is no
 * cascading render on mount and the server snapshot is explicit.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query],
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false, // the server can't measure a viewport — assume desktop, no motion preference
  )
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

/** Below Tailwind's `lg` breakpoint. */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 1023px)')
}
