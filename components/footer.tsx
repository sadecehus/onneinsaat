import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggeredReveal } from "@/components/staggered-reveal"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <StaggeredReveal staggerDelay={100} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="sm:col-span-2 transform transition-all duration-500 hover:translate-y-[-2px]">
            <div className="flex items-center mb-3 sm:mb-4 justify-center mx-auto">
              <Image
                src="/images/onne-logo.png"
                alt="ÖN-NE İnşaat"
                width={300}
                height={150}
                className="lg:h-24 sm:h-12 w-auto mr-4"
              />
              <Image
                src="/images/ncsa-logo.png"
                alt="NCSA Mekanik İnşaat"
                width={200}
                height={200}
                className="lg:h-24 sm:h-12 w-auto"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-md text-center">
              Kaliteli inşaat hizmetleri ile 25 yıldır Türkiye'nin güvenilir inşaat partneri
            </p>
          </div>
          <div className="transform transition-all duration-500 hover:translate-y-[-2px] text-center">
            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/projeler", label: "Tüm Projeler" },
                { href: "/bitmis-projeler", label: "Bitmiş Projeler" },
                { href: "/devam-eden-projeler", label: "Devam Eden Projeler" },
                { href: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-600 hover:text-amber-600 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="transform transition-all duration-500 hover:translate-y-[-2px] text-center">
            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">İletişim</h4>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Şerefiye Mah. Hastane 2 Cad. No: 2/17
İpekyolu/Van</p>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">TEL : 0432 216 49 46</p>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">FAX : 0432 216 18 81</p>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">GSM : 0532 502 31 35</p>
            <p className="text-xs sm:text-sm text-gray-600">info@on-neinsaat.com</p>
          </div>
        </StaggeredReveal>

        <ScrollReveal direction="up" className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            © {new Date().getFullYear()} ÖN-NE İnşaat. Tüm hakları saklıdır. <a href="https://huskocaturk.vercel.app"><span className="text-teal-600 font-bold">Hüseyin Kocatürk</span></a> tarafından geliştirilmiştir.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  )
}
