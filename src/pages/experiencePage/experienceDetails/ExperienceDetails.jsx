import React, { useEffect, useState } from 'react'
import Overview from '../../../components/Overview'
import Include from './Include'
import GameDriveOption from './GameDriveOption'
import PricingAvailabilitySection from '../../Accomodation/AccomodationDetails/PricingAvailabilitySection'
import GameDriveHighlights from './GameDriveHighlights'
import GallerySectionExactWidths from '../../Accomodation/AccomodationDetails/GallerySection'
import JourneysCarousel from '../../Accomodation/AccomodationDetails/JourneysCarousel'
import JourneyOverview from '../../../components/JourneyOverview'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../../api/axiosInstance'
import GallerySection from '../../Accomodation/AccomodationDetails/GallerySection'

const ExperienceDetails = () => {


const { id } = useParams(); // 👈 get trip id from URL
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await axiosInstance.get(`/api/experience/${id}`); // 👈 Adjust your backend route if needed
        setExperience(res.data);
      } catch (err) {
        console.error("Failed to load experience:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading experience...</p>;
  if (!experience) return <p className="text-center py-10">Experience not found.</p>;

  console.log(experience)


  return (
    <>
<JourneyOverview
      subtitle="Experience"
  title={experience.bannerTitle}
  description={experience.bannerDescription}
  image={experience.bannerImage}
  days={experience.experienceInfo?.days}
  price={`$${experience.experienceInfo?.pricePerPerson} USD`}
  journeyType={experience.experienceInfo?.journeyType}
  timeOfYear="Oct-7"
  cities={experience.experienceInfo?.location}
    />

    <div className="bg-[#f6f1e9]">
        <Overview
          title={experience.overview.title}
          subtitle={experience.overview.subTitle}
          description={experience.overview.description}
        />
        <Include/>
      </div>
      <GameDriveOption 
      gameDrives={experience.gameDrives}   />
      <PricingAvailabilitySection/>
      <GameDriveHighlights
      gamehighLight={experience.highlights}
        sectionTitle="Chobe Game Drive Highlights"
      />
      {/* <GallerySectionExactWidths/> */}
       <GallerySection
    title="Gallery"
    subtitle="Picture yourself here"
    description={experience.gallery.description}
    images={experience.gallery.images}
  />
      <JourneysCarousel/>
 </>
  )
}

export default ExperienceDetails