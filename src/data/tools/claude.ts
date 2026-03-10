import type { Tool } from '@/types/tool'

export const claude: Tool = {
  slug: 'claude',
  name: 'Claude',
  nameKo: '클로드',
  description:
    'Anthropic이 만든 AI 어시스턴트입니다. 긴 문서 분석, 코딩, 글쓰기에 특히 강하며, 안전성과 정확성을 중시하는 것이 특징입니다. Claude Code를 통해 터미널 기반 코딩 지원도 제공합니다.',
  shortDescription: 'Anthropic의 안전하고 정확한 AI 어시스턴트',
  category: ['writing', 'coding', 'chatbot'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['Claude Sonnet', '제한된 사용량'] },
    { name: 'Pro', price: '$20/월', features: ['Claude Opus 사용', '더 많은 사용량', '프로젝트 기능'] },
    { name: 'Team', price: '$30/월/인', features: ['팀 협업', '관리자 기능'] },
  ],
  url: 'https://claude.ai',
  screenshots: ['/screenshots/claude-1.png', '/screenshots/claude-2.png'],
  pros: [
    '긴 문서 분석에 매우 강함 (20만 토큰 컨텍스트)',
    '코딩 능력이 뛰어남',
    '답변의 정확성과 안전성이 높음',
    'Artifacts로 코드/문서를 실시간 생성',
  ],
  cons: [
    '무료 버전의 사용량 제한이 빡빡함',
    '이미지 생성 기능 없음',
    'ChatGPT 대비 플러그인 생태계가 작음',
  ],
  tags: ['글쓰기', '코딩', '무료', '챗봇', '문서분석'],
  alternatives: ['chatgpt', 'gemini', 'perplexity'],
  featured: true,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
