// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const GallerySectionExactWidths = () => {
//   // Static image data for demonstration
//   const images = [
//     {
//       src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/493996049.jpg?k=afc3af261da6fb990dbf4dc2122d9c94703a78ba369cce2550bb2dee828d1037&o=&hp=1", // Replace with your actual image URLs
//       alt: "Elegant hotel lounge area with chandeliers and comfortable seating.",
//       caption: "The Mount Nelson Hotel - Lobby Lounge",
//     },
//     {
//       src: "https://images.oyoroomscdn.com/uploads/hotel_image/100915/medium/5be5c5f1dd15dc9e.jpg", // Replace with your actual image URLs
//       alt: "Luxurious hotel bar and lounge with intricate ceiling details.",
//       caption: "The Mount Nelson Hotel - Bar And Lounge Area",
//     },
//     {
//       src: "https://www.thewarrenlodge.com/wp-content/uploads/2022/05/mad-river-lodge-condo-27-queen-bed-content.jpeg", // Replace with your actual image URLs
//       alt: "Spacious hotel bedroom with a large bed, canopy, and elegant decor.",
//       caption: "The Mount Nelson Hotel - Deluxe Room",
//     },
//     {
//       src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/493996049.jpg?k=afc3af261da6fb990dbf4dc2122d9c94703a78ba369cce2550bb2dee828d1037&o=&hp=1", // Replace with your actual image URLs
//       alt: "Elegant hotel lounge area with chandeliers and comfortable seating.",
//       caption: "The Mount Nelson Hotel - Lobby Lounge",
//     },
//     {
//       src: "https://images.oyoroomscdn.com/uploads/hotel_image/100915/medium/5be5c5f1dd15dc9e.jpg", // Replace with your actual image URLs
//       alt: "Luxurious hotel bar and lounge with intricate ceiling details.",
//       caption: "The Mount Nelson Hotel - Bar And Lounge Area",
//     },
//     {
//       src: "https://www.thewarrenlodge.com/wp-content/uploads/2022/05/mad-river-lodge-condo-27-queen-bed-content.jpeg", // Replace with your actual image URLs
//       alt: "Spacious hotel bedroom with a large bed, canopy, and elegant decor.",
//       caption: "The Mount Nelson Hotel - Deluxe Room",
//     },
//     // Add more images here if you want a longer carousel
//   ];
//   const [currentIndex, setCurrentIndex] = useState(1);

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Helper to get image at a specific offset from current index, handling wraps
//   const getImageAtIndex = (offset) => {
//     let index = currentIndex + offset;
//     if (index < 0) {
//       index = images.length + index;
//     } else if (index >= images.length) {
//       index = index - images.length;
//     }
//     return images[index];
//   };

//   return (
//     <div className=" flex flex-col items-center bg-white py-16 font-serif">
//       {/* GALLERY Header */}
//       <div className=" font-cormorant text-center px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
//         <h2 className="text-3xl text-[#a89f82] uppercase"> Gallery</h2>

//         <h5 className=" text-6xl  mb-8 mt-4 text-[#636363] capitalize font-normal">Picture yourself here</h5>
//         <div className=" mb-10">
//           <p className=" font-quicksand mx-auto max-w-xl text-center text-gray-600 mb-20 px-4 leading-relaxed">
            // Take a journey through The Mount Nelson Hotel to get a flavour of
            // its unique style and character, designed to enchant every guest.
