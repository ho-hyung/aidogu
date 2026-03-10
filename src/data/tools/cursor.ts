import type { Tool } from '@/types/tool'

export const cursor: Tool = {
  slug: 'cursor',
  name: 'Cursor',
  nameKo: '커서',
  description:
    'AI가 내장된 코드 에디터입니다. VS Code를 기반으로 만들어졌으며, 코드 자동 완성, 리팩토링, 버그 수정, 코드 생성 등을 AI가 도와줍니다. 전체 프로젝트의 컨텍스트를 이해하여 정확한 코드를 생성합니다.',
  shortDescription: 'AI 기반 코드 에디터 (VS Code 포크)',
  category: ['coding'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Hobby', price: '무료', features: ['월 2,000 자동완성', '월 50 프리미엄 요청'] },
    { name: 'Pro', price: '$20/월', features: ['무제한 자동완성', '월 500 프리미엄 요청'] },
    { name: 'Business', price: '$40/월/인', features: ['팀 관리', '보안 기능', 'SAML SSO'] },
  ],
  url: 'https://cursor.com',
  screenshots: [],
  pros: [
    'VS Code 기반이라 익숙한 환경',
    '프로젝트 전체 컨텍스트 이해',
    '인라인 코드 수정이 편리',
    'Claude, GPT-4 등 다양한 모델 지원',
  ],
  cons: [
    '무료 버전 사용량 제한이 빡빡함',
    'VS Code 확장 일부 호환 안 됨',
    '대형 프로젝트에서 느릴 수 있음',
  ],
  tags: ['코딩', '에디터', '무료', '개발', 'AI코딩'],
  alternatives: ['github-copilot', 'claude-code', 'windsurf'],
  featured: true,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
