import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllBestLists, getBestListTools } from '@/lib/best-lists'

export const metadata: Metadata = {
  title: 'AI 도구 추천 리스트',
  description: '목적별, 직군별로 정리한 AI 도구 추천 리스트. 무료 AI, 학생용, 마케터용, 코딩용 등 최고의 AI 도구를 찾아보세요.',
}

export default function BestListsPage() {
  const lists = getAllBestLists()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">AI 도구 추천 리스트</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">목적과 용도에 맞는 AI 도구를 찾아보세요</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lists.map((list) => {
          const tools = getBestListTools(list)
          return (
            <Link
              key={list.slug}
              href={`/best/${list.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
            >
              <h2 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-gray-100">
                {list.title}
              </h2>
              <p className="mb-3 text-sm text-gray-600 line-clamp-2 dark:text-gray-400">{list.description}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{tools.length}개 도구 포함</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
