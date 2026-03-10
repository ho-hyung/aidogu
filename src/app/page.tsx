import Link from 'next/link'
import { ToolCard } from '@/components/tool/ToolCard'
import { SearchBar } from '@/components/common/SearchBar'
import { NewsletterSignup } from '@/components/common/NewsletterSignup'
import { CATEGORIES } from '@/types/tool'
import { getAllTools, getFeaturedTools } from '@/lib/tools'
import { getAllBestLists } from '@/lib/best-lists'

export default function HomePage() {
  const featuredTools = getFeaturedTools()
  const allTools = getAllTools()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
          한국어 AI 도구 디렉토리
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          {allTools.length}개 이상의 AI 도구를 카테고리별로 비교하고, 나에게 맞는 AI 도구를 찾아보세요.
        </p>
        <div className="flex justify-center">
          <SearchBar tools={[...allTools]} />
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">카테고리</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-700 dark:hover:bg-blue-950 dark:hover:text-blue-300"
            >
              <span className="text-lg">{cat.icon}</span>
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">추천 AI 도구</h2>
          <Link href="/category" className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            전체 보기 &rarr;
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* Best Lists */}
      <section className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">추천 리스트</h2>
          <Link href="/best" className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            전체 보기 &rarr;
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {getAllBestLists().slice(0, 6).map((list) => (
            <Link
              key={list.slug}
              href={`/best/${list.slug}`}
              className="rounded-lg border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-900 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:hover:border-blue-700"
            >
              {list.title}
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Text */}
      <section className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">AI 도구, 어떤 걸 써야 할까?</h2>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          AI 기술이 빠르게 발전하면서 매일 새로운 AI 도구가 등장하고 있습니다.
          글쓰기, 이미지 생성, 코딩, 영상 제작, 음성 합성 등 다양한 분야에서 AI 도구를 활용할 수 있지만,
          너무 많은 선택지 때문에 어떤 도구를 써야 할지 고민되시나요?
          AIDogu에서는 각 AI 도구의 특징, 가격, 장단점을 한국어로 정리하여
          여러분이 최적의 AI 도구를 찾을 수 있도록 도와드립니다.
        </p>
      </section>

      {/* Newsletter */}
      <section className="mt-16">
        <NewsletterSignup />
      </section>
    </div>
  )
}
