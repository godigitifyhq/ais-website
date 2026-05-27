'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, Sun, Home as HomeIcon, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { scholarTypes } from '@/data/admission'
import { useReveal } from '@/hooks/useReveal'

const iconMap: Record<string, React.ElementType> = {
  Sun,
  Home: HomeIcon,
}

const ease = [0.33, 1, 0.68, 1] as const

export function ScholarTypeSection() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-bg py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className="mb-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease }}
            className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3"
          >
            Your Choice
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="font-display text-3xl sm:text-4xl font-bold text-text"
          >
            Choose Your{' '}
            <span className="font-accent italic text-primary">Path</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Day Scholar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease }}
            className="bg-surface border-2 border-primary rounded-2xl p-7 md:p-8 flex flex-col"
          >
            {(() => {
              const st = scholarTypes[0]
              const Icon = iconMap[st.icon] ?? Sun
              return (
                <>
                  <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-text mb-1">{st.title}</h3>
                  <p className="font-accent italic text-sm text-primary mb-5">{st.tagline}</p>

                  <div className="w-full h-px bg-border mb-5" />

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {st.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-text-muted">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="w-full h-px bg-border mb-5" />

                  <p className="font-display text-2xl font-bold text-primary mb-4">{st.highlight}</p>

                  <Link
                    href="#fee-structure"
                    className="inline-flex items-center gap-2 border border-primary text-primary rounded-full
                      px-5 py-2.5 text-sm font-semibold font-body self-start
                      hover:bg-primary hover:text-white transition-all duration-200 group"
                  >
                    {st.ctaLabel}
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </>
              )
            })()}
          </motion.div>

          {/* Boarding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
            className="bg-primary rounded-2xl p-7 md:p-8 flex flex-col"
          >
            {(() => {
              const st = scholarTypes[1]
              const Icon = iconMap[st.icon] ?? HomeIcon
              return (
                <>
                  <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-white" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-1">{st.title}</h3>
                  <p className="font-accent italic text-sm text-white/70 mb-5">{st.tagline}</p>

                  <div className="w-full h-px bg-white/20 mb-5" />

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {st.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-white/60 shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-white/85">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="w-full h-px bg-white/20 mb-5" />

                  <p className="font-display text-2xl font-bold text-white mb-4">{st.highlight}</p>

                  <Link
                    href="#fee-structure"
                    className="inline-flex items-center gap-2 border-2 border-white text-white rounded-full
                      px-5 py-2.5 text-sm font-semibold font-body self-start
                      hover:bg-white hover:text-primary transition-all duration-200 group"
                  >
                    {st.ctaLabel}
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </>
              )
            })()}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
