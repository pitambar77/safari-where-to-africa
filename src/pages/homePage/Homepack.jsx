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
      const res = await axios.get(
        "http://where-to-africa-safari-backend.manoramaseoservice.com/api/trips",
      );

      const data = res.data || [];

      const validTrips = data.filter((trip) => trip.destination);

      setTrips(validTrips);

      const destinations = [
        ...new Map(
          validTrips.map((trip) => [trip.destination._id, trip.destination]),
        ).values(),
      ];

      const sortedDestinations = [...destinations].sort((a, b) =>
        a.name.localeCompare(b.name),
      );

      if (sortedDestinations.length > 0) {
        setActiveDestination(sortedDestinations[0]._id);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const uniqueDestinations = [
    ...new Map(
      trips
        .filter((trip) => trip.destination)
        .map((trip) => [trip.destination._id, trip.destination]),
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
              {[...uniqueDestinations]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((dest) => (
                  <li
                    key={dest._id}
                    onClick={() => setActiveDestination(dest._id)}
                    className={
                      activeDestination === dest._id ? "active-tab" : ""
                    }
                  >
                    {dest.name} Packages
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
                      price={trip.price}
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
