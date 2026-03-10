import type { Tool } from '@/types/tool'

export const lovable: Tool = {
  slug: 'lovable',
  name: 'Lovable',
  nameKo: '러버블',
  description:
    'AI 웹앱 빌더입니다. 자연어로 설명하면 디자인이 예쁜 풀스택 웹앱을 자동 생성합니다. Supabase 연동으로 백엔드/인증까지 자동 설정하며, GitHub 연동과 배포도 지원합니다.',
  shortDescription: '디자인이 예쁜 AI 웹앱 빌더',
  category: ['coding'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['일 제한 메시지', '기본 기능'] },
    { name: 'Starter', price: '$20/월', features: ['월 더 많은 메시지', 'GitHub 연동'] },
    { name: 'Pro', price: '$50/월', features: ['무제한 메시지', '팀 기능'] },
  ],
  url: 'https://lovable.dev',
  screenshots: [],
  pros: [
    '생성된 UI 디자인 품질이 높음',
    'Supabase 백엔드 자동 연동',
    'GitHub 연동 및 배포 지원',
    '비개발자도 앱 제작 가능',
  ],
  cons: [
    '무료 메시지 수 제한',
    '복잡한 비즈니스 로직 구현 한계',
    '커스터마이징 자유도 낮음',
  ],
  tags: ['코딩', '무료', '웹앱', '노코드', '디자인'],
  alternatives: ['bolt', 'v0', 'cursor'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
