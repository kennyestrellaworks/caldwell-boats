export const NoResultsFound = () => {
  return (
    <div className="w-full py-10 animate-fade-in flex justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          No Results Found
        </h2>
        <p className="text-gray-500">
          No matches for your search. Try different keywords.
        </p>
      </div>
    </div>
  );
};
