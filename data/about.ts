// ─── Types ───────────────────────────────────────────────────────────────────

export interface CoreValue {
  id:          string
  icon:        string
  title:       string
  description: string
  variant:     'filled' | 'outline'
}

export interface LeaderProfile {
  id:            string
  role:          string
  pullQuote:     string
  name:          string
  designation:   string
  image:         string
  imageAlt:      string
  imagePosition: 'left' | 'right'
  message:       string[]
}

export interface DifferenceFeature {
  id:       string
  icon:     string
  headline: string
  body:     string
}

// ─── About Opener ─────────────────────────────────────────────────────────────

export const aboutOpener = {
  eyebrow:            'Alliance — Driven by Values',
  ghostLabel:         'ABOUT',
  statement:          'We evaluate intelligence\nbeyond just grades.',
  sub:                'Alliance International School was founded in 2015 in Banur, Punjab, in loving memory of Late Sh. Raghu Nath Rai Garg — a man who believed that true education shapes not just scholars, but citizens.',
  image:              '/images/about/campus-students.jpg',
  imageAlt:           'Students at Alliance International School campus, Banur',
  imageCaptionText:   'Shaping leaders of tomorrow — Banur, Punjab',
}

// ─── Core Values ──────────────────────────────────────────────────────────────

export const coreValues: CoreValue[] = [
  {
    id:          'commitment',
    icon:        'Handshake',
    title:       'Commitment',
    description: 'We are committed to supporting every student in becoming an engaged, proactive learner with high expectations across academics, arts, sports, and civic life. These endeavours prepare students for success far beyond school.',
    variant:     'filled',
  },
  {
    id:          'opportunity',
    icon:        'Sprout',
    title:       'Opportunity',
    description: 'We believe in nurturing children\'s confidence through active participation in diverse activities — recognising their strengths and setting personal goals for improvement. Every child deserves the space to grow.',
    variant:     'outline',
  },
  {
    id:          'respect',
    icon:        'Users',
    title:       'Respect for Difference',
    description: 'Every member of the Alliance community learns at their unique pace. We honour diverse beliefs, viewpoints, and experiences — and are determined to foster an atmosphere of equality for all.',
    variant:     'filled',
  },
  {
    id:          'excellence',
    icon:        'GraduationCap',
    title:       'Excellence in Education',
    description: 'Knowledgeable, passionate teachers are the cornerstone of our system. Exceptional teaching thrives through strong student-faculty relationships and collaborative efforts — we cultivate talent without compromise.',
    variant:     'outline',
  },
]

// ─── Mission & Vision ─────────────────────────────────────────────────────────

export const missionContent = {
  icon:  'Target',
  label: 'Our Mission',
  body:  'Our goal is to cultivate students with vibrant and innovative thinking, a capacity for empathy and compassion towards others, and the determination to act upon their convictions. We emphasize the comprehensive growth of each child — addressing spiritual, moral, intellectual, social, emotional, and physical dimensions.',
}

export const visionContent = {
  icon:  'Eye',
  label: 'Our Vision',
  body:  'Alliance International School is committed to imparting an integral education that is global and based on a strong foundation of Indian tradition, culture, and values — dedicated to producing achievers who are ready to lead and inspire the world.',
}

// ─── Leadership ───────────────────────────────────────────────────────────────

