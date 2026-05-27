import { Info } from 'lucide-react'
import type { FeeTable as FeeTableData } from '@/data/admission'

interface Props { table: FeeTableData }

export function FeeTable({ table }: Props) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="mb-4">
        <h3 className="font-body text-base font-bold text-text">{table.title}</h3>
        {table.subtitle && (
          <p className="font-body text-xs text-text-muted mt-0.5">{table.subtitle}</p>
        )}
      </div>

      {/* Scroll wrapper for mobile */}
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[480px] text-sm">

          <thead>
            <tr className="bg-primary">
              {table.headers.map(h => (
                <th
                  key={h}
                  className="px-4 py-3 text-left font-body text-xs font-bold
                    text-white tracking-[0.08em] uppercase first:pl-5"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {table.rows.map((row, rIdx) => {
              const isTotalRow = row[0].toLowerCase().includes('total')
              return (
                <tr
                  key={rIdx}
                  className={`border-t border-border
                    ${isTotalRow
                      ? 'bg-primary/5 font-semibold'
                      : rIdx % 2 === 0 ? 'bg-surface' : 'bg-surface-alt'
                    }`}
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`px-4 py-3 font-body text-sm first:pl-5
                        ${isTotalRow ? 'text-text font-semibold' : 'text-text-muted'}
                        ${cIdx === 0 ? 'text-text' : ''}
                      `}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>

      {table.footnote && (
        <p className="font-body text-xs text-primary font-medium mt-2 flex items-center gap-1.5">
          <Info size={12} className="shrink-0" />
          {table.footnote}
        </p>
      )}
    </div>
  )
}
