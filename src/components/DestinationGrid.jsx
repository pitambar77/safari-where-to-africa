import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Reusable destination grid component
 * 
 * @param {Array} data - List of areas/places with name, image, alt, and path
 * @param {String} title - Section title (optional)
 * @param {String} buttonText - Button label (optional)
 * @param {Function} onButtonClick - Button click handler (optional)
 */
const DestinationGrid = ({
  data = [],
  title = "",
  buttonText = "",
  onButtonClick,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#faf5e9] mx-auto justify-center px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-16">
      {title && (
        <h2 className="text-center text-2xl md:text-3xl font-quicksand font-semibold text-[#252525] mb-10 tracking-[2px]">
          {title}
        </h2>
      )}

      {/* Destination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-y-8">
        {data.map((item, index) => (
          <div
            key={item.name}
            onClick={() => navigate(item.path || "#")}
            className="flex items-center rounded-[3px] bg-white transition duration-300 cursor-pointer h-24 sm:h-28 lg:h-24 hover:shadow-md hover:scale-[1.02]"
            style={
              index % 3 === 0 || index % 3 === 1 ? { marginRight: "2rem" } : {}
            }
          >
            <div className="flex-shrink-0 w-24 sm:w-24 h-full">
              <img
                src={item.image}
                alt={item.alt || item.name}
                className="w-full h-full object-cover rounded-l-[3px]"
              />
            </div>
            <div className="flex-grow p-4 font-quicksand">
              <p className="text-sm sm:text-base font-semibold tracking-[2px] text-[#252525]">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button (optional) */}
      {buttonText && (
        <div className="flex justify-center mt-10 lg:mt-16">
          <button
            onClick={onButtonClick}
            className="bg-[#ac9e86] text-white font-light tracking-widest py-3 px-8 text-xs sm:text-sm uppercase hover:bg-[#978973] rounded-sm transition duration-200 font-quicksand"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default DestinationGrid;
