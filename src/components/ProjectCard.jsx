import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = React.memo(({ project }) => {
  return (
    <motion.div
      className="group bg-white rounded-xl shadow-md overflow-hidden will-change-transform"
      whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
      </div>
    </motion.div>
  );
});

export default ProjectCard;