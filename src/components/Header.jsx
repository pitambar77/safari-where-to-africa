import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import logo from "../assets/whereto-logo.webp";

import { getAllDestinations } from "../api/destinationAPI.js"; // ✅ use this

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const [destinations, setDestinations] = useState([]);

  // const destinations = [
  //    { name: "South Africa", path: "/south-africa" },
  //    { name: "Botswana", path: "/botswana" },
  //    { name: "Namibia", path: "/namibia" },
  //       { name: "Zimbabwe", path: "/zimbabwe" },
  //    { name: "Zambia", path: "/zambia" },
  //    { name: "Mozambique", path: "/mozambique" },
  //   { name: "Kenya", path: "/kenya" },
  //   { name: "Tanzania", path: "/tanzania" },
  // ];

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await getAllDestinations();
        setDestinations(res.data);
      } catch (err) {
        console.error("Failed to fetch destinations", err);
      }
    };
    fetchDestinations();
  }, []);
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

              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-0 w-56 bg-white pt-2 rounded-lg  z-50"
                  >
                    {destinations.map((d) => (
                      <li key={d._id}>
                        <Link
                          to={`/${d.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="block px-5 py-2.5 hover:bg-[#f25922]/10 hover:text-[#f25922] transition-colors"
                        >
                          {d.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* <div className="inline-block relative group">
            <button className="hover:text-amber-700">Destinations ▾</button>
            <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
              {destinations.map((d) => (
                <li key={d._id}>
                  <Link
                    to={`/destination/${d.slug}`}
                     onClick={() => setIsOpen(false)}
                    className="block px-5 py-2.5 hover:bg-[#f25922]/10 hover:text-[#f25922] transition-colors"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

            {/* Other Nav Items */}
            <Link
              to="/packages"
              className="hover:text-[#f25922] transition-colors"
            >
              Journey
            </Link>
            <Link
              to="/accommodations"
              className="hover:text-[#f25922] transition-colors"
            >
              Retreats
            </Link>
            <Link
              to="/experiences"
              className="hover:text-[#f25922] transition-colors"
            >
              Experiences
            </Link>
            <Link
              to="/about-us"
              className="hover:text-[#f25922] transition-colors"
            >
              About Us
            </Link>
            <Link
              to="#"
              className="hover:text-[#f25922] transition-colors"
            >
              Blogs
            </Link>
            <Link
              to="/conservation"
              className="hover:text-[#f25922] transition-colors"
            >
              Conservation
            </Link>
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              to="/contact-us"
              className="hidden md:inline-block text-sm font-quicksand uppercase bg-[#aaa086] border border-[#aaa086] text-white rounded-md px-4 py-2 hover:bg-[#f25922] transition-colors"
            >
              Contact Us
            </Link>

            <Link
              to="#"
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

// // components/Header.jsx
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getAllDestinations } from "../api/destinationApi"; // ✅ use this
// import logo from "../assets/whereto-logo.webp";
// import { FaChevronDown } from "react-icons/fa6";

// const Header = () => {
//   const [destinations, setDestinations] = useState([]);

//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const res = await getAllDestinations();
//         setDestinations(res.data);
//       } catch (err) {
//         console.error("Failed to fetch destinations", err);
//       }
//     };
//     fetchDestinations();
//   }, []);

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="px-6 py-4 flex justify-between items-center">
//         <Link to="/">
//           <img src={logo} alt="WhereToAfrica" className="w-36" />
//         </Link>

//         <nav className="space-x-6">
//           <Link to="/" className="hover:text-amber-700">Home</Link>

//           {/* Dropdown */}
//           <div className="inline-block relative group">
//             <button className="hover:text-amber-700 flex items-center gap-1">
//               Destinations <FaChevronDown className="text-xs" />
//             </button>
//             <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded w-48">
//               {destinations.map((d) => (
//                 <li key={d._id}>
//                   <Link
//                     to={`/destination/${d.slug}`}
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     {d.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <Link to="/journey" className="hover:text-amber-700">Journey</Link>
//           <Link to="/retreats" className="hover:text-amber-700">Retreats</Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
