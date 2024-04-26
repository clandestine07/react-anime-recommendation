import React from "react";

const Recommendations = ({ recommendations }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 w-full mr-10 mt-10">
      {recommendations.length > 0 ? (
        recommendations.map((anime) => (
          <div
            key={anime.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md w-full"
          >
            <img
              src={anime.coverImage.large}
              alt={anime.title.english}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {anime.title.english}
              </h3>
              <button
                onClick={() => {
                  window.location.href = `/summary/${anime.id}`;
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white mt-2 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                View Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-black text-end ml-96 mt-10 w-full">
          No recommendations available.
        </p>
      )}
    </div>
  );
};

export default Recommendations;
