// components/ProjectCarousel.tsx
import { useState, useRef, useCallback } from 'react';
import { Carousel, CarouselItem, CarouselContent } from '@/components/ui/carousel';
import projects from '@/data/projects.json';
import Autoplay from "embla-carousel-autoplay";
import ProjectCard from './ProjectCard'; // Import the memoized component

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const toggleShowAll = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 via-gray-200 to-white" id="projects">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>

        {!showAll ? (
          <Carousel
            plugins={[plugin.current]}
            opts={{
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {visibleProjects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <button
            onClick={toggleShowAll}
            className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-all"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  );
}