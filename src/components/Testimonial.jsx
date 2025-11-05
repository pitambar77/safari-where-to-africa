
import React, { useRef } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import TestimonialCard from "../components/TestimonialCard";
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
    travelername: "Daniel White",
    mainquote: "Amazing Safari Planning!",
    para: "The organization and communication were excellent. I felt completely at ease throughout the trip. Thank you!",
  },
  {
    id: 5,
    profile: profile1,
    travelername: "Sarah Thompson",
    mainquote: "Life-changing Experience!",
    para: "From sunrise game drives to stunning lodges — every moment was unforgettable. Highly recommended!",
  },
];

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="testimonial-sec py-16 bg-white">
      <div className="px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Heading */}
        <div className="font-cormorant text-center">
          <h2 className="text-2xl md:text-3xl text-[#a89f82] uppercase">
            Reviews
          </h2>
          <h3 className="text-4xl md:text-6xl mb-10 mt-4 text-[#636363] font-normal">
            Real Stories From Happy Travelers
          </h3>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 my-6">
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full bg-[#aaa086] text-white flex items-center justify-center hover:bg-[#978f7d] transition"
            aria-label="Previous"
          >
            <IoArrowBack size={20} />
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full bg-[#aaa086] text-white flex items-center justify-center hover:bg-[#978f7d] transition"
            aria-label="Next"
          >
            <IoArrowForward size={20} />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onInit={(swiper) => {
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-8"
        >
          {testimonials.map((review) => (
            <SwiperSlide key={review.id}>
              <TestimonialCard
                profile={review.profile}
                travelername={review.travelername}
                mainquote={review.mainquote}
                para={review.para}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
