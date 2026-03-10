import type { Tool } from '@/types/tool'

export const aiDungeon: Tool = {
  slug: 'ai-dungeon',
  name: 'AI Dungeon',
  nameKo: 'AI 던전',
  description: 'AI 기반 인터랙티브 스토리 생성 게임입니다. 텍스트를 입력하면 AI가 이야기를 이어가며, 무한한 가능성의 모험을 즐길 수 있습니다. 판타지, SF, 미스터리 등 다양한 장르를 지원합니다.',
  shortDescription: 'AI가 만드는 무한 인터랙티브 스토리',
  category: ['writing'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['기본 모델', '제한된 액션'] },
    { name: 'Hero', price: '$9.99/월', features: ['고급 모델', '무제한 액션', '이미지 생성'] },
    { name: 'Legend', price: '$29.99/월', features: ['최고 모델', '우선 접근'] },
  ],
  url: 'https://aidungeon.com',
  screenshots: [],
  pros: ['무한한 스토리 가능성', '다양한 장르 선택', '창작 글쓰기 연습에 유용', '멀티플레이어 모드'],
  cons: ['무료 버전 품질 제한', '가끔 스토리 일관성 떨어짐', '한국어 지원 부족'],
  tags: ['글쓰기', '무료', '스토리', '게임', '창작'],
  alternatives: ['chatgpt', 'character-ai'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
