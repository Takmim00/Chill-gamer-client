import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const AllReviews = () => {
  const review = useLoaderData();
  const [genre, setGenre] = useState("");
  // const [rating, setRating] = useState("");
  const [filteredReviews, setFilteredReviews] = useState(review);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const uniqueGenres = [...new Set(review.map((game) => game.genre))];
  const fetchSortedReviews = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/review/all?sortField=${sortField}&sortOrder=${sortOrder}`
      );
      const data = await response.json();
      setFilteredReviews(data);
    } catch (error) {
      console.error("Error fetching sorted reviews:", error);
    }
  };

  useEffect(() => {
    fetchSortedReviews();
  }, []);

  useEffect(() => {
    if (genre) {
      setFilteredReviews(review.filter((game) => game.genre === genre));
    } else {
      setFilteredReviews(review);
    }
  }, [genre, review]);

  // useEffect(() => {
  //   if (rating) {
  //     setFilteredReviews(review.filter((game) => game.rating === rating));
  //   } else {
  //     setFilteredReviews(review);
  //   }
  // }, [rating, review]);
  return (
    <div>
      <h2 className="text-center font-bold text-2xl my-6">All Game</h2>
      <div className="flex justify-end my-4">
        <select
          className="border border-gray-300 p-2 rounded-md"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          {uniqueGenres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end my-4 space-x-2">
        <select
          className="border border-gray-300 p-2 rounded-md"
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="rating">Rating</option>
          <option value="year">Year</option>
        </select>

        <select
          className="border border-gray-300 p-2 rounded-md"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={fetchSortedReviews}
        >
          Apply Sort
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((game) => (
          <div
            key={game._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={game.coverImage}
              alt={game.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {game.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Genre: <span className="font-medium">{game.genre}</span>
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Rating: <span className="font-medium">{game.rating}/10</span>
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Released: <span className="font-medium">{game.year}</span>
              </p>
              <NavLink to={`/reviewDetails/${game._id}`}>
                <button className="w-full bg-green-400 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Explore Details
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
