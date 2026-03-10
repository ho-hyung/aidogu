import type { Tool } from '@/types/tool'

export const n8n: Tool = {
  slug: 'n8n',
  name: 'n8n',
  nameKo: '엔에잇엔',
  description:
    '오픈소스 워크플로우 자동화 도구입니다. 셀프 호스팅이 가능하며, AI 에이전트 워크플로우를 비주얼하게 만들 수 있습니다. LangChain 연동, RAG 파이프라인 등 AI 자동화에 강합니다.',
  shortDescription: '오픈소스 AI 워크플로우 자동화',
  category: ['automation', 'productivity'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Self-hosted', price: '무료', features: ['오픈소스', '무제한', '셀프 호스팅'] },
    { name: 'Starter', price: '$20/월', features: ['클라우드 호스팅', '월 2,500 실행'] },
    { name: 'Pro', price: '$50/월', features: ['월 10,000 실행', '고급 기능'] },
  ],
  url: 'https://n8n.io',
  screenshots: [],
  pros: [
    '오픈소스 무료 셀프 호스팅',
    'AI 에이전트 워크플로우 지원',
    '데이터가 외부로 나가지 않음',
    'LangChain, RAG 등 AI 연동',
  ],
  cons: [
    '셀프 호스팅에 기술 지식 필요',
    'Zapier보다 설정이 복잡',
    '앱 연동 수가 적음',
  ],
  tags: ['자동화', '오픈소스', '무료', 'AI에이전트', '워크플로우'],
  alternatives: ['zapier-ai', 'make'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
