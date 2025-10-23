// import React from "react";
// import "./Header.css";
// import logo from "../assets/whereto-logo.webp"; 

// const Header = () => {
//   return (
//     <header className="africa_main_headr_box">
//       <div className="mani-con_africa">
//         <div className="row align-items-center">
          
//           <div className="col-md-2">
//             <div className="africa_logo">
//               <a href="/">
//                 <img src={logo} alt="Safari Logo" className="w-100" />
//               </a>
//             </div>
//           </div>

//           <div className="col-md-7">
//             <nav className="africa_main_menu">
//               <ul className="main_head_list">
//                 <li><a href="#">Destinations</a></li>
//                 <li><a href="#">Journey</a></li>
//                 <li><a href="#">Retreats</a></li>
//                 <li><a href="#">Experiences</a></li>
//                 <li><a href="#">About Us</a></li>
//                 <li><a href="#">Blogs</a></li>
//                 <li><a href="#">Conservation</a></li>
//               </ul>
//             </nav>
//           </div>

//           <div className="col-md-3">
//             <div className="africa_header_right">
              // <ul className="rigt_hed_desl">
              //   <li><a href="#" className="contac_head">Contact Us</a></li>
              //   <li><a href="#" className="bro_cont">Brochure</a></li>
              //   <li>
              //     <a href="#">
              //      <i className="fa-solid fa-bars"></i>
              //     </a>
              //   </li>
              // </ul>
//             </div>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from "react";
// Assuming 'logo' is correctly imported from '../assets/whereto-logo.webp'
import logo from "../assets/whereto-logo.webp"; 
// Note: You must ensure Font Awesome is linked in your project 
// for the 'fa-solid fa-bars' icon to display correctly.

const Header = () => {
  return (
    // Outer container (Replaces 'africa_main_headr_box' and general styling)
    <header className="py-4 shadow-sm bg-white">
      
      {/* Container - Replaces 'mani-con_africa' */}
      <div className="max-w-[1320px] mx-auto ">
        
        {/* Row - Replaces 'row align-items-center' */}
        {/* Uses flexbox with vertical alignment */}
        <div className="flex items-center justify-between">
          
          {/* Logo Column - Replaces 'col-md-2' */}
          <div className="flex-shrink-0 w-24 md:w-32">
            <div className="africa_logo">
              <a href="/">
                {/* Replaces 'w-100' */}
                <img src={logo} alt="Safari Logo" className="w-full" />
              </a>
            </div>
          </div>

          {/* Navigation Menu Column - Replaces 'col-md-7' */}
          {/* Hidden on small screens, shown on medium screens and up */}
          <div className="hidden md:flex flex-grow justify-center">
            <nav className="africa_main_menu">
              {/* Replaces 'main_head_list' */}
              <ul className="flex space-x-6 lg:space-x-8 uppercase font-quicksand">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150 text-sm font-medium">Destinations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150 text-sm font-medium">Journey</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150 text-sm font-medium">Retreats</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150 text-sm font-medium">Experiences</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150 text-sm font-medium">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150 text-sm font-medium">Blogs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150 text-sm font-medium">Conservation</a></li>
              </ul>
            </nav>
          </div>

          {/* Right Header Controls Column - Replaces 'col-md-3' */}
          <div className="flex-shrink-0">
            <div className="africa_header_right">
              {/* Replaces 'rigt_hed_desl' */}
              <ul className="flex items-center space-x-4">
                
                {/* Contact Us Button/Link */}
                <li className="hidden lg:block"> {/* Optional: Hide on smaller screens */}
                  <a href="#" className=" text-sm   font-quicksand uppercase bg-[#aaa086]  rounded-sm border border-[#aaa086] hover:bg-[#f25922] px-4 py-2 text-white  transition duration-150">
                    Contact Us
                  </a>
                </li>
                
                {/* Brochure Button/Link */}
                <li className="hidden md:block">
                  <a href="#" className="text-sm uppercase font-quicksand  rounded-sm border border-[#5c5e62] hover:bg-[#f25922] px-4 py-2 transition duration-200">
                    Brochure
                  </a>
                </li>
                
                {/* Mobile Menu Icon (Hamburger) */}
                <li>
                  {/* Always visible, but only functional on mobile to show the main menu */}
                  <button className="text-gray-600 hover:text-indigo-600 p-2 md:hidden">
                   <i className="fa-solid fa-bars text-xl"></i>
                  </button>
                  {/* On desktop, show the hamburger if the main menu is present (optional) */}
                  <a href="#" className="hidden md:block text-gray-600 hover:text-indigo-600 p-2">
                   <i className="fa-solid fa-bars text-xl"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;