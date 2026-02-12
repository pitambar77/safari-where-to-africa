import React, { useRef } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const impactProjects = [
  {
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    title: "Community Partnerships",
    description:
      "Local communities are engaged through fair employment, cultural respect, and collaboration with guides, artisans, and service providers, ensuring tourism income supports livelihoods and strengthens local economies while preserving traditions and encouraging long-term participation in responsible tourism initiatives.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    title: "Wildlife Protection",
    description:
      "Activities are selected to minimize disturbance, follow ethical viewing guidelines, and support conservation-focused tourism that protects habitats, encourages responsible wildlife encounters, and contributes to long-term preservation of Africa’s natural ecosystems and biodiversity.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
    title: "Low Impact Travel",
    description:
      "Travel routes, accommodations, and activities are chosen to reduce environmental strain, manage visitor flow, and limit overuse of sensitive areas, helping destinations remain healthy, balanced, and welcoming for future travelers and local residents alike.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=800&q=80",
    title: "Responsible Accommodation Choices",
    description:
      "Accommodation partners are selected based on responsible operations, fair labor practices, environmental awareness, and community involvement, ensuring stays contribute positively to surrounding areas rather than placing unnecessary pressure on local resources.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    title: "Education And Awareness",
    description:
      "Travelers receive clear guidance on respectful behavior, cultural understanding, and environmental responsibility, helping guests make informed choices that support conservation, community wellbeing, and positive interactions throughout their journey across African destinations.",
  },
  
];

const ImpactOfYourStay = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className=" py-16  text-gray-800">
      {/* Header */}
      <div className="text-center px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 mb-12">
        <div className="font-cormorant text-center  ">
          <h2 className="text-3xl text-[#a89f82] uppercase">
            {" "}
            Travel Responsibly
          </h2>

          <h5 className="text-6xl  mb-8 mt-4 text-[#636363] capitalize font-normal">
            Our Sustainable Commitments
          </h5>
          <p className="text-lg max-w-4xl mx-auto text-gray-600 font-quicksand leading-relaxed">
            Responsible travel means understanding impact and acting carefully.
            Where to Africa focuses on practices that support communities
            protect wildlife, respect cultures, and reduce environmental
            pressure while ensuring tourism creates long-term benefits for
            destinations and people rather than short-term gains alone.
          </p>
        </div>

        {/* Custom Nav Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
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
      </div>

      {/* Swiper Slider */}
      <div className="pl-6 md:pl-10 lg:pl-16 xl:pl-20 2xl:pl-28">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4.5 },
          }}
          className="impact-swiper"
        >
          {impactProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className=" max-w-xs text-left mx-auto">
                <div className="overflow-hidden rounded-sm mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-sm transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-semibold font-cormorant text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm font-quicksand pr-6 ">
                  {project.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImpactOfYourStay;
