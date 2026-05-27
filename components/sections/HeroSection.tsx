'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-bg">

      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/5" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-light/5 -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left — Text */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block font-body text-xs font-bold tracking-[0.2em] text-primary uppercase mb-5"
          >
            CBSE School · Banur, Punjab
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.33, 1, 0.68, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-[1.05] tracking-tight"
          >
            Where Every Child
            <span className="block text-primary mt-1">Finds Their{' '}
              <span className="font-accent italic font-normal">Brilliance</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-6 font-body text-lg text-text-muted leading-relaxed max-w-lg"
          >
            Alliance International School offers a transformative CBSE education — blending academic rigour with holistic growth in the heart of Punjab.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/admission"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors text-base"
            >
              Apply for 2026–27 <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border text-text font-semibold rounded-full hover:border-primary hover:text-primary transition-colors text-base"
            >
              Discover AIS
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-14 flex items-center gap-10 flex-wrap"
          >
            {[
              { num: '10+', label: 'Years of Excellence' },
              { num: '1200+', label: 'Students Enrolled' },
              { num: '100%', label: 'Board Pass Rate' },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-display text-3xl font-bold text-primary">{num}</p>
                <p className="font-body text-xs text-text-muted mt-0.5 tracking-wide">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Visual card stack */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          className="relative hidden lg:block"
        >
          {/* Main card */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-surface-alt border border-border">
            <div className="absolute inset-0 flex items-center justify-center text-text-muted/30">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-4xl text-primary font-bold">AIS</span>
                </div>
                <p className="font-body text-sm">Campus photo</p>
                <p className="font-body text-xs mt-1 opacity-60">Add /public/images/hero-campus.jpg</p>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg px-6 py-4 border border-border">
            <p className="font-body text-xs text-text-muted">Affiliated with</p>
            <p className="font-display text-base font-bold text-text">CBSE — New Delhi</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
      >
        <span className="font-body text-xs tracking-widest uppercase">Explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
