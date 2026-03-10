import type { Tool } from '@/types/tool'

export const adobeFirefly: Tool = {
  slug: 'adobe-firefly',
  name: 'Adobe Firefly',
  nameKo: '어도비 파이어플라이',
  description:
    'Adobe가 만든 AI 이미지 생성 도구입니다. 상업적으로 안전한 이미지를 생성하며, Photoshop, Illustrator 등 Adobe 제품과 긴밀하게 연동됩니다. 저작권 걱정 없이 사용할 수 있는 것이 큰 장점입니다.',
  shortDescription: '상업적으로 안전한 Adobe AI 이미지 생성',
  category: ['image', 'design'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 25 크레딧', '기본 생성'] },
    { name: 'Premium', price: '$4.99/월', features: ['월 100 크레딧', '고급 기능'] },
    { name: 'Creative Cloud', price: '$54.99/월', features: ['Photoshop 포함', '무제한'] },
  ],
  url: 'https://firefly.adobe.com',
  screenshots: [],
  pros: [
    '상업적 사용 안전 (저작권 보장)',
    'Adobe 제품과 완벽 연동',
    'Photoshop에서 바로 사용',
    '디자이너 친화적 인터페이스',
  ],
  cons: [
    '무료 크레딧이 적음',
    '이미지 품질이 Midjourney에 미치지 못함',
    '독립 사용 시 기능 제한',
  ],
  tags: ['이미지생성', '디자인', '무료', 'Adobe', '상업용'],
  alternatives: ['midjourney', 'dall-e', 'canva-ai'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
