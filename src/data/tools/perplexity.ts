import type { Tool } from '@/types/tool'

export const perplexity: Tool = {
  slug: 'perplexity',
  name: 'Perplexity',
  nameKo: '퍼플렉시티',
  description:
    'AI 기반 검색 엔진입니다. 질문을 하면 인터넷에서 실시간으로 정보를 찾아 출처와 함께 답변해줍니다. 학술 논문, 뉴스, 웹사이트 등 다양한 소스를 활용하며, 답변의 정확도가 높습니다.',
  shortDescription: '출처를 알려주는 AI 검색 엔진',
  category: ['search', 'chatbot'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['기본 검색', '하루 제한 Pro 검색'] },
    { name: 'Pro', price: '$20/월', features: ['무제한 Pro 검색', 'GPT-4/Claude 선택', '파일 업로드'] },
  ],
  url: 'https://perplexity.ai',
  screenshots: [],
  pros: [
    '실시간 인터넷 검색으로 최신 정보 제공',
    '모든 답변에 출처(소스) 표시',
    '학술 검색에 매우 유용',
    '깔끔한 UI/UX',
  ],
  cons: [
    '창작 글쓰기에는 부적합',
    '무료 버전의 Pro 검색 횟수 제한',
    '한국어 소스 검색이 부족할 수 있음',
  ],
  tags: ['검색', '리서치', '무료', '학술', '출처'],
  alternatives: ['chatgpt', 'gemini', 'you-com'],
  featured: true,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
