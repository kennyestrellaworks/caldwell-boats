import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiX } from "react-icons/bi";

type SlideDirection = "slideLeft" | "slideRight" | "" | undefined;

interface SliderProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  slideDirection: SlideDirection;
  setSlideDirection: React.Dispatch<React.SetStateAction<SlideDirection>>;
}

export const Slider: React.FC<SliderProps> = ({
  images,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
  slideDirection,
  setSlideDirection,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [selectedIndex]);

  return (
    <div className="fixed inset-0 z-[6000] bg-black bg-opacity-90 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white p-2 hover:text-gray-300 z-50"
      >
        <BiX size={32} />
      </button>

      {/* Previous Button */}
      <button
        onClick={() => {
          setSlideDirection("slideLeft");
          onPrev();
        }}
        className="absolute left-5 text-white hover:text-gray-300 p-2 z-50"
      >
        <BiChevronLeft size={40} />
      </button>

      {/* Image Container */}
      <div
        className={`relative max-w-[90%] max-h-[80%] overflow-hidden transition-transform duration-500 flex items-center justify-center ${
          slideDirection === "slideLeft"
            ? "animate-slide-left"
            : slideDirection === "slideRight"
            ? "animate-slide-right"
            : ""
        }`}
      >
        {/* Spinner while loading */}
        {!loaded && (
          <>
            <div className="absolute inset-0 flex items-center justify-center z-[1000]">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black z-[900] rounded-lg"></div>
          </>
        )}

        <img
          src={images[selectedIndex]}
          alt={`Slide ${selectedIndex + 1}`}
          className={`rounded-lg max-h-[80vh] mx-auto object-contain transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => {
            setLoaded(true);
            setTimeout(() => setSlideDirection(""), 50);
          }}
        />
      </div>

      {/* Next Button */}
      <button
        onClick={() => {
          setSlideDirection("slideRight");
          onNext();
        }}
        className="absolute right-5 text-white hover:text-gray-300 p-2 z-50"
      >
        <BiChevronRight size={40} />
      </button>
    </div>
  );
};
