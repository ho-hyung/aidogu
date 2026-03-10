import type { Tool } from '@/types/tool'

export const gemini: Tool = {
  slug: 'gemini',
  name: 'Gemini',
  nameKo: '제미나이',
  description:
    'Google이 만든 AI 어시스턴트입니다. Google 검색, Gmail, Google Docs 등 구글 생태계와 긴밀하게 연동되며, 멀티모달 능력(텍스트, 이미지, 코드)이 뛰어납니다. 무료로 Gemini Pro를 사용할 수 있습니다.',
  shortDescription: 'Google의 멀티모달 AI 어시스턴트',
  category: ['writing', 'coding', 'chatbot'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['Gemini Pro', '기본 기능'] },
    { name: 'Advanced', price: '$19.99/월', features: ['Gemini Ultra', 'Google One 2TB', '우선 액세스'] },
  ],
  url: 'https://gemini.google.com',
  screenshots: [],
  pros: [
    'Google 서비스와 완벽한 연동',
    '멀티모달 능력이 뛰어남',
    '무료 버전이 충분히 강력함',
    '실시간 인터넷 검색 가능',
  ],
  cons: [
    '한국어 성능이 ChatGPT 대비 약간 부족',
    '코딩 능력은 Claude/ChatGPT보다 약함',
    '가끔 할루시네이션 발생',
  ],
  tags: ['글쓰기', '검색', '무료', '챗봇', '구글'],
  alternatives: ['chatgpt', 'claude', 'perplexity'],
  featured: true,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
