import { Link } from "react-router-dom";
import heroSectionVideo from "../../assets/video/hero-section-video.mp4";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-900 via-ocean-800 to-primary-900 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Video */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroSectionVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Unleash the Adventure with
            <span className="text-accent-400 block">Caldwell Boats</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-slide-up">
            Premium speedboat rentals for unforgettable moments on the water.
            Book your ride today and chase the horizon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="speedboats"
              className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg text-lg font-regular transition-all duration-300 hover:scale-105"
            >
              Explore Fleet
            </Link>
            <Link
              to="signup"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-900 text-white px-8 py-4 rounded-lg text-lg font-regular transition-all duration-300"
            >
              Signup
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <ArrowDown />
        </div>
      </div>
    </section>
  );
};
