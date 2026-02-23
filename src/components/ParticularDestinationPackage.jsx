import React from "react";
import { Link } from "react-router-dom";

const ParticularDestinationPackage = ({
  data = [],
  CardComponent,
  onCardClick,
  emptyMessage = "No items found.",
}) => {
  return (
    <section className="py-16">
      <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Cards Grid */}
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 2xl:gap-8 ">
            {data.map((item, index) => (
              <CardComponent key={item.id || index} item={item}  safari={item} onClick={() => onCardClick?.(item.id)} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">{emptyMessage}</p>
        )}
      </div>
      <div className=" mt-16 text-center">
        <Link
          to={"/packages"}
          className="bg-[#ac9e86] text-white font-light tracking-widest py-3 px-8 text-xs sm:text-sm uppercase hover:bg-[#978973] rounded-sm transition duration-200 font-quicksand"
        >
          Expore More
        </Link>
      </div>
    </section>
  );
};

export default ParticularDestinationPackage;
