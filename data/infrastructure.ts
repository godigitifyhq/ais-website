export interface StudentQuote {
  text: string
  name: string
}

export interface CampusBlock {
  id: string
  anchorId: string
  eyebrow: string
  headingPlain: string
  headingAccent: string
  ghostLabel: string
  body: string[]
  imageSrc: string
  imageAlt: string
  imagePosition: 'left' | 'right'
  features?: BlockFeature[]
  studentQuote?: StudentQuote
}

export interface FacilityInUseItem {
  src:   string
  alt:   string
  label: string
}

export interface BlockFeature {
  id: string
  icon: string
  label: string
  description?: string
}

export interface DifferencePoint {
  id: string
  icon: string
  heading: string
  body: string
}

export interface FacilityStat {
  id: string
  value: string
  label: string
}

export interface GalleryPhoto {
  id: string
  src: string
  alt: string
  caption?: string
}

export const campusPhilosophy = {
  ghostLabel: 'SPACES',
  eyebrow: 'OUR CAMPUS',
  headingPlain: 'The school building is the',
  headingAccent: 'fourth teacher.',
  body: [
    'Research suggests that better environment contributes to higher engagement and retention. Well-designed school spaces influence the connection between teachers and learners, and shape the learning journey of a child.',
    'The Alliance philosophy holds true: spaces are intrinsic to the experience. The variety of spaces and experiences creates a sense of community central to learning. These connections feed a culture of community, central to all efforts, and reflect the ethos and values of our school.',
  ],
  quote: 'Architecture is the thoughtful making of space.',
  quoteAttribution: '— Louis Kahn',
}

export const campusOverview = {
  // The tour film itself lives in data/videos.ts (campusTourFilm).
  videoTitle: 'Alliance International School — Campus Tour',
  heading: 'Our Campus',
  location: 'Banur, Punjab',
  body: [
    'The beautifully landscaped Alliance International School campus nestles away from the daily hustle and bustle, consists of thoughtfully designed main structures surrounded by sports fields, gardens, lush green areas, and covered walkways for leisure and peaceful contemplation.',
    'In a commitment to providing a wholesome and fresh environment for students and faculty, a total of 4,000 trees have been planted throughout the campus.',
  ],
  stats: [
    { id: 'trees',  value: '4,000+', label: 'Trees Planted'    },
    { id: 'acres',  value: '5+',     label: 'Acres of Campus'  },
    { id: 'blocks', value: '4',      label: 'Dedicated Blocks' },
    { id: 'since',  value: '2015',   label: 'Est. Year'        },
  ] as FacilityStat[],
}

export const allianceDifference: DifferencePoint[] = [
  {
    id: 'campus',
    icon: 'Building2',
    heading: 'World-Class Campus',
    body: 'Inspiring, bright, beautiful state-of-the-art campus equipped with all modern amenities.',
  },
  {
    id: 'sports',
    icon: 'Trophy',
    heading: 'Sports Infrastructure',
    body: 'World-class sports including outdoor playground, gymnasiums, fully equipped science, computer labs along with self-service cafeteria.',
  },
  {
    id: 'lifelong',
    icon: 'BookOpen',
    heading: 'Lifelong Learning',
    body: 'Commitment of life-long learning. Personality development for staff, workshops for parents and engaging curriculum for students.',
  },
  {
    id: 'teachers',
    icon: 'GraduationCap',
    heading: 'Expert Faculty',
    body: 'Highly qualified teachers and trainers for foreign languages, calligraphy, personality development and communication skill development.',
  },
  {
    id: 'exchange',
    icon: 'Globe',
    heading: 'Global Exposure',
    body: 'Specialised teachers for Music, Art, Dance, Computers and Physical Education. Student exchange programmes with reputed universities for global exposure.',
  },
  {
    id: 'education',
    icon: 'Heart',
    heading: 'Real Education',
    body: 'Alliance students are respectful of themselves, inclusive of others and productive of the environment. They are engaged and academically motivated to achieve excellence.',
  },
]

