// ─── TYPE DEFINITIONS ─────────────────────────────────────────────────────────

export const documentColors = {
  amber: { bg: 'rgba(245,154,1,0.12)',   icon: '#c98700', border: 'rgba(245,154,1,0.25)'   },
  blue:  { bg: 'rgba(40,89,184,0.10)',   icon: '#2859b8', border: 'rgba(40,89,184,0.20)'   },
  rose:  { bg: 'rgba(234,148,110,0.15)', icon: '#c96b3a', border: 'rgba(234,148,110,0.30)' },
  green: { bg: 'rgba(45,125,70,0.10)',   icon: '#1f7840', border: 'rgba(45,125,70,0.20)'   },
  sky:   { bg: 'rgba(40,89,184,0.07)',   icon: '#4a7cc7', border: 'rgba(40,89,184,0.15)'   },
  pink:  { bg: 'rgba(192,39,45,0.08)',   icon: '#a82228', border: 'rgba(192,39,45,0.15)'   },
} as const

export interface CBSEDocument {
  id:          string
  icon:        string
  label:       string
  description: string
  href:        string
  colorKey:    keyof typeof documentColors
  isExternal?: boolean
}

export interface SyllabusSubject {
  id:      string
  name:    string
  pdfHref: string
}

export interface SyllabusClass {
  id:          string
  label:       string
  shortLabel:  string
  subjects:    SyllabusSubject[]
}

export interface ImportantDate {
  id:       string
  date:     string
  event:    string
  category: 'exam' | 'result' | 'holiday' | 'activity' | 'admission'
}

export interface FAQItem {
  id:       string
  question: string
  answer:   string
}

export interface CBSEUpdate {
  id:       string
  date:     string
  headline: string
  href?:    string
}

// ─── CBSE DOCUMENTS ───────────────────────────────────────────────────────────

export const cbseDocuments: CBSEDocument[] = [
  {
    id:          'academic-calendar',
    icon:        'CalendarDays',
    label:       'Academic Calendar',
    description: 'Session plan, holidays, exam schedule, and key dates for the academic year.',
    href:        '/docs/cbse/academic-calendar-2025-26.pdf',
    colorKey:    'amber',
  },
  {
    id:          'mandatory-disclosure',
    icon:        'FileCheck',
    label:       'Mandatory Disclosure',
    description: 'CBSE-required disclosure of school infrastructure, staff, and affiliation details.',
    href:        '/docs/cbse/mandatory-disclosure.pdf',
    colorKey:    'blue',
  },
  {
    id:          'affiliation-letter',
    icon:        'Award',
    label:       'Affiliation Grant Letter',
    description: "Official CBSE affiliation letter confirming Alliance International School's recognised status.",
    href:        '/docs/cbse/affiliation-grant-letter.pdf',
    colorKey:    'rose',
  },
  {
    id:          'safety-certificate',
    icon:        'ShieldCheck',
    label:       'Safety Certificate',
    description: 'Annual fire safety and building safety certificate issued by the relevant authority.',
    href:        '/docs/cbse/safety-certificate.pdf',
    colorKey:    'green',
  },
  {
    id:          'teacher-list',
    icon:        'Users',
    label:       'Teacher List',
    description: 'Qualified faculty list as submitted to CBSE — names, qualifications, and designations.',
    href:        '/docs/cbse/teacher-list.pdf',
    colorKey:    'sky',
  },
  {
    id:          'tc-list',
    icon:        'ClipboardList',
    label:       'TC List',
    description: 'Transfer Certificate register for students who have moved school.',
    href:        '/docs/cbse/tc-list.pdf',
    colorKey:    'pink',
  },
]

// ─── CBSE UPDATES TICKER ──────────────────────────────────────────────────────

export const cbseUpdates: CBSEUpdate[] = [
  {
    id:       'u1',
    date:     'Mar 2026',
    headline: 'CBSE Board Exam 2026 results declared — check on cbseresults.nic.in',
    href:     'https://cbseresults.nic.in',
  },
  {
    id:       'u2',
    date:     'Feb 2026',
    headline: 'CBSE Syllabus 2026–27 for Class 1–12 released on official website',
    href:     'https://cbseacademic.nic.in',
  },
  {
    id:       'u3',
    date:     'Jan 2026',
    headline: 'CBSE date sheet 2026 for Class 10 & 12 board exams published',
    href:     'https://cbse.gov.in',
  },
  {
    id:       'u4',
    date:     'Dec 2025',
    headline: 'CBSE rationalised syllabus continues for 2026–27 session',
  },
  {
    id:       'u5',
    date:     'Nov 2025',
    headline: 'CBSE Annual Sports meet registration open for affiliated schools',
  },
]

