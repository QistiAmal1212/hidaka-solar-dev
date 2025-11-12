import React from 'react';

const TopNav: React.FC = () => {
  return (
    <div className="bg-gray-800 text-gray-300 hidden md:block">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
        {/* Contact Info */}
        <div className="flex items-center space-x-6">
          <a href="mailto:contact@hidakacommunication.com" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
            <img src="https://api.iconify.design/lucide/mail.svg?color=%23d1d5db" alt="email" className="w-4 h-4" />
            <span>contact@hidakacommunication.com</span>
          </a>
          <div className="border-l border-gray-600 h-4"></div>
          <a href="tel:1-800-555-1234" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
            <img src="https://api.iconify.design/lucide/phone.svg?color=%23d1d5db" alt="phone" className="w-4 h-4" />
            <span>1-800-555-1234</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-purple-400 transition-colors">
            <img src="https://api.iconify.design/lucide/facebook.svg?color=%23d1d5db" alt="Facebook" className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-purple-400 transition-colors">
            <img src="https://api.iconify.design/lucide/twitter.svg?color=%23d1d5db" alt="Twitter" className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-purple-400 transition-colors">
            <img src="https://api.iconify.design/lucide/instagram.svg?color=%23d1d5db" alt="Instagram" className="w-5 h-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-purple-400 transition-colors">
            <img src="https://api.iconify.design/lucide/linkedin.svg?color=%23d1d5db" alt="LinkedIn" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
