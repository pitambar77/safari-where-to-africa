// import React from 'react';

// /**
//  * Data for each game drive option.
//  * In a real application, these images would likely be imported or served from a CDN.
//  * For this example, I'm using placeholder images that visually match the originals.
//  */
// const gameDriveOptions = [
//   {
//     image: 'https://serengetisteppe.com/storage/images/484ca97c-cc29-4ade-9ed4-e4068bc35ebb.jpg',
//     title: 'Chobe National; park',
//     description: ' Chobe National park is renowned for its vast elephant population, diverse wild life and breathtaking landscape',
//   },
//   {
//     image: 'https://capetowndaytours.checkfront.com/media/L468-1--1614785510749032.jpg',
//     title: 'Elephants',
//     description: 'Chobe National park is renowned for its vast elephant population, diverse wild life',
//   },
//   {
//     image: 'https://media.gadventures.com/media-server/cache/92/9b/929b8f99eb4dcfb115ca9d735480814c.jpg',
//     title: 'Sound owner in nature',
//     description: 'Chobe National park is renowned for its vast elephant population, diverse wild life and breathtaking landscape',
//   },
//   {
//     image: 'https://moafrikatours.com/wp-content/uploads/2023/11/d4.jpg',
//     title: 'Elephants',
//     description: 'Chobe National park is renowned for its vast elephant population, diverse wild life',
//   },
// ];

// /**
//  * Individual card component for a game drive option.
//  */
// const GameDriveCard = ({ image, title, description }) => {
//   return (
//     <div className="flex flex-col">
//       <div className="mb-4">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-auto object-cover rounded-md aspect-[3.5/5]  shadow-sm"
//         />
//       </div>
//       <h3 className="text-2xl font-cormorant font-semibold text-gray-800 mb-2 leading-tight">
//         {title}
//       </h3>
//       <p className="text-gray-800 font-quicksand  ">{description}</p>
//     </div>
//   );
// };

// /**
//  * Main component for the 'Chobe game drive options' section.
//  */
// const GameDriveHighlights = () => {
//   return (
//     <section className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-48 py-16">
//        <h2 className="text-6xl  mb-16  text-[#636363] capitalize font-cormorant text-center ">
//             Chobe game drive Highlights
//           </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8">
//         {gameDriveOptions.map((option, index) => (
//           <GameDriveCard
//             key={index}
//             image={option.image}
//             title={option.title}
//             description={option.description}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GameDriveHighlights


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";

// const gameDriveOptions = [
//   {
//     image:
//       "https://serengetisteppe.com/storage/images/484ca97c-cc29-4ade-9ed4-e4068bc35ebb.jpg",
//     title: "Chobe National Park",
//     description:
//       "Chobe National park is renowned for its vast elephant population, diverse wild life and breathtaking landscape",
//   },
//   {
//     image:
//       "https://capetowndaytours.checkfront.com/media/L468-1--1614785510749032.jpg",
//     title: "Elephants",
//     description:
//       "Chobe National park is renowned for its vast elephant population, diverse wild life",
//   },
//   {
//     image:
//       "https://media.gadventures.com/media-server/cache/92/9b/929b8f99eb4dcfb115ca9d735480814c.jpg",
//     title: "Sound owner in nature",
//     description:
//       "Chobe National park is renowned for its vast elephant population, diverse wild life and breathtaking landscape",
//   },
//   {
//     image: "https://moafrikatours.com/wp-content/uploads/2023/11/d4.jpg",
//     title: "Elephants",
//     description:
//       "Chobe National park is renowned for its vast elephant population, diverse wild life",
//   },
// ];

// const GameDriveCard = ({ image, title, description }) => {
//   return (
//     <div className="flex flex-col">
//       <div className="mb-4">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-auto object-cover rounded-md aspect-[3.5/5] shadow-sm"
//         />
//       </div>
//       <h3 className="text-2xl font-cormorant font-semibold text-gray-800 mb-2 leading-tight">
//         {title}
//       </h3>
//       <p className="text-gray-800 font-quicksand">{description}</p>
//     </div>
//   );
// };

