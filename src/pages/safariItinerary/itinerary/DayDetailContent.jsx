import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiBrickWall } from "react-icons/gi";
// import ActivitySection from "./ActivitySection";

const DayDetailContent = ({
  title,
  location,
  description,
  lodge,
  images = [],
  // activities = [], // array of { time, title, details }
}) => {
  return (
    <div className="flex flex-col gap-8 p-6 md:flex-row md:justify-between md:items-center ">
      {/* LEFT SIDE */}
      <div className="md:w-1/2">
        {/* Location & Overview */}
        <div className="flex items-start mb-4">
          <MdOutlineLocationOn className="w-8 h-8 text-[#aaa086] mr-3 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-[#827659] mb-2">{title}</h3>
            {description && (
              <p className="text-gray-600 leading-relaxed font-quicksand">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Lodge Info */}
        {lodge && (
          <div className="flex items-center text-gray-600 mt-6">
            <GiBrickWall className="w-8 h-5 mr-3 text-[#aaa086] flex-shrink-0" />
            <span className="font-medium text-lg">{lodge}</span>
          </div>
        )}

        {/* Activities / Schedule */}
        {/* {activities.length > 0 && (
          <div className="mt-8 space-y-6">
            <h4 className="text-lg font-semibold text-[#827659] mb-2">
              Daily Highlights
            </h4>
            {activities.map((activity, idx) => (
              <ActivitySection key={idx} {...activity} />
            ))}
          </div>
        )} */}
      </div>

      {/* RIGHT SIDE */}
      {images.length > 0 && (
        <div className=" md:w-1/2">
          {images.map((img, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden shadow-md bg-gray-200"
            >
              <img
                src={img}
                alt={`Itinerary ${index}`}
                className="object-cover w-full h-[400px]"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DayDetailContent;
