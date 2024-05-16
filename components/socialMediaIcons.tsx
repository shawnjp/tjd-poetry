import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { gradient } from './inclusivePrideFlagColors'; // Import the gradient

const ThreadsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={className}>
    <text x="50%" y="50%" dy=".35em" textAnchor="middle" fontSize="18" fontFamily="Arial" fill="currentColor" stroke="#FFFFFF" strokeWidth="0.5"> @ </text>
  </svg>
);

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4 p-2 rounded-lg shadow-inner" style={{ background: gradient }}> {/* Apply the gradient here */}
      <a href="https://www.instagram.com/tjdpoetry/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
        <FaInstagram size={24} className="p-1 bg-white rounded-full shadow" />
      </a>
      <a href="https://www.facebook.com/tjdpoetry/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
        <FaFacebookF size={24} className="p-1 bg-white rounded-full shadow" />
      </a>
      <a href="https://www.threads.net/@tjdpoetry" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
        <ThreadsIcon className="shadow" />
      </a>
      <a href="https://twitter.com/Jessica10Lynne/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
        <FaTwitter size={24} className="p-1 bg-white rounded-full shadow" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;