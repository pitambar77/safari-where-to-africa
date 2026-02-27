import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDestinationBySlug } from "../../api/destinationAPI.js";
import axiosInstance from "../../api/axiosInstance";

import Banner from "../../components/Banner";
import Overview from "../../components/Overview";
import DestinationGrid from "../../components/DestinationGrid";
import PackageCardGridSection from "../../components/PackageCardGridSection";
import SafariCard from "../../components/SafariCard";
import ExperienceCarousel from "../../components/ExperienceCarousel";
import AccommodationGrid from "../../components/AccommodationGrid";
import TravelguideSection from "../../components/TravelguideSection";
import PageSkeleton from "../../components/skeletons/PageSkeleton.jsx";
import PageNotFound from "../PageNotFound.jsx";

const BotswanaLandingPage = () => {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [travelGuides, setTravelGuides] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        setLoading(true);
        const res = await getDestinationBySlug(slug);
        setDestination(res.data);
        setDestination(res.data);
      } catch (err) {
        console.error("Failed to fetch destination:", err);
        setError("Failed to load destination data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [slug]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axiosInstance.get("/api/blog");

        if (!destination?.name) return;

        const filtered = data.filter(
          (blog) =>
            blog.category?.trim().toLowerCase() ===
            destination.name?.trim().toLowerCase(),
        );

        setTravelGuides(filtered);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    if (destination?.name) {
      fetchBlogs();
    }
  }, [destination]);

  // if (loading)
  //   return <PageSkeleton/>;
  // if (error) return <p className="text-center py-20 text-red-500">{error}</p>;
  // if (!destination) return <p className="text-center py-20">No data found.</p>;

  if (loading) return <PageSkeleton />;

  if (!loading && (!destination || error)) {
    return <PageNotFound />;
  }

  // ✅ Destructure the fields properly from the destination object
  const { hero, regions, trips, experiences, accommodations } = destination;

  // ✅ Flatten region-based nested data
  // const allTrips = regions?.flatMap((region) => region.trips || []) || [];
  const allTrips = [
    ...new Map(
      (regions?.flatMap((region) => region.trips || []) || []).map((trip) => [
        trip._id,
        trip,
      ]),
    ).values(),
  ];

  const allExperiences =
    regions?.flatMap((region) => region.experiences || []) || [];
  const allAccommodations =
    regions?.flatMap((region) => region.accommodations || []) || [];

  // ✅ Flatten region-based blogs (travel guides)
  const allTravelGuides =
    regions?.flatMap((region) => region.blogs || []) || [];

  // ✅ Handle experiences data safely
  const experienceData = experiences?.[0];

  const journeys = [
    {
      image: experienceData?.bannerImage,
      title: experienceData?.bannerTitle || "Experience the Wild",
      description:
        experienceData?.bannerDescription || "Unforgettable experiences await.",
      link: "#",
    },
    ...(experienceData?.highlights?.map((h) => ({
      image: h.image,
      title: h.name,
      description: h.description,
      link: "#",
    })) || []),
  ];

  return (
    <div>
      {/* ===== Hero Banner ===== */}
      <Banner
        title={hero?.title || "Explore Botswana"}
        subtitle={hero?.subtitle || "Discover wildlife and natural beauty"}
        imageUrl={
          hero?.bannerImage ||
          "https://www.discoverafrica.com/wp-content/uploads/2021/12/kzn_game_2.jpg"
        }
      />

      {/* ===== Overview Section ===== */}
      <div className="bg-[#faf5e9]">
        <Overview
          title={hero?.overviewTitle || "Welcome to Safari"}
          subtitle={
            hero?.overviewSubTitle ||
            "A place where nature, culture, and experiences come together to create unforgettable journeys. "
          }
          description={
            hero?.overviewDescription ||
            " This destination offers a unique blend of natural beauty, diverse landscapes, and meaningful travel experiences. From remarkable scenery and wildlife to local traditions and welcoming communities, every visit reveals something special."
          }
        />

        {/* ===== Regions Section ===== */}
        {/* {regions?.length > 0 && (
          <DestinationGrid
            data={regions.
              map((region) => ({
              name: region.name,
              image: region.image,
              alt: region.description,
              path: `/${slug}/${region.slug}`,
            }))}
            title=""
            buttonText={`More ${destination?.name || "Destination"} Areas`}
            onButtonClick={() => console.log("Load more areas")}
          />
        )} */}

        {regions?.length > 0 && (
          <DestinationGrid
            data={regions
              .filter((region) => {
                const name = region.name?.toLowerCase() || "";

                return (
                  !name.includes("package") &&
                  !name.includes("accommodation") &&
                  !name.includes("accomodation")
                );
              })
              .map((region) => ({
                name: region.name,
                image: region.image,
                alt: region.description,
                path: `/${slug}/${region.slug}`,
              }))}
            title=""
          />
        )}

        {/* {regions?.length > 0 && (
          <DestinationGrid
            data={regions
              .filter(
                (region) => !region.name?.toLowerCase().includes("package"),
              )
              .map((region) => ({
                name: region.name,
                image: region.image,
                alt: region.description,
                path: `/${slug}/${region.slug}`,
              }))}
            title=""
            // buttonText={`More ${destination?.name || "Destination"} Areas`}
            // onButtonClick={() => console.log("Load more areas")}
          />
        )} */}
      </div>

      {/* ===== Trips Section ===== */}
      {/* {trips?.length > 0 && (
        // <PackageCardGridSection
        //   title="Your Journeys"
        //   subtitle={`${destination?.name || "Botswana"} Trips to Inspire`}
        //   data={trips.map((trip) => ({
        //     id: trip._id,
        //     title: trip.title,
        //     country: destination?.name,
        //     image: trip.image,
        //     price: trip.price,
        //     nights: trip.duration,
        //   }))}
        //   CardComponent={SafariCard}
        //   emptyMessage="No trips found."
        // />

        <PackageCardGridSection
  title="Your Journeys"
  subtitle={`${destination?.name || "Botswana"} Trips to Inspire`}
  data={trips.map((trip) => ({
    id: trip._id,
    title: trip.title,
    country: destination?.name,
    image: trip.image,
    price: trip.price,
    nights: trip.duration,
  }))}
  CardComponent={SafariCard}
  onCardClick={(id) => navigate(`/trip/${id}`)} // 👈 Add this
  emptyMessage="No trips found."
/>
      )} */}

      {allTrips?.length > 0 && (
        <PackageCardGridSection
          title="Your Journeys"
          subtitle={`${destination?.name || "Botswana"} Trips to Inspire`}
          data={allTrips.map((trip) => ({
            id: trip.slug, // 👈 IMPORTANT CHANGE
            title: trip.title,
            country: destination?.name,
            image: trip.image,
            price: trip.price,
            nights: trip.duration,
          }))}
          CardComponent={SafariCard}
          onCardClick={(slug) => navigate(`/package/${slug}`)}
          emptyMessage="No trips found."
        />
      )}

      {/* ===== Experience Carousel ===== */}
      {/* {experienceData && experienceData.gallery?.images?.length > 0 && (
        <ExperienceCarousel
          title="Guest Favorites"
          description={experienceData.gallery?.description || ""}
          data={experienceData.gallery.images.map((img) => ({
             id: experienceData._id, // ✅ include id for navigation
            image: img.image,
            title: experienceData.bannerTitle,
          }))}
          onCardClick={(id) => navigate(`/experience/${id}`)} // 👈 Add this
        />
      )} */}

      {/* ===== Experience Carousel ===== */}
      {/* {experience?.length > 0 && (
        <ExperienceCarousel
          title="Guest Favorites"
          description={experienceData.gallery?.description || ""}
          data={experience.map((exp) => ({
             id: exp._id, // ✅ include id for navigation
            image: exp.bannerImage,
            title: exp.bannerTitle,
          }))}
          onCardClick={(id) => navigate(`/experience/${id}`)} // 👈 Add this
        />
      )} */}

      {allExperiences?.length > 0 && (
        <ExperienceCarousel
          title="Our Experiences"
          description={`Explore ${destination.name} Experiences`}
          data={allExperiences.map((exp) => ({
            id: exp.slug,
            image: exp.bannerImage,
            title: exp.bannerTitle,
          }))}
          onCardClick={(slug) => navigate(`/experience/${slug}`)}
        />
      )}

      {/* ===== Accommodations Section ===== */}

      {allAccommodations?.length > 0 && (
        <AccommodationGrid
          title="Overnight Accommodations"
          subtitle={`Places to Stay in ${destination?.name || " Africa"}`}
          data={allAccommodations
            .slice(0, 12) // ✅ limit to 12
            .map((acc) => ({
              id: acc.slug,
              image: acc.bannerImages?.[0],
              nights: `Ratings ${acc.nightsStay || ""}`,
              title: acc.name,
              location: acc.location,
              tag: acc.bannerDescription,
            }))}
          onCardClick={(slug) => navigate(`/accommodation/${slug}`)}
        />
      )}

      {/* {allAccommodations?.length > 0 && (
        <>
          <AccommodationGrid
            title="Overnight Accommodations"
            data={allAccommodations.slice(0, 12).map((acc) => ({
              id: acc.slug,
              image: acc.bannerImages?.[0],
              nights: `Ratings ${acc.nightsStay || ""}`,
              title: acc.name,
              location: acc.location,
              tag: acc.accommodationType,
            }))}
            onCardClick={(slug) => navigate(`/accommodation/${slug}`)}
          />

          {allAccommodations.length > 12 && (
            <div className="text-center mt-6">
              <Link
                to="/accommodations"
                className="bg-[#ac9e86] text-white cursor-pointer font-light tracking-widest py-3 px-8 text-xs sm:text-sm uppercase hover:bg-[#978973] rounded-sm transition duration-200 font-quicksand"
              >
                View All Accommodations
              </Link>
            </div>
          )}
        </>
      )} */}

      {/* ===== Travel Guide / Journeys Section ===== */}
      {/* {journeys.length > 0 && (
        <TravelguideSection
          heading="Journey Collection"
          subheading="On Safari with Where to Africa"
          journeys={journeys}
        />
      )} */}

      {travelGuides.length > 0 && (
        <TravelguideSection
          heading="Journey Collection"
          subheading={`Travel Insights for ${destination?.name}`}
          journeys={travelGuides.map((blog) => ({
            image: blog.thumbnail,
            title: blog.title,
            description:
              blog.sections
                ?.find((s) => s.type === "paragraph")
                ?.text?.slice(0, 100) + "...",
            link: `/travel-guide/${blog.slug}`,
          }))}
        />
      )}

      {/* <TravelguideSection
      heading="Journey Collection"
      subheading="On Safari with Where to Africa"
      journeys={travelguide}
    /> */}
    </div>
  );
};

export default BotswanaLandingPage;
