import type { Tool } from '@/types/tool'

export const clova: Tool = {
  slug: 'clova',
  name: 'CLOVA X',
  nameKo: '클로바 X',
  description:
    '네이버가 만든 한국어 특화 AI 어시스턴트입니다. 하이퍼클로바X 모델 기반으로 한국어 이해가 뛰어나며, 네이버 검색 연동, 한국 문화 이해 등에서 강점을 보입니다.',
  shortDescription: '네이버의 한국어 특화 AI 어시스턴트',
  category: ['chatbot', 'korea', 'search'],
  pricing: 'free',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['기본 대화', '네이버 연동', '한국어 최적화'] },
  ],
  url: 'https://clova-x.naver.com',
  screenshots: [],
  pros: [
    '한국어 이해가 매우 뛰어남',
    '네이버 검색/쇼핑 연동',
    '한국 문화와 맥락 이해',
    '완전 무료 사용',
  ],
  cons: [
    '영어 성능이 글로벌 AI에 미치지 못함',
    '코딩 능력이 부족',
    '기능 확장성이 제한적',
  ],
  tags: ['챗봇', '한국어', '무료', '네이버', '검색'],
  alternatives: ['wrtn', 'chatgpt', 'gemini'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
