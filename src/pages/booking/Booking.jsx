import { Link, useParams } from "react-router-dom";
import { speedboats } from "../../data/speedBoats";
import { useEffect, useState } from "react";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { durations, locations, timeSlots } from "../../data/system";
import { ChevronDown, Clock, MapPin, Users } from "lucide-react";
import { ImageGalleryWIthSpinner } from "../../components/ImageGalleryWIthSpinner";
import { Slider } from "../../components/Slider";
import toast from "react-hot-toast";
import { ImageLoadSpinner } from "../../components/ImageLoadSpinner";

export const Booking = () => {
  const [step, setStep] = useState(1);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    date: "",
    time: "09:00",
    duration: "4",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    location: "miami-beach",
    specialRequests: "",
  });

  // Slider component
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Disable scroll when slider is open
  useEffect(() => {
    if (isSliderOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSliderOpen]);

  const openSlider = (index) => {
    setSelectedImageIndex(index);
    setIsSliderOpen(true);
  };

  const closeSlider = () => setIsSliderOpen(false);

  const goToNext = () => {
    setSlideDirection("slideRight");
    setSelectedImageIndex((prev) => (prev + 1) % boat.gallery.length);
  };

  const goToPrev = () => {
    setSlideDirection("slideLeft");
    setSelectedImageIndex(
      (prev) => (prev - 1 + boat.gallery.length) % boat.gallery.length
    );
  };
  // Slider component

  const boat = speedboats.find((speedboat) => speedboat.id === id);
  //   console.log("boat", boat);

  const calculateTotal = () => {
    const duration = durations.find((d) => d.value === formData.duration);
    return Math.round(boat.price * (duration?.multiplier || 1));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
    } else {
      toast.success(
        "Booking submitted successfully! We will contact you shortly to confirm your reservation."
      );
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Slider component */}
      {isSliderOpen && (
        <Slider
          images={boat.gallery}
          selectedIndex={selectedImageIndex}
          onClose={closeSlider}
          onNext={goToNext}
          onPrev={goToPrev}
          slideDirection={slideDirection}
          setSlideDirection={setSlideDirection}
        />
      )}
      {/* Slider component */}
      <div className="my-[4rem]">
        <section className="relative bg-gray-50 max-w-7xl mx-auto p-10">
          <div className="flex flex-row gap-8">
            {/* **********  */}
            <div className="flex w-[45%]">
              <div className="flex items-start">
                <div className="relative w-full grid grid-cols-1">
                  <div className="relative col-span-2 h-[15rem] bg-gray-200 overflow-hidden rounded-lg">
                    {/* <ImageGalleryWIthSpinner
                      src={boat.gallery[0]}
                      alt="Featured"
                      containerClass="h-full col-span-2 transition-transform duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => openSlider(0)}
                    /> */}
                    <div className="relative w-full h-full overflow-hidden">
                      <ImageLoadSpinner
                        src={boat.gallery[0]}
                        alt={boat.name}
                        classNames={
                          "transition-transform duration-300 hover:scale-105 cursor-pointer"
                        }
                        onClick={() => openSlider(0)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-2">
                    {boat.gallery.slice(1).map((image, index) => (
                      // <ImageGalleryWIthSpinner
                      //   key={index}
                      //   src={image}
                      //   alt={`Thumbnail ${index + 1}`}
                      //   containerClass="aspect-square cursor-pointer"
                      //   className="transition-transform duration-300 hover:scale-105"
                      //   onClick={() => openSlider(0)}
                      // />
                      <div
                        key={index}
                        className="relative w-full h-full overflow-hidden rounded-lg"
                      >
                        <ImageLoadSpinner
                          src={image}
                          alt={boat.name}
                          classNames={
                            "transition-transform duration-300 hover:scale-105 cursor-pointer"
                          }
                          onClick={() => openSlider(index + 1)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* **********  */}
            <div className="flex w-[65%]">
              <div className="flex flex-col w-full">
                <div className="px-6 py-4 bg-gray-50 w-full">
                  <div className="flex flex-col">
                    <h1 className="text-3xl font-bold mb-2">
                      Enjoy Your Vacation on the Waves
                    </h1>
                    <p className="text-gray-600 mb-6">
                      Book your speedboat today and get ready to cruise the
                      waves in style. Whether you’re chasing sunsets, exploring
                      hidden coves, or enjoying a day out with friends and
                      family, we’ve got the perfect ride waiting for you. Your
                      next unforgettable journey starts here.
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-4 space-x-4">
                    <div
                      className={`flex items-center ${
                        step >= 1 ? "text-blue-600" : "text-gray-400"
                      }`}
                    >
                      <div
                        className={`text-lg h-11 w-11 rounded-md flex items-center justify-center ${
                          step >= 1 ? "bg-blue-600 text-white" : "bg-gray-300"
                        }`}
                      >
                        1
                      </div>
                      <span className="ml-2 text-lg font-medium">
                        Booking Details
                      </span>
                    </div>
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <div
                      className={`flex items-center ${
                        step >= 2 ? "text-blue-600" : "text-gray-400"
                      }`}
                    >
                      <div
                        className={`text-lg h-11 w-11 rounded-md flex items-center justify-center ${
                          step >= 2 ? "bg-blue-600 text-white" : "bg-gray-300"
                        }`}
                      >
                        2
                      </div>
                      <span className="ml-2 text-lg font-medium">
                        Contact Info
                      </span>
                    </div>
                  </div>
                </div>
                {/* Form  */}
                <form onSubmit={handleSubmit} className="p-6">
                  {step === 1 ? (
                    <div className="space-y-6">
                      {/* Date and Time */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative flex-col">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {/* <Calendar className="inline h-4 w-4 mr-1" /> */}
                            Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split("T")[0]}
                            required
                            className="w-full bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 custom-date"
                          />
                          <div className="absolute top-[2.6rem] right-0 flex items-center pr-3 pointer-events-none">
                            <HiMiniCalendarDateRange className="w-4 h-4 text-gray-500" />
                          </div>
                        </div>
                        <div className="relative flex-col">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Clock className="inline h-4 w-4 mr-1" />
                            Start Time
                          </label>
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                          <div className="absolute top-[2.6rem] right-0 flex items-center pr-3 pointer-events-none">
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          </div>
                        </div>
                      </div>

                      {/* Duration and Guests */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative flex-col">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Clock className="inline h-4 w-4 mr-1" />
                            Duration
                          </label>
                          <select
                            name="duration"
                            value={formData.duration}
                            onChange={handleInputChange}
                            className="w-full appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            {durations.map((duration) => (
                              <option
                                key={duration.value}
                                value={duration.value}
                              >
                                {duration.label}
                              </option>
                            ))}
                          </select>
                          <div className="absolute top-[2.6rem] right-0 flex items-center pr-3 pointer-events-none">
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          </div>
                        </div>
                        <div className="relative flex-col">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Users className="inline h-4 w-4 mr-1" />
                            Number of Guests
                          </label>
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="w-full appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            {Array.from(
                              { length: boat.capacity },
                              (_, i) => i + 1
                            ).map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? "Guest" : "Guests"}
                              </option>
                            ))}
                          </select>
                          <div className="absolute top-[2.6rem] right-0 flex items-center pr-3 pointer-events-none">
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          </div>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="relative flex-col">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MapPin className="inline h-4 w-4 mr-1" />
                          Pickup Location
                        </label>
                        <select
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          {locations.map((location) => (
                            <option key={location.value} value={location.value}>
                              {location.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute top-[2.6rem] right-0 flex items-center pr-3 pointer-events-none">
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>

                      {/* Price Summary */}
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700">
                            Base Rate ({formData.duration} hours)
                          </span>
                          <span className="font-medium">
                            ${calculateTotal()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-semibold">
                          <span>Total</span>
                          <span className="text-blue-600">
                            ${calculateTotal()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          *Final price may vary based on additional services and
                          requirements
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="000 0000 0000"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Special Requests or Notes
                        </label>
                        <textarea
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Any special requests, dietary restrictions, or additional information..."
                        />
                      </div>

                      {/* Terms */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            required
                            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <div className="text-sm text-gray-700">
                            I agree to the{" "}
                            <a
                              href="#"
                              className="text-blue-600 hover:underline"
                            >
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                              href="#"
                              className="text-blue-600 hover:underline"
                            >
                              Cancellation Policy
                            </a>
                            . I understand that a deposit may be required to
                            confirm the booking.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Action buttons */}
                  <div className="flex justify-between pt-6 mt-6 border-t">
                    {step === 2 && (
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        Back
                      </button>
                    )}
                    <div className="flex space-x-3 ml-auto">
                      <Link
                        to="/speedboats"
                        className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        {step === 1 ? "Continue" : "Submit Booking"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
