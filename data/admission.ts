// ─── Types ───────────────────────────────────────────────────────────────────

export interface ProcessStep {
  step:        number
  icon:        string
  title:       string
  description: string
}

export interface ScholarType {
  id:           'day' | 'boarding'
  icon:         string
  title:        string
  tagline:      string
  features:     string[]
  highlight:    string
  ctaLabel:     string
  studentImage?: string
  studentQuote?: string
}

export interface FeeRow {
  label:  string
  value:  string
  note?:  string
}

export interface FeeTable {
  id:        string
  title:     string
  subtitle?: string
  headers:   string[]
  rows:      string[][]
  footnote?: string
}

export interface DocumentItem {
  id:       string
  label:    string
  required: boolean
}

export interface CriteriaGroup {
  id:              string
  gradeLabel:      string
  ageEligibility?: string
  criteria:        string[]
  procedure:       string[]
  fees?:           string
}

export interface FAQ {
  id:       string
  question: string
  answer:   string
}

// ─── Seed Data ────────────────────────────────────────────────────────────────

export const admissionOpener = {
  eyebrow:    'Admissions Open — Session 2026–27',
  ghostLabel: 'ADMISSIONS',
  headline:   'A better future\nbegins with one step.',
  sub:        "Alliance International School, Banur (Punjab) offers a seamless and transparent admission process for Day Scholars and Boarding students. Let's begin your child's journey.",
  image:      '/images/admission/campus-image.jpg',
  imageAlt:   'AIS students with building blocks in class',
}

export const processSteps: ProcessStep[] = [
  {
    step:        1,
    icon:        'Phone',
    title:       'Parent Enquiry',
    description: 'Call us, fill the enquiry form, or visit campus. Our counsellors will guide you through everything.',
  },
  {
    step:        2,
    icon:        'MapPin',
    title:       'Campus Visit',
    description: 'Schedule a guided campus tour. See the facilities, meet faculty, and feel the Alliance difference.',
  },
  {
    step:        3,
    icon:        'ClipboardList',
    title:       'Registration',
    description: 'Fill the online registration form and pay the non-refundable registration fee of ₹999.',
  },
  {
    step:        4,
    icon:        'FolderOpen',
    title:       'Documentation',
    description: 'Submit required documents: birth certificate, photographs, proof of residence, immunisation records, and previous school records.',
  },
  {
    step:        5,
    icon:        'UserCheck',
    title:       'Admission Interview',
    description: 'Shortlisted candidates are invited for a brief interaction session. Upon acceptance, pay the admission fee.',
  },
  {
    step:        6,
    icon:        'GraduationCap',
    title:       'Classes Begin',
    description: 'Attend the orientation session. Collect your timetable, books list, and uniform details. Your journey starts!',
  },
]

export const scholarTypes: ScholarType[] = [
  {
    id:           'day',
    icon:         'Sun',
    title:        'Day Scholar',
    tagline:      'Home every evening. Excellence every day.',
    features: [
      'GPS-tracked transport covering 50km radius',
      'Full access to all academic and sports facilities',
      'After-school activity programmes',
      'Digital parent communication via AIS App',
    ],
    highlight:    '₹3,360 / month onwards',
    ctaLabel:     'Day Scholar Fees',
    studentImage: '/images/admission/student-1.png',
    studentQuote: 'Best of both worlds!',
  },
  {
    id:           'boarding',
    icon:         'Home',
    title:        'Boarding / Hostel',
    tagline:      'A second home designed for growth.',
    features: [
      'Fully furnished, supervised hostel accommodation',
      'Nutritious meals — breakfast, lunch, dinner',
      'Dedicated study hours and evening activities',
      'Sports academy included (₹250/month)',
      'Regular health check-ups and medical support',
    ],
    highlight:    '₹1,56,000 / year (new admission)',
    ctaLabel:     'Boarding Fees',
    studentImage: '/images/admission/student-2.png',
    studentQuote: 'Home away from home!',
  },
]

export const oneTimeFees: FeeRow[] = [
  { label: 'Registration Fee (all classes)',  value: '₹999',    note: 'One-time, non-refundable' },
  { label: 'Admission Fee — Kindergarten',    value: '₹18,000', note: 'One-time'                },
  { label: 'Admission Fee — Class I to XI',   value: '₹18,000', note: 'One-time'                },
  { label: 'Annual Charges (from Sept 2021)', value: '₹6,000',  note: 'Per annum'               },
]

