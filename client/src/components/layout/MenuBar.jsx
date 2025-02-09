import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <section className="bg-gray-50 shadow-xl h-[80px] flex items-center fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                className="w-[40px] sm:w-[50px]"
                src="/img/logo.png"
                alt="Logo"
              />
              <span className="text-xl font-bold ml-2">Shibnath</span>
            </div>

            {/* Hamburger Button */}
            <button
              className="sm:hidden text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden sm:block">
              <ul className="flex gap-4">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md transition duration-300 ${
                        isActive
                          ? "bg-gray-700 text-white"
                          : "text-gray-700 hover:bg-gray-300"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md transition duration-300 ${
                        isActive
                          ? "bg-gray-700 text-white"
                          : "text-gray-700 hover:bg-gray-300"
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md transition duration-300 ${
                        isActive
                          ? "bg-gray-700 text-white"
                          : "text-gray-700 hover:bg-gray-300"
                      }`
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md transition duration-300 ${
                        isActive
                          ? "bg-gray-700 text-white"
                          : "text-gray-700 hover:bg-gray-300"
                      }`
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md transition duration-300 ${
                        isActive
                          ? "bg-gray-700 text-white"
                          : "text-gray-700 hover:bg-gray-300"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-gray-50 shadow-md sm:hidden fixed top-[80px] left-0 w-full z-40">
            <ul className="flex flex-col items-start gap-4 p-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition duration-300 ${
                      isActive
                        ? "bg-gray-700 text-white"
                        : "text-gray-700 hover:bg-gray-300"
                    }`
                  }
                  onClick={toggleMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition duration-300 ${
                      isActive
                        ? "bg-gray-700 text-white"
                        : "text-gray-700 hover:bg-gray-300"
                    }`
                  }
                  onClick={toggleMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition duration-300 ${
                      isActive
                        ? "bg-gray-700 text-white"
                        : "text-gray-700 hover:bg-gray-300"
                    }`
                  }
                  onClick={toggleMobileMenu}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition duration-300 ${
                      isActive
                        ? "bg-gray-700 text-white"
                        : "text-gray-700 hover:bg-gray-300"
                    }`
                  }
                  onClick={toggleMobileMenu}
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition duration-300 ${
                      isActive
                        ? "bg-gray-700 text-white"
                        : "text-gray-700 hover:bg-gray-300"
                    }`
                  }
                  onClick={toggleMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default MenuBar;
