import React from "react";

const AboutSection = () => {


  return (
    <section className="bg-[#f6f1e9] text-[#1a1a1a] py-16 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
      {/* Top Row */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Testimonial Card */}
        <div className="bg-white/5 rounded-sm overflow-hidden shadow-sm">
          <div className="relative">
            <img
              src="https://tanzania-specialist.com/wp-content/uploads/2023/07/10-Days-Tanzania-safari-all-northern-parks-in-1-trip-wildebeest-migration.jpg"
              alt="Kenya Safari"
              className="w-full h-64 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="p-6 text-white">
                <p className="text-3xl font-cormorant font-medium mb-4">
                  “I’ve planned several trips with Timbuktu—Southeast Asia,
                  Tanzania, Kenya, Egypt, and Uganda—and each experience has
                  been incredible. ”
                </p>
                <p className="font-semibold font-quicksand mb-2">Paolo De Marchis</p>
                <p className="text-sm text-gray-200 font-quicksand">
                  Uganda & Kenya Trip, May 2025 – Meg
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Who We Are */}
        <div className="space-y-6">
          <h2 className=" font-quicksand uppercase font-bold tracking-widest text-lg text-[#636363] ">
            Who We Are
          </h2>
          <h3 className="text-xl md:text-3xl font-cormorant  leading-[1.3] relative text-[#636363] ">
            When we founded Timbuktu in 2014, we knew exactly what we wanted to
            do: make planning extraordinary trips to the far-flung corners of
            the world as easy and fun as the adventures themselves. make planning extraordinary trips to the far-flung corners of
            the world as easy 
          </h3>
          <p className="text-gray-700 font-quicksand leading-relaxed">
            Travel should never feel like admin. We don’t do lengthy emails or
            spreadsheets (unless you’d like one), but instead, our planning
            process is filled with daydreams, excitement, and “what if we went
            there too?” moments.
          </p>
        </div>
      </div>

      {/* Divider spacing */}
      <div className="my-16"></div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Description */}
        <div className="space-y-6">
          <p className="text-gray-700 font-quicksand leading-relaxed">
            Armed with decades of travel experience and a healthy obsession with
            tech, we built our digital trip planner: a tool that lets you mix
            and match hotels and destinations with real-time prices and live
            availability. And right from the beginning, our travel experts are
            there alongside you, fine-tuning plans, taking care of logistics,
            and adding their magic touch.
          </p>
          <p className="text-xl md:text-3xl font-cormorant  leading-relaxed relative text-[#636363]">
            The result? A trip that’s truly yours... and totally unforgettable.
          </p>
        </div>

        {/* Right: Testimonial Card */}
        <div className="bg-white/5 rounded-sm overflow-hidden shadow-sm">
          <div className="relative">
            <img
              src="https://www.andbeyond.com/wp-content/uploads/sites/5/Africa-Tanzania-Serengeti-National-Park-hot-air-balloons-Website-1920x1080-fill-gravityauto-Q_AutoBest.jpg"
              alt="Chile Trip"
              className="w-full h-64 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="p-6 text-white">
                <p className="text-3xl font-medium font-cormorant  mb-4">
                  “
                  This is our second vacation planned by Timbuktu and once
                  again they knocked it out of the park. Carola was so patient
                  with us in designing an itinerary. ”
                </p>
                <p className="font-semibold font-quicksand mb-2">Adam Kelley</p>
                <p className="text-sm text-gray-200 font-quicksand">
                  Chile – Nov 2024 – Carola
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
