"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, Ruler, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getProjectById } from "@/data/projects"
import { useEffect, use } from "react"

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [resolvedParams.id])

  const project = getProjectById(Number.parseInt(resolvedParams.id))

  if (!project) {
    return (
      <div className="min-h-screen bg-white transition-all duration-300 ">
        <Navigation />
        <div className="pt-20 sm:pt-24 text-center px-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Proje bulunamadı</h1>
          <Link href="/" className="text-amber-600 hover:underline inline-block transition-colors duration-300">
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white transition-all duration-300 mt-8">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projeler"
            className="inline-flex items-center text-gray-600 hover:text-amber-600 mb-4 sm:mb-6 transition-colors duration-300 text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Projelere Geri Dön
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <div className="mb-3 sm:mb-4">
                <Badge
                  variant={project.status === "completed" ? "default" : "secondary"}
                  className={
                    project.status === "completed"
                      ? "bg-green-600 transition-all duration-300"
                      : "bg-blue-600 transition-all duration-300"
                  }
                >
                  {project.status === "completed" ? "Tamamlandı" : "Devam Ediyor"}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 transition-all duration-300">
                {project.title}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center text-gray-600 transition-all duration-300">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{project.location}</span>
                </div>
                <div className="flex items-center text-gray-600 transition-all duration-300">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{project.year}</span>
                </div>
                {project.size && (
                  <div className="flex items-center text-gray-600 transition-all duration-300">
                    <Ruler className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{project.size}</span>
                  </div>
                )}
                {project.type && (
                  <div className="flex items-center text-gray-600 transition-all duration-300">
                    <Building className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{project.type}</span>
                  </div>
                )}
              </div>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 transition-all duration-300">
                {project.description}
              </p>

              {project.features && (
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 transition-all duration-300">
                    Özellikler
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {project.features.map((feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600 text-sm sm:text-base transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 flex-shrink-0 transition-all duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="order-1 lg:order-2">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="py-12 sm:py-16 bg-gray-50 transition-all duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center transition-all duration-300">
              Proje Galerisi
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {project.images.map((image: string, index: number) => (
                <div key={index} className="group cursor-pointer transition-all duration-300">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - ${index + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 transition-all duration-300">
            Benzer Bir Proje Mi İstiyorsunuz?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 transition-all duration-300">
            Size özel çözümler sunmak için bizimle iletişime geçin
          </p>
          <Link href="/iletisim">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300"
            >
              İletişime Geçin
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
