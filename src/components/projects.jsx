// components/ProjectCarousel.tsx
import { Carousel, CarouselItem, CarouselContent } from '@/components/ui/carousel'
import projects from '@/data/projects.json'
import Autoplay from "embla-carousel-autoplay"

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 via-gray-200 to-white" id="projects">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>

        <Carousel
          plugins={[
            Autoplay({ delay: 2000 })
          ]}
        >
          <CarouselContent>
            {projects.map((project, idx) => (
              <CarouselItem
                key={idx}
                className="w-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 px-4"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:scale-[1.03] transform">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
