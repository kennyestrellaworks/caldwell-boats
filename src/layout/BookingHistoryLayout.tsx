import { NavLink, Outlet } from "react-router-dom";
import { users } from "../data/users";
import { speedboats } from "../data/speedBoats";

export const BookingHistoryLayout = () => {
  // All users
  const tempUser = "37065281rbiyjmfa";
  const user = users.find((user) => user.id === tempUser);
  //   console.log("user", user);

  return (
    <div className="flex flex-col mt-10 w-full">
      <div className="flex">
        <div className="flex gap-3 mb-6">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Active
          </NavLink>

          <NavLink
            to="completed"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Completed
          </NavLink>

          <NavLink
            to="cancelled"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Cancelled
          </NavLink>
        </div>
      </div>
      <Outlet context={{ user, speedboats }} />
    </div>
  );
};
