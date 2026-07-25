'use client'
/**
 * LoopingKeyword
 * ─────────────
 * Cycles through a list of words with a clip-reveal animation.
 *
 * Layout-shift fix:
 *   Uses `display: inline-grid` so the container always occupies the
 *   width of the longest word. A hidden ghost span sits in grid-area 1/1
 *   and establishes that max width. The animated word also sits in 1/1
 *   (same cell, overlapping), so the surrounding text never reflows when
 *   a shorter/longer word enters.
 *
 * Props:
 *   words     — words to cycle through
 *   className — applied to each visible word span
 *   interval  — ms each word is visible (default 2600)
 */

import { useState, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const EASE_IN  = [0.22, 1,    0.36, 1] as const   // fast enter
const EASE_OUT = [0.76, 0,    0.24, 1] as const   // fast exit

interface Props {
  words:      string[]
  className?: string
  interval?:  number
}

export function LoopingKeyword({ words, className = '', interval = 2600 }: Props) {
  const [idx, setIdx]   = useState(0)
  const reduced         = useReducedMotion()

  // Determine the longest word to use as the ghost placeholder
  const longestWord = words.reduce((a, b) => (b.length > a.length ? b : a), '')

  useEffect(() => {
    if (reduced) return
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval, reduced])

  const currentWord = words[idx]

  return (
    /*
     * inline-grid container:
     *  ┌────────────────────────────────┐
     *  │ [ghost: longest word, hidden]  │  ← always holds max width
     *  │ [animated word, visible]       │  ← same cell, overlapping
     *  └────────────────────────────────┘
     * Because both children are in grid-area 1/1, the container is
     * always as wide as longestWord — no reflow when words change.
     */
    <span
      style={{
        display:        'inline-grid',
        verticalAlign:  'bottom',
        overflow:       'hidden',       // clips the exiting / entering word
        lineHeight:     'inherit',
        // Tiny descender protection (same as SplitHeading)
        marginBottom:   '-0.05em',
        paddingBottom:  '0.05em',
      }}
    >
      {/* Ghost — invisible, establishes width of the longest word */}
      <span
        aria-hidden
        style={{
          gridArea:   '1 / 1',
          visibility: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {longestWord}
      </span>

      {/* Animated word — sits in the same cell, on top of ghost */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentWord}
          className={className}
          style={{
            gridArea:  '1 / 1',
            display:   'inline-block',
            whiteSpace: 'nowrap',
          }}
          initial={reduced ? false : { y: '105%', opacity: 0   }}
          animate={                   { y:   '0%', opacity: 1   }}
          exit={   reduced ? {}     : { y: '-110%', opacity: 0  }}
          transition={{ duration: 0.42, ease: EASE_IN }}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
