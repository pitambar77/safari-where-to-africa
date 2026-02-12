import React from "react";
import Banner from "../../components/Banner";
import aboutusbanner from "../../assets/about-banner.webp";
import Overview from "../../components/Overview";
import AboutSection from "./AboutSection";
import FounderQuoteSection from "./FounderQuoteSection";
import TeamSection from "./TeamSection";
import WhyBookWithTimbuktu from "./WhyBookWithTimbuktu";
import ImpactOfYourStay from "./ImpactOfYourStay";

const AboutUs = () => {
  return (
    <>
      <Banner title={"About Us"} imageUrl={aboutusbanner} />
      <div className="bg-[#f6f1e9]">
        <Overview
          title="Our Story Begins"
          subtitle="We plan African Travel and Tours with care, connecting travellers to people, wildlife, landscapes, and cultures through responsible travel."
          description="Every journey supports conservation, respects local communities, and offers meaningful experiences across Africa’s diverse regions and destinations. "
        />
        <AboutSection />
      </div>
      <FounderQuoteSection />
      <div className="py-16 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="bg-white/5 rounded-sm overflow-hidden shadow-sm">
          <div className="relative">
            <img
              src="https://tanzania-specialist.com/wp-content/uploads/2023/07/10-Days-Tanzania-safari-all-northern-parks-in-1-trip-wildebeest-migration.jpg"
              alt="Kenya Safari"
              className="w-full h-64 md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="p-6 text-white w-[55%] ">
                <blockquote className="text-3xl font-cormorant font-medium mb-4 relative">
                  <span className="absolute  -top-6 font-cormorant text-5xl ">
                    “
                  </span>
                  Safari is about the beauty of the land, the thrill of the
                  chase, and the spirit of adventure woven into the fabric of
                  the African landscape.
                  <span className="text-5xl font-cormorant  align-top">”</span>
                </blockquote>
                <p className="font-semibold font-quicksand mb-2">
                  Romi Boom
                </p>
                {/* <p className="text-sm text-gray-200 font-quicksand">
                  Uganda & Kenya Trip, May 2025 – Meg
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <TeamSection />
      <WhyBookWithTimbuktu />
      <ImpactOfYourStay />
    </>
  );
};

export default AboutUs;
