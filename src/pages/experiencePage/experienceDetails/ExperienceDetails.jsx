import React from 'react'
import Overview from '../../../components/Overview'
import Include from './Include'
import GameDriveOption from './GameDriveOption'
import PricingAvailabilitySection from '../../Accomodation/AccomodationDetails/PricingAvailabilitySection'
import GameDriveHighlights from './GameDriveHighlights'
import GallerySectionExactWidths from '../../Accomodation/AccomodationDetails/GallerySection'
import JourneysCarousel from '../../Accomodation/AccomodationDetails/JourneysCarousel'
import JourneyOverview from '../../../components/JourneyOverview'

const ExperienceDetails = () => {
  return (
    <>
   
    {/* <div className='px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-10'>
         <div className=" font-cormorant text-center mb-10 ">
            <h2 className=" text-[#aaa086] text-[24px] uppercase">Experience</h2>
            <div className=" max-w-xl mx-auto my-3">
              <h5 className=" text-[64px] font-medium text-center leading-[1.2] text-[#686868]">
                Chobe Gamedrive
              </h5>
            </div>
            <p className=' tracking-wider uppercase font-quicksand '>Experience the thrill of the world with a chobe game drive</p>
          </div>
            <img
              src="https://iso.500px.com/wp-content/uploads/2014/08/2048-5.jpg"
              alt=""
              className=" h-[650px] w-full"
            />


    </div> */}

<JourneyOverview
      subtitle="Experience"
      title="Chobe Gamedrive"
      description="Experience the thrill of the world with a chobe game drive"
      image="https://sustainabletravel.org/wp-content/uploads/Asian-Elephant-bathing-1200x675-1.jpg"
      days="8"
      price="$5,890 USD"
      journeyType="River Cruising"
      timeOfYear="Oct"
      cities="Amsterdam, Basel, Baden-Baden, Lucerne, Köln"
    />

    <div className="bg-[#f6f1e9]">
        <Overview
          title="Welcome To Africa"
          subtitle="African landscapes parading with the circle of life promise magical moments unlike any you have imagined before. You'll find them..."
          description="Here at Newmark, we have an incredible variety of restaurants and bars across our beautiful properties, from ocean-side dining to city-chic Asian tapas and whimsical bougainvillea-clad courtyards. Find out more information below"
        />
        <Include/>
      </div>
      <GameDriveOption/>
      <PricingAvailabilitySection/>
      <GameDriveHighlights/>
      <GallerySectionExactWidths/>
      <JourneysCarousel/>
 </>
  )
}

export default ExperienceDetails