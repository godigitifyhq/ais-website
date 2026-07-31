export interface StudentQuote {
  text: string
  name: string
}

export interface BlockGalleryItem {
  src:   string
  alt:   string
  label: string
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
  /**
   * A captioned photo row showing what is actually inside this block. Takes the
   * place of `features` when present — real rooms persuade parents more than
   * icon tiles, and rendering both would double the block's height.
   */
  gallery?: BlockGalleryItem[]
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
      "We've created an environment designed toward individual development — focused on the overall growth of our tiny tots. Corridors are low-lit, colour-coded and lined with porthole windows at a child's eye level, so even the walk to class is part of the learning.",
      'Beyond the classroom door sits a fenced early-years play zone of its own: swings, a trampoline, a multi-level climbing structure with slides, and the Alliance toy train — all on soft grass, all within sight of supervising staff.',
    ],
    imageSrc: '/images/infrastructure/kg-corridor.jpg',
    imageAlt: 'AIS Kindergarten corridor — bright colours, porthole windows, and play equipment',
    imagePosition: 'left',
    gallery: [
      { src: '/images/infrastructure/play-zone.jpg',      alt: 'AIS early-years play zone with swings, trampoline and shaded gazebo', label: 'Play Zone'      },
      { src: '/images/infrastructure/play-structure.jpg', alt: 'Multi-level play structure with slides and climbing nets',            label: 'Slides & Climbs' },
      { src: '/images/infrastructure/play-train.jpg',     alt: 'The Alliance toy train ride in the kindergarten garden',              label: 'Toy Train'      },
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
      'The block is more than its classrooms. A reference library with individual reading carrels, periodicals and a newspaper stand sits alongside a full computer lab — so research, reading and hands-on practice all happen under one roof.',
    ],
    imageSrc: '/images/infrastructure/classroom.jpg',
    imageAlt: 'An AIS classroom — spacious, naturally lit, with individual desks',
    imagePosition: 'right',
    gallery: [
      { src: '/images/infrastructure/library-reading.jpg',   alt: 'AIS library reading room with individual carrels and periodical racks', label: 'Library'       },
      { src: '/images/infrastructure/computer-lab.jpg',      alt: 'AIS computer lab with individual workstations',                        label: 'Computer Lab'  },
      { src: '/images/infrastructure/academic-corridor.jpg', alt: 'Academic block corridor lined with student display boards',             label: 'The Corridors' },
    ],
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

// NOTE: FacilityInUseSection was removed from the page — it sat directly below
// CampusGalleryStrip and showed the same campus in the same way, costing a full
// extra screen of scrolling for no new information. Data kept in case the band
// is wanted elsewhere.
export const facilityInUseItems: FacilityInUseItem[] = [
  { src: '/images/infrastructure/science.jpg',      alt: 'Students conducting science experiments in AIS lab',  label: 'LABS'  },
  { src: '/images/infrastructure/main-ground.jpg',  alt: 'AIS students playing sports on the school field',     label: 'FIELD' },
  { src: '/images/infrastructure/medical.png',      alt: 'AIS Medical facilities',                              label: 'INFIRMARY'  },
  { src: '/images/infrastructure/arts-studio.png',  alt: 'AIS students performing on the arts studio stage',    label: 'STAGE' },
]

