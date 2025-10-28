import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import safari2 from "../assets/safari2.webp";
import safari3 from "../assets/safari3.webp";
import safari4 from "../assets/safari4.webp";
import safari5 from "../assets/safari5.webp";
import SafariPackBox from '../pages/homePage/safariPackBox';

const safariData = [
  { id: 1, image: safari3, title: "Big Five Safaris", link: "#" },
  { id: 2, image: safari2, title: "Serengeti Adventure", link: "#" },
  { id: 3, image: safari3, title: "Wildlife Safari", link: "#" },
  { id: 4, image: safari4, title: "Safari Honeymoon", link: "#" },
  { id: 5, image: safari5, title: "Photography Safari", link: "#" },
  { id: 1, image: safari2, title: "Big Five Safaris", link: "#" },
  { id: 2, image: safari2, title: "Serengeti Adventure", link: "#" },
  { id: 3, image: safari3, title: "Wildlife Safari", link: "#" },
  { id: 4, image: safari4, title: "Safari Honeymoon", link: "#" },
  { id: 5, image: safari5, title: "Photography Safari", link: "#" },
];

const RelatedCard = () => {
  return (
    <div className=' py-10'>
         <div className="font-cormorant text-center">
          <h2 className="text-3xl text-[#a89f82] uppercase"> Your Journeys</h2>

          <h5 className="text-6xl  mb-10 mt-4 capitalize text-[#636363] font-normal">
            Check in to your other property
          </h5>
        </div>
 <div className="home-africa-pack">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}  
          loop={true}  
          pagination={{ type: "fraction" }} 
          slidesOffsetBefore={0}   
          slidesOffsetAfter={200}  
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          className="packages-box-slider"
        >
          {safariData.map((safari) => (
            <SwiperSlide key={safari.id}>
              <div className="safari-card-iteam">
                <SafariPackBox
                  image={safari.image}
                  title={safari.title}
                  link={safari.link}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}

export default RelatedCard