import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GallerySectionExactWidths = () => {
  // Static image data for demonstration
  const images = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/493996049.jpg?k=afc3af261da6fb990dbf4dc2122d9c94703a78ba369cce2550bb2dee828d1037&o=&hp=1", // Replace with your actual image URLs
      alt: "Elegant hotel lounge area with chandeliers and comfortable seating.",
      caption: "The Mount Nelson Hotel - Lobby Lounge",
    },
    {
      src: "https://images.oyoroomscdn.com/uploads/hotel_image/100915/medium/5be5c5f1dd15dc9e.jpg", // Replace with your actual image URLs
      alt: "Luxurious hotel bar and lounge with intricate ceiling details.",
      caption: "The Mount Nelson Hotel - Bar And Lounge Area",
    },
    {
      src: "https://www.thewarrenlodge.com/wp-content/uploads/2022/05/mad-river-lodge-condo-27-queen-bed-content.jpeg", // Replace with your actual image URLs
      alt: "Spacious hotel bedroom with a large bed, canopy, and elegant decor.",
      caption: "The Mount Nelson Hotel - Deluxe Room",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/493996049.jpg?k=afc3af261da6fb990dbf4dc2122d9c94703a78ba369cce2550bb2dee828d1037&o=&hp=1", // Replace with your actual image URLs
      alt: "Elegant hotel lounge area with chandeliers and comfortable seating.",
      caption: "The Mount Nelson Hotel - Lobby Lounge",
    },
    {
      src: "https://images.oyoroomscdn.com/uploads/hotel_image/100915/medium/5be5c5f1dd15dc9e.jpg", // Replace with your actual image URLs
      alt: "Luxurious hotel bar and lounge with intricate ceiling details.",
      caption: "The Mount Nelson Hotel - Bar And Lounge Area",
    },
    {
      src: "https://www.thewarrenlodge.com/wp-content/uploads/2022/05/mad-river-lodge-condo-27-queen-bed-content.jpeg", // Replace with your actual image URLs
      alt: "Spacious hotel bedroom with a large bed, canopy, and elegant decor.",
      caption: "The Mount Nelson Hotel - Deluxe Room",
    },
    // Add more images here if you want a longer carousel
  ];
  const [currentIndex, setCurrentIndex] = useState(1);

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

  // Helper to get image at a specific offset from current index, handling wraps
  const getImageAtIndex = (offset) => {
    let index = currentIndex + offset;
    if (index < 0) {
      index = images.length + index;
    } else if (index >= images.length) {
      index = index - images.length;
    }
    return images[index];
  };

  return (
    <div className=" max-w-[1320px] mx-auto px-4 flex flex-col items-center bg-white py-16 font-serif">
      {/* GALLERY Header */}
      <div className=" font-cormorant text-center">
        <h2 className="text-3xl text-[#a89f82] uppercase"> Gallery</h2>

        <h5 className=" text-6xl  mb-8 mt-4 text-[#636363] capitalize font-normal">Picture yourself here</h5>
        <div className=" mb-10">
          <p className=" font-quicksand mx-auto max-w-xl text-center text-gray-600 mb-20 px-4 leading-relaxed">
            Take a journey through The Mount Nelson Hotel to get a flavour of
            its unique style and character, designed to enchant every guest.
          </p>
        </div>
      </div>
      {/* Image Gallery Container */}
      <div className="relative overflow-hidden">
        {/* The actual image row. Uses flex. Adjust gap between images if needed */}
        <div className="flex justify-center items-center gap-x-4">
          {" "}
          {/* Using gap-x-4 for spacing */}
          {/* Left Image (Narrower) */}
          <div className="flex-shrink-0 w-1/2">
            {" "}
            {/* Adjusted width for side images */}
            <img
              src={getImageAtIndex(-1).src}
              alt={getImageAtIndex(-1).alt}
              className="w-full h-[450px]  object-cover"
            />
          </div>
          {/* Center (Main) Image (Wider) */}
          <div className="flex-shrink-0 w-1/2">
            {" "}
            {/* Adjusted width for middle image */}
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-[450px]  object-cover"
            />
          </div>
          {/* Right Image (Narrower) */}
          <div className="flex-shrink-0 w-1/2">
            {" "}
            {/* Adjusted width for side images */}
            <img
              src={getImageAtIndex(1).src}
              alt={getImageAtIndex(1).alt}
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2 bg-[#a89f82] p-3 rounded-full shadow-md hover:bg-[#7a7870] transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </div>

        <div
          onClick={goToNext}
          className="absolute top-1/2 cursor-pointer right-0 -translate-y-1/2 -translate-x-1/2 bg-[#a89f82] p-3 rounded-full shadow-md hover:bg-[#7a7870] transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Image Caption - Uses the caption of the current main image */}
      <div className="text-sm text-gray-700 mt-8 ">
        <p>{images[currentIndex].caption}</p>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            // Increased size from w-2 h-2 to w-3 h-3
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#a89f82]" : "bg-gray-300"
            } hover:bg-[#a89f82] transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySectionExactWidths;
