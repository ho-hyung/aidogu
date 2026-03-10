import Link from 'next/link'

interface BreadcrumbItem {
  readonly label: string
  readonly href?: string
}

interface BreadcrumbProps {
  readonly items: readonly BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
      <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300">홈</Link>
      {items.map((item, i) => (
        <span key={i}>
          <span className="mx-2">/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-gray-700 dark:hover:text-gray-300">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 dark:text-gray-100">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
