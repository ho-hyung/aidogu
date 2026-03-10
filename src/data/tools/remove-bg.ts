import type { Tool } from '@/types/tool'

export const removeBg: Tool = {
  slug: 'remove-bg',
  name: 'Remove.bg',
  nameKo: '리무브비지',
  description:
    'AI 기반 이미지 배경 자동 제거 도구입니다. 사진을 업로드하면 5초 이내에 배경을 깔끔하게 제거하며, 사람, 제품, 동물 등 다양한 피사체를 정확하게 인식합니다. API, Photoshop 플러그인, 데스크톱 앱 등 다양한 방식으로 활용할 수 있습니다.',
  shortDescription: '5초 만에 이미지 배경을 자동으로 제거하는 AI 도구',
  category: ['image', 'design'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['무제한 미리보기', '저해상도 다운로드', '기본 배경 제거'] },
    { name: 'Pay as you go', price: '이미지당 $1.99~', features: ['고해상도 다운로드', '최대 25MP', 'API 접근'] },
    { name: 'Subscription', price: '$9/월~', features: ['월 40 크레딧', 'API 접근', '대량 처리'] },
  ],
  url: 'https://www.remove.bg',
  screenshots: [],
  pros: [
    '배경 제거 속도와 정확도가 우수',
    '사용법이 매우 간단 (드래그 앤 드롭)',
    'API와 플러그인으로 워크플로우 통합 가능',
    '대량 이미지 일괄 처리 지원',
  ],
  cons: [
    '무료 버전은 저해상도만 다운로드 가능',
    '복잡한 배경이나 반투명 영역 처리가 어려울 수 있음',
    '이미지당 비용이 누적되면 부담',
  ],
  tags: ['배경제거', '이미지편집', '부분무료', '디자인', 'API'],
  alternatives: ['photoroom', 'canva-ai', 'adobe-firefly'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
