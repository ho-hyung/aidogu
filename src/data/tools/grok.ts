import type { Tool } from '@/types/tool'

export const grok: Tool = {
  slug: 'grok',
  name: 'Grok',
  nameKo: '그록',
  description:
    'xAI가 개발한 대화형 AI 챗봇입니다. X(구 트위터) 플랫폼과 통합되어 실시간 정보 검색이 가능하며, 유머러스하고 직설적인 답변 스타일이 특징입니다. Grok-2 모델은 추론 능력이 뛰어나고, 이미지 생성 및 분석 기능도 제공합니다.',
  shortDescription: 'xAI의 실시간 검색 기반 대화형 AI 챗봇',
  category: ['chatbot', 'search'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['기본 Grok 모델', '제한된 메시지 수', 'X 플랫폼 통합'] },
    { name: 'X Premium', price: '$8/월', features: ['Grok-2 모델', '더 많은 메시지', '이미지 생성'] },
    { name: 'X Premium+', price: '$16/월', features: ['Grok-2 무제한', '우선 접근', '고급 분석'] },
  ],
  url: 'https://grok.x.ai',
  screenshots: [],
  pros: [
    'X 플랫폼과 연동한 실시간 정보 접근',
    '유머러스하고 솔직한 답변 스타일',
    '무료 버전으로도 기본 기능 사용 가능',
    '이미지 생성 및 분석 기능 제공',
  ],
  cons: [
    'X 플랫폼 의존도가 높음',
    '한국어 지원이 다른 챗봇 대비 부족',
    '무료 버전의 사용량 제한이 있음',
  ],
  tags: ['챗봇', '검색', 'xAI', '실시간', '부분무료'],
  alternatives: ['chatgpt', 'claude', 'gemini', 'perplexity'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
