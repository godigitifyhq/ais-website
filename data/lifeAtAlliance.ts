import type { SkewedSection } from '@/data/educators'

// -------------------------------------------------------
// TYPE DEFINITIONS
// -------------------------------------------------------

export interface LifePillar {
  id:       string
  icon:     string          // lucide-react icon name
  heading:  string
  body:     string
  variant:  'light' | 'dark'
  image?:   string          // lively photo depicting this pillar
  oneliner?: string         // max 8 words, shown on image card
}

export interface ActivityCard {
  id:       string
  label:    string         // shown as overlay label on photo
  imageSrc: string
  imageAlt: string
}

export interface ActivityListItem {
  id:   string
  name: string
}

export interface LifeSection extends SkewedSection {
  anchorId:   string
  highlight?: string
}

// -------------------------------------------------------
// PHILOSOPHY INTRO
// -------------------------------------------------------

export const philosophyIntro = {
  eyebrow:       'OUR APPROACH TO LEARNING',
  headingLine1:  'Going Beyond the',
  headingLine2:  '"Best" when best is',
  headingAccent: 'Not Enough.',
  ghostLabel:    'BEYOND',
  leftBody: [
    'Traditional study materials are designed with the assumption that teachers will instruct, and students will adhere to them. In Alliance curriculum, children often learn by themselves — teachers are facilitators.',
    'Children learn through application and discovery, making deductive and visually rich study materials and student-friendly textbooks more effective than traditional ones.',
    "A year's coursework is segmented into semesters and periods, which lightens the workload. Children find satisfaction in completing each semester and eagerly anticipate the next one.",
  ],
  rightBody: [
    "Research shows that if we double the thinking time, we double a child's performance. At the end of each semester or period there is a diagnostic test for evaluation.",
    'After gaining tactile understanding, children proceed to engage with "creative worksheets" designed in visually creative ways, encouraging self-learning and discovery. Each unit is subdivided into short modules, progressing from easy to difficult.',
    'Mathematics and English grammar become engaging for each child, fostering effective and joyful progress and intrinsic motivation.',
  ],
}

// -------------------------------------------------------
// PILLARS OF LIFE AT AIS
// -------------------------------------------------------

export const lifePillars: LifePillar[] = [
  {
    id:       'joy',
    icon:     'Smile',
    heading:  'Joy of Learning',
    body:     'Every day at AIS is designed to be meaningful. Children learn through doing, not just listening.',
    variant:  'light',
    image:    '/images/life_at_alliance/breather-campus-life.png',
    oneliner: 'Learning that feels like play',
  },
  {
    id:       'safety',
    icon:     'Shield',
    heading:  'A Safe Community',
    body:     'Zero compromise on safety. Supervised at all times, on campus and off it.',
    variant:  'dark',
    image:    '/images/life_at_alliance/env.png',
    oneliner: 'Every child, always protected',
  },
  {
    id:       'expression',
    icon:     'Palette',
    heading:  'Creative Expression',
    body:     'Art, music, drama, and craft are not extras — they are core to who we are.',
    variant:  'dark',
    image:    '/images/life_at_alliance/art-craft.png',
    oneliner: 'Art lives in every lesson',
  },
  {
    id:       'leadership',
    icon:     'Users',
    heading:  'Student Leadership',
    body:     'From the Student Council to MUN, every child is given a platform to lead.',
    variant:  'dark',
    image:    '/images/life_at_alliance/mun.png',
    oneliner: 'Leaders born on every stage',
  },
  {
    id:       'global',
    icon:     'Globe',
    heading:  'Global Exposure',
    body:     'Exchange programmes, international competitions, and global curricula connect our students to the world.',
    variant:  'light',
    image:    '/images/home/nasa.png',
    oneliner: 'Connected to the world outside',
  },
]

// -------------------------------------------------------
// ACTIVITY LIST (scannable two-column)
// -------------------------------------------------------

