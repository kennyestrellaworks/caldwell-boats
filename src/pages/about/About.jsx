import { IoBoatSharp } from "react-icons/io5";
import { PageHeading } from "../../components/PageHeading";
import { stats } from "../../data/system";
import { GiBoatPropeller, GiSailboat } from "react-icons/gi";
import { Team } from "./Team";

export const About = () => {
  return (
    <div className="animate-fade-in">
      {" "}
      <PageHeading
        headingTitle={"About Us"}
        headingParagraph={
          "Pioneering luxury speedboat rentals with a passion for adventure and commitment to excellence"
        }
      />
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-[2.5rem] font-bold font-robotoSlab text-gray-900 mb-6 leading-snug">
                <span className="text-accent-500">Clarkson and Jasmine</span>,
                Founders of{" "}
                <span className="text-accent-500">Caldwell Boats</span>,
                Craftsmanship, Purpose, and Passion for the Water
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Clarkson Caldwell is the passionate owner and founder of
                Caldwell Boats, a premier boat rental business dedicated to
                offering unforgettable maritime adventures. A lifelong
                enthusiast of the open sea, Clarkson turned his personal
                collection of speedboats, cruisers, and leisure vessels into a
                thriving service for travelers eager to explore the country’s
                pristine coastlines and scenic islands. His mission is simple:
                to provide tourists and locals alike with the freedom to relax,
                discover hidden coves, and experience the unmatched tranquility
                of life on the water.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                By his side is Jasmine Caldwell, co-owner and business director
                of Caldwell Boats. With a solid background in business
                administration and marketing, Jasmine has been instrumental in
                transforming Clarkson’s vision into a polished, customer-focused
                enterprise. She manages the company’s strategic growth, guest
                experience programs, and marketing efforts, ensuring Caldwell
                Boats not only delivers premium adventures but also builds
                lasting relationships with its clientele.
              </p>
              <p className="text-lg text-gray-700">
                Together, Clarkson and Jasmine bring the perfect balance of
                passion and professionalism to the business. While Clarkson
                curates and maintains a fleet that blends comfort, performance,
                and style, Jasmine elevates the brand through thoughtful service
                initiatives and strategic partnerships. Their shared mission: to
                help guests create meaningful memories — whether it’s families
                setting off for a sun-soaked afternoon, couples chasing sunsets,
                or friends carving through waves.
              </p>
              <p className="text-lg text-gray-700">
                Through Caldwell Boats, the Caldwells continue to share their
                love for the sea, ensuring every guest leaves with a story worth
                telling.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/davjgeymf/image/upload/v1751642985/creator_un2qzg.png"
                alt="Speedboat on ocean"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              By the <span className="text-accent-500">Numbers</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence in numbers
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-accent-500">Mission & Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex text-5xl justify-center">
                <div className="bg-accent-200 rounded-full p-4">
                  <IoBoatSharp className="text-accent-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
                Quality First
              </h3>
              <p className="text-gray-700 text-xl mt-8">
                We believe quality is more than a standard. It is a mindset.
                From the smallest detail to the final result, we prioritize
                excellence. With a focus on craftsmanship, consistency, and
                improvement, we aim to deliver work that earns trust and exceeds
                expectations.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex text-5xl justify-center">
                <div className="bg-accent-200 rounded-full p-4">
                  <GiSailboat className="text-accent-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
                Ocean Respect
              </h3>
              <p className="text-gray-700 text-xl mt-8">
                We are deeply connected to the water, it's where our work lives
                and where our boats belong. Protecting the ocean is not just a
                responsibility but a core part of who we are. From sustainable
                materials to mindful practices, we strive to minimize our
                environmental impact and contribute to the health of marine
                ecosystems.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex text-5xl justify-center">
                <div className="bg-accent-200 rounded-full p-4">
                  <GiBoatPropeller className="text-accent-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
                Customer Excellence
              </h3>
              <p className="text-gray-700 text-xl mt-8">
                Our customers are at the center of everything we do. We listen
                closely, communicate clearly, and deliver with intention. Every
                interaction is an opportunity to build trust, solve problems,
                and exceed expectations. From first conversation to final
                delivery, we are committed to creating a seamless, respectful,
                and memorable experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
      <Team />
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-ocean-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Set Sail?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of satisfied customers who trust AquaSpeed for their
            ocean adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Call Us Today
            </a>
            <a
              href="mailto:info@aquaspeed.com"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
