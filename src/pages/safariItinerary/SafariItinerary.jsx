
import "./SafariItinerary.css";
import banner from "../../assets/itineray-banner.webp";
import map from "../../assets/itinerary-map.jpg";
import TourHighlights from "../safariItinerary/TourHighlights";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const tourHighlights = [
  {
    id: 1,
    tourpic: "https://waybird.imgix.net/experiences/kodak_images/000/009/265/original/1-makgadikgadi-pans-botswana-timbuktu-travel-4.jpg?w=384&h=256&crop=fit&fit=min&dpr=1.5&q=50&auto=format",
    tourovercon:"Highlights",
    tourtitt: "Marvel at Victoria Falls",
    para: "See the epic waterfall of your Insta dreams. Take a stroll along the edge and see this 'the smoke that thunders' in ...",
    
  },
  {
    id: 2,
    tourpic: "https://waybird.imgix.net/experiences/kodak_images/000/009/266/original/1-makgadikgadi-pans-botswana-timbuktu-travel-5.jpg?w=384&h=256&crop=fit&fit=min&dpr=1.5&q=50&auto=format",
    tourovercon:"Highlights",
    tourtitt: "Take a morning Game Drive in the Okavango",
    para: "Get up with the sun in search of the amazing wildlife in this garden of Eden.",
  },
  {
    id: 3,
    tourpic: "https://waybird.imgix.net/experiences/kodak_images/000/000/141/original/horse-safari-uncharted-africa-Makgadigadi-Pans-botswana.jpg?w=384&h=256&crop=fit&fit=min&dpr=1.5&q=50&auto=format",
    tourovercon:"Highlights",
    tourtitt: "See Deadvlei and Big Daddy Sand Dune",
    para: "Explore Sossusvlei, snap shots of Deadvlei and wander around Big Daddy sand dune",
    
  },
    {
    id: 4,
    tourpic: "https://waybird.imgix.net/experiences/kodak_images/000/009/281/original/1-makgadikgadi-pans-botswana-timbuktu-travel-22.jpg?w=384&h=256&crop=fit&fit=min&dpr=1.5&q=50&auto=format",
    tourovercon:"Highlights",
    tourtitt: "See Deadvlei and Big Daddy Sand Dune",
    para: "Explore Sossusvlei, snap shots of Deadvlei and wander around Big Daddy sand dune",
    
  },

];


const SafariItinerary=()=>{
    return(
    <>
    <section className="safari-welcome-sec">
        <div className="container">
        <div className="common-itineray-heading">
          <h2>Land Journey</h2>
          <h5>Wildlife Odyssey: South Africa, Botswana & Zimbabwe </h5>
          <p>All Departures Are Even Smaller Groups Limited To 18 Tauck Guests</p>
        </div>
        <div className="itineray-short-del">
            <div className="smal-short-box">
                <h2>Days</h2>
                <h5>5 Days</h5>
            </div>
            <div className="smal-short-box">
                <h2>From (per Person)</h2>
                <h5>$15,590 USD</h5>
                <p>Includes On-Tour Air</p>
            </div>
            <div className="smal-short-box">
                <h2>Journey Type</h2>
                <h5>Land</h5>
            </div>
            <div className="smal-short-box">
                <h2>Passengers</h2>
                <h5>15</h5>
            </div>
            <div className="smal-short-box">
                <h2>Time of Year</h2>
                <h6>Mar - Oct, Dec</h6>
            </div>
            <div className="smal-short-box">
                <h2>Cities & Landmarks</h2>
                <h6>Cape Town, Chobe National Park, Kruger National Park, Victoria Falls</h6>
            </div>
        </div>
        <div className="banner-itinery">
            <img src={banner} alt="" className="w-100"/>
        </div>
        </div>
    </section>
    <section className="safari_itineray_map_sec">
        <div className="container">
            <div className="common-heading">
             <h2>Welcome To Africa</h2>
              <h5>African landscapes parading with the circle of life promise magical moments unlike any you have imagined before. You'll find them...</h5>
              <p>.....while tasting wines carefully cultivated and expertly poured. At safari lodges, tented camps and members' clubs luxuriously appoint...</p>
                <div className="map-box-iti">
                    <img src={map} alt="" className="w-100"/>
                </div>
             </div>
        </div>
    </section>
    <section className="tours-heigh-sec">
        <div className="container">
            <div className="common-heading">
             <h2>Welcome To Africa</h2>
              <h5>Tours Highlights</h5>
              <p>while tasting wines carefully cultivated and expertly poured. At safari lodges, tented camps and members' clubs luxuriously appoint</p>              
             </div>
       <div className="tour-highlights-section">
           
           <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          className="tour-highlights-slider"
          
        >
          {tourHighlights.map((tours) => (
            <SwiperSlide key={tours.id}>
              <div className="tour-highlights-card">
                <TourHighlights
                  tourpic={tours.tourpic}
                  tourovercon={tours.tourovercon}
                  tourtitt={tours.tourtitt}
                  para={tours.para}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       </div>

        </div>
    </section>
    
    
    </>
    );
};
export default SafariItinerary;