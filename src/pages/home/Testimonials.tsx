import type { FC } from "react";
import { testimonials } from "../../data/system";

export const Testimonials: FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-ocean-50 relative overflow-hidden sm:px-4">
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stories from the <span className="text-accent-500">Ocean</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our adventurous
            customers have to say about their unforgettable experiences with
            Caldwell Boats.
          </p>
        </div>
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                index === 1 ? "md:scale-105 border-2 border-accent-200" : ""
              }`}
            >
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-6 w-6 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                "{testimonial.comment}"
              </blockquote>
              <div className="flex items-start md:flex-col md:items-center md1:items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-ocean-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex flex-col md:items-center md1:items-start">
                  <p className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-primary-600 font-medium">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Trust indicators */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">1000+</div>
              <div className="text-sm text-gray-600 font-medium">
                Happy Customers
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600">4.9★</div>
              <div className="text-sm text-gray-600 font-medium">
                Average Rating
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ocean-600">5+</div>
              <div className="text-sm text-gray-600 font-medium">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
