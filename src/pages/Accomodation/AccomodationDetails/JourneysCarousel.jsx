// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

// // --- Data for the Journey Cards ---
// const journeys = [
//   {
//     id: 1,
//     image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/leopard-safari-south-africa.jpg',
//     title: 'South Africa: An Elegant Adventure',
//     days: '12 DAYS',
//     price: '$11,990',
//     type: 'LAND JOURNEY',
//   },
//   {
//     id: 2,
//     image: 'https://safarifrank.com/wp-content/uploads/2019/11/lower-zambezi-zambia-gesa-frank-safari-tusk-and-mane-1920x1080.jpg',
//     title: 'Botswana, South Africa & Zambia',
//     days: '12 DAYS',
//     price: '$15,990',
//     type: 'LAND JOURNEY',
//   },
//   {
//     id: 3,
//     image: 'https://rajgirsafari.bihar.gov.in/uploads/2025/02/08/zoo%20safari%20lion%20(2).jpg',
//     title: 'Serengeti & Zanzibar Explorer',
//     days: '10 DAYS',
//     price: '$9,500',
//     type: 'SAFARI ADVENTURE',
//   },
//   {
//     id: 4,
//     image: 'https://www.sierraclub.org/sites/default/files/styles/sierra_full_page_width/public/sierra/articles/big/SIERRA-iStock-687031310-WB.jpg.webp?itok=yfxjyXCZ',
//     title: 'Morocco: Imperial Cities & Sahara',
//     days: '9 DAYS',
//     price: '$8,200',
//     type: 'CULTURAL TOUR',
//   },
//   {
//     id: 5,
//     image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/leopard-safari-south-africa.jpg',
//     title: 'South Africa: An Elegant Adventure',
//     days: '12 DAYS',
//     price: '$11,990',
//     type: 'LAND JOURNEY',
//   },
//   {
//     id: 6,
//     image: 'https://safarifrank.com/wp-content/uploads/2019/11/lower-zambezi-zambia-gesa-frank-safari-tusk-and-mane-1920x1080.jpg',
//     title: 'Botswana, South Africa & Zambia',
//     days: '12 DAYS',
//     price: '$15,990',
//     type: 'LAND JOURNEY',
//   },
//   {
//     id: 7,
//     image: 'https://rajgirsafari.bihar.gov.in/uploads/2025/02/08/zoo%20safari%20lion%20(2).jpg',
//     title: 'Serengeti & Zanzibar Explorer',
//     days: '10 DAYS',
//     price: '$9,500',
//     type: 'SAFARI ADVENTURE',
//   },
//   {
//     id: 8,
//     image: 'https://www.sierraclub.org/sites/default/files/styles/sierra_full_page_width/public/sierra/articles/big/SIERRA-iStock-687031310-WB.jpg.webp?itok=yfxjyXCZ',
//     title: 'Morocco: Imperial Cities & Sahara',
//     days: '9 DAYS',
//     price: '$8,200',
//     type: 'CULTURAL TOUR',
//   },
// ];

// const JourneysCarousel = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const cardsPerView = 2; // Fixed number of cards to show
//   const totalCards = journeys.length;
//   const totalPages = Math.ceil(totalCards / cardsPerView);

//   // The base percentage for one card in a two-card layout (50%)
//   const baseCardPercentage = 50 / cardsPerView;

//   const translationValue = currentPage * baseCardPercentage;

//   const goToNextPage = () => {
//     setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
//   };

//   const goToPreviousPage = () => {
//     setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
//   };

//   return (
//     <div className="flex flex-col items-center bg-white py-16 ">

//      <div className="font-cormorant text-center">
//           <h2 className="text-3xl text-[#a89f82] uppercase"> Related Journeys</h2>

//           <h5 className="text-6xl  mb-8 mt-4 text-[#636363] capitalize font-normal">
//             Other Journeys You May Enjoy
//           </h5>
//         </div>

//       {/* Carousel Container */}
//       <div className="relative w-full px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28  mt-5">

//         {/* Viewport container with overflow hidden */}
//         <div className="overflow-hidden">

//           {/* Main Card Display Area - This entire track slides */}
//           <div
//             className="flex transition-transform duration-500 ease-in-out gap-x-8"
//             // Set the width to be the total number of cards times the percentage required per card
//             style={{
//                 width: `${totalCards * baseCardPercentage}%`,
//                 transform: `translateX(-${translationValue}%)`,
//             }}
//           >
//             {journeys.map((journey) => (

//               <div
//                 key={journey.id}
//                 className="relative flex-shrink-0 rounded-sm overflow-hidden "
//                 // For two items (50% each) with gap-x-8, the card width needs to be slightly less than 50%
//                 style={{ width: `calc(${baseCardPercentage}% - 1rem)` }}
//               >
//                 <img
//                   src={journey.image}
//                   alt={journey.title}
//                   className="w-full h-96 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 p-8 text-white">
//                   <h3 className="text-3xl font-cormorant font-light mb-2">{journey.title}</h3>
//                   <p className="text-sm font-quicksand font-light uppercase tracking-wide mb-1">
//                     {journey.days} | FROM ${journey.price}
//                   </p>
//                   <p className="text-sm font-quicksand uppercase tracking-wide opacity-80">
//                     {journey.type}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Carousel Navigation Arrows */}

