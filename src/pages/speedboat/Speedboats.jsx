import { FaMagnifyingGlass } from "react-icons/fa6";
import { PageHeading } from "../../components/PageHeading";
import { ChevronDown, ArrowDown } from "lucide-react";
import { speedboats } from "../../data/speedBoats";
import { useSearchParams } from "react-router-dom";
import { Contact } from "../home/Contact";
import { CTA } from "../../components/CTA";
import { useState } from "react";
import { SpeedBoatCard } from "../../components/SpeedBoatCard";

export const Speedboats = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryParms = searchParams.get("search") || "";
  const typeFilterParams = searchParams.get("type") || "select type";
  const sortFilterParams = searchParams.get("sort") || "sort";

  // Image loaded?
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Load more items
  const loadLimit = 9;
  const [displayCount, setDisplayCount] = useState(loadLimit);

  // console.log("typeFilterParams", typeFilterParams);

  const boatTypes = [...new Set(speedboats.map((boat) => boat.type))];
  console.log("boatTypes", boatTypes);

  // Search input
  const handleSearchChange = (value) => {
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      newParams.set("search", value);
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  };

  // Type select
  const handleTypeFilter = (value) => {
    const newParams = new URLSearchParams(searchParams);
    // console.log("value handleTypeFilter", value);

    if (value !== "select type") {
      newParams.set("type", value);
    } else {
      newParams.delete("type");
    }
    setSearchParams(newParams);
  };

  // Sort select
  const handleSortFilter = (value) => {
    const newParams = new URLSearchParams(searchParams);
    // console.log("value handleSortFilter", value);

    if (value !== "sort") {
      newParams.set("sort", value);
    } else {
      newParams.delete("sort");
    }
    setSearchParams(newParams);
  };

  // Filtering speedboats
  const filterSpeedBoats = speedboats
    .filter((boat) => {
      // Search input
      const matchesSearch =
        boat.name.toLowerCase().includes(searchQueryParms.toLowerCase()) ||
        boat.description
          .toLowerCase()
          .includes(searchQueryParms.toLowerCase()) ||
        boat.length.toLowerCase().includes(searchQueryParms.toLowerCase()) ||
        boat.capacity.toString().includes(searchQueryParms.toLowerCase()) ||
        boat.speed.toLowerCase().includes(searchQueryParms.toLowerCase()) ||
        boat.features.some((feature) =>
          feature.toLowerCase().includes(searchQueryParms.toLowerCase())
        ) ||
        boat.type.toLowerCase().includes(searchQueryParms.toLowerCase());
      // Select type
      const typeFilterChange =
        typeFilterParams === "select type" ||
        boat.type.toLowerCase() === typeFilterParams.toLowerCase();

      return matchesSearch && typeFilterChange;
    })
    .sort((a, b) => {
      if (sortFilterParams === "name-ascending")
        return a.name.localeCompare(b.name);
      if (sortFilterParams === "name-descending")
        return b.name.localeCompare(a.name);
      if (sortFilterParams === "price-low-high") return a.price - b.price;
      if (sortFilterParams === "price-high-low") return b.price - a.price;
      return 0;
    });

  const speedboatDisplay = filterSpeedBoats.slice(0, displayCount);
  const hasMoreItems = displayCount < filterSpeedBoats.length;

  // console.log("speedboatDisplay", speedboatDisplay);
  // console.log("typeFilter", typeFilterParams);
  // console.log("displayCount", displayCount);
  // console.log("hasMoreItems", hasMoreItems);

  const isFiltered =
    searchQueryParms !== "" ||
    typeFilterParams !== "select type" ||
    sortFilterParams !== "sort";

  // Load more button
  const loadMoreItems = () => {
    setDisplayCount((prev) =>
      Math.min(prev + loadLimit, filterSpeedBoats.length)
    );
    console.log("displayCount", displayCount);
  };

  const resetItemDisplay = () => {
    setDisplayCount(loadLimit);
  };

  return (
    <div className="animate-fade-in">
      <PageHeading
        headingTitle={"Our Fleet"}
        headingParagraph={
          "Discover our collection of 30+ premium speedboats, perfect for your every adventure"
        }
      />
      {/* Search and Filter Bar */}
      <div className="my-10">
        <div id="speedboats__filter" className="w-full">
          <div className="max-w-7xl mx-auto bg-gray-50 pt-4 px-4">
            {/* Filter */}
            <div className="flex flex-col md5:flex-row gap-4">
              {/* Search input */}
              <div className="flex-1 md:flex-[1.6_1-0%] relative">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaMagnifyingGlass className="w-4 h-4 text-gray-500" />
                  </div>

                  <input
                    name="text"
                    type="text"
                    value={searchQueryParms}
                    onChange={(e) => {
                      handleSearchChange(e.target.value);
                      resetItemDisplay();
                    }}
                    placeholder="Search speedboats..."
                    className="w-full bg-white border border-gray-200 text-gray-700 py-2 pl-10 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              {/* Select */}
              <div className="flex flex-1 w-full gap-4">
                <div className="relative flex w-[60%]">
                  <select
                    name="typeFilter"
                    value={typeFilterParams}
                    onChange={(e) => {
                      handleTypeFilter(e.target.value);
                      resetItemDisplay();
                    }}
                    className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-2 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="select type">Select Type</option>
                    {boatTypes.map((item, index) => {
                      return (
                        <option key={index} value={item.toLowerCase()}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div className="relative flex w-[60%]">
                  <select
                    name="statusFilter"
                    value={sortFilterParams}
                    onChange={(e) => {
                      handleSortFilter(e.target.value);
                      resetItemDisplay();
                    }}
                    className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-2 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="sort">Sort</option>
                    <option value="name-ascending">Name: Ascending</option>
                    <option value="name-descending">Name: Descending</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </div>
              {isFiltered && (
                <button
                  className="hover:underline"
                  onClick={() => {
                    setSearchParams({});
                    resetItemDisplay();
                  }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Speedboats */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speedboatDisplay.map((boat, index) => {
                return (
                  <SpeedBoatCard
                    key={index}
                    boat={boat}
                    isImageLoaded={isImageLoaded}
                    setIsImageLoaded={setIsImageLoaded}
                  />
                );
              })}
            </div>
            {hasMoreItems ? (
              <div className="w-full inline-flex items-center justify-center mt-10">
                <button
                  onClick={() => loadMoreItems()}
                  className="flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 px-8 rounded-lg text-sm font-regular transition-colors duration-200"
                >
                  <ArrowDown className="h-[16px]" />
                  Load More
                </button>
              </div>
            ) : null}
          </div>
        </section>
      </div>
      <Contact />
      <CTA />
    </div>
  );
};
