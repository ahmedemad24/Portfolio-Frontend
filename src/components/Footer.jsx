import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import personalInfo from '../data/personal-info.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { social, name } = personalInfo;

  return (
    <footer className="py-12 gradient-bg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold gradient-text mb-6"
          >
            AC
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            {[
              { platform: 'github', icon: FaGithub, url: social.github },
              { platform: 'linkedin', icon: FaLinkedin, url: social.linkedin },
              { platform: 'twitter', icon: FaTwitter, url: social.twitter }
            ].map((item) => (
              <motion.a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-purple-600/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <item.icon size={20} className="text-gray-400 group-hover:text-white" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm mb-4">
            <p>© {currentYear} {name}. All rights reserved.</p>
          </div>

          {/* Made with love */}
          <motion.div
            className="flex items-center gap-2 text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
