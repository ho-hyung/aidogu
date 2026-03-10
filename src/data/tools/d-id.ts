import type { Tool } from '@/types/tool'

export const dId: Tool = {
  slug: 'd-id',
  name: 'D-ID',
  nameKo: '디아이디',
  description: '사진 한 장으로 말하는 AI 아바타 영상을 만드는 도구입니다. 인물 사진에 립싱크를 적용하여 자연스럽게 말하는 영상을 생성합니다.',
  shortDescription: '사진으로 말하는 AI 아바타 영상 생성',
  category: ['video'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['5분 크레딧', '체험용'] },
    { name: 'Lite', price: '$5.9/월', features: ['월 10분', '기본 아바타'] },
    { name: 'Pro', price: '$49/월', features: ['월 15분', 'API', '프리미엄 아바타'] },
  ],
  url: 'https://d-id.com',
  screenshots: [],
  pros: ['사진 한 장으로 영상 생성', '립싱크가 자연스러움', 'API 제공', '다국어 TTS 지원'],
  cons: ['무료 크레딧이 매우 적음', '긴 영상은 비용 높음', 'HeyGen 대비 아바타 품질 부족'],
  tags: ['영상생성', '아바타', '무료', '립싱크', 'AI영상'],
  alternatives: ['heygen', 'synthesia'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
