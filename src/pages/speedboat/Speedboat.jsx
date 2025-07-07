import { Link, useParams } from "react-router-dom";
import { speedboats } from "../../data/speedBoats";
import { CTA } from "../../components/CTA";
import { Contact } from "../home/Contact";
import { Calendar, Gauge, Users2 } from "lucide-react";
import { BiRuler } from "react-icons/bi";
import { useEffect, useState } from "react";
import { FeaturedBoats } from "../../components/FeaturedBoats";
import { CTA2 } from "../../components/CTA2";
import { Slider } from "../../components/Slider";
import { ImageLoadSpinner } from "../../components/ImageLoadSpinner";

export const Speedboat = () => {
  const { id } = useParams();
  const boat = speedboats.find((speedboat) => speedboat.id === id);

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
      {/* ****** */}
      <div className="mt-[4rem]">
        <section className="relative bg-gray-50 max-w-7xl mx-auto p-10">
          <div className="relative w-full grid grid-cols-3 gap-2">
            <div className="relative col-span-2 h-[400px] bg-gray-200 overflow-hidden rounded-lg">
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
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              {boat.gallery.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-full overflow-hidden rounded-lg"
                >
                  <ImageLoadSpinner
                    src={image}
                    alt={boat.name}
                    classNames={
                      "w-full h-full transition-transform duration-300 hover:scale-105 cursor-pointer"
                    }
                    onClick={() => openSlider(index + 1)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="my-10">
            {/* ********  */}
            <div className="flex flex-row justify-between items-start">
              <div className="flex flex-col w-[80%]">
                <h2 className="text-3xl font-bold text-blue-600 mb-2">
                  {boat.name}
                </h2>
                <div className="text-lg text-gray-500 font-medium mt-6">
                  {boat.description.split("\n\n").map((para, index) => (
                    <p key={index} className="mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex">
                <Link
                  to={`/speedboats/${boat.id}/booking`}
                  className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Now
                </Link>
              </div>
            </div>
            <div className="flex gap-8 mt-10">
              {/* Specifications */}
              <div className="flex flex-1">
                <div className="flex w-full items-start">
                  <div className="grid grid-cols-2 gap-6 items-start  w-full md:grid-cols-4">
                    <div>
                      <div className="bg-accent-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                        <BiRuler className="h-6 w-6 text-accent-600" />
                      </div>
                      <div className="font-bold text-xl text-gray-900">
                        {boat.length}
                      </div>
                      <div className="text-sm text-gray-600">Length</div>
                    </div>
                    <div>
                      <div className="bg-accent-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                        <Users2 className="h-6 w-6 text-accent-600" />
                      </div>
                      <div className="font-bold text-xl text-gray-900">
                        {boat.capacity} People
                      </div>
                      <div className="text-sm text-gray-600">Capacity</div>
                    </div>
                    <div>
                      <div className="bg-accent-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                        <Gauge className="h-6 w-6 text-accent-600" />
                      </div>
                      <div className="font-bold text-xl text-gray-900">
                        {boat.speed}
                      </div>
                      <div className="text-sm text-gray-600">Max Speed</div>
                    </div>
                    <div>
                      <div className="bg-accent-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                        <Calendar className="h-6 w-6 text-accent-600" />
                      </div>
                      <div className="font-bold text-xl text-gray-900">
                        ${boat.price}
                      </div>
                      <div className="text-sm text-gray-600">Per Day</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Features */}
              <div className="flex-1 flex-col items-start">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Features & Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
                  {boat.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-200/40 rounded-lg px-3 py-2"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <p className="text-md text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Detailed Specifications */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-200/40 rounded-lg p-4">
                  <div className="font-medium text-lg text-gray-900 mb-1">
                    Engine
                  </div>
                  <div className="text-gray-700">
                    {boat.specifications.engine}
                  </div>
                </div>
                <div className="bg-gray-200/40 rounded-lg p-4">
                  <div className="font-medium text-lg text-gray-900 mb-1">
                    Fuel Type
                  </div>
                  <div className="text-gray-700">
                    {boat.specifications.fuel}
                  </div>
                </div>
                <div className="bg-gray-200/40 rounded-lg p-4">
                  <div className="font-medium text-lg text-gray-900 mb-1">
                    Range
                  </div>
                  <div className="text-gray-700">
                    {boat.specifications.range}
                  </div>
                </div>
                <div className="bg-gray-200/40 rounded-lg p-4">
                  <div className="font-medium text-lg text-gray-900 mb-1">
                    Crew
                  </div>
                  <div className="text-gray-700">
                    {boat.specifications.crew}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CTA2 />
      <FeaturedBoats />
      <Contact />
      <CTA />
    </div>
  );
};
