'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const affiliations = [
  {
    id:    'cbse',
    name:  'Central Board of Secondary Education',
    sub:   'Affiliation No. 1630522',
    src:   '/images/cbse.png',
    color: '#1B3FAB',
    bg:    '#EFF3FF',
  },
  {
    id:    'ncert',
    name:  'National Council of Educational Research & Training',
    sub:   'Curriculum Partner',
    src:   '/images/ncert.png',
    color: '#7A1B2A',
    bg:    '#FFF0F1',
  },
  {
    id:    'bc',
    name:  'British Council',
    sub:   'International Associate',
    src:   '/images/british-council.png',
    color: '#002F6C',
    bg:    '#EEF4FF',
  },
  {
    id:    'ki',
    name:  'Khelo India',
    sub:   'Sports Excellence Partner',
    src:   '/images/khelo-india.png',
    color: '#1A6B2A',
    bg:    '#EDFBF1',
  },
]

const ease = [0.33, 1, 0.68, 1] as const

function AffiliationCard({ a, i }: { a: typeof affiliations[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.08, ease }}
      className="group relative flex flex-col items-center text-center rounded-2xl border border-border bg-surface px-6 py-8 overflow-hidden cursor-default select-none transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Colour-tinted bg on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
        style={{ backgroundColor: a.bg }}
      />

      {/* Logo — greyscale by default, full colour on hover */}
      <div className="relative z-10 h-16 w-36 mb-5 transition-all duration-400 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100">
        <Image
          src={a.src}
          alt={a.name}
          fill
          className="object-contain"
          sizes="144px"
        />
      </div>

      {/* Name */}
      <p className="relative z-10 font-body text-sm font-semibold leading-snug text-text-muted group-hover:text-text transition-colors duration-300 mb-1 max-w-[20ch]">
        {a.name}
      </p>

      {/* Sub-line */}
      <p className="relative z-10 font-body text-[10px] tracking-wide text-border group-hover:text-text-muted transition-colors duration-300 mt-1">
        {a.sub}
      </p>

      {/* Bottom accent */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.75 w-0 group-hover:w-10 rounded-full transition-all duration-500 pointer-events-none"
        style={{ backgroundColor: a.color }}
      />
    </motion.div>
  )
}

export function AffiliationsSection() {
  return (
    <section className="bg-bg py-16 lg:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-text-muted text-center mb-10">
          Affiliations &amp; Recognitions
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
          {affiliations.map((a, i) => (
            <AffiliationCard key={a.id} a={a} i={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
