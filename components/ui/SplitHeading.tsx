'use client'
/**
 * SplitHeading — word-split clip reveal animation
 *
 * Each word slides up from behind an overflow:hidden mask (editorial
 * "letter-press reveal"). After the initial mount animation the text
 * is completely static — no looping.
 */

import { type ElementType } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

interface Props {
  text:       string | string[]
  tag?:       'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  delay?:     number
  stagger?:   number
  duration?:  number
}

function WordReveal({
  word,
  delay,
  duration,
  reduced,
}: {
  word:     string
  delay:    number
  duration: number
  reduced:  boolean
}) {
  return (
    // Clip window — keeps the sliding word inside the line
    <span
      style={{
        display:       'inline-block',
        overflow:      'hidden',
        verticalAlign: 'bottom',
        lineHeight:    'inherit',
        // A tiny positive margin-bottom prevents descenders from being clipped
        marginBottom:  '-0.05em',
        paddingBottom: '0.05em',
      }}
    >
      <motion.span
        style={{ display: 'inline-block' }}
        initial={reduced ? false : { y: '108%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={reduced ? { duration: 0 } : { duration, delay, ease: EASE }}
      >
        {word}
      </motion.span>
    </span>
  )
}

export function SplitHeading({
  text,
  tag = 'h1',
  className = '',
  delay = 0,
  stagger = 0.055,
  duration = 0.55,
}: Props) {
  const reduced = useReducedMotion() ?? false
  const lines   = Array.isArray(text) ? text : [text]

  let wordIndex = 0

  const Tag = tag as ElementType

  return (
    <Tag className={className}>
      {lines.map((line, li) => {
        const words = line.split(' ').filter(Boolean)
        return (
          <span key={li} className={li < lines.length - 1 ? 'block' : undefined}>
            {words.map((word, wi) => {
              const d = delay + wordIndex * stagger
              wordIndex++
              return (
                // The space between words is a plain text node OUTSIDE the clip
                // wrapper — this gives the correct font-native word spacing.
                <span key={wi} style={{ whiteSpace: 'pre' }}>
                  <WordReveal word={word} delay={d} duration={duration} reduced={reduced} />
                  {wi < words.length - 1 ? ' ' : ''}
                </span>
              )
            })}
          </span>
        )
      })}
    </Tag>
  )
}
