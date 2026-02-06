// import WhyTravelCard from "../homePage/WhyTravelCard";
import React from "react";
import whyus1 from "../../assets/why-us1.webp";
import whyus2 from "../../assets/why-us2.webp";
import whyus3 from "../../assets/why-us3.webp";


const WhyTravel = () => {
  const reasons = [
    {
      image: whyus1,
      title: "Local Knowledge",
      description:
        "Trips are designed with local guides and partners, ensuring authentic experiences while supporting livelihoods and sharing genuine regional understanding.",
    },
    {
      image: whyus2,
      title: "Responsible Travel",
      description:
        "Journeys support conservation and local communities through low-impact travel practices that protect wildlife habitats, respect culture, and benefit destinations responsibly globally.",
    },
    {
      image: whyus3,
      title: "Careful Planning",
      description:
        "Each itinerary balances comfort, adventure, and realistic travel pacing to deliver smooth, enjoyable journeys across multiple African destinations, safely planned for guests.",
    },
  ];

  return (
    <div className="px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 flex flex-col items-center bg-white py-16">
      <div className="font-cormorant text-center">
        <h2 className="text-3xl text-[#a89f82] uppercase">
         Trusted African Travel Experiences
        </h2>
        <h5 className="text-6xl mb-10 mt-4 text-[#636363] capitalize font-normal">
          Why Our Travelers Choose Us
        </h5>
        <p className="font-quicksand max-w-xl mx-auto mb-12">
          Where to Africa focuses on responsible planning, local partnerships, and meaningful travel experiences across Southern and East Africa

        </p>
      </div>

      {/* Feature Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center bg-gray-50 rounded-sm shadow-sm overflow-hidden transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Image with hover zoom */}
            <div className="overflow-hidden w-full h-60">
              <img
                src={reason.image}
                alt={reason.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="p-6">
              <h3 className="text-3xl font-cormorant font-medium text-[#636363] mb-4">
                {reason.title}
              </h3>
              <p className="text-[#636363] font-quicksand">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyTravel;
