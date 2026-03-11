import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { getOgImageUrl } from '@/lib/og'

const PAGE_TITLE = 'AI 블로그 - AI 도구 활용 가이드 & 비교 분석'
const PAGE_DESCRIPTION = 'AI 도구 사용법, 비교 분석, 활용 가이드를 한국어로 제공합니다. AI 초보자부터 전문가까지 유용한 정보를 확인하세요.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_CONFIG.url}/blog`,
    images: [{ url: getOgImageUrl(PAGE_TITLE, PAGE_DESCRIPTION), width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [getOgImageUrl(PAGE_TITLE, PAGE_DESCRIPTION)],
  },
}

export default function BlogLayout({ children }: { readonly children: React.ReactNode }) {
  return <>{children}</>
}
