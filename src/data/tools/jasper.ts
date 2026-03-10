import type { Tool } from '@/types/tool'

export const jasper: Tool = {
  slug: 'jasper',
  name: 'Jasper',
  nameKo: '재스퍼',
  description:
    '마케팅 팀을 위한 AI 글쓰기 도구입니다. 광고 카피, 블로그 글, SNS 포스팅, 이메일 마케팅 등 마케팅 콘텐츠 작성에 특화되어 있으며, 브랜드 보이스를 학습할 수 있습니다.',
  shortDescription: '마케팅 특화 AI 카피라이팅 도구',
  category: ['writing', 'marketing'],
  pricing: 'paid',
  pricingPlans: [
    { name: 'Creator', price: '$39/월', features: ['1명', 'SEO 모드', '브랜드 보이스 1개'] },
    { name: 'Pro', price: '$59/월', features: ['5명', '브랜드 보이스 3개', '캠페인'] },
  ],
  url: 'https://jasper.ai',
  affiliateUrl: 'https://jasper.ai?fpr=aitools',
  screenshots: [],
  pros: [
    '마케팅 콘텐츠에 최적화',
    '브랜드 보이스 학습 가능',
    '50개 이상의 템플릿',
    'SEO 최적화 기능 내장',
  ],
  cons: [
    '가격이 비싼 편',
    '범용 대화는 ChatGPT가 더 나음',
    '한국어 성능이 영어보다 부족',
  ],
  tags: ['글쓰기', '마케팅', '유료', '카피라이팅', 'SEO'],
  alternatives: ['copy-ai', 'chatgpt', 'writesonic'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
