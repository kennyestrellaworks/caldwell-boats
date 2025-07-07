import { Link } from "react-router-dom";

export const CTA2 = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-800 to-ocean-700 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6">Ready to Set Sail?</h2>
        <p className="text-xl mb-8 text-gray-200">
          Join thousands of satisfied customers who trust Caldwell Boats for
          their ocean adventures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to=""
            className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Call Us Today
          </Link>
          <Link
            to=""
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Send Email
          </Link>
        </div>
      </div>
    </section>
  );
};
