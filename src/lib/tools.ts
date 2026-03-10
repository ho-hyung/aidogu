import type { Category, Tool } from '@/types/tool'
import { CATEGORIES } from '@/types/tool'
import { ALL_TOOLS } from '@/data/tools'

export function getAllTools(): readonly Tool[] {
  return ALL_TOOLS
}

export function getToolBySlug(slug: string): Tool | undefined {
  return ALL_TOOLS.find((tool) => tool.slug === slug)
}

export function getToolsByCategory(category: Category): readonly Tool[] {
  return ALL_TOOLS.filter((tool) => tool.category.includes(category))
}

export function getFeaturedTools(): readonly Tool[] {
  return ALL_TOOLS.filter((tool) => tool.featured)
}

export function getToolsByPricing(pricing: Tool['pricing']): readonly Tool[] {
  return ALL_TOOLS.filter((tool) => tool.pricing === pricing)
}

export function getAlternatives(tool: Tool): readonly Tool[] {
  return tool.alternatives
    .map((slug) => getToolBySlug(slug))
    .filter((t): t is Tool => t !== undefined)
}

export function getCategoryMeta(slug: Category) {
  return CATEGORIES.find((c) => c.slug === slug)
}

export function generateComparisons(): readonly { toolA: Tool; toolB: Tool }[] {
  const comparisons: { toolA: Tool; toolB: Tool }[] = []
  const tools = ALL_TOOLS

  for (let i = 0; i < tools.length; i++) {
    for (let j = i + 1; j < tools.length; j++) {
      const toolA = tools[i]
      const toolB = tools[j]
      const hasSharedCategory = toolA.category.some((cat) =>
        toolB.category.includes(cat),
      )
      if (hasSharedCategory) {
        comparisons.push({ toolA, toolB })
      }
    }
  }

  return comparisons
}

export function searchTools(query: string): readonly Tool[] {
  const lowerQuery = query.toLowerCase()

  return ALL_TOOLS.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.nameKo.includes(lowerQuery) ||
      tool.description.includes(lowerQuery) ||
      tool.tags.some((tag) => tag.includes(lowerQuery)),
  )
}
