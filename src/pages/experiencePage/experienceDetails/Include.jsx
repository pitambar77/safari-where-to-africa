import React from "react";
import {
  FaBinoculars,
  FaUser,
  FaGlassMartiniAlt,
  FaTimesCircle,
  FaSnowflake,
  FaPaw,
  FaBusAlt,
  FaCoffee,
} from "react-icons/fa";

import { PiBinocularsThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { LiaGlassMartiniSolid } from "react-icons/lia";
import { LiaTimesCircleSolid } from "react-icons/lia";
import { IoSnowOutline } from "react-icons/io5";
import { LuUtensils } from "react-icons/lu";
import { PiPawPrintThin } from "react-icons/pi";
import { PiBusLight,PiCoffeeLight } from "react-icons/pi";


const inclusionData = [
  { text: "Chobe game drive", icon: PiBinocularsThin, isIncluded: true },
  { text: "Guide", icon: CiUser, isIncluded: true },
  { text: "Beers and wine (afternoon)", icon: LiaGlassMartiniSolid, isIncluded: true },
  { text: "Gratuity", icon: LiaTimesCircleSolid, isIncluded: false },
  { text: "Snacks", icon: LuUtensils, isIncluded: true },
  { text: "Water and soft drinks", icon: IoSnowOutline, isIncluded: true },
  { text: "Wildlife viewing", icon: PiPawPrintThin, isIncluded: true },
  { text: "Items of a personal nature", icon: LiaTimesCircleSolid, isIncluded: false },
  { text: "Return road transfers", icon: PiBusLight, isIncluded: true },
  { text: "Tea & coffee", icon: PiCoffeeLight, isIncluded: true },
  { text: "US$15 National Park fee", icon: LiaTimesCircleSolid, isIncluded: false },
];

const InclusionCard = ({ text, Icon, isIncluded }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-4 bg-white rounded-sm border border-[#e3e2e2]/80 transition duration-300 hover:shadow-md h-40 ${
        isIncluded ? "" : "opacity-70"
      }`}
    >
      <Icon
        className={`w-8 h-8 mb-2 ${
          isIncluded ? "text-[#aaa086]" : "text-[#ad2b28]"
        }`}
      />
      <p
        className={` font-semibold font-quicksand ${
          isIncluded ? "" : ""
        }`}
      >
        {text}
      </p>
    </div>
  );
};

const Include = () => {
  return (
    <section className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-48 pb-16">
      <h2 className="text-6xl  mb-16  text-[#636363] capitalize font-cormorant text-center ">
        What's Included
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
        {inclusionData.map((item, index) => (
          <InclusionCard
            key={index}
            text={item.text}
            Icon={item.icon}
            isIncluded={item.isIncluded}
          />
        ))}
      </div>
    </section>
  );
};

export default Include;
