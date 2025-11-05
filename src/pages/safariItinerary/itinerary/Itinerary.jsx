// // animation 

// import React, { useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { AiOutlineDownload } from "react-icons/ai";
// import { motion, AnimatePresence } from "framer-motion";
// import DayTab from "./DayTab";
// import DayRow from "./DayRow";
// import DayDetailContent from "./DayDetailContent";

// const Itinerary = ({ data = [], title = "Trip Itinerary" }) => {
//   const [activeDayId, setActiveDayId] = useState(data[0]?.id || 1);

//   const handleToggle = (id) => {
//     setActiveDayId((prev) => (prev === id ? null : id));
//   };

//   const handleExpandAll = () => {
//     setActiveDayId(activeDayId === "all" ? data[0]?.id || 1 : "all");
//   };

//   const activeSegmentId =
//     data.find((item) => item.id === activeDayId)?.id || data[0]?.id || 1;

//   return (
//     <div className="bg-[#f6f1e9] font-cormorant">
//       <div className=" px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-16">
//         {/* --- HEADER --- */}
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>

//         {/* --- PROGRESS BAR --- */}
//         <div className="pt-4 px-4">
//           <div className="flex items-center mb-3">
//             {data.map((item, idx) => (
//               <React.Fragment key={item.id}>
//                 <div
//                   className={`w-4 h-4 rounded-full ${
//                     item.id <= activeSegmentId ? "bg-[#aaa086]" : "bg-gray-300"
//                   }`}
//                 ></div>
//                 {idx < data.length - 1 && (
//                   <div
//                     className={`flex-1 h-0.5 ${
//                       item.id < activeSegmentId ? "bg-[#aaa086]" : "bg-gray-300"
//                     }`}
//                   ></div>
//                 )}
//               </React.Fragment>
//             ))}
//           </div>

//           <div className="flex items-center space-x-0 mt-2">
//             {data.map((item) => (
//               <div key={item.id} className="flex-1 flex items-center">
//                 <div className="text-xs font-medium text-gray-500 w-4 text-center">
//                   {item.day.replace("Day ", "D")}
//                 </div>
//                 {item.id < data.length && <div className="flex-1"></div>}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* --- TABS --- */}
//         {/* <div className="flex border-b border-gray-200 mt-5 overflow-x-auto">
//           {data.map((item) => (
//             <DayTab
//               key={item.id}
//               day={item.day}
//               location={item.location}
//               isActive={activeDayId === item.id}
//               onClick={() => setActiveDayId(item.id)}
//             />
//           ))}
//         </div> */}

//         {/* --- TABS --- */}
// <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-2 mt-4">
//   {data.map((item) => (
//     <button
//       key={item.id}
//       onClick={() => setActiveDayId(item.id)}
//       className={`px-6 py-3 text-sm font-medium border border-black whitespace-nowrap transition-all duration-300 
//         ${activeDayId === item.id
//           ? "bg-[#aaa086] text-black rounded-l-full rounded-r-full"
//           : "bg-white text-black hover:bg-[#f0ede4] rounded-l-full rounded-r-full"
//         }`}
//       style={{
//         flex: activeDayId === item.id ? "1.5" : "1",
//         minWidth: "fit-content",
//       }}
//     >
//       {item.location}
//     </button>
//   ))}
// </div>




//         {/* --- ACTION BAR --- */}
//         <div className="flex justify-between items-center p-4 mt-8 border-b border-gray-100">
//           <button className="flex items-center text-sm font-medium text-gray-600 hover:text-yellow-700 transition-colors uppercase">
//             <AiOutlineDownload className="w-4 h-4 mr-2" />
//             Download Itinerary
//           </button>

//           <button
//             className="flex items-center text-sm font-medium text-gray-600 hover:text-yellow-700 transition-colors uppercase"
//             onClick={handleExpandAll}
//           >
//             {activeDayId === "all" ? "Collapse All Days" : "Expand All Days"}
//             {activeDayId === "all" ? (
//               <IoIosArrowUp className="ml-1 w-4 h-4" />
//             ) : (
//               <IoIosArrowDown className="ml-1 w-4 h-4" />
//             )}
//           </button>
//         </div>

//         {/* --- DAY DETAILS (with animation) --- */}
//         <div className="divide-y divide-gray-200 mt-10">
//           {data.map((item) => {
//             const isExpanded =
//               activeDayId === "all" || activeDayId === item.id;

//             return (
//               <div key={item.id}>
//                 <DayRow
//                   day={item.day}
//                   title={item.title}
//                   isExpanded={isExpanded}
//                   onToggle={() => handleToggle(item.id)}
//                 />

//                 <AnimatePresence initial={false}>
//                   {isExpanded && (
//                     <motion.div
//                       key={item.id}
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.4, ease: "easeInOut" }}
//                       className="overflow-hidden bg-gray-50 border-t border-gray-200"
//                     >
//                       <DayDetailContent
//                         title={item.title}
//                         location={item.location}
//                         description={item.description}
//                         lodge={item.lodge}
//                         images={item.images}
//                         activities={item.activities}
//                       />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Itinerary;


import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import DayRow from "./DayRow";
import DayDetailContent from "./DayDetailContent";

