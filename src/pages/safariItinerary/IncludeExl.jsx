import React from "react";
import IncluExcluContainer from "./IncluExcluContainer";

const IncludeExl = ({ aboutBooking = [], requirements = [] }) => {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 flex justify-center py-10">
        <IncluExcluContainer
          title="Include"
          items={aboutBooking}
        />
      </div>

      <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 flex justify-center py-10">
        <IncluExcluContainer
          title="Exclude"
          items={requirements}
        />
      </div>
    </>
  );
};


export default IncludeExl