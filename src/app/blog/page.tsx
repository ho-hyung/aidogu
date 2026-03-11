'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getAllBlogPosts, getAllBlogCategories } from '@/lib/blog'

function CategoryBadge({ category }: { readonly category: string }) {
  return (
    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
      {category}
    </span>
  )
}

function BlogPostCard({ slug, title, description, category, tags, publishedAt }: {
  readonly slug: string
  readonly title: string
  readonly description: string
  readonly category: string
  readonly tags: readonly string[]
  readonly publishedAt: string
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
    >
      <div className="mb-3 flex items-center gap-2">
        <CategoryBadge category={category} />
        <span className="text-xs text-gray-400 dark:text-gray-500">{publishedAt}</span>
      </div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-gray-100">
        {title}
      </h2>
      <p className="mb-4 text-sm text-gray-600 line-clamp-2 dark:text-gray-400">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  )
}

const ALL_POSTS = getAllBlogPosts()
const ALL_CATEGORIES = getAllBlogCategories()

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = selectedCategory
    ? ALL_POSTS.filter((post) => post.category === selectedCategory)
    : ALL_POSTS

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">AI 블로그</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        AI 도구 활용법, 비교 분석, 최신 트렌드를 한국어로 쉽게 알아보세요
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedCategory(null)}
          className={`rounded-full border px-3 py-1 text-sm transition-colors ${
            selectedCategory === null
              ? 'border-blue-600 bg-blue-600 text-white'
              : 'border-gray-200 text-gray-600 hover:border-blue-300 dark:border-gray-700 dark:text-gray-400'
          }`}
        >
          전체
        </button>
        {ALL_CATEGORIES.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              selectedCategory === category
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-gray-200 text-gray-600 hover:border-blue-300 dark:border-gray-700 dark:text-gray-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogPostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            description={post.description}
            category={post.category}
            tags={post.tags}
            publishedAt={post.publishedAt}
          />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="py-12 text-center text-gray-500 dark:text-gray-400">
          해당 카테고리의 글이 없습니다.
        </p>
      )}
    </div>
  )
}
