import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Share2, Rss, Globe } from 'lucide-react'

const quickLinks = [
  { label: 'Home',              href: '/' },
  { label: 'About Us',          href: '/about' },
  { label: 'Our Educators',     href: '/educators' },
  { label: 'Infrastructure',    href: '/infrastructure' },
  { label: 'Life at Alliance',  href: '/life-at-alliance' },
  { label: 'Gallery',           href: '/gallery' },
]

const academicLinks = [
  { label: 'CBSE Curriculum',          href: '/about#academics' },
  { label: 'Admission Process',        href: '/admission' },
  { label: 'Robotics & Initiatives',   href: '/initiatives' },
  { label: 'Blogs',                    href: '/blogs' },
  { label: 'School App (myAIS)',        href: 'https://edusecure.org/aisbanur/login/login.aspx' },
]

const connectLinks = [
  { label: 'Contact Us',       href: '/contact' },
  { label: 'Admission Enquiry', href: '/admission' },
  { label: 'Jobs at AIS',      href: '/jobs' },
  { label: 'Privacy Policy',   href: '/privacy' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Top row: Logo + tagline */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-12 border-b border-white/20">
          <div>
            <div className='bg-white rounded-full max-w-max px-5 py-1 mb-2'>

            <Image
              src="/images/ais_logo.png"
              alt="Alliance International School"
              width={140}
              height={64}
              className="h-14 w-auto mb-3"
              />
            </div>
            <p className="font-display text-xl font-semibold">Alliance International School</p>
            <p className="font-accent italic text-primary-light text-sm mt-1">
              Nurturing excellence, inspiring futures
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Share2 size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Globe size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Rss size={18} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="font-body text-sm text-white/80 hover:text-primary-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-4">Academics</p>
            <ul className="space-y-2.5">
              {academicLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="font-body text-sm text-white/80 hover:text-primary-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-4">Connect</p>
            <ul className="space-y-2.5">
              {connectLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="font-body text-sm text-white/80 hover:text-primary-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-4">Find Us</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5 text-primary-light" />
                <span className="font-body text-sm text-white/80">
                  Alliance International School,<br />
                  Banur, Punjab – 140601
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="shrink-0 mt-0.5 text-primary-light" />
                <a href="tel:+919464311111" className="font-body text-sm text-white/80 hover:text-primary-light transition-colors">
                  +91-94643-11111
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="shrink-0 mt-0.5 text-primary-light" />
                <a href="mailto:info@ais.ac.in" className="font-body text-sm text-white/80 hover:text-primary-light transition-colors">
                  info@ais.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Alliance International School, Banur. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
