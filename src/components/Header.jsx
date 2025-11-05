import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import logo from "../assets/whereto-logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const destinations = [
     { name: "South Africa", path: "/south-africa" },
     { name: "Botswana", path: "/botswana" },
     { name: "Namibia", path: "/namibia" },
        { name: "Zimbabwe", path: "/zimbabwe" },
     { name: "Zambia", path: "/zambia" },
     { name: "Mozambique", path: "/mozambique" },   
    { name: "Kenya", path: "/kenya" },
    { name: "Tanzania", path: "/tanzania" },
   
    
    
 
  ];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // below lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(hoverTimeout);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      const timeout = setTimeout(() => setIsOpen(false), 150); // small delay
      setHoverTimeout(timeout);
    }
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 w-28 md:w-36">
            <img src={logo} alt="Safari Logo" className="w-full" />
          </Link>

          {/* Main Menu */}
          <nav className="hidden lg:flex space-x-8 uppercase font-quicksand text-sm font-medium text-gray-600 relative">
            {/* Destinations Dropdown */}
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={isMobile ? toggleDropdown : undefined}
                className="flex items-center gap-2 uppercase hover:text-[#f25922] transition-colors"
              >
                Destinations
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-0 w-56 bg-white pt-2 rounded-lg  z-50"
                  >
                    {destinations.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.path}
                          className="block px-5 py-2.5 hover:bg-[#f25922]/10 hover:text-[#f25922] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Items */}
            <Link to="/journey" className="hover:text-[#f25922] transition-colors">
              Journey
            </Link>
            <Link to="/retreats" className="hover:text-[#f25922] transition-colors">
              Retreats
            </Link>
            <Link to="/experiences" className="hover:text-[#f25922] transition-colors">
              Experiences
            </Link>
            <Link to="/about-us" className="hover:text-[#f25922] transition-colors">
              About Us
            </Link>
            <Link to="/blogs" className="hover:text-[#f25922] transition-colors">
              Blogs
            </Link>
            <Link to="/conservation" className="hover:text-[#f25922] transition-colors">
              Conservation
            </Link>
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              to="/contact"
              className="hidden md:inline-block text-sm font-quicksand uppercase bg-[#aaa086] border border-[#aaa086] text-white rounded-md px-4 py-2 hover:bg-[#f25922] transition-colors"
            >
              Contact Us
            </Link>

            <Link
              to="/brochure"
              className="hidden lg:inline-block text-sm font-quicksand uppercase border border-gray-400 rounded-md px-4 py-2 hover:bg-[#f25922] hover:text-white transition-colors"
            >
              Brochure
            </Link>

            {/* Mobile Menu Icon */}
            <button
              onClick={toggleDropdown}
              className="lg:hidden text-gray-700 hover:text-[#f25922] p-2"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
