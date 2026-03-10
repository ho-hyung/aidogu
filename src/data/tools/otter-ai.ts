import type { Tool } from '@/types/tool'

export const otterAi: Tool = {
  slug: 'otter-ai',
  name: 'Otter.ai',
  nameKo: '오터 AI',
  description: 'AI 회의록 자동 작성 도구입니다. Zoom, Google Meet 등에 연결하면 실시간으로 음성을 텍스트로 변환하고, 핵심 내용을 요약합니다.',
  shortDescription: 'AI 실시간 회의록 자동 작성',
  category: ['productivity', 'audio'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 300분', '실시간 전사'] },
    { name: 'Pro', price: '$16.99/월', features: ['월 1,200분', 'AI 요약', '검색'] },
    { name: 'Business', price: '$30/월/인', features: ['무제한', '관리자 기능'] },
  ],
  url: 'https://otter.ai',
  screenshots: [],
  pros: ['Zoom/Meet 자동 연동', '실시간 음성→텍스트 변환', 'AI 요약이 정확', '검색 기능 우수'],
  cons: ['영어 중심 (한국어 미지원)', '무료 시간 제한', '오프라인 미팅 녹음은 불편'],
  tags: ['회의록', '생산성', '무료', '음성인식', '요약'],
  alternatives: ['fireflies', 'clova'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
