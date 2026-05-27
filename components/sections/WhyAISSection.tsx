'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useReveal }       from '@/hooks/useReveal'

const reasons = [
  'CBSE affiliated curriculum with consistent Board results',
  'Low student-to-teacher ratio for personalised attention',
  'Robotics, STEM, and 21st-century skill programmes',
  'Safe, green 5-acre campus in Banur, Punjab',
  'Comprehensive transport covering the tricity region',
  'Dedicated hostel for outstation students',
  'Regular parent-teacher communication & progress tracking',
  'Activity-based learning from Pre-School onwards',
]

export function WhyAISSection() {
  const { ref, inView } = useReveal<HTMLUListElement>()

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <SectionHeading
              eyebrow="Why Choose AIS"
              title="The right school makes all the difference"
              subtitle="Thousands of families across Punjab trust AIS because we deliver on our promise — every day, for every child."
              className="mb-10"
            />

            <motion.ul
              ref={ref}
              className="space-y-3"
            >
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-3 font-body text-sm text-text"
                >
                  <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  {reason}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right — testimonial card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {[
              {
                quote: "AIS has transformed my daughter completely. She went from being shy to leading her class in debates and representing the school at a national robotics competition.",
                name:  "Priya Sharma",
                role:  "Parent, Class 9 student",
              },
              {
                quote: "The teachers here genuinely care. My son struggled with Math in his previous school. Within one term at AIS, he was among the top performers. The difference is the attention they give.",
                name:  "Rajesh Kapoor",
                role:  "Parent, Class 6 student",
              },
            ].map(({ quote, name, role }) => (
              <div key={name} className="p-8 rounded-3xl bg-surface border border-border shadow-sm">
                <div className="text-3xl text-primary/20 font-serif mb-3 leading-none">&ldquo;</div>
                <p className="font-body text-sm text-text-muted leading-relaxed italic">{quote}</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="font-body text-sm font-bold text-text">{name}</p>
                  <p className="font-body text-xs text-text-muted mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