export const leadershipProfiles: LeaderProfile[] = [
  {
    id:            'chairman',
    role:          'Message from the Chairman',
    pullQuote:     'Education makes people easy to lead, but difficult to drive — easy to govern, but impossible to enslave.',
    name:          'Mr. Ashwani Garg',
    designation:   'Chairman, Alliance International School',
    image:         '/images/about/chairman.png',
    imageAlt:      'Mr. Ashwani Garg, Chairman of Alliance International School',
    imagePosition: 'right',
    message: [
      'Children are God\'s greatest gift. They shape up the way we mould them in their developing years. The core principle of Alliance hovers around the creation and nurturing of values in children. We firmly believe that of all virtues, values assume paramount importance, and the rest follows.',
      'We also believe that nothing empowers a student more than teaching them how to be critical thinkers in an ever-changing world. We certainly realise that the challenges of shaping students into true citizens are immense.',
      'Each and every minute at Alliance is so meticulously devoted to bringing about a deep sense of commitment to values in children, as this would, in effect, bring about the well-being of society and the nation as a whole. While doing so, the school is focused towards creating talented individuals capable of high innovation, imagination, analytical competence, scientific intellect, business competency, and entrepreneurial abilities.',
      'The faculty is so carefully chosen to ensure that these ideals are met — an environment comparable to global standards is ensured to realise these aspirations, so that the students face the world with confidence, strength, sincerity, and integrity.',
    ],
  },
  {
    id:            'president',
    role:          'Message from the President',
    pullQuote:     'Education is not a preparation for life — education is life itself.',
    name:          'Mr. Ashok Garg',
    designation:   'President, Alliance International School',
    image:         '/images/about/ashok-garg.png',
    imageAlt:      'Mr. Ashok Garg, President of Alliance International School',
    imagePosition: 'left',
    message: [
      'At Alliance, we earnestly attempt to make a distinctive difference between academics and education. In the context of everyone\'s focus tilting more towards academics, it is necessary that we find answers to certain questions: what will a child do with science, if they do not understand the science of life? What is the use of reading and memorising history, if we do not encourage children to create history?',
      'Though academics do assume paramount importance, it is also equally true that academics alone do not provide complete education. We firmly believe that academics are one aspect of a child\'s development and not the only aspect. With this, we aim to ensure that children get wholesome education that yields all-round development — with specific focus on values, relationships, success, leadership qualities, and life management skills.',
      'As parents, teachers, and other custodians of our children\'s future, let us not confine the children to only syllabi, but also expose them to real life experiences that will make them complete persons. Let us not only count their marks, but also make their life count.',
    ],
  },
  {
    id:            'principal',
    role:          'Message from the Principal',
    pullQuote:     'We are shaping the leaders of tomorrow — one child, one moment at a time.',
    name:          'Mr. Brijesh Saxena',
    designation:   'Principal, Alliance International School',
    image:         '/images/about/brijesh-saxena.png',
    imageAlt:      'Mr. Brijesh Saxena, Principal of Alliance International School',
    imagePosition: 'right',
    message: [
      'At Alliance International School, we are committed to nurturing young minds by providing a holistic and world-class education. Our aim is to empower students with the knowledge, skills, and values that prepare them to excel in a rapidly evolving global environment.',
      'Through innovative teaching methods, state-of-the-art facilities, and a dedicated team of educators, we ensure that every child discovers their true potential. We believe in fostering creativity, critical thinking, and character development — while encouraging students to embrace their unique strengths.',
      'Together, let us build a community of lifelong learners who are ready to lead and inspire the world. At Alliance International School, we are shaping the leaders of tomorrow.',
    ],
  },
]

// ─── Alliance Difference ──────────────────────────────────────────────────────

export const differenceFeatures: DifferenceFeature[] = [
  {
    id:       'inspire',
    icon:     'Lightbulb',
    headline: 'Inspiring, bright campus',
    body:     'A world-class campus equipped with all modern amenities — science labs, music rooms, computer labs, and STEM labs designed for 21st-century learners.',
  },
  {
    id:       'specialised',
    icon:     'Music',
    headline: 'Specialised teachers',
    body:     'Dedicated faculty for Music, Art, Dance, Computers, and Physical Education — ensuring every child\'s talent finds a dedicated mentor.',
  },
  {
    id:       'exchange',
    icon:     'Globe',
    headline: 'Global exposure',
    body:     'Cultural exchange programmes with reputed universities in the US and Canada, giving Alliance students genuine international perspective.',
  },
  {
    id:       'real',
    icon:     'Heart',
    headline: 'Real education',
    body:     'Alliance students are respectful and proactive learners who are engaged in their community, motivated to achieve excellence, and developed into local and global leaders.',
  },
  {
    id:       'hostel',
    icon:     'Home',
    headline: 'Hostel facility',
    body:     'A fully-supervised, comfortable hostel for students from across Punjab — so distance is never a barrier to a quality education.',
  },
  {
    id:       'transport',
    icon:     'Bus',
    headline: 'Safe transport network',
    body:     'GPS-tracked buses serving a 50km radius, ensuring every child travels safely to and from school every day.',
  },
]

export const differenceImage = {
  src:     '/images/infrastructure/hero-campus.png',
  alt:     'The Alliance International School campus building in Banur',
  caption: 'The Alliance campus — designed for every child to thrive',
}
