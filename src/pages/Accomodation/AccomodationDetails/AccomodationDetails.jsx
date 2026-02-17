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
import { useNavigate } from "react-router-dom";


const AccomodationDetails = () => {
  const { slug } = useParams(); // 👈 get trip id from URL
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);
const navigate = useNavigate();


  // useEffect(() => {
  //   const fetchAccommodation = async () => {
  //     try {
  //       const res = await axiosInstance.get(`/api/accommodation/slug/${slug}`); // 👈 Adjust your backend route if needed
  //       setAccommodation(res.data);
  //     } catch (err) {
  //       console.error("Failed to load accomodation:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchAccommodation();
  // }, [slug]);

  useEffect(() => {
    const fetchAccommodation = async () => {
      try {
        const res = await axiosInstance.get(`/api/accommodation/slug/${slug}`);
        const current = res.data;
        setAccommodation(current);

        // 🔥 Fetch all accommodations from same destination
        const relatedRes = await axiosInstance.get(
          `/api/accommodation?destination=${current.destination}`,
        );

        const filtered = relatedRes.data
          .filter((item) => item.slug !== current.slug)
          .slice(0, 6); // limit to 6

        setRelated(filtered);
      } catch (err) {
        console.error("Failed to load accomodation:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodation();
  }, [slug]);

  console.log(accommodation);

  if (loading)
    return <p className="text-center py-10">Loading accomodation...</p>;
  if (!accommodation)
    return <p className="text-center py-10">Accommodation not found.</p>;

  return (
    <>
      <JourneyOverview
        title={accommodation.bannerTitle}
        subtitle={accommodation.bannerSubtitle}
        description={accommodation.bannerDescription}
        image={accommodation.bannerImages}
        days={accommodation.nightsStay}
        price={accommodation.pricePerPerson}
        journeyType={accommodation.location}
        timeOfYear={accommodation.accommodationType}
        // cities={accommodation.location}
        level={"Ratings"}
        levelsec={"Price Per Person"}
        levelthird={" Type"}
        levelfourth={" Category "}
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
      <AccordionSection
        aboutBooking={accommodation.aboutBooking}
        requirements={accommodation.requirements}
      />
      <JourneysCarousel />
      {/* <RelatedCard /> */}
      <RelatedCard
        data={related}
        onCardClick={(slug) => navigate(`/accommodation/${slug}`)}
      />
    </>
  );
};

export default AccomodationDetails;
