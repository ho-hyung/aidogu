import type { Tool } from '@/types/tool'

export const make: Tool = {
  slug: 'make',
  name: 'Make',
  nameKo: '메이크',
  description:
    '비주얼 자동화 플랫폼입니다. 드래그 앤 드롭으로 복잡한 워크플로우를 설계할 수 있으며, Zapier보다 세밀한 제어가 가능합니다. AI 모듈로 GPT, Claude 등을 워크플로우에 포함시킬 수 있습니다.',
  shortDescription: '비주얼 AI 업무 자동화 플랫폼',
  category: ['automation', 'productivity'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 1,000 오퍼레이션', '2개 시나리오'] },
    { name: 'Core', price: '$9/월', features: ['월 10,000 오퍼레이션', '무제한 시나리오'] },
    { name: 'Pro', price: '$16/월', features: ['월 10,000 오퍼레이션', '고급 기능'] },
  ],
  url: 'https://make.com',
  screenshots: [],
  pros: [
    'Zapier보다 세밀한 워크플로우 제어',
    '비주얼 에디터가 직관적',
    '무료 오퍼레이션이 넉넉',
    '가격이 Zapier보다 저렴',
  ],
  cons: [
    '학습 곡선이 Zapier보다 높음',
    '앱 연동 수가 Zapier보다 적음',
    '한국 서비스 연동 부족',
  ],
  tags: ['자동화', '생산성', '무료', '워크플로우', '노코드'],
  alternatives: ['zapier-ai', 'n8n'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
