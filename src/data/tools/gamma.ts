import type { Tool } from '@/types/tool'

export const gamma: Tool = {
  slug: 'gamma',
  name: 'Gamma',
  nameKo: '감마',
  description:
    'AI 프레젠테이션 생성 도구입니다. 주제만 입력하면 디자인이 완성된 슬라이드를 자동 생성합니다. 웹 기반이라 설치 없이 사용 가능하며, PPT 내보내기도 지원합니다.',
  shortDescription: 'AI로 프레젠테이션을 자동 생성',
  category: ['productivity', 'design'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['400 크레딧', 'Gamma 브랜딩'] },
    { name: 'Plus', price: '$8/월', features: ['무제한 생성', '브랜딩 제거', 'PPT 내보내기'] },
    { name: 'Pro', price: '$15/월', features: ['커스텀 폰트', '분석', '우선 지원'] },
  ],
  url: 'https://gamma.app',
  screenshots: [],
  pros: [
    '주제만 입력하면 완성된 슬라이드 생성',
    '디자인 품질이 높음',
    'PPT/PDF 내보내기 지원',
    '웹에서 바로 프레젠테이션 가능',
  ],
  cons: [
    '무료 크레딧 제한',
    '세밀한 디자인 커스터마이징 어려움',
    '한국어 디자인 템플릿 부족',
  ],
  tags: ['프레젠테이션', '생산성', '무료', '슬라이드', 'PPT'],
  alternatives: ['canva-ai', 'notion-ai'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
