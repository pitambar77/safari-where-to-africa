

// working condition

// import React, { useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { AiOutlineDownload } from "react-icons/ai";
// import DayTab from "./DayTab";
// import DayRow from "./DayRow";
// import DayDetailContent from "./DayDetailContent";

// const Itinerary = ({ data = [], title = "Trip Itinerary" }) => {
//   const [activeDayId, setActiveDayId] = useState(data[0]?.id || 1); // Default: first day open

//   const handleToggle = (id) => {
//     setActiveDayId((prev) => (prev === id ? null : id)); // toggle same day, else open clicked one
//   };

//   const handleExpandAll = () => {
//     if (activeDayId === "all") {
//       setActiveDayId(data[0]?.id || 1);
//     } else {
//       setActiveDayId("all");
//     }
//   };

//   const activeSegmentId =
//     data.find((item) => item.id === activeDayId)?.id || data[0]?.id || 1;

//   return (
//     <div className="bg-[#f6f1e9] font-cormorant">
//       <div className="max-w-[1320px] mx-auto py-16 px-4">
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
//         <div className="flex border-b border-gray-200 mt-5 overflow-x-auto">
//           {data.map((item) => (
//             <DayTab
//               key={item.id}
//               day={item.day}
//               location={item.location}
//               isActive={activeDayId === item.id}
//               onClick={() => setActiveDayId(item.id)}
//             />
//           ))}
//         </div>

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

//         {/* --- DAY DETAILS --- */}
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
//                 {isExpanded && (
//                   <div className="bg-gray-50 border-t border-gray-200">
//                     <DayDetailContent
//                       title={item.title}
//                       location={item.location}
//                       description={item.description}
//                       lodge={item.lodge}
//                       images={item.images}
//                       activities={item.activities}
//                     />
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Itinerary;



// animation 

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import DayTab from "./DayTab";
import DayRow from "./DayRow";
import DayDetailContent from "./DayDetailContent";

const Itinerary = ({ data = [], title = "Trip Itinerary" }) => {
  const [activeDayId, setActiveDayId] = useState(data[0]?.id || 1);

  const handleToggle = (id) => {
    setActiveDayId((prev) => (prev === id ? null : id));
  };

  const handleExpandAll = () => {
    setActiveDayId(activeDayId === "all" ? data[0]?.id || 1 : "all");
  };

  const activeSegmentId =
    data.find((item) => item.id === activeDayId)?.id || data[0]?.id || 1;

  return (
    <div className="bg-[#f6f1e9] font-cormorant">
      <div className=" max-w-[1320px] mx-auto py-16 px-4">
        {/* --- HEADER --- */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>

        {/* --- PROGRESS BAR --- */}
        <div className="pt-4 px-4">
          <div className="flex items-center mb-3">
            {data.map((item, idx) => (
              <React.Fragment key={item.id}>
                <div
                  className={`w-4 h-4 rounded-full ${
                    item.id <= activeSegmentId ? "bg-[#aaa086]" : "bg-gray-300"
                  }`}
                ></div>
                {idx < data.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 ${
                      item.id < activeSegmentId ? "bg-[#aaa086]" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center space-x-0 mt-2">
            {data.map((item) => (
              <div key={item.id} className="flex-1 flex items-center">
                <div className="text-xs font-medium text-gray-500 w-4 text-center">
                  {item.day.replace("Day ", "D")}
                </div>
                {item.id < data.length && <div className="flex-1"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* --- TABS --- */}
        <div className="flex border-b border-gray-200 mt-5 overflow-x-auto">
          {data.map((item) => (
            <DayTab
              key={item.id}
              day={item.day}
              location={item.location}
              isActive={activeDayId === item.id}
              onClick={() => setActiveDayId(item.id)}
            />
          ))}
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

        {/* --- DAY DETAILS (with animation) --- */}
        <div className="divide-y divide-gray-200 mt-10">
          {data.map((item) => {
            const isExpanded =
              activeDayId === "all" || activeDayId === item.id;

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





