import React, { useState } from "react";
import AccordionItem from "./AccordionItem"; // Assuming AccordionItem is in a separate file

const FAQSectionContainer = ({ title, items }) => {
  // State to track the ID of the currently open item (null means all are closed)
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (itemId) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className="w-full max-w-4xl px-4">
      {/* Main Section Title */}
      <h2 className="  text-6xl text-[#636363] capitalize text-center font-cormorant font-normal mb-16">
        {title}
      </h2>

      {/* Accordion Items Container */}
      <div className="border-t border-gray-200 font-quicksand">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openItemId === item.id}
            onClick={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSectionContainer; // Exported for reuse with different data
