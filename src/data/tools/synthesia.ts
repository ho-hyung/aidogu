import type { Tool } from '@/types/tool'

export const synthesia: Tool = {
  slug: 'synthesia',
  name: 'Synthesia',
  nameKo: '신세시아',
  description:
    '기업용 AI 아바타 영상 제작 플랫폼입니다. 230개 이상의 아바타와 140개 이상의 언어로 교육, 온보딩, 마케팅 영상을 대규모로 제작할 수 있습니다. 파워포인트 수준의 간편함으로 전문적인 영상을 만들 수 있어 Fortune 500 기업에서 널리 사용됩니다.',
  shortDescription: '기업용 AI 아바타 교육/온보딩 영상 제작 플랫폼',
  category: ['video', 'education'],
  pricing: 'paid',
  pricingPlans: [
    { name: 'Starter', price: '$22/월', features: ['월 10분 영상', '공개 아바타 90+', '1080p'] },
    { name: 'Creator', price: '$67/월', features: ['월 30분 영상', '공개 아바타 230+', '커스텀 아바타 1개'] },
    { name: 'Enterprise', price: '문의', features: ['무제한 영상', '전용 아바타', 'API 접근', 'SSO'] },
  ],
  url: 'https://www.synthesia.io',
  affiliateUrl: 'https://www.synthesia.io?ref=aidogu',
  screenshots: [],
  pros: [
    '기업 교육/온보딩 영상 제작에 최적화',
    '140개 이상 언어 지원으로 다국어 콘텐츠 용이',
    '파워포인트처럼 쉬운 편집 인터페이스',
    '높은 아바타 품질과 자연스러운 입 모양 동기화',
  ],
  cons: [
    '무료 체험이 매우 제한적',
    '크리에이티브 영상보다는 기업용에 특화',
    '커스텀 아바타는 비싼 요금제에서만 가능',
  ],
  tags: ['AI아바타', '교육', '기업용', '유료', '다국어'],
  alternatives: ['heygen', 'd-id', 'invideo'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