// ─── SYLLABUS ─────────────────────────────────────────────────────────────────

export const syllabusClasses: SyllabusClass[] = [
  {
    id:         'class-12',
    label:      'Class 12',
    shortLabel: 'XII',
    subjects: [
      { id: 'phy12',   name: 'Physics',             pdfHref: '/docs/cbse/syllabus/class-12-physics.pdf'      },
      { id: 'chem12',  name: 'Chemistry',            pdfHref: '/docs/cbse/syllabus/class-12-chemistry.pdf'    },
      { id: 'math12',  name: 'Mathematics',          pdfHref: '/docs/cbse/syllabus/class-12-mathematics.pdf'  },
      { id: 'bio12',   name: 'Biology',              pdfHref: '/docs/cbse/syllabus/class-12-biology.pdf'      },
      { id: 'eng12',   name: 'English Core',         pdfHref: '/docs/cbse/syllabus/class-12-english.pdf'      },
      { id: 'cs12',    name: 'Computer Science',     pdfHref: '/docs/cbse/syllabus/class-12-computer.pdf'     },
      { id: 'eco12',   name: 'Economics',            pdfHref: '/docs/cbse/syllabus/class-12-economics.pdf'    },
      { id: 'acc12',   name: 'Accountancy',          pdfHref: '/docs/cbse/syllabus/class-12-accountancy.pdf'  },
    ],
  },
  {
    id:         'class-11',
    label:      'Class 11',
    shortLabel: 'XI',
    subjects: [
      { id: 'phy11',   name: 'Physics',             pdfHref: '/docs/cbse/syllabus/class-11-physics.pdf'      },
      { id: 'chem11',  name: 'Chemistry',            pdfHref: '/docs/cbse/syllabus/class-11-chemistry.pdf'    },
      { id: 'math11',  name: 'Mathematics',          pdfHref: '/docs/cbse/syllabus/class-11-mathematics.pdf'  },
      { id: 'bio11',   name: 'Biology',              pdfHref: '/docs/cbse/syllabus/class-11-biology.pdf'      },
      { id: 'eng11',   name: 'English Core',         pdfHref: '/docs/cbse/syllabus/class-11-english.pdf'      },
      { id: 'cs11',    name: 'Computer Science',     pdfHref: '/docs/cbse/syllabus/class-11-computer.pdf'     },
    ],
  },
  {
    id:         'class-10',
    label:      'Class 10',
    shortLabel: 'X',
    subjects: [
      { id: 'sci10',   name: 'Science',              pdfHref: '/docs/cbse/syllabus/class-10-science.pdf'      },
      { id: 'math10',  name: 'Mathematics Standard', pdfHref: '/docs/cbse/syllabus/class-10-maths-std.pdf'    },
      { id: 'mathb10', name: 'Mathematics Basic',    pdfHref: '/docs/cbse/syllabus/class-10-maths-basic.pdf'  },
      { id: 'sst10',   name: 'Social Science',       pdfHref: '/docs/cbse/syllabus/class-10-social.pdf'       },
      { id: 'eng10',   name: 'English Lang. & Lit.', pdfHref: '/docs/cbse/syllabus/class-10-english.pdf'      },
      { id: 'hin10',   name: 'Hindi Course A',       pdfHref: '/docs/cbse/syllabus/class-10-hindi-a.pdf'      },
    ],
  },
  {
    id:         'class-9',
    label:      'Class 9',
    shortLabel: 'IX',
    subjects: [
      { id: 'sci9',    name: 'Science',              pdfHref: '/docs/cbse/syllabus/class-9-science.pdf'       },
      { id: 'math9',   name: 'Mathematics',          pdfHref: '/docs/cbse/syllabus/class-9-mathematics.pdf'   },
      { id: 'sst9',    name: 'Social Science',       pdfHref: '/docs/cbse/syllabus/class-9-social.pdf'        },
      { id: 'eng9',    name: 'English Lang. & Lit.', pdfHref: '/docs/cbse/syllabus/class-9-english.pdf'       },
      { id: 'hin9',    name: 'Hindi Course A',       pdfHref: '/docs/cbse/syllabus/class-9-hindi.pdf'         },
    ],
  },
  {
    id:         'class-8',
    label:      'Class 8',
    shortLabel: 'VIII',
    subjects: [
      { id: 'sci8',    name: 'Science',              pdfHref: '/docs/cbse/syllabus/class-8-science.pdf'       },
      { id: 'math8',   name: 'Mathematics',          pdfHref: '/docs/cbse/syllabus/class-8-mathematics.pdf'   },
      { id: 'sst8',    name: 'Social Science',       pdfHref: '/docs/cbse/syllabus/class-8-social.pdf'        },
      { id: 'eng8',    name: 'English',              pdfHref: '/docs/cbse/syllabus/class-8-english.pdf'       },
    ],
  },
  {
    id:         'class-6-7',
    label:      'Class 6–7',
    shortLabel: 'VI–VII',
    subjects: [
      { id: 'sci67',   name: 'Science',              pdfHref: '/docs/cbse/syllabus/class-6-7-science.pdf'     },
      { id: 'math67',  name: 'Mathematics',          pdfHref: '/docs/cbse/syllabus/class-6-7-mathematics.pdf' },
      { id: 'sst67',   name: 'Social Science',       pdfHref: '/docs/cbse/syllabus/class-6-7-social.pdf'      },
      { id: 'eng67',   name: 'English',              pdfHref: '/docs/cbse/syllabus/class-6-7-english.pdf'     },
    ],
  },
  {
    id:         'class-3-5',
    label:      'Class 3–5',
    shortLabel: 'III–V',
    subjects: [
      { id: 'math35',  name: 'Mathematics',          pdfHref: '/docs/cbse/syllabus/class-3-5-mathematics.pdf' },
      { id: 'evs35',   name: 'EVS',                  pdfHref: '/docs/cbse/syllabus/class-3-5-evs.pdf'         },
      { id: 'eng35',   name: 'English',              pdfHref: '/docs/cbse/syllabus/class-3-5-english.pdf'     },
      { id: 'hin35',   name: 'Hindi',                pdfHref: '/docs/cbse/syllabus/class-3-5-hindi.pdf'       },
    ],
  },
  {
    id:         'class-1-2',
    label:      'Class 1–2',
    shortLabel: 'I–II',
    subjects: [
      { id: 'math12c', name: 'Mathematics',          pdfHref: '/docs/cbse/syllabus/class-1-2-mathematics.pdf' },
      { id: 'eng12c',  name: 'English',              pdfHref: '/docs/cbse/syllabus/class-1-2-english.pdf'     },
      { id: 'hin12c',  name: 'Hindi',                pdfHref: '/docs/cbse/syllabus/class-1-2-hindi.pdf'       },
    ],
  },
]

