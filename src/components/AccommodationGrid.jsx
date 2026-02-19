import React from "react";

import AccommodationRelated from "./AccommodationRelated";
import { Link } from "react-router-dom";

const AccommodationGrid = ({
  title = "Overnight Accommodations",
  data = [],
  onCardClick,
}) => {
  return (
    <section className="bg-white py-16 font-cormorant">
      <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-normal uppercase text-[#a89f82] mb-12">
          {title}
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer"
              onClick={() => onCardClick && onCardClick(item.id)}
            >
              <AccommodationRelated
                key={item.id}
                image={item.image}
                nights={item.nights}
                title={item.title}
                location={item.location}
                tag={item.tag}
              />
            </div>
          ))}
        </div>
        <div className=" mt-16 text-center">
          <Link
            to={"/accommodations"}
            className="bg-[#ac9e86] text-white font-light tracking-widest py-3 px-8 text-xs sm:text-sm uppercase hover:bg-[#978973] rounded-sm transition duration-200 font-quicksand"
          >
            View All Accommodations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AccommodationGrid;
