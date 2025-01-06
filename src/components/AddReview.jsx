import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authContext } from "../providers/AuthProvider";

const AddReview = () => {
  const { user } = useContext(authContext);
  const genres = ["Action", "RPG", "Adventure", "Puzzle", "Sports"];

  const handleAddReview = (e) => {
    e.preventDefault();

    const form = e.target;
    const coverImage = form.coverImage.value;
    const title = form.title.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genre = form.genre.value;
    const email = user.email;
    const displayName = user.displayName;

    const addReview = {
      coverImage,
      title,
      description,
      rating,
      year,
      genre,
      email,
      displayName,
    };

    fetch("https://chill-gamer-server-seven.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Review added successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Add New Review
      </h2>
      <form
        onSubmit={handleAddReview}
        className="grid md:grid-cols-2 grid-cols-1 gap-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Game Cover Image/Thumbnail
          </label>
          <input
            type="text"
            name="coverImage"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter the game cover image URL"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Game Title/Name
          </label>
          <input
            type="text"
            name="title"
            className=" p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter the game title"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Review Description
          </label>
          <textarea
            name="description"
            className=" p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write a detailed review"
            rows="1"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            className=" p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter rating (e.g., 10)"
            min="1"
            max="10"
            step="0.1"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Publishing Year
          </label>
          <input
            type="number"
            name="year"
            className=" p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter the publishing year"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <select
            name="genre"
            className=" p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select a genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            User Email
          </label>
          <input
            type="email"
            name="email"
            value={user?.email}
            className=" p-2 w-full border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            name="displayName"
            value={user?.displayName}
            className=" p-2 w-full border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>
        <div className="col-span-2 ">
          <button
            type="submit"
            className="w-full bg-green-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit Review
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddReview;
