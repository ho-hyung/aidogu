import type { BestList } from '@/types/best-list'
import { BEST_LISTS } from '@/data/best-lists'
import { getToolBySlug } from './tools'
import type { Tool } from '@/types/tool'

export function getAllBestLists(): readonly BestList[] {
  return BEST_LISTS
}

export function getBestListBySlug(slug: string): BestList | undefined {
  return BEST_LISTS.find((list) => list.slug === slug)
}

export function getBestListTools(list: BestList): readonly Tool[] {
  return list.toolSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((t): t is Tool => t !== undefined)
}
