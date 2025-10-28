import React from "react";
import Overview from "../../../components/Overview";
import ActivitiesSection from "./ActivitiesSection";
import PricingAvailabilitySection from "./PricingAvailabilitySection";
import GallerySection from "./GallerySection";
import AccordionSection from "./AccordionSection";
import JourneysCarousel from "./JourneysCarousel";
import RelatedCard from "../../../components/RelatedCard";
import JourneyOverview from "../../../components/JourneyOverview";

const AccomodationDetails = () => {
  return (
    <>
      <JourneyOverview
      title={"The Mount Nelson Hotel"}
      subtitle={"Discover"}
      description=""
      image="https://www.junglelodgeresort.com/images/uploads/403/5077jungle_lodge_resort__2_.jpg"
      days="8"
      price="$5,890 USD"
      journeyType="River Cruising"
      timeOfYear="Oct"
      cities="Amsterdam, Basel, Baden-Baden, Lucerne, Köln"
      />
      {/* <div className="bg-[#faf5e9]">
        <Overview
          title="Welcome To Africa"
          subtitle="African landscapes parading with the circle of life promise magical moments unlike any you have imagined before. You'll find them..."
          description="Here at Newmark, we have an incredible variety of restaurants and bars across our beautiful properties, from ocean-side dining to city-chic Asian tapas and whimsical bougainvillea-clad courtyards. Find out more information below"
        />
      </div> */}

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
