import React from "react";

import Banner from "../../../components/Banner";
import Overview from "../../../components/Overview";
import SafariList from "../../../components/SafariList";
import accomodationBanner from "../../../assets/accommodation-banner.webp";


const AccomodationLanding = () => {
  
  return (
    <>
      <Banner
        title="Our Accommodations  "
        subtitle="Stay in thoughtfully selected retreats across Africa, where landscape, design, privacy, and local character come together to elevate every safari journey."
        imageUrl={accomodationBanner}
      />

      <SafariList />
    </>
  );
};

export default AccomodationLanding;
