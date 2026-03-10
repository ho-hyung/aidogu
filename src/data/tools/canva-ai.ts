import type { Tool } from '@/types/tool'

export const canvaAi: Tool = {
  slug: 'canva-ai',
  name: 'Canva AI',
  nameKo: '캔바 AI',
  description:
    'Canva에 내장된 AI 디자인 도구입니다. Magic Write로 텍스트 생성, Magic Design으로 디자인 자동 생성, 배경 제거, 이미지 확장 등 디자인 작업을 AI가 도와줍니다.',
  shortDescription: '누구나 쓸 수 있는 AI 디자인 도구',
  category: ['design', 'image', 'marketing'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['기본 AI 기능', '제한된 사용'] },
    { name: 'Pro', price: '$13/월', features: ['전체 AI 기능', 'Magic Eraser', '배경 제거'] },
    { name: 'Teams', price: '$10/월/인', features: ['팀 협업', '브랜드 킷'] },
  ],
  url: 'https://canva.com',
  screenshots: [],
  pros: [
    '디자인 비전문가도 쉽게 사용',
    '한국어 완벽 지원',
    '템플릿이 매우 풍부',
    'SNS, 프레젠테이션 등 다용도',
  ],
  cons: [
    'AI 기능은 Pro에서만 완전 이용',
    '전문 디자이너에겐 기능 부족',
    '고해상도 출력 제한',
  ],
  tags: ['디자인', '마케팅', '무료', '프레젠테이션', 'SNS'],
  alternatives: ['adobe-firefly', 'dall-e', 'midjourney'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
