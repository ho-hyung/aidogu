import type { Tool } from '@/types/tool'

export const githubCopilot: Tool = {
  slug: 'github-copilot',
  name: 'GitHub Copilot',
  nameKo: '깃허브 코파일럿',
  description:
    'GitHub과 OpenAI가 만든 AI 코딩 어시스턴트입니다. VS Code, JetBrains 등 주요 IDE에서 플러그인으로 사용할 수 있으며, 코드 자동 완성과 채팅 기능을 제공합니다.',
  shortDescription: 'GitHub의 AI 페어 프로그래머',
  category: ['coding'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 2,000 자동완성', '월 50 채팅'] },
    { name: 'Pro', price: '$10/월', features: ['무제한 자동완성', '무제한 채팅'] },
    { name: 'Business', price: '$19/월/인', features: ['조직 관리', '보안 필터'] },
  ],
  url: 'https://github.com/features/copilot',
  screenshots: [],
  pros: [
    'GitHub 생태계와 완벽 연동',
    '대부분의 IDE 지원',
    '코드 자동완성 속도가 빠름',
    '무료 플랜 제공',
  ],
  cons: [
    '프로젝트 전체 컨텍스트 이해가 Cursor보다 부족',
    '무료 버전 사용량 제한',
    'AI 채팅 기능이 제한적',
  ],
  tags: ['코딩', '개발', '무료', 'GitHub', 'AI코딩'],
  alternatives: ['cursor', 'claude-code', 'windsurf'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
