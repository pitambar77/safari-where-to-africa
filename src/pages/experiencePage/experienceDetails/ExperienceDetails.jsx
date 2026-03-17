import React, { useEffect, useState } from "react";
import Overview from "../../../components/Overview";
import Include from "./Include";
import GameDriveOption from "./GameDriveOption";
import GameDriveHighlights from "./GameDriveHighlights";
import GallerySectionExactWidths from "../../Accomodation/AccomodationDetails/GallerySection";
import JourneysCarousel from "../../Accomodation/AccomodationDetails/JourneysCarousel";
import JourneyOverview from "../../../components/JourneyOverview";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance.js";
import GallerySection from "../../Accomodation/AccomodationDetails/GallerySection";
import ItineraryDetailsSkeleton from "../../../components/skeletons/ItineraryDetailsSkeleton.jsx";
import PageNotFound from "../../PageNotFound.jsx";
import FloatingButton from "../../../components/FloatingButton.jsx";
import InquiryForm from "../../../components/InquiryForm.jsx";
import PopForm from "../../../components/PopForm.jsx";

const ExperienceDetails = () => {
  const { slug } = useParams(); // 👈 get trip id from URL
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);

  const [openInquiry, setOpenInquiry] = useState(false);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await axiosInstance.get(`/api/experience/slug/${slug}`); // 👈 Adjust your backend route if needed
        setExperience(res.data);
      } catch (err) {
        console.error("Failed to load experience:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, [slug]);

  if (loading) return <ItineraryDetailsSkeleton />;
  if (!experience) return <PageNotFound />;

  console.log(experience);

  return (
    <>
      <JourneyOverview
        subtitle="Experience"
        title={experience.bannerTitle}
        description={experience.bannerDescription}
        image={experience.bannerImage}
        days={experience.experienceInfo?.days}
        price={`${experience.experienceInfo?.pricePerPerson}`}
        journeyType={experience.experienceInfo?.journeyType}
        timeOfYear={experience.experienceInfo?.location}
        cities={experience.experienceInfo?.location}
        level={"Duration"}
        levelsec={"Price"}
        levelthird={"Min/Max person"}
        levelfourth={`Timing`}
      />

      <div className="bg-[#f6f1e9]">
        <Overview
          title={experience.overview.title}
          subtitle={experience.overview.subTitle}
          description={experience.overview.description}
        />
        <Include includes={experience.includes} />
      </div>
      {/* <GameDriveOption 
      gameDrives={experience.gameDrives}   /> */}
      {/* <PricingAvailabilitySection /> */}
      <GameDriveHighlights
        gamehighLight={experience.highlights}
        sectionTitle={experience.highlightheading}
      />
      {/* <GallerySectionExactWidths/> */}
      {/* <GallerySection
    title="Gallery"
    subtitle="Picture yourself here"
    description={experience.gallery.description}
    images={experience.gallery.images}
  /> */}

      <GallerySection
        title="Gallery"
        subtitle={experience.imageheading}
        description={experience.gallery.description}
        images={experience.gallery.images.map((img) => ({
          galleryImage: img.image,
          galleryName: "",
        }))}
      />

      <JourneysCarousel />
      <FloatingButton onClick={() => setOpenInquiry(true)} />
      {/* Modal Popup */}
      {openInquiry && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-28"
          onClick={() => setOpenInquiry(false)}
        >
          <div
            className="w-full max-w-6xl max-h-[85vh] overflow-y-auto rounded shadow-lg relative bg-[#ebe6dd]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenInquiry(false)}
              className="absolute cursor-pointer top-4 right-4 z-50 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-gray-100"
            >
              ✕
            </button>

            <PopForm />
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceDetails;
