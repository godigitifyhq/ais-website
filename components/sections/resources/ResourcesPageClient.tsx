'use client'
import { useState } from 'react'
import { ResourceSearchBar }   from './ResourceSearchBar'
import { CBSEClassSelector }   from './CBSEClassSelector'
import { SubjectResourceGrid } from './SubjectResourceGrid'

export function ResourcesPageClient() {
  const [selectedClass, setSelectedClass] = useState('Class 5')
  const [searchQuery,   setSearchQuery]   = useState('')

  return (
    <>
      {/* Search */}
      <section className="bg-bg pt-10 pb-4">
        <ResourceSearchBar value={searchQuery} onChange={setSearchQuery} />
      </section>

      {/* Class selector */}
      <CBSEClassSelector selected={selectedClass} onChange={setSelectedClass} />

      {/* Subject resource grid */}
      <SubjectResourceGrid selectedClass={selectedClass} searchQuery={searchQuery} />
    </>
  )
}
