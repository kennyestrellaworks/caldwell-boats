import { Calendar, Eye } from "lucide-react";
import { FaSpinner } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ImageLoadSpinner } from "./ImageLoadSpinner";

export const SpeedBoatCard = ({ boat, index }) => {
  return (
    <div
      key={index}
      className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
    >
      <div className="relative w-full h-64 bg-gray-200 overflow-hidden flex items-center justify-center">
        <ImageLoadSpinner
          src={boat.gallery[0]}
          alt={boat.name}
          classNames={
            "h-full w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
          }
        />
        <div className="absolute top-4 left-4 bg-accent-500/70 text-white px-3 py-1 font-regular rounded-full text-sm">
          {boat.type}
        </div>
        <div className="absolute top-4 right-4 bg-primary-700/70 text-white px-3 py-1 font-regular rounded-full text-sm">
          ${boat.price}/day
        </div>
      </div>
      <div className="relative w-full p-6 h-[27rem] sm:h-[24rem] sm3:h-[33rem] md:h-[31rem] md2:h-[28rem] md3:h-[27rem] md6:h-[25rem] md7:h-[31rem] md10:h-[30rem] xl:h-[27rem]">
        <h3 className="text-xl font-semibold mb-2">{boat.name}</h3>
        <p className="text-gray-600 mb-4 h-[5rem] sm:h-[4.5rem] sm3:h-[7rem] md2:h-[6rem] md6:h-[5rem] md7:h-[7rem] md10:h-[5.8rem]">
          {boat.description.split("\n\n")[0].length > 100
            ? boat.description.split("\n\n")[0].substring(0, 100) + "..."
            : boat.description.split("\n\n")[0]}
        </p>
        <div className="grid grid-cols-2 mb-4 text-sm text-gray-700 sm3:gap-4">
          <div className="sm3:flex sm3:flex-col md2:flex-row md7:flex-col xl:flex-row">
            <span className="font-medium md:mr-2">Length:</span> {boat.length}
          </div>
          <div className="sm3:flex sm3:flex-col md2:flex-row md7:flex-col xl:flex-row">
            <span className="font-medium md:mr-2">Capacity:</span>{" "}
            {boat.capacity} people
          </div>
          <div className="sm3:flex sm3:flex-col md2:flex-row md7:flex-col xl:flex-row">
            <span className="font-medium md1:mr-2">Max Speed:</span>{" "}
            {boat.speed}
          </div>
          <div className="sm3:flex sm3:flex-col md2:flex-row md7:flex-col xl:flex-row">
            <span className="font-medium md1:mr-2">Price:</span>{" "}
            <span className="text-primary-600 font-bold">${boat.price}</span>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
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
        <div className="absolute w-full flex left-0 bottom-0">
          <div className="flex w-full gap-2 px-6 pb-6">
            <Link
              to={`/speedboats/${boat.id}`}
              className="flex flex-1 items-center justify-center bg-primary-50 hover:bg-primary-600 text-primary-400 hover:text-white py-3 rounded-lg text-sm font-regular transition-colors duration-200"
            >
              <Eye className="h-[16px]" />
              View Details
            </Link>
            <Link
              to={`/speedboats/${boat.id}/booking`}
              className="flex flex-1 items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg text-sm font-regular transition-colors duration-200"
            >
              <Calendar className="h-[16px]" />
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
