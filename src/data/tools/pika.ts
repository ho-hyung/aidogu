import type { Tool } from '@/types/tool'

export const pika: Tool = {
  slug: 'pika',
  name: 'Pika',
  nameKo: '피카',
  description:
    '간편한 AI 영상 생성 도구입니다. 텍스트, 이미지, 영상을 입력하면 AI가 영상을 생성하거나 수정합니다. 립싱크, 영상 확장, 스타일 변환 등 재미있는 기능이 많습니다.',
  shortDescription: '간편한 AI 영상 생성 도구',
  category: ['video'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['일 제한 생성', '워터마크'] },
    { name: 'Standard', price: '$8/월', features: ['월 300 크레딧', '워터마크 제거'] },
    { name: 'Pro', price: '$28/월', features: ['월 1,000 크레딧', '고화질'] },
  ],
  url: 'https://pika.art',
  screenshots: [],
  pros: [
    '사용법이 매우 간단',
    '무료로도 사용 가능',
    '립싱크, 효과 등 재미있는 기능',
    '빠른 생성 속도',
  ],
  cons: [
    '영상 품질이 Runway보다 낮음',
    '긴 영상 생성 불가',
    '세밀한 제어가 어려움',
  ],
  tags: ['영상생성', '무료', '비디오', '립싱크'],
  alternatives: ['runway', 'sora', 'kling-ai'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
