import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselItem, CarouselContent } from '@/components/ui/carousel';
import projects from '@/data/projects.json';
import Autoplay from "embla-carousel-autoplay";
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const toggleShowAll = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 via-gray-200 to-white" id="projects">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Projects
        </motion.h2>

        {!showAll ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Carousel
              plugins={[plugin.current]}
              opts={{ loop: true }}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {visibleProjects.map((project) => (
                  <CarouselItem
                    key={project.id}
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <motion.div variants={itemVariants}>
                      <ProjectCard project={project} />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        ) : (
          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="text-center mt-12">
          <button
            onClick={toggleShowAll}
            className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-500 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  );
}