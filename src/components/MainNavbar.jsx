import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router";
import navbarData from "../data/navbar.json";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Parent menus
  const parentMenus = [
    { label: "Home", url: "/" },
    {
      label: "What We Do",
      children: [
        { label: "Solutions", url: "/solutions" },
        { label: "Services", url: "/services" },
      ],
    },
    {
      label: "Company",
      children: navbarData.navItems.filter(
        (item) =>
          item.label !== "Home" &&
          item.label !== "Solutions" &&
          item.label !== "Services"
      ),
    },
  ];

  return (
    <nav className="bg-gray-100 text-gray-800 border-t border-purple-900">
      <div className="container mx-auto flex justify-between md:justify-normal md:gap-16 items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={navbarData.logo}
            alt="Vivacom Logo"
            className="h-8 md:h-10"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {parentMenus.map((menu, idx) => (
            <li key={idx} className="relative group cursor-pointer">
              {!menu.children ? (
                <NavLink
                  to={menu.url}
                  className="hover:text-gray-900 transition cursor-pointer"
                >
                  {menu.label}
                </NavLink>
              ) : (
                <>
                  <button className="flex items-center hover:text-gray-900 transition cursor-pointer">
                    {menu.label}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>

                  {/* Dropdown on Hover */}
                  <div className="absolute left-0 top-full pt-8 max-h-[90vh] overflow-auto cursor-default opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200">
                    <div className="flex flex-wrap bg-gray-50 shadow-lg z-10 w-max rounded-xl">
                      <ul className="p-2 w-64 xl:w-80">
                        {menu.children.map((child, i) => (
                          <NavLink
                            key={i}
                            to={child.url}
                            className="flex items-center gap-3 p-3 cursor-pointer rounded-lg hover:bg-gray-100 text-gray-800 hover:text-blue-700 transition"
                          >
                            {/* যদি child.icon থাকে, দেখাবে */}
                            {child.icon && (
                              <img
                                loading="lazy"
                                src={child.icon}
                                alt={child.label}
                                className="self-baseline h-6"
                              />
                            )}
                            <div className="flex flex-col gap-1">
                              <p className="text-sm">{child.label}</p>
                            </div>
                          </NavLink>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-gray-100 border-t border-purple-800 px-4 py-3 space-y-3">
          {parentMenus.map((menu, idx) => (
            <li key={idx}>
              {!menu.children ? (
                <NavLink
                  to={menu.url}
                  className="block hover:text-gray-900 transition"
                  onClick={() => setIsOpen(false)} // 👈 menu click করলে hide হবে
                >
                  {menu.label}
                </NavLink>
              ) : (
                <details>
                  <summary className="cursor-pointer flex items-center justify-between hover:text-gray-900">
                    {menu.label}
                  </summary>
                  <ul className="pl-4 mt-2 space-y-2">
                    {menu.children.map((child, i) => (
                      <li key={i}>
                        <NavLink
                          to={child.url}
                          className="block text-sm hover:text-gray-900 transition"
                          onClick={() => setIsOpen(false)} // 👈 child click করলে hide হবে
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MainNavbar;
