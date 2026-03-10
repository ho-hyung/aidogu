import type { Tool } from '@/types/tool'

export const beautifulAi: Tool = {
  slug: 'beautiful-ai',
  name: 'Beautiful.ai',
  nameKo: '뷰티풀 AI',
  description: 'AI가 디자인 규칙을 적용해 자동으로 레이아웃을 잡아주는 프레젠테이션 도구입니다. 슬라이드에 내용을 추가하면 AI가 실시간으로 디자인을 조정합니다.',
  shortDescription: 'AI 자동 레이아웃 프레젠테이션 도구',
  category: ['productivity', 'design'],
  pricing: 'paid',
  pricingPlans: [
    { name: 'Pro', price: '$12/월', features: ['무제한 슬라이드', 'AI 디자인', 'PPT 내보내기'] },
    { name: 'Team', price: '$40/월/인', features: ['팀 협업', '브랜드 킷', '분석'] },
  ],
  url: 'https://beautiful.ai',
  screenshots: [],
  pros: ['AI가 자동으로 레이아웃 조정', '디자인 일관성 유지', '템플릿 품질이 높음', 'PPT 내보내기 지원'],
  cons: ['무료 플랜 없음', '커스터마이징 자유도 낮음', '한국어 템플릿 부족'],
  tags: ['프레젠테이션', '유료', '디자인', 'PPT', '슬라이드'],
  alternatives: ['gamma', 'canva-ai', 'tome'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
