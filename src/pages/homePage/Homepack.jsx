// import "./Homepack.css";
// import SafariPackBox from "./safariPackBox";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import safari2 from "../../assets/safari2.webp";
// import safari3 from "../../assets/safari3.webp";
// import safari4 from "../../assets/safari4.webp";
// import safari5 from "../../assets/safari5.webp";
// import Overview from "../../components/Overview";

// const safariData = [
//   { id: 1, image: safari3, title: "Big Five Safaris", link: "#" },
//   { id: 2, image: safari2, title: "Serengeti Adventure", link: "#" },
//   { id: 3, image: safari3, title: "Wildlife Safari", link: "#" },
//   { id: 4, image: safari4, title: "Safari Honeymoon", link: "#" },
//   { id: 5, image: safari5, title: "Photography Safari", link: "#" },
//   { id: 1, image: safari2, title: "Big Five Safaris", link: "#" },
//   { id: 2, image: safari4, title: "Serengeti Adventure", link: "#" },
//   { id: 3, image: safari3, title: "Wildlife Safari", link: "#" },
//   { id: 4, image: safari4, title: "Safari Honeymoon", link: "#" },
//   { id: 5, image: safari5, title: "Photography Safari", link: "#" },
// ];

// const Homepack = () => {
//   return (
//     <section className="bg-[#fbf6ea] pb-16">
//       <Overview
//            title={"Welcome to Our Africa"}
//            subtitle={"We promote responsible African Tours that protect wilderness, support local communities, and celebrate culture through thoughtful journey planning"}
//            description={"...travel experiences that help preserve wildlife, strengthen communities, and ensure tourism benefits the places you visit..."}
//            />
//       <div className=" px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
//         <div className="home-pack_main">
//           <div className="main-pack_fill">
//             <ul className="filderlist">
//               <li>All Zimbabwe Packages</li>
//               <li>All Botswana Packages</li>
//               <li>All Mozambique Packages</li>
//               <li>All East Africa Packages</li>
//               <li>All South Africa Packages</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div >
//  <div className="home-africa-pack ">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={20}
//           slidesPerView={3}
//           navigation={true}
//           loop={true}
//           pagination={{ type: "fraction" }}
//           slidesOffsetBefore={0}
//           slidesOffsetAfter={200}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             600: { slidesPerView: 2 },
//             1000: { slidesPerView: 3 },
//           }}
//           className="packages-box-slider"
//         >
//           {safariData.map((safari) => (
//             <SwiperSlide key={safari.id}>
//               <div className="safari-card-iteam">
//                 <SafariPackBox
//                   image={safari.image}
//                   title={safari.title}
//                   link={safari.link}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       </div>

//     </section>
//   );
// };

// export default Homepack;

// import "./Homepack.css";
// import SafariPackBox from "./safariPackBox";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import Overview from "../../components/Overview";

// const Homepack = () => {
//   const [trips, setTrips] = useState([]);
//   const [activeDestination, setActiveDestination] = useState(null);

//   useEffect(() => {
//     fetchTrips();
//   }, []);

//   const fetchTrips = async () => {
//     try {
//       const res = await axios.get("http://localhost:8003/api/trips");
//       const data = res.data || [];

//       console.log("TRIPS:", data);

//       setTrips(data);

//       // Set first destination automatically
//       if (data.length > 0) {
//         setActiveDestination(data[0].destination._id);
//       }

//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   // Get unique destinations from trips
//   const uniqueDestinations = [
//     ...new Map(
//       trips.map((trip) => [trip.destination._id, trip.destination])
//     ).values(),
//   ];

//   // Filter trips by active destination
//   const filteredTrips = trips.filter(
//     (trip) => trip.destination._id === activeDestination
//   );

//   return (
//     <section className="bg-[#fbf6ea] pb-16">
//       <Overview
//         title="Welcome to Our Africa"
//         subtitle="We promote responsible African Tours that protect wilderness, support local communities, and celebrate culture through thoughtful journey planning"
//         description="Travel experiences that help preserve wildlife, strengthen communities, and ensure tourism benefits the places you visit."
//       />

