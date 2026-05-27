import type { SkewedSection } from '@/data/educators'

// -------------------------------------------------------
// TYPE DEFINITIONS
// -------------------------------------------------------

export interface LifePillar {
  id:      string
  icon:    string          // lucide-react icon name
  heading: string
  body:    string
  variant: 'light' | 'dark'
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
    id:      'joy',
    icon:    'Smile',
    heading: 'Joy of Learning',
    body:    'Every day at AIS is designed to be meaningful. Children learn through doing, not just listening.',
    variant: 'light',
  },
  {
    id:      'safety',
    icon:    'Shield',
    heading: 'A Safe Community',
    body:    'Zero compromise on safety. Supervised at all times, on campus and off it.',
    variant: 'dark',
  },
  {
    id:      'expression',
    icon:    'Palette',
    heading: 'Creative Expression',
    body:    'Art, music, drama, and craft are not extras — they are core to who we are.',
    variant: 'dark',
  },
  {
    id:      'leadership',
    icon:    'Users',
    heading: 'Student Leadership',
    body:    'From the Student Council to MUN, every child is given a platform to lead.',
    variant: 'dark',
  },
  {
    id:      'global',
    icon:    'Globe',
    heading: 'Global Exposure',
    body:    'Exchange programmes, international competitions, and global curricula connect our students to the world.',
    variant: 'light',
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
  imageSrc:      '/images/life/student-council.jpg',
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
  first:  { src: '/images/life_at_alliance/breather-campus-life.png',   alt: 'AIS students enjoying campus life together'   },
  second: { src: '/images/life_at_alliance/event-wide.png', alt: 'AIS annual outdoor school event, wide view'  },
}
