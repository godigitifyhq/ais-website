// ─── Types ───────────────────────────────────────────────────────────────────

export interface WhyAISPillar {
  id:          string
  icon:        string
  headline:    string
  body:        string
}

export interface Facility {
  id:          string
  label:       string
  image:       string
  imageAlt:    string
  href:        string
  description: string
}

export interface JourneyStep {
  step:        number
  title:       string
  description: string
}

export interface HomeEvent {
  id:          string
  date:        string
  category:    string
  title:       string
  excerpt:     string
  image:       string
  href:        string
}

export interface Achievement {
  id:          string
  name:        string
  achievement: string
  color:       'teal' | 'orange' | 'coral' | 'sage'
}

export interface Affiliation {
  id:          string
  name:        string
  logo:        string
  width:       number
  height:      number
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const heroContent = {
  eyebrow:   'CBSE School — Banur, Punjab',
  headline:  'Education Beyond\nGrades.',
  subline:   'Alliance International School nurtures every child — academically, emotionally, and physically — since 2015.',
  ctaLabel:  'Explore Alliance',
  ctaHref:   '/about',
  image:     '/images/home/campus-image.jpg',
  imageAlt:  'Alliance International School campus, Banur',
}

export const trustItems = [
  'CBSE Affiliated School',
  'British Council International School Award',
  'Established 2015',
  'Hostel Facility Available',
  '500+ Students',
  'Robotics & Innovation Lab',
  'Swimming Pool & Sports Complex',
  'Transportation for 50km Radius',
]

export const aboutContent = {
  eyebrow:     'Our Story',
  ghostLabel:  'ALLIANCE',
  headline:    'We evaluate intelligence\nbeyond just grades.',
  body:        [
    'Alliance International School was founded in 2015 in Banur, Punjab, in loving memory of Late Sh. Raghu Nath Rai Garg. His conviction that education must address the whole child — academically, morally, physically, and spiritually — is the founding principle that guides everything we do.',
    'At Alliance, we understand and respect the uniqueness of every student. Our campus provides a safe, joyful environment where curiosity is encouraged, confidence is built, and every child is seen.',
  ],
  ctaLabel:    'Our Full Story',
  ctaHref:     '/about',
  image:       '/images/home/collage1.png',
  imageAlt:    'AIS students studying together in class',
  stat1Value:  '500+',
  stat1Label:  'Students enrolled',
  stat2Value:  '2015',
  stat2Label:  'Year established',
  stat3Value:  '8+',
  stat3Label:  'Years of excellence',
}

export const whyAISPillars: WhyAISPillar[] = [
  {
    id:       'joyful',
    icon:     'Smile',
    headline: 'Joyful Learning',
    body:     'A safe, nurturing environment where learning is an adventure — not a competition. Every child thrives at their own pace.',
  },
  {
    id:       'experiential',
    icon:     'FlaskConical',
    headline: 'Hands-on & Experiential',
    body:     'From Robotics Lab to the swimming pool, our children learn by doing. Practical skills complement every academic concept.',
  },
  {
    id:       'confidence',
    icon:     'Trophy',
    headline: 'Confidence & Problem-Solving',
    body:     'AIS shapes independent thinkers. Students develop the confidence to ask questions, lead, and innovate.',
  },
  {
    id:       'transport',
    icon:     'Bus',
    headline: 'World-class Connectivity',
    body:     'Safe, GPS-tracked transport covering a 50km radius and a secure hostel facility — your child is always in safe hands.',
  },
]

export const facilities: Facility[] = [
  { id: 'academics', label: 'Academics',     image: '/images/home/facilities/academics.jpg', imageAlt: 'Classroom at AIS',             href: '/infrastructure#academics', description: 'Smart classrooms and a well-stocked library designed for curious, motivated minds.'        },
  { id: 'sports',    label: 'Sports',         image: '/images/home/facilities/sports.jpg',    imageAlt: 'AIS sports ground',            href: '/infrastructure#sports',    description: 'Basketball, volleyball, skating rink, and a full athletics track — sport for every child.' },
  { id: 'arts',      label: 'Arts & Culture', image: '/images/home/facilities/arts.jpg',      imageAlt: 'AIS arts programme',           href: '/life-at-alliance#arts',    description: 'A 500-seat auditorium for drama, dance, music, and annual cultural showcases.'            },
  { id: 'robotics',  label: 'Robotics Lab',   image: '/images/home/facilities/robotics.jpg',  imageAlt: 'Students in AIS Robotics Lab', href: '/initiatives',              description: 'Hands-on robotics builds and competitions — engineering skills from Class 3 onwards.'      },
  { id: 'clubs',      label: 'Club Activities',  image: '/images/home/clubs.png',      imageAlt: 'AIS Clubs',            href: '/infrastructure#sports',    description: 'Different club activities to inculcate creativity, confidence and aptitude od students.'               },
  { id: 'hostel',    label: 'Hostel',         image: '/images/home/facilities/hostel.jpg',    imageAlt: 'AIS hostel facility',          href: '/infrastructure#hostel',    description: 'Safe, supervised residential facilities for students from across Punjab and beyond.'       },
]

export const journeySteps: JourneyStep[] = [
  { step: 1, title: 'Where You Are',      description: 'We meet every child exactly where they are — identifying their strengths, interests, and learning style from day one.' },
  { step: 2, title: 'Holistic Subjects',  description: 'A CBSE curriculum enriched with arts, sport, and life-skills that go far beyond memorisation.' },
  { step: 3, title: 'Discover Creativity',description: 'Robotics, fine arts, music, and drama — every child finds a domain where their imagination is the only limit.' },
  { step: 4, title: 'Your Platforms',     description: 'Student clubs, competitions, and the Alliance Entrepreneurship Chapter give students a stage to lead and perform.' },
  { step: 5, title: 'AIS Edge',           description: 'Global exposure through inter-school events, integrated coaching, and life-skill programmes that build character.' },
  { step: 6, title: 'You Become',         description: 'Principled. Innovative. Global-minded. A responsible and compassionate citizen ready to face the world.' },
]

export const homeEvents: HomeEvent[] = [
  {
    id:       'national-flag-day',
    date:     '22 July 2025',
    category: 'Community',
    title:    'National Flag Day Celebration',
    excerpt:  'AIS proudly celebrates National Flag Day on 22nd July, honouring the spirit of unity, sacrifice, and patriotism across campus.',
    image:    '/images/home/events/flag-day.jpg',
    href:     '/blogs/national-flag-day-2025',
  },
  {
    id:       'sports-day',
    date:     '10 July 2025',
    category: 'Sports',
    title:    'Annual Sports Day 2025',
    excerpt:  'A day of champions — students showcased their athletic best across track, field, and team sports events.',
    image:    '/images/home/events/sports-day.jpg',
    href:     '/blogs/sports-day-2025',
  },
  {
    id:       'robotics-showcase',
    date:     '2 June 2025',
    category: 'Academics',
    title:    'Robotics Innovation Showcase',
    excerpt:  'Students from Classes 5 to 10 presented their self-built robots, demonstrating programming, engineering, and creative thinking.',
    image:    '/images/home/events/robotics.jpg',
    href:     '/blogs/robotics-showcase-2025',
  },
]

export const achievements: Achievement[] = [
  { id: 'a1', name: 'Harman Singh',  achievement: 'Taekwondo Bronze — 5th Heroes International Championship, Thailand', color: 'teal'   },
  { id: 'a2', name: 'Aditya Sharma', achievement: 'National Chess Olympiad Qualifier',                                   color: 'orange' },
  { id: 'a3', name: 'Priya Nanda',   achievement: 'State Swimming Champion — Freestyle 50m',                             color: 'coral'  },
  { id: 'a4', name: 'Rohan Garg',    achievement: 'CBSE Science Exhibition — Regional Winner',                           color: 'sage'   },
  { id: 'a5', name: 'Simran Kaur',   achievement: 'National Classical Dance Showcase — Gold',                            color: 'teal'   },
  { id: 'a6', name: 'Arjun Mehta',   achievement: 'District Robotics Challenge — First Place',                           color: 'orange' },
]

export const affiliations: Affiliation[] = [
  { id: 'cbse',    name: 'CBSE Affiliated',                    logo: '/images/home/affiliations/cbse.png',            width: 80,  height: 80 },
  { id: 'british', name: 'British Council International Award', logo: '/images/home/affiliations/british-council.png', width: 120, height: 60 },
  { id: 'ncert',   name: 'NCERT',                              logo: '/images/home/affiliations/ncert.png',           width: 80,  height: 80 },
  { id: 'khel',    name: 'Khelo India',                        logo: '/images/home/affiliations/khelo-india.png',     width: 100, height: 60 },
]

// ─── ACHIEVER PORTRAITS (AchievementsStrip) ───────────────────────────────────

export interface AchieverPortrait {
  id:          string
  image:       string
  name:        string
  achievement: string
  category:    'academics' | 'sports' | 'arts' | 'olympiad'
}

export const achieverPortraits: AchieverPortrait[] = [
  {
    id:          'ap-1',
    image:       '/images/educators/team/principal.jpg',
    name:        'Harman Singh',
    achievement: 'Taekwondo Bronze — International Championship',
    category:    'sports',
  },
  {
    id:          'ap-2',
    image:       '/images/educators/team/anil-verma.jpg',
    name:        'Aditya Sharma',
    achievement: 'National Chess Olympiad Qualifier',
    category:    'olympiad',
  },
  {
    id:          'ap-3',
    image:       '/images/educators/team/sunita-mehta.jpg',
    name:        'Priya Nanda',
    achievement: 'State Swimming Champion',
    category:    'sports',
  },
  {
    id:          'ap-4',
    image:       '/images/educators/team/deepak-singh.jpg',
    name:        'Rohan Garg',
    achievement: 'CBSE Science Exhibition — Regional Winner',
    category:    'academics',
  },
  {
    id:          'ap-5',
    image:       '/images/educators/team/principal.jpg',
    name:        'Simran Kaur',
    achievement: 'National Classical Dance — Gold Medal',
    category:    'arts',
  },
  {
    id:          'ap-6',
    image:       '/images/educators/team/anil-verma.jpg',
    name:        'Arjun Mehta',
    achievement: 'District Robotics Challenge — 1st Place',
    category:    'olympiad',
  },
  {
    id:          'ap-7',
    image:       '/images/educators/team/sunita-mehta.jpg',
    name:        'Kavya Singh',
    achievement: 'National Astronomy Olympiad Qualifier',
    category:    'olympiad',
  },
  {
    id:          'ap-8',
    image:       '/images/educators/team/deepak-singh.jpg',
    name:        'Rahul Verma',
    achievement: 'State Football Championship MVP',
    category:    'sports',
  },
]

// ─── ATMOSPHERE IMAGES (AtmosphereReel bento grid) ────────────────────────────

export interface AtmosphereImage {
  src:     string
  alt:     string
  colSpan?: number
  rowSpan?: number
}

export const atmosphereImages: AtmosphereImage[] = [
  {
    src:     '/images/home/nasa.png',
    alt:     'AIS students laughing and enjoying campus life together',
    colSpan: 2,
    rowSpan: 2,
  },
  {
    src:     '/images/home/candid-1.png',
    alt:     'AIS teacher engaged with students in classroom discussion',
  },
  {
    src:     '/images/home/candid-2.png',
    alt:     'AIS students in action at sports event',
  },
  {
    src:     '/images/home/candid-3.png',
    alt:     'AIS morning assembly — students gathered on grounds',
    colSpan: 2,
  },
]

// ─── TESTIMONIALS (TestimonialsSection) ───────────────────────────────────────

export interface Testimonial {
  id:         string
  avatar:     string
  parentName: string
  childClass: string
  quote:      string
  rating:     number
}

export const testimonials: Testimonial[] = [
  {
    id:         't-1',
    avatar:     '/images/about/campus-students.jpg',
    parentName: 'Rajesh Kumar',
    childClass: 'Parent of Class 8 student',
    quote:      'AIS has transformed our daughter. She is more confident, more curious, and genuinely loves going to school every morning.',
    rating:     5,
  },
  {
    id:         't-2',
    avatar:     '/images/home/about-students.jpg',
    parentName: 'Sunita Sharma',
    childClass: 'Parent of Class 5 student',
    quote:      'The hostel care is exceptional. Teachers treat every child like their own. We never worry about our son.',
    rating:     5,
  },
  {
    id:         't-3',
    avatar:     '/images/about/campus-2.jpg',
    parentName: 'Gurpreet Singh',
    childClass: 'Parent of Class 10 student',
    quote:      'Best decision we ever made. The robotics programme and sports facilities are world-class. Our son is thriving.',
    rating:     5,
  },
  {
    id:         't-4',
    avatar:     '/images/life_at_alliance/breather-campus-life.png',
    parentName: 'Meena Patel',
    childClass: 'Parent of Class 3 student',
    quote:      'The activity-based learning approach is remarkable. My child understands concepts through experience, not just memorisation.',
    rating:     5,
  },
]

// ─── LATEST POSTS (Navbar mega-menu "Latest from AIS") ────────────────────────

export interface LatestPost {
  image:    string
  category: string
  title:    string
  date:     string
  href:     string
}

export const latestPosts: LatestPost[] = [
  {
    image:    '/images/home/events/flag-day.jpg',
    category: 'Community',
    title:    'National Flag Day Celebration at AIS',
    date:     '22 July 2025',
    href:     '/blogs/national-flag-day-2025',
  },
  {
    image:    '/images/home/sport.png',
    category: 'Sports',
    title:    'Annual Sports Day 2025 Highlights',
    date:     '10 July 2025',
    href:     '/blogs/sports-day-2025',
  },
  {
    image:    '/images/home/Robolab1.png',
    category: 'Academics',
    title:    'Robotics Innovation Showcase 2025',
    date:     '2 June 2025',
    href:     '/blogs/robotics-showcase-2025',
  },
]

// ─── HOME PAGE V2 ADDITIONS ───────────────────────────────────────────────────

export const philosophyBreak = {
  preLabel:     'Our founding belief',
  quote:        'Alliance was built on one conviction: every child carries a form of intelligence that grades alone can never measure.',
  attribution:  'In memory of Late Sh. Raghu Nath Rai Garg — Founder, Alliance International School',
  ctaLabel:     'Our Full Story',
  ctaHref:      '/about',
}

export const campusBreather = {
  image:    '/images/home/campus-aerial.jpg',
  imageAlt: 'Alliance International School campus, Banur, Punjab',
}

export const achievementsContent = {
  eyebrow:  'Our Champions',
  heading:  'Student achievements that make Alliance proud.',
  ctaLabel: 'All Achievements',
  ctaHref:  '/blogs',
}
