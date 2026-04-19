import { motion } from 'framer-motion';
import technologiesData from '../data/technologies.json';

const Technologies = () => {
  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and frameworks I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologiesData.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="glass rounded-xl p-6 text-center card-hover group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)'
              }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center group-hover:from-purple-600/40 group-hover:to-blue-600/40 transition-all duration-300">
                <span className="text-2xl">{getTechIcon(tech.id)}</span>
              </div>
              <p className="text-gray-300 text-sm font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const getTechIcon = (techId) => {
  const icons = {
    react: '⚛️',
    typescript: '📘',
    tailwindcss: '🌬️',
    nextjs: '▲',
    nodejs: '🟢',
    graphql: '◈',
    figma: '🎨',
    git: '📦',
    docker: '🐳',
    aws: '☁️',
    mongodb: '🍃'
  };
  return icons[techId] || '🔧';
};

export default Technologies;
