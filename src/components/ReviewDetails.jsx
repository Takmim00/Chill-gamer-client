import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../providers/AuthProvider";

const ReviewDetails = () => {
  const { id } = useParams();
  const { user } = useContext(authContext);
  const [review, setReview] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/review/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [id]);


  if (!review) return <span className="loading loading-bars loading-lg"></span>;
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <img
        src={review.coverImage}
        alt={review.title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-3xl font-bold text-gray-800">{review.title}</h2>
      <p className="text-gray-600 mt-2">{review.description}</p>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Rating:</span> {review.rating}/10
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Genre:</span> {review.genre}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Reviewer:</span> {review.username}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Email:</span> {review.userEmail}
        </p>
      </div>
      <button
        onClick={handleAddToWatchlist}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add to WatchList
      </button>
    </div>
  );
};

export default ReviewDetails;
