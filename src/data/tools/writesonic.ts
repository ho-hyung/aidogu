import type { Tool } from '@/types/tool'

export const writesonic: Tool = {
  slug: 'writesonic',
  name: 'Writesonic',
  nameKo: '라이트소닉',
  description:
    'AI 콘텐츠 생성 플랫폼입니다. SEO 최적화된 블로그 글, 랜딩 페이지, 광고 카피 등을 자동 생성합니다. Chatsonic이라는 AI 챗봇도 제공하며, 실시간 웹 검색 기능이 있습니다.',
  shortDescription: 'SEO 최적화 AI 콘텐츠 생성',
  category: ['writing', 'marketing'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 25 크레딧', '기본 기능'] },
    { name: 'Individual', price: '$16/월', features: ['무제한 생성', 'SEO 최적화'] },
    { name: 'Team', price: '$13/월/인', features: ['팀 협업', 'API 접근'] },
  ],
  url: 'https://writesonic.com',
  affiliateUrl: 'https://writesonic.com?ref=aidogu',
  screenshots: [],
  pros: [
    'SEO 최적화 블로그 글 생성',
    '실시간 웹 검색 기능',
    '다양한 콘텐츠 템플릿',
    '가격이 Jasper보다 저렴',
  ],
  cons: [
    '한국어 품질이 영어보다 부족',
    '무료 크레딧이 적음',
    'Jasper 대비 브랜드 보이스 기능 약함',
  ],
  tags: ['글쓰기', '마케팅', '무료', 'SEO', '블로그'],
  alternatives: ['jasper', 'copy-ai', 'chatgpt'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
