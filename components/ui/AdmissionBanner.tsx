'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'

const DISMISS_KEY = 'ais_admission_banner_dismissed'

export function AdmissionBanner() {
  const [visible,   setVisible]   = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return

    const show = setTimeout(() => setVisible(true), 2000)
    const hide = setTimeout(() => setVisible(false), 7000)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [])

  function dismiss() {
    setVisible(false)
    setDismissed(true)
    sessionStorage.setItem(DISMISS_KEY, '1')
  }

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          role="banner"
          aria-label="Admission banner"
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary text-white px-4 py-3
            flex items-center justify-between shadow-xl"
        >
          <div className="flex-1 min-w-0">
            <p className="font-body text-sm font-semibold truncate">
              Admissions Open — Session 2026–27
            </p>
            <p className="font-body text-xs opacity-80">Seats filling fast</p>
          </div>
          <div className="flex items-center gap-3 ml-3">
            <Link
              href="/admission"
              className="shrink-0 bg-white text-primary text-sm font-bold px-4 py-1.5 rounded-full
                hover:bg-primary-light hover:text-white transition-colors"
            >
              Apply Now
            </Link>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss admission banner"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
