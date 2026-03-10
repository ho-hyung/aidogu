import type { Tool } from '@/types/tool'

export const suno: Tool = {
  slug: 'suno',
  name: 'Suno',
  nameKo: '수노',
  description:
    'AI 음악 생성 플랫폼입니다. 텍스트 프롬프트를 입력하면 보컬, 멜로디, 반주가 포함된 완성된 노래를 생성합니다. 한국어 가사로도 노래를 만들 수 있습니다.',
  shortDescription: '텍스트로 완성된 노래를 만드는 AI',
  category: ['audio'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['일 5곡', '비상업적 사용'] },
    { name: 'Pro', price: '$10/월', features: ['월 500곡', '상업적 사용 가능'] },
    { name: 'Premier', price: '$30/월', features: ['월 2,000곡', '우선 생성'] },
  ],
  url: 'https://suno.com',
  screenshots: [],
  pros: [
    '완성도 높은 노래 생성',
    '한국어 가사 지원',
    '다양한 장르 선택 가능',
    '무료로도 매일 사용 가능',
  ],
  cons: [
    '무료 생성 곡은 저작권 제한',
    '세밀한 음악 편집 불가',
    '가끔 음질이 불안정',
  ],
  tags: ['음악생성', '무료', '작곡', 'AI음악', '한국어'],
  alternatives: ['udio', 'elevenlabs'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
