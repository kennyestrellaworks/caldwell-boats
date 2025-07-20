import { useOutletContext } from "react-router-dom";
import { BookingHistoryCard } from "../../components/BookingHistoryCard";
import { BiCalendar, BiCheckCircle, BiXCircle } from "react-icons/bi";
import { CgLock } from "react-icons/cg";

type Booking = {
  bookingId: string;
  bookingStatus: "active" | "completed" | "cancelled" | string;
  createdAt: string;
  bookingDuration: number;
  bookingGuests: { name: string }[];
  bookingRating: number;
  speedboatId: string;
};

type Speedboat = {
  id: string;
  name: string;
  image: string;
  price: number;
};

type OutletContextType = {
  user: {
    activityStream: Booking[];
  };
  speedboats: Speedboat[];
};

export const BookingActive = () => {
  const { user, speedboats } = useOutletContext<OutletContextType>();

  const activeBooking = user.activityStream.filter(
    (item) => item.bookingStatus === "active"
  );

  const getStatusColor = (status: string) => {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <BiCheckCircle className="h-4 w-4" />;
      case "active":
        return <CgLock className="h-4 w-4" />;
      case "cancelled":
        return <BiCalendar className="h-4 w-4" />;
      default:
        return <BiXCircle className="h-4 w-4" />;
    }
  };

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

              if (!boat) return null;

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
