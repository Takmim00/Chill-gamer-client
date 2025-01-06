import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { authContext } from "../providers/AuthProvider";

const ReviewDetails = () => {
  const { id } = useParams();
  const { user } = useContext(authContext);
  const [review, setReview] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    fetch(`https://chill-gamer-server-seven.vercel.app/review/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));

    const addedGame = localStorage.getItem(`watchList-${id}`);
    if (addedGame) {
      setIsAdded(true);
    }
  }, [id]);

  const handleAddToWatchList = () => {
    if (!user) {
      toast.error("You must be logged in to add to the watchList!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const watchListData = {
      ...review,
      email: user.email,
      displayName: user.displayName,
    };

    fetch("https://chill-gamer-server-seven.vercel.app/watchList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchListData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setIsAdded(true);
          toast.success("Added to WatchList!", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      });
  };

  if (!review) return <span className="loading loading-bars loading-lg"></span>;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg border rounded-lg">
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
          <span className="font-semibold">Name:</span> {review.displayName}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Email:</span> {review.email}
        </p>
      </div>
      <button
        onClick={handleAddToWatchList}
        disabled={isAdded}
        className={`mt-6 px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
          ${
            isAdded
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
      >
        {isAdded ? "Added to WatchList" : "Add to WatchList"}
      </button>
      <ToastContainer />
    </div>
  );
};

export default ReviewDetails;
