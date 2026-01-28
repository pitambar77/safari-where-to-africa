import React from "react";
import heroImage from "../../assets/where-home-banner.webp"; 

import Homepack from "../homePage/Homepack";
import Founder from "../homePage/Founder";
import WhyTravel from "../homePage/WhyTravel";
import PositiveImpact from "../homePage/PositiveImpact";
import Banner from "../../components/Banner";
import Overview from "../../components/Overview";
import DestinationSelector from "../../components/DestinationSelector";
const Home = () => {
  return (
    <div>
     
     <DestinationSelector/>
     <div className=" bg-[#fbf6ea]">

     </div>
     
     <Homepack />
     <Founder />
     <WhyTravel />
     <PositiveImpact />

    </div>
  );
};

export default Home;
