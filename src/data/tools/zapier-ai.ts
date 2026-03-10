import type { Tool } from '@/types/tool'

export const zapierAi: Tool = {
  slug: 'zapier-ai',
  name: 'Zapier AI',
  nameKo: '재피어 AI',
  description:
    '업무 자동화 플랫폼 Zapier에 내장된 AI 기능입니다. 7,000개 이상의 앱을 연결하여 자동화 워크플로우를 만들 수 있으며, AI 챗봇과 자연어로 자동화를 설정할 수 있습니다.',
  shortDescription: '7,000개 앱 연결 AI 업무 자동화',
  category: ['automation', 'productivity'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 100 태스크', '5개 Zap'] },
    { name: 'Starter', price: '$19.99/월', features: ['월 750 태스크', '20개 Zap'] },
    { name: 'Professional', price: '$49/월', features: ['월 2,000 태스크', '무제한 Zap'] },
  ],
  url: 'https://zapier.com',
  screenshots: [],
  pros: [
    '7,000개 이상 앱 연동',
    '코딩 없이 자동화 설정',
    'AI로 자연어 자동화 가능',
    '안정적인 서비스',
  ],
  cons: [
    '무료 태스크 수 제한',
    '복잡한 워크플로우는 유료',
    '한국 서비스 연동이 부족',
  ],
  tags: ['자동화', '생산성', '무료', '워크플로우', '노코드'],
  alternatives: ['make', 'n8n'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
