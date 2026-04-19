import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import projectsData from '../data/projects.json';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="glass rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image */}
          <div className="relative h-64 bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center">
            <span className="text-8xl">{getProjectEmoji(project.category)}</span>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-full">
                  Featured
                </span>
              )}
            </div>

            <h2 className="text-3xl font-bold mb-4 text-white">{project.title}</h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={18} />
                View Live
              </motion.a>
              
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 glass rounded-xl font-semibold text-center hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={18} />
                View Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const getProjectEmoji = (category) => {
  const emojis = {
    Dashboard: '📊',
    'E-Commerce': '🛒',
    Productivity: '✅',
    Tool: '🔧',
    Utility: '⚡',
    default: '💻'
  };
  return emojis[category] || emojis.default;
};

export default ProjectModal;
