import Link from 'next/link';
import { FaWhatsapp, FaMobileAlt, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="bg-[#001E5D] p-6 px-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 text-white">
          <a href="https://wa.me/917982190362" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaWhatsapp size={24} />
          </a>
          <a href="tel:+917982190362" className="hover:text-gray-200 flex items-center">
            <FaMobileAlt size={24} />
            <span className="ml-2">+91 7982190362</span>
          </a>
        </div>
        <div className="flex space-x-4 text-white">
          <a href="https://www.linkedin.com/company/saresearch/about/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/S_Aresearch" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaTwitter size={24} />
          </a>
          <a href="mailto:info@saresearch.in" className="hover:text-gray-200">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
