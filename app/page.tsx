"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggeredReveal } from "@/components/staggered-reveal"
import { getFeaturedProjects } from "@/data/projects"

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/X.png"
            alt="Construction site"
            fill
            className="object-cover transition-transform opacity-80 duration-[10s] hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-1000" />
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down" duration={800}>
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <Image
                src="/images/onne-logo.png"
                alt="ÖN-NE İnşaat"
                width={300}
                height={150}
                className="h-20 sm:h-24 lg:h-40 w-auto filter brightness-0 invert"
                priority
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200} duration={800}>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-light max-w-4xl mx-auto leading-relaxed px-4">
              Kaliteli inşaat hizmetleri ile hayallerinizi gerçeğe dönüştürüyoruz
            </p>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={400} duration={800}>
            <Link href="/projeler">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Projelerimizi Keşfedin
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center transition-all duration-300 hover:border-amber-400">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredReveal staggerDelay={150} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { end: 150, label: "Tamamlanan Proje" },
              { end: 25, label: "Yıllık Deneyim" },
              { end: 500, label: "Mutlu Müşteri" },
              { end: 50, label: "Uzman Ekip" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center transform transition-all duration-500 hover:scale-105 hover:bg-white hover:shadow-lg rounded-lg p-4"
              >
                <AnimatedCounter
                  end={stat.end}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2 transition-colors duration-300 hover:text-amber-600"
                />
                <p className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </StaggeredReveal>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Hakkımızda</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  ÖN-NE İnşaat olarak, 25 yıllık deneyimimizle Türkiye'nin önde gelen inşaat firmalarından biriyiz.
                  Kalite, güvenilirlik ve müşteri memnuniyeti odaklı yaklaşımımızla sektörde fark yaratıyoruz.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Modern teknolojiler ve deneyimli ekibimizle, konut projelerinden ticari yapılara kadar geniş bir
                  yelpazede hizmet sunuyoruz.
                </p>

                <StaggeredReveal staggerDelay={100} className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {[
                    { icon: Award, title: "Kalite Garantisi", desc: "ISO 9001 kalite yönetim sistemi" },
                    { icon: Users, title: "Uzman Ekip", desc: "Deneyimli mimar ve mühendisler" },
                    { icon: Calendar, title: "Zamanında Teslimat", desc: "Planlanan sürede proje tamamlama" },
                    { icon: MapPin, title: "Geniş Hizmet Ağı", desc: "Türkiye genelinde hizmet" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-amber-50 hover:shadow-md transform hover:translate-x-2"
                    >
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600 mt-1 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{item.title}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </StaggeredReveal>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden group">
                <Image
                  src="/aboutus.png"
                  alt="About us"
                  width={500}
                  height={600}
                  className="h-full transition-transform duration-700  rounded-xl group-hover:scale-110"
                />
               
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Öne Çıkan Projelerimiz
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Kaliteli işçilik ve modern tasarımla hayata geçirdiğimiz projelerimizden örnekler
            </p>
          </ScrollReveal>

          <StaggeredReveal
            staggerDelay={200}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </StaggeredReveal>

          <ScrollReveal direction="up" className="text-center">
            <Link href="/projeler">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 bg-transparent px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 hover:shadow-xl group"
              >
                Tüm Projeleri Görüntüle
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Projenizi Hayata Geçirelim</h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-4">
              Hayalinizdeki yapıyı gerçeğe dönüştürmek için bizimle iletişime geçin
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <Link href="/iletisim">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                İletişime Geçin
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
