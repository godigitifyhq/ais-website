'use client'
import { Search } from 'lucide-react'

interface Props {
  value:    string
  onChange: (v: string) => void
}

export function ResourceSearchBar({ value, onChange }: Props) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
        />
        <input
          type="search"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Search by subject, class, or topic..."
          className="w-full bg-surface border border-border rounded-full pl-12 pr-6 py-4 font-body text-base text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary shadow-sm transition-all"
        />
      </div>
    </div>
  )
}
