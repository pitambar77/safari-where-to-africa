import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import ThingsToDoCard from "./ThingsToDoCard";

const ThingsToDoSection = ({
  title,
  subtitle,
  description1,
  description2,
  apiUrl,
  staticData = [],
}) => {
  const [items, setItems] = useState(staticData);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Fetch from backend if API provided
  useEffect(() => {
    if (!apiUrl) return;
    const fetchData = async () => {
      try {
        const res = await axios.get(apiUrl);
        setItems(res.data?.thingsToDo || []); // assuming backend returns { thingsToDo: [ { image, title } ] }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [apiUrl]);

  return (
    <section className="py-16 relative">
      {/* --- Heading Section --- */}
      <div className="text-center max-w-6xl mx-auto mb-14 font-cormorant">
        <p className="text-2xl md:text-3xl font-normal text-[#a89f82] uppercase mb-6">
          {subtitle || "Things to Do"}
        </p>
        <h2 className="text-6xl mb-10 text-[#636363] capitalize font-normal">
          {title}
        </h2>
        <p className="font-quicksand mb-5">{description1}</p>
        <p className="font-quicksand">{description2}</p>
      </div>

      {/* --- Swiper Section --- */}
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
            const total = Math.ceil(items.length / swiper.params.slidesPerGroup);
            setTotalPages(total);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            const group = swiper.params.slidesPerGroup || 2;
            const page = Math.ceil((swiper.activeIndex + 1) / group);
            const total = Math.ceil(items.length / group);
            setCurrentPage(page);
            setTotalPages(total);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="pb-10"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <ThingsToDoCard image={item.image} title={item.title} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Left/Right Buttons (side) --- */}
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

      {/* --- Bottom Navigation --- */}
      <div className="flex items-center space-x-4 mt-12 text-[#a89f82] justify-center font-cormorant">
        <button
          className={`swiper-prev rounded-full transition ${
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
          <span className="text-gray-400">
            <div className="w-16 flex-1 h-[1px] bg-[#a89f82] mx-3"></div>
          </span>
          {String(totalPages).padStart(2, "0")}
        </div>

        <button
          className={`swiper-next rounded-full transition ${
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

export default ThingsToDoSection;
