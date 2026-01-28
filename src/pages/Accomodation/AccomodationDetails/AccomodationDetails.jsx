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
// import {
//   FaSailboat,
//   FaDove,
//   FaHelicopter,
//   FaPlane,
//   FaFish,
 
//   FaHiking,
//   FaChild,
//   FaUtensils,
//   FaMountain,
//   FaSpa,
//   FaWineBottle,
// } from "react-icons/fa6"; // or "react-icons/fa" depending on version



// const activitiesData = [
//   { icon: <FaSailboat size={22} color="white" />, label: "Boat Trip" },
//   { icon: <FaDove size={22} color="white" />, label: "Ocean Safari" },
//   { icon: <FaHelicopter size={22} color="white" />, label: "Helicopter Flights" },
//   { icon: <FaPlane size={22} color="white" />, label: "Scenic Flights" },
//   { icon: <FaFish size={22} color="white" />, label: "Shark Diving" },
//   { icon: <FaHiking size={22} color="white" />, label: "Hiking" },
//   { icon: <FaGolfBall size={22} color="white" />, label: "Golf" },
//   { icon: <FaChild size={22} color="white" />, label: "Kids Club" },
//   { icon: <FaUtensils size={22} color="white" />, label: "Food Experiences" },
//   { icon: <FaMountain size={22} color="white" />, label: "Natural Wonders" },
//   { icon: <FaSpa size={22} color="white" />, label: "Wellness/Spa" },
//   { icon: <FaWineBottle size={22} color="white" />, label: "Wine Tour" },
// ];




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

  if (loading) return <p className="text-center py-10">Loading accomodation...</p>;
  if (!accommodation) return <p className="text-center py-10">Accommodation not found.</p>;



  return (
    <>
    
      <JourneyOverview
      title={accommodation.bannerTitle}
      subtitle={"Discover"}
      description=""
      image={accommodation.bannerImages}
      days="8"
      price={accommodation.pricePerPerson}
      journeyType="River Cruising"
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
    description={accommodation.galleryDescription}
    images={accommodation.galleryImages}
  />
      {/* <AccordionSection /> */}
      <AccordionSection aboutBooking={accommodation.aboutBooking} requirements={accommodation.requirements} />
      <JourneysCarousel />
      <RelatedCard />
    </>
  );
};

export default AccomodationDetails;
