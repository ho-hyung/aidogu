import type { Tool } from '@/types/tool'

export const deepl: Tool = {
  slug: 'deepl',
  name: 'DeepL',
  nameKo: '딥엘',
  description:
    'AI 기반 전문 번역 도구입니다. Google 번역보다 자연스러운 번역 품질로 유명하며, 문서 파일(PDF, Word) 번역, 용어집 관리 등 전문 번역 기능을 제공합니다.',
  shortDescription: '가장 자연스러운 AI 번역 도구',
  category: ['writing', 'productivity'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 1,500자 제한', '기본 번역'] },
    { name: 'Starter', price: '$8.74/월', features: ['무제한 텍스트', '문서 5개/월'] },
    { name: 'Advanced', price: '$28.74/월', features: ['무제한 문서', '용어집', 'API'] },
  ],
  url: 'https://deepl.com',
  screenshots: [],
  pros: [
    'Google 번역보다 자연스러운 번역',
    '전문 문서 번역 지원 (PDF, DOCX)',
    '용어집으로 일관된 번역 가능',
    '한국어↔영어 품질 우수',
  ],
  cons: [
    '무료 버전 글자 수 제한',
    '지원 언어가 Google보다 적음',
    '실시간 대화 번역은 불가',
  ],
  tags: ['번역', '글쓰기', '무료', '생산성', '문서'],
  alternatives: ['chatgpt', 'google-translate', 'papago'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
