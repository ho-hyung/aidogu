import Link from 'next/link'
import type { Tool } from '@/types/tool'
import { PRICING_LABELS } from '@/lib/constants'
import { getCategoryMeta } from '@/lib/tools'

interface ToolCardProps {
  readonly tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group block rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-gray-100">
          {tool.name}
          {tool.nameKo !== tool.name && (
            <span className="ml-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">({tool.nameKo})</span>
          )}
        </h3>
        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          {PRICING_LABELS[tool.pricing]}
        </span>
      </div>
      <p className="mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {tool.shortDescription}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tool.category.slice(0, 3).map((cat) => {
          const meta = getCategoryMeta(cat)
          return (
            <span
              key={cat}
              className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              {meta?.icon} {meta?.name}
            </span>
          )
        })}
      </div>
    </Link>
  )
}
