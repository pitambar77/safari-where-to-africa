import "./Homepack.css";
import SafariPackBox from "./safariPackBox";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import safari2 from "../../assets/safari2.webp";
import safari3 from "../../assets/safari3.webp";
import safari4 from "../../assets/safari4.webp";
import safari5 from "../../assets/safari5.webp";
import Overview from "../../components/Overview";

const safariData = [
  { id: 1, image: safari3, title: "Big Five Safaris", link: "#" },
  { id: 2, image: safari2, title: "Serengeti Adventure", link: "#" },
  { id: 3, image: safari3, title: "Wildlife Safari", link: "#" },
  { id: 4, image: safari4, title: "Safari Honeymoon", link: "#" },
  { id: 5, image: safari5, title: "Photography Safari", link: "#" },
  { id: 1, image: safari2, title: "Big Five Safaris", link: "#" },
  { id: 2, image: safari4, title: "Serengeti Adventure", link: "#" },
  { id: 3, image: safari3, title: "Wildlife Safari", link: "#" },
  { id: 4, image: safari4, title: "Safari Honeymoon", link: "#" },
  { id: 5, image: safari5, title: "Photography Safari", link: "#" },
];

const Homepack = () => {
  return (
    <section className="bg-[#fbf6ea] pb-16">
      <Overview
           title={"Welcome To Africa"}
           subtitle={"African landscapes parading with the circle of life promise magical moments unlike any you have imagined before. You'll find them..."}
           description={"... while tasting wines carefully cultivated and expertly poured. At safari lodges, tented camps and members' clubs luxuriously appoint..."}
           />
      <div className=" max-w-[1320px] mx-auto px-4">
        <div className="home-pack_main">
          <div className="main-pack_fill">
            <ul className="filderlist">
              <li>All Zimbabwe Packages</li>
              <li>All Botswana Packages</li>
              <li>All Mozambique Packages</li>
              <li>All East Africa Packages</li>
              <li>All South Africa Packages</li>
            </ul>
          </div>
        </div>
      </div>
      <div >
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
     
    </section>
  );
};

export default Homepack;