//         <div
//           onClick={goToPreviousPage}
//           className="absolute top-1/2 left-14 -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/4 bg-[#a89f82] p-3 rounded-full shadow-md hover:bg-[#f25922] cursor-pointer transition-colors hidden md:block"
//           aria-label="Previous Journey"
//         >
//           <ChevronLeft className="w-6 h-6 text-white" />
//         </div>

//         <div
//           onClick={goToNextPage}
//           className="absolute top-1/2 right-14 -translate-y-1/2 translate-x-1/2 md:translate-x-1/4 bg-[#a89f82] p-3 rounded-full shadow-md hover:bg-[#f25922] cursor-pointer transition-colors hidden md:block"
//           aria-label="Next Journey"
//         >
//           <ChevronRight className="w-6 h-6 text-white" />
//         </div>
//       </div>

//       {/* Bottom Pagination */}
//       <div className="flex items-center space-x-4 mt-12 text-[#a89f82]">
//         <button
//           onClick={goToPreviousPage}
//           className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           aria-label="Previous Page"
//         >
//           <ArrowLeft className="w-5 h-5" />
//         </button>
//         {/* <span className="text-lg font-quicksand font-light">
//           {`${(currentPage + 1).toString().padStart(2, '0')}`} <span className="text-gray-400"><div className=" w-16 flex-1 h-[1px] bg-[#a89f82] mx-3"></div></span> {`${totalPages.toString().padStart(2, '0')}`}
//         </span> */}

// <div className="flex items-center text-lg font-quicksand font-light">
//   <span>{(currentPage + 1).toString().padStart(2, "0")}</span>
//   <span className="mx-3 w-16 h-[1px] bg-[#a89f82] inline-block"></span>
//   <span className="text-gray-400">
//     {totalPages.toString().padStart(2, "0")}
//   </span>
// </div>

//         <button
//           onClick={goToNextPage}
//           className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           aria-label="Next Page"
//         >
//           <ArrowRight className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JourneysCarousel;


import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const JourneysCarousel = ({ journeys = [], destinationSlug }) => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (!journeys.length) return null;

  return (
    <section className="py-16 relative bg-white">
      {/* ---------- Heading ---------- */}
      <div className="text-center max-w-6xl mx-auto mb-14 font-cormorant">
        <p className="text-2xl md:text-3xl font-normal text-[#a89f82] uppercase mb-6">
          Related Journeys
        </p>
        <h2 className="text-6xl mb-10 text-[#636363] capitalize font-normal">
          Other Journeys You May Enjoy
        </h2>
      </div>

      {/* ---------- Swiper ---------- */}
      <div className="relative pl-4 md:pl-10 lg:pl-16 xl:pl-20 2xl:pl-28">
        <Swiper
          modules={[Navigation]}
          slidesPerView={2.5}
          slidesPerGroup={2}
          spaceBetween={24}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2.5, slidesPerGroup: 2 },
          }}
          onInit={(swiper) => {
            const total = Math.ceil(
              journeys.length / swiper.params.slidesPerGroup
            );
            setTotalPages(total);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            const group = swiper.params.slidesPerGroup || 2;
            const page = Math.ceil((swiper.activeIndex + 1) / group);
            const total = Math.ceil(journeys.length / group);

            setCurrentPage(page);
            setTotalPages(total);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="pb-10"
        >
          {journeys.map((region) => (
            <SwiperSlide key={region._id}>
              {/* ---------- Journey Card ---------- */}
              <div
                onClick={() =>
                  navigate(`/destinations/${destinationSlug}/${region.slug}`)
                }
                className="relative h-[420px] rounded-sm overflow-hidden cursor-pointer"
              >
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl font-cormorant font-light mb-2">
                    {region.name}
                  </h3>
                  {region.subtitle && (
                    <p className="text-sm font-quicksand opacity-80">
                      {region.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ---------- Side Arrows ---------- */}
        <button
          className={`swiper-prev absolute left-9 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full transition z-10 ${
            isBeginning
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          disabled={isBeginning}
        >
          <FaArrowLeftLong className="text-[#a89f82]" size={18} />
        </button>

        <button
          className={`swiper-next absolute right-1/6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full transition z-10 ${
            isEnd
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          disabled={isEnd}
        >
          <FaArrowRightLong className="text-[#a89f82]" size={18} />
        </button>
      </div>

      {/* ---------- Bottom Pagination ---------- */}
      <div className="flex items-center space-x-4 mt-12 text-[#a89f82] justify-center font-cormorant">
        <button
          className={`swiper-prev ${
            isBeginning
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          disabled={isBeginning}
        >
          <FaArrowLeftLong className="w-8 h-5" />
        </button>

        <div className="text-lg font-quicksand font-light flex items-center">
          {String(currentPage).padStart(2, "0")}
          <span className="mx-3 w-16 h-[1px] bg-[#a89f82] inline-block"></span>
          <span className="text-gray-400">
            {String(totalPages).padStart(2, "0")}
          </span>
        </div>

        <button
          className={`swiper-next ${
            isEnd
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          disabled={isEnd}
        >
          <FaArrowRightLong className="text-[#a89f82] w-8 h-5" />
        </button>
      </div>
    </section>
  );
};

export default JourneysCarousel;

