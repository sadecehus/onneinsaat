'use client'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ConstructionCompany",
    "name": "ON-NE İnşaat",
    "description": "ON-NE İnşaat olarak modern ve güvenli yapılar inşa ediyoruz. İzmir ve çevresinde kaliteli konut, ticari ve endüstriyel projeler.",
    "url": "https://onneinsaat.com",
    "logo": "https://onneinsaat.com/images/onne-logo.png",
    "image": "https://onneinsaat.com/images/onne-logo.png",
    "telephone": "+90-XXX-XXX-XXXX", // Gerçek telefon numarası eklenecek
    "email": "info@onneinsaat.com", // Gerçek email adresi eklenecek
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Adres Bilgisi", // Gerçek adres eklenecek
      "addressLocality": "İzmir",
      "addressRegion": "İzmir",
      "postalCode": "35000", // Gerçek posta kodu eklenecek
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.4237",
      "longitude": "27.1428"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "İzmir"
      },
      {
        "@type": "State",
        "name": "İzmir"
      }
    ],
    "serviceType": ["Konut İnşaatı", "Ticari Yapı İnşaatı", "Villa Yapımı", "Apartman İnşaatı", "Müteahhitlik"],
    "foundingDate": "2015", // Gerçek kuruluş tarihi eklenecek
    "sameAs": [
      "https://www.facebook.com/onneinsaat", // Sosyal medya hesapları eklenecek
      "https://www.instagram.com/onneinsaat",
      "https://www.linkedin.com/company/onneinsaat"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
