import React from "react";
import JourneyCard from "./JourneyCard";

const TravelguideSection = ({
  heading = "Journey Collection",
  subheading = "On Safari with Where to Africa",
  journeys = [],
}) => {
  return (
    <section className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-16 bg-white font-cormorant">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <p className="text-2xl md:text-3xl font-normal text-[#a89f82] uppercase mb-6">
          {heading}
        </p>
        <h2 className="text-5xl md:text-6xl mb-10 text-[#636363] capitalize font-normal">
          {subheading}
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mt-20">
        {journeys.map((item, index) => (
          <JourneyCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default TravelguideSection;