export const dayScholarTables: FeeTable[] = [
  {
    id:       'pre-to-x',
    title:    'Monthly Tuition Fee — Pre-Nursery to Class X',
    subtitle: 'Session 2025–26',
    headers:  ['Class Group', 'Monthly Fee'],
    rows: [
      ['Pre-Nursery to KG', '₹3,360'],
      ['Class I to V',      '₹3,900'],
      ['Class VI to X',     '₹3,990'],
    ],
  },
  {
    id:       'xi-xii',
    title:    'Monthly Tuition Fee — Class XI & XII',
    subtitle: 'Session 2025–26',
    headers:  ['Stream', 'Monthly Fee'],
    rows: [
      ['Humanities', '₹4,135'],
      ['Commerce',   '₹4,210'],
      ['Science',    '₹4,330'],
    ],
  },
]

export const boardingTables: FeeTable[] = [
  {
    id:       'boarding-new',
    title:    'Boarding Fee — New Admission',
    subtitle: 'Class 3rd to 9th & 11th — Session 2025–26',
    headers:  ['Installment', 'School Fee', 'Hostel + Food', 'Annual Charges', 'Total', 'Due Month'],
    rows: [
      ['Security Deposit', '—',       '—',       '—',      '₹10,000',   'Refundable'],
      ['1st Installment',  '₹20,000', '₹27,000', '₹2,000', '₹49,000',   'April'],
      ['2nd Installment',  '₹20,000', '₹26,500', '₹2,000', '₹48,500',   'August'],
      ['3rd Installment',  '₹20,000', '₹26,500', '₹2,000', '₹48,500',   'December'],
      ['Total Annual Fee', '₹60,000', '₹80,000', '₹6,000', '₹1,56,000', '—'],
    ],
    footnote: 'Sports Academy is compulsory — ₹250/month additional.',
  },
  {
    id:       'boarding-old',
    title:    'Boarding Fee — Continuing Students',
    subtitle: 'Class 4th to 9th & 11th — Session 2025–26',
    headers:  ['Installment', 'School Fee', 'Hostel + Food', 'Annual Charges', 'Total', 'Due Month'],
    rows: [
      ['1st Installment',  '₹21,580', '₹29,130', '₹2,000', '₹52,710',   'April'],
      ['2nd Installment',  '₹21,580', '₹28,590', '₹2,000', '₹52,170',   'August'],
      ['3rd Installment',  '₹21,580', '₹28,590', '₹2,000', '₹52,170',   'December'],
      ['Total Annual Fee', '₹64,740', '₹86,310', '₹6,000', '₹1,57,050', '—'],
    ],
    footnote: 'Sports Academy is compulsory — ₹250/month additional.',
  },
]

export const requiredDocuments: DocumentItem[] = [
  { id: 'birth',        label: 'Birth Certificate',                              required: true  },
  { id: 'photos',       label: '3 Passport-size photographs (student)',           required: true  },
  { id: 'parent-photos',label: '3 Passport-size photographs (father/mother)',     required: true  },
  { id: 'residence',    label: 'Proof of Residence',                             required: true  },
  { id: 'immunisation', label: 'Immunisation Records',                           required: true  },
  { id: 'medical',      label: 'Medical Form',                                   required: true  },
  { id: 'declaration',  label: 'Signed Declaration Form',                        required: true  },
  { id: 'aadhar',       label: 'Aadhar Card (student)',                          required: true  },
  { id: 'tc',           label: 'Transfer Certificate (TC) from previous school', required: false },
  { id: 'marks',        label: 'Previous School Marks Statement',                required: false },
  { id: 'transport',    label: 'Transport Requisition Form (if applicable)',      required: false },
]

