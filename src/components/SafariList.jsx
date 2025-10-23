import { useEffect, useState } from "react";
import safarisData from "../data/safaris.json";
import SafariCard from "../pages/Accomodation/LandingPage/SafariCard";
import Filters from "./Filters";

const SafariList = () => {
  const [filteredSafaris, setFilteredSafaris] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("");

  const cardsPerPage = 8;

  // Extract unique destinations
  const destinations = [...new Set(safarisData.map((s) => s.country))];

  useEffect(() => {
    let filtered = [...safarisData];

    // Destination filter
    if (selectedDestination) {
      filtered = filtered.filter((s) => s.country === selectedDestination);
    }

    // Price filter
    if (selectedPriceRange) {
      if (selectedPriceRange === "below10k") {
        filtered = filtered.filter((s) => s.price < 10000);
      } else if (selectedPriceRange === "10kto15k") {
        filtered = filtered.filter((s) => s.price >= 10000 && s.price <= 15000);
      } else if (selectedPriceRange === "above15k") {
        filtered = filtered.filter((s) => s.price > 15000);
      }
    }

    // Sorting
    if (sortBy === "priceAsc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceDesc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "nameAsc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredSafaris(filtered);
    setCurrentPage(1); // reset to first page when filters change
  }, [selectedDestination, selectedPriceRange, sortBy]);

  const totalPages = Math.ceil(filteredSafaris.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = filteredSafaris.slice(startIndex, startIndex + cardsPerPage);

  const handleReset = () => {
    setSelectedDestination("");
    setSelectedPriceRange("");
    setSortBy("");
    setFilteredSafaris(safarisData);
  };

  useEffect(() => {
    setFilteredSafaris(safarisData);
  }, []);

  return (
    <div className=" py-12 bg-[#f8f5f0] min-h-screen">
        <div className=" max-w-[1320px] mx-auto px-4">

    
      {/* Header */}
     

      {/* Filters */}
      <Filters
        destinations={destinations}
        selectedDestination={selectedDestination}
        setSelectedDestination={setSelectedDestination}
        selectedPriceRange={selectedPriceRange}
        setSelectedPriceRange={setSelectedPriceRange}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onReset={handleReset}
      />

      {/* Cards Grid */}
      {currentCards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCards.map((safari) => (
            <SafariCard key={safari.id} safari={safari} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">No safaris found.</p>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-12 gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-8 h-8 rounded-md ${
              currentPage === i + 1
                ? "bg-[#aaa086] text-white"
                : "bg-white border text-[#aaa086] hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 font-quicksand py-2 bg-[#aaa086] rounded-md text-gray-700 hover:bg-gray-200"
          >
            Next Page
          </button>
        )}
      </div>
          </div>
    </div>
  );
};

export default SafariList;
