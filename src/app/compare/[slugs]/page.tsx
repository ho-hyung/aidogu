import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getToolBySlug, generateComparisons } from '@/lib/tools'
import { PRICING_LABELS, SITE_CONFIG } from '@/lib/constants'
import { getOgImageUrl } from '@/lib/og'
import { getCategoryMeta } from '@/lib/tools'
import type { Tool } from '@/types/tool'
import { Breadcrumb } from '@/components/common/Breadcrumb'

interface ComparePageProps {
  params: Promise<{ slugs: string }>
}

export async function generateStaticParams() {
  const comparisons = generateComparisons()
  return comparisons.map(({ toolA, toolB }) => ({
    slugs: `${toolA.slug}-vs-${toolB.slug}`,
  }))
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const { slugs } = await params
  const [slugA, slugB] = slugs.split('-vs-')
  const toolA = getToolBySlug(slugA)
  const toolB = getToolBySlug(slugB)
  if (!toolA || !toolB) return {}

  const title = `${toolA.name} vs ${toolB.name} 비교 - 어떤 AI가 더 나을까?`
  const description = `${toolA.name}과 ${toolB.name}의 가격, 기능, 장단점을 비교합니다. 나에게 맞는 AI 도구를 선택하세요.`

  const ogImage = getOgImageUrl(title)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/compare/${slugs}`,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

function CompareColumn({ tool }: { readonly tool: Tool }) {
  return (
    <div className="flex-1 space-y-4">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{tool.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{tool.nameKo}</p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">설명</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{tool.shortDescription}</p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">가격</h3>
        <p className="mb-1 text-sm font-medium text-blue-600 dark:text-blue-400">{PRICING_LABELS[tool.pricing]}</p>
        <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
          {tool.pricingPlans.map((plan) => (
            <li key={plan.name}>{plan.name}: {plan.price}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">카테고리</h3>
        <div className="flex flex-wrap gap-1">
          {tool.category.map((cat) => (
            <span key={cat} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
              {getCategoryMeta(cat)?.name}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-green-100 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/40">
        <h3 className="mb-2 text-sm font-semibold text-green-800 dark:text-green-400">장점</h3>
        <ul className="space-y-1 text-xs text-green-700 dark:text-green-300">
          {tool.pros.map((pro) => (
            <li key={pro}>+ {pro}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/40">
        <h3 className="mb-2 text-sm font-semibold text-red-800 dark:text-red-400">단점</h3>
        <ul className="space-y-1 text-xs text-red-700 dark:text-red-300">
          {tool.cons.map((con) => (
            <li key={con}>- {con}</li>
          ))}
        </ul>
      </div>

      <a
        href={tool.affiliateUrl ?? tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-lg bg-blue-600 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        {tool.name} 바로가기
      </a>
    </div>
  )
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { slugs } = await params
  const parts = slugs.split('-vs-')
  if (parts.length !== 2) notFound()

  const [slugA, slugB] = parts
  const toolA = getToolBySlug(slugA)
  const toolB = getToolBySlug(slugB)
  if (!toolA || !toolB) notFound()

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Breadcrumb items={[
        { label: '비교', href: '/compare' },
        { label: `${toolA.name} vs ${toolB.name}` },
      ]} />

      <h1 className="mb-2 text-center text-3xl font-bold text-gray-900 dark:text-white">
        {toolA.name} vs {toolB.name}
      </h1>
      <p className="mb-10 text-center text-gray-600 dark:text-gray-400">
        두 AI 도구의 기능, 가격, 장단점을 비교해보세요
      </p>

      <div className="flex gap-6">
        <CompareColumn tool={toolA} />
        <div className="flex items-start pt-8">
          <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-bold text-gray-600 dark:bg-gray-800 dark:text-gray-400">VS</span>
        </div>
        <CompareColumn tool={toolB} />
      </div>
    </div>
  )
}
