import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Map, Plane, Mountain, Building2 } from "lucide-react";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-colors ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
    }`;

  return (
    <div className="w-64 bg-white shadow-md min-h-screen fixed left-0 top-0">
      <div className="text-2xl font-bold text-center py-4 border-b">Admin</div>
      <nav className="mt-6 space-y-2">
        <NavLink to="/admin/dashboard" className={linkClass}>
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>
        <NavLink to="/admin/destinations" className={linkClass}>
          <Map size={18} /> Destinations
        </NavLink>
        <NavLink to="/admin/trips" className={linkClass}>
          <Plane size={18} /> Trips
        </NavLink>
        <NavLink to="/admin/experiences" className={linkClass}>
          <Mountain size={18} /> Experiences
        </NavLink>
        <NavLink to="/admin/accommodations" className={linkClass}>
          <Building2 size={18} /> Accommodations
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
