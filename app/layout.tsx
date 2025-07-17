import type { Metadata } from 'next'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import StructuredData from '@/components/structured-data'

export const metadata: Metadata = {
  title: {
    default: 'ON-NE İnşaat - Modern Yapılar, Güvenli Gelecek',
    template: '%s | ON-NE İnşaat'
  },
  description: 'ON-NE İnşaat olarak modern ve güvenli yapılar inşa ediyoruz. İzmir ve çevresinde kaliteli konut, ticari ve endüstriyel projeler. Deneyimli ekibimizle güvenilir inşaat hizmetleri.',
  generator: 'Hüseyin Kocatürk - Abdullah Aldemir',
  applicationName: 'ON-NE İnşaat',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'ON-NE İnşaat',
    'Onne',
    'Önne', 
    'İzmir İnşaat', 
    'inşaat firması', 
    'konut projeleri', 
    'ticari yapılar', 
    'modern mimari', 
    'güvenli yapılar', 
    'kaliteli inşaat', 
    'villa yapımı', 
    'apartman inşaatı',
    'müteahhitlik hizmetleri',
    'yapı denetim',
    'proje yönetimi',
    'onne inşaat',
    'onneinsaat',
    'önne inşaat',
    'onne inşaat projeleri',
    'izmir inşaat firması',
    'izmir konut projeleri',
    'izmir ticari yapılar',
    'van inşaat',
    'van inşaat projeleri',
    'van konut projeleri',
    'van ticari yapılar',
    'van villa yapımı',
  ],
  authors: [
    { name: 'Hüseyin Kocatürk', url: 'https://github.com/sadecehus' },
    { name: 'Abdullah Aldemir', url: 'https://github.com/adhald' },
  ],
  creator: 'ON-NE İnşaat',
  publisher: 'ON-NE İnşaat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://onneinsaat.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'İnşaat ve Mimarlık',
  openGraph: {
    title: 'ON-NE İnşaat - Modern Yapılar, Güvenli Gelecek',
    description: 'ON-NE İnşaat olarak modern ve güvenli yapılar inşa ediyoruz. İzmir ve çevresinde kaliteli konut, ticari ve endüstriyel projeler.',
    url: 'https://onneinsaat.com',
    siteName: 'ON-NE İnşaat',
    images: [
      {
        url: '/images/onne-logo.png',
        width: 1200,
        height: 630,
        alt: 'ON-NE İnşaat - Modern İnşaat Firması Logo',
        type: 'image/png',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
    countryName: 'Türkiye',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ON-NE İnşaat - Modern Yapılar, Güvenli Gelecek',
    description: 'ON-NE İnşaat olarak modern ve güvenli yapılar inşa ediyoruz. İzmir ve çevresinde kaliteli konut, ticari ve endüstriyel projeler.',
    images: ['/images/onne-logo.png'],
    creator: '@onneinsaat',
    site: '@onneinsaat',
  },
  other: {
    'geo.region': 'TR-35',
    'geo.placename': 'İzmir',
    'geo.position': '38.4237;27.1428',
    'ICBM': '38.4237, 27.1428',
    'theme-color': '#1f2937',
    'msapplication-TileColor': '#1f2937',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" dir="ltr">
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Structured Data Component */}
        <StructuredData />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
