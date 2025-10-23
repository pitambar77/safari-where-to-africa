
import React from "react";
import "./Testimonial.css";
import feefopic from "../assets/feefo.svg";
import star from "../assets/star-rating.svg";
import TestimonialCard from "../components/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import profile1 from "../assets/review1.avif";

const testimonials = [
  {
    id: 1,
    profile: profile1,
    travelername: "Kristi Gerathy",
    mainquote: "Where To Africa Safari is Excellent!",
    para: "Our experience with Joanna of Where To Africa Safari was excellent. We have used her services in the past and will continue to use her services for future trips.",
  },
  {
    id: 2,
    profile: profile1,
    travelername: "John Anderson",
    mainquote: "A Truly Wonderful Experience!",
    para: "Everything from booking to our safari experience was smooth and professional. Highly recommend Where To Africa for anyone planning an African adventure.",
  },
  {
    id: 3,
    profile: profile1,
    travelername: "Lisa Roberts",
    mainquote: "Unforgettable Safari Adventure!",
    para: "An incredible experience! The team at Where To Africa Safari ensured every detail was taken care of — we couldn’t have asked for more!",
  },
   {
    id: 4,
    profile: profile1,
    travelername: "Kristi Gerathy",
    mainquote: "Where To Africa Safari is Excellent!",
    para: "Our experience with Joanna of Where To Africa Safari was excellent. We have used her services in the past and will continue to use her services for future trips.",
  },
  {
    id: 5,
    profile: profile1,
    travelername: "John Anderson",
    mainquote: "A Truly Wonderful Experience!",
    para: "Everything from booking to our safari experience was smooth and professional. Highly recommend Where To Africa for anyone planning an African adventure.",
  },
  {
    id: 6,
    profile: profile1,
    travelername: "Lisa Roberts",
    mainquote: "Unforgettable Safari Adventure!",
    para: "An incredible experience! The team at Where To Africa Safari ensured every detail was taken care of — we couldn’t have asked for more!",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-sec py-16">
      <div className=" max-w-[1320px] mx-auto px-4">
        <div className="font-cormorant text-center">
          <h2 className="text-3xl text-[#a89f82] uppercase">Reviews</h2>
          <h5 className="text-6xl  mb-10 mt-4 text-[#636363] font-normal">Real Stories From Happy Travelers</h5>
          <div className="review-parar">
            <ul className="rating-star">
              <li><img src={star} alt="star" /></li>
              <li><img src={star} alt="star" /></li>
              <li><img src={star} alt="star" /></li>
              <li><img src={star} alt="star" /></li>
              <li><img src={star} alt="star" /></li>
            </ul>
            <span className=" font-quicksand">
              Based on 836 reviews <img src={feefopic} alt="Feefo" className="river_eyeicon" />
            </span>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          className="testimonial-slider"
          
        >
          {testimonials.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="customer-review">
                <TestimonialCard
                  profile={review.profile}
                  travelername={review.travelername}
                  mainquote={review.mainquote}
                  para={review.para}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;