const Itinerary = ({ data = [], title = "Trip Itinerary" }) => {
  const [activeDayId, setActiveDayId] = useState(data[0]?.id || 1);
  const [activeSlide, setActiveSlide] = useState(1);

  const slidesToShow = 4; // visible day cards at once
  const totalSlides = Math.ceil(data.length / slidesToShow);

  const handlePrev = () => setActiveSlide((prev) => (prev > 1 ? prev - 1 : prev));
  const handleNext = () => setActiveSlide((prev) => (prev < totalSlides ? prev + 1 : prev));

  const handleToggle = (id) => setActiveDayId((prev) => (prev === id ? null : id));
  const handleExpandAll = () => setActiveDayId(activeDayId === "all" ? data[0]?.id || 1 : "all");

  return (
    <div className="bg-[#f6f1e9] font-cormorant">
      <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-16">
        {/* --- HEADER --- */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>

        {/* --- TIMELINE + TABS --- */}
        <div className="relative w-full bg-[#f6f1e9]">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-[35%] -translate-y-1/2 z-10 text-gray-500 hover:text-black bg-white rounded-full p-2 shadow-md"
          >
            <FiChevronLeft size={22} />
          </button>

          {/* --- DOTS + ANIMATED CONNECTOR LINES --- */}
         

{/* --- DOTS + CONNECTOR LINES --- */}

{/* --- DOTS + CONNECTOR LINES (aligned to start of each tab) --- */}
<div className="overflow-hidden px-12">
  <motion.div
    className="flex items-center transition-transform duration-500 ease-in-out"
    animate={{
      x: `-${(activeSlide - 1) * (100 / totalSlides)}%`,
    }}
    style={{
      width: `${(data.length / slidesToShow) * 100}%`,
    }}
  >
    {data.map((item, idx) => (
      <div key={item.id} className="relative flex-1">
        {/* Connector line (behind dot) */}
        {idx < data.length - 1 && (
          <div className="absolute top-[8px] left-0 right-0 h-[2px] bg-gray-300">
            <motion.div
              className="h-full bg-[#aaa086]"
              initial={{ width: 0 }}
              animate={{
                width: item.id < activeDayId ? "100%" : "0%",
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>
          
        )}


        {/* Dot + Label */}
        <div className="relative flex flex-col items-start">
          <div
            className={`w-4 h-4 rounded-full transition-colors duration-500 ${
              item.id <= activeDayId ? "bg-[#aaa086]" : "bg-gray-300"
            }`}
          ></div>
          <span className="text-sm font-medium text-gray-800 mt-1">
            {item.day}
          </span>
        </div>
        
      </div>
      
    ))}
    
  </motion.div>
</div>


          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-[35%] -translate-y-1/2 z-10 text-gray-500 hover:text-black bg-white rounded-full p-2 shadow-md"
          >
            <FiChevronRight size={22} />
          </button>

          {/* --- LOCATION TABS --- */}
          <div className="overflow-hidden mt-8 px-12">
            <motion.div
              className="flex justify-between transition-transform duration-500 ease-in-out"
              animate={{
                x: `-${(activeSlide - 1) * (100 / totalSlides)}%`,
              }}
              style={{
                width: `${(data.length / slidesToShow) * 100}%`,
              }}
            >
              {data.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveDayId(item.id)}
                  className={`flex-1 px-6 py-3 text-base font-semibold border border-[#aaa086] transition-all duration-300
                    ${
                      activeDayId === item.id
                        ? "bg-[#aaa086] text-white"
                        : "bg-white text-black hover:bg-gray-100"
                    }
                    ${
                      idx === 0
                        ? "rounded-l-full"
                        : idx === data.length - 1
                        ? "rounded-r-full"
                        : ""
                    }`}
                >
                  {item.location}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- ACTION BAR --- */}
        <div className="flex justify-between items-center p-4 mt-8 border-b border-gray-100">
          <button className="flex items-center text-sm font-medium text-gray-600 hover:text-yellow-700 transition-colors uppercase">
            <AiOutlineDownload className="w-4 h-4 mr-2" />
            Download Itinerary
          </button>

          <button
            className="flex items-center text-sm font-medium text-gray-600 hover:text-yellow-700 transition-colors uppercase"
            onClick={handleExpandAll}
          >
            {activeDayId === "all" ? "Collapse All Days" : "Expand All Days"}
            {activeDayId === "all" ? (
              <IoIosArrowUp className="ml-1 w-4 h-4" />
            ) : (
              <IoIosArrowDown className="ml-1 w-4 h-4" />
            )}
          </button>
        </div>

        {/* --- DAY DETAILS (Animated Expand) --- */}
        <div className="divide-y divide-gray-200 mt-10">
          {data.map((item) => {
            const isExpanded = activeDayId === "all" || activeDayId === item.id;
            return (
              <div key={item.id}>
                <DayRow
                  day={item.day}
                  title={item.title}
                  isExpanded={isExpanded}
                  onToggle={() => handleToggle(item.id)}
                />
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={item.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden bg-gray-50 border-t border-gray-200"
                    >
                      <DayDetailContent
                        title={item.title}
                        location={item.location}
                        description={item.description}
                        lodge={item.lodge}
                        images={item.images}
                        activities={item.activities}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
