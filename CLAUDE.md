@AGENTS.md
# CLAUDE.md — Alliance International School Website Rebuild
> **Directive for Claude Code** — Read this file completely before writing any code.

---

## 0. Project Brief

You are rebuilding the website of **Alliance International School (AIS)**, a CBSE school located in Banur, Punjab, India. The current site is at `https://ais.ac.in`.

**Reference sites for UI/UX inspiration:**
- Strawberry Fields High School → `https://strawberryfieldshighschool.com/`
- Orchid International School → `https://www.orchidsinternationalschool.com/`

**Rules:**
- Preserve the **AIS color palette** (primary red `#C0272D`, accent orange `#E8622A`, neutral off-white `#FAF8F5`, dark charcoal `#1A1A1A`)
- Keep all **existing pages and content domains** from ais.ac.in
- Completely **replace the UI** — new layouts, animations, typography, component design
- **Mobile-first** at every decision point; all four breakpoints matter equally
- Target audience: **Indian parents (25–45) and school-age children** — approachable, trustworthy, energetic
- Design philosophy: **editorial warmth** — not corporate, not toy-like; think a premium Indian school brochure brought to life

---

## 1. Tech Stack

```
Framework        : Next.js 15 (App Router)
Language         : TypeScript (strict mode)
Styling          : Tailwind CSS v4 + CSS custom properties
Animations       : Framer Motion v11
Icons            : Lucide React
Fonts            : Google Fonts (loaded via next/font/google)
SEO              : next-metadata API (generateMetadata per page)
Forms            : react-hook-form + zod
Image Handling   : next/image (all images must use this)
Linting          : ESLint + Prettier
Package Manager  : pnpm
```

---

## 2. Bootstrap Commands

Run these **in order** without skipping:

```bash
pnpm create next-app@latest ais-website \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-git

cd ais-website

pnpm add framer-motion lucide-react react-hook-form zod @hookform/resolvers

pnpm add -D @types/node prettier eslint-config-prettier

# Create required directories
mkdir -p src/components/{ui,layout,sections,forms}
mkdir -p src/lib
mkdir -p src/hooks
mkdir -p src/styles
mkdir -p public/{images,fonts,icons}
```

---

## 3. Design System

### 3.1 Color Palette

Define in `src/styles/globals.css` as CSS custom properties AND map to Tailwind in `tailwind.config.ts`.

```css
:root {
  /* Primary */
  --color-primary:        #C0272D;   /* AIS Red — CTAs, headings, highlights */
  --color-primary-dark:   #9B1B20;   /* Hover states */
  --color-primary-light:  #E8622A;   /* Accent orange — badges, underlines, tags */

  /* Neutrals */
  --color-bg:             #FAF8F5;   /* Page background — warm off-white */
  --color-surface:        #FFFFFF;   /* Cards, modals */
  --color-surface-alt:    #F3EDE6;   /* Alternate section background */
  --color-border:         #E8DDD4;   /* Subtle borders */

  /* Text */
  --color-text:           #1A1A1A;   /* Body text */
  --color-text-muted:     #6B6259;   /* Captions, secondary text */
  --color-text-inverse:   #FFFFFF;   /* Text on dark/red backgrounds */

  /* Utility */
  --color-success:        #2D7D46;
  --color-error:          #C0272D;
}
```

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C0272D',
          dark:    '#9B1B20',
          light:   '#E8622A',
        },
        bg:           '#FAF8F5',
        surface:      '#FFFFFF',
        'surface-alt':'#F3EDE6',
        border:       '#E8DDD4',
        text: {
          DEFAULT: '#1A1A1A',
          muted:   '#6B6259',
          inverse: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        accent:  ['var(--font-accent)', 'serif'],
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
}
export default config
```

### 3.2 Typography

Load in `src/app/layout.tsx` via `next/font/google`.

```ts
import { Playfair_Display, DM_Sans, Cormorant } from 'next/font/google'

const displayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '900'],
  display: 'swap',
})

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const accentFont = Cormorant({
  subsets: ['latin'],
  variable: '--font-accent',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})
