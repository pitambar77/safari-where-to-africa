// import React, { useState } from "react";
// import AccordionItem from "./AccordionItem"; // Assuming AccordionItem is in a separate file

// const FAQSectionContainer = ({ title, items }) => {
//   // State to track the ID of the currently open item (null means all are closed)
//   const [openItemId, setOpenItemId] = useState(null);

//   const toggleItem = (itemId) => {
//     setOpenItemId(openItemId === itemId ? null : itemId);
//   };

//   return (
//     <div className="w-full max-w-4xl px-4">
//       {/* Main Section Title */}
//       <h2 className="  text-6xl text-[#636363] capitalize text-center font-cormorant font-normal mb-16">
//         {title}
//       </h2>

//       {/* Accordion Items Container */}
//       <div className="border-t border-gray-200 font-quicksand">
//         {items.map((item) => (
//           <AccordionItem
//             key={item.id}
//             item={item}
//             isOpen={openItemId === item.id}
//             onClick={() => toggleItem(item.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQSectionContainer; // Exported for reuse with different data


// import React, { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const FAQSectionContainer = ({ title, items }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full max-w-4xl px-4">
//      <h2 className="  text-6xl text-[#636363] capitalize text-center font-cormorant font-normal mb-16">
//         {title}
//       </h2>
//       <div className="space-y-4">
//         {items.map((faq, index) => (
//           <div
//             key={faq._id || index}
//             className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
//           >
//             <button
//               onClick={() => toggle(index)}
//               className="w-full flex justify-between items-center px-5 py-4 bg-gray-50 hover:bg-gray-100 text-left transition-all"
//             >
//               <span className="font-medium text-gray-800">{faq.question}</span>
//               {openIndex === index ? (
//                 <ChevronUp className="w-5 h-5 text-gray-600" />
//               ) : (
//                 <ChevronDown className="w-5 h-5 text-gray-600" />
//               )}
//             </button>

//             {openIndex === index && (
//               <div className="border-t border-gray-200 font-quicksand">
//                 {faq.answer.map((ans, i) => {
//                   if (ans.type === "header") {
//                     return (
//                       <h3
//                         key={i}
//                         className="text-lg font-semibold text-gray-900 mt-4"
//                       >
//                         {ans.content}
//                       </h3>
//                     );
//                   } else if (ans.type === "paragraph") {
//                     return (
//                       <p key={i} className="pb-4 text-gray-600 font-quicksand text-base px-2 leading-relaxed">
//                         {ans.content}
//                       </p>
//                     );
//                   } else {
//                     return null;
//                   }
//                 })}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQSectionContainer;

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSectionContainer = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl px-4">
      {/* Section Title */}
      <h2 className="text-6xl text-[#636363] capitalize text-center font-cormorant font-normal mb-16">
        {title}
      </h2>

      {/* Accordion Items */}
      <div className="space-y-2">
        {items.map((faq, index) => (
          <div
            key={faq._id || index}
            className="border-b border-gray-200 font-quicksand"
          >
            {/* Question */}
            <button
              className="flex justify-between items-center w-full py-4 text-left text-lg hover:bg-gray-50 transition-colors"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`accordion-content-${faq._id || index}`}
            >
              <span className="text-gray-800 font-light px-2">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-800" />
              ) : (
                <Plus className="w-5 h-5 text-gray-800" />
              )}
            </button>

            {/* Answer */}
            <div
              id={`accordion-content-${faq._id || index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-4 text-gray-600 font-quicksand text-base px-2 leading-relaxed border-t border-gray-100">
                {faq.answer?.map((ans, i) => {
                  if (ans.type === "header") {
                    return (
                      <h3
                        key={i}
                        className="text-lg font-semibold text-[#636363] mt-4"
                      >
                        {ans.content}
                      </h3>
                    );
                  } else if (ans.type === "paragraph") {
                    return (
                      <p
                        key={i}
                        className="text-gray-700 font-light leading-relaxed mt-2"
                      >
                        {ans.content}
                      </p>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSectionContainer;
