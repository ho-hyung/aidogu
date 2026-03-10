import type { Tool } from '@/types/tool'

export const characterAi: Tool = {
  slug: 'character-ai',
  name: 'Character.AI',
  nameKo: '캐릭터 AI',
  description: '다양한 AI 캐릭터와 대화할 수 있는 플랫폼입니다. 역사적 인물, 가상 캐릭터, 전문가 등 수백만 개의 캐릭터가 있으며, 직접 캐릭터를 만들 수도 있습니다.',
  shortDescription: 'AI 캐릭터와 대화하는 엔터테인먼트 플랫폼',
  category: ['chatbot'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['기본 대화', '캐릭터 생성'] },
    { name: 'c.ai+', price: '$9.99/월', features: ['우선 응답', '빠른 속도', '전용 모델'] },
  ],
  url: 'https://character.ai',
  screenshots: [],
  pros: ['수백만 개의 다양한 캐릭터', '무료 무제한 대화', '캐릭터 직접 생성 가능', '롤플레이/학습에 유용'],
  cons: ['정확한 정보 제공 목적이 아님', '긴 대화에서 맥락을 잃을 수 있음', '성인 콘텐츠 필터링이 강함'],
  tags: ['챗봇', '무료', '캐릭터', '엔터테인먼트', '롤플레이'],
  alternatives: ['chatgpt', 'claude'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
