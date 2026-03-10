export default function BlogPostLoading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6 flex items-center gap-2">
        <div className="h-4 w-8 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-2 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-12 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-2 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-40 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="mb-8">
        <div className="mb-3 h-6 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
        <div className="mb-2 h-9 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="mb-2 h-9 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="mb-4 h-5 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="flex gap-4">
          <div className="h-4 w-28 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>

      <div className="space-y-4">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="space-y-2">
            {i % 3 === 0 && (
              <div className="h-7 w-2/5 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            )}
            <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
        <div className="flex gap-2">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="h-7 w-20 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
          ))}
        </div>
      </div>
    </div>
  )
}
