
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowLeftLong,FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

const guestFavorites = [
  {
    image:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/leopard-safari-south-africa.jpg",
    title: "South Africa: An Elegant Adventure",
  },
  {
    image:
      "https://safarifrank.com/wp-content/uploads/2019/11/lower-zambezi-zambia-gesa-frank-safari-tusk-and-mane-1920x1080.jpg",
    title: "Botswana, South Africa & Zambia",
  },
  {
    image:
      "https://rajgirsafari.bihar.gov.in/uploads/2025/02/08/zoo%20safari%20lion%20(2).jpg",
    title: "Serengeti & Zanzibar Explorer",
  },
  {
    image:
      "https://www.sierraclub.org/sites/default/files/styles/sierra_full_page_width/public/sierra/articles/big/SIERRA-iStock-687031310-WB.jpg.webp?itok=yfxjyXCZ",
    title: "Morocco: Imperial Cities & Sahara",
  },
  {
    image:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/leopard-safari-south-africa.jpg",
    title: "South Africa: An Elegant Adventure",
  },
  {
    image:
      "https://safarifrank.com/wp-content/uploads/2019/11/lower-zambezi-zambia-gesa-frank-safari-tusk-and-mane-1920x1080.jpg",
    title: "Botswana, South Africa & Zambia",
  },
  {
    image:
      "https://rajgirsafari.bihar.gov.in/uploads/2025/02/08/zoo%20safari%20lion%20(2).jpg",
    title: "Serengeti & Zanzibar Explorer",
  },
  {
    image:
      "https://www.sierraclub.org/sites/default/files/styles/sierra_full_page_width/public/sierra/articles/big/SIERRA-iStock-687031310-WB.jpg.webp?itok=yfxjyXCZ",
    title: "Morocco: Imperial Cities & Sahara",
  },
];

const ExperienceCarousel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(guestFavorites.length / 2)
  );
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="bg-[#faf6ef] py-16 px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 relative font-serif">
      {/* --- Quote Section --- */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-3xl font-cormorant tracking-[2px] uppercase text-[#a89f82] mb-4">
          Guest Favorites in South Africa
        </p>
        <p className="italic font-quicksand text-[#636363] text-lg md:text-xl leading-relaxed mb-6">
          "I just returned from the safari to South Africa and I had to let you
          know what an amazing trip it was. The trip was well planned and very
          special... every moment was filled with excitement. Our Tauck Director
          made this experience a joy for all of us. The animals we saw and the
          places we visited were amazing. Thank you for making this so special
          for me."
        </p>
       
      </div>

    
      <div className="relative  ">
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={24}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
          }}
          onInit={(swiper) => {
            const total = Math.ceil(
              guestFavorites.length / swiper.params.slidesPerGroup
            );
            setTotalPages(total);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            const group = swiper.params.slidesPerGroup || 2;
            const page = Math.ceil((swiper.activeIndex + 1) / group);
            const total = Math.ceil(guestFavorites.length / group);
            setCurrentPage(page);
            setTotalPages(total);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="pb-10"
        >
          {guestFavorites.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden rounded-md shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[340px] xl:h-[400px] 2xl:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-lg md:text-xl font-normal font-cormorant leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Side Navigation Buttons --- */}
        <button
          className={`swiper-prev absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full transition z-10 ${
            isBeginning
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          disabled={isBeginning}
        >
          <IoIosArrowBack className="text-[#a89f82]" size={24} />
        </button>

        <button
          className={`swiper-next absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full transition z-10 ${
            isEnd
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          disabled={isEnd}
        >
          <IoIosArrowForward className="text-[#a89f82]" size={24} />
        </button>
      </div>

      {/* --- Bottom Pagination + Buttons --- */}
      <div className="flex items-center space-x-4 mt-12 text-[#a89f82] justify-center font-cormorant">
        <button
          className={`swiper-prev rounded-full   transition ${
            isBeginning
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          disabled={isBeginning}
        >
          <FaArrowLeftLong className=" w-8 h-5 "  />
        </button>

        <div className="text-lg font-quicksand font-light">
          {String(currentPage).padStart(2, "0")}{" "}
          <span className="text-gray-400 ">--</span>{" "}
          {String(totalPages).padStart(2, "0")}
        </div>

        <button
          className={`swiper-next rounded-full  transition ${
            isEnd
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          disabled={isEnd}
        >
          <FaArrowRightLong className="text-[#a89f82] w-8 h-5 "  />
        </button>
      </div>
    </section>
  );
};

export default ExperienceCarousel;


