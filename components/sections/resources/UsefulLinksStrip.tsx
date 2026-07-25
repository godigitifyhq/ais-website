'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookMarked, GraduationCap, Smartphone, Trophy, ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { usefulLinks } from '@/data/resources'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

const iconMap: Record<string, LucideIcon> = {
  BookMarked, GraduationCap, Smartphone, Trophy,
}

export function UsefulLinksStrip() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-primary py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {usefulLinks.map((link, i) => {
            const Icon = iconMap[link.icon] ?? BookMarked
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group hover:text-primary-light transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-sm font-semibold text-white leading-tight group-hover:text-primary-light transition-colors line-clamp-1">
                      {link.label}
                    </p>
                    <ArrowUpRight size={12} className="text-white/40 group-hover:text-primary-light transition-colors mt-0.5" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
