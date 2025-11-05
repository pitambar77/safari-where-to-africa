import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FounderQuoteSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className=" text-[#1a1a1a] py-16 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
      <div className=" flex items-center justify-between">
        {/* Left: Image with Play Button */}
        <div className="relative rounded-sm overflow-hidden shadow-sm w-[56%] ">
          <img
            src="https://tanzania-specialist.com/wp-content/uploads/2023/07/10-Days-Tanzania-safari-all-northern-parks-in-1-trip-wildebeest-migration.jpg"
            alt="Timbuktu Travel Video"
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
          {/* Play Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="bg-black/70 hover:bg-black transition-colors duration-300 p-4 rounded-full">
              <FaPlay className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* Right: Quote + Description */}
        <div className="space-y-4 w-[40%]">
          <blockquote className="text-xl md:text-2xl font-cormorant font-medium leading-relaxed relative text-[#636363]">
            <span className="absolute -left-3 -top-3 font-cormorant text-5xl ">“</span>
            Timbuktu was shaped by local, insider knowledge, an obsession with
            new tech and one big belief: that travel — and the planning — should
            be easy, exciting and an all-round incredible experience from the
            moment you enquire, to your first (and last) sunset cocktail in the
            destination of your dreams.
            <span className="text-5xl font-cormorant  align-top">”</span>
          </blockquote>

          <p className="text-gray-700 leading-relaxed">
            Discover how our trip planner works and how it’s changing the way
            people travel.
          </p>

          <div>
            <p className="font-semibold font-quicksand text-lg mb-2">Johnny Prince</p>
            <p className="text-gray-600 font-quicksand text-sm">Founder & CEO</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-[90%] md:w-[80%] aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Scxs7L0vhZ4?autoplay=1"
                title="Timbuktu Travel Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white transition"
              >
                <FaTimes />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FounderQuoteSection;
