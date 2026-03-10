import type { Metadata } from 'next'
import Link from 'next/link'
import { CATEGORIES } from '@/types/tool'
import { getToolsByCategory } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'AI 도구 카테고리',
  description: '글쓰기, 이미지 생성, 코딩, 영상, 음악 등 카테고리별 AI 도구를 탐색하세요.',
}

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">카테고리</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => {
          const tools = getToolsByCategory(cat.slug)
          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
            >
              <span className="text-3xl">{cat.icon}</span>
              <h2 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-gray-100">
                {cat.name}
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{cat.description}</p>
              <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">{tools.length}개 도구</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
