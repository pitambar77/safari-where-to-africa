// import "./SafariItinerary.css";
// import banner from "../../assets/itineray-banner.webp";
// import map from "../../assets/itinerary-map.jpg";
// import TourHighlights from "../safariItinerary/TourHighlights";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// export const tourHighlights = [
//   {
//     id: 1,
//     tourpic: "https://waybird.imgix.net/experiences/kodak_images/000/009/265/original/1-makgadikgadi-pans-botswana-timbuktu-travel-4.jpg?w=384&h=256&crop=fit&fit=min&dpr=1.5&q=50&auto=format",
//     tourovercon:"Highlights",
//     tourtitt: "Marvel at Victoria Falls",
//     para: "See the epic waterfall of your Insta dreams. Take a stroll along the edge and see this 'the smoke that thunders' in ...",

//   },
//   {
//     id: 2,
//     tourpic: "https://waybird.imgix.net/experiences/kodak_images/000/009/266/original/1-makgadikgadi-pans-botswana-timbuktu-travel-5.jpg?w=384&h=256&crop=fit&fit=min&dpr=1.5&q=50&auto=format",
//     tourovercon:"Highlights",
//     tourtitt: "Take a morning Game Drive in the Okavango",
//     para: "Get up with the sun in search of the amazing wildlife in this garden of Eden.",
//   },
//   {
//     id: 3,
//     tourpic: "https://waybird.imgix.net/experiences/kodak_images/000/000/141/original/horse-safari-uncharted-africa-Makgadigadi-Pans-botswana.jpg?w=384&h=256&crop=fit&fit=min&dpr=1.5&q=50&auto=format",
//     tourovercon:"Highlights",
//     tourtitt: "See Deadvlei and Big Daddy Sand Dune",
//     para: "Explore Sossusvlei, snap shots of Deadvlei and wander around Big Daddy sand dune",

//   },
//     {
//     id: 4,
//     tourpic: "https://waybird.imgix.net/experiences/kodak_images/000/009/281/original/1-makgadikgadi-pans-botswana-timbuktu-travel-22.jpg?w=384&h=256&crop=fit&fit=min&dpr=1.5&q=50&auto=format",
//     tourovercon:"Highlights",
//     tourtitt: "See Deadvlei and Big Daddy Sand Dune",
//     para: "Explore Sossusvlei, snap shots of Deadvlei and wander around Big Daddy sand dune",

//   },

// ];

// const SafariItinerary=()=>{
//     return(
//     <>
//     <section className="safari-welcome-sec">
//         <div className="container">
//         <div className="common-itineray-heading">
//           <h2>Land Journey</h2>
//           <h5>Wildlife Odyssey: South Africa, Botswana & Zimbabwe </h5>
//           <p>All Departures Are Even Smaller Groups Limited To 18 Tauck Guests</p>
//         </div>
//         <div className="itineray-short-del">
//             <div className="smal-short-box">
//                 <h2>Days</h2>
//                 <h5>5 Days</h5>
//             </div>
//             <div className="smal-short-box">
//                 <h2>From (per Person)</h2>
//                 <h5>$15,590 USD</h5>
//                 <p>Includes On-Tour Air</p>
//             </div>
//             <div className="smal-short-box">
//                 <h2>Journey Type</h2>
//                 <h5>Land</h5>
//             </div>
//             <div className="smal-short-box">
//                 <h2>Passengers</h2>
//                 <h5>15</h5>
//             </div>
//             <div className="smal-short-box">
//                 <h2>Time of Year</h2>
//                 <h6>Mar - Oct, Dec</h6>
//             </div>
//             <div className="smal-short-box">
//                 <h2>Cities & Landmarks</h2>
//                 <h6>Cape Town, Chobe National Park, Kruger National Park, Victoria Falls</h6>
//             </div>
//         </div>
//         <div className="banner-itinery">
//             <img src={banner} alt="" className="w-100"/>
//         </div>
//         </div>
//     </section>
//     <section className="safari_itineray_map_sec">
//         <div className="container">
//             <div className="common-heading">
//              <h2>Welcome To Africa</h2>
//               <h5>African landscapes parading with the circle of life promise magical moments unlike any you have imagined before. You'll find them...</h5>
//               <p>.....while tasting wines carefully cultivated and expertly poured. At safari lodges, tented camps and members' clubs luxuriously appoint...</p>
//                 <div className="map-box-iti">
//                     <img src={map} alt="" className="w-100"/>
//                 </div>
//              </div>
//         </div>
//     </section>
//     <section className="tours-heigh-sec">
//         <div className="container">
//             <div className="common-heading">
//              <h2>Welcome To Africa</h2>
//               <h5>Tours Highlights</h5>
//               <p>while tasting wines carefully cultivated and expertly poured. At safari lodges, tented camps and members' clubs luxuriously appoint</p>
//              </div>
//        <div className="tour-highlights-section">