```

**Type scale** (use these Tailwind classes consistently):

| Role | Class | Notes |
|------|-------|-------|
| Hero heading | `font-display text-4xl md:text-6xl lg:text-7xl font-bold` | |
| Page title | `font-display text-3xl md:text-5xl font-bold` | |
| Section heading | `font-display text-2xl md:text-4xl font-semibold` | |
| Sub-heading | `font-body text-xl font-semibold` | |
| Body | `font-body text-base leading-relaxed` | |
| Caption | `font-body text-sm text-text-muted` | |
| Accent italic | `font-accent italic text-primary` | Used in decorative taglines |

---

## 4. Site Architecture & Routes

```
src/app/
├── layout.tsx                   ← Root layout (fonts, metadata, Navbar, Footer)
├── page.tsx                     ← / (Home)
├── about/
│   └── page.tsx                 ← /about
├── educators/
│   └── page.tsx                 ← /educators
├── infrastructure/
│   └── page.tsx                 ← /infrastructure
├── life-at-alliance/
│   └── page.tsx                 ← /life-at-alliance
├── admission/
│   └── page.tsx                 ← /admission
├── initiatives/
│   └── page.tsx                 ← /initiatives (Robotics Lab etc.)
├── gallery/
│   └── page.tsx                 ← /gallery
├── blogs/
│   ├── page.tsx                 ← /blogs (listing)
│   └── [slug]/
│       └── page.tsx             ← /blogs/[slug]
├── contact/
│   └── page.tsx                 ← /contact
├── sitemap.ts                   ← Auto-generated sitemap
└── robots.ts                    ← robots.txt
```

---

## 5. SEO — Dynamic Metadata

### 5.1 Site-wide defaults in `src/lib/seo.ts`

```ts
export const siteMeta = {
  name:        'Alliance International School',
  shortName:   'AIS Banur',
  url:         'https://ais.ac.in',
  description: 'Alliance International School — A premier CBSE school in Banur, Punjab. Holistic education that nurtures every child academically, emotionally, and physically.',
  logo:        '/images/logo.png',
  locale:      'en_IN',
  twitter:     '@AISchoolBanur',
  keywords:    ['CBSE school Banur', 'best school Punjab', 'Alliance International School', 'boarding school Chandigarh', 'IB school Punjab'],
}

export function buildMetadata(page: {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
}) {
  return {
    title:       `${page.title} | ${siteMeta.shortName}`,
    description: page.description,
    keywords:    [...siteMeta.keywords, ...(page.keywords ?? [])],
    metadataBase: new URL(siteMeta.url),
    alternates:  { canonical: page.path },
    openGraph: {
      title:       `${page.title} | ${siteMeta.name}`,
      description: page.description,
      url:         `${siteMeta.url}${page.path}`,
      siteName:    siteMeta.name,
      locale:      siteMeta.locale,
      type:        'website',
      images: [{ url: page.image ?? '/images/og-default.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card:        'summary_large_image',
      site:        siteMeta.twitter,
      title:       `${page.title} | ${siteMeta.shortName}`,
      description: page.description,
      images:      [page.image ?? '/images/og-default.jpg'],
    },
  }
}
```

### 5.2 Per-page usage

Every `page.tsx` must export `generateMetadata`:

```ts
// Example: src/app/about/page.tsx
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:       'About Us',
  description: 'Learn about Alliance International School\'s history, mission, and vision for holistic child development since 2015 in Banur, Punjab.',
  path:        '/about',
  keywords:    ['about AIS', 'AIS history', 'school mission Punjab'],
  image:       '/images/og-about.jpg',
})
```

### 5.3 Sitemap (`src/app/sitemap.ts`)

```ts
import { MetadataRoute } from 'next'

const routes = ['/', '/about', '/educators', '/infrastructure', '/life-at-alliance',
                '/admission', '/initiatives', '/gallery', '/blogs', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({
    url:             `https://ais.ac.in${route}`,
    lastModified:    new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority:        route === '/' ? 1 : 0.8,
  }))
}
```

---

## 6. Page Loader / Transition System

Create `src/components/ui/PageLoader.tsx` — shown on initial site load only.

**Behavior:**
- Full-screen overlay `position: fixed, inset: 0, z-index: 9999`
- Background: `var(--color-primary)` (red)
- Center: AIS logo (white version) fades in → brief pause → overlay slides UP off-screen (y: 0 → -100%) using Framer Motion
- Total duration: ≤ 1.6s — do NOT make it slow
- Use `AnimatePresence` from Framer Motion
- Set `isLoaded` state in root layout; once true, render the actual page content underneath

```tsx
// src/components/ui/PageLoader.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-primary flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Image src="/images/ais_logo_white.png" alt="AIS" width={160} height={80} priority />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

### Route Transition (between pages)

Create `src/components/ui/PageTransition.tsx` — wrap each page's content:

