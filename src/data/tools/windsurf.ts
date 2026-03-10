import type { Tool } from '@/types/tool'

export const windsurf: Tool = {
  slug: 'windsurf',
  name: 'Windsurf',
  nameKo: '윈드서프',
  description:
    'Codeium이 만든 AI 코드 에디터입니다. VS Code 기반으로 Cascade라는 AI 에이전트가 코드를 자율적으로 작성하고 수정합니다. 무료 플랜이 넉넉해서 입문자에게 추천합니다.',
  shortDescription: 'Codeium의 AI 에이전트 코드 에디터',
  category: ['coding'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['무제한 자동완성', '월 일부 프리미엄 크레딧'] },
    { name: 'Pro', price: '$15/월', features: ['무제한 프리미엄 요청', '빠른 응답'] },
  ],
  url: 'https://windsurf.com',
  screenshots: [],
  pros: [
    '넉넉한 무료 플랜',
    'Cascade 에이전트가 자율적으로 코드 작성',
    'VS Code 기반 익숙한 환경',
    '가격이 Cursor보다 저렴',
  ],
  cons: [
    'Cursor 대비 커뮤니티가 작음',
    '대형 프로젝트 컨텍스트 처리 아직 미흡',
    '일부 고급 기능 부족',
  ],
  tags: ['코딩', '에디터', '무료', '개발', 'AI코딩'],
  alternatives: ['cursor', 'github-copilot', 'claude-code'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