// ─── IMPORTANT DATES ──────────────────────────────────────────────────────────

export const importantDates: ImportantDate[] = [
  { id: 'd1',  date: '1 April 2025',     event: 'New Academic Session Begins (2025–26)',                category: 'activity'  },
  { id: 'd2',  date: '15 July 2025',     event: 'Mid-Term Examination — Classes 1–8',                  category: 'exam'      },
  { id: 'd3',  date: '10 September 2025', event: 'Half-Yearly Examinations — Classes 9–12',            category: 'exam'      },
  { id: 'd4',  date: '2 October 2025',   event: 'Gandhi Jayanti — School Holiday',                     category: 'holiday'   },
  { id: 'd5',  date: '14 November 2025', event: "Children's Day Celebrations",                         category: 'activity'  },
  { id: 'd6',  date: '25 December 2025', event: 'Christmas Holiday',                                   category: 'holiday'   },
  { id: 'd7',  date: '5 January 2026',   event: 'Pre-Board Examinations Begin — Class 10 & 12',        category: 'exam'      },
  { id: 'd8',  date: '15 February 2026', event: 'CBSE Board Exams Begin — Class 10 & 12',              category: 'exam'      },
  { id: 'd9',  date: '31 March 2026',    event: 'Annual Result Declaration — Classes 1–9',              category: 'result'    },
  { id: 'd10', date: '15 May 2026',      event: 'CBSE Board Results — Class 10 & 12',                  category: 'result'    },
  { id: 'd11', date: '1 June 2026',      event: 'Summer Vacation Begins',                              category: 'holiday'   },
  { id: 'd12', date: '1 July 2026',      event: 'Admission Registration Open — Session 2026–27',       category: 'admission' },
]

export const dateCategoryConfig: Record<
  ImportantDate['category'],
  { bg: string; text: string; label: string }
