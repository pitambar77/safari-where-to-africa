import React, { useEffect, useState } from "react";
import Overview from "../../components/Overview";
import map from "../../assets/itinerary-map.jpg";
// import Itinerary from "./Itinerary";
import AccordionSection from "../Accomodation/AccomodationDetails/AccordionSection";
import TripHighlights from "./TripHighlights";
import JourneysCarousel from "../Accomodation/AccomodationDetails/JourneysCarousel";
import Itinerary from "./itinerary/Itinerary";
import itinary from "../../assets/itinary-banner-2.webp";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import ItinenaryForm from "../../components/ItinenaryForm";
import IncludeExl from "./IncludeExl";


const SafariItinerary = () => {
  const itineraryData = [
    {
      id: 1,
      day: "Day 1",
      title: "Cape Town Arrival",
      location: "Cape Town",
      description:
        "Welcome to Africa! Your adventure begins in the stunning city of Cape Town, known for its scenic beauty and vibrant culture. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      images: [
        "https://www.backtoafricasafaris.com/wp-content/uploads/2024/04/tanzania-safari-itinerary.jpg",
      ],
    },
    {
      id: 2,
      day: "Day 2",
      title: "Cape Town City Tour",
      location: "Cape Town",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      description:
        "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
      images: [
        "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705703664229-F5COPDMP83G9TP9S533T/image-asset.jpeg?format=1500w",
      ],
    },
    {
      id: 3,
      day: "Day 3",
      title: "Africa Town City Tour",
      location: "Africa Town",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      description:
        "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
      images: [
        "https://cdn.kimkim.com/files/a/images/f848f3cc681da843f1eaf53d51ff801d537374cc/original-db81b0010461934f8ff9db8ce3e36ea5.jpg",
      ],
    },
    {
      id: 4,
      day: "Day 4",
      title: " Town City Tour",
      location: "Cape Town",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      description:
        "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. ",
      images: [
        "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705676270084-WSF2FRI3I7Z7AJX1HM4K/GettyImages-852006468.jpg",
      ],
    },
    {
      id: 5,
      day: "Day 5",
      title: " City Tour",
      location: "Cape africa Town",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      description:
        "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
      images: [
        "https://d22eux7aqicogj.cloudfront.net/assets/hero-sliders/kenya-kids.webp",
      ],
    },
    {
      id: 6,
      day: "Day 6",
      title: "Cape Town Arrival",
      location: "Cape Town",
      description:
        "Welcome to Africa! Your adventure begins in the stunning city of Cape Town, known for its scenic beauty and vibrant culture. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      images: [
        "https://www.backtoafricasafaris.com/wp-content/uploads/2024/04/tanzania-safari-itinerary.jpg",
      ],
    },
    {
      id: 7,
      day: "Day 7",
      title: "Cape Town City Tour",
      location: "Cape Town",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      description:
        "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
      images: [
        "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705703664229-F5COPDMP83G9TP9S533T/image-asset.jpeg?format=1500w",
      ],
    },
    {
      id: 8,
      day: "Day 8",
      title: "Africa Town City Tour",
      location: "Africa Town",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      description:
        "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
      images: [
        "https://cdn.kimkim.com/files/a/images/f848f3cc681da843f1eaf53d51ff801d537374cc/original-db81b0010461934f8ff9db8ce3e36ea5.jpg",
      ],
    },
    {
      id: 9,
      day: "Day 9",
      title: " Town City Tour",
      location: "Cape Town",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      description:
        "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. ",
      images: [
        "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705676270084-WSF2FRI3I7Z7AJX1HM4K/GettyImages-852006468.jpg",
      ],
    },
    {
      id: 10,
      day: "Day 10",
      title: " City Tour",
      location: "Cape africa Town",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      description:
        "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
      images: [
        "https://d22eux7aqicogj.cloudfront.net/assets/hero-sliders/kenya-kids.webp",
      ],
    },
    {
      id: 11,
      day: "Day 11",
      title: "Cape Town Arrival",
      location: "Cape Town",
      description:
        "Welcome to Africa! Your adventure begins in the stunning city of Cape Town, known for its scenic beauty and vibrant culture. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      images: [
        "https://www.backtoafricasafaris.com/wp-content/uploads/2024/04/tanzania-safari-itinerary.jpg",
      ],
    },
    {
      id: 12,
      day: "Day 12",
      title: "Cape Town City Tour",
      location: "Cape Town",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      description:
        "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
      images: [
        "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705703664229-F5COPDMP83G9TP9S533T/image-asset.jpeg?format=1500w",
      ],
    },
    {
      id: 13,
      day: "Day 13",
      title: "Africa Town City Tour",
      location: "Africa Town",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      description:
        "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
      images: [
        "https://cdn.kimkim.com/files/a/images/f848f3cc681da843f1eaf53d51ff801d537374cc/original-db81b0010461934f8ff9db8ce3e36ea5.jpg",
      ],
    },
    {
      id: 14,
      day: "Day 14",
      title: " Town City Tour",
      location: "Cape Town",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      description:
        "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district. ",
      images: [
        "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1705676270084-WSF2FRI3I7Z7AJX1HM4K/GettyImages-852006468.jpg",
      ],
    },
    {
      id: 15,
      day: "Day 15",
      title: " City Tour",
      location: "Cape africa Town",
      lodge: "Waterfront Breakwater Lodge (or similar)",
      description:
        "Explore the highlights of Cape Town including Table Mountain, Company Gardens, and the colorful Bo-Kaap district.",
      images: [
        "https://d22eux7aqicogj.cloudfront.net/assets/hero-sliders/kenya-kids.webp",
      ],
    },
  ];

  const { slug } = useParams(); // 👈 get trip id from URL
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await axiosInstance.get(`/api/trips/slug/${slug}`); // 👈 Adjust your backend route if needed
        setTrip(res.data);
      } catch (err) {
        console.error("Failed to load trip:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading trip...</p>;
  if (!trip) return <p className="text-center py-10">Trip not found.</p>;

  return (
    <>
      <div className="  mt-10 font-cormorant">
        <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
          <div className=" font-cormorant text-center ">
            <p className=" text-[#aaa086] font-quicksand uppercase">
              {trip.subtitle}
            </p>
            <div className=" max-w-3xl mx-auto mt-4">
              <h5 className=" text-[64px] font-medium text-center leading-[1.2] text-[#686868]">
                {/* Wildlife Odyssey: South Africa, Botswana & Zimbabwe */}
                {trip.title}
              </h5>
            </div>
            <p className=" max-w-xl mx-auto mt-4 mb-10 tracking-wide font-quicksand text-[#686868] text-lg capitalize">
              {/* All Departures are even smaller groups limited to 18 where to
              africa travel guests */}
              {trip.description}
            </p>
          </div>

          <div className=" flex flex-col md:flex-row justify-center  gap-8 md:gap-8  py-10">
            {/* Days */}
            <div className="text-center">
              <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
                Travelers
              </p>
              <p className="text-2xl font-quicksand text-[#686868]">
                {trip.rating}
              </p>
            </div>

            {/* From Price */}
            <div className="text-center md:border-l md:border-gray-300 md:pl-8">
              <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
                From (Per Person)
              </p>
              <p className="text-2xl font-quicksand text-[#686868]">
                {trip.price}
              </p>
            </div>

            {/* Journey Type */}
            {/* <div className="text-center md:border-l md:border-gray-300 md:pl-8">
              <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
                Journey Type
              </p>
              <p className="text-2xl font-quicksand text-[#686868]">
                River Cruise
              </p>
            </div> */}

            {/* Time of Year */}
            <div className="text-center md:border-l md:border-gray-300 md:pl-8">
              <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
                Days
              </p>
              <p className="text-2xl font-quicksand text-[#686868]">
                {trip.duration}
              </p>
            </div>

            {/* Cities & Landmarks */}
            <div className="text-center md:border-l md:border-gray-300 md:pl-8 max-w-xs">
              <p className="uppercase text-xl tracking-wide font-medium text-[#9a8f70] mb-4">
                Places to Visit
              </p>
              <p className="text-xl font-quicksand text-[#686868] leading-relaxed">
                {/* Amsterdam, Basel, Baden-Baden, Lucerne, Köln */}
                {trip.location}
              </p>
            </div>
          </div>
          <div>
            <img src={trip.image} className=" h-[650px] w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="bg-[#f6f1e9]">
        <Overview
          title={trip.overviewTitle}
          subtitle={trip.overviewSubTitle}
          description={trip.overviewDescription}
        />
        {/* <div className=" max-w-5xl mx-auto pb-16 ">
          <img src={map} alt="" className="w-full" />
        </div> */}

        <div className="max-w-5xl mx-auto pb-16">
          {trip.link ? (
            <div
              className="w-full h-[800px]"
              dangerouslySetInnerHTML={{ __html: trip.link }}
            />
          ) : (
            <p className="text-center text-gray-500">Map not available</p>
          )}
        </div>
      </div>
      <TripHighlights highlights={trip.tripHighlights} />
      {/* <Itinerary /> */}

      <Itinerary data={trip.itinerary} title="" />

      {/* <div className=" py-10">
        <AccordionSection
          aboutBooking={trip.aboutBooking}
          requirements={trip.requirements}
        />
      </div> */}

      <div className=" py-10">
        <IncludeExl
        aboutBooking={trip.aboutBooking}
          requirements={trip.requirements}
        />
      </div>

      {/* <div className="mt-16 text-center">
        <button
          onClick={() => setOpenForm(true)}
          className="bg-[#ac9e86] text-white font-light tracking-widest py-3 px-8 text-xs sm:text-sm uppercase hover:bg-[#978973] rounded-sm transition duration-200 font-quicksand"
        >
          Book Package
        </button>
      </div> */}

      {/* Modal */}
      {/* {openForm && (
        <ItinenaryForm onClose={() => setOpenForm(false)} trip={trip} />
      )} */}
<ItinenaryForm trip={trip}/>

      <JourneysCarousel />
    </>
  );
};

export default SafariItinerary;
