import type { Tool } from '@/types/tool'

export const typecast: Tool = {
  slug: 'typecast',
  name: 'Typecast',
  nameKo: '타입캐스트',
  description:
    '한국 기업 네오사피엔스가 만든 AI 음성 합성 플랫폼입니다. 400개 이상의 한국어 음성을 제공하며, 유튜브, 광고, 교육 콘텐츠 등의 나레이션에 특화되어 있습니다.',
  shortDescription: '한국어 특화 AI 음성/나레이션 도구',
  category: ['audio', 'korea'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 제한 사용', '워터마크'] },
    { name: 'Basic', price: '₩9,900/월', features: ['월 제한 다운로드', '워터마크 제거'] },
    { name: 'Pro', price: '₩29,000/월', features: ['무제한 다운로드', '상업적 사용'] },
  ],
  url: 'https://typecast.ai',
  screenshots: [],
  pros: [
    '한국어 음성 품질 최고 수준',
    '400개 이상의 다양한 한국어 목소리',
    '감정 표현 조절 가능',
    '유튜브/교육 콘텐츠에 최적화',
  ],
  cons: [
    '무료 버전 제한이 많음',
    '영어 음성은 ElevenLabs보다 부족',
    '실시간 음성 변환 미지원',
  ],
  tags: ['음성합성', 'TTS', '한국어', '나레이션', '유튜브'],
  alternatives: ['elevenlabs', 'clova-voice'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
