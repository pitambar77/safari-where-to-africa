import React from "react";
import { FaSailboat } from "react-icons/fa6";
import {  FaDove, FaHelicopter, FaPlane, FaFish, FaGolfBall, FaHiking, FaChild, FaUtensils, FaCity, FaMountain, FaSpa, FaWineBottle } from "react-icons/fa"; // example icons

const activities = [
  { icon: <FaSailboat size={22} color="white" />, label: "Boat Trip" },
  { icon: <FaDove size={22} color="white" />, label: "Ocean Safari" },
  { icon: <FaHelicopter size={22} color="white" />, label: "Helicopter Flights" },
  { icon: <FaPlane size={22} color="white" />, label: "Scenic Flights" },
  { icon: <FaFish size={22} color="white" />, label: "Shark Diving" },
  { icon: <FaHiking size={22} color="white" />, label: "Hiking" },
  { icon: <FaGolfBall size={22} color="white" />, label: "Golf" },
  { icon: <FaChild size={22} color="white" />, label: "Kids Club" },
  { icon: <FaUtensils size={22} color="white" />, label: "Food Experiences" },
  // { icon: <FaCity size={22} color="white" />, label: "City Sights" },
  { icon: <FaMountain size={22} color="white" />, label: "Natural Wonders" },
  { icon: <FaSpa size={22} color="white" />, label: "Wellness/Spa" },
  { icon: <FaWineBottle size={22} color="white" />, label: "Wine Tour" },
];

const ActivitiesSection = () => {
  return (
    <div className="bg-[#f6f1e9]">
      <div className="max-w-[1320px] mx-auto px-4 pb-16 pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 justify-center ">
          {activities.map((item, index) => (
            <div
              key={index}
              className="flex  items-center text-center gap-x-4 relative group"
            >
                
              {/* Icon Circle */}
              <div className="bg-[#a89f82] w-10 h-10 flex items-center justify-center rounded-full mb-3 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Label */}
              <p className="text-[#333] text-lg font-quicksand">{item.label}</p>

              {/* Divider line */}
              <span className="absolute bottom-[-12px] left-0 right-0 h-[1px] bg-[#c8c0a6]"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