export const campusBlocks: CampusBlock[] = [
  {
    id: 'kindergarten',
    anchorId: 'kindergarten-block',
    eyebrow: 'Early Years',
    headingPlain: 'Kindergarten',
    headingAccent: 'Block',
    ghostLabel: 'NURTURE',
    body: [
      "A safe and secure environment can leverage a child's inherent skills. Children's minds function like a sponge, rapidly absorbing the surroundings in which they play, eat, study and sleep. Alliance assures that each child will be under the constant supervision of trained, experienced and ever-residential staff at all times.",
      "We've created an environment designed toward individual development — focused on the overall growth of our tiny tots. A safe and secure environment leverages children's inherent ability to easily focus on discovery and growth.",
    ],
    imageSrc: '/images/infrastructure/kindergarten-block.png',
    imageAlt: 'AIS Kindergarten block — bright, safe learning environment',
    imagePosition: 'left',
    features: [
      { id: 'safe',      icon: 'Shield',  label: 'Joyful Learning in Safe Environment'           },
      { id: 'hands-on',  icon: 'Hammer',  label: 'Practical Hands-on, Experiential Learning'     },
      { id: 'skills',    icon: 'Brain',   label: 'Instils Confidence & Problem-Solving Skills'   },
      { id: 'transport', icon: 'Bus',     label: 'Well Connected with World-class Transport'     },
    ],
    studentQuote: {
      text: 'My favourite place in school!',
      name: 'Riya, KG B',
    },
  },
  {
    id: 'academic',
    anchorId: 'academic-block',
    eyebrow: 'Core Learning',
    headingPlain: 'Academic',
    headingAccent: 'Block',
    ghostLabel: 'LEARN',
    body: [
      'Alliance has spacious and well-designed classrooms and air-conditioned rooms. All classrooms are equipped with Smart Boards, Audio-Visual Teaching Aids, Overhead Projectors, CCTV and all facilities suiting modern learning arrangements.',
      'From educational films and slide shows in the classrooms, it is possible to improve the academic performance of the students, thereby improving the framework of their learning rooms.',
    ],
    imageSrc: '/images/infrastructure/academic-block.png',
    imageAlt: 'AIS Academic Block — equipped classrooms with modern teaching aids',
    imagePosition: 'right',
    studentQuote: {
      text: 'I actually look forward to class every day.',
      name: 'Aryan, Class 8',
    },
  },
  {
    id: 'infirmary',
    anchorId: 'infirmary',
    eyebrow: 'Medical Care',
    headingPlain: 'Infirmary &',
    headingAccent: 'Medical Facilities',
    ghostLabel: 'CARE',
    body: [
      'A dedicated on-campus infirmary provides immediate attention for minor injuries and illnesses, staffed by a full-time nurse and supported by visiting physicians.',
      'The facility is equipped with a dispensary, isolation room for contagious cases, and established emergency response protocols to ensure student safety and continuity of care.',
    ],
    imageSrc: '/images/infrastructure/medical.png',
    imageAlt: 'AIS Infirmary and Medical Facilities — on-campus nurse and dispensary',
    imagePosition: 'left',
    studentQuote: {
      text: 'The infirmary staff looked after me when I was unwell.',
      name: 'Simran, Class 6',
    },
  },
  {
    id: 'admin',
    anchorId: 'administrative-block',
    eyebrow: 'Administration',
    headingPlain: 'Administrative',
    headingAccent: 'Block',
    ghostLabel: 'MANAGE',
    body: [
      'The Administrative Block is the operational heart of the campus — where admissions, parent communication, academic coordination, and school governance are managed with efficiency and care.',
      'The block is designed for accessibility: parents and visitors can walk in and connect directly with the teams responsible for curriculum, student welfare, and school policy.',
    ],
    imageSrc: '/images/infrastructure/hero-campus.png',
    imageAlt: 'AIS Administrative Block — the operational heart of the campus',
    imagePosition: 'right',
    studentQuote: {
      text: 'Everything runs smoothly here.',
      name: 'Rohan, Class 10',
    },
  },
]

export const facilityInUseItems: FacilityInUseItem[] = [
  { src: '/images/infrastructure/science.jpg',      alt: 'Students conducting science experiments in AIS lab',  label: 'LABS'  },
  { src: '/images/infrastructure/sports-grounds.png', alt: 'AIS students playing sports on the school field',   label: 'FIELD' },
  { src: '/images/infrastructure/medical.png',         alt: 'AIS Medical facilities',                  label: 'INFIRMARY'  },
  { src: '/images/infrastructure/arts-studio.png',   alt: 'AIS students performing on the arts studio stage',   label: 'STAGE' },
]

export const sportsData = {
  anchorId: 'sports-grounds',
  eyebrow: 'Physical Education',
  headingPlain: 'Sports &',
  headingAccent: 'Grounds',
  ghostLabel: 'PLAY',
  imageSrc: '/images/infrastructure/sports-grounds.png',
  imageAlt: 'AIS students at the sports ground during physical education',
  body: [
    'AIS is equipped with a swimming pool, football field, tennis court, cricket ground and basketball court. Apart from these there are many sporting facilities for junior students.',
    'There is regular arrangement for different sports classes through the year with students opting to choose and play a sport of their choice in the after-hours.',
  ],
  features: [
    { id: 'swimming', icon: 'Waves',     label: 'Swimming Pool'    },
    { id: 'football', icon: 'CircleDot', label: 'Football Field'   },
    { id: 'tennis',   icon: 'Activity',  label: 'Tennis Court'     },
    { id: 'cricket',  icon: 'Target',    label: 'Cricket Ground'   },
    { id: 'basket',   icon: 'CircleDot', label: 'Basketball Court' },
    { id: 'track',    icon: 'Timer',     label: 'Running Track'    },
  ],
  competitionsNote: 'Regular intra-school competitions are held on campus to encourage participation and healthy competition.',
}

