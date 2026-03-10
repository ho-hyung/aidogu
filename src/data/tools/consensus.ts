import type { Tool } from '@/types/tool'

export const consensus: Tool = {
  slug: 'consensus',
  name: 'Consensus',
  nameKo: '컨센서스',
  description: 'AI 기반 학술 논문 검색 엔진입니다. 질문을 입력하면 2억 개 이상의 학술 논문에서 근거를 찾아 답변합니다. 연구자, 학생, 콘텐츠 크리에이터에게 유용합니다.',
  shortDescription: 'AI 학술 논문 검색 및 분석',
  category: ['search', 'education'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['기본 검색', '일 제한 AI 분석'] },
    { name: 'Premium', price: '$8.99/월', features: ['무제한 AI 분석', 'GPT-4 요약', '북마크'] },
  ],
  url: 'https://consensus.app',
  screenshots: [],
  pros: ['2억+ 학술 논문 기반', '근거 중심 답변 제공', '논문 요약 AI', '무료 사용 가능'],
  cons: ['영어 논문 중심', '최신 논문 반영 지연', '한국어 검색 미지원'],
  tags: ['검색', '학술', '무료', '논문', '연구'],
  alternatives: ['perplexity', 'gemini'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
