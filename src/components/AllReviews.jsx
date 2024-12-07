import { NavLink, useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";

const AllReviews = () => {
  const review = useLoaderData();
  // const [sortBy, setSortBy] = useState("rating");
  // const [ascOrder, setOrder] = useState("asc");
  // useEffect(() => {
  //   // Fetch sorted data whenever sortBy or order changes
  //   fetch(
  //     `http://localhost:5000/review/sort?sortBy=${sortBy}&order=${ascOrder}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, [sortBy, ascOrder]);

  // const handleSortChange = (e) => {
  //   const [field, direction] = e.target.value.split("-");
  //   setSortBy(field);
  //   setOrder(direction);
  // };
  return (
    <div>
      <h2 className="text-center font-bold text-2xl my-6">
        Highest Rated Game
      </h2>

      {/* <div className="text-center mb-6">
        <select
          className="border border-gray-300 rounded-md px-4 py-2"
          onChange={handleSortChange}
        >
          <option value="rating-desc">Sort by Rating: High to Low</option>
          <option value="rating-asc">Sort by Rating: Low to High</option>
          <option value="year-desc">Sort by Year: Newest First</option>
          <option value="year-asc">Sort by Year: Oldest First</option>
        </select>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {review.map((game) => (
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
