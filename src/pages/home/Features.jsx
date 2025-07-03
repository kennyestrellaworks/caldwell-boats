import React from "react";
import { features } from "../../data/system";

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Caldwell Boats?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the best speedboat rental experience with premium service
            and top-quality boats
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex justify-center rounded-full bg-primary-700 rounded-full w-16 h-16 items-center">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
