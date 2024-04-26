import React, { useState } from "react";
import { fetchRecommendations } from "./api";
import Recommendations from "./recommendation";

const GenreForm = () => {
  const [genre, setGenre] = useState("action");
  const [recommendations, setRecommendations] = useState([]);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await fetchRecommendations(genre);
    setRecommendations(data);
  };

  return (
    <div className="mt-8 ml-40 text-center max-w-7xl">
      <form onSubmit={handleSubmit}>
        <label className="block text-black py-3 text-lg mb-2" htmlFor="genre">
          Choose a genre:
        </label>
        <select
          id="genre"
          name="genre"
          value={genre}
          onChange={handleGenreChange}
          className="px-4 py-2 rounded-md bg-gray-800 text-white"
        >
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="sci-fi">sci-fi</option>
          <option value="sports">sports</option>
          <option value="romance">romance</option>
          <option value="comedy">comedy</option>
          <option value="Psychological">Psychological</option>
          <option value="Adventure">Adventure</option>
          <option value="fantasy">fantasy</option>
          <option value="Horror">Horror</option>
          <option value="thriller">thriller</option>
          <option value="supernatural">supernatural</option>
        </select>
        <button
          type="submit"
          className="mt-2 ml-8 px-1 py-2 bg-blue-500 rounded-md text-white font-bold hover:bg-blue-600"
        >
          Get Recommendations
        </button>
      </form>
      <Recommendations recommendations={recommendations} />
    </div>
  );
};

export default GenreForm;
