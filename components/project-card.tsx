import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/proje/${project.id}`}>
      <div className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 transform-gpu">
        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 transform transition-all duration-300 group-hover:scale-110">
            <Badge
              variant={project.status === "completed" ? "default" : "secondary"}
              className={`text-xs sm:text-sm transition-all duration-300 ${
                project.status === "completed" ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
              } shadow-lg`}
            >
              {project.status === "completed" ? "Tamamlandı" : "Devam Ediyor"}
            </Badge>
          </div>

          {/* Overlay content that appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 transform scale-75 group-hover:scale-100 transition-all duration-300">
              <span className="text-gray-900 font-medium text-sm">Detayları Görüntüle</span>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 relative">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-amber-600 transition-all duration-300 line-clamp-2">
            {project.title}
          </h3>

          <div className="space-y-2">
            <div className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0 text-amber-600 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs sm:text-sm truncate">{project.location}</span>
            </div>

            <div className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0 text-amber-600 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs sm:text-sm">{project.year}</span>
            </div>
          </div>

          {/* Progress bar for ongoing projects */}
          {project.status === "ongoing" && project.progress && (
            <div className="mt-3 sm:mt-4">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>İlerleme</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-amber-600 h-1.5 rounded-full transition-all duration-1000 group-hover:bg-amber-500"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Decorative element */}
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-amber-100 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>
      </div>
    </Link>
  )
}
