import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { getAllTools } from '@/lib/tools'
import { getAllBestLists } from '@/lib/best-lists'
import { generateComparisons } from '@/lib/tools'
import { CATEGORIES } from '@/types/tool'

export const metadata: Metadata = {
  title: '소개',
  description: `${SITE_CONFIG.name}은 한국어로 정리된 AI 도구 디렉토리입니다. AI 도구의 특징, 가격, 장단점을 비교하고 추천합니다.`,
}

export default function AboutPage() {
  const toolCount = getAllTools().length
  const categoryCount = CATEGORIES.length
  const compareCount = generateComparisons().length
  const bestListCount = getAllBestLists().length

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
        {SITE_CONFIG.name} 소개
      </h1>

      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">왜 만들었나요?</h2>
          <p className="leading-relaxed">
            AI 기술이 빠르게 발전하면서 매일 새로운 AI 도구가 등장하고 있습니다.
            하지만 대부분의 AI 도구 디렉토리는 영어로 되어 있어,
            한국어 사용자가 자신에게 맞는 AI 도구를 찾기 어렵습니다.
          </p>
          <p className="mt-3 leading-relaxed">
            {SITE_CONFIG.name}은 이런 문제를 해결하기 위해 만들어졌습니다.
            각 AI 도구의 특징, 가격, 장단점을 한국어로 정리하여
            누구나 쉽게 AI 도구를 비교하고 선택할 수 있도록 돕습니다.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">제공하는 정보</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{toolCount}</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">AI 도구</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{categoryCount}</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">카테고리</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{compareCount}</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">비교 페이지</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-800 dark:bg-gray-900">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{bestListCount}</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">추천 리스트</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">각 도구 페이지에서 확인할 수 있는 것</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-blue-500">-</span>
              도구 소개 및 한 줄 설명
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-blue-500">-</span>
              가격 플랜 비교 (무료/유료)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-blue-500">-</span>
              장점과 단점 정리
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-blue-500">-</span>
              대안 도구 추천 (내부 링크)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-blue-500">-</span>
              카테고리 및 태그 분류
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">문의</h2>
          <p className="leading-relaxed">
            잘못된 정보 수정, 새로운 도구 등록 요청, 제휴 문의는
            이메일로 연락 부탁드립니다.
          </p>
          <p className="mt-2 font-medium text-blue-600 dark:text-blue-400">
            leehoh3153@gmail.com
          </p>
        </section>
      </div>

      <div className="mt-10 flex gap-3">
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          도구 둘러보기
        </Link>
        <Link
          href="/best"
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          추천 리스트 보기
        </Link>
      </div>
    </div>
  )
}
