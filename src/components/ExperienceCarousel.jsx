import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

const ExperienceCarousel = ({
  title = "Guest Favorites in South Africa",
  description = `"I just returned from the safari to South Africa and I had to let you
  know what an amazing trip it was. The trip was well planned and very
  special... every moment was filled with excitement. Our Tauck Director
  made this experience a joy for all of us. The animals we saw and the
  places we visited were amazing. Thank you for making this so special
  for me."`,
  author = "Carol K",
  data = [],
  slidesPerView = 2.5,
  slidesPerGroup = 2,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(data.length / slidesPerGroup));
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="py-16 pl-4 md:pl-10 lg:pl-16 xl:pl-20 2xl:pl-28 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 before:absolute before:top-0 before:left-0 before:w-full before:h-2/3 before:bg-[#faf6ef] before:z-0"></div>

      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-14 relative">
        <p className="text-3xl font-cormorant tracking-[2px] uppercase text-[#a89f82] mb-4">
          {title}
        </p>
        {description && (
          <p className="italic font-quicksand text-[#636363] text-lg md:text-xl leading-relaxed mb-6">
            {description}
          </p>
        )}
        {author && (
          <p className="font-quicksand text-[#636363] text-lg md:text-xl leading-relaxed mb-4">
            {author}
          </p>
        )}
      </div>

      {/* Carousel Section */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          slidesPerGroup={slidesPerGroup}
          spaceBetween={24}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView, slidesPerGroup },
          }}
          onInit={(swiper) => {
            const total = Math.ceil(data.length / swiper.params.slidesPerGroup);
            setTotalPages(total);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            const group = swiper.params.slidesPerGroup || slidesPerGroup;
            const page = Math.ceil((swiper.activeIndex + 1) / group);
            const total = Math.ceil(data.length / group);
            setCurrentPage(page);
            setTotalPages(total);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="pb-10"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden rounded-sm shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-lg md:text-xl font-normal capitalize font-cormorant leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Side Navigation Buttons */}
        <button
          className={`swiper-prev absolute -left-10 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full transition z-10 ${
            isBeginning ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
          disabled={isBeginning}
        >
          <FaArrowLeftLong className="text-[#a89f82]" size={18} />
        </button>

        <button
          className={`swiper-next absolute right-1/6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full transition z-10 ${
            isEnd ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
          disabled={isEnd}
        >
          <FaArrowRightLong className="text-[#a89f82]" size={18} />
        </button>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-4 mt-12 text-[#a89f82] justify-center font-cormorant">
        <button
          className={`swiper-prev rounded-full transition ${
            isBeginning ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
          disabled={isBeginning}
        >
          <FaArrowLeftLong className="w-8 h-5" />
        </button>

        <div className="text-lg font-quicksand font-light flex items-center">
          {String(currentPage).padStart(2, "0")}
          <span className="text-gray-400">
            <div className="w-16 flex-1 h-[1px] bg-[#a89f82] mx-3"></div>
          </span>
          {String(totalPages).padStart(2, "0")}
        </div>

        <button
          className={`swiper-next rounded-full transition ${
            isEnd ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
          disabled={isEnd}
        >
          <FaArrowRightLong className="text-[#a89f82] w-8 h-5" />
        </button>
      </div>
    </section>
  );
};

export default ExperienceCarousel;
