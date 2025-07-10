import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ON-NE İnşaat',
  description: 'ON-NE İnşaat - Modern Yapılar, Güvenli Gelecek Hüseyin Kocatürk - Frontend Developer',
  generator: 'Hüseyin Kocatürk',
  icons: {
    icon: '/images/onne-logo.png',
    shortcut: '/images/onne-logo.png',
    apple: '/images/onne-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
