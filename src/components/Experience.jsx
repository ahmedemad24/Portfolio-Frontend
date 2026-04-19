import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';

const Experience = () => {
  return (
    <section id="experience" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-cyan-600" />

          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <TimelineItem key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ job, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center md:justify-between ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
    >
      {/* Content */}
      <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
        <div className="glass rounded-2xl p-6 card-hover">
          <div className={`flex items-center gap-2 mb-2 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
            <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
              {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{job.position}</h3>
          <p className="text-blue-400 font-medium mb-4">{job.company}</p>
          <p className="text-gray-400 text-sm mb-4">{job.description}</p>
          
          {job.achievements && (
            <ul className={`space-y-2 ${!isLeft ? 'md:text-left' : ''}`}>
              {job.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <span className="text-purple-400 mt-1">▹</span>
                  {achievement}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-gray-900 shadow-lg shadow-purple-500/50" />
    </motion.div>
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export default Experience;