// const GameDriveHighlights = () => {
//   return (
//     <section className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-48 py-16 relative">
//       {/* Heading */}
//       <h2 className="text-6xl mb-16 text-[#636363] capitalize font-cormorant text-center">
//         Chobe Game Drive Highlights
//       </h2>

//       {/* Swiper Carousel */}
//       <div className="relative group">
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={24}
//           slidesPerView={1}
//           navigation={{
//             nextEl: ".custom-next",
//             prevEl: ".custom-prev",
//           }}
//         //   autoplay={{
//         //     delay: 3000,
//         //     disableOnInteraction: false,
//         //     pauseOnMouseEnter: true,
//         //   }}
//         //   pagination={{
//         //     clickable: true,
//         //     dynamicBullets: true,
//         //   }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="pb-10"
//         >
//           {gameDriveOptions.map((option, index) => (
//             <SwiperSlide key={index}>
//               <GameDriveCard
//                 image={option.image}
//                 title={option.title}
//                 description={option.description}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Arrows */}
//         <button className="custom-prev absolute z-10 top-1/2 -translate-y-1/2 left-1 sm:left-2 md:-left-8 lg:-left-14 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
//           <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
//         </button>

//         <button className="custom-next absolute z-10 top-1/2 -translate-y-1/2 right-1 sm:right-2 md:-right-8 lg:-right-14 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
//           <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default GameDriveHighlights;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import elephantg1 from '../../../assets/elephantg1.webp'

const gameDriveOptions = [
  {
    image:
      "https://serengetisteppe.com/storage/images/484ca97c-cc29-4ade-9ed4-e4068bc35ebb.jpg",
    title: "Chobe National Park",
    description:
      "Chobe National park is renowned for its vast elephant population, diverse wildlife and breathtaking landscape.",
  },
  {
    image:
     elephantg1,
      title: "Chobe National Park",
    description:
      "Chobe National park is renowned for its vast elephant population, diverse wildlife.",
  },
  {
    image:
      "https://media.gadventures.com/media-server/cache/92/9b/929b8f99eb4dcfb115ca9d735480814c.jpg",
    title: "Sound Owner in Nature",
    description:
      "Chobe National park is renowned for its vast elephant population, diverse wildlife and breathtaking landscape.",
  },
  {
    image: "https://moafrikatours.com/wp-content/uploads/2023/11/d4.jpg",
    title: "Elephants",
    description:
      "Chobe National park is renowned for its vast elephant population, diverse wildlife.",
  },
];

const GameDriveCard = ({ image, title, description }) => (
  <div className="flex flex-col">
    <div className="mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover rounded-sm aspect-[3.5/5] shadow-sm"
      />
    </div>
    <h3 className="text-2xl font-cormorant font-semibold text-gray-800 mb-2 leading-tight">
      {title}
    </h3>
    <p className="text-gray-800 font-quicksand">{description}</p>
  </div>
);

const GameDriveHighlights = () => {
  return (
    <section className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-16 relative">
      {/* Heading */}
      <h2 className="text-6xl mb-16 text-[#636363] capitalize font-cormorant text-center">
        Chobe Game Drive Highlights
      </h2>

      {/* Swiper Carousel */}
      <div className="relative group">
        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {gameDriveOptions.map((option, index) => (
            <SwiperSlide key={index}>
              <GameDriveCard
                image={option.image}
                title={option.title}
                description={option.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute z-10 top-1/2 -translate-y-1/2 left-1 sm:left-2 md:-left-8 lg:-left-14 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
          <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
        </button>

        <button className="custom-next absolute z-10 top-1/2 -translate-y-1/2 right-1 sm:right-2 md:-right-8 lg:-right-14 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
          <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default GameDriveHighlights;


