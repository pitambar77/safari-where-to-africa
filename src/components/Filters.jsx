const Filters = ({
  destinations,
  selectedDestination,
  setSelectedDestination,
  selectedPriceRange,
  setSelectedPriceRange,
  sortBy,
  setSortBy,
  onReset,
}) => {
  return (
    <div className="">
      <div className=" flex flex-wrap gap-4 mb-8 items-center justify-between">
        <div className="flex flex-wrap gap-4 items-center font-quicksand">
          {/* Destination Filter */}

          <p className=" mt-3 font-quicksand font-semibold uppercase tracking-wider text-[#aaa086] ">
            Filter by:
          </p>

          <select
            className="border font-quicksand rounded-sm px-3 py-3 bg-white text-[#aaa086]"
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
          >
            <option value="">Destinations</option>
            {destinations.map((dest) => (
              <option key={dest} value={dest}>
                {dest}
              </option>
            ))}
          </select>

          <select
            className="border rounded-sm px-3 py-3 bg-white text-[#aaa086]"
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
          >
            <option value="">Experiences</option>
            {destinations.map((dest) => (
              <option key={dest} value={dest}>
                {dest}
              </option>
            ))}
          </select>

          {/* Price Range */}
          <select
            className="border rounded-sm px-3 py-3 bg-white text-[#aaa086]"
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value="">Price Range (Per Person)</option>
            <option value="below10k">Below $10,000</option>
            <option value="10kto15k">$10,000 - $15,000</option>
            <option value="above15k">Above $15,000</option>
          </select>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <p className="mt-3 font-quicksand font-semibold uppercase tracking-wider text-[#aaa086]">
            Sort By
          </p>
          <select
            className=" font-quicksand border rounded-sm px-3 py-3 bg-white text-[#aaa086]"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Iconic</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="nameAsc">Name: A–Z</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4 font-quicksand">
        <div className="flex items-center gap-2">
          <button className="bg-[#aaa086] text-white text-sm px-4 py-2 rounded-md">
            Safaris
          </button>
          <button onClick={onReset} className="text-sm px-4 py-2 rounded-md">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