export const activityList: ActivityListItem[] = [
  { id: 'theatre',      name: 'Theatre'           },
  { id: 'dance',        name: 'Dance'             },
  { id: 'music',        name: 'Music'             },
  { id: 'swimming',     name: 'Swimming'          },
  { id: 'speaking',     name: 'Public Speaking'   },
  { id: 'astronomy',    name: 'Astronomy'         },
  { id: 'robotics',     name: 'Robotics'          },
  { id: 'library',      name: 'Library Programme' },
  { id: 'trips',        name: 'Trips & Expeditions' },
  { id: 'coding',       name: 'Coding'            },
  { id: 'basketball',   name: 'Basketball'        },
  { id: 'cricket',      name: 'Cricket'           },
  { id: 'textile',      name: 'Textile'           },
  { id: 'arts',         name: 'Arts & Craft'      },
  { id: 'taekwondo',    name: 'Taekwondo'         },
  { id: 'football',     name: 'Football'          },
  { id: 'pottery',      name: 'Pottery'           },
  { id: 'horticulture', name: 'Horticulture'      },
  { id: 'sports',       name: 'Sports'            },
  { id: 'council',      name: 'Student Council'   },
  { id: 'health',       name: 'Health & Nutrition' },
  { id: 'weaving',      name: 'Weaving'           },
  { id: 'calligraphy',  name: 'Calligraphy'       },
  { id: 'chess',        name: 'Chess'             },
]

// -------------------------------------------------------
// ACTIVITY PHOTO CARDS (Orchids-style grid)
// -------------------------------------------------------

export const activityCards: ActivityCard[] = [
  { id: 'astronomy-card',    label: 'ASTRONOMY',      imageSrc: '/images/life/activity-astronomy.jpg',    imageAlt: 'AIS students in astronomy club'            },
  { id: 'diy-card',          label: 'DIY LAB',         imageSrc: '/images/life/activity-diy-lab.jpg',      imageAlt: 'AIS students in DIY lab building projects' },
  { id: 'horticulture-card', label: 'HORTICULTURE',    imageSrc: '/images/life/activity-horticulture.jpg', imageAlt: 'AIS students tending to school garden'     },
  { id: 'speaking-card',     label: 'PUBLIC SPEAKING', imageSrc: '/images/life/activity-speaking.jpg',     imageAlt: 'AIS student at public speaking event'      },
  { id: 'robotics-card',     label: 'ROBOTICS',        imageSrc: '/images/life/activity-robotics.jpg',     imageAlt: 'AIS students working on robotics project'  },
  { id: 'sports-card',       label: 'SPORTS',          imageSrc: '/images/life/activity-sports.jpg',       imageAlt: 'AIS students at outdoor sports event'      },
]

// -------------------------------------------------------
// MAIN LIFE SECTIONS (SkewedContentCard)
// -------------------------------------------------------

export const lifeSections: LifeSection[] = [
  {
    id:            'hostel',
    anchorId:      'hostel-life',
    eyebrow:       'Boarding',
    headingPlain:  'Hostel',
    headingAccent: 'Life',
    ghostLabel:    'HOME',
    body: [
      'Hostel Life at Alliance International School offers students a nurturing residential environment where they live, learn, and grow together beyond the classroom. The school provides well-maintained boarding facilities for both boys and girls, with options that cater to students seeking a structured "home away from home" experience.',
      'Boarding at AIS includes comfortable accommodation, nutritious meals, and a supportive community that helps students develop independence, responsibility, and lifelong friendships.',
      "The boarding facilities operate within the school's secure campus setting, balancing academics and well-being while offering opportunities for students to balance academics, extra-curricular activities, sports, and personal growth throughout their stay.",
    ],
    imageSrc:      '/images/life_at_alliance/hostel-life.png',
    imageAlt:      'AIS hostel — warm, secure boarding accommodation',
    imagePosition: 'right',
    highlight:     'Separate boarding for boys & girls',
  },
  {
    id:            'arts',
    anchorId:      'art-and-craft',
    eyebrow:       'Creative Expression',
    headingPlain:  'Art &',
    headingAccent: 'Craft',
    ghostLabel:    'CREATE',
    body: [
      'Like music, art is deeply embedded in the school curriculum. Students are strongly encouraged to explore various mediums to craft expression with freedom. We promote freedom, yet it is complemented by a well-structured and supervised curriculum and guidance.',
      'The Art and Craft club embodies this philosophy and is expressed through regular art exhibitions that celebrate diversity in culture, thought, and spirit.',
    ],
    imageSrc:      '/images/life_at_alliance/art-craft.png',
    imageAlt:      'AIS students working on art and craft projects',
    imagePosition: 'left',
  },
  {
    id:            'clubs',
    anchorId:      'clubs',
    eyebrow:       'Student Clubs',
    headingPlain:  'Clubs &',
    headingAccent: 'Societies',
    ghostLabel:    'DEBATE',
    body: [
      'Mock United Nations and Parliamentary Debate Competitions were initiated at Alliance International School as a formal society at SFHS in 2010. Today the MUN and PDC club has the largest pool of student enrolments. Each year a new group of eager, motivated students becomes the backbone of the club.',
      'Alliance International School MUN Secretariat and Organising Committee are elected through a transparent and democratic process. The annual AIS MUN and PDC has participation from leading schools across the country, offering students a unique experience of panel discussions, concerts, and an opportunity to meet with prominent leaders.',
    ],
    imageSrc:      '/images/life_at_alliance/mun.png',
    imageAlt:      'AIS students at Mock United Nations conference',
    imagePosition: 'right',
    highlight:     'Largest MUN enrolment in the region',
  },
  {
    id:            'literary',
    anchorId:      'literary-quizzing',
    eyebrow:       'Language & Knowledge',
    headingPlain:  'Literary &',
    headingAccent: 'Quizzing',
    ghostLabel:    'WORDS',
    body: [
      'The Literary Society nurtures public speaking, creative writing and all other literary pursuits in Hindi and English. The culmination of the year-long work by the Language Department is showcased through two events — the Interschool Wordsmiths and the Inter-house Shiksha Shloka. New genres of speech, writing and oratory are explored and celebrated.',
      'Additionally there is regular Quizzing that caters to the diverse interests of the students including Spell Bees, Just A Minute, Trivia and other formats designed to build interest in the finer details and to sharpen skills of collection and recall of information. This programme defines the calibre of every quiz master in the making.',
    ],
    imageSrc:      '/images/life_at_alliance/literary.png',
    imageAlt:      'AIS students at the annual Wordsmiths literary event',
    imagePosition: 'left',
  },
  
]

