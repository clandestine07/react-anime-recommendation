import { fetchRecommendations } from "./api";
import { useState, useEffect } from "react";

const Summary = ({ animeId }) => {
  const [animeDetails, setAnimeDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchRecommendations(animeId);
        setAnimeDetails(data);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      }
    };

    fetchDetails();
  }, [animeId]);

  if (!animeDetails) {
    return <div className="text-white">Loading...</div>;
  }

  const { title, description, coverImage, averageScore, characters } =
    animeDetails;

  return (
    <div className="max-w-screen-lg mx-auto mt-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      {coverImage && (
        <img
          src={coverImage.large}
          alt={title?.english || "Anime Cover"}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          {title?.english || "N/A"}
        </h2>
        <p className="text-white mb-4">
          {description || "No description available."}
        </p>
        <p className="text-white mb-4">
          Average Score: {averageScore || "N/A"}
        </p>
        <h3 className="text-xl font-bold text-white mb-2">Characters:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {characters?.edges.map((edge) => {
            const character = edge.node;
            return (
              <div key={character.id} className="text-center">
                {character.image && (
                  <img
                    src={character.image.large}
                    alt={character.name.full}
                    className="mx-auto w-24 h-24 rounded-full mb-2"
                  />
                )}
                <p className="text-white">{character.name.full}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Summary;
