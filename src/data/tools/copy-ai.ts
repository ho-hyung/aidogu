import type { Tool } from '@/types/tool'

export const copyAi: Tool = {
  slug: 'copy-ai',
  name: 'Copy.ai',
  nameKo: '카피에이아이',
  description:
    'AI 마케팅 콘텐츠 생성 플랫폼입니다. 워크플로우 자동화로 대량의 마케팅 카피, 블로그 글, 이메일을 빠르게 생성합니다. 무료 플랜으로도 충분히 활용 가능합니다.',
  shortDescription: '무료로 쓸 수 있는 AI 마케팅 카피',
  category: ['writing', 'marketing'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 2,000 단어', '기본 도구'] },
    { name: 'Starter', price: '$36/월', features: ['무제한 단어', '브랜드 보이스'] },
    { name: 'Advanced', price: '$186/월', features: ['워크플로우 자동화', 'API 접근'] },
  ],
  url: 'https://copy.ai',
  screenshots: [],
  pros: [
    '무료 플랜 제공',
    '마케팅 카피에 최적화',
    '워크플로우 자동화 기능',
    '90개 이상 카피 도구',
  ],
  cons: [
    '무료 단어 수 제한',
    '긴 글 작성에는 부적합',
    '한국어 품질이 평범',
  ],
  tags: ['글쓰기', '마케팅', '무료', '카피라이팅'],
  alternatives: ['jasper', 'writesonic', 'chatgpt'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
