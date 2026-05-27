'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { TeacherProfile } from '@/data/educators'

interface Props {
  teacher: TeacherProfile
  index:   number
}

export function TeacherCard({ teacher, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(192,39,45,0.12)' }}
      className="bg-surface border border-border rounded-xl overflow-hidden flex-shrink-0 snap-start"
    >
      {/* Photo — 3:4 */}
      <div className="relative w-full" style={{ aspectRatio: '3 / 4' }}>
        <Image
          src={teacher.imageSrc}
          alt={teacher.imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Fallback tint when image is missing */}
        <div className="absolute inset-0 bg-surface-alt -z-10" />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="font-display text-[1.05rem] font-bold text-text leading-snug">
          {teacher.name}
        </h3>
        <p className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.07em] text-primary mt-0.5">
          {teacher.role}
        </p>
        <p className="font-body text-xs text-text-muted mt-0.5">
          {teacher.qualification}
        </p>

        {teacher.quote && (
          <>
            <div className="mt-3 mb-3 h-[2px] w-full bg-primary-light/60 rounded-full" />
            <p className="font-accent italic text-sm text-text-muted leading-snug">
              &ldquo;{teacher.quote}&rdquo;
            </p>
          </>
        )}
      </div>
    </motion.div>
  )
}