// -------------------------------------------------------
// ACTIVITY-BASED LEARNING (editorial, no image card)
// -------------------------------------------------------

export const activityBasedLearning = {
  eyebrow:       'LEARNING PHILOSOPHY',
  headingPlain:  'Activity-Based',
  headingAccent: 'Learning',
  ghostLabel:    'DISCOVER',
  leftBody: [
    'Activity-based learning at our school focuses on helping students understand concepts through hands-on experiences rather than passive listening. Instead of simply absorbing information, students engage directly with tasks, experiments, projects, and real-life problem-solving activities that make learning meaningful and memorable.',
    'This approach encourages curiosity, collaboration, and critical thinking as students work individually and in groups to explore ideas and discover outcomes on their own.',
  ],
  rightBody: [
    'Activity-based learning is integrated across disciplines such as science, mathematics, languages, social studies, and computer science. Each activity is designed with clear learning objectives and supported with relevant materials, manipulatives, and tools.',
    'Subjects and Specialisations ensure that students connect theoretical knowledge with practical application. This method helps strengthen understanding, boosts retention, and builds confidence by allowing students to learn through doing.',
  ],
}

// -------------------------------------------------------
// STUDENT COUNCIL
// -------------------------------------------------------

export const studentCouncil = {
  eyebrow:       'STUDENT GOVERNANCE',
  headingPlain:  'Student',
  headingAccent: 'Council',
  ghostLabel:    'LEAD',
  body: [
    'The Student Council is an important student-led body of the school and serves to engage students in learning about democracy and leadership.',
    'The Council shares opinions as well as generates ideas on various student matters affecting their learning, wellbeing and welfare. It provides students an avenue for identifying a variety of issues affecting them and suggesting innovative, yet implementable solutions.',
    "Being a part of the Student Council is an enriching experience, but the position comes with great responsibility. It is also an unparalleled opportunity to display and hone one's leadership skills and abilities.",
  ],
  imageSrc:      '/images/life_at_alliance/student-council.png',
  imageAlt:      'AIS Student Council members at school assembly',
  imagePosition: 'right' as const,
  stats: [
    { id: 'elected', label: 'Democratically Elected', icon: 'Vote'      },
    { id: 'impact',  label: 'School-Wide Impact',     icon: 'Megaphone' },
    { id: 'honed',   label: 'Leadership Developed',   icon: 'Star'      },
  ],
}

// -------------------------------------------------------
// BREATHER IMAGES (full-bleed cinematic, SFHS-style)
// -------------------------------------------------------

