import type { Tool } from '@/types/tool'

export const v0: Tool = {
  slug: 'v0',
  name: 'v0',
  nameKo: '브이제로',
  description:
    'Vercel이 만든 AI UI 생성 도구입니다. 프롬프트를 입력하면 React/Next.js 기반의 UI 컴포넌트를 자동 생성합니다. shadcn/ui와 Tailwind CSS를 사용하여 실제 프로덕션에 바로 사용할 수 있는 코드를 생성합니다.',
  shortDescription: 'AI로 React UI를 자동 생성하는 도구',
  category: ['coding', 'design'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 제한 생성', '기본 기능'] },
    { name: 'Premium', price: '$20/월', features: ['더 많은 생성', '비공개 프로젝트'] },
  ],
  url: 'https://v0.dev',
  screenshots: [],
  pros: [
    '프로덕션 레벨 React 코드 생성',
    'shadcn/ui + Tailwind 기반',
    '디자인 감각이 뛰어남',
    '프론트엔드 개발 시간 대폭 단축',
  ],
  cons: [
    'React/Next.js 생태계에 한정',
    '무료 사용 제한',
    '복잡한 로직은 직접 구현 필요',
  ],
  tags: ['코딩', '디자인', '무료', 'React', 'UI'],
  alternatives: ['cursor', 'claude-code', 'bolt'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
