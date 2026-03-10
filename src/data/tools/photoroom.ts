import type { Tool } from '@/types/tool'

export const photoroom: Tool = {
  slug: 'photoroom',
  name: 'PhotoRoom',
  nameKo: '포토룸',
  description:
    'AI 기반 상품 사진 편집 및 배경 생성 도구입니다. 제품 사진의 배경을 자동으로 제거하고 전문적인 배경을 생성하며, 이커머스와 SNS 마케팅에 최적화된 상품 이미지를 손쉽게 만들 수 있습니다. 모바일 앱과 웹 모두 지원합니다.',
  shortDescription: 'AI 기반 상품 사진 배경 제거 및 전문 이미지 편집',
  category: ['image', 'marketing'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['배경 제거', '기본 템플릿', '워터마크'] },
    { name: 'Pro', price: '$12.99/월', features: ['워터마크 제거', 'AI 배경 생성', '고해상도 내보내기'] },
    { name: 'Enterprise', price: '문의', features: ['API 접근', '대량 처리', '커스텀 브랜딩'] },
  ],
  url: 'https://www.photoroom.com',
  screenshots: [],
  pros: [
    '이커머스 상품 사진 편집에 최적화',
    '모바일 앱으로 어디서든 편집 가능',
    'AI 배경 생성으로 전문적인 상품 사진 제작',
    '배치 편집으로 대량 처리 가능',
  ],
  cons: [
    '무료 버전은 워터마크가 포함됨',
    '일반 사진 편집보다 상품 사진에 특화',
    '복잡한 이미지 합성에는 한계',
  ],
  tags: ['상품사진', '배경제거', '이커머스', '부분무료', '마케팅'],
  alternatives: ['remove-bg', 'canva-ai', 'adobe-firefly'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
