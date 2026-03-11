import type { Tool } from '@/types/tool'

export const runway: Tool = {
  slug: 'runway',
  name: 'Runway',
  nameKo: '런웨이',
  description:
    'AI 영상 생성 및 편집 플랫폼입니다. Gen-3 Alpha 모델로 텍스트/이미지에서 고품질 영상을 생성할 수 있으며, 영상 편집, 배경 제거, 모션 트래킹 등 30가지 이상의 AI 도구를 제공합니다.',
  shortDescription: '전문가용 AI 영상 생성/편집 플랫폼',
  category: ['video'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['125 크레딧', '기본 도구'] },
    { name: 'Standard', price: '$12/월', features: ['월 625 크레딧', '워터마크 제거'] },
    { name: 'Pro', price: '$28/월', features: ['월 2,250 크레딧', '4K 해상도'] },
  ],
  url: 'https://runwayml.com',
  affiliateUrl: 'https://runwayml.com?ref=aidogu',
  screenshots: [],
  pros: [
    'AI 영상 생성 품질이 업계 최고 수준',
    '다양한 AI 편집 도구 올인원',
    '웹 브라우저에서 바로 사용 가능',
    '이미지→영상 변환이 뛰어남',
  ],
  cons: [
    '크레딧 소모가 빠름',
    '무료 크레딧이 적음',
    '긴 영상 생성은 비용이 높음',
  ],
  tags: ['영상생성', '영상편집', '부분무료', '비디오'],
  alternatives: ['pika', 'sora', 'kling-ai'],
  featured: true,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
