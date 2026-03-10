import { GridSkeleton } from '@/components/common/Skeleton'

export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <div className="mb-2 h-9 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
        <div className="h-5 w-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      </div>
      <GridSkeleton />
    </div>
  )
}
