import type { Tool } from '@/types/tool'

export const leonardoAi: Tool = {
  slug: 'leonardo-ai',
  name: 'Leonardo AI',
  nameKo: '레오나르도 AI',
  description:
    '게임 에셋, 일러스트, 컨셉 아트에 특화된 AI 이미지 생성 플랫폼입니다. 자체 모델과 Stable Diffusion 기반 모델을 제공하며, 무료 크레딧으로도 충분히 사용할 수 있습니다.',
  shortDescription: '게임/일러스트 특화 AI 이미지 생성',
  category: ['image', 'design'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['일 150 크레딧', '기본 모델'] },
    { name: 'Apprentice', price: '$12/월', features: ['월 8,500 크레딧', '모든 모델'] },
    { name: 'Artisan', price: '$30/월', features: ['월 25,000 크레딧', '우선 생성'] },
  ],
  url: 'https://leonardo.ai',
  screenshots: [],
  pros: [
    '넉넉한 무료 크레딧',
    '게임 에셋 생성에 최적화',
    '직관적인 웹 UI',
    '다양한 파인튜닝 모델',
  ],
  cons: [
    '사진 리얼리즘은 Midjourney에 미치지 못함',
    '고급 기능은 유료',
    '커뮤니티가 영어 중심',
  ],
  tags: ['이미지생성', '무료', '게임', '일러스트', '디자인'],
  alternatives: ['midjourney', 'dall-e', 'stable-diffusion'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
