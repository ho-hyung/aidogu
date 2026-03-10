import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 text-6xl font-bold text-blue-600 dark:text-blue-400">404</p>
      <h1 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        요청하신 페이지가 존재하지 않거나, 주소가 변경되었을 수 있습니다.
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          홈으로 가기
        </Link>
        <Link
          href="/category"
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          카테고리 보기
        </Link>
      </div>
    </div>
  )
}