```tsx
'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const variants = {
  initial:  { opacity: 0, y: 18 },
  enter:    { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1] } },
  exit:     { opacity: 0, y: -10, transition: { duration: 0.25 } },
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={variants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  )
}
```

---

## 7. Navbar Component

**File:** `src/components/layout/Navbar.tsx`

This is the most critical component. Build it to match the Strawberry Fields High School nav aesthetic — minimal, bold, with a full-screen mega-menu.

### 7.1 Structure

```
Navbar (sticky, top: 0, z-50)
├── [Mobile ≤ lg] TopBar — phone + email + social icons (collapsible strip)
├── Main Nav Bar
│   ├── Left  — Logo (next/image, links to /)
│   ├── Center — Nav links (hidden on mobile)
│   │   ├── Home
│   │   ├── About Us  ← hover triggers mega-menu
│   │   ├── Academics
│   │   ├── Life at Alliance
│   │   ├── Admission
│   │   └── Contact
│   └── Right
│       ├── "Apply Now" button (CTA, primary red, desktop only)
│       └── Hamburger icon (mobile) / "MENU ☰" text-button (desktop, triggers full overlay)
└── MegaMenu (full viewport overlay, triggered by hamburger/MENU)
```

### 7.2 Behavior Rules

| State | Behavior |
|-------|----------|
| On scroll > 60px | Add `backdrop-blur-md bg-bg/90` + thin bottom border + drop shadow — transition 300ms |
| Scroll at top | Transparent or minimal background |
| Mobile hamburger tap | Full-screen overlay menu slides in from right |
| Desktop "MENU" click | Full viewport overlay (like SFHS) — covers whole screen |
| Active page link | Underline in `var(--color-primary-light)` / bold |

### 7.3 Mega-Menu Structure (Full-Screen Overlay)

When the hamburger/MENU is clicked, render a full-screen panel:

```
┌─────────────────────────────────────────────────────┐
│  HOME                                      [X CLOSE] │
├─────────────────────────────────────────────────────┤
│                                                       │
│  OUR          │ ABOUT SFHS        │ LIFE AT AIS       │
│  SCHOOL       │ • Foundation Story│ • Student Life    │
│               │ • Management      │ • Sports & Arts   │
│               │ • Educators       │ • Hostel          │
│               │ • Infrastructure  │ • Clubs           │
│  ACADEMICS    │                   │                   │
│               │ PROCESS           │ CONNECT           │
│  ADMISSION    │ • CBSE Curriculum │ • Contact Us      │
│               │ • Fee Structure   │ • Apply Now       │
│  GALLERY      │ • How to Apply    │ • Jobs at AIS     │
│               │                   │ • School App      │
│               │ HAPPENINGS        │                   │
│               │ • News & Events   │                   │
│               │ • Gallery         │                   │
│               │ • Blogs           │                   │
│                                                       │
│  LATEST NEWS ─────────────────────────────────────── │
│  [thumbnail]  Headline                   [thumbnail]  │
└─────────────────────────────────────────────────────┘
```

### 7.4 Navbar Animation Specs (Framer Motion)

```ts
// Mega-menu overlay
const overlayVariants = {
  closed: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  open:   { opacity: 1, clipPath: 'inset(0 0 0% 0)',
            transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
}

// Nav links stagger inside the overlay
const linkVariants = {
  closed: { opacity: 0, x: -20 },
  open:   (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: 'easeOut' },
  }),
}

// Hamburger → X morphing lines (CSS transition, no library needed)
// Use three <span> divs; toggle classes to rotate lines into X shape
```

### 7.5 Mobile Navbar (xs–md)

- Height: 64px
- Logo left, hamburger right
- No nav links visible (all behind hamburger)
- TopBar (phone/email) is a collapsible strip above (hidden when scrolled)
- Menu overlay: slides in from right (x: 100% → 0) full screen
- Menu items stacked vertically, large touch targets (min 48px height)
- "Apply Now" CTA always visible at bottom of mobile menu

### 7.6 Desktop Navbar (lg+)

- Height: 72px
- Transparent at top, frosted glass on scroll
- Five centered nav links with subtle underline hover animation
- Right side: "Apply Now" (filled button) + "MENU" text button
- Hover on nav links shows a thin underline that slides in from left

### 7.7 Complete Navbar Code Pattern

