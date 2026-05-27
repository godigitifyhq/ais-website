import type { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    slug:        'why-cbse-is-the-right-choice',
    category:    'Academics',
    title:       'Why CBSE Remains the Gold Standard for Indian Schooling',
    excerpt:     'Explore the advantages of CBSE affiliation — from national mobility to globally recognised assessments — and why AIS chose this board for its students.',
    coverImage:  '/images/blogs/cbse-gold-standard.jpg',
    coverAlt:    'Students studying in a well-lit classroom at AIS',
    publishedAt: '2026-05-10',
    readingTime: 5,
    body:        '',
  },
  {
    slug:        'robotics-national-championship-2026',
    category:    'Achievements',
    title:       'AIS Students Win Gold at the National Robotics Championship 2026',
    excerpt:     'Our Class 9 robotics team beat 40 schools from across India to bring home gold. Here\'s the story of their journey, their build, and their breakthrough moment.',
    coverImage:  '/images/blogs/robotics-championship.jpg',
    coverAlt:    'AIS students celebrating with their gold medal at the National Robotics Championship',
    publishedAt: '2026-04-22',
    readingTime: 6,
    body:        '',
  },
  {
    slug:        'parenting-in-the-digital-age',
    category:    'Parenting',
    title:       'Raising Digitally Responsible Children: A Guide for Parents',
    excerpt:     'Screen time, social media, online learning — how to navigate the digital world with your child in a healthy, balanced way.',
    coverImage:  '/images/blogs/digital-parenting.jpg',
    coverAlt:    'Parent and child looking at a tablet together',
    publishedAt: '2026-04-08',
    readingTime: 7,
    body:        '',
  },
  {
    slug:        'annual-sports-day-2026',
    category:    'Events',
    title:       'Annual Sports Day 2026: A Day of Champions',
    excerpt:     'Over 500 students participated in this year\'s Sports Day — track events, team sports, yoga demonstrations, and a spirited march-past.',
    coverImage:  '/images/blogs/sports-day-2026.jpg',
    coverAlt:    'Students in colourful houses marching at AIS Annual Sports Day 2026',
    publishedAt: '2026-03-28',
    readingTime: 4,
    body:        '',
  },
  {
    slug:        'tips-for-board-exam-preparation',
    category:    'Academics',
    title:       '10 Practical Tips to Help Your Child Prepare for Board Exams',
    excerpt:     'Board exams don\'t have to be stressful. Our academic team shares tried-and-tested strategies for confident, well-prepared students.',
    coverImage:  '/images/blogs/board-exam-tips.jpg',
    coverAlt:    'Student revising notes at a desk with focused expression',
    publishedAt: '2026-03-15',
    readingTime: 8,
    body:        '',
  },
  {
    slug:        'importance-of-co-curricular-activities',
    category:    'Student Life',
    title:       'Beyond Marks: Why Co-Curricular Activities Shape Better Humans',
    excerpt:     'Research consistently shows that students involved in sports, arts, and clubs perform better academically and socially. Here\'s the science — and the AIS approach.',
    coverImage:  '/images/blogs/co-curricular.jpg',
    coverAlt:    'AIS students participating in a drama performance on stage',
    publishedAt: '2026-02-25',
    readingTime: 6,
    body:        '',
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function formatPublishedDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  })
}
