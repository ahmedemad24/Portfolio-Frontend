import { HeartIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 glass border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Alex Chen. Made with <HeartIcon className="inline w-4 h-4 text-red-400" /> for beautiful web experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
