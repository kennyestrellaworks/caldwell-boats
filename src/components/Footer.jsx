import { Link } from "react-router-dom";
import logoWhite from "../assets/images/logo-white.svg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo */}
              <Link to="/" className="py-4">
                <img
                  className="h-16"
                  src={logoWhite}
                  alt="caldwell-boats-logo"
                />
              </Link>
            </div>
            <p className="text-gray-300 font-regular mb-4 max-w-md">
              Experience the thrill of the ocean with our premium speedboat
              rental service. From family adventures to luxury cruises, we make
              your water dreams come true.
            </p>
            <div className="flex space-x-4">
              <FaTwitter />
              <FaFacebook />
              <FaLinkedin />
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to=""
                  className="text-gray-300 hover:text-white font-light transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className="text-gray-300 hover:text-white font-light transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="speedboats"
                  className="text-gray-300 hover:text-white font-light transition-colors duration-200"
                >
                  Speedboats
                </Link>
              </li>
              <li>
                <Link
                  to="booking"
                  className="text-gray-300 hover:text-white font-light transition-colors duration-200"
                >
                  Booking
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <FaPhone /> +1 (555) 123-4567
              </p>
              <p>
                <MdEmail /> info@Caldwell Boats.com
              </p>
              <p>
                <FaLocationDot /> 123 Marina Bay Drive
                <br />
                Miami, FL 33101
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Caldwell Boats Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
