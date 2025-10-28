// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'; // Using icons for navigation

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
//   // Add more journeys to see the carousel in action
// ];

// const JourneysCarousel = () => {
//   const [currentPage, setCurrentPage] = useState(0); // 0-indexed page number
//   const cardsPerPage = 2;
//   const totalPages = Math.ceil(journeys.length / cardsPerPage);

//   const goToNextPage = () => {
//     setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
//   };

//   const goToPreviousPage = () => {
//     setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
//   };

//   // Calculate the starting index for the current page
//   const startIndex = currentPage * cardsPerPage;
//   // Get the cards for the current page
//   const currentCards = journeys.slice(startIndex, startIndex + cardsPerPage);

//   return (
//     <div className="flex flex-col items-center bg-white py-16 font-serif">
//       {/* RELATED JOURNEYS Subtitle */}
//       <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
//         Related Journeys
//       </p>

//       {/* Main Title */}
//       <h2 className="text-5xl text-gray-800 mb-12 font-light">
//         Other Journeys You May Enjoy
//       </h2>

//       {/* Carousel Container */}
//       <div className="relative w-full max-w-7xl px-4 md:px-8">
//         <div className="flex overflow-hidden">
//           {/* Main Card Display Area */}
//           <div className="flex justify-center w-full gap-x-8">
//             {currentCards.map((journey) => (
//               <div 
//                 key={journey.id} 
//                 className="relative flex-shrink-0 w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg"
//               >
//                 <img
//                   src={journey.image}
//                   alt={journey.title}
//                   className="w-full h-96 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 p-8 text-white">
//                   <h3 className="text-3xl font-light mb-2">{journey.title}</h3>
//                   <p className="text-sm font-light uppercase tracking-wide mb-1">
//                     {journey.days} | FROM ${journey.price}
//                   </p>
//                   <p className="text-sm uppercase tracking-wide opacity-80">
//                     {journey.type}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Carousel Navigation Arrows */}
//         <button
//           onClick={goToPreviousPage}
//           className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden md:block"
//           aria-label="Previous Journey"
//         >
//           <ChevronLeft className="w-6 h-6 text-gray-700" />
//         </button>

//         <button
//           onClick={goToNextPage}
//           className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-1/4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden md:block"
//           aria-label="Next Journey"
//         >
//           <ChevronRight className="w-6 h-6 text-gray-700" />
//         </button>
//       </div>

//       {/* Bottom Pagination */}
//       <div className="flex items-center space-x-4 mt-12 text-gray-700">
//         <button 
//           onClick={goToPreviousPage} 
//           className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           aria-label="Previous Page"
//         >
//           <ArrowLeft className="w-5 h-5" />
//         </button>
//         <span className="text-lg font-light">
//           {`0${currentPage + 1}`} <span className="text-gray-400">—</span> {`0${totalPages}`}
//         </span>
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



import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'; 

// --- Data for the Journey Cards ---
const journeys = [
  {
    id: 1,
    image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/leopard-safari-south-africa.jpg',
    title: 'South Africa: An Elegant Adventure',
    days: '12 DAYS',
    price: '$11,990',
    type: 'LAND JOURNEY',
  },
  {
    id: 2,
    image: 'https://safarifrank.com/wp-content/uploads/2019/11/lower-zambezi-zambia-gesa-frank-safari-tusk-and-mane-1920x1080.jpg',
    title: 'Botswana, South Africa & Zambia',
    days: '12 DAYS',
    price: '$15,990',
    type: 'LAND JOURNEY',
  },
  {
    id: 3,
    image: 'https://rajgirsafari.bihar.gov.in/uploads/2025/02/08/zoo%20safari%20lion%20(2).jpg',
    title: 'Serengeti & Zanzibar Explorer',
    days: '10 DAYS',
    price: '$9,500',
    type: 'SAFARI ADVENTURE',
  },
  {
    id: 4,
    image: 'https://www.sierraclub.org/sites/default/files/styles/sierra_full_page_width/public/sierra/articles/big/SIERRA-iStock-687031310-WB.jpg.webp?itok=yfxjyXCZ',
    title: 'Morocco: Imperial Cities & Sahara',
    days: '9 DAYS',
    price: '$8,200',
    type: 'CULTURAL TOUR',
  },
  {
    id: 5,
    image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/leopard-safari-south-africa.jpg',
    title: 'South Africa: An Elegant Adventure',
    days: '12 DAYS',
    price: '$11,990',
    type: 'LAND JOURNEY',
  },
  {
    id: 6,
    image: 'https://safarifrank.com/wp-content/uploads/2019/11/lower-zambezi-zambia-gesa-frank-safari-tusk-and-mane-1920x1080.jpg',
    title: 'Botswana, South Africa & Zambia',
    days: '12 DAYS',
    price: '$15,990',
    type: 'LAND JOURNEY',
  },
  {
    id: 7,
    image: 'https://rajgirsafari.bihar.gov.in/uploads/2025/02/08/zoo%20safari%20lion%20(2).jpg',
    title: 'Serengeti & Zanzibar Explorer',
    days: '10 DAYS',
    price: '$9,500',
    type: 'SAFARI ADVENTURE',
  },
  {
    id: 8,
    image: 'https://www.sierraclub.org/sites/default/files/styles/sierra_full_page_width/public/sierra/articles/big/SIERRA-iStock-687031310-WB.jpg.webp?itok=yfxjyXCZ',
    title: 'Morocco: Imperial Cities & Sahara',
    days: '9 DAYS',
    price: '$8,200',
    type: 'CULTURAL TOUR',
  },
];

const JourneysCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0); 
  const cardsPerView = 2; // Fixed number of cards to show
  const totalCards = journeys.length;
  const totalPages = Math.ceil(totalCards / cardsPerView);

  // The base percentage for one card in a two-card layout (50%)
  const baseCardPercentage = 50 / cardsPerView; 

  const translationValue = currentPage * baseCardPercentage;

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <div className="flex flex-col items-center bg-white py-16 ">
  
     <div className="font-cormorant text-center">
          <h2 className="text-3xl text-[#a89f82] uppercase"> Related Journeys</h2>

          <h5 className="text-6xl  mb-8 mt-4 text-[#636363] capitalize font-normal">
            Other Journeys You May Enjoy
          </h5>
        </div>

      {/* Carousel Container */}
      <div className="relative w-full px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28  mt-5">
        
        {/* Viewport container with overflow hidden */}
        <div className="overflow-hidden">
          
          {/* Main Card Display Area - This entire track slides */}
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-x-8"
            // Set the width to be the total number of cards times the percentage required per card
            style={{ 
                width: `${totalCards * baseCardPercentage}%`, 
                transform: `translateX(-${translationValue}%)`, 
            }}
          >
            {journeys.map((journey) => (
           
              <div 
                key={journey.id} 
                className="relative flex-shrink-0 rounded-sm overflow-hidden "
                // For two items (50% each) with gap-x-8, the card width needs to be slightly less than 50%
                style={{ width: `calc(${baseCardPercentage}% - 1rem)` }} 
              >
                <img
                  src={journey.image}
                  alt={journey.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl font-cormorant font-light mb-2">{journey.title}</h3>
                  <p className="text-sm font-quicksand font-light uppercase tracking-wide mb-1">
                    {journey.days} | FROM ${journey.price}
                  </p>
                  <p className="text-sm font-quicksand uppercase tracking-wide opacity-80">
                    {journey.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        
        <div
          onClick={goToPreviousPage}
          className="absolute top-1/2 left-14 -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/4 bg-[#a89f82] p-3 rounded-full shadow-md hover:bg-[#f25922] cursor-pointer transition-colors hidden md:block"
          aria-label="Previous Journey"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </div>

        <div
          onClick={goToNextPage}
          className="absolute top-1/2 right-14 -translate-y-1/2 translate-x-1/2 md:translate-x-1/4 bg-[#a89f82] p-3 rounded-full shadow-md hover:bg-[#f25922] cursor-pointer transition-colors hidden md:block"
          aria-label="Next Journey"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Bottom Pagination */}
      <div className="flex items-center space-x-4 mt-12 text-[#a89f82]">
        <button 
          onClick={goToPreviousPage} 
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Previous Page"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-lg font-quicksand font-light">
          {`${(currentPage + 1).toString().padStart(2, '0')}`} <span className="text-gray-400">—</span> {`${totalPages.toString().padStart(2, '0')}`}
        </span>
        <button 
          onClick={goToNextPage} 
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Next Page"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default JourneysCarousel;