//           </p>
//         </div>
//       </div>
//       {/* Image Gallery Container */}
//       <div className="relative overflow-hidden ">
//         {/* The actual image row. Uses flex. Adjust gap between images if needed */}
//         <div className="flex justify-center items-center gap-x-6">
//           {" "}
//           {/* Using gap-x-4 for spacing */}
//           {/* Left Image (Narrower) */}
//           <div className="flex-shrink-0 w-1/2">
//             {" "}
//             {/* Adjusted width for side images */}
//             <img
//               src={getImageAtIndex(-1).src}
//               alt={getImageAtIndex(-1).alt}
//               className="w-full h-[550px]  object-cover"
//             />
//           </div>
//           {/* Center (Main) Image (Wider) */}
//           <div className="flex-shrink-0 w-1/2 ">
//             {" "}
//             {/* Adjusted width for middle image */}
//             <img
//               src={images[currentIndex].src}
//               alt={images[currentIndex].alt}
//               className="w-full h-[550px]  object-cover"
//             />
//           </div>
//           {/* Right Image (Narrower) */}
//           <div className="flex-shrink-0 w-1/2">
//             {" "}
//             {/* Adjusted width for side images */}
//             <img
//               src={getImageAtIndex(1).src}
//               alt={getImageAtIndex(1).alt}
//               className="w-full h-[550px] object-cover"
//             />
//           </div>
//         </div>

//         {/* Navigation Arrows */}
//         <div
//           onClick={goToPrevious}
//           className="absolute top-1/2 left-1/6 -translate-y-1/2 translate-x-1/2 bg-[#a89f82] p-3 rounded-full shadow-md hover:bg-[#7a7870] transition-colors"
//           aria-label="Previous image"
//         >
//           <ChevronLeft className="w-6 h-6 text-white" />
//         </div>

//         <div
//           onClick={goToNext}
//           className="absolute top-1/2 cursor-pointer right-1/6 -translate-y-1/2 -translate-x-1/2 bg-[#a89f82] p-3 rounded-full shadow-md hover:bg-[#7a7870] transition-colors"
//           aria-label="Next image"
//         >
//           <ChevronRight className="w-6 h-6 text-white" />
//         </div>
//       </div>

//       {/* Image Caption - Uses the caption of the current main image */}
//       <div className="text-sm text-gray-700 mt-8 ">
//         <p>{images[currentIndex].caption}</p>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center space-x-2 mt-4">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             // Increased size from w-2 h-2 to w-3 h-3
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? "bg-[#a89f82]" : "bg-gray-300"
//             } hover:bg-[#a89f82] transition-colors`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GallerySectionExactWidths;


