import { useState, type FC } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { navLinks } from "../data/system";
import { FaX } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";

export const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-[500]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="py-4">
            <img className="h-16" src={logo} alt="caldwell-boats-logo" />
          </Link>
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link, index) => {
              return (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}
          </div>
          {/* Login and signup */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="login"
              className="text-primary-600 hover:text-primary-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Log in
            </Link>
            <Link
              to="signup"
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Sign up
            </Link>
          </div>
          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              {isMenuOpen ? <FaX /> : <BiMenu />}
            </button>
          </div>
        </div>
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col relative px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              {/* Mobile login & signup */}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link
                  to="login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-primary-600 hover:text-primary-800 px-3 py-2 rounded-md text-base font-medium"
                >
                  Log in
                </Link>
                <Link
                  to="signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-md text-base font-medium text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
