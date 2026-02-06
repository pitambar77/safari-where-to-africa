import React, { useEffect, useState } from "react";
import ActivitiesSection from "./ActivitiesSection";
import PricingAvailabilitySection from "./PricingAvailabilitySection";
import GallerySection from "./GallerySection";
import AccordionSection from "./AccordionSection";
import JourneysCarousel from "./JourneysCarousel";
import RelatedCard from "../../../components/RelatedCard";
import JourneyOverview from "../../../components/JourneyOverview";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";

const AccomodationDetails = () => {

  const { id } = useParams(); // 👈 get trip id from URL
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccommodation = async () => {
      try {
        const res = await axiosInstance.get(`/api/accommodation/${id}`); // 👈 Adjust your backend route if needed
        setAccommodation(res.data);
      } catch (err) {
        console.error("Failed to load accomodation:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodation();
  }, [id]);

  console.log(accommodation);

  if (loading) return <p className="text-center py-10">Loading accomodation...</p>;
  if (!accommodation) return <p className="text-center py-10">Accommodation not found.</p>;



  return (
    <>
    
      <JourneyOverview
      title={accommodation.bannerTitle}
      subtitle={accommodation.bannerSubtitle}
      description={accommodation.bannerDescription}
      image={accommodation.bannerImages}
      days={accommodation.nightsStay}
      price={accommodation.pricePerPerson}
      journeyType={accommodation.accommodationType}
      timeOfYear={accommodation.checkIn}
      cities={accommodation.location}
      />
  
      <ActivitiesSection 
      title={accommodation.overviewTitle}
      subtitle={accommodation.overviewSubtitle}
      description={accommodation.overviewDescription}
      activities={accommodation.amenities}
      />
      <PricingAvailabilitySection />
     <GallerySection
    title="Gallery"
    subtitle="Picture yourself here"
    description="Take a journey through The Mount Nelson Hotel to get a flavour of
            its unique style and character, designed to enchant every guest."
    images={accommodation.gallery}
  />
      {/* <AccordionSection /> */}
      <AccordionSection aboutBooking={accommodation.aboutBooking} requirements={accommodation.requirements} />
      <JourneysCarousel />
      <RelatedCard />
    </>
  );
};

export default AccomodationDetails;