import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = ({
  title = "Gallery",
  subtitle = "Picture yourself here",
  description = "",
  images = [], // 👈 backend gallery array
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  if (!images.length) {
    return (
      <div className="py-20 text-center text-gray-500">
        No images available for this gallery.
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getImageAtIndex = (offset) => {
    let index = currentIndex + offset;
    if (index < 0) index = images.length + index;
    if (index >= images.length) index = index - images.length;
    return images[index];
  };

  return (
    <div className="flex flex-col items-center bg-white py-16 font-serif">
      {/* GALLERY Header (UNCHANGED) */}
      <div className="font-cormorant text-center px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <h2 className="text-3xl text-[#a89f82] uppercase">{title}</h2>

        <h5 className="text-6xl mb-8 mt-4 text-[#636363] capitalize font-normal">
          {subtitle}
        </h5>

        <div className="mb-10">
          <p className="font-quicksand mx-auto max-w-xl text-center text-gray-600 mb-20 px-4 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Image Gallery Container (UNCHANGED) */}
      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center gap-x-6">
          {/* Left Image */}
          <div className="flex-shrink-0 w-1/2">
            <img
              src={getImageAtIndex(-1).galleryImage}
              alt={getImageAtIndex(-1).galleryName}
              className="w-full h-[550px] object-cover"
            />
          </div>

          {/* Center Image */}
          <div className="flex-shrink-0 w-1/2">
            <img
              src={images[currentIndex].galleryImage}
              alt={images[currentIndex].galleryName}
              className="w-full h-[550px] object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 w-1/2">
            <img
              src={getImageAtIndex(1).galleryImage}
              alt={getImageAtIndex(1).galleryName}
              className="w-full h-[550px] object-cover"
            />
          </div>
        </div>

        {/* Navigation Arrows (UNCHANGED POSITION) */}
        <div
          onClick={goToPrevious}
          className="absolute top-1/2 left-1/6 -translate-y-1/2 translate-x-1/2 bg-[#a89f82] p-3 rounded-full shadow-md hover:bg-[#7a7870] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </div>

        <div
          onClick={goToNext}
          className="absolute top-1/2 right-1/6 -translate-y-1/2 -translate-x-1/2 bg-[#a89f82] p-3 rounded-full shadow-md hover:bg-[#7a7870] transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Caption (UNCHANGED) */}
      <div className="text-sm text-gray-700 mt-8">
        <p>{images[currentIndex].galleryName}</p>
      </div>

      {/* Pagination Dots (UNCHANGED) */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#a89f82]" : "bg-gray-300"
            } hover:bg-[#a89f82] transition-colors cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;



// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const GallerySection = ({
//   title = "Gallery",
//   subtitle = "Picture yourself here",
//   description = "Take a journey through The Mount Nelson Hotel to get a flavour of its unique style and character, designed to enchant every guest.",
//   images = [],
//   sectionBg = "bg-white",
//   textColor = "#636363",
//   accentColor = "#a89f82",
//   imageHeight = "h-[550px]",
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const getImageAtIndex = (offset) => {
//     let index = currentIndex + offset;
//     if (index < 0) index = images.length + index;
//     if (index >= images.length) index = index - images.length;
//     return images[index];
//   };

//   if (!images.length) {
//     return (
//       <div className="py-20 text-center text-gray-500">
//         No images available for this gallery.
//       </div>
//     );
//   }

//   return (
//     <div className={`flex flex-col items-center ${sectionBg} py-16 font-cormorant`}>
//       {/* Header Section */}
//       <div className="text-center px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
//         <h2 className={`text-3xl uppercase`} style={{ color: accentColor }}>
//           {title}
//         </h2>
//         <h5
//           className={`text-6xl mb-8 mt-4 capitalize font-normal`}
//           style={{ color: textColor }}
//         >
//           {subtitle}
//         </h5>
//         <p className="font-quicksand mx-auto max-w-xl text-center text-gray-600 mb-20 px-4 leading-relaxed">
//           {description}
//         </p>
//       </div>

//       {/* Image Gallery */}
//       <div className="relative overflow-hidden">
//         <div className="flex justify-center items-center gap-x-6">
//           {/* Left Image */}
//           <div className="flex-shrink-0 w-1/2">
//             <img
//               src={getImageAtIndex(-1).url || getImageAtIndex(-1).image}
//               alt={getImageAtIndex(-1).name}
//               className={`w-full ${imageHeight} object-cover`}
//             />
//           </div>

//           {/* Center Image */}
//           <div className="flex-shrink-0 w-1/2">
//             <img
//               src={images[currentIndex].url || images[currentIndex].image }
//               alt={images[currentIndex].name}
//               className={`w-full ${imageHeight} object-cover`}
//             />
//           </div>

//           {/* Right Image */}
//           <div className="flex-shrink-0 w-1/2">
//             <img
//               src={getImageAtIndex(1).url || getImageAtIndex(1).image}
//               alt={getImageAtIndex(1).name}
//               className={`w-full ${imageHeight} object-cover`}
//             />
//           </div>
//         </div>

//         {/* Navigation */}
//         <button
//           onClick={goToPrevious}
//           className="absolute top-1/2 left-[5%] -translate-y-1/2 bg-[#a89f82] p-3 rounded-full shadow-md hover:bg-[#7a7870] transition-colors"
//           aria-label="Previous image"
//         >
//           <ChevronLeft className="w-6 h-6 text-white" />
//         </button>

//         <button
//           onClick={goToNext}
//           className="absolute top-1/2 right-[5%] -translate-y-1/2 bg-[#a89f82] p-3 rounded-full shadow-md hover:bg-[#7a7870] transition-colors"
//           aria-label="Next image"
//         >
//           <ChevronRight className="w-6 h-6 text-white" />
//         </button>
//       </div>

//       {/* Caption */}
//       <div className="text-sm text-gray-700 mt-8 text-center">
//         <p>{images[currentIndex].caption}</p>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center space-x-2 mt-4">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full cursor-pointer ${
//               index === currentIndex ? "bg-[#a89f82]" : "bg-gray-300"
//             } hover:bg-[#a89f82] transition-colors`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GallerySection;


// Recent added


