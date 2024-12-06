import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../providers/AuthProvider";




const MyReview = () => {
    const {user} = useContext(authContext)
    const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }, [user.email]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Review deleted successfully");
            setReviews(reviews.filter((review) => review._id !== id));
          }
        });
    }
  };

  const handleUpdate = (id) => {
    navigate(`/updateReview/${id}`);
  };

    return (
        <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">My Reviews</h1>
        {reviews.length > 0 ? (
          <table className="min-w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Title</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id} className="border-t w-full">
                  <td className="px-4 py-2">{review.title}</td>
                  <td className="px-4 py-2">{review.year}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleUpdate(review._id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No reviews found.</p>
        )}
      </div>
    );
};

export default MyReview;