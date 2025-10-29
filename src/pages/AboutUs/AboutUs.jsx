import React from 'react'
import Banner from '../../components/Banner'
import aboutusbanner from '../../assets/about-banner.webp'
import Overview from '../../components/Overview'
import AboutSection from './AboutSection'
import FounderQuoteSection from './FounderQuoteSection'
import TeamSection from './TeamSection'
import WhyBookWithTimbuktu from './WhyBookWithTimbuktu'
import ImpactOfYourStay from './ImpactOfYourStay'

const AboutUs = () => {
  return (
    <>
    <Banner
    title={"About Us"}
    imageUrl={aboutusbanner}
    />
     <div className="bg-[#f6f1e9]">
        <Overview
          title="Welcome To Africa"
          subtitle="African landscapes parading with the circle of life promise magical moments unlike any you have imagined before. You'll find them..."
          description="Here at Newmark, we have an incredible variety of restaurants and bars across our beautiful properties, from ocean-side dining to city-chic Asian tapas and whimsical bougainvillea-clad courtyards. Find out more information below"
        />
       <AboutSection/>
       <FounderQuoteSection/>
     
        
      </div>
        <div className='py-16 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28'>
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
            <span className="absolute  -top-6 font-cormorant text-5xl ">“</span>
            Kevin with Timbuktu was absolutely wonderful towork with planning the trip and giving suggestions. He was very responsive and easy to work with. The trip was amazing! the best trip we’ve been on as a family. 
            <span className="text-5xl font-cormorant  align-top">”</span>
          </blockquote>
                <p className="font-semibold font-quicksand mb-2">Paolo De Marchis</p>
                <p className="text-sm text-gray-200 font-quicksand">
                  Uganda & Kenya Trip, May 2025 – Meg
                </p>
              </div>
            </div>
          </div>
        </div>
       </div>

       <TeamSection/>
       <WhyBookWithTimbuktu/>
       <ImpactOfYourStay/>
    </>
  )
}

export default AboutUs