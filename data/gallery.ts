import { campusTourFilm, roboticsFilm, sportsFilm, type VideoFilm } from '@/data/videos'

// ─── Types ───────────────────────────────────────────────────────────────────

export type GalleryCategory =
  | 'campus-life'
  | 'sports'
  | 'events'
  | 'classroom'
  | 'robotics'
  | 'arts'
  | 'school-trips'

export interface GalleryImage {
  id:          string
  src:         string
  alt:         string
  category:    GalleryCategory
  aspectRatio: 'portrait' | 'landscape' | 'square'
  featured?:   boolean
  date?:       string
}

export interface VideoMoment {
  film:     VideoFilm
  category: string
}

// ─── Filter Labels ────────────────────────────────────────────────────────────

export const galleryFilters: { key: string; label: string }[] = [
  { key: 'all',          label: 'All'              },
  { key: 'campus-life',  label: 'Campus Life'      },
  { key: 'sports',       label: 'Sports & Games'   },
  { key: 'events',       label: 'Events & Fests'   },
  { key: 'classroom',    label: 'Classroom'        },
  { key: 'robotics',     label: 'Robotics & STEM'  },
  { key: 'arts',         label: 'Arts & Culture'   },
  { key: 'school-trips', label: 'School Trips'     },
]

// ─── Gallery Images ───────────────────────────────────────────────────────────
// Images use existing project assets where available.
// TODO: Replace placeholder paths with real gallery photos as they are uploaded
// to /public/images/gallery/[category]/

