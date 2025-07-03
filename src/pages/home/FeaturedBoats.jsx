import { speedboats } from "../../data/speedBoats";
import { Link } from "react-router-dom";
import { Calendar, Eye, Sailboat } from "lucide-react";

export const FeaturedBoats = () => {
  const featuredBoats = speedboats.filter((boat) => boat.featured);

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
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={boat.image}
                    alt={boat.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-accent-500/70 text-white px-3 py-1 font-regular rounded-full text-sm">
                    {boat.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-primary-700/70 text-white px-3 py-1 font-regular rounded-full text-sm">
                    ${boat.price}/day
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{boat.name}</h3>
                  <p className="text-gray-600 mb-4 h-[100px]">
                    {boat.description}
                  </p>
                  <div className="grid grid-cols-2 gap-[10px] mb-4 text-sm text-gray-700">
                    <div>
                      <span className="font-medium">Length:</span> {boat.length}
                    </div>
                    <div>
                      <span className="font-medium">Capacity:</span>{" "}
                      {boat.capacity} people
                    </div>
                    <div>
                      <span className="font-medium">Max Speed:</span>{" "}
                      {boat.speed}
                    </div>
                    <div>
                      <span className="font-medium">Price:</span>{" "}
                      <span className="text-primary-600 font-bold">
                        ${boat.price}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Features:
                    </h4>
                    <div className="flex gap-[4px ] items-center flex-wrap gap-1">
                      {boat.features.map((item, index) => {
                        return (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                          >
                            {item}
                          </span>
                        );
                      })}
                      <span className="text-gray-500 text-xs">
                        +{boat.features.length - 3}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <Link
                      to="speedboats"
                      className="flex flex-1 items-center justify-center bg-primary-50 hover:bg-primary-600 text-primary-400 hover:text-white py-3 rounded-lg text-sm font-regular transition-colors duration-200"
                    >
                      <Eye className="h-[16px]" />
                      View Details
                    </Link>
                    <Link
                      to="speedboats"
                      className="flex flex-1 items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg text-sm font-regular transition-colors duration-200"
                    >
                      <Calendar className="h-[16px]" />
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
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
