import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { SITE_CONFIG } from '@/lib/constants'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { GoogleAnalytics } from '@/components/layout/GoogleAnalytics'
import { AdSense } from '@/components/layout/AdSense'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <GoogleAnalytics />
        <AdSense />
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