//            <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={30}
//           slidesPerView={3}
//           navigation
//           loop={true}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             600: { slidesPerView: 2 },
//             1000: { slidesPerView: 3 },
//           }}
//           className="tour-highlights-slider"

//         >
//           {tourHighlights.map((tours) => (
//             <SwiperSlide key={tours.id}>
//               <div className="tour-highlights-card">
//                 <TourHighlights
//                   tourpic={tours.tourpic}
//                   tourovercon={tours.tourovercon}
//                   tourtitt={tours.tourtitt}
//                   para={tours.para}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//        </div>

//         </div>
//     </section>

//     </>
//     );
// };
// export default SafariItinerary;

import React from "react";
import Overview from "../../components/Overview";
import map from "../../assets/itinerary-map.jpg";
// import Itinerary from "./Itinerary";
import AccordionSection from "../Accomodation/AccomodationDetails/AccordionSection";
import TripHighlights from "./TripHighlights";
import JourneysCarousel from "../Accomodation/AccomodationDetails/JourneysCarousel";
import Itinerary from "./itinerary/Itinerary";

const SafariItinerary = () => {


  const itineraryData = [
  {
    id: 1,
    day: "Day 1",
    title: "Cape Town Arrival",
    location: "Cape Town",
    description:
      "Welcome to Africa! Your adventure begins in the stunning city of Cape Town, known for its scenic beauty and vibrant culture.",
    lodge: "Waterfront Breakwater Lodge (or similar)",
    images: [
      "https://www.backtoafricasafaris.com/wp-content/uploads/2024/04/tanzania-safari-itinerary.jpg",
     
    ],
    activities: [
      {
        time: "Morning",
        title: "Arrival & Transfer",
        details:
          "Arrive at Cape Town International Airport and transfer to your hotel near the V&A Waterfront.",
      },
      {
        time: "Evening",
        title: "Welcome Dinner",
        details:
          "Meet your fellow travelers and enjoy a delicious dinner overlooking the harbor.",
      },
    ],
  },
  {
    id: 2,
    day: "Day 2",
    title: "Cape Town City Tour",
    location: "Cape Town",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705703664229-F5COPDMP83G9TP9S533T/image-asset.jpeg?format=1500w",
    ],
    activities: [
      {
        time: "Morning",
        title: "Table Mountain Visit",
        details:
          "Take the cable car up Table Mountain for panoramic views of the city and the ocean.",
      },
      {
        time: "Afternoon",
        title: "City Exploration",
        details:
          "Visit landmarks like Greenmarket Square and the Castle of Good Hope.",
      },
    ],
  },
  {
    id: 3,
    day: "Day 3",
    title: "Africa Town City Tour",
    location: "Africa Town",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://cdn.kimkim.com/files/a/images/f848f3cc681da843f1eaf53d51ff801d537374cc/original-db81b0010461934f8ff9db8ce3e36ea5.jpg",
    ],
    activities: [
      {
        time: "Morning",
        title: "Table Mountain Visit",
        details:
          "Take the cable car up Table Mountain for panoramic views of the city and the ocean.",
      },
      {
        time: "Afternoon",
        title: "City Exploration",
        details:
          "Visit landmarks like Greenmarket Square and the Castle of Good Hope.",
      },
      {
        time: "Evening",
        title: "City Exploration",
        details:
          "Visit landmarks like Greenmarket Square and the Castle of Good Hope.",
      },
    ],
  },
  {
    id: 4,
    day: "Day 4",
    title: " Town City Tour",
    location: "Cape Town",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705676270084-WSF2FRI3I7Z7AJX1HM4K/GettyImages-852006468.jpg",
    ],
    activities: [
      {
        time: "Morning",
        title: "Table Mountain Visit",
        details:
          "Take the cable car up Table Mountain for panoramic views of the city and the ocean.",
      },
      {
        time: "Afternoon",
        title: "City Exploration",
        details:
          "Visit landmarks like Greenmarket Square and the Castle of Good Hope.",
      },
    ],
  },
  {
    id: 5,
    day: "Day 5",
    title: " City Tour",
    location: "Cape africa Town",
    description:
      "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
    images: [
      "https://d22eux7aqicogj.cloudfront.net/assets/hero-sliders/kenya-kids.webp",
    ],
    activities: [
      {
        time: "Morning",
        title: "Table Mountain Visit",
        details:
          "Take the cable car up Table Mountain for panoramic views of the city and the ocean.",
      },
      {
        time: "Afternoon",
        title: "City Exploration",
        details:
          "Visit landmarks like Greenmarket Square and the Castle of Good Hope.",
      },
    ],
  },
];

  return (
    <>
      <div className="  mt-10 font-cormorant">
        <div className="max-w-[1320px] mx-auto px-4">
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
              src="https://africa-media.org/wp-content/uploads/2020/10/wildlife-photo-cover.jpg"
              alt=""
              className=" h-[650px] w-full"
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
