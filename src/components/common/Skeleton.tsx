function SkeletonBox({ className }: { readonly className?: string }) {
  return (
    <div className={`animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800 ${className ?? ''}`} />
  )
}

export function ToolCardSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-3 flex items-center justify-between">
        <SkeletonBox className="h-6 w-32" />
        <SkeletonBox className="h-5 w-16 rounded-full" />
      </div>
      <SkeletonBox className="mb-3 h-4 w-full" />
      <div className="flex gap-1.5">
        <SkeletonBox className="h-5 w-16" />
        <SkeletonBox className="h-5 w-16" />
      </div>
    </div>
  )
}

export function ToolDetailSkeleton() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <SkeletonBox className="mb-6 h-4 w-48" />
      <SkeletonBox className="mb-2 h-9 w-64" />
      <SkeletonBox className="mb-8 h-5 w-96" />
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <SkeletonBox className="mb-3 h-6 w-16" />
            <SkeletonBox className="h-4 w-full" />
            <SkeletonBox className="mt-2 h-4 w-full" />
            <SkeletonBox className="mt-2 h-4 w-3/4" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <SkeletonBox className="mb-3 h-6 w-12" />
              <SkeletonBox className="mb-2 h-4 w-full" />
              <SkeletonBox className="mb-2 h-4 w-full" />
              <SkeletonBox className="h-4 w-3/4" />
            </div>
            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <SkeletonBox className="mb-3 h-6 w-12" />
              <SkeletonBox className="mb-2 h-4 w-full" />
              <SkeletonBox className="h-4 w-3/4" />
            </div>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <SkeletonBox className="h-11 w-full rounded-lg" />
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <SkeletonBox className="mb-3 h-4 w-12" />
            <SkeletonBox className="mb-2 h-4 w-full" />
            <SkeletonBox className="mb-2 h-4 w-full" />
            <SkeletonBox className="h-4 w-full" />
          </div>
        </aside>
      </div>
    </div>
  )
}

export function GridSkeleton({ count = 6 }: { readonly count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ToolCardSkeleton key={i} />
      ))}
    </div>
  )
}
