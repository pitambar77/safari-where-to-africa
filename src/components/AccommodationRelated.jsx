import React from "react";
import { IoArrowForward } from "react-icons/io5";

const AccommodationRelated = ({ image, nights, title, location, tag, onClick }) => {
  return (
    <div className="bg-white rounded-sm hover:shadow-lg transition overflow-hidden font-cormorant">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {tag && (
          <span className="absolute bottom-1 left-1 bg-[#a79353] text-white text-xs font-medium px-3 py-1 rounded-sm uppercase tracking-wide">
            {tag}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-2">
        <p className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
          {nights}
        </p>
        <h3 className="text-xl font-medium text-[#a79353] leading-snug">
          {title}
        </h3>
        <p className="text-gray-500 font-quicksand">{location}</p>

        <div className="flex justify-end">
          <button
            onClick={onClick}
            className="flex items-center text-[#a79353] font-medium mt-3 group"
          >
            Learn More
            <IoArrowForward
              size={16}
              className="ml-1 transform group-hover:translate-x-1 transition"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccommodationRelated;
