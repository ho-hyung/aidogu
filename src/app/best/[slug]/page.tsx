import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { getAllBestLists, getBestListBySlug, getBestListTools } from '@/lib/best-lists'
import { PRICING_LABELS, SITE_CONFIG } from '@/lib/constants'
import { getOgImageUrl } from '@/lib/og'
import { getCategoryMeta } from '@/lib/tools'
import type { Tool } from '@/types/tool'

interface BestListPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBestLists().map((list) => ({ slug: list.slug }))
}

export async function generateMetadata({ params }: BestListPageProps): Promise<Metadata> {
  const { slug } = await params
  const list = getBestListBySlug(slug)
  if (!list) return {}

  const ogImage = getOgImageUrl(list.title, list.description)

  return {
    title: list.title,
    description: list.description,
    openGraph: {
      title: list.title,
      description: list.description,
      url: `${SITE_CONFIG.url}/best/${list.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: list.title,
      description: list.description,
      images: [ogImage],
    },
  }
}

function RankedToolCard({ tool, rank }: { readonly tool: Tool; readonly rank: number }) {
  return (
    <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
        {rank}
      </div>
      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2">
          <Link
            href={`/tools/${tool.slug}`}
            className="text-lg font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100"
          >
            {tool.name}
          </Link>
          {tool.nameKo !== tool.name && (
            <span className="text-sm text-gray-500 dark:text-gray-400">({tool.nameKo})</span>
          )}
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            {PRICING_LABELS[tool.pricing]}
          </span>
        </div>
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{tool.shortDescription}</p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tool.category.slice(0, 3).map((cat) => {
            const meta = getCategoryMeta(cat)
            return (
              <span key={cat} className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                {meta?.icon} {meta?.name}
              </span>
            )
          })}
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <div>
            <p className="mb-1 text-xs font-semibold text-green-700 dark:text-green-400">장점</p>
            <ul className="space-y-0.5 text-xs text-green-600 dark:text-green-300">
              {tool.pros.slice(0, 2).map((pro) => (
                <li key={pro}>+ {pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold text-red-700 dark:text-red-400">단점</p>
            <ul className="space-y-0.5 text-xs text-red-600 dark:text-red-300">
              {tool.cons.slice(0, 2).map((con) => (
                <li key={con}>- {con}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <Link
            href={`/tools/${tool.slug}`}
            className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            상세 리뷰 보기
          </Link>
          <a
            href={tool.affiliateUrl ?? tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
          >
            바로가기
          </a>
        </div>
      </div>
    </div>
  )
}

export default async function BestListPage({ params }: BestListPageProps) {
  const { slug } = await params
  const list = getBestListBySlug(slug)
  if (!list) notFound()

  const tools = getBestListTools(list)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumb items={[
        { label: '추천', href: '/best' },
        { label: list.title },
      ]} />

      <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">{list.title}</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">{list.description}</p>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-500">
        최종 업데이트: {list.updatedAt}
      </p>

      <div className="space-y-4">
        {tools.map((tool, index) => (
          <RankedToolCard key={tool.slug} tool={tool} rank={index + 1} />
        ))}
      </div>
    </div>
  )
}
