import type { Tool } from '@/types/tool'

export const wrtn: Tool = {
  slug: 'wrtn',
  name: '뤼튼',
  nameKo: '뤼튼',
  description:
    '한국 AI 스타트업 뤼튼테크놀로지가 만든 AI 플랫폼입니다. GPT-4, Claude 등 다양한 AI 모델을 무료로 사용할 수 있으며, 한국어에 최적화된 프롬프트와 도구를 제공합니다.',
  shortDescription: '한국어에 최적화된 무료 AI 플랫폼',
  category: ['writing', 'chatbot', 'korea'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['GPT-4 무료 사용', '다양한 AI 도구', '한국어 최적화'] },
    { name: 'Pro', price: '₩12,900/월', features: ['무제한 사용', '우선 응답', '광고 제거'] },
  ],
  url: 'https://wrtn.ai',
  screenshots: ['/screenshots/wrtn-1.png', '/screenshots/wrtn-2.png'],
  pros: [
    'GPT-4를 무료로 사용 가능',
    '한국어에 최적화된 인터페이스',
    '다양한 프롬프트 템플릿 제공',
    '이미지 생성도 무료',
  ],
  cons: [
    '무료 버전에 광고가 있음',
    '간혹 응답 속도가 느릴 수 있음',
    '고급 기능은 Pro 필요',
  ],
  tags: ['글쓰기', '무료', '한국어', '챗봇', 'GPT-4'],
  alternatives: ['chatgpt', 'claude', 'gemini'],
  featured: true,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
