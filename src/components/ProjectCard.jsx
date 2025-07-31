// components/ProjectCard.jsx
import React from 'react';

const ProjectCard = React.memo(({ project }) => {
  return (
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
  );
});

export default ProjectCard;