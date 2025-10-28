import React from "react";

const JourneyOverview = ({
  title,
  subtitle,
  description,
  image,
  days,
  price,
  journeyType,
  timeOfYear,
  cities,
}) => {
  return (
    <section className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 mt-10 font-cormorant">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-[#aaa086] text-[24px] uppercase">{subtitle}</h2>
        <div className="max-w-xl mx-auto mt-4">
          <h5 className="text-[64px] font-medium leading-[1.2] text-[#686868]">
            {title}
          </h5>
        </div>
        <p className="tracking-wider uppercase font-quicksand mt-2 text-[#686868]">
          {description}
        </p>
      </div>

      {/* Details Row */}
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-8 py-10 mt-6">
        {/* Days */}
        <div className="text-center">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
            Days
          </p>
          <p className="text-2xl font-quicksand text-[#686868]">{days}</p>
        </div>

        {/* From Price */}
        <div className="text-center md:border-l md:border-gray-300 md:pl-8">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
            From (Per Person)
          </p>
          <p className="text-2xl font-quicksand text-[#686868]">{price}</p>
        </div>

        {/* Journey Type */}
        <div className="text-center md:border-l md:border-gray-300 md:pl-8">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
            Journey Type
          </p>
          <p className="text-2xl font-quicksand text-[#686868]">{journeyType}</p>
        </div>

        {/* Time of Year */}
        <div className="text-center md:border-l md:border-gray-300 md:pl-8">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
            Time of Year
          </p>
          <p className="text-2xl font-quicksand text-[#686868]">{timeOfYear}</p>
        </div>

        {/* Cities & Landmarks */}
        <div className="text-center md:border-l md:border-gray-300 md:pl-8 max-w-xs">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
            Cities & Landmarks
          </p>
          <p className="text-xl font-quicksand text-[#686868] leading-relaxed">
            {cities}
          </p>
        </div>
      </div>

      {/* Image */}
      <div>
        <img
          src={image}
          alt={title}
          className="h-[650px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default JourneyOverview;
