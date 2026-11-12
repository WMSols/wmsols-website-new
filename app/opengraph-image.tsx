import { createOgImage, ogContentType, ogSize } from '@/lib/og-card'

export const alt = 'WMsols — Custom Software Development & Digital Solutions'
export const size = ogSize
export const contentType = ogContentType

export default function OpenGraphImage() {
  return createOgImage(
    'WMsols',
    'Custom software, web and mobile apps, and AI automation.',
  )
}
