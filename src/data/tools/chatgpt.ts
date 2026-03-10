import type { Tool } from '@/types/tool'

export const chatgpt: Tool = {
  slug: 'chatgpt',
  name: 'ChatGPT',
  nameKo: '챗GPT',
  description:
    'OpenAI가 만든 대화형 AI 어시스턴트입니다. 글쓰기, 코딩, 번역, 요약, 브레인스토밍 등 다양한 작업을 자연어로 처리할 수 있으며, GPTs와 플러그인 생태계를 통해 기능을 확장할 수 있습니다.',
  shortDescription: 'OpenAI의 범용 대화형 AI 어시스턴트',
  category: ['writing', 'coding', 'chatbot'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['GPT-4o mini', '제한된 GPT-4o 사용'] },
    { name: 'Plus', price: '$20/월', features: ['GPT-4o 무제한', 'GPTs 생성', 'DALL-E 이미지 생성'] },
    { name: 'Pro', price: '$200/월', features: ['무제한 사용', 'o1 pro 모드', '높은 우선순위'] },
  ],
  url: 'https://chat.openai.com',
  screenshots: ['/screenshots/chatgpt-1.png', '/screenshots/chatgpt-2.png'],
  pros: [
    '가장 범용적인 AI 어시스턴트',
    'GPTs와 플러그인으로 기능 확장 가능',
    '무료 버전으로도 충분히 활용 가능',
    '한국어 지원이 우수함',
  ],
  cons: [
    '무료 버전은 사용량 제한이 있음',
    'Pro 요금제가 비싼 편',
    '가끔 부정확한 정보를 생성할 수 있음',
  ],
  tags: ['글쓰기', '코딩', '무료', '챗봇', 'GPT-4o'],
  alternatives: ['claude', 'gemini', 'perplexity'],
  featured: true,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
