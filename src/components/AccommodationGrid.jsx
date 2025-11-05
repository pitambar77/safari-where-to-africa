import React from "react";

import AccommodationRelated from "./AccommodationRelated";

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
            <AccommodationRelated
              key={item.id}
              image={item.image}
              nights={item.nights}
              title={item.title}
              location={item.location}
              tag={item.tag}
              onClick={() => onCardClick?.(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationGrid;
