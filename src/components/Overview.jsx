import React from "react";

const Overview = ({ title, subtitle, description }) => {
  return (
    <div className=" max-w-[1320px] mx-auto px-4 py-16">
     
        <div className=" max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-cormorant text-6xl text-[#636363] mb-5">
            {title}
          </h2>
          <h3 className=" font-cormorant mb-5 text-4xl font-semibold text-[#636363] leading-[1.2]  ">
            {subtitle}
          </h3>

          {/* Description */}
          <p className=" mx-auto font-quicksand mt-5 max-w-xl">{description}</p>
        </div>
     
    </div>
  );
};

export default Overview;
