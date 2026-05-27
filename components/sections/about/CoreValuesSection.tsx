'use client'
import { motion } from 'framer-motion'

const beliefs = [
  {
    id:      'screening',
    title:   'open to every child.',
    body:    'No screening. No profiling. Every family is welcome at Alliance — transparent, fair, and bias-free admissions.',
    filled:  false,
    rotate:  '-rotate-2',
    mt:      '',
  },
  {
    id:      'heroes',
    title:   'every child is celebrated.',
    body:    'We have recognition for every child on campus. No single hero is hailed above others — all are exceptional, all are equal.',
    filled:  true,
    rotate:  'rotate-1',
    mt:      '',
  },
  {
    id:      'clubs',
    title:   'clubbing starts early.',
    body:    'We encourage every child\'s participation in extra-curricular clubs, sports, and after-school activities from Class 1.',
    filled:  false,
    rotate:  'rotate-2',
    mt:      '',
  },
  {
    id:      'exams',
    title:   'learning, not memorising.',
    body:    'Assessment at Alliance is continuous and formative in junior school — focused on growth, not fear of a single exam.',
    filled:  true,
    rotate:  'rotate-1',
    mt:      'mt-8 lg:mt-12',
  },
  {
    id:      'bell',
    title:   'no rigid timetable.',
    body:    'Learning at AIS flows freely. We believe a fragmented school day interrupts deep thinking — curiosity doesn\'t follow a bell.',
    filled:  false,
    rotate:  '-rotate-1',
    mt:      'mt-4 lg:mt-8',
  },
  {
    id:      'parents',
    title:   'parents are partners.',
    body:    'We maintain complete transparency with every family. Parents are always welcome to engage, question, and participate in school life.',
    filled:  true,
    rotate:  '-rotate-2',
    mt:      'mt-8 lg:mt-12',
  },
  {
    id:      'discipline',
    title:   'values, not rules.',
    body:    'Discipline at Alliance is not enforced through policies and punishments — it is learned, lived, and valued through character-building.',
    filled:  false,
    rotate:  'rotate-2',
    mt:      '',
  },
  {
    id:      'annual',
    title:   'every day is special.',
    body:    'We do not save celebration for one annual day. Every student performs, contributes, and shines — throughout the year.',
    filled:  true,
    rotate:  '-rotate-1',
    mt:      '',
  },
  {
    id:      'outsourcing',
    title:   'students run the show.',
    body:    'Students at AIS initiate and organise — from MUNs and assemblies to social campaigns. Leadership is learned by doing, not watching.',
    filled:  false,
    rotate:  'rotate-1',
    mt:      '',
  },
]

const ease = [0.33, 1, 0.68, 1] as const

export function CoreValuesSection() {
  return (
    <section className="bg-bg py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14 lg:mb-20">
          <p className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3">
            What We Believe
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight max-w-lg">
            Alliance is driven by values — not policies.
          </h2>
        </div>

        {/* Card grid — 3 columns, staggered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {beliefs.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 32, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease }}
              className={`${b.mt}`}
            >
              <div
                className={`
                  ${b.rotate}
                  rounded-sm p-6 md:p-8 h-full transition-transform duration-300 hover:rotate-0
                  ${b.filled
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-surface border-2 border-primary/15 hover:border-primary/40'
                  }
                `}
              >
                {/* Title */}
                <h3
                  className={`font-display text-xl md:text-2xl font-bold leading-snug mb-4 ${
                    b.filled ? 'text-white' : 'text-primary'
                  }`}
                >
                  {b.title}
                </h3>

                {/* Thin divider */}
                <div
                  className={`w-8 h-px mb-4 ${
                    b.filled ? 'bg-white/30' : 'bg-primary/30'
                  }`}
                />

                {/* Body */}
                <p
                  className={`font-body text-sm leading-relaxed ${
                    b.filled ? 'text-white/80' : 'text-text-muted'
                  }`}
                >
                  {b.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
