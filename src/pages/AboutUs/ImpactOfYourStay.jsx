
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
    title: "CAMFED",
    description:
      "Empowering women is one of the most powerful ways to uplift entire communities. That's why we support organisations across Africa that help women and girls access education, build livelihoods, and create futures that they choose for themselves.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    title: "Amy Foundation",
    description:
      "With our headquarters in Cape Town in South Africa, we understand the importance of equipping young people with practical tools for the future. We support programmes that focus on life skills, mentorship, and career readiness, both during school years and beyond.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
    title: "iLearnabout",
    description:
      "Conservation starts with community. We work with projects that engage and educate the people who live closest to wildlife, giving them the knowledge and opportunities to protect the ecosystems they call home.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=800&q=80",
    title: "Blue Dragon Children's Foundation",
    description:
      "Every child deserves a safe environment and access to quality education. We support initiatives that provide school resources, nutrition, and safe spaces for children to learn, grow, and thrive.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    title: "Amy Foundation",
    description:
      "With our headquarters in Cape Town in South Africa, we understand the importance of equipping young people with practical tools for the future. We support programmes that focus on life skills, mentorship, and career readiness, both during school years and beyond.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
    title: "iLearnabout",
    description:
      "Conservation starts with community. We work with projects that engage and educate the people who live closest to wildlife, giving them the knowledge and opportunities to protect the ecosystems they call home.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=800&q=80",
    title: "Blue Dragon Children's Foundation",
    description:
      "Every child deserves a safe environment and access to quality education. We support initiatives that provide school resources, nutrition, and safe spaces for children to learn, grow, and thrive.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    title: "Amy Foundation",
    description:
      "With our headquarters in Cape Town in South Africa, we understand the importance of equipping young people with practical tools for the future. We support programmes that focus on life skills, mentorship, and career readiness, both during school years and beyond.",
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
          <h2 className="text-3xl text-[#a89f82] uppercase"> Your Journeys</h2>

          <h5 className="text-6xl  mb-8 mt-4 text-[#636363] capitalize font-normal">
            South Africa Trips to Inspire
          </h5>
           <p className="text-lg max-w-4xl mx-auto text-gray-600 font-quicksand leading-relaxed">
          We believe travel should give back. That’s why we donate $50 for every
          Timbuktu booking to projects that support women’s empowerment, youth
          development, and conservation across the globe. So while you're
          exploring the world, you're helping to shape a better one, too.
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

