import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
        <FaTwitter size={24} />
      </a>
      <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
        <FaFacebookF size={24} />
      </a>
      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
        <FaInstagram size={24} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800">
        <FaLinkedinIn size={24} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;