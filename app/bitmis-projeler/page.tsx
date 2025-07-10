"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggeredReveal } from "@/components/staggered-reveal"
import { Search, Filter, X } from "lucide-react"
import { getCompletedProjects } from "@/data/projects"

export default function CompletedProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilter, setShowFilter] = useState(false)
  
  const allCompletedProjects = getCompletedProjects()
  
  const filteredProjects = allCompletedProjects.filter((project) => {
    // Filter by search term (title only)
    const searchMatch = searchTerm === "" || (() => {
      const searchLower = searchTerm.toLowerCase().trim()
      return project.title.toLowerCase().includes(searchLower)
    })()
    
    return searchMatch
  })

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-gray-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl mt-8 sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Bitmiş Projelerimiz
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Başarıyla tamamladığımız ve müşterilerimizin memnuniyetini kazandığımız projeler
            </p>
          </ScrollReveal>

          {/* Search and Filter */}
          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto mb-6 sm:mb-8">
              <div className="relative flex-1 group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transition-colors duration-300 group-focus-within:text-amber-600" />
                <Input
                  placeholder="Proje ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 sm:pl-10 pr-10 h-10 sm:h-11 transition-all duration-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilter(!showFilter)}
                className={`flex items-center justify-center gap-2 bg-transparent h-10 sm:h-11 px-4 sm:px-6 transition-all duration-300 hover:bg-amber-50 hover:border-amber-300 hover:scale-105 ${
                  showFilter ? "bg-amber-50 border-amber-300 text-amber-700" : ""
                }`}
              >
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filtrele</span>
              </Button>
            </div>
          </ScrollReveal>

          {/* Filter Panel */}
          {showFilter && (
            <ScrollReveal direction="down" delay={100}>
              <div className="max-w-2xl mx-auto mb-6 sm:mb-8 p-4 sm:p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Arama
                    </label>
                    <p className="text-sm text-gray-500">
                      Tamamlanmış projeler arasında proje başlığına göre arama yapabilirsiniz.
                    </p>
                  </div>
                  <div className="flex items-end">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSearchTerm("")
                      }}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Temizle
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Search Results */}
          {searchTerm && (
            <ScrollReveal direction="up" delay={300}>
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600">
                  "<span className="font-medium text-amber-600">{searchTerm}</span>" için {filteredProjects.length} tamamlanmış proje bulundu
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredReveal staggerDelay={100} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </StaggeredReveal>

          {filteredProjects.length === 0 && (
            <ScrollReveal direction="up" className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {searchTerm ? "Arama kriterlerinize uygun proje bulunamadı." : "Tamamlanmış proje bulunamadı."}
              </p>
            </ScrollReveal>
          )}

          {/* Load More */}
          {filteredProjects.length > 0 && (
            <ScrollReveal direction="up" className="text-center mt-8 sm:mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 bg-transparent px-6 sm:px-8 py-3 sm:py-4"
              >
                Daha Fazla Yükle
              </Button>
            </ScrollReveal>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
