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
  descriptions = [],
  apiUrl,
  staticData = [],
}) => {
  const [items, setItems] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!apiUrl) {
      setItems(staticData || []);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(apiUrl);
        setItems(res.data?.thingsToDo || []);
      } catch (err) {
        console.error(err);
        setItems([]);
      }
    };

    fetchData();
  }, [apiUrl, staticData]);

  if (!items || !items.length) return null;

  return (
    <section className="py-16 relative">
      {/* heading same as yours */}

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
              items.length / swiper.params.slidesPerGroup,
            );

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

        {/* Side arrows */}
        <button
          className={`swiper-prev absolute left-9 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 ${
            isBeginning
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          disabled={isBeginning}
        >
          <FaArrowLeftLong className="text-[#a89f82]" size={18} />
        </button>

        <button
          className={`swiper-next absolute right-1/6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 ${
            isEnd
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
          disabled={isEnd}
        >
          <FaArrowRightLong className="text-[#a89f82]" size={18} />
        </button>
      </div>

      {/* Bottom pagination */}
      {items.length > 0 && (
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
            <span className="mx-3 w-16 h-[1px] bg-[#a89f82]"></span>
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
      )}
    </section>
  );
};

export default ThingsToDoSection;
