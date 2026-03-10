import type { Tool } from '@/types/tool'

export const stableDiffusion: Tool = {
  slug: 'stable-diffusion',
  name: 'Stable Diffusion',
  nameKo: '스테이블 디퓨전',
  description:
    'Stability AI가 개발한 오픈소스 이미지 생성 AI입니다. 로컬 PC에서 무료로 실행할 수 있으며, 커뮤니티의 다양한 모델과 확장 기능을 활용할 수 있습니다. 커스터마이징의 자유도가 가장 높습니다.',
  shortDescription: '오픈소스 AI 이미지 생성 도구',
  category: ['image', 'design'],
  pricing: 'free',
  pricingPlans: [
    { name: '로컬 설치', price: '무료', features: ['무제한 생성', '완전한 커스터마이징', 'GPU 필요'] },
    { name: 'DreamStudio', price: '크레딧 기반', features: ['웹 UI', 'GPU 불필요', '간편 사용'] },
  ],
  url: 'https://stability.ai',
  screenshots: [],
  pros: [
    '완전 무료 오픈소스',
    '커스터마이징 자유도 최고',
    '수천 개의 커뮤니티 모델',
    'LoRA, ControlNet 등 확장 기능',
  ],
  cons: [
    '설치와 설정이 복잡함',
    '고사양 GPU가 필요 (VRAM 8GB+)',
    '기본 품질은 Midjourney에 미치지 못함',
  ],
  tags: ['이미지생성', '무료', '오픈소스', '로컬', '커스터마이징'],
  alternatives: ['midjourney', 'dall-e', 'leonardo-ai'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
