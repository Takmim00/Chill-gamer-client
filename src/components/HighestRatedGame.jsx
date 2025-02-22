import { NavLink } from "react-router-dom";

const HighestRatedGame = ({ review }) => {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl my-6">Highest Rated Game</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <button
                className="w-full bg-green-400 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              >
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

export default HighestRatedGame;
