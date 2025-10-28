import { div } from 'framer-motion/client'
import React from 'react'
import Overview from '../../../components/Overview'
import AccomodationCards from './AccomodationCards'
import ThingsToDO from './ThingsToDO'
import OvernightAccommodations from '../../experiencePage/OvernightAccommodations'
import BestTimeToVisit from './BestTimeToVisit'
import JourneysCarousel from '../../Accomodation/AccomodationDetails/JourneysCarousel'
import JourneyOverview from '../../../components/JourneyOverview'

const DestinationDetails = () => {
  return (
    <>
     {/* <div className=" px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 mt-10 font-cormorant">
        <div className="">
          <div className=" font-cormorant text-center ">
            <h2 className=" text-[#aaa086] text-[24px] uppercase">land journey</h2>
            <div className=" max-w-xl mx-auto mt-4">
              <h5 className=" text-[64px] font-medium text-center leading-[1.2] text-[#686868]">
                Cape Town{" "}
              </h5>
            </div>
            <p className=' tracking-wider uppercase font-quicksand mt-2 '>Experience the thrill of the world with a chobe game drive</p>
          </div>
    

          <div className="flex flex-col md:flex-row justify-center  gap-8 md:gap-8  py-10 mt-6">
      
        <div className="text-center">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">Days</p>
          <p className="text-2xl font-quicksand text-[#686868]">8</p>
        </div>

        <div className="text-center md:border-l md:border-gray-300 md:pl-8">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
            From (Per Person)
          </p>
          <p className="text-2xl font-quicksand text-[#686868]">$5,890 USD</p>
        </div>

      
        <div className="text-center md:border-l md:border-gray-300 md:pl-8">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
            Journey Type
          </p>
          <p className="text-2xl font-quicksand text-[#686868]">River Cruising</p>
        </div>

      
        <div className="text-center md:border-l md:border-gray-300 md:pl-8">
          <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
            Time of Year
          </p>
          <p className="text-2xl font-quicksand text-[#686868]">Oct</p>
        </div>

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
              src="https://www.discoverafrica.com/wp-content/uploads/2022/10/Boulders-Beach-in-Caoe-Town-scaled.jpg"
              alt=""
              className=" h-[650px] w-full"
            />
          </div>
        </div>
      </div> */}

<JourneyOverview
      subtitle="Land Journey"
      title="Cape Town"
      description="Experience the thrill of the world with a chobe game drive"
      image="https://www.discoverafrica.com/wp-content/uploads/2022/10/Boulders-Beach-in-Caoe-Town-scaled.jpg"
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
        <AccomodationCards/>
       
      </div>
       <ThingsToDO/>
        <OvernightAccommodations/>
        <BestTimeToVisit/>
        <JourneysCarousel/>
    </>
  )
}

export default DestinationDetails