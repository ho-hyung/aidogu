import type { Tool } from '@/types/tool'

export const udio: Tool = {
  slug: 'udio',
  name: 'Udio',
  nameKo: '유디오',
  description:
    'AI 음악 생성 도구입니다. Suno와 유사하게 텍스트로 노래를 만들 수 있으며, 특히 음질과 보컬 품질에서 강점이 있습니다. 다양한 장르와 스타일을 지원합니다.',
  shortDescription: '고품질 AI 음악 생성 도구',
  category: ['audio'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 제한 생성', '기본 기능'] },
    { name: 'Standard', price: '$10/월', features: ['월 1,200곡', '상업적 사용'] },
    { name: 'Pro', price: '$30/월', features: ['월 4,800곡', '우선 생성'] },
  ],
  url: 'https://udio.com',
  screenshots: [],
  pros: [
    '음질이 Suno보다 우수하다는 평가',
    '보컬 표현력이 좋음',
    '다양한 장르 지원',
    '가사 커스터마이징 가능',
  ],
  cons: [
    '무료 생성 수가 적음',
    '한국어 지원이 Suno보다 부족',
    '인터페이스가 약간 복잡',
  ],
  tags: ['음악생성', '무료', '작곡', 'AI음악'],
  alternatives: ['suno', 'elevenlabs'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
