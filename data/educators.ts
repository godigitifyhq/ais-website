// ─── INTERFACES ──────────────────────────────────────────────────────────────

import type { SkewedSection } from '@/types'
export type { SkewedSection }

export interface Stat {
  id:     string
  value:  number
  suffix: string
  label:  string
}

export interface TeacherProfile {
  id:            string
  name:          string
  role:          string
  qualification: string
  imageSrc:      string
  imageAlt:      string
  quote?:        string
}

// ─── SKEWED CONTENT SECTIONS ──────────────────────────────────────────────────

export const educatorSections: SkewedSection[] = [
  {
    id:            'learners',
    ghostLabel:    'LEARNERS',
    eyebrow:       'Teachers as',
    headingPlain:  'Teachers as',
    headingAccent: 'Learners',
    body: [
      'Our teachers learn from students as much as students learn from them — a continuous, mutual journey.',
    ],
    bullets: [
      'Curiosity-first classrooms',
      'Globally recognised methods',
      'Traditional wisdom meets modern pedagogy',
    ],
    ctaLabel:      'Meet Our Faculty',
    ctaHref:       '/educators#faculty',
    imageSrc:      '/images/educators/teachers-as-learners.png',
    imageAlt:      'AIS teacher engaged in a classroom discussion with students',
    imagePosition: 'left',
  },
  {
    id:            'support',
    ghostLabel:    'SUPPORT',
    eyebrow:       'Teachers as',
    headingPlain:  'Teachers as Support',
    headingAccent: 'System',
    body: [
      'Guides and facilitators — not lecturers. AIS educators adapt to every learning pace and style.',
    ],
    bullets: [
      'One-on-one guidance when needed',
      'Group and individual approaches',
      'Safe space for every question',
    ],
    imageSrc:      '/images/educators/teacher-as-support.png',
    imageAlt:      'AIS teacher guiding a student one-on-one',
    imagePosition: 'right',
  },
  {
    id:            'teachers',
    ghostLabel:    'QUALIFIED',
    eyebrow:       'Teachers as',
    headingPlain:  'Trained &',
    headingAccent: 'Experienced Teachers',
    body: [
      'Advanced degrees, regular workshops, and global standards — our faculty never stops growing.',
    ],
    bullets: [
      'Post-graduate qualified faculty',
      'Regular upskilling & retraining',
      'Global teaching methodology exposure',
    ],
    ctaLabel:      'View Qualifications',
    ctaHref:       '/educators#qualifications',
    imageSrc:      '/images/educators/teacher-training.png',
    imageAlt:      'AIS faculty in a professional development workshop',
    imagePosition: 'left',
  },
  {
    id:            'beyond',
    ghostLabel:    'BEYOND',
    eyebrow:       'Going',
    headingPlain:  'Beyond',
    headingAccent: 'Academics',
    body: [
      'Teachers at AIS spot talent early — in academics, arts, sports, and performance — and nurture it.',
    ],
    bullets: [
      'Co-curricular mentorship',
      'Early talent identification',
      'Holistic growth across all domains',
    ],
    ctaLabel:      'Explore Activities',
    ctaHref:       '/life-at-alliance',
    imageSrc:      '/images/educators/teachers-beyond-academics.png',
    imageAlt:      'AIS students engaged in co-curricular activities with a teacher',
    imagePosition: 'right',
  },
  {
    id:            'mentors',
    ghostLabel:    'MENTORS',
    eyebrow:       'Teachers as',
    headingPlain:  'Guides &',
    headingAccent: 'Mentors',
    body: [
      'Senior faculty at AIS go beyond classrooms — they guide our working members, ensuring smooth operations and passing on institutional values.',
    ],
    bullets: [
      'On-site mentoring for support staff and DAs',
      'Workshops on safety, maintenance and school routines',
      'A strengthening pillar of Alliance’s culture',
    ],
    ctaLabel:      'Read Our Mentorship Work',
    ctaHref:       '/educators#mentorship',
    imageSrc:      '/images/educators/senior-guiding-staff.png',
    imageAlt:      'Senior faculty conducting a workshop for support staff and DAs',
    imagePosition: 'left',
  },
]

// ─── STATS ────────────────────────────────────────────────────────────────────

export const educatorStats: Stat[] = [
  { id: 'experience', value: 8,   suffix: '+',  label: 'Years of Excellence'        },
  { id: 'faculty',    value: 50,  suffix: '+',  label: 'Qualified Educators'        },
  { id: 'trained',    value: 100, suffix: '%',  label: 'Professionally Trained'     },
  { id: 'ratio',      value: 20,  suffix: ':1', label: 'Student–Teacher Ratio'      },
]

// ─── QUOTE ────────────────────────────────────────────────────────────────────

export const managementQuote = {
  text:        'Teachers who love teaching, teach children to love learning.',
  attribution: 'Robert John Meehan',
}

// ─── TEACHER PROFILES ─────────────────────────────────────────────────────────

// ─── TEACHING ACTION IMAGES ──────────────────────────────────────────────────

export interface TeachingActionImage {
  src:          string
  alt:          string
  activityLabel: string
}

