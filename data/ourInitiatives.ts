import type { SkewedSection } from '@/data/educators'

// ─── INTERFACES ───────────────────────────────────────────────────────────────

export interface InitiativeSection extends SkewedSection {
  anchorId: string
}

export interface EquipmentTile {
  id:       string
  icon:     string
  heading:  string
  body:     string
  category: 'robotics' | 'sports' | 'boarding'
  imageSrc?: string
}

export interface ProcessStep {
  id:      string
  step:    number
  icon:    string
  heading: string
  body:    string
}

export interface ProgrammeCard {
  id:             string
  initiativeId:   'robotics' | 'sports' | 'boarding'
  imageSrc:       string
  imageAlt:       string
  programmeTitle: string
  gradeRange:     string
  sessionType:    string
  description:    string
  availability:   'open' | 'limited' | 'waitlist'
  ctaLabel:       string
  ctaHref:        string
}

// Videos for this page (roboticsFilm, sportsFilm) live in data/videos.ts.

// ─── ANCHOR NAV ITEMS ─────────────────────────────────────────────────────────

export const initiativeNavItems = [
  { id: 'robotics', label: 'Robotics Lab',   anchorId: 'robotics-lab'   },
  { id: 'sports',   label: 'Sports Academy', anchorId: 'sports-academy' },
  { id: 'boarding', label: 'Day Boarding',   anchorId: 'day-boarding'   },
]

// ─── INITIATIVE SECTIONS (SkewedContentCard data) ─────────────────────────────

export const initiativeSections: InitiativeSection[] = [
  {
    id:            'robotics',
    anchorId:      'robotics-lab',
    eyebrow:       'STEM & Innovation',
    headingPlain:  'Robotics',
    headingAccent: 'Lab',
    ghostLabel:    'INVENT',
    badge:         'FLAGSHIP PROGRAMME',
    body: [
      "Step into our state-of-the-art Robotics Lab — a hub of innovation and learning. Designed to foster a deep understanding of robotics, programming, and problem-solving, this immersive space ignites students' curiosity. With robotics kits, microcontrollers, and sensors at their fingertips, students engage in hands-on exploration.",
      'Our dedicated instructors provide expert guidance, while collaborative workspaces encourage teamwork. The lab seamlessly integrates with the curriculum, reinforcing concepts from various subjects. Join us in shaping future leaders who are adept at creativity, critical thinking, and technological proficiency.',
      'Experience the future in our Robotics Lab.',
    ],
    imageSrc:      '/images/initiatives/robotics-lab.png',
    imageAlt:      'AIS students working on robots in the Robotics Lab',
    imagePosition: 'left',
    ctaLabel:      'EXPLORE THE LAB',
    ctaHref:       '#robotics-equipment',
  },
  {
    id:            'sports',
    anchorId:      'sports-academy',
    eyebrow:       'Athletic Development',
    headingPlain:  'Sports',
    headingAccent: 'Academy',
    ghostLabel:    'CHAMPION',
    badge:         'RESIDENTIAL PROGRAMME',
    body: [
      'Discover the state-of-the-art Sports Academy at Alliance International School, Banur — an initiative dedicated to transforming sports education and nurturing young athletes. The academy offers professional training across major sports including cricket, football, basketball, table tennis, volleyball, and lawn tennis, guided by experienced and certified coaches.',
      'Our residential sports programme provides students with a structured environment that balances athletic development, discipline, and academic excellence. With world-class facilities, personalised coaching plans, and a focus on holistic growth, the Sports Academy empowers every student to unlock their full sporting potential.',
      'Join us and begin your journey toward becoming the next generation of champions.',
    ],
    imageSrc:      '/images/initiatives/sports-academy.png',
    imageAlt:      'AIS students training at the Sports Academy',
    imagePosition: 'right',
    ctaLabel:      'VIEW SPORTS PROGRAMME',
    ctaHref:       '#sports-programme-card',
  },
  {
    id:            'boarding',
    anchorId:      'day-boarding',
    eyebrow:       'Extended Learning',
    headingPlain:  'Day',
    headingAccent: 'Boarding',
    ghostLabel:    'GROW',
    body: [
      'Introducing our Day Boarding Facility — an extension of our commitment to holistic education. This convenient offering provides students with a structured environment for focused study, extracurricular activities, and a balanced lifestyle.',
      'With dedicated spaces for academics and recreation, our Day Boarding Facility ensures that students make the most of their time, fostering both academic excellence and personal growth. Welcome to a supportive space where learning extends beyond the classroom hours.',
    ],
    imageSrc:      '/images/initiatives/day-boarding.png',
    imageAlt:      'AIS students at the Day Boarding facility during structured study time',
    imagePosition: 'left',
    ctaLabel:      'DAY BOARDING DETAILS',
    ctaHref:       '#day-boarding-card',
  },
]

