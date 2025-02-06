import React from "react";
import { NavLink } from "react-router-dom";

export const DasMenu = () => {
  return (
    <>
      <section className="bg-gray-50 shadow-xl h-[120px] flex items-center sm:h-[80px] fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-4 items-center">
            {/* Logo */}
            <div className="col-span-12 sm:col-span-3 flex justify-center sm:justify-start">
              <div className="logo">
                <img
                  className="w-[50px] sm:w-[50px]"
                  src="/img/logo.png"
                  alt="Logo"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="col-span-12 sm:col-span-9">
              <nav className="flex justify-center sm:justify-end">
                <ul className="flex flex-wrap gap-4">
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-md transition duration-300 ${
                          isActive
                            ? "bg-gray-700 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog-list"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-md transition duration-300 ${
                          isActive
                            ? "bg-gray-700 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`
                      }
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/team-list"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-md transition duration-300 ${
                          isActive
                            ? "bg-gray-700 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`
                      }
                    >
                      Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service-list"
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-md transition duration-300 ${
                          isActive
                            ? "bg-gray-700 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`
                      }
                    >
                      Service
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