export const galleryImages: GalleryImage[] = [
  // ── Campus Life ──────────────────────────────────────────────────────────────
  {
    id:          'cl-01',
    src:         '/images/life_at_alliance/breather-campus-life.png',
    alt:         'AIS students enjoying campus life together',
    category:    'campus-life',
    aspectRatio: 'landscape',
    featured:    true,
  },
  {
    id:          'cl-02',
    src:         '/images/home/campus-image.jpg',
    alt:         'AIS campus aerial view, Banur Punjab',
    category:    'campus-life',
    aspectRatio: 'landscape',
    featured:    true,
  },
  {
    id:          'cl-03',
    src:         '/images/infrastructure/kindergarten-block.png',
    alt:         'AIS kindergarten block — bright learning spaces',
    category:    'campus-life',
    aspectRatio: 'landscape',
  },
  {
    id:          'cl-04',
    src:         '/images/infrastructure/indoor.jpg',
    alt:         'AIS indoor corridor, warm and welcoming',
    category:    'campus-life',
    aspectRatio: 'landscape',
  },
  {
    id:          'cl-05',
    src:         '/images/about/campus-students.jpg',
    alt:         'Students at Alliance International School campus',
    category:    'campus-life',
    aspectRatio: 'landscape',
    featured:    true,
  },
  {
    id:          'cl-06',
    src:         '/images/about/campus-2.jpg',
    alt:         'AIS campus green spaces and walkways',
    category:    'campus-life',
    aspectRatio: 'landscape',
  },

  // ── Sports ───────────────────────────────────────────────────────────────────
  {
    id:          'sp-01',
    src:         '/images/home/sport.png',
    alt:         'AIS students at annual sports day',
    category:    'sports',
    aspectRatio: 'landscape',
    featured:    true,
  },
  {
    id:          'sp-02',
    src:         '/images/infrastructure/sports-grounds.png',
    alt:         'AIS sports grounds and athletics facilities',
    category:    'sports',
    aspectRatio: 'landscape',
  },
  {
    id:          'sp-03',
    src:         '/images/home/facilities/sports.jpg',
    alt:         'AIS sports facilities — basketball and volleyball',
    category:    'sports',
    aspectRatio: 'landscape',
  },
  {
    id:          'sp-04',
    src:         '/images/initiatives/sports-academy.jpg',
    alt:         'AIS Sports Academy training session',
    category:    'sports',
    aspectRatio: 'landscape',
  },
  {
    id:          'sp-05',
    src:         '/images/home/facilities/pool.jpg',
    alt:         'AIS swimming pool — students in training',
    category:    'sports',
    aspectRatio: 'landscape',
    featured:    true,
  },
  {
    id:          'sp-06',
    src:         '/images/infrastructure/main.jpg',
    alt:         'AIS outdoor sports and activities area',
    category:    'sports',
    aspectRatio: 'landscape',
  },

  // ── Events ───────────────────────────────────────────────────────────────────
  {
    id:          'ev-01',
    src:         '/images/life_at_alliance/event-wide.png',
    alt:         'AIS annual school event — wide panoramic view',
    category:    'events',
    aspectRatio: 'landscape',
    featured:    true,
  },
  {
    id:          'ev-02',
    src:         '/images/home/events/flag-day.jpg',
    alt:         'AIS National Flag Day celebration on campus',
    category:    'events',
    aspectRatio: 'landscape',
  },
  {
    id:          'ev-03',
    src:         '/images/home/events/sports-day.jpg',
    alt:         'AIS Annual Sports Day 2025 — student athletes',
    category:    'events',
    aspectRatio: 'landscape',
  },
  {
    id:          'ev-04',
    src:         '/images/home/events/robotics.jpg',
    alt:         'AIS Robotics Innovation Showcase event',
    category:    'events',
    aspectRatio: 'landscape',
  },
  {
    id:          'ev-05',
    src:         '/images/life_at_alliance/mun.png',
    alt:         'AIS Mock United Nations conference — student delegates',
    category:    'events',
    aspectRatio: 'landscape',
  },
  {
    id:          'ev-06',
    src:         '/images/home/about-students.jpg',
    alt:         'AIS students at school community gathering',
    category:    'events',
    aspectRatio: 'landscape',
  },

  // ── Classroom ─────────────────────────────────────────────────────────────────
  {
    id:          'cr-01',
    src:         '/images/infrastructure/academic-block.png',
    alt:         'AIS smart classroom — students engaged in learning',
    category:    'classroom',
    aspectRatio: 'landscape',
    featured:    true,
  },
  {
    id:          'cr-02',
    src:         '/images/infrastructure/science.jpg',
    alt:         'AIS science laboratory — hands-on experiments',
    category:    'classroom',
    aspectRatio: 'landscape',
  },
  {
    id:          'cr-03',
    src:         '/images/infrastructure/library.jpg',
    alt:         'AIS library — students reading and researching',
    category:    'classroom',
    aspectRatio: 'landscape',
  },
  {
    id:          'cr-04',
    src:         '/images/educators/teachers-as-learners.jpg',
    alt:         'AIS teacher engaging students in classroom discussion',
    category:    'classroom',
    aspectRatio: 'landscape',
  },
  {
    id:          'cr-05',
    src:         '/images/educators/teachers-support-system.jpg',
    alt:         'AIS educator guiding a student one-on-one',
    category:    'classroom',
    aspectRatio: 'landscape',
  },
  {
    id:          'cr-06',
    src:         '/images/educators/teachers-experienced.jpg',
    alt:         'AIS faculty professional development session',
    category:    'classroom',
    aspectRatio: 'landscape',
  },

  // ── Robotics & STEM ───────────────────────────────────────────────────────────
  {
    id:          'rb-01',
    src:         '/images/home/Robolab1.png',
    alt:         'AIS Robotics Lab — students building robots',
    category:    'robotics',
    aspectRatio: 'landscape',
    featured:    true,
  },
  {
    id:          'rb-02',
    src:         '/images/initiatives/robotics-lab.jpg',
    alt:         'AIS Robotics Lab — advanced student projects',
    category:    'robotics',
    aspectRatio: 'landscape',
  },
  {
    id:          'rb-03',
    src:         '/images/infrastructure/robotics.jpg',
    alt:         'AIS Robotics equipment and tools',
    category:    'robotics',
    aspectRatio: 'landscape',
  },
  {
    id:          'rb-04',
    src:         '/images/home/facilities/robotics.jpg',
    alt:         'Students in AIS Robotics Innovation Lab',
    category:    'robotics',
    aspectRatio: 'landscape',
  },
  {
    id:          'rb-05',
    src:         '/images/life/activity-robotics.jpg',
    alt:         'AIS students working on robotics project',
    category:    'robotics',
    aspectRatio: 'landscape',
  },
  {
    id:          'rb-06',
    src:         '/images/initiatives/bg-image.png',
    alt:         'AIS STEM initiatives programme showcase',
    category:    'robotics',
    aspectRatio: 'landscape',
  },

  // ── Arts & Culture ────────────────────────────────────────────────────────────
  {
    id:          'ar-01',
    src:         '/images/life_at_alliance/art-craft.png',
    alt:         'AIS students working on art and craft projects',
    category:    'arts',
    aspectRatio: 'portrait',
    featured:    true,
  },
  {
    id:          'ar-02',
    src:         '/images/infrastructure/arts-studio.png',
    alt:         'AIS Arts and Fine Arts Studio',
    category:    'arts',
    aspectRatio: 'landscape',
  },
  {
    id:          'ar-03',
    src:         '/images/infrastructure/art.jpg',
    alt:         'AIS arts and craft studio in use',
    category:    'arts',
    aspectRatio: 'landscape',
  },
  {
    id:          'ar-04',
    src:         '/images/home/facilities/arts.jpg',
    alt:         'AIS 500-seat auditorium — annual cultural showcase',
    category:    'arts',
    aspectRatio: 'landscape',
  },
  {
    id:          'ar-05',
    src:         '/images/life/activity-speaking.jpg',
    alt:         'AIS student at public speaking event',
    category:    'arts',
    aspectRatio: 'portrait',
  },
  {
    id:          'ar-06',
    src:         '/images/life/activity-astronomy.jpg',
    alt:         'AIS astronomy club in action',
    category:    'arts',
    aspectRatio: 'landscape',
  },

  // ── School Trips ──────────────────────────────────────────────────────────────
  {
    id:          'st-01',
    src:         '/images/life/activity-horticulture.jpg',
    alt:         'AIS students on outdoor learning expedition',
    category:    'school-trips',
    aspectRatio: 'landscape',
  },
  {
    id:          'st-02',
    src:         '/images/life/activity-sports.jpg',
    alt:         'AIS students at outdoor sports activity',
    category:    'school-trips',
    aspectRatio: 'landscape',
    featured:    true,
  },
  {
    id:          'st-03',
    src:         '/images/life/activity-diy-lab.jpg',
    alt:         'AIS DIY lab field activity',
    category:    'school-trips',
    aspectRatio: 'landscape',
  },
  {
    id:          'st-04',
    src:         '/images/educators/teachers-beyond-academics.jpg',
    alt:         'AIS co-curricular outdoor activities with teachers',
    category:    'school-trips',
    aspectRatio: 'landscape',
  },
]

// ─── Video Moments ────────────────────────────────────────────────────────────

export const videoMoments: VideoMoment[] = [
  { film: campusTourFilm, category: 'Campus'      },
  { film: roboticsFilm,   category: 'Initiatives' },
  { film: sportsFilm,     category: 'Sports'      },
]