// ─── EQUIPMENT & TOOLS GRID ───────────────────────────────────────────────────

export const equipmentTiles: EquipmentTile[] = [
  { id: 'kits',       icon: 'Bot',          heading: 'LEGO & VEX Robotics Kits',        body: 'Industry-grade LEGO Mindstorms and VEX robotics kits for every level.',          category: 'robotics', imageSrc: '/images/initiatives/lego.png'             },
  { id: 'computers',  icon: 'Monitor',      heading: 'Programming Lab Stations',        body: 'Dedicated programming stations with Python, Scratch, and Arduino IDEs.',          category: 'robotics', imageSrc: '/images/initiatives/programming-lab-stations.png' },
  { id: 'micro',      icon: 'Cpu',          heading: 'Arduino & Raspberry Pi Boards',   body: 'Arduino, Raspberry Pi, and ESP32 boards with full component libraries.',          category: 'robotics', imageSrc: '/images/initiatives/arduino.png'             },
  { id: 'sensors',    icon: 'Radio',        heading: 'Smart Sensors & Actuators',       body: 'Ultrasonic, infrared, temperature, and motion sensors for real-world projects.',  category: 'robotics', imageSrc: '/images/initiatives/sensors.png'  },
  { id: 'mechanical', icon: 'Settings',     heading: 'Mechanical Prototyping Parts',    body: 'Gears, motors, axles, and structural parts for physical prototyping.',            category: 'robotics', imageSrc: '/images/initiatives/prototype.png'             },

  { id: 'storage',    icon: 'Archive',      heading: 'Student Project Display Wall',    body: 'Dedicated shelving for in-progress and completed student projects.',              category: 'robotics', imageSrc: '/images/initiatives/project-display-wall.png'             },
  { id: 'collab',     icon: 'Users',        heading: 'Team Collaboration Stations',     body: 'Open-plan tables designed for team-based problem-solving sessions.',              category: 'robotics', imageSrc: '/images/initiatives/team-collaboration-station.png' },
  { id: 'curriculum', icon: 'BookMarked',   heading: 'CBSE Curriculum Integration',     body: 'Lab activities mapped directly to CBSE science, maths, and computer science.',   category: 'robotics', imageSrc: '/images/initiatives/cbse-curriculum.png' },
  { id: 'sports-eq',  icon: 'Trophy',       heading: 'Professional Sports Equipment',   body: 'Professional-grade gear across cricket, football, basketball, and tennis.',      category: 'sports',  imageSrc: '/images/home/sports.png'                },
]

// ─── HOW TO JOIN PROCESS STEPS ────────────────────────────────────────────────

