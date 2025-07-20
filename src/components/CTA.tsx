import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-primary-900 via-ocean-800 to-primary-900 text-white overflow-hidden sm:px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      ></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-accent-400/20 rounded-full animate-bounce-gentle"></div>
      <div
        className="absolute bottom-10 right-10 w-16 h-16 bg-ocean-400/20 rounded-full animate-bounce-gentle"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-12 h-12 bg-primary-400/20 rounded-full animate-bounce-gentle"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-accent-500/20 text-accent-200 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
            Limited Time Offer
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Ocean Adventure
            <span className="block text-accent-400">Awaits!</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Don't let another perfect day slip away. Book your dream speedboat
            experience today and create memories that will last a lifetime. The
            ocean is calling – will you answer?
          </p>
        </div>
        {/* ***** */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link
            to="booking"
            className="group bg-accent-600 hover:bg-accent-700 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
          >
            <span>Book Your Adventure Now</span>
            <svg
              className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-sm text-gray-300 uppercase tracking-wide">
                Or call us
              </div>
              <a
                href="tel:+15551234567"
                className="text-xl font-bold text-accent-400 hover:text-accent-300 transition-colors duration-200"
              >
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
        {/* ***** */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold text-lg mb-2">Instant Confirmation</h3>
            <p className="text-gray-300 text-sm">
              Get confirmed in minutes, not hours
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-bold text-lg mb-2">Best Price Guarantee</h3>
            <p className="text-gray-300 text-sm">
              We match any competitor's price
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="font-bold text-lg mb-2">100% Safe & Insured</h3>
            <p className="text-gray-300 text-sm">
              Full insurance coverage included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
