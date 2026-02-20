
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
    profile:'/reviews-3.webp',
    travelername: "James & Steve",
    mainquote: "USA",
    para: "On our first African Safari, I booked our Zimbabwe portion through Where To Africa Experiences - this was one of the best decisions I made on the entire trip.",
  },
  {
    id: 2,
    profile:'/reviews-2.webp',
    travelername: "John Anderson",
    mainquote: "NEWZLAND",
    para: "Everything from booking to our safari experience was smooth and professional. Highly recommend Where To Africa for anyone planning an African adventure.",
  },
  {
    id: 3,
    profile:'/reviews-1.webp',
    travelername: "Kent Kauffman",
    mainquote: "USA",
    para: "I took 13 people to Victoria Falls for 3 nights and had a trip with Where To Africa. They made everything very easy, and the payment process was straightforward.",
  },
  {
    id: 4,
    profile:'/reviews-4.webp',
    travelername: "Justin",
    mainquote: "UNITED KINGDOM",
    para: "I thoroughly enjoyed my African Safari experience from start to finish with Where to Africa. Everything went smoothly. I would recommend this company to any of my friends, colleagues, or family.",
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
