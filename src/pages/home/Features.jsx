import React from "react";
import { features } from "../../data/system";

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-accent-500">Caldwell Boats</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the best speedboat rental experience with premium service
            and top-quality boats
          </p>
        </div>
        {/* Features */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[4rem]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex relative w-full items-start space-x-4"
            >
              <div className="flex">
                <div className="flex relative w-[4rem] h-[4rem] justify-center items-center rounded-full bg-primary-600">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
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
