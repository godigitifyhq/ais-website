'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { missionContent, visionContent } from '@/data/about'

const ease = [0.33, 1, 0.68, 1] as const

const rows: {
  num:    string
  label:  string
  sub:    string
  body:   string
  textBg: string
  image:  string
  flip:   boolean
}[] = [
  {
    num:    '01',
    label:  missionContent.label,
    sub:    'What we set out to do',
    body:   missionContent.body,
    textBg: 'bg-primary',
    image:  '/images/about/mission.png',
    flip:   false,
  },
  {
    num:    '02',
    label:  visionContent.label,
    sub:    'Where we are headed',
    body:   visionContent.body,
    textBg: 'bg-text',
    image:  '/images/about/vision.jpg',
    flip:   true,
  },
]

function Row({ row }: { row: typeof rows[0] }) {
  const { num, label, sub, body, textBg, flip } = row

  // Image is always first in the DOM so mobile always shows image before text.
  // For non-flip rows the image is right on desktop — use CSS order to swap.
  const imgOrderClass  = flip ? '' : 'md:order-2'
  const textOrderClass = flip ? '' : 'md:order-1'

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <motion.div
        key="image"
        initial={{ opacity: 0, x: flip ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease }}
        className={`relative min-h-70 lg:min-h-105 overflow-hidden ${imgOrderClass}`}
      >
        <Image
          src={row.image}
          alt={label}
          fill
          className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      <motion.div
        key="text"
        initial={{ opacity: 0, x: flip ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, delay: 0.05, ease }}
        className={`relative flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16 xl:px-20 overflow-hidden min-h-90 lg:min-h-105 ${textBg} ${textOrderClass}`}
      >
        {/* Ghost number watermark */}
        <span
          aria-hidden="true"
          className="absolute -bottom-6 right-4 font-display font-black text-white/6 leading-none select-none pointer-events-none text-[8rem] sm:text-[11rem] lg:text-[14rem]"
        >
          {num}
        </span>

        <div className="relative z-10 max-w-md">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/25 font-body text-xs font-bold text-white/70 mb-5">
            {num}
          </span>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-1">
            {label}
          </h3>
          <p className="font-accent italic text-base text-white/55 mb-6">{sub}</p>
          <div className="w-10 h-px bg-white/25 mb-6" />
          <p className="font-body text-sm leading-relaxed text-white/75">{body}</p>
        </div>
      </motion.div>
    </div>
  )
}

export function MissionVisionSection() {
  return (
    <section className="overflow-hidden">
      {rows.map((row) => (
        <Row key={row.num} row={row} />
      ))}
    </section>
  )
}
