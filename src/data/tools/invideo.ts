import type { Tool } from '@/types/tool'

export const invideo: Tool = {
  slug: 'invideo',
  name: 'InVideo AI',
  nameKo: '인비디오 AI',
  description:
    'AI 기반 영상 자동 생성 플랫폼입니다. 텍스트 프롬프트만 입력하면 스크립트 작성, 장면 구성, 스톡 영상 선택, 내레이션, 자막까지 자동으로 완성된 영상을 생성합니다. 5,000개 이상의 템플릿과 1,600만 개의 스톡 미디어를 제공합니다.',
  shortDescription: '텍스트 프롬프트로 완성된 영상을 자동 생성하는 AI',
  category: ['video'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['주 4회 AI 영상', '워터마크', '720p'] },
    { name: 'Plus', price: '$25/월', features: ['월 50회 AI 영상', '1080p', '워터마크 제거'] },
    { name: 'Max', price: '$60/월', features: ['월 200회 AI 영상', '4K', '프리미엄 스톡'] },
  ],
  url: 'https://invideo.io',
  screenshots: [],
  pros: [
    '텍스트만으로 완성된 영상 생성',
    '방대한 스톡 미디어 라이브러리',
    '다양한 언어 내레이션 지원',
    '소셜 미디어 최적화 템플릿',
  ],
  cons: [
    '무료 버전은 워터마크와 해상도 제한',
    'AI 생성 영상의 창의성에 한계',
    '스톡 영상 기반이라 독창성이 부족할 수 있음',
  ],
  tags: ['영상생성', '자동편집', '부분무료', '템플릿', '마케팅'],
  alternatives: ['runway', 'pika', 'luma', 'descript'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