//       {/* ===== Tabs ===== */}
//       <div className="px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
//         <div className="home-pack_main">
//           <div className="main-pack_fill">
//             <ul className="filderlist">
//               {uniqueDestinations.map((dest) => (
//                 <li
//                   key={dest._id}
//                   onClick={() => setActiveDestination(dest._id)}
//                   className={activeDestination === dest._id ? "active-tab" : ""}
//                 >
//                   All {dest.name} Packages
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* ===== Slider ===== */}
//       <div className="home-africa-pack mt-10">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={20}
//           slidesPerView={3}
//           navigation
//           loop
//           pagination={{ type: "fraction" }}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             600: { slidesPerView: 2 },
//             1000: { slidesPerView: 3 },
//           }}
//           className="packages-box-slider"
//         >
//           {filteredTrips.length > 0 ? (
//             filteredTrips.map((trip) => (
//               <SwiperSlide key={trip._id}>
//                 <div className="safari-card-iteam">
//                   <SafariPackBox
//                     image={trip.image}
//                     title={trip.title}
//                     link={`/trip/${trip.slug}`}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))
//           ) : (
//             <SwiperSlide>
//               <div className="text-center py-10 w-full">
//                 No Packages Available
//               </div>
//             </SwiperSlide>
//           )}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Homepack;

import "./Homepack.css";
import SafariPackBox from "./safariPackBox";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Overview from "../../components/Overview";

const Homepack = () => {
  const [trips, setTrips] = useState([]);
  const [activeDestination, setActiveDestination] = useState(null);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const res = await axios.get("http://where-to-africa-safari-backend.manoramaseoservice.com/api/trips");
      const data = res.data || [];

      // setTrips(data);

      // // Auto select first destination
      // if (data.length > 0) {
      //   setActiveDestination(data[0].destination._id);
      // }

      // Remove trips with null destination
      const validTrips = data.filter((trip) => trip.destination);

      setTrips(validTrips);

      // Auto select first valid destination
      if (validTrips.length > 0) {
        setActiveDestination(validTrips[0].destination._id);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };



  const uniqueDestinations = [
  ...new Map(
    trips
      .filter((trip) => trip.destination)
      .map((trip) => [trip.destination._id, trip.destination])
  ).values(),
];


  // Filter trips by active destination
  const filteredTrips = trips.filter(
    (trip) => trip.destination._id === activeDestination,
  );

  return (
    <section className="bg-[#fbf6ea] pb-16">
      <Overview
        title={"Welcome to Our Africa"}
        subtitle={
          "We promote responsible African Tours that protect wilderness, support local communities, and celebrate culture through thoughtful journey planning"
        }
        description={
          "...travel experiences that help preserve wildlife, strengthen communities, and ensure tourism benefits the places you visit..."
        }
      />

      {/* ===== KEEPING YOUR EXACT TAB LAYOUT ===== */}
      <div className="px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="home-pack_main">
          <div className="main-pack_fill">
            <ul className="filderlist">
              {uniqueDestinations.map((dest) => (
                <li
                  key={dest._id}
                  onClick={() => setActiveDestination(dest._id)}
                  className={activeDestination === dest._id ? "active-tab" : ""}
                >
                  All {dest.name} Packages
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ===== KEEPING YOUR EXACT SLIDER LAYOUT ===== */}
      <div>
        <div className="home-africa-pack">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={true}
            loop={true}
            pagination={{ type: "fraction" }}
            slidesOffsetBefore={0}
            slidesOffsetAfter={200}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
            }}
            className="packages-box-slider"
          >
            {filteredTrips.length > 0 ? (
              filteredTrips.map((trip) => (
                <SwiperSlide key={trip._id}>
                  <div className="safari-card-iteam">
                    <SafariPackBox
                      image={trip.image}
                      title={trip.title}
                      link={`/package/${trip.slug}`}
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="text-center py-10 w-full">
                  No Packages Available
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Homepack;
