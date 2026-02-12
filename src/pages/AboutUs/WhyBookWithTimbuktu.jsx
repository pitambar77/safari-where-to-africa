import React from "react";
import { FaLeaf, FaSun, FaStar, FaCloud, FaMoon } from "react-icons/fa"; // icons placeholders

import bird from "../../assets/enjoy-the-planning.svg";

const features = [
  
  {
    icon: <FaSun className="text-3xl text-[#aaa086]" />,
    title: "Local Expertise",
    description:
      "Journeys planned with experienced local guides, ensuring accurate insights, smooth logistics, cultural respect, and realistic pacing across diverse African destinations, delivered safely, responsibly, and consistently.",
  },
  {
    icon: <FaStar className="text-3xl text-[#aaa086]" />,
    title: "Responsible Travel",
    description:
      "Travel decisions prioritize conservation, community benefit, and low-impact practices, protecting wildlife habitats, supporting livelihoods, and respecting cultural heritage across Africa, responsibly always.",
  },
  {
    icon: <FaCloud className="text-3xl text-[#aaa086]" />,
    title: "Careful Planning",
    description:
      "Every itinerary balances comfort, adventure, timing, and distances, creating smooth journeys that feel unrushed, practical, and enjoyable for travellers across African regions today",
  },
  {
    icon: <FaMoon className="text-3xl text-[#aaa086]" />,
    title: "Trusted Partnerships",
    description:
      "Long-term relationships with guides, lodges, and communities ensure reliable operations, fair practices, and consistent quality throughout each journey across African destinations, all done responsibly.",
  },
  {
    icon: <FaLeaf className="text-3xl text-[#aaa086]" />,
    title: "Clear Communication",
    description:
      "From planning to travel updates, information is shared openly, helping travelers feel prepared, confident, and supported throughout their trip across Africa.",
  },
];

const WhyBookWithTimbuktu = () => {
  return (
    <section className="py-20 bg-[#f6f1e9] ">
      <div className="px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 grid lg:grid-cols-3 gap-12">
        {/* LEFT TEXT SECTION */}
        <div>
          <p className="text-lg uppercase tracking-wider font-quicksand font-semibold mb-4 text-[#636363]">
            Travel With Confidence
          </p>
          <h2 className="text-4xl font-cormorant mb-4 text-[#636363]">
            Why Book with Us
          </h2>
          <p className="text-gray-700 leading-relaxed font-quicksand">
            Thoughtfully planned African journeys built on trust, local
            knowledge, and responsible choices.
          </p>
        </div>

        {/* RIGHT FEATURES GRID */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-4 font-quicksand">
              <div>{feature.icon}</div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-700  leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBookWithTimbuktu;
