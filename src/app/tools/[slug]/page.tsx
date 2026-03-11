import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllTools, getToolBySlug, getAlternatives } from '@/lib/tools'
import { PRICING_LABELS, SITE_CONFIG } from '@/lib/constants'
import { getOgImageUrl } from '@/lib/og'
import { getCategoryMeta } from '@/lib/tools'
import { ToolCard } from '@/components/tool/ToolCard'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { AffiliateLink } from '@/components/common/AffiliateLink'
import { AffiliateDisclosure } from '@/components/common/AffiliateDisclosure'

interface ToolPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllTools().map((tool) => ({ slug: tool.slug }))
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) return {}

  const title = `${tool.name} (${tool.nameKo}) - AI 도구 리뷰 및 가격`
  const description = `${tool.shortDescription}. 가격: ${tool.pricingPlans.map((p) => p.price).join(' / ')}. 장단점, 대안 도구 비교까지 한눈에 확인하세요.`

  const ogImage = getOgImageUrl(title, tool.shortDescription)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/tools/${tool.slug}`,
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

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) notFound()

  const alternatives = getAlternatives(tool)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumb items={[
        { label: getCategoryMeta(tool.category[0])?.name ?? '', href: `/category/${tool.category[0]}` },
        { label: tool.name },
      ]} />

      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{tool.name}</h1>
          {tool.nameKo !== tool.name && (
            <span className="text-xl text-gray-500 dark:text-gray-400">({tool.nameKo})</span>
          )}
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            {PRICING_LABELS[tool.pricing]}
          </span>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">{tool.shortDescription}</p>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">소개</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">{tool.description}</p>
          </section>

          {/* Pros & Cons */}
          <div className="grid gap-4 sm:grid-cols-2">
            <section className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/40">
              <h2 className="mb-3 text-lg font-semibold text-green-800 dark:text-green-400">장점</h2>
              <ul className="space-y-2">
                {tool.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-green-700 dark:text-green-300">
                    <span className="mt-0.5 shrink-0">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/40">
              <h2 className="mb-3 text-lg font-semibold text-red-800 dark:text-red-400">단점</h2>
              <ul className="space-y-2">
                {tool.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                    <span className="mt-0.5 shrink-0">-</span>
                    {con}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Pricing */}
          <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">가격</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {tool.pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{plan.name}</h3>
                  <p className="mb-2 text-lg font-bold text-blue-600 dark:text-blue-400">{plan.price}</p>
                  <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                    {plan.features.map((f) => (
                      <li key={f}>- {f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* CTA */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <AffiliateLink
              href={tool.affiliateUrl ?? tool.url}
              isAffiliate={!!tool.affiliateUrl}
              toolName={tool.name}
              sourcePage={`/tools/${tool.slug}`}
              className="block w-full rounded-lg bg-blue-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              {tool.name} 바로가기
            </AffiliateLink>
            <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">공식 사이트로 이동합니다</p>
          </div>
          {tool.affiliateUrl && (
            <AffiliateDisclosure />
          )}

          {/* Info */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">정보</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500 dark:text-gray-400">카테고리</dt>
                <dd className="text-gray-900 dark:text-gray-100">
                  {tool.category.map((c) => getCategoryMeta(c)?.name).join(', ')}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500 dark:text-gray-400">가격</dt>
                <dd className="text-gray-900 dark:text-gray-100">{PRICING_LABELS[tool.pricing]}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500 dark:text-gray-400">업데이트</dt>
                <dd className="text-gray-900 dark:text-gray-100">{tool.updatedAt}</dd>
              </div>
            </dl>
          </div>

          {/* Tags */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">태그</h3>
            <div className="flex flex-wrap gap-1.5">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Alternatives */}
      {alternatives.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
            {tool.name} 대안 도구
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {alternatives.map((alt) => (
              <ToolCard key={alt.slug} tool={alt} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
