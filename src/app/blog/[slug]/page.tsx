import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { AffiliateDisclosure } from '@/components/common/AffiliateDisclosure'
import { ToolCard } from '@/components/tool/ToolCard'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog'
import { getToolBySlug } from '@/lib/tools'
import { SITE_CONFIG } from '@/lib/constants'
import { getOgImageUrl } from '@/lib/og'
import type { Tool } from '@/types/tool'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  const ogImage = getOgImageUrl(post.title, post.description)

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: [...post.tags],
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  }
}

function ArticleJsonLd({ title, description, slug, publishedAt, updatedAt }: {
  readonly title: string
  readonly description: string
  readonly slug: string
  readonly publishedAt: string
  readonly updatedAt: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_CONFIG.url}/blog/${slug}`,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

function RelatedTools({ tools }: { readonly tools: readonly Tool[] }) {
  if (tools.length === 0) return null

  return (
    <section className="mt-10 border-t border-gray-200 pt-8 dark:border-gray-800">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        이 글에서 소개한 도구
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  )
}

function RelatedPosts({ currentSlug }: { readonly currentSlug: string }) {
  const allPosts = getAllBlogPosts()
  const related = allPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">관련 글</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-300 hover:shadow-sm dark:border-gray-800 dark:hover:border-blue-700"
          >
            <span className="mb-1 block text-xs text-blue-600 dark:text-blue-400">{post.category}</span>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{post.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const relatedTools = post.relatedTools
    .map((toolSlug) => getToolBySlug(toolSlug))
    .filter((t): t is Tool => t !== undefined)

  const hasAffiliateTools = relatedTools.some((t) => !!t.affiliateUrl)

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        slug={post.slug}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
      />

      <Breadcrumb items={[
        { label: '블로그', href: '/blog' },
        { label: post.title },
      ]} />

      <article>
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              {post.category}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {post.publishedAt}
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
            {post.title}
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {post.description}
          </p>
        </header>

        {hasAffiliateTools && (
          <div className="mb-8">
            <AffiliateDisclosure />
          </div>
        )}

        <div
          className="blog-content prose prose-lg prose-gray max-w-none dark:prose-invert prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:underline prose-a:underline-offset-2 prose-strong:text-gray-900 prose-li:text-gray-700 prose-img:rounded-xl dark:prose-headings:text-white dark:prose-p:text-gray-300 dark:prose-a:text-blue-400 dark:prose-strong:text-gray-100 dark:prose-li:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      </article>

      <RelatedTools tools={relatedTools} />
      <RelatedPosts currentSlug={post.slug} />
    </div>
  )
}
