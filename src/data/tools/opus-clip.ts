import type { Tool } from '@/types/tool'

export const opusClip: Tool = {
  slug: 'opus-clip',
  name: 'Opus Clip',
  nameKo: '오퍼스 클립',
  description:
    'AI 기반 숏폼 영상 자동 편집 도구입니다. 긴 영상에서 바이럴 가능성이 높은 하이라이트를 자동으로 추출하고, 자막, 리프레이밍, B-roll 삽입까지 자동 처리합니다. YouTube, TikTok, Instagram Reels 등 숏폼 플랫폼에 최적화되어 있습니다.',
  shortDescription: 'AI가 긴 영상에서 숏폼 하이라이트를 자동 추출/편집',
  category: ['video', 'marketing'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 3회 업로드', '기본 클립 생성', '워터마크'] },
    { name: 'Starter', price: '$9/월', features: ['월 100분 업로드', '자막 커스텀', '워터마크 제거'] },
    { name: 'Pro', price: '$29/월', features: ['월 300분 업로드', 'B-roll AI', '브랜드 키트'] },
  ],
  url: 'https://www.opus.pro',
  screenshots: [],
  pros: [
    '긴 영상에서 자동으로 핵심 클립 추출',
    '바이럴 스코어로 성과 예측 가능',
    '자막과 리프레이밍 자동 처리',
    '숏폼 플랫폼별 최적 비율 지원',
  ],
  cons: [
    '무료 버전은 사용량이 매우 제한적',
    '원본 영상 품질에 결과가 크게 의존',
    '한국어 자막 정확도가 영어 대비 낮음',
  ],
  tags: ['숏폼', '영상편집', '마케팅', '부분무료', '자막'],
  alternatives: ['descript', 'invideo', 'runway'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
