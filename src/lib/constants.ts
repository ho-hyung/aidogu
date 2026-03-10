export const SITE_CONFIG = {
  name: 'AIDogu',
  title: 'AIDogu - 한국어 AI 도구 디렉토리',
  description:
    '한국어로 정리된 AI 도구 디렉토리. AI 글쓰기, 이미지 생성, 코딩, 영상 생성 등 카테고리별 AI 도구를 비교하고 추천합니다.',
  url: 'https://aidogu.vercel.app',
  locale: 'ko_KR',
  language: 'ko',
} as const

export const PRICING_LABELS: Record<string, string> = {
  free: '무료',
  freemium: '부분 무료',
  paid: '유료',
  'free-trial': '무료 체험',
}