export const sportsData = {
  anchorId: 'sports-grounds',
  eyebrow: 'Physical Education',
  headingPlain: 'Sports &',
  headingAccent: 'Grounds',
  ghostLabel: 'PLAY',
  imageSrc: '/images/infrastructure/courts.jpg',
  imageAlt: 'AIS all-weather basketball and volleyball courts',
  body: [
    'Sport at Alliance is not an afterthought squeezed into a corner of the campus — it has its own ground. All-weather synthetic courts host basketball, volleyball and tennis, while a full-size open field carries athletics, football and cricket through the season.',
    'A dedicated net enclosure lets cricketers train on batting and bowling year-round, whatever is happening on the main ground. Sports classes run right through the year, and students choose the discipline they want to pursue in the after-hours.',
  ],
  gallery: [
    { src: '/images/infrastructure/courts.jpg',       alt: 'All-weather basketball and volleyball courts at AIS',        label: 'All-Weather Courts' },
    { src: '/images/infrastructure/main-ground.jpg',  alt: 'The main open ground at AIS used for athletics and cricket', label: 'The Main Ground'    },
    { src: '/images/infrastructure/cricket-nets.jpg', alt: 'Covered cricket practice nets at AIS',                       label: 'Cricket Nets'       },
  ] as BlockGalleryItem[],
  features: [
    { id: 'basket',     icon: 'CircleDot', label: 'Basketball Court'  },
    { id: 'volleyball', icon: 'Volleyball',label: 'Volleyball Court'  },
    { id: 'tennis',     icon: 'Activity',  label: 'Tennis Court'      },
    { id: 'cricket',    icon: 'Target',    label: 'Cricket Nets & Ground' },
    { id: 'football',   icon: 'CircleDot', label: 'Football Field'    },
    { id: 'track',      icon: 'Timer',     label: 'Athletics Track'   },
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
  intro: 'A teacher who is looked after teaches better. Alliance gives its faculty proper space to plan, mark and think — not a corner of a classroom.',
  spaces: [
    {
      id:      'workroom',
      src:     '/images/infrastructure/staff-workroom.jpg',
      alt:     'AIS faculty workroom with individual planning desks',
      heading: 'Faculty Workrooms',
      body:    'Individual planning desks with partitions, so lesson preparation and marking happen in quiet, dedicated space.',
    },
    {
      id:      'staffroom',
      src:     '/images/infrastructure/staff-room.jpg',
      alt:     'The AIS staff room — shared desks and collaboration space',
      heading: 'The Staff Room',
      body:    'A shared room where departments meet, co-plan across subjects, and hand over between shifts.',
    },
    {
      id:      'pantry',
      src:     '/images/infrastructure/staff-pantry.jpg',
      alt:     'AIS staff pantry with refreshment counter',
      heading: 'Pantry & Cafeteria',
      body:    'An in-house pantry for refreshments, plus a self-service cafeteria serving nutritious, hygienic meals to staff and senior students.',
    },
  ],
  quartersNote: 'Furnished on-campus quarters are provided for resident teaching staff, with separate accommodation for housekeeping and service personnel.',
}

export const transportData = {
  anchorId: 'transport',
  eyebrow: 'Safe Commute',
  headingPlain: 'Transport',
  headingAccent: 'Services',
  ghostLabel: 'COMMUTE',
  body: [
    'AIS runs its own fleet — full-size buses for the longer routes and smaller vans for the closer neighbourhoods — covering a 50km radius around Banur throughout the year. Every vehicle complies in full with CBSE and state norms applicable to school transport.',
    'Each bus carries a trained staff member alongside the driver, so no child travels unaccompanied. Vehicles are GPS-tracked and inspected quarterly, and the school contact number is printed on every bus. From the front gate to your door, your child stays in sight.',
  ],
  imageSrc: '/images/infrastructure/transport-fleet.jpg',
  imageAlt: 'The Alliance International School bus fleet lined up at the school gate',
  features: [
    { id: 'gps',     icon: 'MapPin',         label: 'GPS Tracked Vehicles'        },
    { id: 'staff',   icon: 'UserCheck',      label: 'Trained Staff On Every Bus'  },
    { id: 'routes',  icon: 'Route',          label: 'All Major Routes Covered'    },
    { id: 'inspect', icon: 'ClipboardCheck', label: 'Quarterly Safety Inspections' },
  ],
}

// Five tiles: one 2×2 feature plus four. Kept deliberately short — the campus
// blocks below already carry their own photography, and the full set lives at
// /gallery.
export const galleryPhotos: GalleryPhoto[] = [
  { id: 'g1', src: '/images/infrastructure/play-swings.jpg', alt: 'AIS early-years play area with swings and merry-go-round', caption: 'Early-Years Play' },
  { id: 'g2', src: '/images/infrastructure/science.jpg',     alt: 'AIS science laboratory',                                   caption: 'Science Lab'      },
  { id: 'g3', src: '/images/infrastructure/main-ground.jpg', alt: 'The main open ground at AIS',                              caption: 'The Main Ground'  },
  { id: 'g4', src: '/images/infrastructure/arts-studio.png', alt: 'AIS students performing on the arts studio stage',         caption: 'Arts Studio'      },
  { id: 'g5', src: '/images/infrastructure/robotics.jpg',    alt: 'AIS Robotics Lab',                                         caption: 'Robotics Lab'     },
]
