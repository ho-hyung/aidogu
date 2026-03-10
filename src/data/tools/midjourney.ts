import type { Tool } from '@/types/tool'

export const midjourney: Tool = {
  slug: 'midjourney',
  name: 'Midjourney',
  nameKo: '미드저니',
  description:
    'Discord 기반의 AI 이미지 생성 도구입니다. 프롬프트를 입력하면 고품질의 예술적 이미지를 생성합니다. 특히 일러스트, 컨셉 아트, 사진 스타일 이미지 생성에 강합니다.',
  shortDescription: '최고 품질의 AI 이미지 생성 도구',
  category: ['image', 'design'],
  pricing: 'paid',
  pricingPlans: [
    { name: 'Basic', price: '$10/월', features: ['월 200장', '3.3시간 GPU 사용'] },
    { name: 'Standard', price: '$30/월', features: ['월 무제한 (릴렉스)', '15시간 GPU 사용'] },
    { name: 'Pro', price: '$60/월', features: ['월 무제한', '30시간 GPU 사용', 'Stealth 모드'] },
  ],
  url: 'https://midjourney.com',
  screenshots: ['/screenshots/midjourney-1.png', '/screenshots/midjourney-2.png'],
  pros: [
    '업계 최고 수준의 이미지 품질',
    '예술적이고 감각적인 결과물',
    '활발한 커뮤니티',
    'V6로 텍스트 렌더링도 가능',
  ],
  cons: [
    '무료 체험판 없음',
    'Discord 기반이라 진입 장벽이 있음',
    '프롬프트 학습 곡선이 있음',
  ],
  tags: ['이미지생성', '유료', '디자인', '일러스트', '아트'],
  alternatives: ['dall-e', 'stable-diffusion', 'leonardo-ai'],
  featured: true,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
