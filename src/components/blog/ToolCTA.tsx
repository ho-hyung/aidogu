import { AffiliateLink } from '@/components/common/AffiliateLink'
import type { Tool } from '@/types/tool'

interface ToolCTAProps {
  readonly tool: Tool
  readonly sourcePage: string
}

export function ToolCTA({ tool, sourcePage }: ToolCTAProps) {
  const href = tool.affiliateUrl ?? tool.url
  const isAffiliate = !!tool.affiliateUrl

  return (
    <div className="my-6 rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">
            {tool.name}
            {tool.nameKo !== tool.name && (
              <span className="ml-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                ({tool.nameKo})
              </span>
            )}
          </h4>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {tool.shortDescription}
          </p>
        </div>
        <AffiliateLink
          href={href}
          isAffiliate={isAffiliate}
          toolName={tool.name}
          sourcePage={sourcePage}
          className="shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          바로가기
        </AffiliateLink>
      </div>
    </div>
  )
}
