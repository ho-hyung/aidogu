import type { Tool } from '@/types/tool'

export const notionAi: Tool = {
  slug: 'notion-ai',
  name: 'Notion AI',
  nameKo: '노션 AI',
  description:
    'Notion에 내장된 AI 어시스턴트입니다. 문서 요약, 글쓰기, 번역, 할 일 정리 등을 Notion 워크스페이스 안에서 바로 처리합니다. 기존 문서 컨텍스트를 이해하여 정확한 결과를 제공합니다.',
  shortDescription: 'Notion 워크스페이스 내장 AI 어시스턴트',
  category: ['writing', 'productivity'],
  pricing: 'paid',
  pricingPlans: [
    { name: 'AI 애드온', price: '$10/월/인', features: ['Notion 구독에 추가', 'AI 글쓰기', '요약', '번역'] },
  ],
  url: 'https://notion.so/product/ai',
  screenshots: [],
  pros: [
    'Notion 문서와 완벽한 연동',
    '기존 문서 컨텍스트 활용',
    '회의록 요약, 번역 등 실용적',
    '팀 협업에 유용',
  ],
  cons: [
    'Notion 사용자만 이용 가능',
    '추가 비용 발생',
    '범용 AI 대비 기능 제한적',
  ],
  tags: ['글쓰기', '생산성', '유료', '문서', '협업'],
  alternatives: ['chatgpt', 'claude', 'wrtn'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
