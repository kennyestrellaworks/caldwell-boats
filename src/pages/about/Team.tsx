import { useState, type FC } from "react";
import { users, type UsersType } from "../../data/users";
import { FaSpinner } from "react-icons/fa6";

const teamMembers: UsersType[] = users.filter((user) => user.role !== "user");

export const Team: FC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState<Record<number, boolean>>(
    {}
  );

  const handleImageLoad = (index: number) => {
    setIsImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-20 bg-gray-50 sm:px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-accent-500">Team</span>
          </h2>
          <p className="text-xl text-gray-600">
            The passionate professionals behind Caldwell Boats
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md5:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-[36rem] bg-slate-200 overflow-hidden">
                {!isImageLoaded[index] && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60">
                    <FaSpinner className="w-8 h-8 text-gray-500 animate-spin" />
                  </div>
                )}

                <img
                  src={member.image}
                  alt={`${member.firstName} ${member.lastName}`}
                  onLoad={() => handleImageLoad(index)}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isImageLoaded[index] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.firstName} {member.lastName}
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
