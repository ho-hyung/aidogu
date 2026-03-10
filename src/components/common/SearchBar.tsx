'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { Tool } from '@/types/tool'
import { PRICING_LABELS } from '@/lib/constants'

interface SearchBarProps {
  readonly tools: readonly Tool[]
}

export function SearchBar({ tools }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const results = useMemo(() => {
    if (query.length < 2) return []
    const lowerQuery = query.toLowerCase()
    return tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(lowerQuery) ||
        tool.nameKo.includes(lowerQuery) ||
        tool.tags.some((tag) => tag.includes(lowerQuery)),
    ).slice(0, 8)
  }, [query, tools])

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setIsOpen(true)
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        placeholder="AI 도구 검색... (예: ChatGPT, 이미지 생성, 무료)"
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-blue-600 dark:focus:ring-blue-900/30"
      />
      {isOpen && results.length > 0 && (
        <div className="absolute top-full z-50 mt-1 w-full rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
          {results.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="flex items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl dark:hover:bg-gray-800"
            >
              <div>
                <span className="font-medium text-gray-900 dark:text-gray-100">{tool.name}</span>
                {tool.nameKo !== tool.name && (
                  <span className="ml-1.5 text-gray-500 dark:text-gray-400">({tool.nameKo})</span>
                )}
                <span className="ml-2 text-xs text-gray-400 dark:text-gray-500">{tool.shortDescription}</span>
              </div>
              <span className="shrink-0 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                {PRICING_LABELS[tool.pricing]}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
