import type { Tool } from '@/types/tool'

export const napkinAi: Tool = {
  slug: 'napkin-ai',
  name: 'Napkin AI',
  nameKo: '냅킨 AI',
  description:
    '텍스트를 다이어그램, 인포그래픽, 플로차트 등 비주얼 콘텐츠로 자동 변환하는 AI 도구입니다. 블로그 글, 보고서, 프레젠테이션 내용을 입력하면 적합한 시각 자료를 자동으로 생성하며, 다양한 스타일과 색상 테마를 제공합니다.',
  shortDescription: '텍스트를 다이어그램/인포그래픽으로 자동 변환하는 AI',
  category: ['design', 'productivity'],
  pricing: 'freemium',
  pricingPlans: [
    { name: 'Free', price: '무료', features: ['기본 다이어그램 생성', '제한된 내보내기', '기본 템플릿'] },
    { name: 'Pro', price: '$18/월', features: ['무제한 생성', 'SVG/PNG 내보내기', '커스텀 브랜딩'] },
    { name: 'Team', price: '$36/월/인', features: ['팀 협업', '브랜드 키트', '우선 지원'] },
  ],
  url: 'https://www.napkin.ai',
  screenshots: [],
  pros: [
    '텍스트만 입력하면 자동으로 비주얼 생성',
    '다양한 다이어그램 유형 지원',
    '블로그/SNS 콘텐츠에 바로 활용 가능',
    '디자인 경험 없이도 전문적인 결과물',
  ],
  cons: [
    '복잡한 다이어그램은 수동 조정 필요',
    '한국어 텍스트 처리가 영어 대비 부족',
    '세밀한 디자인 커스터마이징에 한계',
  ],
  tags: ['다이어그램', '인포그래픽', '디자인', '부분무료', '생산성'],
  alternatives: ['gamma', 'canva-ai', 'tome', 'beautiful-ai'],
  featured: false,
  publishedAt: '2026-03-10',
  updatedAt: '2026-03-10',
}
