import type { Tool } from '@/types/tool'

export const sora: Tool = {
  slug: 'sora',
  name: 'Sora',
  nameKo: '소라',
  description:
    'OpenAI가 만든 텍스트-영상 생성 AI입니다. 프롬프트를 입력하면 최대 1분 길이의 고품질 영상을 생성합니다. 물리 법칙을 이해하는 듯한 자연스러운 영상이 특징입니다.',
  shortDescription: 'OpenAI의 텍스트-영상 생성 AI',
  category: ['video'],
  pricing: 'paid',
  pricingPlans: [
    { name: 'ChatGPT Plus', price: '$20/월', features: ['월 제한 영상 생성', '720p'] },
    { name: 'ChatGPT Pro', price: '$200/월', features: ['더 많은 생성', '1080p', '긴 영상'] },
  ],
  url: 'https://sora.com',
  screenshots: [],
  pros: [
    '영상 품질이 매우 높음',
    '물리적으로 자연스러운 움직임',
    '프롬프트 이해도가 뛰어남',
    '다양한 스타일 지원',
  ],
  cons: [
    'ChatGPT Plus/Pro 구독 필요',
    '생성 시간이 긴 편',
    '사용량 제한이 빡빡함',
  ],
  tags: ['영상생성', '유료', '비디오', 'OpenAI'],
  alternatives: ['runway', 'pika', 'kling-ai'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
