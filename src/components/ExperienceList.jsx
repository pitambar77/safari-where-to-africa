import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import SafariCard from "../pages/Accomodation/LandingPage/SafariCard";
import Overview from "./Overview";

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 8;

  // =============================
  // FETCH EXPERIENCES
  // =============================
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get(
          "http://where-to-africa-safari-backend.manoramaseoservice.com/api/experience",
        );
        setExperiences(res.data || []);
      } catch (error) {
        console.log("Experience Fetch Error:", error);
      }
    };

    fetchExperiences();
  }, []);

  // =============================
  // NORMALIZE DATA FOR CARD
  // =============================
  const allExperiences = useMemo(() => {
    return experiences.map((exp) => ({
      id: exp._id,
      title: exp.bannerTitle,
      price: exp.experienceInfo?.pricePerPerson || "",
      nights: exp.experienceInfo?.days || "",
      image: exp.bannerImage || "",
      slug: exp.slug,
      destination: exp.destinationId?.name || "",
    }));
  }, [experiences]);

  // =============================
  // PAGINATION
  // =============================
  const totalPages = Math.ceil(allExperiences.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = allExperiences.slice(
    startIndex,
    startIndex + cardsPerPage,
  );

  // =============================
  // RENDER
  // =============================
  return (
    <div className="pb-16 bg-[#fbf6ea]">
      <Overview
        title="Journey Into Africa "
        subtitle="“Where to Africa” brings you closer to wild places, local stories, and small details most travellers miss completely on safari trips."
        description="Choose experiences across Zambia, Zimbabwe, South Africa, Botswana, Tanzania, Kenya, and Namibia, including game drives, guided walks, river journeys, desert days, and cultural visits, all smoothly planned to suit the seasons, your comfort, and your pace."
      />

      <div className="px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {currentCards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCards.map((item) => (
              <SafariCard
                key={item.id}
                safari={item}
                link={`/experience/${item.slug}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">
            No experiences found.
          </p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-2 flex-wrap">
            {currentPage > 1 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-4 py-2 bg-white border text-[#aaa086] rounded-md"
              >
                Prev
              </button>
            )}

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-8 h-8 rounded-md ${
                  currentPage === index + 1
                    ? "bg-[#aaa086] text-white"
                    : "bg-white border text-[#aaa086]"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 bg-[#aaa086] text-white rounded-md"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceList;
