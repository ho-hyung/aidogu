import type { MetadataRoute } from 'next'
import { CATEGORIES } from '@/types/tool'
import { getAllTools, generateComparisons } from '@/lib/tools'
import { getAllBestLists } from '@/lib/best-lists'
import { getAllBlogPosts } from '@/lib/blog'
import { SITE_CONFIG } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/category`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ]

  const toolPages: MetadataRoute.Sitemap = getAllTools().map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(tool.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const comparePages: MetadataRoute.Sitemap = generateComparisons().map(({ toolA, toolB }) => ({
    url: `${baseUrl}/compare/${toolA.slug}-vs-${toolB.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const bestListPages: MetadataRoute.Sitemap = getAllBestLists().map((list) => ({
    url: `${baseUrl}/best/${list.slug}`,
    lastModified: new Date(list.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  const blogPages: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogIndexPage: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]

  return [...staticPages, ...toolPages, ...categoryPages, ...comparePages, ...bestListPages, ...blogIndexPage, ...blogPages]
}
