import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <div className="flex flex-col items-center space-y-4">
        <AlertTriangle className="w-16 h-16 text-yellow-500" />
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl text-center max-w-md">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
