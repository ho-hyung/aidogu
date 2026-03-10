import type { Metadata } from 'next'
import Link from 'next/link'
import { generateComparisons } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'AI 도구 비교',
  description: '인기 AI 도구를 1:1로 비교하세요. 기능, 가격, 장단점을 한눈에 확인할 수 있습니다.',
}

export default function ComparisonsPage() {
  const comparisons = generateComparisons()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">AI 도구 비교</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">인기 AI 도구를 1:1로 비교해보세요</p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {comparisons.map(({ toolA, toolB }) => (
          <Link
            key={`${toolA.slug}-${toolB.slug}`}
            href={`/compare/${toolA.slug}-vs-${toolB.slug}`}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-5 py-4 text-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
          >
            <span className="font-medium text-gray-900 dark:text-gray-100">{toolA.name}</span>
            <span className="mx-3 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-bold text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              VS
            </span>
            <span className="font-medium text-gray-900 dark:text-gray-100">{toolB.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
