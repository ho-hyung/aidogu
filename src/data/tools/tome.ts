import type { Tool } from '@/types/tool'

export const tome: Tool = {
  slug: 'tome',
  name: 'Tome',
  nameKo: '톰',
  description:
    'AI 기반 프레젠테이션 및 문서 자동 생성 도구입니다. 주제만 입력하면 슬라이드 구성, 텍스트, 이미지까지 자동으로 생성하며, 스토리텔링에 최적화된 인터랙티브 프레젠테이션을 만들 수 있습니다. 기존 문서를 프레젠테이션으로 변환하는 기능도 제공합니다.',
  shortDescription: 'AI로 프레젠테이션을 자동 생성하는 스토리텔링 도구',
  category: ['productivity', 'design'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['기본 AI 생성', '제한된 템플릿', 'Tome 브랜딩'] },
    { name: 'Pro', price: '$16/월', features: ['무제한 AI 생성', '커스텀 브랜딩', 'PDF 내보내기'] },
    { name: 'Enterprise', price: '문의', features: ['팀 관리', 'SSO', '분석 대시보드'] },
  ],
  url: 'https://tome.app',
  screenshots: [],
  pros: [
    '프레젠테이션 자동 생성 속도가 매우 빠름',
    '스토리텔링에 최적화된 레이아웃',
    '인터랙티브 요소로 청중 참여 유도',
    '문서→프레젠테이션 변환 기능',
  ],
  cons: [
    '파워포인트 대비 세밀한 편집 기능 부족',
    '오프라인 사용 불가',
    'AI 생성 콘텐츠의 정확성 검증 필요',
  ],
  tags: ['프레젠테이션', 'AI생성', '부분무료', '생산성', '디자인'],
  alternatives: ['gamma', 'beautiful-ai', 'canva-ai'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
