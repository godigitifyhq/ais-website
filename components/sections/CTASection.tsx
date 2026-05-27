'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

export function CTASection() {
  const { ref, inView } = useReveal()

  return (
    <section className="py-24 bg-primary overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <span className="font-body text-xs font-bold tracking-[0.2em] text-white/50 uppercase">
          Admissions Open — 2026–27
        </span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
          Give your child the
          <span className="block font-accent italic font-normal text-primary-light mt-1">
            education they deserve
          </span>
        </h2>

        <p className="font-body text-base text-white/70 mt-6 max-w-xl mx-auto leading-relaxed">
          Seats for Session 2026–27 are filling up. Book a campus visit today and see why thousands of families choose AIS.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/admission"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-primary-dark hover:text-white transition-colors text-base"
          >
            Apply Now <ArrowRight size={18} />
          </Link>
          <a
            href="tel:+919464311111"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white transition-colors text-base"
          >
            <Phone size={18} /> Call Us
          </a>
        </div>

        <p className="mt-6 font-body text-sm text-white/50">
          Or email us at{' '}
          <a href="mailto:info@ais.ac.in" className="text-white/80 hover:text-white underline underline-offset-2">
            info@ais.ac.in
          </a>
        </p>
      </motion.div>
    </section>
  )
}
