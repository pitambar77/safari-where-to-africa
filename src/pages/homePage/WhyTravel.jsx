// import WhyTravelCard from "../homePage/WhyTravelCard";
import React from "react";
import whyus1 from "../../assets/why-us1.webp";
import whyus2 from "../../assets/why-us2.webp";
import whyus3 from "../../assets/why-us3.webp";


const WhyTravel = () => {
  const reasons = [
    {
      image: whyus1,
      title: "African Heritage",
      description:
        "We’re conservationists, educators and storytellers, and we’re proudly born and bred Africans with over 25 years of experience navigating and exploring the African wilderness.",
    },
    {
      image: whyus2,
      title: "Your Dreams Come First",
      description:
        "Born from family heritage and guided by safari expertise, we deliver luxury African safaris curated just for you. Your vision becomes our blueprint as we create extraordinary experiences beyond what you thought possible.",
    },
    {
      image: whyus3,
      title: "Safaris For Good",
      description:
        "We design luxury safaris to suit you without the influence of commercial agreements or cooperations. We work with ethical providers to give you the most authentic African safari possible.",
    },
  ];

  return (
    <div className="px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 flex flex-col items-center bg-white py-16">
      <div className="font-cormorant text-center">
        <h2 className="text-3xl text-[#a89f82] uppercase">
          Family Passion Meets Safari Expertise
        </h2>
        <h5 className="text-6xl mb-10 mt-4 text-[#636363] capitalize font-normal">
          Why travel with Where to Africa
        </h5>
        <p className="font-quicksand max-w-xl mx-auto mb-12">
          while tasting wines carefully cultivated and expertly poured. At
          safari lodges, tented camps and members' clubs luxuriously appoint...
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
