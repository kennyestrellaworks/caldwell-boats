import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logoWhite from "../assets/images/logo-white.svg";
import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <Link to="/" className="inline-block mb-4">
            <img src={logoWhite} alt="Logo" className="h-16" />
          </Link>
          <p className="text-gray-400 mb-4">
            Premium speedboat rentals for unforgettable water adventures.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#">
              <FaFacebook className="hover:text-white" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-white" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-white" />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-white transition">
                Booking
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <div className="space-y-3 text-gray-400">
            <p className="flex items-center">
              <FaPhone className="mr-2" /> +1 (555) 123-4567
            </p>
            <p className="flex items-center">
              <MdEmail className="mr-2" /> info@caldwellboats.com
            </p>
            <p className="flex items-start">
              <FaLocationDot className="mr-2 mt-1" />
              123 Marina Bay Drive, Miami, FL 33101
            </p>
          </div>
        </div>
      </div>

      {/* Extra */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; 2025 Caldwell Boats Rentals. All rights reserved.
      </div>
    </footer>
  );
};
