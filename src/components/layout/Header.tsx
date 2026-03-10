import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu } from './MobileMenu'

function Logo() {
  return (
    <span className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="48" height="48" rx="12" fill="url(#logoGrad)" />
        <path d="M15 33L24 15L33 33H28.5L24 23.5L19.5 33H15Z" fill="white" fillOpacity="0.95" />
        <circle cx="24" cy="19" r="2.5" fill="white" fillOpacity="0.6" />
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl font-bold">
        <span className="text-blue-600 dark:text-blue-400">AI</span>
        <span className="text-gray-900 dark:text-white">Dogu</span>
      </span>
    </span>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/category" className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white">
              카테고리
            </Link>
            <Link href="/compare" className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white">
              비교
            </Link>
            <Link href="/best" className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white">
              추천
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white">
              블로그
            </Link>
          </nav>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
