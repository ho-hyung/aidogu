import type { Tool } from '@/types/tool'

export const grammarly: Tool = {
  slug: 'grammarly',
  name: 'Grammarly',
  nameKo: '그래머리',
  description:
    'AI 기반 영문 교정 도구입니다. 문법, 맞춤법, 스타일, 톤 등을 실시간으로 교정해주며, GrammarlyGO 기능으로 AI 글쓰기도 지원합니다. 브라우저 확장, 데스크톱 앱 등 어디서든 사용 가능합니다.',
  shortDescription: 'AI 영문 교정 및 글쓰기 도구',
  category: ['writing'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['기본 문법 교정', '맞춤법 검사'] },
    { name: 'Premium', price: '$12/월', features: ['고급 교정', 'AI 리라이팅', '톤 감지'] },
    { name: 'Business', price: '$15/월/인', features: ['팀 기능', '스타일 가이드'] },
  ],
  url: 'https://grammarly.com',
  affiliateUrl: 'https://grammarly.com?ref=aidogu',
  screenshots: [],
  pros: [
    '영문 교정 정확도가 매우 높음',
    '브라우저/앱 어디서든 사용',
    '톤과 스타일 제안',
    '무료 버전도 유용',
  ],
  cons: [
    '한국어 미지원',
    '프리미엄 기능은 유료',
    '영어 이외 언어 지원 부족',
  ],
  tags: ['글쓰기', '영어', '무료', '교정', '문법'],
  alternatives: ['deepl', 'chatgpt', 'writesonic'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
