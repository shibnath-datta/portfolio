import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Footer Text */}
          <p className="text-white text-sm md:text-base">
            © {new Date().getFullYear()} Shib Nath Datta. All Rights Reserved.
          </p>

          {/* Right Side: Social Icons */}
          <div className="flex mt-4 md:mt-0 gap-4">
            <Link
              to="#"
              className="text-gray-400 text-lg hover:text-blue-500 transition duration-300"
            >
              <FaFacebook />
            </Link>
            <Link
              to="#"
              className="text-gray-400 text-lg hover:text-blue-400 transition duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              className="text-gray-400 text-lg hover:text-pink-500 transition duration-300"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              className="text-gray-400 text-lg hover:text-blue-600 transition duration-300"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
