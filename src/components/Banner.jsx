import React from "react";

const Banner = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative md:h-screen h-[550px]">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className=" container mx-auto absolute inset-0 flex flex-col justify-center  text-white/80 px-4  ">
        <div className="  font-cormorant text-[60px] mb-4 font-semibold  capitalize">
          {title}
        </div>
        {subtitle && (
          <p className=" font-quicksand  text-sm  sm:text-left  max-w-xl capitalize">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;