export const howToJoinSteps: ProcessStep[] = [
  {
    id:      'enquire',
    step:    1,
    icon:    'MessageCircle',
    heading: 'Enquire',
    body:    'Click "Enquire Now" on any programme card, or use the tab on the right. Our team responds within 24 hours.',
  },
  {
    id:      'demo',
    step:    2,
    icon:    'Eye',
    heading: 'Demo Visit',
    body:    'Schedule a live demo session in the Robotics Lab or a trial at the Sports Academy.',
  },
  {
    id:      'enrol',
    step:    3,
    icon:    'ClipboardList',
    heading: 'Enrolment Form',
    body:    'Complete the initiative enrolment form. Our counsellor will guide you through it.',
  },
  {
    id:      'docs',
    step:    4,
    icon:    'FileText',
    heading: 'Submit Documents',
    body:    'Passport photo, birth certificate, previous report card, and Aadhaar card.',
  },
  {
    id:      'confirm',
    step:    5,
    icon:    'CheckCircle',
    heading: 'Confirmation',
    body:    'Receive your slot confirmation, schedule, and programme handbook.',
  },
  {
    id:      'start',
    step:    6,
    icon:    'Rocket',
    heading: 'Start Learning',
    body:    "Your child joins their first session. We'll check in after week one.",
  },
]

// ─── PROGRAMME CARDS ──────────────────────────────────────────────────────────

export const programmeCards: ProgrammeCard[] = [
  {
    id:             'robotics-primary',
    initiativeId:   'robotics',
    imageSrc:       '/images/initiatives/robotics-card.png',
    imageAlt:       'Young AIS students at robotics workbench',
    programmeTitle: 'Junior Robotics',
    gradeRange:     'Grade 3 – 6',
    sessionType:    'After-school · Tue & Thu · 3:30–5:00 PM',
    description:    'Introduction to block-based coding, basic circuits, and simple robotics assemblies. No prior experience needed — pure curiosity is the only requirement.',
    availability:   'open',
    ctaLabel:       'ENQUIRE NOW',
    ctaHref:        '#enquiry-form',
  },
  {
    id:             'sports-day',
    initiativeId:   'sports',
    imageSrc:       '/images/initiatives/sports-card.png',
    imageAlt:       'AIS students at cricket coaching session',
    programmeTitle: 'Sports Academy',
    gradeRange:     'Grade 1 – 12',
    sessionType:    'After-school · Mon–Fri · 4:00–6:00 PM',
    description:    'Coached training in cricket, football, basketball, table tennis, volleyball, and lawn tennis. Choose one sport or rotate across multiple. Progress tracked termly.',
    availability:   'open',
    ctaLabel:       'ENQUIRE NOW',
    ctaHref:        '#enquiry-form',
  },
  {
    id:             'boarding-day',
    initiativeId:   'boarding',
    imageSrc:       '/images/initiatives/day-boarding-card.png',
    imageAlt:       'AIS Day Boarding students in supervised study room',
    programmeTitle: 'Day Boarding',
    gradeRange:     'Grade 1 – 12',
    sessionType:    'School hours + 3:30–7:00 PM',
    description:    'Structured post-school time with supervised homework, extracurricular engagement, and a nutritious evening meal. Ideal for working parents.',
    availability:   'open',
    ctaLabel:       'ENQUIRE NOW',
    ctaHref:        '#enquiry-form',
  },
]

// ─── ENQUIRY FORM CONFIG ──────────────────────────────────────────────────────

export const enquiryFormFields = {
  heading:       "Your child's next chapter",
  headingAccent: 'starts here.',
  subheading:    'Fill in the form and our counsellor will reach out within 24 hours.',
  fields:        ['parentName', 'childName', 'mobileNumber', 'email', 'grade', 'initiative'] as const,
  initiativeOptions: [
    'Junior Robotics (Gr 3–6)',
    'Advanced Robotics & AI (Gr 7–12)',
    'Day Sports Academy',
    'Residential Sports Academy',
    'Day Boarding',
    'General School Admission',
  ],
  gradeOptions: [
    'Nursery', 'KG',
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6',
    'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
  ],
  submitLabel:  'Send Enquiry',
  privacyNote:  'We respect your privacy. Your details are used only to respond to your enquiry.',
}
