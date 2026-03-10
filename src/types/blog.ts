export interface BlogPost {
  readonly slug: string
  readonly title: string
  readonly description: string
  readonly content: string
  readonly category: string
  readonly tags: readonly string[]
  readonly publishedAt: string
  readonly updatedAt: string
}
