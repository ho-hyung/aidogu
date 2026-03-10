import type { Tool } from '@/types/tool'

export const fireflies: Tool = {
  slug: 'fireflies',
  name: 'Fireflies.ai',
  nameKo: '파이어플라이즈',
  description: 'AI 회의 녹음 및 요약 도구입니다. 회의에 AI 봇이 참여하여 자동으로 녹음, 전사, 요약하며, 핵심 액션 아이템을 추출합니다.',
  shortDescription: 'AI 봇이 회의에 참여하여 자동 요약',
  category: ['productivity', 'audio'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['무제한 전사', '800분 저장'] },
    { name: 'Pro', price: '$18/월', features: ['무제한 저장', 'AI 요약', 'CRM 연동'] },
    { name: 'Business', price: '$29/월/인', features: ['팀 분석', 'API 접근'] },
  ],
  url: 'https://fireflies.ai',
  screenshots: [],
  pros: ['AI 봇이 자동으로 회의 참여', '전사 정확도 높음', '액션 아이템 자동 추출', 'CRM/Slack 연동'],
  cons: ['한국어 전사 정확도 낮음', 'AI 봇 참여가 어색할 수 있음', '무료 저장 용량 제한'],
  tags: ['회의록', '생산성', '무료', '자동화', '요약'],
  alternatives: ['otter-ai', 'clova'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
