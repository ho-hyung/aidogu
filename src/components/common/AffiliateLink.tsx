'use client'

interface AffiliateLinkProps {
  readonly href: string
  readonly isAffiliate: boolean
  readonly toolName: string
  readonly sourcePage: string
  readonly className?: string
  readonly children: React.ReactNode
}

export function AffiliateLink({
  href,
  isAffiliate,
  toolName,
  sourcePage,
  className,
  children,
}: AffiliateLinkProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'affiliate_click', {
        tool_name: toolName,
        source_page: sourcePage,
        is_affiliate: isAffiliate,
      })
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel={isAffiliate ? 'sponsored noopener' : 'noopener noreferrer'}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
