
import React from 'react';
import { GlobeAltIcon, FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GlobeAltIcon className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">GlobalEd</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in navigating the path to international education. We simplify the complexities of studying abroad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#destinations" className="hover:text-blue-400 transition-colors">Destinations</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Education Lane, Knowledge City, 54321</li>
              <li>+1 234 567 8900</li>
              <li>info@globaled.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><LinkedinIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><InstagramIcon className="h-6 w-6" /></a>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} GlobalEd Connect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
