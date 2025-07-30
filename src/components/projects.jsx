// components/ProjectCarousel.tsx
import { useState } from 'react'
import { Carousel, CarouselItem, CarouselContent } from '@/components/ui/carousel'
import projects from '@/data/projects.json'
import Autoplay from "embla-carousel-autoplay"

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  
  const visibleProjects = showAll ? projects : projects.slice(0, 4) // Adjust number as needed
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 via-gray-200 to-white" id="projects">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        
{!showAll ? (
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
               
              })
            ]}
            // opts={{
            //   align: "start",
            //   loop: true,
            // }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {visibleProjects.map((project, idx) => (
                <CarouselItem
                  key={project.id || idx}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-out hover:shadow-lg will-change-transform">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.id || idx}
                className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-out hover:shadow-lg will-change-transform"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-all"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  )
}