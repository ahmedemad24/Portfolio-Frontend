import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import projectsData from '../data/projects.json';

const Projects = ({ onProjectClick }) => {
  const featuredProjects = projectsData.filter(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onClick={() => onProjectClick && onProjectClick(project)}
            />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-white"
            >
              More Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  compact
                  onClick={() => onProjectClick && onProjectClick(project)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, compact = false, onClick }) => {
  return (
    <motion.div
      className={`glass rounded-2xl overflow-hidden card-hover group cursor-pointer ${compact ? 'flex' : ''}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`relative overflow-hidden ${compact ? 'w-48 flex-shrink-0' : 'h-48'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center">
          <span className="text-6xl">{getProjectEmoji(project.category)}</span>
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-purple-600/50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-blue-600/50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub size={20} />
          </motion.a>
        </div>
      </div>
      
      <div className={`p-6 ${compact ? 'flex-1' : ''}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, compact ? 3 : 5).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
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

export default Projects;
