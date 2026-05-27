'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { oneTimeFees, dayScholarTables, boardingTables } from '@/data/admission'
import { FeeTable } from './FeeTable'

const ease = [0.33, 1, 0.68, 1] as const

export function FeeStructureSection() {
  const { ref, inView } = useReveal(0.1)
  const [activeTab, setActiveTab] = useState<'day' | 'boarding'>('day')

  return (
    <div id="fee-structure">

      {/* Heading */}
      <div ref={ref} className="relative mb-10">
        <span
          aria-hidden="true"
          className="absolute -top-3 -left-1 font-display font-black uppercase leading-none
            select-none pointer-events-none text-text/[0.04] text-[4rem] sm:text-[5rem]"
        >
          FEE
        </span>

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease }}
            className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3"
          >
            Transparent Pricing
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="font-display text-3xl sm:text-4xl font-bold text-text"
          >
            Fee{' '}
            <span className="font-accent italic text-primary">Structure</span>
          </motion.h2>
        </div>
      </div>

      {/* One-time fees — 4 quick-reference cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {oneTimeFees.map((fee, i) => (
          <motion.div
            key={fee.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease }}
            className="bg-surface rounded-xl p-4 border border-border"
          >
            <p className="font-display text-xl font-bold text-primary">{fee.value}</p>
            <p className="font-body text-xs text-text-muted mt-1 leading-snug">{fee.label}</p>
            {fee.note && (
              <p className="font-body text-[10px] text-text/40 mt-1 uppercase tracking-wide">
                {fee.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Tab bar */}
      <div className="flex bg-surface-alt rounded-xl p-1 border border-border mb-8 max-w-sm">
        {(['day', 'boarding'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold font-body
              transition-all duration-200
              ${activeTab === tab
                ? 'bg-primary text-white shadow-sm'
                : 'text-text-muted hover:text-text'
              }`}
          >
            {tab === 'day' ? 'Day Scholar' : 'Boarding / Hostel'}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {activeTab === 'day'
            ? dayScholarTables.map(t => <FeeTable key={t.id} table={t} />)
            : boardingTables.map(t => <FeeTable key={t.id} table={t} />)
          }
        </motion.div>
      </AnimatePresence>

    </div>
  )
}
