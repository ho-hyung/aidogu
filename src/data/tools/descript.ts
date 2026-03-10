import type { Tool } from '@/types/tool'

export const descript: Tool = {
  slug: 'descript',
  name: 'Descript',
  nameKo: '디스크립트',
  description:
    'AI 기반 올인원 영상 및 팟캐스트 편집 도구입니다. 텍스트 기반 편집으로 문서를 수정하듯 영상과 오디오를 편집할 수 있으며, 자동 자막 생성, AI 음성 클로닝, 필러 단어 제거, 화면 녹화 등 다양한 기능을 제공합니다.',
  shortDescription: 'AI 기반 텍스트 편집 방식의 영상/팟캐스트 편집기',
  category: ['video', 'audio'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['월 1시간 자막', '기본 편집', '워터마크'] },
    { name: 'Hobbyist', price: '$24/월', features: ['월 10시간 자막', 'AI 음성', '워터마크 제거'] },
    { name: 'Business', price: '$33/월', features: ['월 30시간 자막', '팀 기능', '고급 AI 기능'] },
  ],
  url: 'https://www.descript.com',
  screenshots: [],
  pros: [
    '텍스트 기반 편집으로 초보자도 쉽게 사용',
    '자동 자막 생성 정확도가 높음',
    '필러 단어 자동 제거 기능',
    '화면 녹화부터 편집까지 올인원',
  ],
  cons: [
    '무료 버전의 기능 제한이 많음',
    '전문 영상 편집 도구 대비 세밀한 제어 부족',
    '대용량 파일 처리 시 느려질 수 있음',
  ],
  tags: ['영상편집', '팟캐스트', '자막', '부분무료', '오디오'],
  alternatives: ['opus-clip', 'runway', 'invideo'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
