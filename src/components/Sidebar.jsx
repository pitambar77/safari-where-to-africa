// import React from "react";
// import { NavLink } from "react-router-dom";
// import { LayoutDashboard, Map, Plane, Mountain, Building2 } from "lucide-react";

// const Sidebar = () => {
//   const linkClass = ({ isActive }) =>
//     `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-colors ${
//       isActive
//         ? "bg-blue-600 text-white"
//         : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//     }`;

//   return (
//     <div className="w-64 bg-white shadow-md min-h-screen fixed left-0 top-0">
//       <div className="text-2xl font-bold text-center py-4 border-b">Admin</div>
//       <nav className="mt-6 space-y-2">
//         <NavLink to="/admin/dashboard" className={linkClass}>
//           <LayoutDashboard size={18} /> Dashboard
//         </NavLink>
//         <NavLink to="/admin/destinations" className={linkClass}>
//           <Map size={18} /> Destinations
//         </NavLink>
//         <NavLink to="/admin/trips" className={linkClass}>
//           <Plane size={18} /> Trips
//         </NavLink>
//         <NavLink to="/admin/experiences" className={linkClass}>
//           <Mountain size={18} /> Experiences
//         </NavLink>
//         <NavLink to="/admin/accommodations" className={linkClass}>
//           <Building2 size={18} /> Accommodations
//         </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// import { NavLink } from "react-router-dom";
// import { FaMapMarkedAlt, FaUmbrellaBeach, FaHotel, FaRoute } from "react-icons/fa";

// const Sidebar = () => {
//   const links = [
//     { name: "Destinations", icon: <FaMapMarkedAlt />, path: "/destinations" },
//     { name: "Experiences", icon: <FaUmbrellaBeach />, path: "/experience" },
//     { name: "Trips", icon: <FaRoute />, path: "/trips" },
//     { name: "Accommodations", icon: <FaHotel />, path: "/accommodations" },
//   ];

//   return (
//     <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col p-5">
//       <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
//       <nav className="flex flex-col gap-3">
//         {links.map((link) => (
//           <NavLink
//             key={link.name}
//             to={link.path}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
//                 isActive ? "bg-gray-700" : "hover:bg-gray-800"
//               }`
//             }
//           >
//             {link.icon}
//             <span>{link.name}</span>
//           </NavLink>
//         ))}
//       </nav>
//       <button className="mt-auto bg-red-600 py-2 rounded-lg hover:bg-red-700">Logout</button>
//     </div>
//   );
// };

// export default Sidebar;

import { NavLink } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaUmbrellaBeach,
  FaHotel,
  FaRoute,
} from "react-icons/fa";

const Sidebar = () => {
  const links = [
    { name: "Destinations", icon: <FaMapMarkedAlt />, path: "/dashboard/destinations" },
    { name: "Experiences", icon: <FaUmbrellaBeach />, path: "/dashboard/experiences" },
    { name: "Trips", icon: <FaRoute />, path: "/dashboard/trips" },
    { name: "Accommodations", icon: <FaHotel />, path: "/dashboard/accommodations" },
    { name: "Travel Guide", icon: <FaHotel />, path: "/dashboard/travelguide" },
    { name: "Travel Guide List", icon: <FaHotel />, path: "/dashboard/blog" },

    

  ];

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col p-5">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>

      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

      <button className="mt-auto bg-red-600 py-2 rounded-lg hover:bg-red-700">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;

