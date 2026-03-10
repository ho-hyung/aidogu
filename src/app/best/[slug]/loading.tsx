export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-6 h-4 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      <div className="mb-3 h-9 w-72 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      <div className="mb-8 h-5 w-full max-w-lg animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-40 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
              <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