export const breatherImages = {
  first:  { src: '/images/life_at_alliance/breather-image.png',   alt: 'AIS students enjoying campus life together'   },
  second: { src: '/images/life_at_alliance/event-wide.png', alt: 'AIS annual outdoor school event, wide view'  },
}

// -------------------------------------------------------
// ACTIVITY SHOWCASE GRID (replaces ActivityListAndGrid)
// -------------------------------------------------------

export interface ActivityShowcaseItem {
  id:          string
  label:       string
  description: string    // 1-line, shown on hover
  imageSrc:    string
  imageAlt:    string
}

export const activityShowcaseItems: ActivityShowcaseItem[] = [
  {
    id:          'showcase-theatre',
    label:       'Theatre & Drama',
    description: 'Stage performances that build confidence and expression',
    imageSrc:    '/images/home/events.png',
    imageAlt:    'AIS students in a theatre performance',
  },
  {
    id:          'book-fair',
    label:       'Book Fair',
    description: 'Trained coaches in a full-size competition pool',
    imageSrc:    '/images/life_at_alliance/book-fare.png',
    imageAlt:    'AIS students swimming in the school pool',
  },
  {
    id:          'showcase-robotics',
    label:       'Robotics & STEM',
    description: 'Hands-on engineering from Class 3 onwards',
    imageSrc:    '/images/home/robotics-lab.png',
    imageAlt:    'AIS students working on robotics projects',
  },
  {
    id:          'showcase-music',
    label:       'Music & Arts',
    description: 'Classical and contemporary — every genre welcomed',
    imageSrc:    '/images/infrastructure/arts-studio.png',
    imageAlt:    'AIS students in the arts and music studio',
  },
  {
    id:          'showcase-nasa',
    label:       'Educational Trips & Tours',
    description: 'Exploring the world of ccience at NASA ',
    imageSrc:    '/images/home/nasa.png',
    imageAlt:    'AIS students at NASA Tour',
  },
  {
    id:          'showcase-ncc',
    label:       'National Cadet Corps(NCC)',
    description: 'Discipline, Dedication, and Patriotism',
    imageSrc:    '/images/life_at_alliance/ncc.png',
    imageAlt:    'AIS students in NCC',
  },
  {
    id:          'showcase-pool',
    label:       'Swimming & Pool Activities',
    description: 'Beat the heat with water and fun',
    imageSrc:    '/images/life_at_alliance/pool.png',
    imageAlt:    'AIS students in Swimming activities',
  },
  {
    id:          'showcase-sports',
    label:       'Sports & Athletics',
    description: 'Cricket, football, basketball, taekwondo and more',
    imageSrc:    '/images/home/sports.png',
    imageAlt:    'AIS students at annual sports day',
  },
  {
    id:          'showcase-leadership',
    label:       'Leadership & Confidence',
    description: 'Themed Assembly, Parrade, student council,and more',
    imageSrc:    '/images/life_at_alliance/student-lead.png',
    imageAlt:    'AIS students at annual sports day',
  }
]

// Secondary activities shown as pills
export const secondaryActivities = [
  'MUN & Debate', 'Public Speaking', 'Pottery', 'Calligraphy',
  'Horticulture', 'Chess', 'Coding', 'Basketball', 'Cricket',
  'Taekwondo', 'Weaving', 'Yoga', 'Library Club', 'Photography',
]

// -------------------------------------------------------
// ACTIVITY BASED LEARNING — Image Grid
// -------------------------------------------------------

export interface ActivityBasedImage {
  src:          string
  alt:          string
  activityLabel: string
}

export const activityBasedImages: ActivityBasedImage[] = [
  {
    src:          '/images/infrastructure/science.jpg',
    alt:          'Students conducting science experiments in the lab',
    activityLabel: 'Science through experiments',
  },
  {
    src:          '/images/life_at_alliance/teacher-activity.png',
    alt:          'Teacher facilitating group maths activity',
    activityLabel: 'Maths through real objects',
  },
  {
    src:          '/images/life_at_alliance/mun.png',
    alt:          'Students in a history role-play activity',
    activityLabel: 'History through role play',
  },
  {
    src:          '/images/life_at_alliance/art-craft.png',
    alt:          'Students in art class expressing creativity',
    activityLabel: 'Art as expression',
  },
  {
    src:          '/images/life_at_alliance/student-sports.png',
    alt:          'Teacher coaching students on sports field',
    activityLabel: 'Sports as leadership',
  },
  {
    src:          '/images/life_at_alliance/image.png',
    alt:          'Students using technology to solve real problems',
    activityLabel: 'Tech as a tool',
  },
]

