'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useReveal }       from '@/hooks/useReveal'

export function AboutSection() {
  const { ref, inView } = useReveal()

  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-square bg-border flex items-center justify-center">
              <div className="text-center text-text-muted/40">
                <p className="font-body text-sm">About photo</p>
                <p className="font-body text-xs mt-1">Add /public/images/about-campus.jpg</p>
              </div>
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-8 -right-8 bg-primary rounded-2xl px-8 py-6 text-white shadow-xl">
              <p className="font-display text-3xl font-bold">2015</p>
              <p className="font-body text-xs mt-1 opacity-80">Year Founded</p>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          >
            <SectionHeading
              eyebrow="About AIS"
              title="A school built on the belief that every child is extraordinary"
              className="mb-8"
            />

            <div className="space-y-4 font-body text-base text-text-muted leading-relaxed">
              <p>
                Alliance International School was founded with a single conviction — that education must do more than teach subjects. It must develop character, spark curiosity, and nurture the whole child.
              </p>
              <p>
                Situated in Banur, Punjab, AIS offers a rigorous CBSE curriculum alongside a rich programme of sports, arts, robotics, and co-curricular activities. Our educators are trained professionals who bring warmth and expertise to every classroom.
              </p>
              <p>
                Whether your child is taking their first steps in Pre-School or preparing for Board examinations, AIS provides an environment where they can flourish — academically, socially, and personally.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm"
              >
                Our Story <ArrowRight size={16} />
              </Link>
              <Link
                href="/educators"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-text font-semibold rounded-full hover:border-primary hover:text-primary transition-colors text-sm"
              >
                Meet Our Educators
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
