import { Link, NavLink, Outlet } from "react-router-dom";
import { users, type UsersType } from "../data/users";
import { ImageLoadSpinner } from "../components/ImageLoadSpinner";

export const ProfileLayout = () => {
  const tempUserId = "37065281rbiyjmfa";
  const user: UsersType | undefined = users.find(
    (user) => user.id === tempUserId
  );

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          User Not Found
        </h1>
        <p className="text-gray-600">
          The user you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-blue-600 hover:underline mt-4 block">
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="animate-fade-in">
        <div className="my-[4rem]">
          <section className="relative bg-gray-50 max-w-7xl mx-auto p-10">
            <div className="flex flex-col gap-8 md8:flex-row">
              {/* Left **********  */}
              <div className="flex md8:w-[35%]">
                <div className="flex w-full flex-col gap-6 md:flex-row md8:flex-col">
                  {/* ********** */}
                  <div className="flex items-start gap-4 md:flex-col md:w-[50%]  md8:w-full">
                    <div className="flex gap-4">
                      <div className="relative w-[6rem] h-[6rem] overflow-hidden rounded-full">
                        <ImageLoadSpinner
                          src={user.image}
                          alt={user.firstName + user.lastName}
                          classNames={
                            "transition-transform duration-300 hover:scale-105 cursor-pointer"
                          }
                        />
                        {/* <img
                          className="w-full h-full object-cover"
                          src={user.image}
                          alt={user.firstName + user.lastName}
                        /> */}
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <h1 className="text-3xl font-bold text-gray-900">
                        {user.firstName} {user.lastName}
                      </h1>
                      <p className="text-gray-600">
                        Member since{" "}
                        {new Date(user.createdAt).toLocaleDateString()}
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>
                          {user?.activityStream?.length || 0} total bookings
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* ********** */}
                  <div className="flex flex-col w-full bg-white p-6 rounded-2xl shadow md:w-[50%] md8:w-full">
                    <h2 className="text-xl font-semibold mb-4">
                      Activity Summary
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Card 1 */}
                      <div className="flex flex-col bg-yellow-50 p-4 rounded-xl text-center w-full">
                        <p className="flex w-full text-sm justify-center text-gray-600 mb-2 md:w-[70px] md:mx-auto">
                          Total Bookings
                        </p>
                        <h3 className="text-2xl font-bold text-yellow-600">
                          {user?.activityStream?.length || 0}
                        </h3>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-xl text-center">
                        <p className="flex w-full text-sm justify-center text-gray-600 mb-2 md:w-[70px] md:mx-auto">
                          Active Bookings
                        </p>
                        <h3 className="text-2xl font-bold text-indigo-600">
                          {
                            user.activityStream.filter(
                              (item) => item.bookingStatus === "active"
                            ).length
                          }
                        </h3>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-green-50 p-4 rounded-xl text-center">
                        <p className="flex w-full text-sm justify-center text-gray-600 mb-2 md:w-[70px] md:mx-auto">
                          Completed Trips
                        </p>
                        <h3 className="text-2xl font-bold text-green-600">
                          {
                            user.activityStream.filter(
                              (item) => item.bookingStatus === "completed"
                            ).length
                          }
                        </h3>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-red-100 p-4 rounded-xl text-center">
                        <p className="flex w-full text-sm justify-center text-gray-600 mb-2 md:w-[70px] md:mx-auto">
                          Cancelled Booking
                        </p>
                        <h3 className="text-2xl font-bold text-red-600">
                          {
                            user.activityStream.filter(
                              (item) => item.bookingStatus === "cancelled"
                            ).length
                          }
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right **********  */}
              <div className="flex md8:w-[65%]">
                <div className="flex flex-col w-full">
                  <div className="flex gap-2 mt-6 border-b w-full">
                    <NavLink
                      to="/profile"
                      end
                      className={({ isActive }) =>
                        `font-medium transition duration-200 py-4 px-4 bg-gray-100 ${
                          isActive
                            ? "text-ocean-600 border-b-2 border-b-primary-500 bg-primary-200"
                            : "text-gray-600 hover:text-blue-600"
                        }`
                      }
                    >
                      Profile Details
                    </NavLink>
                    <NavLink
                      to="booking-history"
                      className={({ isActive }) =>
                        `font-medium transition duration-200 py-4 px-4 bg-gray-100 ${
                          isActive
                            ? "text-blue-600 border-b-2 border-b-primary-500 bg-primary-100"
                            : "text-gray-600 hover:text-blue-600"
                        }`
                      }
                    >
                      Booking History
                    </NavLink>
                  </div>
                  <div className="flex">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
