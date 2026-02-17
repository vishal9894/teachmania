import React, { useState } from "react";
import logo from "../assets/image.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Teach Mania Logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <h2 className="font-bold text-xl md:text-2xl text-orange-500">
              Teach Mania
            </h2>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group relative px-2 py-1 font-medium transition ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-400"
                  }`
                }
              >
                {item.name}
                {/* Underline - Fixed */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-orange-600 transition-all duration-300 ${
                    // This is the corrected part
                    "group-hover:w-full"
                  }`}
                />
              </NavLink>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden absolute z-50 bg-white w-full transition-all duration-300 ${
            isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2 py-4 border-t">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded transition-colors ${
                    isActive
                      ? "bg-orange-100 text-orange-600 border-l-4 border-orange-500 font-medium"
                      : "text-gray-700 hover:bg-gray-100 border-l-4 border-transparent hover:border-orange-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;