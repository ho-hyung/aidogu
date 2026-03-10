import type { Tool } from '@/types/tool'

export const luma: Tool = {
  slug: 'luma',
  name: 'Luma Dream Machine',
  nameKo: '루마 드림 머신',
  description:
    'Luma AI가 개발한 AI 영상 생성 플랫폼입니다. Dream Machine 모델로 텍스트나 이미지에서 고품질 영상을 생성할 수 있으며, 자연스러운 모션과 물리 시뮬레이션이 강점입니다. 웹 브라우저에서 간편하게 사용할 수 있습니다.',
  shortDescription: 'Luma AI의 고품질 텍스트/이미지→영상 생성 플랫폼',
  category: ['video'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 30회 생성', '기본 해상도', '워터마크'] },
    { name: 'Standard', price: '$23.99/월', features: ['월 120회 생성', '720p 해상도', '워터마크 제거'] },
    { name: 'Pro', price: '$79.99/월', features: ['월 400회 생성', '1080p 해상도', '우선 처리'] },
  ],
  url: 'https://lumalabs.ai/dream-machine',
  screenshots: [],
  pros: [
    '자연스러운 물리 기반 모션 생성',
    '무료 버전으로 충분히 체험 가능',
    '웹에서 바로 사용 가능한 간편함',
    '이미지→영상 변환 품질이 우수',
  ],
  cons: [
    '무료 버전은 생성 횟수 제한',
    '긴 영상 생성은 아직 어려움',
    '세밀한 영상 제어가 제한적',
  ],
  tags: ['영상생성', '부분무료', '비디오', 'AI영상'],
  alternatives: ['runway', 'pika', 'sora', 'kling-ai'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
