import type { Tool } from '@/types/tool'

export const claudeCode: Tool = {
  slug: 'claude-code',
  name: 'Claude Code',
  nameKo: '클로드 코드',
  description:
    'Anthropic이 만든 터미널 기반 AI 코딩 에이전트입니다. CLI에서 직접 코드를 읽고, 수정하고, 실행할 수 있으며, 복잡한 프로젝트도 자율적으로 처리합니다. Git, 테스트, 빌드 등 전체 개발 워크플로우를 지원합니다.',
  shortDescription: 'Anthropic의 터미널 AI 코딩 에이전트',
  category: ['coding'],
  pricing: 'paid',
  pricingPlans: [
    { name: 'Claude Pro + Code', price: '$20/월', features: ['제한된 사용량', 'Claude Pro 구독 필요'] },
    { name: 'Max 5x', price: '$100/월', features: ['5배 사용량'] },
    { name: 'Max 20x', price: '$200/월', features: ['20배 사용량', '대규모 프로젝트'] },
  ],
  url: 'https://docs.anthropic.com/en/docs/claude-code',
  screenshots: [],
  pros: [
    '터미널에서 자율적으로 코드 작업 수행',
    'Git, 테스트, 빌드 등 전체 워크플로우 처리',
    '대규모 코드베이스 컨텍스트 이해',
    'MCP 서버 등 확장 가능',
  ],
  cons: [
    '터미널 사용에 익숙해야 함',
    'GUI가 없어 진입장벽이 있음',
    '비용이 높은 편',
  ],
  tags: ['코딩', '터미널', 'CLI', '에이전트', 'AI코딩'],
  alternatives: ['cursor', 'github-copilot', 'windsurf'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
