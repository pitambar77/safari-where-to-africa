import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "ANNIE",
    role: "Travel Specialist",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "CAROLA",
    role: "Travel Specialist",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "CATHERINE",
    role: "Travel Specialist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "JENNA",
    role: "Travel Specialist",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="py-16 bg-white px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
      <div className="text-center mb-20">
        <h2 className="text-6xl   text-[#636363] capitalize font-cormorant ">Meet our team</h2>
        
       
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-sm group shadow-md cursor-pointer h-[500px]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/70"></div>

            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-white font-quicksand"
              initial={{ y: 200, opacity: 1 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.h3
                className="text-lg font-semibold tracking-[1px]"
                initial={{ opacity: 1, y: 0 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {member.name}
              </motion.h3>

              <motion.p
                className=" font-cormorant text-2xl font-medium"
                initial={{ opacity: 1, y: 0 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
              >
                {member.role}
              </motion.p>

              <motion.div
                className="mt-3 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 border  border-white rounded-full text-xl leading-none">
                  →
                </span>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
