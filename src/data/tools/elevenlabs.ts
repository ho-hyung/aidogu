import type { Tool } from '@/types/tool'

export const elevenlabs: Tool = {
  slug: 'elevenlabs',
  name: 'ElevenLabs',
  nameKo: '일레븐랩스',
  description:
    '최고 품질의 AI 음성 합성 플랫폼입니다. 29개 이상의 언어로 자연스러운 음성을 생성하며, 목소리 클로닝, 더빙, 오디오북 생성 등의 기능을 제공합니다. 한국어 음성 품질도 우수합니다.',
  shortDescription: '최고 품질 AI 음성 합성 (TTS)',
  category: ['audio'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 10,000자', '기본 음성'] },
    { name: 'Starter', price: '$5/월', features: ['월 30,000자', '음성 클로닝 3개'] },
    { name: 'Creator', price: '$22/월', features: ['월 100,000자', '음성 클로닝 30개'] },
  ],
  url: 'https://elevenlabs.io',
  screenshots: [],
  pros: [
    '업계 최고 수준의 음성 품질',
    '29개 이상 언어 지원',
    '음성 클로닝이 매우 정확',
    '한국어 품질이 우수',
  ],
  cons: [
    '무료 글자 수 제한이 적음',
    '음성 클로닝에 윤리적 우려',
    '실시간 스트리밍은 유료만',
  ],
  tags: ['음성합성', 'TTS', '무료', '더빙', '한국어'],
  alternatives: ['typecast', 'suno', 'udio'],
  featured: true,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