> = {
  exam:      { bg: 'rgba(192,39,45,0.10)',   text: '#a82228', label: 'Exam'      },
  result:    { bg: 'rgba(40,89,184,0.10)',   text: '#2859b8', label: 'Result'    },
  holiday:   { bg: 'rgba(45,125,70,0.10)',   text: '#1f7840', label: 'Holiday'   },
  activity:  { bg: 'rgba(245,154,1,0.12)',   text: '#c98700', label: 'Activity'  },
  admission: { bg: 'rgba(234,148,110,0.15)', text: '#c96b3a', label: 'Admission' },
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqItems: FAQItem[] = [
  {
    id:       'faq1',
    question: 'What are the major changes in the CBSE Syllabus for 2026–27?',
    answer:   'CBSE has continued with the rationalised syllabus for 2026–27. The updated syllabus for all classes is available as downloadable PDFs in the Syllabus section above. Core competencies remain unchanged — changes are primarily in certain elective topics at Class 11–12 level.',
  },
  {
    id:       'faq2',
    question: 'Is the CBSE Syllabus 2026–27 the same as last year?',
    answer:   'For Classes 1–8, the syllabus remains broadly consistent with the previous year. For Classes 9–12, minor updates apply — especially in Computer Science and Mathematics. We recommend downloading the latest PDFs from the section above.',
  },
  {
    id:       'faq3',
    question: 'How can I download the Class 10 or Class 12 CBSE Syllabus PDF?',
    answer:   'Select the relevant class from the Syllabus section above, then click the download icon next to the subject. All PDFs are available directly from AIS and are updated to match the current CBSE academic session.',
  },
  {
    id:       'faq4',
    question: "How do I get my child's Transfer Certificate (TC) from AIS?",
    answer:   "Submit a written request to the school office with the student's details and reason for transfer. TC is typically issued within 5–7 working days. The TC register is available for verification in the Documents section above.",
  },
  {
    id:       'faq5',
    question: 'What is the Mandatory Disclosure document?',
    answer:   "Mandatory Disclosure is a CBSE-prescribed document that every affiliated school must publish. It contains information about the school's land area, building infrastructure, staff details, financial accounts, and CBSE affiliation particulars. AIS's current disclosure is downloadable above.",
  },
  {
    id:       'faq6',
    question: 'When are CBSE Board Exam results usually declared?',
    answer:   'CBSE Class 10 and Class 12 board results are typically declared in May–June, approximately 6–8 weeks after the last exam. Results are available at cbseresults.nic.in. AIS notifies parents via the school app and SMS once results are declared.',
  },
  {
    id:       'faq7',
    question: 'Does AIS follow the full CBSE syllabus or a rationalised version?',
    answer:   'AIS follows the official CBSE syllabus as issued for the current academic session, including any rationalisations mandated by CBSE. Our teachers receive regular training to align with updated guidelines.',
  },
  {
    id:       'faq8',
    question: 'What NCERT books are prescribed for AIS students?',
    answer:   'AIS follows NCERT textbooks as the primary learning resource for all CBSE subjects. The Book List for the current academic session is available via the "View Book List" button on this page.',
  },
]

// ─── WHY CBSE ─────────────────────────────────────────────────────────────────

export const whyCBSE = {
  eyebrow:       'WHY WE FOLLOW CBSE',
  headingPlain:  'A Curriculum Built for',
  headingAccent: 'Every Indian Child.',
  points: [
    { id: 'w1', icon: 'BookOpen',    heading: 'Nationally Recognised',      body: "CBSE certificates are accepted across all Indian states and most international institutions — ensuring no child's future is limited by geography."                    },
    { id: 'w2', icon: 'Brain',       heading: 'Competency-Based Learning',  body: 'The CBSE framework focuses on understanding over rote memorisation — developing analytical thinking, creativity, and problem-solving from early years.'            },
    { id: 'w3', icon: 'Globe',       heading: 'Global Standard Alignment',  body: 'CBSE syllabi are benchmarked against international curricula, preparing students for competitive exams like JEE, NEET, UPSC, and global entrance tests.'           },
    { id: 'w4', icon: 'Users',       heading: 'Inclusive for All Learners', body: 'CBSE offers differentiated syllabi (Mathematics Standard/Basic), making it accessible without compromising rigour for high-achieving students.'                     },
    { id: 'w5', icon: 'ShieldCheck', heading: 'Regulatory Trust',           body: 'CBSE affiliation means regular compliance checks — infrastructure audits, staff qualification verification, and academic oversight — giving parents confidence.'      },
    { id: 'w6', icon: 'Sparkles',    heading: 'Sports & Arts Integration',  body: "CBSE mandates co-curricular engagement, sports, and arts as graded activities — aligning perfectly with AIS's philosophy of holistic education."                   },
  ],
}
