import type { Tool } from '@/types/tool'

export const murf: Tool = {
  slug: 'murf',
  name: 'Murf AI',
  nameKo: '머프 AI',
  description: 'AI 음성 합성(TTS) 플랫폼입니다. 120개 이상의 자연스러운 목소리를 제공하며, 감정, 속도, 톤을 세밀하게 조절할 수 있습니다. 광고, 유튜브, e러닝 나레이션에 적합합니다.',
  shortDescription: '120+ 목소리의 AI 나레이션 도구',
  category: ['audio'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['10분 생성', '체험용'] },
    { name: 'Creator', price: '$23/월', features: ['월 2시간', '모든 목소리'] },
    { name: 'Business', price: '$79/월', features: ['월 8시간', 'API', '상업적 사용'] },
  ],
  url: 'https://murf.ai',
  screenshots: [],
  pros: ['목소리 종류가 매우 다양', '감정/톤 세밀 조절', '영상 편집기 내장', '상업적 사용 라이선스'],
  cons: ['무료 체험이 짧음', '한국어 목소리 수 제한', 'ElevenLabs 대비 자연스러움 부족'],
  tags: ['음성합성', 'TTS', '무료', '나레이션', '유튜브'],
  alternatives: ['elevenlabs', 'typecast'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
