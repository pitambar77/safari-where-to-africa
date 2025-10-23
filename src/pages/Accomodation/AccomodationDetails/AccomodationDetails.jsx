import React from "react";
import Overview from "../../../components/Overview";
import ActivitiesSection from "./ActivitiesSection";
import PricingAvailabilitySection from "./PricingAvailabilitySection";
import GallerySection from "./GallerySection";
import AccordionSection from "./AccordionSection";
import JourneysCarousel from "./JourneysCarousel";
import RelatedCard from "../../../components/RelatedCard";

const AccomodationDetails = () => {
  return (
    <>
      <div className=" max-w-[1320px] mx-auto px-4 mt-10 font-cormorant">
        <div className="">
          <div className=" font-cormorant text-center ">
            <h2 className=" text-[#aaa086] text-[24px] uppercase">Discover</h2>
            <div className=" max-w-xl mx-auto mt-4">
              <h5 className=" text-[64px] font-medium text-center leading-[1.2] text-[#686868]">
                The Mount Nelson Hotel{" "}
              </h5>
            </div>
          </div>
          {/* <div className=" flex gap-x-4 py-10 ">
            <div className="  border-[#aaa086] pr-10 ">
              <h2 className=" uppercase font-semibold text-[#9a8c69] border- ">Days</h2>
              <h5 className=" font-quicksand mt-4 font-semibold text-3xl text-[#686868]">5 Days</h5>
            </div>
            <div className=" border-l border-[#aaa086] pl-4">
              <h2 className="uppercase font-semibold text-[#9a8c69]">From (per Person)</h2>
              <h5 className="font-quicksand text-3xl font-semibold text-[#686868] mt-4">$15,590 USD</h5>
             
            </div>
            <div className="border-l border-[#aaa086] pl-4">
              <h2 className="uppercase font-semibold text-[#9a8c69]">Journey Type</h2>
              <h5 className="font-quicksand text-3xl font-semibold text-[#686868] mt-4">Land</h5>
            </div>
            <div className="border-l border-[#aaa086] pl-4">
              <h2 className="uppercase font-semibold text-[#9a8c69]">Passengers</h2>
              <h5 className="font-quicksand text-3xl font-semibold text-[#686868] mt-4">15</h5>
            </div>
            <div className="border-l border-[#aaa086] pl-4">
              <h2 className="uppercase font-semibold text-[#9a8c69]">Time of Year</h2>
              <h6 className="font-quicksand text-3xl font-semibold text-[#686868] mt-4">Mar - Oct, Dec</h6>
            </div>
            <div className="border-l border-[#aaa086] pl-4">
              <h2 className="uppercase font-semibold text-[#9a8c69]">Cities & Landmarks</h2>
              <h6 className="font-quicksand  text-[#686868] mt-4">
                Cape Town, Chobe National Park, Kruger National Park, Victoria
                Falls
              </h6>
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row justify-center  gap-8 md:gap-8  py-10">
        {/* Days */}
        <div className="text-center">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">Days</p>
          <p className="text-2xl font-quicksand text-[#686868]">8</p>
        </div>

        {/* From Price */}
        <div className="text-center md:border-l md:border-gray-300 md:pl-8">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
            From (Per Person)
          </p>
          <p className="text-2xl font-quicksand text-[#686868]">$5,890 USD</p>
        </div>

        {/* Journey Type */}
        <div className="text-center md:border-l md:border-gray-300 md:pl-8">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
            Journey Type
          </p>
          <p className="text-2xl font-quicksand text-[#686868]">River Cruising</p>
        </div>

        {/* Time of Year */}
        <div className="text-center md:border-l md:border-gray-300 md:pl-8">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
            Time of Year
          </p>
          <p className="text-2xl font-quicksand text-[#686868]">Oct</p>
        </div>

        {/* Cities & Landmarks */}
        <div className="text-center md:border-l md:border-gray-300 md:pl-8 max-w-xs">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
            Cities & Landmarks
          </p>
          <p className="text-xl font-quicksand text-[#686868] leading-relaxed">
            Amsterdam, Basel, Baden-Baden, Lucerne, Köln
          </p>
        </div>
      </div>
          <div>
            <img
              src="https://www.junglelodgeresort.com/images/uploads/403/5077jungle_lodge_resort__2_.jpg"
              alt=""
              className=" h-[650px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f6f1e9]">
        <Overview
          title="Welcome To Africa"
          subtitle="African landscapes parading with the circle of life promise magical moments unlike any you have imagined before. You'll find them..."
          description="Here at Newmark, we have an incredible variety of restaurants and bars across our beautiful properties, from ocean-side dining to city-chic Asian tapas and whimsical bougainvillea-clad courtyards. Find out more information below"
        />
      </div>

      <ActivitiesSection />
      <PricingAvailabilitySection />
      <GallerySection />
      <AccordionSection />
      <JourneysCarousel />
      <RelatedCard />
    </>
  );
};

export default AccomodationDetails;
