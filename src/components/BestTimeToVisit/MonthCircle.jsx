import React from "react";

const MonthCircle = ({ month, isActive, onHover }) => {
  return (
    <div
      onMouseEnter={() => onHover(month)}
      className={`w-16 h-16 rounded-full flex items-center justify-center font-semibold uppercase transition-all duration-300 cursor-pointer ${
        isActive
          ? `${month.color} border-b-4 border-[#a89f82] scale-105`
          : month.color
      }`}
    >
      {month.name}
    </div>
  );
};

export default MonthCircle;
