import { useState } from "react";
import { users } from "../../data/users";
import { FaSpinner } from "react-icons/fa6";

const teamMembers = users.filter((user) => user.role !== "user");
// console.log("teamMembers ", teamMembers);

export const Team = () => {
  const [isImageLoaded, setIsImageLoaded] = useState();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            The passionate professionals behind AquaSpeed
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaSpinner className="w-8 h-8 text-gray-500 animate-spin" />
                </div>
              )}
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-[36rem] object-cover transition-opacity duration-500 ${
                  isImageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setIsImageLoaded(true)}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {member.designation}
                </p>
                <p className="text-gray-700">
                  {member.description.split("\n\n")[0].length > 300
                    ? member.description.split("\n\n")[0].substring(0, 300) +
                      "..."
                    : member.description.split("\n\n")[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
