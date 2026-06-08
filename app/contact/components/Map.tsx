'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map() {
  const [icon, setIcon] = useState<L.DivIcon | null>(null)

  useEffect(() => {
    // Render a Lucide MapPin as an SVG string and pass it to Leaflet's DivIcon
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
        fill="#3b82f6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    `

    const customIcon = L.divIcon({
      html: svgString,
      className: '',           // clears Leaflet's default white box styling
      iconSize: [32, 32],
      iconAnchor: [16, 32],    // tip of the pin touches the coordinate
      popupAnchor: [0, -34],   // popup appears above the pin
    })

    setIcon(customIcon)
  }, [])

  if (!icon) return null

  return (
    //33.709733681426286, 73.04351966543929
    <MapContainer
      center={[33.709733681426286, 73.04351966543929]}
      zoom={14}
      style={{ height: '300px', width: '100%', borderRadius: '12px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[33.709733681426286, 73.04351966543929]} icon={icon}>
        <Popup>WMSols , Islamabad</Popup>
      </Marker>
    </MapContainer>
  )
}