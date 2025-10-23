
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Partner.css";
import part1 from "../assets/part1.webp"; 
import part2 from "../assets/part2.webp"; 
import part3 from "../assets/part3.webp"; 
import part4 from "../assets/part4.webp"; 
import part5 from "../assets/part5.webp"; 
import part6 from "../assets/part6.webp";

const Partner = () => {
  const partners = [part1, part2, part3, part4, part5, part6];

  return (
    <section className="partner-sec">
      <div className=" max-w-[1320px] mx-auto px-4">

        <div className="font-cormorant text-center">
           <h2 className="text-3xl text-[#a89f82] uppercase">
             Our Partners
           </h2>
           <h5 className="text-6xl max-w-4xl mx-auto  mb-8 mt-4 text-[#636363] font-normal">
             Trusted Partners Powering Our Global Journey
           </h5>
           <p className=" font-quicksand max-w-xl mx-auto mb-10 ">
            Our Partners In Africa Will Make Your Dream Trip, A Trip To Never Forget
           </p>
         </div>


        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={5}      
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="partner_iteam">
                <img src={partner} alt={`Partner ${index + 1}`} className="w-100" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partner;
