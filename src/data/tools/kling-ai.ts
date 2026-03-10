import type { Tool } from '@/types/tool'

export const klingAi: Tool = {
  slug: 'kling-ai',
  name: 'Kling AI',
  nameKo: '클링 AI',
  description:
    '중국 콰이쇼우가 만든 AI 영상 생성 도구입니다. 텍스트와 이미지에서 최대 2분 길이의 영상을 생성합니다. 인물 표현과 모션이 자연스러우며 무료 크레딧이 넉넉합니다.',
  shortDescription: '넉넉한 무료 크레딧의 AI 영상 생성',
  category: ['video'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['일 66 크레딧', '기본 생성'] },
    { name: 'Standard', price: '$5.99/월', features: ['월 660 크레딧'] },
    { name: 'Pro', price: '$29.99/월', features: ['월 3,000 크레딧', '고화질'] },
  ],
  url: 'https://klingai.com',
  screenshots: [],
  pros: [
    '무료 크레딧이 넉넉함',
    '인물 영상 품질이 좋음',
    '최대 2분 길이 영상 생성',
    '가격이 저렴한 편',
  ],
  cons: [
    '서버가 중국에 있어 속도 불안정',
    '영어/한국어 프롬프트 이해가 부족할 수 있음',
    '일부 콘텐츠 제한',
  ],
  tags: ['영상생성', '무료', '비디오', '중국'],
  alternatives: ['runway', 'pika', 'sora'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
