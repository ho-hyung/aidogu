import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">카테고리</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/category/writing" className="hover:text-gray-900 dark:hover:text-white">글쓰기 AI</Link></li>
              <li><Link href="/category/image" className="hover:text-gray-900 dark:hover:text-white">이미지 생성</Link></li>
              <li><Link href="/category/video" className="hover:text-gray-900 dark:hover:text-white">영상 생성</Link></li>
              <li><Link href="/category/coding" className="hover:text-gray-900 dark:hover:text-white">코딩</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">인기 도구</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/tools/chatgpt" className="hover:text-gray-900 dark:hover:text-white">ChatGPT</Link></li>
              <li><Link href="/tools/claude" className="hover:text-gray-900 dark:hover:text-white">Claude</Link></li>
              <li><Link href="/tools/midjourney" className="hover:text-gray-900 dark:hover:text-white">Midjourney</Link></li>
              <li><Link href="/tools/wrtn" className="hover:text-gray-900 dark:hover:text-white">뤼튼</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">추천</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/best/free-ai-tools" className="hover:text-gray-900 dark:hover:text-white">무료 AI 도구</Link></li>
              <li><Link href="/best/korean-ai-tools" className="hover:text-gray-900 dark:hover:text-white">한국 AI 도구</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">정보</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/blog" className="hover:text-gray-900 dark:hover:text-white">블로그</Link></li>
              <li><Link href="/faq" className="hover:text-gray-900 dark:hover:text-white">자주 묻는 질문</Link></li>
              <li><Link href="/about" className="hover:text-gray-900 dark:hover:text-white">소개</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white">개인정보처리방침</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-500">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
