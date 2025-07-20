import { ImageLoadSpinner } from "./ImageLoadSpinner";
import { Rating } from "./Rating";

type Booking = {
  bookingId: string;
  bookingStatus: "active" | "completed" | "cancelled" | string;
  createdAt: string;
  bookingDuration: number;
  bookingGuests: { name: string }[]; // adjust based on actual structure
  bookingRating: number;
};

type Speedboat = {
  id: string;
  name: string;
  image: string;
  price: number;
};

type BookingHistoryCardProps = {
  boat: Speedboat;
  booking: Booking;
  getStatusIcon: (status: string) => React.ReactNode;
  getStatusColor: (status: string) => string;
};

export const BookingHistoryCard = ({
  boat,
  booking,
  getStatusIcon,
  getStatusColor,
}: BookingHistoryCardProps) => {
  return (
    <div className="flex flex-col relative w-full items-start justify-between">
      <div className="relative flex flex-col sm3:flex-row">
        <div className="relative w-16 h-16 flex">
          <ImageLoadSpinner
            src={boat.image}
            alt={boat.name}
            classNames={"w-16 h-16 rounded-lg object-cover"}
          />
        </div>
        <div className="flex flex-col items-start mt-4 sm3:mt-0 sm3:ml-4">
          <h3 className="font-semibold text-gray-900">{boat.name}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
            <span>{new Date(booking.createdAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>{booking.bookingDuration} hours </span>
            <span>{booking.bookingGuests.length} guests</span>
          </div>
          <div className="flex items-center mt-2">
            <Rating rating={booking.bookingRating} />
            <span className="ml-2">{booking.bookingRating}</span>
            <span className="ml-2 text-sm text-gray-600">
              Booking{" "}
              <span className="font-semibold">#{booking.bookingId}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="text-left absolute top-0 right-0">
        <div className="font-semibold text-gray-900">${boat.price}</div>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${getStatusColor(
            booking.bookingStatus
          )}`}
        >
          {getStatusIcon(booking.bookingStatus)}
          <span className="ml-1 capitalize">{booking.bookingStatus}</span>
        </span>
      </div>
    </div>
  );
};
