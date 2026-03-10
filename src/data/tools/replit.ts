import type { Tool } from '@/types/tool'

export const replit: Tool = {
  slug: 'replit',
  name: 'Replit',
  nameKo: '레플릿',
  description: '브라우저 기반 AI 코딩 환경입니다. AI Agent가 프롬프트에서 전체 앱을 생성하고, 실시간 협업과 즉시 배포가 가능합니다. 50개 이상의 프로그래밍 언어를 지원합니다.',
  shortDescription: '브라우저에서 AI로 앱을 만들고 배포',
  category: ['coding'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['기본 환경', '제한된 AI'] },
    { name: 'Replit Core', price: '$25/월', features: ['AI Agent', '더 많은 리소스', '배포'] },
    { name: 'Teams', price: '$40/월/인', features: ['팀 협업', '보안', '관리'] },
  ],
  url: 'https://replit.com',
  screenshots: [],
  pros: ['설치 없이 브라우저에서 코딩', 'AI Agent가 전체 앱 생성', '즉시 배포 가능', '50+ 언어 지원'],
  cons: ['무료 리소스 제한', '복잡한 프로젝트는 느림', '로컬 개발 대비 제약이 있음'],
  tags: ['코딩', '무료', '웹IDE', '배포', 'AI코딩'],
  alternatives: ['bolt', 'lovable', 'cursor'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
