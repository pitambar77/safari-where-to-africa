

import React, { useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const highlightCards = [
  {
    id: 1,
    image:
      "https://kimgonitanzaniasafaris.weebly.com/uploads/1/4/0/8/140873579/tanzania-national-park-tour-packages_orig.jpg",
    experience: "Marvel at Victoria Falls",
    description:
      "See the epic waterfall of your Insta dreams. Take a stroll along the edge and see this 'the smoke that thunders' in ...",
    included: true,
  },
  {
    id: 2,
    image:
      "https://ik.imgkit.net/3vlqs5axxjf/TW/ik-seo/uploadedImages/Art/Shutterstock_Art/2022/T0207SAFARI_SS_HR/Safari-Portal-adds-calendar-feature-to-itinerary-p.jpg?tr=w-780%2Ch-440%2Cfo-auto",
    experience:
      "Take a morning Game Drive in the Okavango Delta MAKE TRAVEL MATTER™ Experience",
    description:
      "Get up with the sun in search of the amazing wildlife in this garden of Eden.",
    included: true,
  },
  {
    id: 3,
    image:
      "https://africanoverlandtours.com/wp-content/uploads/2013/04/safari-botswana-on-the-road3.jpg",
    experience: "See Deadvlei and Big Daddy Sand Dune",
    description:
      "Explore Sossusvlei, snap shots of Deadvlei and wander around Big Daddy sand dune",
    included: true,
  },
  {
    id: 4,
    image: "https://liquidgiraffe.com/wp-content/uploads/2020/08/Ker-Downey-Shinde-4.jpeg",
    experience: "Visit the penguins at Boulders Beach",
    description: "Get up close and personal with the adorable African penguins.",
    included: true,
  },
  {
    id: 5,
    image:
      "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705703664229-F5COPDMP83G9TP9S533T/image-asset.jpeg?format=1500w",
    experience: "Explore Table Mountain",
    description:
      "Take a cable car ride to the top of Cape Town's iconic Table Mountain for panoramic views.",
    included: false,
  },
];

const TripHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Detect how many cards per view based on screen width
  const getCardsPerView = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  React.useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCards = highlightCards.length;
  const maxIndex = totalCards - cardsPerView;

  const goToPrevious = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const goToNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  // Swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) goToNext();
    else if (distance < -50) goToPrevious();
  };

  return (
    <section className="bg-white py-12 font-cormorant">
      <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Header + Navigation */}
        
          <div className=" text-center">
            <h2 className="text-6xl font-normal text-[#636363]">Trip Highlights</h2>
            <p className="mt-4 text-lg font-quicksand text-gray-600">
              The must-do experiences that you can cross off your bucket list
            </p>
          </div>
          <div className="flex justify-end mb-8 flex-wrap gap-4">
          <div className="flex space-x-2">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="p-3 rounded-full border border-[#aaa086] text-[#aaa086] hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <IoIosArrowBack className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="p-3 rounded-full border border-[#aaa086] text-[#aaa086] hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <IoIosArrowForward className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-8 pb-8 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {highlightCards.map((card) => (
              <div
                key={card.id}
                className="flex-none w-full sm:w-1/2 lg:w-1/3"
              >
                <div className="bg-white rounded-md shadow-sm  overflow-hidden h-full flex flex-col">
                  <div className="relative ">
                    <img
                      src={card.image}
                      alt={card.experience}
                      className="w-full h-60 object-cover"
                    />
                    {card.included && (
                      <span className="absolute top-3 left-3 bg-[#ae9d71] text-white text-xs font-quicksand font-semibold px-2.5 py-1 rounded">
                        Included Experience
                      </span>
                    )}
                  </div>
                  <div className="p-6 mt-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-[#636363] mb-4 leading-tight">
                      {card.experience}
                    </h3>
                    <p className="text-[#636363]  font-quicksand mb-4 flex-grow">
                      {card.description}
                      <button className="text-[#aaa086] hover:underline ml-1">
                        Read more
                      </button>
                    </p>
                    <div className="text-[#636363] text-sm font-semibold mt-auto pt-2 border-t border-gray-100">
                      {card.included ? "INCLUDED" : "OPTIONAL"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-[#ae9d71]"
                  : "bg-[#dbdad6] hover:bg-[#aaa086]"
              } transition-colors`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripHighlights;
