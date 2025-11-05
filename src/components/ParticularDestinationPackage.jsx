import React from 'react'

const ParticularDestinationPackage = ({
  data = [], 
  CardComponent, 
  emptyMessage = "No items found." 
}) => {
  return (
    <section className="py-16">
      <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        
        {/* Cards Grid */}
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 2xl:gap-8 ">
            {data.map((item, index) => (
              <CardComponent key={item.id || index} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">{emptyMessage}</p>
        )}
       
      </div>
    </section>
  );
};


export default ParticularDestinationPackage