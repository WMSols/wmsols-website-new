import { createOgImage, ogContentType, ogSize } from '@/lib/og-card'

export const alt = 'WMsols — Official Odoo Partner'
export const size = ogSize
export const contentType = ogContentType

export default function OdooOpenGraphImage() {
  return createOgImage(
    'Odoo Partner',
    'Implementation, customization, integration, and training.',
  )
}
