"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/projeler", label: "Tüm Projeler" },
    { href: "/bitmis-projeler", label: "Bitmiş Projeler" },
    { href: "/devam-eden-projeler", label: "Devam Eden Projeler" },
    { href: "/iletisim", label: "İletişim" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Left Logo - ÖN-NE */}
          <Link href="/" className="flex-shrink-0 transition-transform px-8 duration-300 hover:scale-105">
            <Image
              src="/images/onne-logo.png"
              alt="ÖN-NE İnşaat"
              width={160}
              height={80}
              className="h-12 lg:h-28 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 px-4 py-2 rounded-md hover:bg-amber-50 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </div>

          {/* Right Logo - NCSA */}
          <div className="hidden lg:flex flex-shrink-0 px-8">
            <Link href="#" className="transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/ncsa-logo.png"
                alt="NCSA Mekanik İnşaat"
                width={80}
                height={80}
                className="h-12 lg:h-28 w-auto"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`h-6 w-6 absolute transition-all duration-300 ${isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"}`}
              />
              <X
                className={`h-6 w-6 absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-4 border-t border-gray-200">
            {/* Mobile Logos */}
            <div className="flex items-center justify-between mb-4 px-3">
              <Link href="/" className="transition-transform duration-300 hover:scale-105">
                <Image src="/images/onne-logo.png" alt="ÖN-NE İnşaat" width={130} height={65} className="h-10 w-auto" />
              </Link>
              <Link href="#" className="transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/ncsa-logo.png"
                  alt="NCSA Mekanik İnşaat"
                  width={50}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 px-3 py-3 rounded-md hover:bg-amber-50 transform hover:translate-x-2"
                  onClick={() => setIsOpen(false)}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
