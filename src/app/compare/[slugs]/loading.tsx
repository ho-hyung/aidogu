export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-6 h-4 w-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      <div className="mb-2 mx-auto h-9 w-80 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      <div className="mb-10 mx-auto h-5 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      <div className="flex gap-6">
        {[0, 1].map((i) => (
          <div key={i} className="flex-1 space-y-4">
            <div className="mx-auto h-7 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
            {[0, 1, 2, 3].map((j) => (
              <div key={j} className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                <div className="mb-2 h-4 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
                <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
