import React from "react";

import AccommodationRelated from "./AccommodationRelated";
import { Link } from "react-router-dom";

const AccommodationGrid = ({
  title = "Overnight Accommodations",
  subtitle = "Places to Stay in South Africa",
  data = [],
  onCardClick,
}) => {
  return (
    <section className=" bg-gray-50 py-16 ">
      <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Heading */}
        <div className=" text-center">
          {/* <h2 className="text-center text-2xl md:text-3xl font-normal uppercase text-[#a89f82] mb-4"> */}
          <p className=" text-[#a89f82] font-quicksand  uppercase">{title}</p>

          {/* </h2> */}
          <h5 className="text-6xl mb-16 mt-4 text-[#636363] capitalize font-normal font-cormorant">
            {subtitle}
          </h5>
        </div>
        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 font-cormorant">
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
                location={item.tag}
                tag={item.location}
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
