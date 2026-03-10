import { SITE_CONFIG } from './constants'

export function getOgImageUrl(title: string, description?: string): string {
  const params = new URLSearchParams({ title })
  if (description) {
    params.set('description', description)
  }
  return `${SITE_CONFIG.url}/og?${params.toString()}`
}
