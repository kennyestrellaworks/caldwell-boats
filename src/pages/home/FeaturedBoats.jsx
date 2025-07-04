import { speedboats } from "../../data/speedBoats";
import { Link } from "react-router-dom";
import { Sailboat } from "lucide-react";
import { SpeedBoatCard } from "../../components/SpeedBoatCard";
import { useState } from "react";

export const FeaturedBoats = () => {
  const featuredBoats = speedboats.filter((boat) => boat.featured);
  // Image loaded?
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  console.log("featuredBoats", featuredBoats);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-accent-500">Speedboats</span>
          </h2>
          <p className="text-xl text-gray-600">
            Discover our most popular speedboat rentals
          </p>
        </div>
        {/* Featured boats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBoats.map((boat, index) => {
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
        <div className="flex items-center justify-center mt-12 w-full">
          <Link
            to="speedboats"
            className="flex flex-row items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-sm font-regular transition-colors duration-200"
          >
            <Sailboat className="h-[16px]" />
            View All Boats
          </Link>
        </div>
      </div>
    </section>
  );
};
