import React from "react";

const PackageCardGridSection = ({ 
  title, 
  subtitle, 
  data = [], 
  CardComponent, 
  emptyMessage = "No items found." 
}) => {
  return (
    <section className="py-12">
      <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        
        {/* Section Heading */}
        <div className="font-cormorant text-center">
          {title && <h2 className="text-3xl text-[#a89f82] uppercase">{title}</h2>}
          {subtitle && (
            <h5 className="text-6xl mb-8 mt-4 text-[#636363] capitalize font-normal">
              {subtitle}
            </h5>
          )}
        </div>

        {/* Cards Grid */}
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 2xl:gap-8 mt-16">
            {data.map((item, index) => (
              <CardComponent key={item.id || index} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">{emptyMessage}</p>
        )}
        <div className=" mt-16 text-center">
            <button className="bg-[#ac9e86] text-white font-light tracking-widest py-3 px-8 text-xs sm:text-sm uppercase hover:bg-[#978973] rounded-sm transition duration-200 font-quicksand">More Itinenary</button>
        </div>
      </div>
    </section>
  );
};

export default PackageCardGridSection;
