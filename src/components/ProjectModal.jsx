import { motion } from 'framer-motion';
import { XIcon, ExternalLinkIcon } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-white/10 transition-colors z-10"
          >
            <XIcon size={20} />
          </button>
          
          <div className="h-64 bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center">
            <span className="text-8xl">{getProjectEmoji(project.category)}</span>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full font-medium">
              {project.category}
            </span>
            <span className="px-3 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-full font-medium">
              {project.year}
            </span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-white">{project.title}</h2>
          <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-white">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm bg-gray-800 text-gray-300 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2"
            >
              <ExternalLinkIcon size={18} />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
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