export const teachingActionImages: TeachingActionImage[] = [
  {
    src:          '/images/educators/science.png',
    alt:          'AIS teacher facilitating science experiment with students',
    activityLabel: 'Hands-on Science',
  },
  {
    src:          '/images/educators/teacher-with-student.png',
    alt:          'AIS teacher engaged in collaborative maths activity',
    activityLabel: 'Collaborative Maths',
  },
  {
    src:          '/images/educators/guided-learning.png',
    alt:          'AIS teacher guiding reading in the school library',
    activityLabel: 'Guided Reading',
  },
  {
    src:          '/images/educators/sports.png',
    alt:          'AIS sports coach training students on the field',
    activityLabel: 'Sports Coaching',
  },
  {
    src:          '/images/educators/art-teacher.png',
    alt:          'AIS arts teacher facilitating student art project',
    activityLabel: 'Art Facilitation',
  },
  {
    src:          '/images/educators/real-world-solve.png',
    alt:          'AIS teacher guiding students through robotics problem-solving',
    activityLabel: 'Real-World Problem Solving',
  },
]

// ─── TEACHER PROFILES ─────────────────────────────────────────────────────────

export const teacherProfiles: TeacherProfile[] = [
  {
    id:            'navdeesh-kaur',
    name:          'Ms. Navdeesh Kaur',
    role:          'Admin Head',
    qualification: 'B.Com, M.Com, B.Ed, Ph.D. Pursuing',
    imageSrc:      '/images/educators/ms-navdeesh-kaur.png',
    imageAlt:      'Ms. Navdeesh Kaur, Admin Head at Alliance International School',
  },
  {
    id:            'ishu-pathania',
    name:          'Ms. Ishu Pathania',
    role:          'PRO',
    qualification: 'M.A. (Fine Arts), MBA, B.Ed',
    imageSrc:      '/images/educators/ms-ishu-pathania.png',
    imageAlt:      'Ms. Ishu Pathania, PRO at Alliance International School',
  },
  {
    id:            'shivali-sharma',
    name:          'Dr. Shivali Sharma',
    role:          'Academic Head',
    qualification: 'M.A. (English), B.Ed, PGDJMC, Ph.D.',
    imageSrc:      '/images/educators/dr-shivali-sharma.png',
    imageAlt:      'Dr. Shivali Sharma, Academic Head at Alliance International School',
  },
  {
    id:            'maninder-kaur',
    name:          'Ms. Maninder Kaur',
    role:          'Senior Coordinator',
    qualification: 'Masters in Sociology, B.Ed, Pursuing M.Ed, CTET qualified',
    imageSrc:      '/images/educators/ms-maninder-kaur.png',
    imageAlt:      'Ms. Maninder Kaur, Senior Coordinator at Alliance International School',
  },
  {
    id:            'rosy-sharma',
    name:          'Ms. Rosy Sharma',
    role:          'Coordinator, Middle Wing',
    qualification: 'M.Sc. Maths, B.Ed. Maths and Science',
    imageSrc:      '/images/educators/ms-rosy-sharma.png',
    imageAlt:      'Ms. Rosy Sharma, Coordinator of the Middle Wing at Alliance International School',
  },
  {
    id:            'deepy-chawla',
    name:          'Ms. Deepy Chawla',
    role:          'Junior Coordinator',
    qualification: 'M.A. (English), B.Ed',
    imageSrc:      '/images/educators/ms-deepy-chawla.png',
    imageAlt:      'Ms. Deepy Chawla, Junior Coordinator at Alliance International School',
  },
  {
    id:            'shivom-raghav',
    name:          'Mr. Shivom',
    role:          'HOD, Mathematics',
    qualification: 'B.Sc, M.Sc. (Maths), B.Ed, M.Ed, CTET, PSTET, HTET, DOEACC',
    imageSrc:      '/images/educators/mr-shivom-raghav.png',
    imageAlt:      'Mr. Shivom, Head of Mathematics at Alliance International School',
  },
  {
    id:            'harpreet-kaur',
    name:          'Ms. Harpreet Kaur',
    role:          'HOD, Science',
    qualification: 'B.Sc, M.Sc. (Chemistry), B.Ed, PSTET',
    imageSrc:      '/images/educators/image.png',
    imageAlt:      'Ms. Harpreet Kaur, Head of Science at Alliance International School',
  },
  {
    id:            'romy-ahuja',
    name:          'Mr. Romy Ahuja',
    role:          'HOD, Social Science',
    qualification: 'M.A. Political Science, M.A. Sociology, CTET, B.Ed, PGDIP UN Studies',
    imageSrc:      '/images/educators/mr-romy-ahuja.png',
    imageAlt:      'Mr. Romy Ahuja, Head of Social Science at Alliance International School',
  },
  {
    id:            'sanjeev-kumar-aulakh',
    name:          'Mr. Sanjeev Kumar Aulakh',
    role:          'HOD, Computer Science',
    qualification: 'BCA, MCA, B.Ed',
    imageSrc:      '/images/educators/image.png',
    imageAlt:      'Mr. Sanjeev Kumar Aulakh, Head of Computer Science at Alliance International School',
  },
  {
    id:            'gurpreet-kaur',
    name:          'Ms. Gurpreet Kaur',
    role:          'HOD, Punjabi',
    qualification: 'M.A. Punjabi, B.Ed, CTET, PSTET',
    imageSrc:      '/images/educators/ms-gurpreet-kaur.png',
    imageAlt:      'Ms. Gurpreet Kaur, Head of Punjabi at Alliance International School',
  },
  {
    id:            'ranu-jain',
    name:          'Ms. Ranu Jain',
    role:          'HOD, GK',
    qualification: 'B.Sc. Medical, M.A. English, B.Ed. Science and English',
    imageSrc:      '/images/educators/ms-ranu-jain.png',
    imageAlt:      'Ms. Ranu Jain, Head of GK at Alliance International School',
  },
]