// -------------------------------------------------------
// DAY TIMELINE (DayAtAISTimeline)
// -------------------------------------------------------

export interface TimelineItem {
  time:     string
  title:    string
  description: string
  imageSrc: string
  imageAlt: string
}

export const dayTimeline: TimelineItem[] = [
  {
    time:        '6:30 AM',
    title:       'Wake-Up & Morning Yoga',
    description: 'Hostel students start fresh with guided yoga on the grounds.',
    imageSrc:    '/images/life_at_alliance/breather-campus-life.png',
    imageAlt:    'AIS students doing morning yoga on campus grounds',
  },
  {
    time:        '7:30 AM',
    title:       'Breakfast & Assembly',
    description: 'Nutritious breakfast followed by the morning assembly.',
    imageSrc:    '/images/life_at_alliance/event-wide.png',
    imageAlt:    'AIS morning assembly with students on grounds',
  },
  {
    time:        '8:15 AM',
    title:       'Classes Begin',
    description: 'Smart classrooms, engaged teachers, curious learners.',
    imageSrc:    '/images/educators/teachers-as-learners.jpg',
    imageAlt:    'AIS teacher at whiteboard with students engaged',
  },
  {
    time:        '12:30 PM',
    title:       'Lunch Break',
    description: 'Home-style nutritious meals in a vibrant cafeteria.',
    imageSrc:    '/images/infrastructure/academic-block.png',
    imageAlt:    'AIS students enjoying lunch in the school cafeteria',
  },
  {
    time:        '1:15 PM',
    title:       'Activity Period',
    description: 'Robotics, music, drama, art — students choose their passion.',
    imageSrc:    '/images/home/Robolab1.png',
    imageAlt:    'AIS students in activity period doing robotics',
  },
  {
    time:        '3:30 PM',
    title:       'Sports & Play',
    description: 'Cricket, football, swimming — energy, competition, fun.',
    imageSrc:    '/images/home/sport.png',
    imageAlt:    'AIS students playing sports on the school field',
  },
  {
    time:        '5:30 PM',
    title:       'Hostel Study Hour',
    description: 'Supervised study groups — guided, not pressured.',
    imageSrc:    '/images/life_at_alliance/mun.png',
    imageAlt:    'AIS hostel students studying together in groups',
  },
  {
    time:        '8:00 PM',
    title:       'Dinner & Recreation',
    description: 'The day ends with warmth, stories, and community.',
    imageSrc:    '/images/life_at_alliance/breather-campus-life.png',
    imageAlt:    'AIS students at hostel common room in the evening',
  },
]

// -------------------------------------------------------
// EXCELLENCE MARQUEE
// -------------------------------------------------------

export interface ExcellenceImage {
  src: string
  alt: string
}

export const excellenceImages: ExcellenceImage[] = [
  { src: '/images/life_at_alliance/breather-campus-life.png', alt: 'AIS students celebrating achievement'             },
  { src: '/images/home/sports.png',                          alt: 'AIS athlete competing in sports event'            },
  { src: '/images/life_at_alliance/art-craft.png',           alt: 'AIS student winning art competition'              },
  { src: '/images/home/robotics-lab.png',                    alt: 'AIS robotics team at competition'                 },
  { src: '/images/life_at_alliance/mun.png',                 alt: 'AIS student at MUN conference'                    },
  { src: '/images/infrastructure/science.jpg',               alt: 'AIS student at science fair'                      },
  { src: '/images/home/nasa.png',                            alt: 'AIS student astronomy club activity'              },
  { src: '/images/home/events.png',                          alt: 'AIS student at public speaking competition'       },
  { src: '/images/life_at_alliance/pool.png',                alt: 'AIS swimming champion at pool'                    },
  { src: '/images/life_at_alliance/hostel-life.png',         alt: 'AIS students at outdoor adventure activity'       },
  { src: '/images/infrastructure/arts-studio.png',           alt: 'AIS student performing on stage'                  },
  { src: '/images/infrastructure/hero-campus.png',           alt: 'AIS students at co-curricular achievement event'  },
]