```tsx
// src/components/layout/Navbar.tsx
'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Home',             href: '/' },
  { label: 'About Us',         href: '/about' },
  { label: 'Life at Alliance', href: '/life-at-alliance' },
  { label: 'Admission',        href: '/admission' },
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
    { label: 'CBSE Curriculum',        href: '/academics' },
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
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ─── Top Bar (desktop only) ─── */}
      <div className="hidden lg:flex bg-primary text-text-inverse text-xs items-center justify-between px-8 py-1.5">
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

      {/* ─── Main Nav ─── */}
      <header
        className={`
          sticky top-0 z-50 w-full transition-all duration-300
          ${scrolled
            ? 'bg-bg/92 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-bg border-b border-transparent'}
        `}
      >
        <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/logo.png" alt="Alliance International School" width={120} height={56} priority className="h-12 lg:h-14 w-auto" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                      relative font-body text-sm font-medium tracking-wide
                      text-text hover:text-primary transition-colors duration-200
                      after:absolute after:bottom-[-3px] after:left-0 after:h-[2px]
                      after:bg-primary-light after:transition-all after:duration-300
                      ${active ? 'text-primary after:w-full' : 'after:w-0 hover:after:w-full'}
                    `}
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
              className="hidden lg:inline-flex items-center px-5 py-2 bg-primary text-text-inverse text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-200 tracking-wide"
            >
              Apply Now
            </Link>

            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
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

      {/* ─── Full-Screen Mega Menu ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="megamenu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{   opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-bg overflow-y-auto"
          >
            {/* Mega content — see section 7.3 grid layout */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
                {Object.entries(megaMenuSections).map(([section, links], sIdx) => (
                  <motion.div
                    key={section}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + sIdx * 0.07, duration: 0.4 }}
                  >
                    <p className="font-body text-xs font-bold tracking-[0.15em] text-text-muted uppercase mb-4">
                      {section}
                    </p>
                    <ul className="space-y-3">
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

              {/* Mobile Apply Now */}
              <div className="mt-12 lg:hidden">
                <Link
                  href="/admission"
                  className="inline-flex items-center px-8 py-3.5 bg-primary text-text-inverse font-semibold rounded-full text-base"
                >
                  Apply Now — Session 2026–27
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```

---

## 8. Contact Page

**File:** `src/app/contact/page.tsx`

### 8.1 Metadata

```ts
export const metadata = buildMetadata({
  title:       'Contact Us',
  description: 'Get in touch with Alliance International School, Banur. Call us at +91-94643-11111 or email info@ais.ac.in. We\'d love to hear from you.',
  path:        '/contact',
  keywords:    ['contact AIS', 'Alliance school phone', 'school admission enquiry Punjab'],
})
```

### 8.2 Page Layout

```
/contact
├── PageHero (component) — "CONTACT US" heading + breadcrumb
├── Section: Contact Split
│   ├── Left — Contact Form  (60% on desktop, 100% on mobile)
│   └── Right — School Info Cards (40%)
│       ├── Card: Main Campus (Banur)
│       │   ├── Phone: +91-94643-11111
│       │   ├── Email: info@ais.ac.in
│       │   └── Address: Banur, Punjab
│       └── Card: Social / Quick Links
└── Section: Map Embed (Google Maps iframe — AIS Banur)
```

### 8.3 Contact Form Spec

Use `react-hook-form` + `zod` validation. Fields:

| Field | Type | Validation |
|-------|------|------------|
| Full Name | text | required, min 2 chars |
| Email | email | required, valid email |
| Phone | tel | required, Indian 10-digit pattern `/^[6-9]\d{9}$/` |
| Child's Class | select | required — options: Pre-School, Nursery, KG, Class 1–12 |
| Message | textarea | optional, max 500 chars |

**Submit action:** POST to `/api/contact` (create this API route in Next.js).

**Success state:** Replace form with a warm confirmation message + confetti burst (use canvas-confetti: `pnpm add canvas-confetti @types/canvas-confetti`). Colors: `#C0272D` and `#E8622A`.

**Error state:** Show inline field errors in red, shake animation on submit button.

### 8.4 API Route (`src/app/api/contact/route.ts`)

```ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  phone:   z.string().regex(/^[6-9]\d{9}$/),
  grade:   z.string().min(1),
  message: z.string().max(500).optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)
    // TODO: integrate email provider (Resend / Nodemailer)
    // For now: log and return success
    console.log('[Contact Form]', data)
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }
}
```

### 8.5 Contact Form Styling Notes

- Form inputs: `border border-border rounded-xl px-4 py-3 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all`
- Submit button: full-width, red, rounded-full, 52px tall, `font-semibold tracking-wide`
- Button loading state: spinner icon + "Sending..." text
- Labels: `font-body text-sm font-medium text-text mb-1.5`

---

## 9. Global Animation Conventions

### 9.1 Scroll-triggered reveal (use on all sections)

Create `src/hooks/useInView.ts` using Framer Motion's `useInView` or Intersection Observer:

```ts
// src/hooks/useInView.ts
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  return { ref, inView }
}
```

Usage pattern — wrap any section:

```tsx
const { ref, inView } = useReveal()
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
>
  {/* section content */}
</motion.div>
```

### 9.2 Staggered children pattern

```tsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Usage:
<motion.ul variants={container} initial="hidden" animate={inView ? 'show' : 'hidden'}>
  {items.map(i => <motion.li key={i} variants={item}>{i}</motion.li>)}
</motion.ul>
```

### 9.3 Hover card lift

```tsx
<motion.div
  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(192,39,45,0.12)' }}
  transition={{ duration: 0.25, ease: 'easeOut' }}
>
```

### 9.4 Button micro-interaction

```tsx
<motion.button whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.02 }}>
```

### 9.5 Easing reference

| Name | Curve | Use |
|------|-------|-----|
| `easeAIS` | `[0.76, 0, 0.24, 1]` | Overlay entries / exits |
| `easeSmooth` | `[0.33, 1, 0.68, 1]` | Section reveals |
| `easeOut` | built-in | Hover states, small elements |

---

## 10. Root Layout

```tsx
// src/app/layout.tsx
import { PageLoader }      from '@/components/ui/PageLoader'
import { Navbar }          from '@/components/layout/Navbar'
import { Footer }          from '@/components/layout/Footer'
import { siteMeta }        from '@/lib/seo'
// font imports here (see section 3.2)
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: siteMeta.name, template: `%s | ${siteMeta.shortName}` },
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable}`}>
      <body className="bg-bg text-text antialiased">
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## 11. Footer Component

**File:** `src/components/layout/Footer.tsx`

```
Footer (bg: --color-primary, text: white)
├── Row 1: Logo (white) + tagline
├── Row 2: Four link columns
│   ├── Quick Links
│   ├── Academics
│   ├── Connect
│   └── Social Media icons
├── Row 3: Address + phone + email (two campuses)
└── Row 4: Copyright strip + Privacy Policy link
```

Colors: White text on `bg-primary`. Accent links in `text-primary-light` (orange).

---

## 12. Shared Components to Build

Build these first — every page will use them:

| Component | Path | Description |
|-----------|------|-------------|
| `PageHero` | `src/components/ui/PageHero.tsx` | Reusable hero for inner pages. Props: `title`, `subtitle`, `breadcrumbs[]`, optional `backgroundImage`. Red text on light BG with large display typography |
| `SectionHeading` | `src/components/ui/SectionHeading.tsx` | Props: `eyebrow` (small red label), `title`, `align`. Includes a short red underline decoration |
| `Card` | `src/components/ui/Card.tsx` | Base card: rounded-2xl, white, shadow-sm, hover lift |
| `Button` | `src/components/ui/Button.tsx` | Variants: `primary` (red filled), `outline` (red border), `ghost`. Sizes: `sm`, `md`, `lg`. All rounded-full |
| `PageTransition` | `src/components/ui/PageTransition.tsx` | Framer wrapper for per-page animation (section 6) |
| `AdmissionBanner` | `src/components/ui/AdmissionBanner.tsx` | Fixed/sticky bottom bar on mobile: "Admit your child — Session 2026-27" + Apply button. Dismiss after 5 seconds |

---

## 13. Performance Rules

- **All images** must use `next/image` with `width`, `height`, `alt`, and `priority` (for above-fold images).
- **No layout shift** — always define aspect ratios for image containers.
- Use `loading="lazy"` (default in next/image) for below-fold images.
- Keep animation `will-change: transform` scoped only to animated elements.
- `motion.div` from Framer Motion is fine; avoid animating `width`/`height` — use `scaleX`/`scaleY` instead.
- Use `React.memo` on heavy components (Gallery grid, Blog listing) if re-renders occur.
- Target: Lighthouse performance ≥ 85 on mobile.

---

## 14. Accessibility

- All interactive elements must have `aria-label` or visible text.
- Hamburger button: `aria-expanded`, `aria-controls="mobile-menu"`.
- `<nav>` with `aria-label="Main navigation"`.
- Form fields: `<label htmlFor>` linked to each `<input id>`.
- Focus ring: visible on all interactive elements — do NOT do `outline: none` without a custom `:focus-visible` replacement.
- Color contrast: all text on red backgrounds must be white (#FFFFFF), not light gray.

---

## 15. Build Order for This Session

Complete in this exact order:

1. `pnpm` bootstrap (section 2)
2. `tailwind.config.ts` + `src/styles/globals.css` (section 3)
3. `src/lib/seo.ts` (section 5.1)
4. `src/app/sitemap.ts` + `src/app/robots.ts` (section 5.3)
5. `src/components/ui/PageLoader.tsx` (section 6)
6. `src/components/ui/PageTransition.tsx` (section 6)
7. `src/components/ui/Button.tsx` (section 12)
8. `src/components/ui/SectionHeading.tsx` (section 12)
9. `src/components/layout/Navbar.tsx` — full implementation (section 7)
10. `src/components/layout/Footer.tsx` (section 11)
11. `src/app/layout.tsx` (section 10)
12. `src/app/contact/page.tsx` + form component + `src/app/api/contact/route.ts` (section 8)
13. `src/app/page.tsx` — home page scaffold (sections from ais.ac.in: Hero, About, Campus Highlights, Facilities grid, Why AIS, Events, CTA)
14. Remaining pages scaffolded with `PageHero` + placeholder content sections

---

## 16. Do Not Do

- ❌ Do NOT use `create-react-app` or Vite — it must be Next.js App Router
- ❌ Do NOT use CSS Modules — use Tailwind classes + `globals.css` for custom properties only
- ❌ Do NOT install GSAP — Framer Motion only for animations
- ❌ Do NOT use `<img>` tags — always `next/image`
- ❌ Do NOT use `pages/` directory — App Router only
- ❌ Do NOT hardcode colors inline — always use the CSS variable or Tailwind color token
- ❌ Do NOT skip TypeScript types — every component must be typed
- ❌ Do NOT leave `console.log` in production-facing files (except the contact route placeholder)
- ❌ Do NOT make animations longer than 700ms — Indian parents on mobile need fast feel
- ❌ Do NOT use purple, blue, or green — AIS palette is red, orange, and warm neutrals only

---

## 17. Quick Reference: AIS Pages → Routes

| Old URL (ais.ac.in) | New Route | Page Title |
|---------------------|-----------|------------|
| `/index.html` | `/` | Home |
| `/about.html` | `/about` | About Alliance |
| `/teachers_training.html` | `/educators` | Our Educators |
| `/sports.html` | `/infrastructure` | Infrastructure |
| `/life-at-alliance.html` | `/life-at-alliance` | Life at Alliance |
| `/admission.html` | `/admission` | Admissions |
| `/robotics-lab.html` | `/initiatives` | Our Initiatives |
| `/gallery.html` | `/gallery` | Gallery |
| `/main-blog.html` | `/blogs` | Blogs |
| *(new)* | `/contact` | Contact Us |

---

## 18. As-Built Documentation

> **Live record of what has actually been built.** Update this section after every session. Supersedes any scaffold or placeholder descriptions in sections 1–17.

---

### 18.1 Confirmed Tech Stack Corrections

The installed versions differ from section 1 in one important way:

| Item | CLAUDE.md says | Actual |
|------|---------------|--------|
| Tailwind | v4 + tailwind.config.ts | **Tailwind v4 CSS-first** — no `tailwind.config.ts`, all config is in `globals.css` via `@theme {}`. No dynamic class interpolation. All class strings must be full literals. |
| Forms | react-hook-form + zod | Used only on `/contact`. All other forms use plain `useState` controlled inputs. **No `<form>` element** anywhere except `ContactForm`. |
| `src/` prefix | Present in bootstrap | **Absent** — project root is `ais_web_app/`, alias `@/*` maps directly to root. |

---

### 18.2 As-Built Folder Structure

```
ais_web_app/
├── app/
│   ├── layout.tsx                        ← Root layout: fonts, Navbar, Footer, PageLoader, AdmissionBanner, GlobalEnquiryWidget
│   ├── page.tsx                          ← / Home
│   ├── about/page.tsx
│   ├── admission/page.tsx
│   ├── blogs/page.tsx + [slug]/page.tsx
│   ├── contact/page.tsx
│   ├── educators/page.tsx
│   ├── gallery/page.tsx
│   ├── infrastructure/page.tsx
│   ├── initiatives/page.tsx              ← Route is /initiatives (not /our-initiatives)
│   ├── life-at-alliance/page.tsx
│   ├── robots.ts + sitemap.ts
│   └── api/
│       ├── contact/route.ts
│       └── admission-enquiry/route.ts
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                    ← Sticky + full-screen mega-menu
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── PageLoader.tsx                ← Initial load red overlay → slides up
│   │   ├── PageTransition.tsx            ← Per-page fade/slide Framer wrapper
│   │   ├── PageHero.tsx                  ← Generic inner-page hero (title, subtitle, breadcrumbs)
│   │   ├── SectionHeading.tsx            ← Eyebrow + title + red underline
│   │   ├── GhostSectionHeading.tsx
│   │   ├── Button.tsx                    ← primary / outline / ghost, rounded-full
│   │   ├── Card.tsx
│   │   ├── AccordionItem.tsx
│   │   ├── AdmissionBanner.tsx           ← Fixed bottom mobile CTA
│   │   ├── GlobalEnquiryWidget.tsx       ← Fixed right-edge tab → slide-in panel (every page)
│   │   ├── SkewedImage.tsx
│   │   └── VideoModal.tsx
│   ├── forms/
│   │   └── ContactForm.tsx               ← react-hook-form + zod, POST /api/contact
│   ├── sections/
│   │   ├── home/                         ← 11 components
│   │   ├── about/                        ← 6 components (LeaderPanel, MissionVisionSection, …)
│   │   ├── educators/
│   │   │   └── SkewedContentCard.tsx     ← ★ SHARED across educators, life, initiatives
│   │   ├── infrastructure/               ← 13 components
│   │   └── admission/                    ← 9 components
│   ├── life/                             ← 8 components (BreatherImage, PhilosophyIntro, …)
│   └── initiatives/                      ← 7 components (VideoEmbed, InitiativeNav, …)
│
├── data/
│   ├── home.ts
│   ├── about.ts
│   ├── educators.ts                      ← Defines SkewedSection interface (shared base type)
│   ├── infrastructure.ts
│   ├── lifeAtAlliance.ts                 ← LifeSection extends SkewedSection
│   ├── ourInitiatives.ts                 ← InitiativeSection extends SkewedSection
│   └── admission.ts
│
├── hooks/
│   ├── useReveal.ts                      ← useInView wrapper, once: true
│   ├── useInView.ts
│   └── useCountUp.ts                     ← Animated number counter for stats
│
└── lib/
    └── seo.ts                            ← siteMeta + buildMetadata()
```

---

### 18.3 Page Section Inventory

#### `/` — Home
`HeroSection` → `TrustStrip` → `AboutSection` → `WhyAISSection` → `FacilitiesSection` → `HolisticJourneySection` → `LifeAtAllianceSection` → `EventsSection` → `AchievementsSection` → `AdmissionCTASection` → `AffiliationsSection`

#### `/about` — About Alliance
`AboutPageOpener` → `CoreValuesSection` → `MissionVisionSection` → `PhilosophyPullQuote` → `LeadershipSection` → `AllianceDifferenceSection` → `AdmissionCTASection`

> **Mobile fix applied:** `MissionVisionSection` and `LeaderPanel` — image is always first in DOM; CSS `order` handles desktop swap.

#### `/educators` — Our Educators
`EducatorsPageHero` → `IntroStatement` → `SkewedContentCard ×4` (Learners / Support / Qualified / Beyond) → `StatsStrip` → `TeacherQuoteSection` → `ManagementCarousel` → `JoinTeamCTA`

#### `/infrastructure` — Infrastructure
`InfraPageHero` → `CampusPhilosophy` → `CampusOverview` → `AllianceDifferenceInfra` → `CampusBlocksNav` (sticky) → `CampusBlockSection ×N` → `SportsAndGrounds` → `ArtsAndFineArts` → `HealthAndWellbeing` → `StaffFacilities` → `TransportSection` → `CampusGalleryStrip` → `VisitCampusCTA`

#### `/life-at-alliance` — Life at Alliance
`PageHero` → `PhilosophyIntro` → `PillarsOfLifeGrid` → `BreatherImage` → `ActivityListAndGrid` → `SkewedContentCard` (Hostel/Arts/Clubs/Literary) → `BreatherImage` → `ActivityBasedLearning` → `StudentCouncil` → `LifeGalleryCTA`

#### `/initiatives` — Our Initiatives
`PageHero` → `VideoEmbed` → `InitiativeNav` (sticky) → `SkewedContentCard` (Robotics `#robotics-lab` / Sports `#sports-academy` / Boarding `#day-boarding`) → `BreatherImage` → `EquipmentAndToolsGrid` (`#robotics-equipment`) → `HowToJoinProcess` → `ProgrammeCards` → `EnquiryCTA` (`#enquiry-form`)

#### `/admission` — Admissions
`AdmissionPageOpener` → `MobileSidebarStrip` → `ProcessStepsSection` → `ScholarTypeSection` → `AdmissionLayout` [FeeStructureSection / DocumentsSection / AdmissionCriteriaSection / FAQSection] → `AdmissionCTASection`

#### `/contact` — Contact Us
`PageHero` (ui/) → Contact split (ContactForm left + InfoCards right)

---

### 18.4 SkewedContentCard — Critical Implementation Rules

**File:** `components/sections/educators/SkewedContentCard.tsx`
Used by: Educators, Infrastructure, Life at Alliance, Initiatives.

- `SKEW = 10` — content overlaps image by 10% via `marginLeft: -10%` or `marginRight: -10%`
- Clip-path applied via `useEffect` + `ResizeObserver` — **never in CSS `@media`** (Safari bug)
- Desktop clip: `polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)` (imageLeft) — mirrors for imageRight
- Mobile: `clipPath = 'none'`, margins cleared
- Image always first in DOM; CSS `order` handles visual swap
- Ghost label at `left-20` to clear wide inner padding
- `badge?` prop: gold pill with `<Sparkles>` icon above eyebrow
- `highlight?` prop: white pill below CTA

---

### 18.5 Global Fixtures (every page)

Rendered in `app/layout.tsx` inside `<body>` in this order:
1. `PageLoader` — red overlay, slides up after 1.4s
2. `Navbar` — sticky, `top: 0`, `z-50`, frosted glass on scroll > 60px
3. `<main>{children}</main>`
4. `Footer`
5. `AdmissionBanner` — fixed bottom mobile strip, dismisses after 5s
6. `GlobalEnquiryWidget` — fixed tab at `right: 0, top: 38%`, `writing-mode: vertical-rl`, opens 420px slide-in panel with 6-field enquiry form

---

### 18.6 Established Coding Patterns

**Mobile-first image ordering** — image always first in DOM, `lg:order-2` for visual right placement. Never conditional JSX.

**No `<form>` element** — all enquiry/inline forms use `<div>` + `useState` + `type="button"`. Only `ContactForm` uses react-hook-form.

**Clip-path via JS only** — `useEffect` + resize listener, never CSS `@media`. Reference: `SkewedContentCard`.

**Scroll reveal** — `useReveal(threshold)` → `animate={inView ? { opacity: 1, y: 0 } : {}}`. Always `once: true`.

**Stagger grids** — `container` / `item` variants with `staggerChildren: 0.06–0.1`. Filter tab switches are instant (no animation).

**Animated rules** — `scaleX: 0 → 1` with `transformOrigin: 'left center'`, never `width: 0 → Npx`.

**CSS-variable hover** — use `hover:bg-[var(--color-primary-dark)]` in Tailwind. Avoid `onMouseEnter` in server components.

**Ghost labels** — `aria-hidden="true"`, `font-display font-black uppercase`, `color: rgba(0,0,0,0.025–0.04)`, `pointer-events-none select-none`, `clamp(5rem, 18vw, 14rem)`.

**Sticky anchor navs** — `<button>` + `aria-pressed`, `IntersectionObserver` threshold 0.3, `scrollIntoView({ behavior: 'smooth', block: 'start' })`, `top: 64px z-40`.

---

### 18.7 Image Asset Locations

```
public/images/
├── logo.png / ais_logo_white.png / og-default.jpg
├── about/          mission.png, vision.jpg, leader photos
├── educators/      section photos + team/ subfolder
├── infrastructure/ campus block photos
├── life_at_alliance/
└── initiatives/
    ├── hero-initiatives.png
    ├── robotics-lab.jpg, sports-academy.jpg, day-boarding.jpg
    ├── breather-students.jpg
    ├── programme-robotics-primary.jpg, programme-robotics-senior.jpg
    ├── programme-sports-day.jpg, programme-sports-residential.jpg
    ├── programme-day-boarding.jpg
    └── bg-image.png            ← VideoEmbed background
```

---

*Section 18 last updated: 2026-05-26 — covers all pages through Initiatives.*

*End of CLAUDE.md — All sections above are mandatory. Start with Section 15 (Build Order) and do not skip steps.*