export const artsData = {
  anchorId: 'arts-fine-arts',
  eyebrow: 'Creative Expression',
  headingPlain: 'Arts &',
  headingAccent: 'Fine Arts Studio',
  ghostLabel: 'CREATE',
  imageSrc: '/images/infrastructure/arts-studio.png',
  imageAlt: 'AIS Arts and Fine Arts Studio — students working on creative projects',
  body: [
    "We believe that students should have extensive exposure to their cultural heritage and should also be given an opportunity to develop their talents in a creative environment to enhance students' inherent abilities.",
    'We provide an Arts and Fine Arts Studio that enables students to build understanding of expression as an enrichment for education and overall life development.',
  ],
  activities: [
    { id: 'drama',       icon: 'Mic2',    label: 'Drama & Theatre'     },
    { id: 'dance',       icon: 'Music',   label: 'Dance'               },
    { id: 'visual',      icon: 'Palette', label: 'Visual Arts & Craft' },
    { id: 'music',       icon: 'Music2',  label: 'Music'               },
    { id: 'calligraphy', icon: 'PenLine', label: 'Calligraphy'         },
    { id: 'photography', icon: 'Camera',  label: 'Photography'         },
  ],
}

export const healthData = {
  anchorId: 'health-wellbeing',
  sectionHeading: { plain: 'Health &', accent: 'Wellbeing' },
  ghostLabel: 'CARE',
  healthServices: {
    icon: 'HeartPulse',
    heading: 'Health Services',
    body: 'Health services include regular health checkup of every student on a regular basis under the guidance of qualified doctors. A fully equipped dispensary ensures immediate medical attention is available within the campus.',
    features: ['Regular Health Checkups', 'Qualified Medical Staff', 'On-Campus Dispensary', 'Emergency Response Protocol'],
  },
  nurse: {
    icon: 'Stethoscope',
    heading: 'Full-Time Nurse',
    body: "An experienced resident full-time nurse cares deeply with a warm, reliable medical team at our campus. The committed nurse maintains a safe and nurturing environment, ensuring each child's health needs are carefully attended to.",
    features: ['Resident Nurse On-Campus', '24hr Student Monitoring', 'First Aid Certified Staff', 'Parent Notification System'],
  },
}

export const staffFacilitiesData = {
  anchorId: 'staff-facilities',
  sectionHeading: { plain: 'Staff', accent: 'Facilities' },
  ghostLabel: 'STAFF',
  quarters: {
    icon: 'Home',
    heading: "Staff's Quarters",
    body: 'The selected fraternity resides at furnished staff quarters provided for teachers. Separate accommodation is provided for housekeeping staff and service personnel.',
  },
  cafeteria: {
    icon: 'UtensilsCrossed',
    heading: 'Self-Service Cafeteria',
    body: 'A fully equipped self-service cafeteria is available for staff and senior students, serving nutritious, hygienic meals prepared with care.',
  },
}

export const transportData = {
  anchorId: 'transport',
  eyebrow: 'Safe Commute',
  headingPlain: 'Transport',
  headingAccent: 'Services',
  ghostLabel: 'COMMUTE',
  body: [
    'AIS provides school transportation to all its students to and from school throughout the year. AIS currently has a bus fleet which is fully in compliance with norms applicable to school buses: each bus has a trained staff member ensuring a safe trip for every student.',
    'All transport vehicles are GPS-tracked and inspected quarterly. Parents can rest assured their child is in safe hands from door to school and back.',
  ],
  imageSrc: '/images/infrastructure/transport.png',
  imageAlt: 'AIS school transport fleet — safe and GPS-tracked buses',
  features: [
    { id: 'gps',     icon: 'MapPin',         label: 'GPS Tracked Vehicles'        },
    { id: 'staff',   icon: 'UserCheck',      label: 'Trained Staff On Every Bus'  },
    { id: 'routes',  icon: 'Route',          label: 'All Major Routes Covered'    },
    { id: 'inspect', icon: 'ClipboardCheck', label: 'Quarterly Safety Inspections' },
  ],
}

export const galleryPhotos: GalleryPhoto[] = [
  { id: 'g1', src: '/images/infrastructure/main.jpg', alt: 'AIS main building facade',       caption: 'Main Building'  },
  { id: 'g2', src: '/images/infrastructure/indoor.jpg', alt: 'AIS indoor corridor',             caption: 'Indoor Spaces'  },
  { id: 'g3', src: '/images/infrastructure/sports-ground.png', alt: 'AIS outdoor sports ground',       caption: 'Sports Grounds' },
  { id: 'g4', src: '/images/infrastructure/kindergarten.jpg', alt: 'AIS kindergarten play area',      caption: 'KG Play Area'   },
  { id: 'g5', src: '/images/infrastructure/science.jpg', alt: 'AIS science laboratory',          caption: 'Science Lab'    },
  { id: 'g6', src: '/images/infrastructure/art.jpg', alt: 'AIS arts and craft studio',       caption: 'Arts Studio'    },
  { id: 'g7', src: '/images/infrastructure/library.jpg', alt: 'AIS library reading room',        caption: 'Library'        },
  { id: 'g8', src: '/images/infrastructure/robotics.jpg', alt: 'AIS swimming pool area',          caption: 'Robotics Lab'  },
]
