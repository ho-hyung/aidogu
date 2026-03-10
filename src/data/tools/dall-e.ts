import type { Tool } from '@/types/tool'

export const dallE: Tool = {
  slug: 'dall-e',
  name: 'DALL-E 3',
  nameKo: '달리 3',
  description:
    'OpenAI가 만든 AI 이미지 생성 도구입니다. 텍스트 프롬프트를 정확하게 이해하여 고품질 이미지를 생성합니다. ChatGPT Plus에서 직접 사용할 수 있으며, 텍스트 렌더링 능력이 뛰어납니다.',
  shortDescription: 'OpenAI의 텍스트-이미지 생성 AI',
  category: ['image', 'design'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'ChatGPT 내장', price: 'ChatGPT Plus $20/월', features: ['ChatGPT에서 바로 사용', '일일 생성 제한'] },
    { name: 'API', price: '$0.04~0.08/장', features: ['API 호출', '대량 생성'] },
  ],
  url: 'https://openai.com/dall-e-3',
  screenshots: [],
  pros: [
    '프롬프트 이해도가 매우 높음',
    '텍스트 렌더링이 우수',
    'ChatGPT에서 바로 사용 가능',
    '안전한 콘텐츠 필터링',
  ],
  cons: [
    '독립 서비스 없이 ChatGPT 필요',
    '스타일 다양성이 Midjourney보다 부족',
    '생성 속도가 느린 편',
  ],
  tags: ['이미지생성', '부분무료', '디자인', 'OpenAI'],
  alternatives: ['midjourney', 'stable-diffusion', 'leonardo-ai'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