export const admissionCriteria: CriteriaGroup[] = [
  {
    id:              'preprimary',
    gradeLabel:      'Pre-Primary (Nursery to KG)',
    ageEligibility:  'Nursery: 3+ years | LKG: 4+ years | UKG: 5+ years (as of 31 March of admission year)',
    criteria: [
      'No entrance test for pre-primary grades.',
      'Admission is on a first-come, first-served basis subject to seat availability.',
      'An informal parent-child interaction session may be scheduled.',
    ],
    procedure: [
      'Submit completed registration form with ₹999 fee.',
      'Attend parent-child interaction as scheduled.',
      'Complete documentation and pay admission fee.',
    ],
  },
  {
    id:         'primary',
    gradeLabel: 'Primary (Class I to V)',
    criteria: [
      'Admission subject to seat availability.',
      'An age-appropriate oral interaction may be conducted.',
      'Previous school records (if any) to be submitted.',
    ],
    procedure: [
      'Submit completed registration form with ₹999 fee.',
      'Attend interaction session as notified.',
      'Pay admission fee of ₹20,000 upon selection.',
    ],
  },
  {
    id:         'middle',
    gradeLabel: 'Middle School (Class VI to VIII)',
    criteria: [
      'Admission based on previous academic record and interaction.',
      'Marks statement from previous school is mandatory.',
      'Transfer Certificate to be submitted within 30 days of joining.',
    ],
    procedure: [
      'Submit registration form and previous school records.',
      'Attend interaction session.',
      'Pay admission fee of ₹20,000 upon selection.',
    ],
  },
  {
    id:         'secondary',
    gradeLabel: 'Secondary (Class IX & X)',
    criteria: [
      'Admission subject to seat availability and academic performance.',
      'Entrance assessment may be conducted for Class IX.',
      'TC from previous school is mandatory before joining.',
    ],
    procedure: [
      "Submit form with previous year's mark sheet.",
      'Attend assessment/interaction as scheduled.',
      'Pay admission fee upon confirmation.',
    ],
  },
  {
    id:         'senior',
    gradeLabel: 'Senior Secondary (Class XI & XII)',
    criteria: [
      'Stream allocation based on Class X CBSE board results.',
      'Science stream: minimum 60% in Science and Mathematics.',
      'Commerce stream: minimum 55% aggregate.',
      'Humanities: open admission subject to seat availability.',
    ],
    procedure: [
      'Apply after Class X result declaration.',
      'Provide CBSE mark sheet for stream allocation.',
      'Pay admission fee of ₹20,000 upon selection.',
    ],
  },
]

export const admissionFAQs: FAQ[] = [
  {
    id:       'session',
    question: 'When does the admission process begin for Session 2026–27?',
    answer:   'Admission enquiries are open year-round. The formal registration process for Session 2026–27 begins in December 2025. We recommend applying early as seats are limited.',
  },
  {
    id:       'online',
    question: 'Can I complete the entire admission process online?',
    answer:   'The enquiry form and initial registration can be completed online. However, a campus visit and document submission in person is required before final admission is confirmed.',
  },
  {
    id:       'hostel',
    question: 'Is hostel accommodation available for all classes?',
    answer:   'Hostel facility is available for students from Class 3 onwards. The hostel is fully supervised with dedicated wardens, nutritious meals, study hours, and recreational activities.',
  },
  {
    id:       'refund',
    question: 'Is the registration fee refundable?',
    answer:   'The registration fee of ₹999 is non-refundable. The security deposit for boarding students (₹10,000) is fully refundable at the time of leaving the school.',
  },
  {
    id:       'transport',
    question: 'Does AIS provide transport from outside Banur?',
    answer:   'Yes. AIS operates GPS-tracked buses covering a 50km radius from Banur, Punjab. Transport routes are confirmed at the time of admission. Contact our office for exact route details.',
  },
  {
    id:       'sports',
    question: 'Is the Sports Academy mandatory?',
    answer:   'Sports Academy participation is compulsory for all boarding students at an additional charge of ₹250/month. Day scholars may opt into the sports academy based on their interest.',
  },
]

export const sidebarLinks = [
  { label: 'Enquire Now',        href: '#admission-form',                        primary: true  },
  { label: 'Download Fee Chart', href: '/downloads/ais-fee-structure-2026.pdf',  primary: false },
  { label: 'Campus Tour',        href: '/contact#tour',                          primary: false },
  { label: 'Contact Admissions', href: '/contact',                               primary: false },
  { label: 'View Infrastructure',href: '/infrastructure',                        primary: false },
]
