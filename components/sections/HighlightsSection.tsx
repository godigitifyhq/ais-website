'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Users, Trophy, Cpu, Heart, Globe } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useReveal }       from '@/hooks/useReveal'

const highlights = [
  {
    icon: BookOpen,
    title: 'CBSE Curriculum',
    desc: 'A strong academic foundation aligned with national standards, from Pre-School to Class 12.',
    href: '/about#academics',
  },
  {
    icon: Users,
    title: 'Expert Educators',
    desc: 'Trained, passionate teachers who go beyond textbooks to inspire every learner.',
    href: '/educators',
  },
  {
    icon: Trophy,
    title: 'Sports & Arts',
    desc: 'Olympic-size playgrounds, indoor sports, music, and fine arts — for well-rounded growth.',
    href: '/infrastructure',
  },
  {
    icon: Cpu,
    title: 'Robotics Lab',
    desc: 'A state-of-the-art robotics programme that prepares students for the future of STEM.',
    href: '/initiatives',
  },
  {
    icon: Heart,
    title: 'Student Wellbeing',
    desc: "Counsellors, mentors, and a caring community that supports every child's emotional health.",
    href: '/life-at-alliance',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    desc: "Exchange programmes, MUNs, and competitions that broaden students' horizons.",
    href: '/life-at-alliance',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function HighlightsSection() {
  const { ref, inView } = useReveal()

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What Sets Us Apart"
          title="Education that goes beyond the classroom"
          subtitle="At AIS, we believe learning happens everywhere — in labs, on fields, in studios, and through conversations that matter."
          align="center"
          className="mb-16 mx-auto max-w-2xl"
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map(({ icon: Icon, title, desc, href }) => (
            <motion.div key={title} variants={item}>
              <Link href={href} className="group block h-full">
                <div className="h-full p-8 rounded-2xl bg-surface border border-border hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-white flex items-center justify-center text-primary transition-all duration-300 mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-text mb-2">{title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
