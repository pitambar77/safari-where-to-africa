

import React from "react";
import Overview from "../../components/Overview";
import map from "../../assets/itinerary-map.jpg";
// import Itinerary from "./Itinerary";
import AccordionSection from "../Accomodation/AccomodationDetails/AccordionSection";
import TripHighlights from "./TripHighlights";
import JourneysCarousel from "../Accomodation/AccomodationDetails/JourneysCarousel";
import Itinerary from "./itinerary/Itinerary";
import itinary from '../../assets/itinary-banner-2.webp' 

const SafariItinerary = () => {


  const itineraryData = [
  {
    id: 1,
    day: "Day 1",
    title: "Cape Town Arrival",
    location: "Cape Town",
    description:
      "Welcome to Africa! Your adventure begins in the stunning city of Cape Town, known for its scenic beauty and vibrant culture. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    images: [
      "https://www.backtoafricasafaris.com/wp-content/uploads/2024/04/tanzania-safari-itinerary.jpg",
     
    ],
   
  },
  {
    id: 2,
    day: "Day 2",
    title: "Cape Town City Tour",
    location: "Cape Town",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705703664229-F5COPDMP83G9TP9S533T/image-asset.jpeg?format=1500w",
    ],
 
  },
  {
    id: 3,
    day: "Day 3",
    title: "Africa Town City Tour",
    location: "Africa Town",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://cdn.kimkim.com/files/a/images/f848f3cc681da843f1eaf53d51ff801d537374cc/original-db81b0010461934f8ff9db8ce3e36ea5.jpg",
    ],
  
  },
  {
    id: 4,
    day: "Day 4",
    title: " Town City Tour",
    location: "Cape Town",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. ",
    images: [
      "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705676270084-WSF2FRI3I7Z7AJX1HM4K/GettyImages-852006468.jpg",
    ],
 
  },
  {
    id: 5,
    day: "Day 5",
    title: " City Tour",
    location: "Cape africa Town",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://d22eux7aqicogj.cloudfront.net/assets/hero-sliders/kenya-kids.webp",
    ],
   
  },
  {
    id: 6,
    day: "Day 6",
    title: "Cape Town Arrival",
    location: "Cape Town",
    description:
      "Welcome to Africa! Your adventure begins in the stunning city of Cape Town, known for its scenic beauty and vibrant culture. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    images: [
      "https://www.backtoafricasafaris.com/wp-content/uploads/2024/04/tanzania-safari-itinerary.jpg",
     
    ],
   
  },
  {
    id: 7,
    day: "Day 7",
    title: "Cape Town City Tour",
    location: "Cape Town",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705703664229-F5COPDMP83G9TP9S533T/image-asset.jpeg?format=1500w",
    ],
 
  },
  {
    id: 8,
    day: "Day 8",
    title: "Africa Town City Tour",
    location: "Africa Town",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://cdn.kimkim.com/files/a/images/f848f3cc681da843f1eaf53d51ff801d537374cc/original-db81b0010461934f8ff9db8ce3e36ea5.jpg",
    ],
  
  },
  {
    id: 9,
    day: "Day 9",
    title: " Town City Tour",
    location: "Cape Town",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. ",
    images: [
      "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705676270084-WSF2FRI3I7Z7AJX1HM4K/GettyImages-852006468.jpg",
    ],
 
  },
  {
    id: 10,
    day: "Day 10",
    title: " City Tour",
    location: "Cape africa Town",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://d22eux7aqicogj.cloudfront.net/assets/hero-sliders/kenya-kids.webp",
    ],
   
  },
  {
    id: 11,
    day: "Day 11",
    title: "Cape Town Arrival",
    location: "Cape Town",
    description:
      "Welcome to Africa! Your adventure begins in the stunning city of Cape Town, known for its scenic beauty and vibrant culture. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    images: [
      "https://www.backtoafricasafaris.com/wp-content/uploads/2024/04/tanzania-safari-itinerary.jpg",
     
    ],
   
  },
  {
    id: 12,
    day: "Day 12",
    title: "Cape Town City Tour",
    location: "Cape Town",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705703664229-F5COPDMP83G9TP9S533T/image-asset.jpeg?format=1500w",
    ],
 
  },
  {
    id: 13,
    day: "Day 13",
    title: "Africa Town City Tour",
    location: "Africa Town",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://cdn.kimkim.com/files/a/images/f848f3cc681da843f1eaf53d51ff801d537374cc/original-db81b0010461934f8ff9db8ce3e36ea5.jpg",
    ],
  
  },
  {
    id: 14,
    day: "Day 14",
    title: " Town City Tour",
    location: "Cape Town",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. ",
    images: [
      "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705676270084-WSF2FRI3I7Z7AJX1HM4K/GettyImages-852006468.jpg",
    ],
 
  },
  {
    id: 15,
    day: "Day 15",
    title: " City Tour",
    location: "Cape africa Town",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://d22eux7aqicogj.cloudfront.net/assets/hero-sliders/kenya-kids.webp",
    ],
   
  },
];

  return (
    <>
      <div className="  mt-10 font-cormorant">
        <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
          <div className=" font-cormorant text-center ">
            <h2 className=" text-[#aaa086] text-[24px] uppercase">
              Land journey
            </h2>
            <div className=" max-w-3xl mx-auto mt-4">
              <h5 className=" text-[64px] font-medium text-center leading-[1.2] text-[#686868]">
                Wildlife Odyssey: South Africa, Botswana & Zimbabwe
              </h5>
            </div>
            <p className=" max-w-xl mx-auto mt-4 mb-10 tracking-wide font-quicksand text-[#686868] text-lg capitalize">
              All Departures are even smaller groups limited to 18 where to
              africa travel guests
            </p>
          </div>

          <div className=" flex flex-col md:flex-row justify-center  gap-8 md:gap-8  py-10">
            {/* Days */}
            <div className="text-center">
              <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
                Days
              </p>
              <p className="text-2xl font-quicksand text-[#686868]">8</p>
            </div>

            {/* From Price */}
            <div className="text-center md:border-l md:border-gray-300 md:pl-8">
              <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
                From (Per Person)
              </p>
              <p className="text-2xl font-quicksand text-[#686868]">
                $5,890 USD
              </p>
            </div>

            {/* Journey Type */}
            <div className="text-center md:border-l md:border-gray-300 md:pl-8">
              <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
                Journey Type
              </p>
              <p className="text-2xl font-quicksand text-[#686868]">
                River Cruising
              </p>
            </div>

            {/* Time of Year */}
            <div className="text-center md:border-l md:border-gray-300 md:pl-8">
              <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
                Time of Year
              </p>
              <p className="text-2xl font-quicksand text-[#686868]">Oct</p>
            </div>

            {/* Cities & Landmarks */}
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
              src="https://cdn.adventure-life.com/72/40/9/rjnv7v93/1300x820.webp"
              className=" h-[650px] w-full object-cover"
            />
          </div>
        </div>
      </div>



      <div className="bg-[#f6f1e9]">
        <Overview
          title="Welcome To Africa"
          subtitle="African landscapes parading with the circle of life promise magical moments unlike any you have imagined before. You'll find them..."
          description="Here at Newmark, we have an incredible variety of restaurants and bars across our beautiful properties, from ocean-side dining to city-chic Asian tapas and whimsical bougainvillea-clad courtyards. Find out more information below"
        />
        <div className=" max-w-5xl mx-auto pb-16 ">
          <img src={map} alt="" className="w-full" />
        </div>
      </div>
      <TripHighlights />
      {/* <Itinerary /> */}

  <Itinerary 
      
      data={itineraryData} title="South Africa Adventure"
      />

      <div className=" py-10">
        <AccordionSection />
      </div>

    

      <JourneysCarousel />
    </>
  );
};

export default SafariItinerary;
