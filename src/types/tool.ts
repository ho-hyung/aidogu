export interface PricingPlan {
  readonly name: string
  readonly price: string
  readonly features: readonly string[]
}

export interface Tool {
  readonly slug: string
  readonly name: string
  readonly nameKo: string
  readonly description: string
  readonly shortDescription: string
  readonly category: readonly Category[]
  readonly pricing: PricingType
  readonly pricingPlans: readonly PricingPlan[]
  readonly url: string
  readonly affiliateUrl?: string
  readonly screenshots: readonly string[]
  readonly pros: readonly string[]
  readonly cons: readonly string[]
  readonly tags: readonly string[]
  readonly alternatives: readonly string[] // slugs of alternative tools
  readonly featured: boolean
  readonly publishedAt: string
  readonly updatedAt: string
}

export type PricingType = 'free' | 'freemium' | 'paid' | 'free-trial'

export type Category =
  | 'writing'
  | 'image'
  | 'video'
  | 'audio'
  | 'coding'
  | 'marketing'
  | 'automation'
  | 'search'
  | 'korea'
  | 'productivity'
  | 'education'
  | 'design'
  | 'data'
  | 'chatbot'

export interface CategoryMeta {
  readonly slug: Category
  readonly name: string
  readonly description: string
  readonly icon: string
}

export const CATEGORIES: readonly CategoryMeta[] = [
  { slug: 'writing', name: '글쓰기', description: 'AI 글쓰기 및 텍스트 생성 도구', icon: '✍️' },
  { slug: 'image', name: '이미지 생성', description: 'AI 이미지 생성 및 편집 도구', icon: '🎨' },
  { slug: 'video', name: '영상 생성', description: 'AI 영상 제작 및 편집 도구', icon: '🎬' },
  { slug: 'audio', name: '음성/음악', description: 'AI 음성 합성 및 음악 생성 도구', icon: '🎵' },
  { slug: 'coding', name: '코딩', description: 'AI 코딩 어시스턴트 및 개발 도구', icon: '💻' },
  { slug: 'marketing', name: '마케팅', description: 'AI 마케팅 및 콘텐츠 도구', icon: '📢' },
  { slug: 'automation', name: '업무 자동화', description: 'AI 업무 자동화 및 워크플로우 도구', icon: '⚙️' },
  { slug: 'search', name: '검색/리서치', description: 'AI 검색 및 리서치 도구', icon: '🔍' },
  { slug: 'korea', name: '한국 특화', description: '한국에서 만든 AI 도구', icon: '🇰🇷' },
  { slug: 'productivity', name: '생산성', description: 'AI 생산성 향상 도구', icon: '🚀' },
  { slug: 'education', name: '교육', description: 'AI 교육 및 학습 도구', icon: '📚' },
  { slug: 'design', name: '디자인', description: 'AI 디자인 도구', icon: '🎯' },
  { slug: 'data', name: '데이터', description: 'AI 데이터 분석 도구', icon: '📊' },
  { slug: 'chatbot', name: '챗봇', description: 'AI 대화형 챗봇', icon: '💬' },
] as const
