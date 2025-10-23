import React from "react";
import heroImage from "../../assets/where-home-banner.webp"; 
import "./home.css";
import Homepack from "../homePage/Homepack";
import Founder from "../homePage/Founder";
import WhyTravel from "../homePage/WhyTravel";
import PositiveImpact from "../homePage/PositiveImpact";
import Banner from "../../components/Banner";
import Overview from "../../components/Overview";
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
     <Banner
     imageUrl={heroImage}
     title="Where can we take you?"
     />
     <Overview
     title={"Welcome To Africa"}
     subtitle={"African landscapes parading with the circle of life promise magical moments unlike any you have imagined before. You'll find them..."}
     description={"... while tasting wines carefully cultivated and expertly poured. At safari lodges, tented camps and members' clubs luxuriously appoint..."}
     />
     <Homepack />
     <Founder />
     <WhyTravel />
     <PositiveImpact />

    </div>
  );
};

export default Home;
