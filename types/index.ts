// ─── Navigation ───────────────────────────────────────────────────────────────

export interface Breadcrumb {
  label: string
  href?: string
}

export interface NavLink {
  label: string
  href:  string
}

// ─── Layout / Content ─────────────────────────────────────────────────────────

export interface SkewedSection {
  id:            string
  ghostLabel:    string
  eyebrow:       string
  headingPlain:  string
  headingAccent: string
  body:          string[]
  bullets?:      string[]
  ctaLabel?:     string
  ctaHref?:      string
  imageSrc:      string
  imageAlt:      string
  imagePosition: 'left' | 'right'
  highlight?:    string
  badge?:        string
}

export interface ImageAsset {
  src:    string
  alt:    string
  width?: number
  height?: number
}

// ─── Forms ────────────────────────────────────────────────────────────────────

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface EnquiryFormData {
  parentName:  string
  childName:   string
  phone:       string
  email:       string
  grade:       string
  message?:    string
  initiative?: string
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug:        string
  title:       string
  excerpt:     string
  coverImage:  string
  coverAlt:    string
  category:    string
  publishedAt: string
  readingTime: number
  body:        string
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

export type GalleryCategory =
  | 'all'
  | 'campus'
  | 'sports'
  | 'events'
  | 'classroom'
  | 'robotics'

export interface GalleryImage {
  id:       string
  src:      string
  alt:      string
  category: Exclude<GalleryCategory, 'all'>
  width:    number
  height:   number
}
