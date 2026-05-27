'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useReveal }       from '@/hooks/useReveal'

const facilities = [
  { title: 'Modern Classrooms',     desc: 'Smart boards, ergonomic seating, and natural light in every room.' },
  { title: 'Science Laboratories',  desc: 'Fully equipped Physics, Chemistry, and Biology labs.' },
  { title: 'Computer Centre',       desc: 'High-speed internet and 1:1 computer access for students.' },
  { title: 'Sports Complex',        desc: 'Cricket ground, basketball, volleyball, badminton, and more.' },
  { title: 'Library & Resource Hub', desc: 'Over 5,000 titles, digital resources, and reading corners.' },
  { title: 'Hostel Facilities',     desc: 'Safe, comfortable accommodation for outstation students.' },
  { title: 'Transport Network',     desc: 'GPS-tracked fleet covering 25+ routes across the region.' },
  { title: 'Robotics Lab',          desc: 'Industry-grade robotics equipment and expert mentors.' },
]

export function FacilitiesSection() {
  const { ref, inView } = useReveal()

  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Our Campus"
            title="World-class facilities for curious minds"
            className="max-w-lg"
          />
          <Link
            href="/infrastructure"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all shrink-0"
          >
            View all facilities <ArrowRight size={16} />
          </Link>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {facilities.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i, duration: 0.45 }}
              className="p-6 rounded-2xl bg-surface border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-2 h-8 bg-primary-light rounded-full mb-4" />
              <h3 className="font-body text-sm font-bold text-text mb-1.5">{title}</h3>
              <p className="font-body text-xs text-text-muted leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
