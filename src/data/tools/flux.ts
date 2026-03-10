import type { Tool } from '@/types/tool'

export const flux: Tool = {
  slug: 'flux',
  name: 'FLUX',
  nameKo: '플럭스',
  description:
    'Black Forest Labs가 개발한 오픈소스 기반 AI 이미지 생성 모델입니다. FLUX.1 [pro], [dev], [schnell] 등 다양한 모델 변형을 제공하며, 텍스트 렌더링과 프롬프트 준수 능력이 뛰어납니다. Replicate, fal.ai 등 다양한 플랫폼에서 사용할 수 있습니다.',
  shortDescription: 'Black Forest Labs의 고품질 오픈소스 이미지 생성 모델',
  category: ['image'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'FLUX.1 [schnell]', price: '무료', features: ['빠른 생성', '오픈소스', '개인/상업 사용'] },
    { name: 'FLUX.1 [dev]', price: '무료 (비상업)', features: ['중간 품질', '오픈 가중치', '연구용'] },
    { name: 'FLUX.1 [pro]', price: 'API 종량제', features: ['최고 품질', '상업용 라이선스', '빠른 속도'] },
  ],
  url: 'https://blackforestlabs.ai',
  screenshots: [],
  pros: [
    '오픈소스 모델로 로컬 실행 가능',
    '텍스트 렌더링 능력이 뛰어남',
    '프롬프트 준수 능력이 우수',
    '다양한 플랫폼에서 접근 가능',
  ],
  cons: [
    '직접 실행 시 높은 GPU 사양 필요',
    '공식 웹 인터페이스가 제한적',
    'Pro 모델은 API 비용 발생',
  ],
  tags: ['이미지생성', '오픈소스', '부분무료', 'AI아트'],
  alternatives: ['midjourney', 'dall-e', 'stable-diffusion', 'ideogram', 'leonardo-ai'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
