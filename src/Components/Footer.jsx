import { Facebook, Linkedin } from 'lucide-react';
import { SiX } from 'react-icons/si'; 
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="flex flex-col">
          <div className="flex items-center space-x-3 mb-3">
            <img
              src={logo}
              alt="Hero Apps Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <h2 className="text-2xl font-bold">Hero Apps</h2>
          </div>
          <p className="text-sm opacity-90 leading-relaxed">
            Discover and manage your favorite apps with ease. Built with passion
            using React & Tailwind CSS.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:underline hover:text-gray-300 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/installation"
                className="hover:underline hover:text-gray-300 transition"
              >
                Installation
              </a>
            </li>
            <li>
              <a
                href="/apps"
                className="hover:underline hover:text-gray-300 transition"
              >
                Apps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="https://x.com/"
              target="_blank"
              className="hover:text-gray-300 transition"
            >
              <SiX size={22} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              className="hover:text-gray-300 transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-gray-300 transition"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 text-center py-4 text-sm opacity-80">
        © {new Date().getFullYear()} Hero Apps. Made with 💙 by Ahsan Habib.
      </div>
    </footer>
  );
};

export default Footer;
