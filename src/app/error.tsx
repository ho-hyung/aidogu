'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorPageProps {
  readonly error: Error & { digest?: string }
  readonly reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Page error:', error)
  }, [error])

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 text-5xl font-bold text-red-500 dark:text-red-400">오류</p>
      <h1 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
        문제가 발생했습니다
      </h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        페이지를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          다시 시도
        </button>
        <Link
          href="/"
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          홈으로 가기
        </Link>
      </div>
    </div>
  )
}
