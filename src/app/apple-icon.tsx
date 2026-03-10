import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
          borderRadius: 40,
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: 'white',
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: -2,
          }}
        >
          AI
        </div>
      </div>
    ),
    { ...size },
  )
}
