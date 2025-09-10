import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import navbarData from "../../data/navbar.json";
import { NavLink, Link } from "react-router";
import { motion } from "framer-motion";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white text-gray-900 shadow-md"
          : "bg-gray-100/50 text-gray-800"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src={navbarData.logo}
              alt="Vivacom Logo"
              className="h-8 md:h-10"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 items-center">
          {navbarData.navItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.url}
                className={`uppercase transition text-sm ${
                  scrolled
                    ? "text-gray-900 hover:text-purple-700"
                    : "text-gray-800 hover:text-purple-600"
                }`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          {/* Contact Button */}
          <Link to="/contact-us">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                scrolled ? "bg-purple-600 text-white" : "bg-white"
              } text-blue-800 font-medium rounded-full py-2 px-4 shadow-lg uppercase tracking-wider cursor-pointer`}
            >
              Contact Us
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <>
          <ul
            className={`md:hidden flex flex-col px-4 py-3 space-y-3 border-t ${
              scrolled
                ? "bg-white border-gray-200"
                : "bg-gray-900 border-gray-700"
            }`}
          >
            {navbarData.navItems.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.url}
                  onClick={() => setIsOpen(false)} // <-- এখানে click এ menu hide
                  className={`block transition ${
                    scrolled
                      ? "text-gray-900 hover:text-blue-700"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <div className="bg-purple-900/90 rounded-full p-2 text-white text-sm text-center md:hidden  hover:scale-105 transition">
              {/* Contact Button */}
              <Link to="/contact-us">
                <button className="cursor-pointer">Contact Us</button>
              </Link>
            </div>
          </ul>
        </>
      )}
    </nav>
  );
};

export default MainNavbar;
