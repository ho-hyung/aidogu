import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'
import { SITE_CONFIG } from '@/lib/constants'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get('title') ?? SITE_CONFIG.title
  const description = searchParams.get('description') ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 80px',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: '#60a5fa',
            marginBottom: 20,
          }}
        >
          {SITE_CONFIG.name}
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            lineHeight: 1.3,
            maxWidth: '90%',
            marginBottom: 20,
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              fontSize: 22,
              color: '#94a3b8',
              lineHeight: 1.5,
              maxWidth: '80%',
            }}
          >
            {description}
          </div>
        )}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 80,
            fontSize: 18,
            color: '#64748b',
          }}
        >
          aidogu.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
