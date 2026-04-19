import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = ({ onProjectClick }) => {
  const featuredProjects = projectsData.filter(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);
  
  return (
    <section id="projects" className="py-20 md:py-28 gradient-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of my recent work
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      className={`glass rounded-2xl overflow-hidden card-hover group cursor-pointer h-full flex flex-col ${compact ? 'md:flex-row' : ''}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className={`relative overflow-hidden ${compact ? 'w-full md:w-48 md:flex-shrink-0' : 'h-48'}`}>
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
            <ExternalLinkIcon size={20} />
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </motion.a>
        </div>
      </div>
      
      <div className={`p-6 flex-1 flex flex-col ${compact ? 'md:p-5' : ''}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full font-medium">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, compact ? 3 : 5).map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs bg-gray-800 text-gray-300 rounded-md"
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
