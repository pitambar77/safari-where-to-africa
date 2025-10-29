import React from "react";
import { FaLeaf, FaSun, FaStar, FaCloud, FaMoon } from "react-icons/fa"; // icons placeholders

import bird from '../../assets/enjoy-the-planning.svg'

const features = [
  {
    icon: <FaLeaf className="text-3xl text-black" />,
    title: "Enjoy the planning",
    description:
      "No pressure, no rush. Our interactive trip planner lets you explore destinations, swap out hotels, and add experiences, all at your own pace.",
  },
  {
    icon: <FaSun className="text-3xl text-black" />,
    title: "Collaboration is key",
    description:
      "You plan the fun stuff and we’ll fine-tune the magic. Our travel experts are here to guide, advise, and help you craft a trip that’s absolutely perfect for you.",
  },
  {
    icon: <FaStar className="text-3xl text-black" />,
    title: "Experiences matter",
    description:
      "We’re committed to finding you the adventures that make your heart sing and seeking out those goosebump-inducing memories that will last a lifetime.",
  },
  {
    icon: <FaCloud className="text-3xl text-black" />,
    title: "We’ve got the insider knowledge",
    description:
      "Our team are real people that care deeply and live and breathe travel. They are based all over the world and their local knowledge is the best in the business.",
  },
  {
    icon: <FaMoon className="text-3xl text-black" />,
    title: "Peace of mind",
    description:
      "From pre-trip jitters to late-night arrivals, our global team and on-the-ground partners are here for you, 24/7. You do the adventuring – we’ve got everything else covered.",
  },
];

const WhyBookWithTimbuktu = () => {
  return (
    <section className="py-20 bg-[#f6f1e9] text-black">
      <div className="px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 grid lg:grid-cols-3 gap-12">
        {/* LEFT TEXT SECTION */}
        <div>
          <p className="text-lg uppercase tracking-wider font-quicksand font-semibold mb-4">
            Travel, your way
          </p>
          <h2 className="text-4xl font-cormorant mb-4">Why book with Timbuktu</h2>
          <p className="text-gray-700 leading-relaxed font-quicksand">
            Smart tools and expert help for travel made easy – and a little more
            fun.
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
