import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { Category } from '@/types/tool'
import { CATEGORIES } from '@/types/tool'
import { getToolsByCategory, getCategoryMeta } from '@/lib/tools'
import { SITE_CONFIG } from '@/lib/constants'
import { ToolCard } from '@/components/tool/ToolCard'
import { Breadcrumb } from '@/components/common/Breadcrumb'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryMeta(slug as Category)
  if (!category) return {}

  const title = `${category.name} AI 도구 모음 - 추천 및 비교`
  const description = `${category.description}. 인기 ${category.name} AI 도구를 비교하고 나에게 맞는 도구를 찾아보세요.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/category/${slug}`,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryMeta(slug as Category)
  if (!category) notFound()

  const tools = getToolsByCategory(slug as Category)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumb items={[
        { label: '카테고리', href: '/category' },
        { label: category.name },
      ]} />

      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {category.icon} {category.name} AI 도구
        </h1>
        <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">{tools.length}개의 도구</p>
      </div>

      {tools.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-12 dark:text-gray-400">
          아직 등록된 도구가 없습니다. 곧 추가될 예정입니다.
        </p>
      )}
    </div>
  )
}
