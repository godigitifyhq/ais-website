'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, X, Menu } from 'lucide-react'
import { latestPosts } from '@/data/home'

const navLinks = [
  { label: 'Home',             href: '/' },
  { label: 'About Us',         href: '/about' },
  { label: 'Life at Alliance', href: '/life-at-alliance' },
  { label: 'Admission',        href: '/admission' },
  { label: 'Resources',        href: '/resources' },
  { label: 'Contact',          href: '/contact' },
]

const megaMenuSections = {
  'MORE ABOUT AIS': [
    { label: 'Foundation & History',   href: '/about' },
    { label: 'Our Management',         href: '/about#management' },
    { label: 'Our Educators',          href: '/educators' },
    { label: 'Infrastructure',         href: '/infrastructure' },
  ],
  'ACADEMICS': [
    { label: 'CBSE Corner',         href: '/cbse-corner' },
    { label: 'CBSE Resources',         href: '/resources' },
    { label: 'Robotics & Initiatives', href: '/initiatives' },
    { label: 'School App (myAIS)',      href: 'https://edusecure.org/aisbanur/login/login.aspx' },
  ],
  'LIFE AT AIS': [
    { label: 'Student Life',           href: '/life-at-alliance' },
    { label: 'Sports & Facilities',    href: '/infrastructure' },
    { label: 'Gallery',                href: '/gallery' },
    { label: 'Blogs',                  href: '/blogs' },
  ],
  'CONNECT': [
    { label: 'Admission Enquiry',      href: '/admission' },
    { label: 'Contact Us',             href: '/contact' },
    { label: 'Jobs at AIS',            href: '/jobs' },
  ],
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      {/* Top Bar (desktop only) */}
      <div className="hidden lg:flex bg-primary text-white text-xs items-center justify-between px-8 py-1.5">
        <div className="flex items-center gap-4">
          <a href="tel:+919464311111" className="flex items-center gap-1.5 hover:text-primary-light transition-colors">
            <Phone size={12} /> +91-94643-11111
          </a>
          <a href="mailto:info@ais.ac.in" className="flex items-center gap-1.5 hover:text-primary-light transition-colors">
            <Mail size={12} /> info@ais.ac.in
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/gallery" className="hover:text-primary-light transition-colors">Photo Gallery</a>
          <span className="opacity-30">|</span>
          <a href="https://ais-dashboard-eta.vercel.app/form" target="_blank" rel="noreferrer" className="hover:text-primary-light transition-colors">Jobs</a>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={[
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-bg/92 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-bg border-b border-transparent',
        ].join(' ')}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between"
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/ais_logo.png"
              alt="Alliance International School"
              width={120}
              height={56}
              priority
              className="h-12 lg:h-14 w-auto"
              onError={(e) => {
                const el = e.target as HTMLImageElement
                el.style.display = 'none'
              }}
            />
            <span className="sr-only">Alliance International School</span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={[
                      'relative font-body text-sm font-medium tracking-wide',
                      'text-text hover:text-primary transition-colors duration-200',
                      'after:absolute after:bottom-[-3px] after:left-0 after:h-[2px]',
                      'after:bg-primary-light after:transition-all after:duration-300',
                      active ? 'text-primary after:w-full' : 'after:w-0 hover:after:w-full',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <Link
              href="/admission"
              className="hidden lg:inline-flex items-center px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-200 tracking-wide"
            >
              Apply Now
            </Link>

            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mega-menu"
              className="flex items-center gap-2 font-body text-sm font-semibold tracking-widest text-text hover:text-primary transition-colors"
            >
              {menuOpen
                ? <><X size={20} /><span className="hidden lg:inline">CLOSE</span></>
                : <><Menu size={20} /><span className="hidden lg:inline">MENU</span></>
              }
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mega Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mega-menu"
            key="megamenu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{   opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-bg overflow-y-auto"
            role="dialog"
            aria-label="Site navigation menu"
          >
            {/* Offset for sticky header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">

              {/* Main menu grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:mt-6 md:mt-6 mt-5 lg:grid-cols-4 gap-10 lg:gap-16">
                {Object.entries(megaMenuSections).map(([section, links], sIdx) => (
                  <motion.div
                    key={section}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + sIdx * 0.07, duration: 0.4 }}
                  >
                    <p className="font-body text-xs font-bold tracking-[0.15em] text-text-muted uppercase mb-4">
                      {section}
                    </p>
                    <ul className="space-y-3" role="list">
                      {links.map(({ label, href }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="font-body text-base font-medium text-primary hover:text-primary-dark hover:underline underline-offset-2 transition-colors"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* ── Latest from AIS strip ── */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
              >
                <div className="h-px bg-border mb-8" />
                <p className="font-body text-[10px] font-bold tracking-[0.18em] uppercase text-text-muted mb-6">
                  LATEST FROM AIS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {latestPosts.map(post => (
                    <Link
                      key={post.href}
                      href={post.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex gap-3 items-start"
                    >
                      <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="font-body text-[10px] font-bold tracking-wider uppercase text-primary-light">
                          {post.category}
                        </span>
                        <p className="font-body text-sm font-medium text-text group-hover:text-primary transition-colors leading-snug line-clamp-2 mt-0.5">
                          {post.title}
                        </p>
                        <span className="font-body text-xs text-text-muted">{post.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Left side large nav labels (SFHS style) */}
              <motion.div
                className="mt-10 hidden lg:flex flex-col gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 }}
              >
                <div className="h-px bg-border mb-6" />
                <div className="flex gap-8 flex-wrap">
                  {navLinks.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="font-display text-2xl font-bold text-text hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Mobile Apply Now */}
              <motion.div
                className="mt-12 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/admission"
                  className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-semibold rounded-full text-base"
                >
                  Apply Now — Session 2026–27
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
