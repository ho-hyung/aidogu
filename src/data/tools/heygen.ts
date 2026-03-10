import type { Tool } from '@/types/tool'

export const heygen: Tool = {
  slug: 'heygen',
  name: 'HeyGen',
  nameKo: '헤이젠',
  description:
    'AI 아바타 기반 영상 제작 플랫폼입니다. 100개 이상의 아바타와 300개 이상의 음성으로 마케팅, 교육, 기업 영상을 빠르게 제작할 수 있습니다. 실시간 아바타 영상 통화, 영상 번역/더빙 기능도 제공합니다.',
  shortDescription: 'AI 아바타 기반 마케팅/교육 영상 자동 제작',
  category: ['video', 'marketing'],
  pricing: 'paid',
  pricingPlans: [
    { name: 'Creator', price: '$24/월', features: ['월 15분 영상', '공개 아바타', '1080p'] },
    { name: 'Business', price: '$72/월', features: ['월 30분 영상', '커스텀 아바타', '4K', 'API 접근'] },
    { name: 'Enterprise', price: '문의', features: ['무제한 영상', '전용 아바타', '우선 지원'] },
  ],
  url: 'https://www.heygen.com',
  screenshots: [],
  pros: [
    '카메라 없이 전문적인 영상 제작 가능',
    '다양한 언어 지원으로 글로벌 콘텐츠 제작',
    '아바타 품질이 매우 자연스러움',
    '영상 번역/더빙 기능이 강력',
  ],
  cons: [
    '무료 체험이 매우 제한적',
    '커스텀 아바타는 비싼 요금제 필요',
    '실제 촬영 대비 표현력에 한계',
  ],
  tags: ['AI아바타', '영상제작', '마케팅', '유료', '더빙'],
  alternatives: ['synthesia', 'd-id', 'runway'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
