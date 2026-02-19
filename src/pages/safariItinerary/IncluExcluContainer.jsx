import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const IncluExcluContainer = ({ title, items }) => {
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
        {/* {items.map((faq, index) => (
          <div
            key={faq._id || index}
            className="border-b border-gray-200 font-quicksand"
          >
            
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

           
            <div
              id={`accordion-content-${faq._id || index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-auto opacity-100 py-2"
                  : "max-h-0 opacity-0"
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
                  }

                  if (ans.type === "paragraph") {
                    return (
                      <p
                        key={i}
                        className="text-gray-700 font-light leading-relaxed mt-2"
                      >
                        {ans.content}
                      </p>
                    );
                  }

                  if (ans.type === "list" && Array.isArray(ans.content)) {
                    return (
                      <ul
                        key={i}
                        className="list-disc  mt-3 space-y-1 text-gray-700 marker:text-[#a89f81] marker:text-xl list-inside pl-8"
                      >
                        {ans.content.map((item, liIndex) => (
                          <li key={liIndex}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          </div>
        ))} */}
        {items.map((faq, index) => {
          // Remove duplicate answers
          const uniqueAnswers = Array.from(
            new Map(
              faq.answer?.map((ans) => {
                const key =
                  ans.type === "list"
                    ? JSON.stringify(ans.content)
                    : ans.content;
                return [key, ans];
              }) || [],
            ).values(),
          );

          // Combine all answer text into single string for comparison
          const combinedAnswerText = uniqueAnswers
            .map((ans) =>
              ans.type === "list" ? ans.content.join(" ") : ans.content,
            )
            .join(" ")
            .trim()
            .toLowerCase();

          const questionText = faq.question?.trim().toLowerCase();

          const isSameContent =
            questionText &&
            combinedAnswerText &&
            combinedAnswerText.includes(questionText);

          // 👉 If same content → render only answer openly
          if (isSameContent) {
            return (
              <div key={index} className="pb-4 border-b border-gray-200">
                <div className="text-gray-600 font-quicksand text-base px-2 leading-relaxed">
                  {uniqueAnswers.map((ans, i) => {
                    if (ans.type === "header") {
                      return (
                        <h3
                          key={i}
                          className="text-lg  text-[#636363] mt-4"
                        >
                          {ans.content}
                        </h3>
                      );
                    }

                    if (ans.type === "paragraph") {
                      return (
                        <p key={i} className="mt-2 text-gray-700 font-light">
                          {ans.content}
                        </p>
                      );
                    }

                    if (ans.type === "list") {
                      return (
                        <ul
                          key={i}
                          className="list-disc mt-3 space-y-1 text-gray-700 marker:text-[#a89f81] list-inside pl-8"
                        >
                          {ans.content.map((item, liIndex) => (
                            <li key={liIndex}>{item}</li>
                          ))}
                        </ul>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            );
          }

          // 👉 Otherwise render normal accordion
          return (
            <div
              key={faq._id || index}
              className="border-b border-gray-200 font-quicksand"
            >
              <button
                className="flex justify-between items-center w-full py-4 text-left text-lg hover:bg-gray-50 transition-colors"
                onClick={() => toggle(index)}
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

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-[1000px] opacity-100 py-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-4 text-gray-600 px-2 border-t border-gray-100">
                  {uniqueAnswers.map((ans, i) => {
                    if (ans.type === "header") {
                      return (
                        <h3
                          key={i}
                          className="text-lg font-semibold text-[#636363] mt-4"
                        >
                          {ans.content}
                        </h3>
                      );
                    }

                    if (ans.type === "paragraph") {
                      return (
                        <p key={i} className="mt-2 text-gray-700 font-light">
                          {ans.content}
                        </p>
                      );
                    }

                    if (ans.type === "list") {
                      return (
                        <ul
                          key={i}
                          className="list-disc mt-3 space-y-1 text-gray-700 marker:text-[#a89f81] list-inside pl-8"
                        >
                          {ans.content.map((item, liIndex) => (
                            <li key={liIndex}>{item}</li>
                          ))}
                        </ul>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IncluExcluContainer;
