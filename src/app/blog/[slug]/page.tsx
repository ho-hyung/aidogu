import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog'
import { SITE_CONFIG } from '@/lib/constants'
import { getOgImageUrl } from '@/lib/og'

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

function RelatedPosts({ currentSlug, category }: { readonly currentSlug: string; readonly category: string }) {
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

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Breadcrumb items={[
        { label: '블로그', href: '/blog' },
        { label: post.title },
      ]} />

      <article>
        <header className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              {post.category}
            </span>
          </div>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {post.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
            <span>게시일: {post.publishedAt}</span>
            <span>최종 수정: {post.updatedAt}</span>
          </div>
        </header>

        <div
          className="prose prose-gray max-w-none dark:prose-invert prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-li:text-gray-700 dark:prose-headings:text-white dark:prose-p:text-gray-300 dark:prose-a:text-blue-400 dark:prose-strong:text-gray-100 dark:prose-li:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      </article>

      <RelatedPosts currentSlug={post.slug} category={post.category} />
    </div>
  )
}
