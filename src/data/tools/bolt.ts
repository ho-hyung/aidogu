import type { Tool } from '@/types/tool'

export const bolt: Tool = {
  slug: 'bolt',
  name: 'Bolt.new',
  nameKo: '볼트',
  description:
    'StackBlitz가 만든 AI 풀스택 앱 생성 도구입니다. 프롬프트를 입력하면 프론트엔드부터 백엔드까지 전체 앱을 브라우저에서 자동 생성하고 실행합니다. 배포까지 원클릭으로 가능합니다.',
  shortDescription: 'AI로 풀스택 웹앱을 즉시 생성',
  category: ['coding'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['일 제한 토큰', '기본 기능'] },
    { name: 'Pro', price: '$20/월', features: ['월 1,000만 토큰', '더 큰 프로젝트'] },
    { name: 'Team', price: '$40/월/인', features: ['팀 협업', '무제한 토큰'] },
  ],
  url: 'https://bolt.new',
  screenshots: [],
  pros: [
    '브라우저에서 전체 앱 생성 및 실행',
    '배포까지 원클릭',
    '프론트엔드 + 백엔드 동시 생성',
    '설치 없이 바로 시작',
  ],
  cons: [
    '무료 토큰이 적음',
    '복잡한 앱은 한계가 있음',
    '생성된 코드 품질이 불안정할 수 있음',
  ],
  tags: ['코딩', '무료', '풀스택', '웹앱', '노코드'],
  alternatives: ['v0', 'cursor', 'lovable'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
