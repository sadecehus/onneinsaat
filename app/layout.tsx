import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'ON-NE İnşaat',
  description: 'ON-NE İnşaat - Modern Yapılar, Güvenli Gelecek',
  generator: 'Hüseyin Kocatürk - Abdullah Aldemir',
  applicationName: 'ON-NE İnşaat',
  keywords: ['inşaat', 'yapı', 'mimarlık', 'modern', 'güvenli', 'gelecek', 'ON-NE İnşaat'],
  authors: [
    { name: 'Hüseyin Kocatürk', url: 'https://github.com/sadecehus' },
    { name: 'Abdullah Aldemir', url: 'https://github.com/adhald' },
  ],
  openGraph: {
    title: 'ON-NE İnşaat',
    description: 'ON-NE İnşaat - Modern Yapılar, Güvenli Gelecek',
    url: 'https://onneinsaat.com',
    siteName: 'ON-NE İnşaat',
    images: [
      {
        url: 'https://onneinsaat.com/images/onne-logo.png',
        width: 1200,
        height: 630,
        alt: 'ON-NE İnşaat Logo',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
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
    <html lang="tr">
      <body>{children}
        <SpeedInsights/>
      </body>
    </html>
  )
}
