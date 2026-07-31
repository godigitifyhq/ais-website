// ─── Video Assets ─────────────────────────────────────────────────────────────
// Single source of truth for every video used across the site.
//
// Two kinds of asset:
//   loop — short, silent, no controls. Autoplays as a background layer.
//   film — the full production. Click-to-play only, with sound and controls.
//
// All files are web-encoded (1280px wide, H.264 + faststart) from the original
// masters. Never point a background loop at a full film — the payload is 10×.

export interface VideoLoop {
  mp4:    string
  webm?:  string
  poster: string
  alt:    string
}

export interface VideoFilm {
  src:      string
  poster:   string
  title:    string
  caption?: string
  /** Rendered aspect ratio — some masters are letterboxed and cropped on encode. */
  ratio:    string
  /**
   * Short silent cut of the same film. Autoplays in place of the poster on
   * phones and tablets, where a static frame reads as a dead image. Tapping it
   * still opens the full film with sound.
   *
   * Always a loop, never the film itself — mobile must not pull 15 MB on scroll.
   */
  previewLoop?: VideoLoop
}

// ─── Loops (silent, autoplaying backgrounds) ──────────────────────────────────

// VP9/WebM was consistently larger than x264 on this footage, so there is no
// webm variant — H.264 is universally supported anyway.
export const heroLoop: VideoLoop = {
  mp4:    '/video/hero-loop.mp4',
  poster: '/video/hero-poster.jpg',
  alt:    'Students at Alliance International School — playground, classrooms, and craft activities',
}

// ─── Films (click-to-play, with audio) ────────────────────────────────────────

export const campusTourFilm: VideoFilm = {
  src:     '/video/campus-tour.mp4',
  poster:  '/video/campus-tour-poster.jpg',
  title:   'Campus Tour — Alliance International School',
  caption: 'A walk through every corner of the Banur campus — classrooms, labs, grounds, and stage.',
  ratio:   '16 / 9',
  previewLoop: {
    mp4:    '/video/campus-tour-loop.mp4',
    poster: '/video/campus-tour-poster.jpg',
    alt:    'AIS classrooms, computer lab, and sports courts',
  },
}

export const admissionStoryFilm: VideoFilm = {
  src:     '/video/admission-story.mp4',
  poster:  '/video/admission-story-poster.jpg',
  title:   'Your Child Is in Safe Hands',
  caption: 'Why parents across Punjab choose Alliance.',
  // Master is 2.16:1 inside a 1080p letterbox; the bars are cropped on encode.
  ratio:   '1280 / 592',
  previewLoop: {
    mp4:    '/video/admission-story-loop.mp4',
    poster: '/video/admission-story-poster.jpg',
    alt:    'AIS pupils learning and playing happily in class',
  },
}

export const roboticsFilm: VideoFilm = {
  src:     '/video/robotics-lab-film.mp4',
  poster:  '/video/robotics-lab-poster.jpg',
  title:   'Inside the AIS Robotics Lab',
  caption: 'Our students explain what they build — in their own words.',
  ratio:   '16 / 9',
  previewLoop: {
    mp4:    '/video/robotics-lab-loop.mp4',
    poster: '/video/robotics-lab-poster.jpg',
    alt:    'AIS students assembling robotics kits',
  },
}

export const sportsFilm: VideoFilm = {
  src:     '/video/sports-campus.mp4',
  poster:  '/video/sports-campus-poster.jpg',
  title:   'Sports Facilities at Alliance',
  caption: 'Courts, grounds, gymnasium, and boarding — a tour of where our athletes train and live.',
  ratio:   '16 / 9',
  previewLoop: {
    mp4:    '/video/sports-campus-loop.mp4',
    poster: '/video/sports-campus-poster.jpg',
    alt:    'Aerial view of the AIS playground, grounds, and basketball court',
  },
}
