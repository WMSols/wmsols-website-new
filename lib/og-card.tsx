import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

export function createOgImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#030015',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            letterSpacing: 4,
            color: '#3b82f6',
            marginBottom: 24,
          }}
        >
          WMSOLS
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 68,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: '#e5e7eb',
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { ...ogSize },
  )
}
