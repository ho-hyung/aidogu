import type { Tool } from '@/types/tool'

export const ideogram: Tool = {
  slug: 'ideogram',
  name: 'Ideogram',
  nameKo: '아이디오그램',
  description:
    'AI 이미지 생성 도구로, 특히 텍스트 렌더링에 강합니다. 로고, 포스터, 타이포그래피 디자인에서 텍스트를 정확하게 이미지에 삽입할 수 있어 디자인 작업에 유용합니다.',
  shortDescription: '텍스트 렌더링에 강한 AI 이미지 생성',
  category: ['image', 'design'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['일 제한 생성', '기본 기능'] },
    { name: 'Basic', price: '$7/월', features: ['우선 생성', '비공개 모드'] },
    { name: 'Plus', price: '$16/월', features: ['더 많은 생성', '고급 기능'] },
  ],
  url: 'https://ideogram.ai',
  screenshots: [],
  pros: [
    '텍스트 렌더링 정확도가 최고 수준',
    '로고, 포스터 디자인에 적합',
    '무료 사용 가능',
    '빠른 생성 속도',
  ],
  cons: [
    '사진 리얼리즘은 Midjourney에 미치지 못함',
    '무료 버전 생성 제한',
    '커뮤니티가 작음',
  ],
  tags: ['이미지생성', '무료', '디자인', '로고', '타이포그래피'],
  alternatives: ['midjourney', 'dall-e', 'adobe-firefly'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
