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
     {/* <div className="">
        <img src={heroImage } className="w-100"/>
        <div className="container">
          <div className="hero_banner_con">
            <h1>Where can we take you?</h1>
            <div className="serch-box">
              <form>
                <input type="text" placeholder="Search Destinations" />
                <button type="submit" className="seach-btn">Go</button>
              </form>
            </div>
          </div>
        </div>
     </div> */}
     {/* <Banner
     imageUrl={heroImage}
     title="Where can we take you?"
     /> */}
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
