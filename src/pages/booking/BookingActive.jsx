import { useOutletContext } from "react-router-dom";
import { Calendar, CheckCircle, Clock, XCircle } from "lucide-react";
import { BookingHistoryCard } from "../../components/BookingHistoryCard";
// import { users } from "../../data/users";

export const BookingActive = () => {
  const { user, speedboats } = useOutletContext();

  const activeBooking = user.activityStream.filter(
    (item) => item.bookingStatus === "active"
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "active":
        return "text-blue-600 bg-blue-100";
      case "cancelled":
        return "text-orange-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "active":
        return <Clock className="h-4 w-4" />;
      case "cancelled":
        return <Calendar className="h-4 w-4" />;
      default:
        return <XCircle className="h-4 w-4" />;
    }
  };

  // console.log("activeBooking", activeBooking);
  // console.log("user ", user);
  // console.log("speedboats ", speedboats);

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full [">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Active Booking
        </h2>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col w-full gap-2">
          {activeBooking.length === 0 ? (
            <h1>No active booking</h1>
          ) : (
            activeBooking.map((booking, index) => {
              const boat = speedboats.find(
                (boat) => boat.id === booking.speedboatId
              );
              return (
                <div
                  key={index}
                  className="flex p-6 w-full bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <BookingHistoryCard
                    boat={boat}
                    booking={booking}
                    getStatusIcon={getStatusIcon}
                    getStatusColor={getStatusColor}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
