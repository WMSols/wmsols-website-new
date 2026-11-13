import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const gonePaths = new Set(['/privacy', '/privacy-policy', '/terms-of-service'])

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/+$/, '') || '/'

  if (!gonePaths.has(pathname)) return NextResponse.next()

  return new NextResponse('Gone', {
    status: 410,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  })
}

export const config = {
  matcher: [
    '/privacy',
    '/privacy/',
    '/privacy-policy',
    '/privacy-policy/',
    '/terms-of-service',
    '/terms-of-service/',
  ],
}
