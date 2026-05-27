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
      'Our teachers are aware of, and appreciate the individual ability and appetite of every child. Their mission is to maintain a continuous learning process — at every step they learn from their students as much as students learn from them.',
      'Our educators employ globally recognised, tried-and-tested discoveries to unearth each child\'s hidden potential. They are deeply influenced by traditional Indian wisdom — caring, devoted, and ever-curious.',
    ],
    ctaLabel:      'Meet Our Faculty',
    ctaHref:       '/educators#faculty',
    imageSrc:      '/images/educators/teachers-as-learners.jpg',
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
      'A student-centred model at AIS acknowledges that students possess diverse learning styles and grasp information at varying paces. Our educators embrace and welcome various learning approaches, whether in group settings or individually.',
      'Educators at AIS assume the role of guides and facilitators — offering support, encouragement, feedback, and answers to questions. AIS has created an atmosphere that promotes genuine learning, fosters creativity, and embraces diverse perspectives.',
    ],
    imageSrc:      '/images/educators/teachers-support-system.jpg',
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
      'Our well-trained and experienced faculty hold advanced university degrees. Regular trainings, re-trainings, and workshops are held with expert faculty to hone teaching skills and orient teachers to new teaching methodologies.',
      'These efforts bring out hidden qualities that are latest while also providing ample opportunity to learn from and absorb trends that are at par with global standards of teaching.',
    ],
    ctaLabel:      'View Qualifications',
    ctaHref:       '/educators#qualifications',
    imageSrc:      '/images/educators/teachers-experienced.jpg',
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
      'At AIS, we go above and beyond academics to bring out the best in our students. Teachers are quick to notice academic and fine artistic abilities, performance abilities, and athletic aptitude.',
      'These co-curricular activities are an important element of our educational programme — they promote a child\'s physical, mental, and emotional growth.',
    ],
    ctaLabel:      'Explore Activities',
    ctaHref:       '/life-at-alliance',
    imageSrc:      '/images/educators/teachers-beyond-academics.jpg',
    imageAlt:      'AIS students engaged in co-curricular activities with a teacher',
    imagePosition: 'right',
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

export const teacherProfiles: TeacherProfile[] = [
  {
    id:            'principal',
    name:          'Mrs. Rajinder Kaur',
    role:          'Principal',
    qualification: 'M.A., M.Ed., Ph.D.',
    imageSrc:      '/images/educators/team/principal.jpg',
    imageAlt:      'Mrs. Rajinder Kaur — Principal, AIS',
    quote:         'Every child is a story yet to be written.',
  },
  {
    id:            'science-head',
    name:          'Mr. Anil Verma',
    role:          'Head of Science Department',
    qualification: 'M.Sc. (Physics), B.Ed.',
    imageSrc:      '/images/educators/team/anil-verma.jpg',
    imageAlt:      'Mr. Anil Verma — Head of Science, AIS',
    quote:         'Curiosity is the engine of achievement.',
  },
  {
    id:            'arts-head',
    name:          'Mrs. Sunita Mehta',
    role:          'Head of Arts & Humanities',
    qualification: 'M.A. (English), B.Ed.',
    imageSrc:      '/images/educators/team/sunita-mehta.jpg',
    imageAlt:      'Mrs. Sunita Mehta — Head of Arts, AIS',
    quote:         'I teach children, not subjects.',
  },
  {
    id:            'sports-head',
    name:          'Mr. Deepak Singh',
    role:          'Head of Physical Education',
    qualification: 'M.P.Ed., NIS Diploma',
    imageSrc:      '/images/educators/team/deepak-singh.jpg',
    imageAlt:      'Mr. Deepak Singh — Sports Head, AIS',
    quote:         'Discipline on the field builds character for life.',
  },
]
