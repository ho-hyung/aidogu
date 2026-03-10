import type { BlogPost } from '@/types/blog'
import { BLOG_POSTS } from '@/data/blog'

export function getAllBlogPosts(): readonly BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): readonly BlogPost[] {
  return getAllBlogPosts().filter((post) => post.category === category)
}

export function getBlogPostsByTag(tag: string): readonly BlogPost[] {
  return getAllBlogPosts().filter((post) => post.tags.includes(tag))
}

export function getAllBlogCategories(): readonly string[] {
  const categories = new Set(BLOG_POSTS.map((post) => post.category))
  return [...categories]
}

export function getAllBlogTags(): readonly string[] {
  const tags = new Set(BLOG_POSTS.flatMap((post) => post.tags))
  return [...tags]
}
