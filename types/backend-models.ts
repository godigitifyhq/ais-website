/**
 * TypeScript type definitions for AIS Jobs Backend
 * These types align with the MongoDB models from ais-jobs backend
 */

/**
 * File metadata type for uploaded files
 */
export interface FileSchema {
  fileId: string
  fileUrl: string
  fileName: string
}

/**
 * Personal information section of Job Application
 */
export interface PersonalInfo {
  name: string
  dob: string
  phoneNo: string
  address: string
  email: string
  nationality: string
  maritalStatus: string
  childrenDetails?: string
}

/**
 * Academic qualification
 */
export interface AcademicQualification {
  discipline: string
  institutionName: string
  yearOfPassing: string
  percentageMarks: string
}

/**
 * Professional qualification (e.g., B.Ed, M.Ed, PhD)
 */
export interface ProfessionalQualification {
  qualificationType: 'B.Ed' | 'M.Ed' | 'PhD' | 'Other' | 'B.Tech'
  institutionName: string
  yearOfCompletion: string
  specialization: string
  additionalDetails?: string
}

/**
 * Present job details
 */
export interface PresentJob {
  organizationName?: string
  currentPosition?: string
  currentSalary?: string
  expectedSalary?: string
  joiningDate?: string
  noticePeriod?: string
}

/**
 * Experience details for each position held
 */
export interface ExperienceDetail {
  institutionName: string
  from: string // DD/MM/YYYY
  to: string // DD/MM/YYYY
  positionHeld: string
  subjectsTaught?: string
  classesTaught?: string
  profileDescription?: string
}

/**
 * Work experience section
 */
export interface WorkExperience {
  isFresher: boolean
  totalExperience?: string
  teachingExperience?: string
  administrativeExperience?: string
  experienceDetails: ExperienceDetail[]
}

/**
 * Reference contact
 */
export interface Reference {
  name: string
  occupation: string
  officeAddress: string
  telephoneNo: string
}

/**
 * Job Application model from backend
 */
export interface JobApplication {
  _id?: string
  jobTitle: string
  status: 'pending' | 'accepted' | 'rejected'
  profilePic?: FileSchema
  resume?: FileSchema
  personalInfo: PersonalInfo
  academicQualification: AcademicQualification[]
  professionalQualifications: ProfessionalQualification[]
  presentJob: PresentJob
  workExperience: WorkExperience
  references: Reference[]
  acceptedBy?: string
  rejectedBy?: string
  createdAt?: string
  updatedAt?: string
}

/**
 * Admin model from backend
 */
export interface AdminUser {
  _id?: string
  username: string
  password: string
  email: string
  role: 'admin' | 'user'
  applicationRejected?: string
  applicationAccepted?: string
  contact?: string
  createdAt?: string
  updatedAt?: string
}

/**
 * Blog model from backend
 */
export interface BlogSection {
  subheading: string
  subcontent: string
  sectionImage?: string
}

export interface BlogPost {
  _id?: string
  mainHeading: string
  description: string
  author: string
  coverImage?: string
  sections: BlogSection[]
  conclusion: string
  tags: string[]
  isPublished: boolean
  publishedAt: Date
  updatedAt: Date
  readTime: number
  likes: number
  views: number
  createdAt?: string
}

/**
 * Website form submissions (Contact & Enquiry)
 */
export interface WebsiteContactSubmission {
  name: string
  email: string
  phoneNo: string
  grade?: string
  message?: string
  formType: 'contact'
  submittedAt: string
  source: 'ais-website-contact'
}

export interface WebsiteEnquirySubmission {
  parentName: string
  childName: string
  email?: string
  phoneNo: string
  grade?: string
  message?: string
  initiative?: string
  formType: 'enquiry'
  submittedAt: string
  source: 'ais-website-enquiry'
}

export type WebsiteFormSubmission = WebsiteContactSubmission | WebsiteEnquirySubmission

/**
 * API Response wrapper
 */
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  status?: number
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  page: number
  limit: number
  total: number
  pages: number
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> extends ApiResponse {
  data: T[]
  meta: PaginationMeta
}
